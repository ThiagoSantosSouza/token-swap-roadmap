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
  <div className="space-y-8">
    <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-accent bg-clip-text text-transparent">
      Equipe de Desenvolvimento
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
              {/* Avatar photo */}
              <div className="w-24 h-24 mx-auto rounded-2xl overflow-hidden shadow-glow border-2 border-white/20">
                <img 
                  src="/lovable-uploads/30d0d975-6484-4091-ac6f-453858d80425.png" 
                  alt="Luan Ferreira" 
                  className="w-full h-full object-cover"
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
      name: "Sprint Planning",
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
      objective: "Entrega Oficial",
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
                  <p className="text-sm text-primary font-medium">{sprint.objective}</p>
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
                  <p className="text-sm text-primary font-medium">{sprint.objective}</p>
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
  const burndownData = [
    { 
      sprint: "Sprint Planning", 
      period: "08 a 11 de Julho",
      progress: 100, 
      status: "Concluído",
      color: "from-emerald-500 to-green-400"
    },
    { 
      sprint: "Sprint 1", 
      period: "12 a 18 de Julho",
      progress: 85, 
      status: "Em Andamento",
      color: "from-blue-500 to-cyan-400"
    },
    { 
      sprint: "Sprint 2", 
      period: "19 a 25 de Julho",
      progress: 60, 
      status: "Planejado",
      color: "from-purple-500 to-pink-400"
    },
    { 
      sprint: "Sprint 3", 
      period: "26 de Julho a 01 de Agosto",
      progress: 40, 
      status: "Planejado",
      color: "from-orange-500 to-red-400"
    },
    { 
      sprint: "Sprint 4", 
      period: "02 a 07 de Agosto",
      progress: 20, 
      status: "Futuro",
      color: "from-indigo-500 to-purple-400"
    },
    { 
      sprint: "Sprint 5", 
      period: "08 e 09 de Agosto",
      progress: 0, 
      status: "Futuro",
      color: "from-pink-500 to-rose-400"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold bg-gradient-accent bg-clip-text text-transparent">
          Cronograma & Progresso
        </h2>
        <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
        <p className="text-muted-foreground">Timeline de Desenvolvimento com Datas e Status</p>
      </div>
      
      <div className="grid grid-cols-2 gap-6">
        {burndownData.map((item, index) => (
          <div key={index} className="relative group">
            {/* Holographic glow */}
            <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-20 blur-xl rounded-2xl scale-105 group-hover:opacity-30 transition-all duration-500`}></div>
            
            {/* Main container */}
            <div className="relative bg-gradient-to-br from-background/90 via-card/70 to-background/90 backdrop-blur-sm border border-border/40 rounded-2xl p-6">
              {/* Animated border */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${item.color} p-[2px] opacity-60 group-hover:opacity-100 transition-opacity duration-500`}>
                <div className="absolute inset-[2px] rounded-2xl bg-gradient-to-br from-background via-card to-background"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-foreground">{item.sprint}</h3>
                    <p className="text-sm text-muted-foreground">{item.period}</p>
                  </div>
                  <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${item.color} text-white text-xs font-medium`}>
                    {item.status}
                  </div>
                </div>

                {/* Progress visualization */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-card-foreground">Progresso Estimado</span>
                    <span className="text-sm font-bold text-foreground">{item.progress}%</span>
                  </div>
                  
                  {/* Progress bar with glow effect */}
                  <div className="relative">
                    <div className="w-full bg-secondary/50 rounded-full h-3 overflow-hidden">
                      <div 
                        className={`bg-gradient-to-r ${item.color} h-3 rounded-full transition-all duration-700 relative`}
                        style={{ width: `${item.progress}%` }}
                      >
                        {/* Inner glow */}
                        <div className="absolute inset-0 bg-white/20 rounded-full"></div>
                      </div>
                    </div>
                    {/* Outer glow */}
                    <div 
                      className={`absolute top-0 left-0 bg-gradient-to-r ${item.color} h-3 rounded-full opacity-30 blur-sm transition-all duration-700`}
                      style={{ width: `${item.progress}%` }}
                    ></div>
                  </div>
                </div>

                {/* Status indicators */}
                <div className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${item.color} shadow-lg`}></div>
                  <span className="text-xs text-muted-foreground">
                    {item.progress === 100 ? "Finalizado" : 
                     item.progress > 0 ? "Em desenvolvimento" : "Aguardando início"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Timeline visualization */}
      <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-background/50 via-card/30 to-background/50 backdrop-blur-sm border border-border/30">
        <h3 className="text-xl font-bold text-center text-foreground mb-6">Timeline Geral do Projeto</h3>
        <div className="flex items-center justify-between relative">
          {/* Timeline line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-accent rounded-full"></div>
          
          {burndownData.map((item, index) => (
            <div key={index} className="relative flex flex-col items-center z-10">
              <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${item.color} border-2 border-background shadow-lg mb-2`}></div>
              <div className="text-center">
                <p className="text-xs font-medium text-foreground">{item.sprint}</p>
                <p className="text-xs text-muted-foreground">{item.period.split(' a ')[0]}</p>
              </div>
            </div>
          ))}
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