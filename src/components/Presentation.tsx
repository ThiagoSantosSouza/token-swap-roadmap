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
    title: "Personas",
    component: "PersonasSlide"
  },
  {
    id: 4,
    title: "User Stories/Tarefas",
    component: "UserStoriesSlide"
  },
  {
    id: 5,
    title: "Definição de Feito",
    component: "DefinitionOfDoneSlide"
  },
  {
    id: 6,
    title: "Sprints",
    component: "SprintsSlide"
  },
  {
    id: 7,
    title: "Burndown Chart",
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
  <div className="space-y-6">
    <h2 className="text-3xl font-bold text-center mb-8">Personas - Desenvolvedores do Projeto</h2>
    <div className="grid grid-cols-2 gap-6">
      <Card className="p-6 bg-card border-border">
        <div className="flex items-center mb-4">
          <User className="w-8 h-8 mr-3 text-primary" />
          <div>
            <h3 className="text-lg font-semibold">João Silva</h3>
            <p className="text-sm text-muted-foreground">28 anos - Desenvolvedor Blockchain</p>
          </div>
        </div>
        <div className="space-y-3">
          <div>
            <h4 className="font-semibold text-primary">Perfil</h4>
            <p className="text-sm">Especialista em Solidity com 3+ anos em DeFi</p>
          </div>
          <div>
            <h4 className="font-semibold text-primary">Motivações</h4>
            <p className="text-sm">Criar soluções DeFi inovadoras e seguras</p>
          </div>
          <div>
            <h4 className="font-semibold text-primary">Expectativas</h4>
            <p className="text-sm">Desenvolver contratos auditáveis e eficientes</p>
          </div>
        </div>
      </Card>
      
      <Card className="p-6 bg-card border-border">
        <div className="flex items-center mb-4">
          <User className="w-8 h-8 mr-3 text-primary" />
          <div>
            <h3 className="text-lg font-semibold">Ana Costa</h3>
            <p className="text-sm text-muted-foreground">26 anos - Frontend Developer</p>
          </div>
        </div>
        <div className="space-y-3">
          <div>
            <h4 className="font-semibold text-primary">Perfil</h4>
            <p className="text-sm">Expert React/TypeScript focada em UX/UI</p>
          </div>
          <div>
            <h4 className="font-semibold text-primary">Motivações</h4>
            <p className="text-sm">Tornar DeFi acessível para todos os usuários</p>
          </div>
          <div>
            <h4 className="font-semibold text-primary">Expectativas</h4>
            <p className="text-sm">Interface intuitiva e responsiva</p>
          </div>
        </div>
      </Card>
    </div>
  </div>
);

const UserStoriesSlide = () => (
  <div className="space-y-6">
    <h2 className="text-3xl font-bold text-center mb-8">User Stories/Tarefas</h2>
    <div className="grid gap-4">
      {[
        "Como usuário, quero conectar minha carteira para acessar a plataforma",
        "Como usuário, quero fazer swap entre diferentes tokens de forma segura",
        "Como usuário, quero visualizar o histórico de minhas transações",
        "Como usuário, quero acompanhar o volume de swaps em tempo real",
        "Como desenvolvedor, quero implementar oráculos para preços precisos",
        "Como desenvolvedor, quero criar testes unitários abrangentes",
        "Como equipe, queremos documentar toda a arquitetura no GitBook"
      ].map((story, index) => (
        <Card key={index} className="p-4 bg-card border-border">
          <p className="text-card-foreground">{story}</p>
        </Card>
      ))}
    </div>
  </div>
);

const DefinitionOfDoneSlide = () => (
  <div className="space-y-6">
    <h2 className="text-3xl font-bold text-center mb-8">Definição de Feito</h2>
    <div className="grid gap-4">
      {[
        "✅ Código revisado e aprovado pelo time",
        "✅ Testes unitários implementados e passando",
        "✅ Documentação técnica atualizada no GitBook",
        "✅ Deploy realizado na testnet",
        "✅ Funcionalidade testada end-to-end",
        "✅ Interface responsiva e acessível",
        "✅ Integração com Chainlink funcionando",
        "✅ Validações de segurança implementadas"
      ].map((criteria, index) => (
        <Card key={index} className="p-4 bg-card border-border">
          <p className="text-card-foreground">{criteria}</p>
        </Card>
      ))}
    </div>
  </div>
);

