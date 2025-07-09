import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, User } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: "Capa",
    component: "CoverSlide"
  },
  {
    id: 2,
    title: "Descrição do Problema",
    component: "ProblemSlide"
  },
  {
    id: 3,
    title: "Equipe - Luan Ferreira",
    component: "PersonasSlide"
  },
  {
    id: 4,
    title: "Equipe - Alexsandro Luz",
    component: "AlexsandroSlide"
  },
  {
    id: 5,
    title: "Equipe - Thiago Santos",
    component: "ThiagoSlide"
  },
  {
    id: 6,
    title: "Equipe - Ronaldo Dominguez",
    component: "RonaldoSlide"
  },
  {
    id: 7,
    title: "User Stories/Tarefas",
    component: "UserStoriesSlide"
  },
  {
    id: 8,
    title: "Definição de Feito",
    component: "DefinitionOfDoneSlide"
  },
  {
    id: 9,
    title: "Roadmap - Sprints",
    component: "SprintsSlide"
  },
  {
    id: 10,
    title: "Cronograma",
    component: "BurndownSlide"
  }
];

const CoverSlide = () => (
  <div className="flex flex-col items-center justify-center h-full text-center space-y-8">
    <div className="text-6xl font-bold bg-gradient-accent bg-clip-text text-transparent">
      ATOM
    </div>
    <h1 className="text-4xl font-bold text-foreground">Roadmap do Projeto DeFi</h1>
    <p className="text-xl text-muted-foreground">Plataforma de Swap Descentralizada</p>
    <div className="text-lg text-muted-foreground">
      Período: 08 de Julho - 09 de Agosto 2024
    </div>
  </div>
);

const ProblemSlide = () => (
  <div className="space-y-8">
    <h2 className="text-3xl font-bold text-center mb-8">Descrição do Problema</h2>
    <div className="grid gap-6">
      <Card className="p-6 bg-card border-border">
        <h3 className="text-xl font-semibold mb-4 text-primary">Contexto</h3>
        <p className="text-card-foreground">
          O mercado DeFi carece de soluções intuitivas e seguras para swap de tokens que combinem 
          facilidade de uso com transparência e descentralização completa.
        </p>
      </Card>
      <Card className="p-6 bg-card border-border">
        <h3 className="text-xl font-semibold mb-4 text-primary">Objetivo</h3>
        <p className="text-card-foreground">
          Desenvolver uma plataforma de swap descentralizada que utilize oráculos Chainlink para 
          preços precisos e ofereça uma experiência de usuário superior com dashboard analítico.
        </p>
      </Card>
    </div>
  </div>
);

