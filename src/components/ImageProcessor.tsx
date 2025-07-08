
import { useState, useCallback } from 'react';
import { pipeline, env } from '@huggingface/transformers';
import { Button } from '@/components/ui/button';

// Configure transformers.js
env.allowLocalModels = false;
env.useBrowserCache = false;

const MAX_IMAGE_DIMENSION = 1024;

function resizeImageIfNeeded(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, image: HTMLImageElement) {
  let width = image.naturalWidth;
  let height = image.naturalHeight;

  if (width > MAX_IMAGE_DIMENSION || height > MAX_IMAGE_DIMENSION) {
    if (width > height) {
      height = Math.round((height * MAX_IMAGE_DIMENSION) / width);
      width = MAX_IMAGE_DIMENSION;
    } else {
      width = Math.round((width * MAX_IMAGE_DIMENSION) / height);
      height = MAX_IMAGE_DIMENSION;
    }

    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(image, 0, 0, width, height);
    return true;
  }

  canvas.width = width;
  canvas.height = height;
  ctx.drawImage(image, 0, 0);
  return false;
}

const addNeonEffect = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  
  // Add subtle neon glow effect to the edges
  for (let i = 0; i < data.length; i += 4) {
    const alpha = data[i + 3];
    if (alpha > 0) {
      // Enhance colors slightly for neon effect
      data[i] = Math.min(255, data[i] * 1.1);     // Red
      data[i + 1] = Math.min(255, data[i + 1] * 1.1); // Green  
      data[i + 2] = Math.min(255, data[i + 2] * 1.1); // Blue
    }
  }
  
  ctx.putImageData(imageData, 0, 0);
  
  // Add outer glow effect
  ctx.shadowColor = 'rgba(139, 92, 246, 0.6)';
  ctx.shadowBlur = 15;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  
  // Create a copy for the glow
  const glowCanvas = document.createElement('canvas');
  glowCanvas.width = canvas.width;
  glowCanvas.height = canvas.height;
  const glowCtx = glowCanvas.getContext('2d');
  
  if (glowCtx) {
    glowCtx.drawImage(canvas, 0, 0);
    ctx.globalCompositeOperation = 'destination-over';
    ctx.drawImage(glowCanvas, 0, 0);
    ctx.globalCompositeOperation = 'source-over';
  }
};

const removeBackground = async (imageElement: HTMLImageElement): Promise<Blob> => {
  try {
    console.log('Starting background removal process...');
    const segmenter = await pipeline('image-segmentation', 'Xenova/segformer-b0-finetuned-ade-512-512', {
      device: 'webgpu',
    });
    
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    if (!ctx) throw new Error('Could not get canvas context');
    
    const wasResized = resizeImageIfNeeded(canvas, ctx, imageElement);
    console.log(`Image ${wasResized ? 'was' : 'was not'} resized. Final dimensions: ${canvas.width}x${canvas.height}`);
    
    const imageData = canvas.toDataURL('image/jpeg', 0.8);
    console.log('Processing with segmentation model...');
    const result = await segmenter(imageData);
    
    if (!result || !Array.isArray(result) || result.length === 0 || !result[0].mask) {
      throw new Error('Invalid segmentation result');
    }
    
    const outputCanvas = document.createElement('canvas');
    outputCanvas.width = canvas.width;
    outputCanvas.height = canvas.height;
    const outputCtx = outputCanvas.getContext('2d');
    
    if (!outputCtx) throw new Error('Could not get output canvas context');
    
    outputCtx.drawImage(canvas, 0, 0);
    
    const outputImageData = outputCtx.getImageData(0, 0, outputCanvas.width, outputCanvas.height);
    const data = outputImageData.data;
    
    // Apply inverted mask to alpha channel
    for (let i = 0; i < result[0].mask.data.length; i++) {
      const alpha = Math.round((1 - result[0].mask.data[i]) * 255);
      data[i * 4 + 3] = alpha;
    }
    
    outputCtx.putImageData(outputImageData, 0, 0);
    
    // Add neon effect
    addNeonEffect(outputCanvas, outputCtx);
    
    console.log('Background removed and neon effect applied');
    
    return new Promise((resolve, reject) => {
      outputCanvas.toBlob(
        (blob) => {
          if (blob) {
            resolve(blob);
          } else {
            reject(new Error('Failed to create blob'));
          }
        },
        'image/png',
        1.0
      );
    });
  } catch (error) {
    console.error('Error processing image:', error);
    throw error;
  }
};

const loadImage = (file: File): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = URL.createObjectURL(file);
  });
};

export const ImageProcessor = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [processedImageUrl, setProcessedImageUrl] = useState<string | null>(null);

  const handleImageUpload = useCallback(async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsProcessing(true);
    try {
      const imageElement = await loadImage(file);
      const processedBlob = await removeBackground(imageElement);
      const url = URL.createObjectURL(processedBlob);
      setProcessedImageUrl(url);
      
      console.log('Image processed successfully');
    } catch (error) {
      console.error('Failed to process image:', error);
    } finally {
      setIsProcessing(false);
    }
  }, []);

  return (
    <div className="space-y-4 p-4 bg-card rounded-lg">
      <h3 className="text-lg font-semibold text-primary">Process Luan's Photo</h3>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        disabled={isProcessing}
        className="block w-full text-sm text-card-foreground file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
      />
      
      {isProcessing && (
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          <p className="mt-2 text-sm text-muted-foreground">Processing image...</p>
        </div>
      )}
      
      {processedImageUrl && (
        <div className="space-y-2">
          <p className="text-sm text-primary">Processed image:</p>
          <img 
            src={processedImageUrl} 
            alt="Processed Luan" 
            className="w-32 h-32 object-cover rounded-lg border-2 border-primary/20"
          />
          <Button
            onClick={() => {
              // Create download link
              const a = document.createElement('a');
              a.href = processedImageUrl;
              a.download = 'luan-processed.png';
              document.body.appendChild(a);
              a.click();
              document.body.removeChild(a);
            }}
            className="w-full"
          >
            Download Processed Image
          </Button>
        </div>
      )}
    </div>
  );
};