const SprintsSlide = () => {
  const sprints = [
    {
      name: "Sprint Planning",
      period: "08 a 11 de Julho",
      objective: "Setup e Organização",
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
      name: "Sprint 1",
      period: "12 a 18 de Julho",
      objective: "Smart Contracts + Frontend Base",
      tasks: [
        "Implementar contrato base (SwapBook)",
        "Criar funções: createSwap, swapTokens",
        "Tela de conexão com carteira",
        "Integrar Wagmi + ConnectKit",
        "Atualizar GitBook com arquitetura"
      ]
    },
    {
      name: "Sprint 2",
      period: "19 a 25 de Julho",
      objective: "Integrações e Lógica de Swap",
      tasks: [
        "Integração Chainlink (oracle de preço)",
        "Testes em testnet (Mumbai)",
        "Formulário funcional de swap",
        "Feedbacks visuais (sucesso/erro)",
        "Início do dashboard DeFi"
      ]
    },
    {
      name: "Sprint 3",
      period: "26 de Julho a 01 de Agosto",
      objective: "Dashboard + Refino de Contratos",
      tasks: [
        "Exibir volume de swaps e histórico",
        "Indexar eventos de contrato",
        "Integração CoinGecko API",
        "Melhorias de segurança",
        "Atualização de testes unitários"
      ]
    },
    {
      name: "Sprint 4",
      period: "02 a 07 de Agosto",
      objective: "Testes Finais + Deploy",
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
      name: "Sprint 5",
      period: "08 e 09 de Agosto",
      objective: "Entrega Oficial",
      tasks: [
        "Submeter projeto na plataforma",
        "Finalizar checklist do edital",
        "Enviar vídeo, pitch e links"
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-center mb-8">Roadmap - Sprints</h2>
      <div className="grid gap-4 max-h-96 overflow-y-auto">
        {sprints.map((sprint, index) => (
          <Card key={index} className="p-4 bg-card border-border">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-lg font-semibold text-primary">{sprint.name}</h3>
              <span className="text-sm text-muted-foreground">{sprint.period}</span>
            </div>
            <p className="text-sm font-medium mb-2 text-accent">{sprint.objective}</p>
            <ul className="text-sm space-y-1">
              {sprint.tasks.map((task, taskIndex) => (
                <li key={taskIndex} className="text-card-foreground">• {task}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </div>
  );
};

const BurndownSlide = () => (
  <div className="space-y-6">
    <h2 className="text-3xl font-bold text-center mb-8">Burndown Chart</h2>
    <Card className="p-6 bg-card border-border">
      <div className="space-y-4">
        <div className="text-center text-muted-foreground">
          <p>Progresso estimado do projeto por sprint</p>
        </div>
        <div className="space-y-4">
          {[
            { sprint: "Sprint Planning", progress: 100, tasks: "6/6 tarefas" },
            { sprint: "Sprint 1", progress: 85, tasks: "4/5 tarefas" },
            { sprint: "Sprint 2", progress: 60, tasks: "3/5 tarefas" },
            { sprint: "Sprint 3", progress: 40, tasks: "2/5 tarefas" },
            { sprint: "Sprint 4", progress: 20, tasks: "1/6 tarefas" },
            { sprint: "Sprint 5", progress: 0, tasks: "0/3 tarefas" }
          ].map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-card-foreground">{item.sprint}</span>
                <span className="text-muted-foreground">{item.tasks}</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-3">
                <div 
                  className="bg-gradient-accent h-3 rounded-full transition-all duration-300"
                  style={{ width: `${item.progress}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  </div>
);

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