const PersonasSlide = () => (
  <div className="space-y-8">
    <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-accent bg-clip-text text-transparent">
      Luan Ferreira - Gestor & Visionário
    </h2>
    
    <div className="grid grid-cols-5 gap-8 h-full">
      {/* Main Profile Card - Inspired by the uploaded design */}
      <div className="col-span-2 flex justify-center items-start">
        <div className="relative">
          {/* Outer glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-30 blur-2xl rounded-3xl scale-110"></div>
          
          {/* Main card with neon border effect */}
          <div className="relative bg-gradient-to-br from-background via-card to-background rounded-3xl p-8 text-center min-w-[300px]">
            {/* Triple neon border effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 p-[3px]">
              <div className="absolute inset-[3px] rounded-3xl bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 p-[2px]">
                <div className="absolute inset-[2px] rounded-3xl bg-gradient-to-br from-background via-card to-background"></div>
              </div>
            </div>
            
            {/* Inner glow */}
            <div className="absolute inset-[6px] rounded-3xl bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10"></div>
            
            {/* Content */}
            <div className="relative z-10 space-y-6">
              {/* Phoenix Icon */}
              <div className="w-24 h-24 mx-auto rounded-2xl overflow-hidden shadow-glow border-2 border-white/20 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center">
                <img 
                  src="/phoenix-neon-icon.png" 
                  alt="Phoenix Icon" 
                  className="w-16 h-16 object-contain"
                />
              </div>
              
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-foreground">Luan Ferreira</h3>
                <p className="text-xl text-primary font-medium">AI & Blockchain</p>
                <div className="w-16 h-0.5 bg-gradient-accent mx-auto"></div>
                <div className="space-y-2">
                  <p className="text-2xl font-light text-foreground">30 anos</p>
                  <p className="text-lg text-muted-foreground">Gestor da equipe</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Info Cards Grid - Clean contrast design */}
      <div className="col-span-3 grid grid-cols-2 gap-6">
        <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:bg-card/50 transition-all duration-300">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-1 h-6 bg-gradient-accent rounded-full"></div>
              <h4 className="text-lg font-semibold text-primary">Perfil</h4>
            </div>
            <p className="text-sm text-card-foreground leading-relaxed">
              Empreendo há anos com foco em soluções baseadas em blockchain e inteligência artificial. 
              No hackaton, atuo como gestor do projeto, responsável pela visão de experiência do usuário, 
              acompanhamento das entregas e apoio no front-end.
            </p>
          </div>
        </div>

        <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:bg-card/50 transition-all duration-300">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-1 h-6 bg-gradient-accent rounded-full"></div>
              <h4 className="text-lg font-semibold text-primary">Motivações e Objetivos</h4>
            </div>
            <p className="text-sm text-card-foreground leading-relaxed">
              Aplicar minha bagagem em tecnologia e produto para entregar uma solução funcional, 
              clara e eficiente, que resolva o problema proposto de forma completa.
            </p>
          </div>
        </div>

        <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:bg-card/50 transition-all duration-300">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-1 h-6 bg-gradient-accent rounded-full"></div>
              <h4 className="text-lg font-semibold text-primary">Interesse</h4>
            </div>
            <p className="text-sm text-card-foreground leading-relaxed">
              Unir tecnologias emergentes com foco em usabilidade e impacto direto. 
              Busco simplificar o complexo e garantir que a tecnologia entregue valor real.
            </p>
          </div>
        </div>

        <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:bg-card/50 transition-all duration-300">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-1 h-6 bg-gradient-accent rounded-full"></div>
              <h4 className="text-lg font-semibold text-primary">Desafio</h4>
            </div>
            <p className="text-sm text-card-foreground leading-relaxed">
              Transformar ideias e requisitos técnicos em uma solução enxuta, bem pensada 
              e com experiência fluida. Organizar entregas sem perder o foco.
            </p>
          </div>
        </div>

        <div className="col-span-2 bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:bg-card/50 transition-all duration-300">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-1 h-6 bg-gradient-accent rounded-full"></div>
              <h4 className="text-lg font-semibold text-primary">Expectativa</h4>
            </div>
            <p className="text-sm text-card-foreground leading-relaxed">
              Entregar, junto com a equipe, uma solução sólida, bem estruturada e totalmente alinhada ao 
              problema apresentado — do código ao uso final.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const AlexsandroSlide = () => (
  <div className="space-y-8">
    <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-accent bg-clip-text text-transparent">
      Alexsandro Luz - Arquiteto & Visionário Tecnológico
    </h2>
    
    <div className="grid grid-cols-5 gap-8 h-full">
      {/* Main Profile Card */}
      <div className="col-span-2 flex justify-center items-start">
        <div className="relative">
          {/* Outer glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 opacity-30 blur-2xl rounded-3xl scale-110"></div>
          
          {/* Main card with neon border effect */}
          <div className="relative bg-gradient-to-br from-background via-card to-background rounded-3xl p-8 text-center min-w-[300px]">
            {/* Triple neon border effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 p-[3px]">
              <div className="absolute inset-[3px] rounded-3xl bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 p-[2px]">
                <div className="absolute inset-[2px] rounded-3xl bg-gradient-to-br from-background via-card to-background"></div>
              </div>
            </div>
            
            {/* Inner glow */}
            <div className="absolute inset-[6px] rounded-3xl bg-gradient-to-r from-orange-500/10 via-red-500/10 to-pink-500/10"></div>
            
            {/* Content */}
            <div className="relative z-10 space-y-6">
              {/* Phoenix Icon */}
              <div className="w-24 h-24 mx-auto rounded-2xl overflow-hidden shadow-glow border-2 border-white/20 bg-gradient-to-br from-orange-500/20 to-pink-500/20 flex items-center justify-center">
                <img 
                  src="/phoenix-neon-icon.png" 
                  alt="Phoenix Icon" 
                  className="w-16 h-16 object-contain"
                />
              </div>
              
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-foreground">Alexsandro Luz</h3>
                <p className="text-xl text-primary font-medium">Arquiteto de Soluções</p>
                <div className="w-16 h-0.5 bg-gradient-to-r from-orange-500 to-pink-500 mx-auto"></div>
                <div className="space-y-2">
                  <p className="text-2xl font-light text-foreground">31 anos</p>
                  <p className="text-lg text-muted-foreground">Desenvolvedor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Info Cards Grid */}
      <div className="col-span-3 grid grid-cols-2 gap-6">
        <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:bg-card/50 transition-all duration-300">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-1 h-6 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full"></div>
              <h4 className="text-lg font-semibold text-primary">Perfil</h4>
            </div>
            <p className="text-sm text-card-foreground leading-relaxed">
              Sou formado em Ciência de Dados, estudante de Engenharia de Machine Learning. 
              Com mais de 8 anos de experiência em desenvolvimento de software e arquiteturas escaláveis, 
              atuo como arquiteto de soluções liderando iniciativas tecnológicas que alinham inovação, 
              performance e impacto real nos negócios.
            </p>
          </div>
        </div>

        <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:bg-card/50 transition-all duration-300">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-1 h-6 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full"></div>
              <h4 className="text-lg font-semibold text-primary">Motivações e Objetivos</h4>
            </div>
            <p className="text-sm text-card-foreground leading-relaxed">
              Sou movido por desafios e acredito que a tecnologia bem aplicada é a chave para resolver 
              grandes problemas sociais, ambientais e econômicos. Minha motivação está em criar soluções 
              que gerem valor real e impactem positivamente a vida das pessoas.
            </p>
          </div>
        </div>

        <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:bg-card/50 transition-all duration-300">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-1 h-6 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full"></div>
              <h4 className="text-lg font-semibold text-primary">Interesse</h4>
            </div>
            <p className="text-sm text-card-foreground leading-relaxed">
              Tenho interesse em gerar impacto transformando o mundo através da tecnologia, 
              simplificando processos e entregando soluções que possam impactar e facilitar 
              a vida de quem vai usá-las.
            </p>
          </div>
        </div>

        <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:bg-card/50 transition-all duration-300">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-1 h-6 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full"></div>
              <h4 className="text-lg font-semibold text-primary">Desafio</h4>
            </div>
            <p className="text-sm text-card-foreground leading-relaxed">
              Quebrar as barreiras através da constante inovação transformando ideias em soluções.
            </p>
          </div>
        </div>

        <div className="col-span-2 bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:bg-card/50 transition-all duration-300">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-1 h-6 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full"></div>
              <h4 className="text-lg font-semibold text-primary">Expectativa</h4>
            </div>
            <p className="text-sm text-card-foreground leading-relaxed">
              Entregar uma solução prática e intuitiva que consiga conversar de forma clara com o usuário, 
              e levar minha equipe para a vitória.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ThiagoSlide = () => (
  <div className="space-y-8">
    <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-accent bg-clip-text text-transparent">
      Thiago Santos - Analista de Sistemas
    </h2>
    
    <div className="grid grid-cols-5 gap-8 h-full">
      {/* Main Profile Card */}
      <div className="col-span-2 flex justify-center items-start">
        <div className="relative">
          {/* Outer glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 opacity-30 blur-2xl rounded-3xl scale-110"></div>
          
          {/* Main card with neon border effect */}
          <div className="relative bg-gradient-to-br from-background via-card to-background rounded-3xl p-8 text-center min-w-[300px]">
            {/* Triple neon border effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 p-[3px]">
              <div className="absolute inset-[3px] rounded-3xl bg-gradient-to-r from-green-400 via-teal-400 to-blue-400 p-[2px]">
                <div className="absolute inset-[2px] rounded-3xl bg-gradient-to-br from-background via-card to-background"></div>
              </div>
            </div>
            
            {/* Inner glow */}
            <div className="absolute inset-[6px] rounded-3xl bg-gradient-to-r from-green-500/10 via-teal-500/10 to-blue-500/10"></div>
            
            {/* Content */}
            <div className="relative z-10 space-y-6">
              {/* Phoenix Icon */}
              <div className="w-24 h-24 mx-auto rounded-2xl overflow-hidden shadow-glow border-2 border-white/20 bg-gradient-to-br from-green-500/20 to-blue-500/20 flex items-center justify-center">
                <img 
                  src="/phoenix-neon-icon.png" 
                  alt="Phoenix Icon" 
                  className="w-16 h-16 object-contain"
                />
              </div>
              
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-foreground">Thiago Santos</h3>
                <p className="text-xl text-primary font-medium">Analista de Sistemas</p>
                <div className="w-16 h-0.5 bg-gradient-to-r from-green-500 to-blue-500 mx-auto"></div>
                <div className="space-y-2">
                  <p className="text-2xl font-light text-foreground">28 anos</p>
                  <p className="text-lg text-muted-foreground">Desenvolvedor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Info Cards Grid */}
      <div className="col-span-3 grid grid-cols-2 gap-6">
        <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:bg-card/50 transition-all duration-300">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-1 h-6 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
              <h4 className="text-lg font-semibold text-primary">Perfil</h4>
            </div>
            <p className="text-sm text-card-foreground leading-relaxed">
              Natural de Salvador/BA, formado em Análise e Desenvolvimento de Sistemas, 
              com duas pós-graduações na área de tecnologia e estudante de Ciências da Computação. 
              Atuo como analista de sistemas projetando e implementando redes, sistemas de sonorização, 
              elétrica e segurança eletrônica.
            </p>
          </div>
        </div>

        <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:bg-card/50 transition-all duration-300">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-1 h-6 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
              <h4 className="text-lg font-semibold text-primary">Motivações e Objetivos</h4>
            </div>
            <p className="text-sm text-card-foreground leading-relaxed">
              Aplicar minhas skills de desenvolvimento de sistemas e resolução de problemas. 
              Estou sempre em movimento e meu intuitivo majoritário é aprender com as consequências 
              do meu esforço e o da equipe, e fundir a Fênix ao Atom!
            </p>
          </div>
        </div>

        <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:bg-card/50 transition-all duration-300">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-1 h-6 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
              <h4 className="text-lg font-semibold text-primary">Interesse</h4>
            </div>
            <p className="text-sm text-card-foreground leading-relaxed">
              Aprender, evoluir e conectar.
            </p>
          </div>
        </div>

        <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:bg-card/50 transition-all duration-300">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-1 h-6 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
              <h4 className="text-lg font-semibold text-primary">Desafio</h4>
            </div>
            <p className="text-sm text-card-foreground leading-relaxed">
              Conectar os pontos desse novo contexto e trazer a revolução que impulsiona.
            </p>
          </div>
        </div>

        <div className="col-span-2 bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:bg-card/50 transition-all duration-300">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-1 h-6 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
              <h4 className="text-lg font-semibold text-primary">Expectativa</h4>
            </div>
            <p className="text-sm text-card-foreground leading-relaxed">
              Vencer e me tornar um gigante, fluir ideias e transformar esse universo deixando a marca da Fênix nele!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const RonaldoSlide = () => (
  <div className="space-y-8">
    <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-accent bg-clip-text text-transparent">
      Ronaldo Dominguez - Analista & Engenheiro de Software
    </h2>
    
    <div className="grid grid-cols-5 gap-8 h-full">
      {/* Main Profile Card */}
      <div className="col-span-2 flex justify-center items-start">
        <div className="relative">
          {/* Outer glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 opacity-30 blur-2xl rounded-3xl scale-110"></div>
          
          {/* Main card with neon border effect */}
          <div className="relative bg-gradient-to-br from-background via-card to-background rounded-3xl p-8 text-center min-w-[300px]">
            {/* Triple neon border effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 p-[3px]">
              <div className="absolute inset-[3px] rounded-3xl bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 p-[2px]">
                <div className="absolute inset-[2px] rounded-3xl bg-gradient-to-br from-background via-card to-background"></div>
              </div>
            </div>
            
            {/* Inner glow */}
            <div className="absolute inset-[6px] rounded-3xl bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-cyan-500/10"></div>
            
            {/* Content */}
            <div className="relative z-10 space-y-6">
              {/* Phoenix Icon */}
              <div className="w-24 h-24 mx-auto rounded-2xl overflow-hidden shadow-glow border-2 border-white/20 bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 flex items-center justify-center">
                <img 
                  src="/phoenix-neon-icon.png" 
                  alt="Phoenix Icon" 
                  className="w-16 h-16 object-contain"
                />
              </div>
              
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-foreground">Ronaldo Dominguez</h3>
                <p className="text-xl text-primary font-medium">Analista Desenvolvedor</p>
                <div className="w-16 h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto"></div>
                <div className="space-y-2">
                  <p className="text-2xl font-light text-foreground">25 anos</p>
                  <p className="text-lg text-muted-foreground">Desenvolvedor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Info Cards Grid */}
      <div className="col-span-3 grid grid-cols-2 gap-6">
        <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:bg-card/50 transition-all duration-300">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-1 h-6 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full"></div>
              <h4 className="text-lg font-semibold text-primary">Perfil</h4>
            </div>
            <p className="text-sm text-card-foreground leading-relaxed">
              Sou desenvolvedor com foco em backend e atualmente em desenvolvimento como arquiteto de software. 
              Trabalho remotamente desde a Espanha em projetos desafiadores, sempre buscando entregar soluções 
              eficientes, evoluir tecnicamente e contribuir para o crescimento das equipes.
            </p>
          </div>
        </div>

        <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:bg-card/50 transition-all duration-300">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-1 h-6 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full"></div>
              <h4 className="text-lg font-semibold text-primary">Motivações e Objetivos</h4>
            </div>
            <p className="text-sm text-card-foreground leading-relaxed">
              Transformar desafios técnicos em soluções inteligentes e eficientes. 
              Aprendo com cada obstáculo e colaboro para construir times fortes, 
              com entrega de valor contínuo e inovação.
            </p>
          </div>
        </div>

        <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:bg-card/50 transition-all duration-300">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-1 h-6 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full"></div>
              <h4 className="text-lg font-semibold text-primary">Interesse</h4>
            </div>
            <p className="text-sm text-card-foreground leading-relaxed">
              Aprender, construir e impactar.
            </p>
          </div>
        </div>

        <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:bg-card/50 transition-all duration-300">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-1 h-6 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full"></div>
              <h4 className="text-lg font-semibold text-primary">Desafio</h4>
            </div>
            <p className="text-sm text-card-foreground leading-relaxed">
              Conectar ideias, liderar soluções e crescer com propósito em meio à complexidade.
            </p>
          </div>
        </div>

        <div className="col-span-2 bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:bg-card/50 transition-all duration-300">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-1 h-6 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full"></div>
              <h4 className="text-lg font-semibold text-primary">Expectativa</h4>
            </div>
            <p className="text-sm text-card-foreground leading-relaxed">
              Como a Fênix que renasce das cinzas, quero evoluir constantemente, superar limites 
              e deixar minha marca onde a inovação acontece.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const UserStoriesSlide = () => {
  const userStories = [
    {
      category: "Conexão e Autenticação",
      icon: "🔗",
      color: "from-blue-500 to-cyan-400",
      stories: [
        "Como usuário, quero conectar minha carteira Web3 de forma segura e intuitiva",
        "Como usuário, quero visualizar meu saldo e assets de forma clara no dashboard"
      ]
    },
    {
      category: "Operações de Swap",
      icon: "🔄",
      color: "from-green-500 to-emerald-400",
      stories: [
        "Como usuário, quero realizar swaps de tokens com taxas transparentes",
        "Como usuário, quero receber estimativas precisas antes de confirmar transações",
        "Como usuário, quero acompanhar o status das minhas transações em tempo real"
      ]
    },
    {
      category: "Monitoramento e Histórico",
      icon: "📊",
      color: "from-purple-500 to-pink-400",
      stories: [
        "Como usuário, quero visualizar meu histórico completo de transações",
        "Como usuário, quero acompanhar preços de tokens em tempo real",
        "Como usuário, quero receber notificações sobre mudanças importantes"
      ]
    },
    {
      category: "Desenvolvimento Técnico",
      icon: "⚙️",
      color: "from-orange-500 to-red-400",
      stories: [
        "Como desenvolvedor, quero integrar oráculos de preço confiáveis",
        "Como desenvolvedor, quero implementar testes automatizados abrangentes",
        "Como equipe, queremos documentar todas as APIs e contratos"
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold bg-gradient-accent bg-clip-text text-transparent">
          Lista de User Stories/Tarefas
        </h2>
        <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-2 gap-8">
        {userStories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="relative group">
            {/* Outer glow effect */}
            <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-20 blur-xl rounded-2xl scale-105 group-hover:opacity-30 transition-opacity duration-500`}></div>
            
            {/* Main container */}
            <div className="relative bg-gradient-to-br from-background/80 via-card/60 to-background/80 backdrop-blur-sm border border-border/30 rounded-2xl p-6 h-full">
              {/* Animated border */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${category.color} p-[2px] opacity-60`}>
                <div className="absolute inset-[2px] rounded-2xl bg-gradient-to-br from-background via-card to-background"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 space-y-6">
                {/* Header */}
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center text-2xl shadow-lg`}>
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{category.category}</h3>
                    <div className={`w-16 h-0.5 bg-gradient-to-r ${category.color} rounded-full mt-1`}></div>
                  </div>
                </div>

                {/* Stories */}
                <div className="space-y-3">
                  {category.stories.map((story, storyIndex) => (
                    <div key={storyIndex} className="flex items-start space-x-3 group/story">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color} mt-2 group-hover/story:scale-125 transition-transform duration-200`}></div>
                      <p className="text-sm text-card-foreground/90 leading-relaxed group-hover/story:text-foreground transition-colors duration-200">
                        {story}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const DefinitionOfDoneSlide = () => {
  const doneChecklist = [
    {
      category: "Qualidade de Código",
      icon: "🛡️",
      color: "from-emerald-500 via-green-400 to-teal-500",
      criteria: [
        "Código revisado e aprovado pelo time",
        "Testes unitários implementados e passando", 
        "Cobertura de testes acima de 80%"
      ]
    },
    {
      category: "Documentação",
      icon: "📚",
      color: "from-blue-500 via-indigo-400 to-purple-500",
      criteria: [
        "Documentação técnica atualizada no GitBook",
        "APIs documentadas com exemplos",
        "Readme atualizado com instruções"
      ]
    },
    {
      category: "Deploy e Infraestrutura",
      icon: "🚀",
      color: "from-orange-500 via-red-400 to-pink-500",
      criteria: [
        "Deploy realizado na testnet",
        "Smart contracts verificados",
        "Frontend hospedado e funcional"
      ]
    },
    {
      category: "Testes e Validação",
      icon: "⚡",
      color: "from-cyan-500 via-blue-400 to-indigo-500",
      criteria: [
        "Funcionalidade testada end-to-end",
        "Interface responsiva e acessível",
        "Integração com Chainlink funcionando",
        "Validações de segurança implementadas"
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold bg-gradient-accent bg-clip-text text-transparent">
          Definição de Feito
        </h2>
        <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
        <p className="text-muted-foreground">Critérios de Aceitação para Cada Entrega</p>
      </div>
      
      <div className="grid grid-cols-2 gap-6">
        {doneChecklist.map((section, sectionIndex) => (
          <div key={sectionIndex} className="relative group">
            {/* Holographic glow */}
            <div className={`absolute inset-0 bg-gradient-to-r ${section.color} opacity-20 blur-2xl rounded-3xl scale-110 group-hover:opacity-30 transition-all duration-700`}></div>
            
            {/* Main card */}
            <div className="relative bg-gradient-to-br from-background/90 via-card/70 to-background/90 backdrop-blur-sm border border-border/40 rounded-3xl p-6 h-full">
              {/* Animated border effect */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${section.color} p-[2px] opacity-70 group-hover:opacity-100 transition-opacity duration-500`}>
                <div className="absolute inset-[2px] rounded-3xl bg-gradient-to-br from-background via-card to-background"></div>
              </div>
              
              {/* Inner glow */}
              <div className={`absolute inset-[6px] rounded-3xl bg-gradient-to-r ${section.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="relative z-10 space-y-6">
                {/* Header with icon */}
                <div className="text-center space-y-3">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${section.color} flex items-center justify-center text-3xl mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300`}>
                    {section.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{section.category}</h3>
                  <div className={`w-12 h-0.5 bg-gradient-to-r ${section.color} rounded-full mx-auto`}></div>
                </div>

                {/* Criteria list */}
                <div className="space-y-4">
                  {section.criteria.map((criteria, criteriaIndex) => (
                    <div key={criteriaIndex} className="flex items-start space-x-3 group/criteria">
                      {/* Animated checkmark */}
                      <div className={`w-6 h-6 rounded-lg bg-gradient-to-r ${section.color} flex items-center justify-center mt-0.5 group-hover/criteria:scale-110 transition-transform duration-200 shadow-lg`}>
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <p className="text-sm text-card-foreground/90 leading-relaxed group-hover/criteria:text-foreground transition-colors duration-200">
                        {criteria}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const SprintsSlide = () => {
  const sprints = [
    {
      name: "Setup e Organização",
      tasks: [
        "Definir arquitetura e tecnologias",
        "Criar repositório no GitHub",
        "Configurar estrutura no Bitrix",
        "Criar GitBook e documentar escopo",
        "Protótipo das telas principais",
        "Template React com Wagmi/WalletConnect"
      ]
    },
    {
      name: "Smart Contracts + Frontend Base",
      tasks: [
        "Implementar contrato base (SwapBook)",
        "Criar funções: createSwap, swapTokens",
        "Tela de conexão com carteira",
        "Integrar Wagmi + ConnectKit",
        "Atualizar GitBook com arquitetura"
      ]
    },
    {
      name: "Integrações e Lógica de Swap",
      tasks: [
        "Integração Chainlink (oracle de preço)",
        "Testes em testnet (Mumbai)",
        "Formulário funcional de swap",
        "Feedbacks visuais (sucesso/erro)",
        "Início do dashboard DeFi"
      ]
    },
    {
      name: "Dashboard + Refino de Contratos",
      tasks: [
        "Exibir volume de swaps e histórico",
        "Indexar eventos de contrato",
        "Integração CoinGecko API",
        "Melhorias de segurança",
        "Atualização de testes unitários"
      ]
    },
    {
      name: "Testes Finais + Deploy",
      tasks: [
        "Testes ponta a ponta",
        "Deploy do contrato na testnet",
        "Deploy do front-end",
        "Finalizar documentação GitBook",
        "Preparar roteiro e vídeo",
        "Criar pitch deck"
      ]
    },
    {
      name: "Entrega Oficial",
      tasks: [
        "Submeter projeto na plataforma",
        "Finalizar checklist do edital",
        "Enviar vídeo, pitch e links"
      ]
    }
  ];

  const sprintsFirstHalf = sprints.slice(0, 3);
  const sprintsSecondHalf = sprints.slice(3);

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold bg-gradient-accent bg-clip-text text-transparent">
          Roadmap - Sprints
        </h2>
        <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
      </div>
      
      {/* First Row */}
      <div className="grid grid-cols-3 gap-6">
        {sprintsFirstHalf.map((sprint, index) => (
          <div key={index} className="relative group">
            {/* Holographic background */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-cyan-500/20 blur-xl rounded-2xl scale-105 group-hover:scale-110 transition-transform duration-500"></div>
            
            {/* Main card */}
            <div className="relative bg-gradient-to-br from-background/80 via-card/60 to-background/80 backdrop-blur-sm border border-border/30 rounded-2xl p-6 h-full">
              {/* Glowing border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 p-[2px] opacity-60">
                <div className="absolute inset-[2px] rounded-2xl bg-gradient-to-br from-background via-card to-background"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 space-y-4">
                {/* Header */}
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg mx-auto">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{sprint.name}</h3>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto"></div>
                </div>

                {/* Tasks */}
                <div className="space-y-2">
                  {sprint.tasks.map((task, taskIndex) => (
                    <div key={taskIndex} className="flex items-start space-x-2 group/task">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 mt-2 group-hover/task:scale-125 transition-transform duration-200"></div>
                      <p className="text-xs text-card-foreground/90 leading-relaxed group-hover/task:text-foreground transition-colors duration-200">
                        {task}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-3 gap-6">
        {sprintsSecondHalf.map((sprint, index) => (
          <div key={index + 3} className="relative group">
            {/* Holographic background */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-red-500/20 to-pink-500/20 blur-xl rounded-2xl scale-105 group-hover:scale-110 transition-transform duration-500"></div>
            
            {/* Main card */}
            <div className="relative bg-gradient-to-br from-background/80 via-card/60 to-background/80 backdrop-blur-sm border border-border/30 rounded-2xl p-6 h-full">
              {/* Glowing border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 p-[2px] opacity-60">
                <div className="absolute inset-[2px] rounded-2xl bg-gradient-to-br from-background via-card to-background"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 space-y-4">
                {/* Header */}
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg mx-auto">
                    {index + 4}
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{sprint.name}</h3>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full mx-auto"></div>
                </div>

                {/* Tasks */}
                <div className="space-y-2">
                  {sprint.tasks.map((task, taskIndex) => (
                    <div key={taskIndex} className="flex items-start space-x-2 group/task">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 mt-2 group-hover/task:scale-125 transition-transform duration-200"></div>
                      <p className="text-xs text-card-foreground/90 leading-relaxed group-hover/task:text-foreground transition-colors duration-200">
                        {task}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const BurndownSlide = () => {
  const roadmapSteps = [
    { 
      name: "Setup e Organização",
      period: "08 a 11 de Julho",
      completed: true
    },
    { 
      name: "Smart Contracts + Frontend Base",
      period: "12 a 18 de Julho",
      completed: false
    },
    { 
      name: "Integrações e Lógica de Swap",
      period: "19 a 25 de Julho",
      completed: false
    },
    { 
      name: "Dashboard + Refino de Contratos",
      period: "26 de Julho a 01 de Agosto",
      completed: false
    },
    { 
      name: "Testes Finais + Deploy",
      period: "02 a 07 de Agosto",
      completed: false
    },
    { 
      name: "Entrega Oficial",
      period: "08 e 09 de Agosto",
      completed: false
    }
  ];

  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold bg-gradient-accent bg-clip-text text-transparent">
          Cronograma
        </h2>
        <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
        <p className="text-muted-foreground">Roadmap Vertical do Projeto</p>
      </div>
      
      {/* Vertical Timeline */}
      <div className="relative flex flex-col items-center space-y-8 py-8">
        {/* Vertical neon line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-transparent via-muted to-transparent"></div>
        
        {roadmapSteps.map((step, index) => (
          <div key={index} className="relative flex items-center w-full max-w-4xl">
            {/* Center connector */}
            <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
              {/* Neon glow effect for completed step */}
              {step.completed && (
                <div className="absolute inset-0 w-6 h-6 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full blur-md opacity-80"></div>
              )}
              
              {/* Main circle */}
              <div className={`w-6 h-6 rounded-full border-4 relative z-10 ${
                step.completed 
                  ? 'bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 border-white shadow-[0_0_20px_rgba(168,85,247,0.8)]' 
                  : 'bg-muted border-muted-foreground/50'
              }`}>
                {step.completed && (
                  <div className="absolute inset-1 bg-white rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Content card */}
            <div className={`w-80 ${index % 2 === 0 ? 'mr-auto pr-12' : 'ml-auto pl-12'}`}>
              <div className="relative group">
                {/* Glow effect for completed steps */}
                {step.completed && (
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 blur-xl rounded-2xl scale-105 opacity-80"></div>
                )}
                
                {/* Main card */}
                <div className={`relative rounded-2xl p-6 backdrop-blur-sm border transition-all duration-500 ${
                  step.completed 
                    ? 'bg-gradient-to-br from-background/90 via-card/80 to-background/90 border-primary/30 shadow-glow' 
                    : 'bg-card/30 border-border/30 hover:bg-card/50'
                }`}>
                  
                  {/* Animated border for completed steps */}
                  {step.completed && (
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 p-[2px] opacity-60">
                      <div className="absolute inset-[2px] rounded-2xl bg-gradient-to-br from-background via-card to-background"></div>
                    </div>
                  )}
                  
                  <div className="relative z-10 space-y-3">
                    <h3 className={`text-lg font-bold ${step.completed ? 'text-foreground' : 'text-muted-foreground'}`}>
                      {step.name}
                    </h3>
                    <p className={`text-sm ${step.completed ? 'text-primary font-medium' : 'text-muted-foreground'}`}>
                      {step.period}
                    </p>
                    
                    {step.completed && (
                      <div className="flex items-center space-x-2 pt-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full shadow-sm"></div>
                        <span className="text-xs text-green-500 font-medium">Concluído</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Glowing line for completed section */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-cyan-500 shadow-[0_0_10px_rgba(168,85,247,0.6)]" 
             style={{ 
               height: `${(100 / roadmapSteps.length) * roadmapSteps.findIndex(step => !step.completed)}%`,
               top: '0px'
             }}>
        </div>
      </div>
    </div>
  );
};

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const renderSlide = () => {
    const slide = slides[currentSlide];
    switch (slide.component) {
      case "CoverSlide": return <CoverSlide />;
      case "ProblemSlide": return <ProblemSlide />;
      case "PersonasSlide": return <PersonasSlide />;
      case "AlexsandroSlide": return <AlexsandroSlide />;
      case "ThiagoSlide": return <ThiagoSlide />;
      case "RonaldoSlide": return <RonaldoSlide />;
      case "UserStoriesSlide": return <UserStoriesSlide />;
      case "DefinitionOfDoneSlide": return <DefinitionOfDoneSlide />;
      case "SprintsSlide": return <SprintsSlide />;
      case "BurndownSlide": return <BurndownSlide />;
      default: return <CoverSlide />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-primary p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="text-2xl font-bold bg-gradient-accent bg-clip-text text-transparent">
            ATOM
          </div>
          <div className="text-foreground">
            {currentSlide + 1} / {slides.length}
          </div>
        </div>

        {/* Slide Content */}
        <div className="bg-background/5 backdrop-blur-sm rounded-lg p-8 min-h-[600px] shadow-glow">
          {renderSlide()}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8">
          <Button 
            onClick={prevSlide} 
            variant="secondary" 
            disabled={currentSlide === 0}
            className="flex items-center gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Anterior
          </Button>
          
          <div className="text-center">
            <h3 className="text-lg font-semibold text-foreground">
              {slides[currentSlide].title}
            </h3>
          </div>
          
          <Button 
            onClick={nextSlide} 
            variant="secondary"
            disabled={currentSlide === slides.length - 1}
            className="flex items-center gap-2"
          >
            Próximo
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Slide Indicator */}
        <div className="flex justify-center space-x-2 mt-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide 
                  ? 'bg-primary shadow-glow' 
                  : 'bg-muted hover:bg-muted-foreground'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Presentation;