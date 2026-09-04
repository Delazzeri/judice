export type Solution = {
  slug: string;
  title: string;
  description: string;
  image: string;
  intro: string;
  highlights: { title: string; body: string }[];
  steps: { title: string; body: string }[];
  caseStudy: { title: string; body: string };
  faq: { question: string; answer: string }[];
};

export const SOLUTIONS: Solution[] = [
  {
    slug: "audiencias",
    title: "Audiências",
    description:
      "Advogados e prepostos para audiências presenciais e virtuais em todo o Brasil, com acompanhamento da Judice em todas as etapas e relatório após a realização.",
    image: "/images/solutions/audiencias.jpg",
    intro:
      "Pelo nosso sistema, você solicita advogados correspondentes ou prepostos para comparecerem a audiências nas mais diversas modalidades, em qualquer comarca do Brasil. Cada etapa, confirmação de disponibilidade, recebimento de arquivos, conclusão da audiência, fica registrada no sistema, para você acompanhar o andamento em tempo real.",
    highlights: [
      {
        title: "Praticidade",
        body: "Solicite o tipo de correspondente necessário informando local e data. Audiências em diferentes localidades são consolidadas em um único boleto, sem custo de cadastro.",
      },
      {
        title: "Qualidade",
        body: "Nossa rede foi construída ao longo de mais de 20 anos, selecionando correspondentes que cumprem prazos e atuam com comprometimento.",
      },
      {
        title: "Acessibilidade",
        body: "Acesse o sistema de qualquer computador, tablet ou smartphone com internet, a qualquer hora.",
      },
      {
        title: "Segurança",
        body: "Documentos armazenados em servidores próprios, com backup diário e duplicidade de armazenamento, sem dependência de nuvem de terceiros.",
      },
    ],
    steps: [
      {
        title: "Solicite pelo sistema",
        body: "Informe a comarca, a data e o tipo de correspondente necessário para a audiência.",
      },
      {
        title: "Confirmação do correspondente",
        body: "Um correspondente da nossa rede confirma disponibilidade e recebe os arquivos do processo.",
      },
      {
        title: "Realização da audiência",
        body: "O correspondente comparece à audiência, presencial ou virtual, representando seus interesses.",
      },
      {
        title: "Relatório disponível",
        body: "O andamento é registrado no sistema, e o relatório fica disponível para consulta logo após a conclusão.",
      },
    ],
    caseStudy: {
      title: "Audiência de última hora em outra comarca",
      body: "Um escritório de médio porte precisou de um correspondente para uma audiência marcada em outro estado, com menos de 48 horas de antecedência. Pelo sistema, a solicitação foi feita em poucos minutos, um correspondente foi confirmado no mesmo dia, e o relatório da audiência chegou ao cliente horas após a sessão, sem que ninguém do escritório precisasse viajar.",
    },
    faq: [
      {
        question: "Em quanto tempo recebo a confirmação do correspondente?",
        answer:
          "O sistema mostra a confirmação de disponibilidade assim que um correspondente aceita a solicitação, geralmente em poucas horas, dependendo da comarca e da antecedência da solicitação.",
      },
      {
        question: "Como recebo o relatório da audiência?",
        answer:
          "O correspondente registra o andamento da audiência no sistema, e o relatório fica disponível para consulta e download logo após a conclusão.",
      },
      {
        question: "Posso solicitar audiências em várias comarcas ao mesmo tempo?",
        answer:
          "Sim. Todas as solicitações, independentemente da comarca, são consolidadas em um único boleto de cobrança.",
      },
      {
        question: "Há custo para me cadastrar?",
        answer: "Não. O cadastro no sistema é gratuito.",
      },
    ],
  },
  {
    slug: "copias-de-processos",
    title: "Cópias de Processos",
    description:
      "Solicite cópias de processos e documentos em qualquer comarca. Nossa equipe coordena a diligência, realiza a digitalização e disponibiliza o material para acesso pela plataforma.",
    image: "/images/solutions/copias_de_processos_pela_internet.jpg",
    intro:
      "Solicite cópias de processos informando o número da peça, as páginas desejadas e outros dados básicos. Nossa equipe vai até o Fórum, digitaliza os documentos e disponibiliza os arquivos para você acessar pela internet.",
    highlights: [
      {
        title: "Qualidade",
        body: "Usamos scanners de última geração e tratamento de imagem para páginas mais nítidas e com menos sombras, sem fotografias de baixa resolução.",
      },
      {
        title: "Praticidade",
        body: "Acesse os arquivos de qualquer computador, tablet ou smartphone com internet.",
      },
      {
        title: "Versatilidade",
        body: "Mantenha as cópias no sistema, imprima ou faça o download dos arquivos, como preferir.",
      },
      {
        title: "Economia",
        body: "Planos mensais a partir de R$ 45, com opção de cópias avulsas conforme a demanda do seu escritório.",
      },
    ],
    steps: [
      {
        title: "Solicite a cópia",
        body: "Informe o número do processo, a peça e as páginas desejadas pelo sistema.",
      },
      {
        title: "Visita ao Fórum",
        body: "Nossa equipe se desloca até o Fórum ou Tribunal responsável para localizar o processo.",
      },
      {
        title: "Digitalização em alta qualidade",
        body: "As páginas são digitalizadas com scanners de última geração e tratamento de imagem.",
      },
      {
        title: "Acesso pela internet",
        body: "Os arquivos ficam disponíveis para consulta, impressão ou download no sistema.",
      },
    ],
    caseStudy: {
      title: "Cópias de um processo extenso em poucos dias",
      body: "Um cliente precisava das cópias completas de um processo com centenas de páginas, distribuído em um Fórum fora de sua cidade. A solicitação foi feita pelo sistema informando as peças de interesse, e os arquivos digitalizados, nítidos e organizados, ficaram disponíveis para download em poucos dias, sem que o escritório precisasse deslocar ninguém até o local.",
    },
    faq: [
      {
        question: "Como informo quais páginas eu preciso?",
        answer:
          "No sistema, você indica o número da peça e as páginas desejadas. Se preferir, também é possível solicitar o processo completo.",
      },
      {
        question: "Os arquivos ficam salvos para eu acessar depois?",
        answer:
          "Sim, você pode manter as cópias armazenadas no sistema, além de poder imprimir ou baixar os arquivos a qualquer momento.",
      },
      {
        question: "Existe plano mensal ou só cópias avulsas?",
        answer:
          "Oferecemos planos mensais a partir de R$ 45, além da opção de solicitar cópias avulsas conforme a necessidade.",
      },
    ],
  },
  {
    slug: "digitalizacoes-internas",
    title: "Digitalizações Internas",
    description:
      "Digitalização, organização e disponibilização de documentos e processos, com padronização e controle.",
    image: "/images/solutions/digitalizacoes_internas.jpg",
    intro:
      "Além das cópias obtidas em Fóruns e Tribunais, digitalizamos documentos e peças processuais que já estão no seu escritório, organizando tudo dentro do mesmo sistema que você já usa para acompanhar audiências e cópias.",
    highlights: [
      {
        title: "Organização",
        body: "Os documentos digitalizados ficam catalogados no sistema, facilitando a consulta e o compartilhamento entre a equipe.",
      },
      {
        title: "Qualidade",
        body: "Mesmo padrão de digitalização usado nas cópias de processos, scanners de alta resolução e tratamento de imagem.",
      },
      {
        title: "Praticidade",
        body: "Envie os documentos físicos para digitalização sem precisar montar uma estrutura interna própria para isso.",
      },
      {
        title: "Segurança",
        body: "Arquivos armazenados nos mesmos servidores próprios, com backup diário e duplicidade de armazenamento.",
      },
    ],
    steps: [
      {
        title: "Envie os documentos",
        body: "Os documentos e peças processuais do seu escritório são encaminhados para digitalização.",
      },
      {
        title: "Digitalização e tratamento",
        body: "Utilizamos o mesmo padrão de qualidade das cópias de processos, com scanners de alta resolução.",
      },
      {
        title: "Organização no sistema",
        body: "Os arquivos são catalogados por cliente ou processo, dentro do mesmo sistema que você já utiliza.",
      },
      {
        title: "Acesso pela equipe",
        body: "Toda a equipe do escritório passa a acessar os documentos digitalizados sem depender do arquivo físico.",
      },
    ],
    caseStudy: {
      title: "Digitalizando o arquivo físico de um escritório",
      body: "Um escritório com anos de processos arquivados em papel decidiu digitalizar seu acervo antes de uma mudança de endereço. Os documentos foram enviados para digitalização, organizados dentro do sistema por pasta de cliente, e passaram a ficar acessíveis a toda a equipe sem depender do arquivo físico.",
    },
    faq: [
      {
        question: "Que tipo de documento posso enviar para digitalização?",
        answer:
          "Documentos e peças processuais do seu escritório, como autos físicos, contratos e demais materiais relevantes ao seu trabalho.",
      },
      {
        question: "Como os documentos digitalizados ficam organizados?",
        answer:
          "Eles são catalogados dentro do sistema, no mesmo ambiente onde você acompanha audiências e cópias de processos.",
      },
    ],
  },
  {
    slug: "processo-eletronico",
    title: "Processo Eletrônico",
    description:
      "A Judice executa tarefas e diligências relacionadas a processos eletrônicos, ajudando sua equipe a ganhar tempo e reduzir atividades operacionais.",
    image: "/images/solutions/processo_eletronico.jpg",
    intro:
      "Pelo mesmo sistema online usado para audiências e cópias, você protocola e acompanha processos eletrônicos com simplicidade. A Judice cuida do ajuste dos arquivos para atender aos requisitos dos diferentes sistemas eletrônicos vigentes no Brasil.",
    highlights: [
      {
        title: "Cobertura nacional",
        body: "Atendemos os requisitos dos 46 sistemas eletrônicos vigentes no Brasil, sem que você precise de OAB em cada estado.",
      },
      {
        title: "Praticidade",
        body: "Protocole pelo mesmo sistema que você já usa para outras solicitações, sem precisar aprender uma ferramenta nova.",
      },
      {
        title: "Acompanhamento contínuo",
        body: "Atualizações de andamentos e prazos ficam disponíveis no sistema, para você não perder nenhum movimento do processo.",
      },
      {
        title: "Economia",
        body: "Reduza a necessidade de estrutura interna dedicada a protocolar e acompanhar processos em múltiplos estados.",
      },
    ],
    steps: [
      {
        title: "Envie a petição",
        body: "Encaminhe os arquivos pelo mesmo sistema usado para audiências e cópias.",
      },
      {
        title: "Ajuste aos requisitos locais",
        body: "A Judice adapta os arquivos conforme as exigências do sistema eletrônico do tribunal de destino.",
      },
      {
        title: "Protocolo realizado",
        body: "O protocolo é efetuado no sistema eletrônico correspondente, sem exigir OAB adicional no estado.",
      },
      {
        title: "Acompanhamento de prazos",
        body: "Andamentos e prazos ficam disponíveis no sistema, com atualização contínua.",
      },
    ],
    caseStudy: {
      title: "Protocolo em um sistema eletrônico fora do estado do escritório",
      body: "Um escritório precisou protocolar uma petição em um tribunal de outro estado, com exigências de formatação específicas do sistema eletrônico local. A Judice ajustou os arquivos conforme os requisitos daquele sistema e realizou o protocolo, sem que o advogado precisasse de inscrição adicional na OAB local.",
    },
    faq: [
      {
        question: "Preciso ter OAB no estado onde o processo tramita?",
        answer:
          "Não. A Judice cuida do protocolo conforme os requisitos do sistema eletrônico local, sem exigir inscrição adicional do advogado naquele estado.",
      },
      {
        question: "Como acompanho os andamentos do processo?",
        answer:
          "As atualizações de andamentos e prazos ficam disponíveis no sistema, no mesmo ambiente usado para as demais solicitações.",
      },
    ],
  },
  {
    slug: "retiradas-e-distribuicao",
    title: "Retiradas e Distribuição",
    description:
      "Retirada de documentos, mandados, alvarás, certidões, cartas, guias e demais peças, além de distribuição de petições e processos.",
    image: "/images/solutions/retiradas_protocolos_distribuicao.jpg",
    intro:
      "Realizamos retiradas de documentos judiciais em todo o Brasil, alvarás, mandados, certidões, editais, guias, ofícios, cartas precatórias e rogatórias, além da distribuição de iniciais e desentranhamentos, sem que você precise sair do escritório.",
    highlights: [
      {
        title: "Praticidade",
        body: "Solicite o serviço pelo sistema informando os dados básicos, e nossa equipe executa o trabalho no Fórum ou Tribunal correspondente.",
      },
      {
        title: "Abrangência",
        body: "Alvarás, mandados, certidões, editais, guias, ofícios, cartas precatórias e rogatórias, distribuição de iniciais e desentranhamentos.",
      },
      {
        title: "Segurança",
        body: "Documentos armazenados em servidores próprios, com backup diário e duplicidade de armazenamento.",
      },
      {
        title: "Economia",
        body: "Elimina a necessidade de negociar com correspondentes independentes a cada solicitação.",
      },
    ],
    steps: [
      {
        title: "Solicite pelo sistema",
        body: "Informe o tipo de documento e o Fórum ou Tribunal onde a retirada ou distribuição deve ocorrer.",
      },
      {
        title: "Execução pela equipe local",
        body: "Um correspondente da nossa rede realiza a retirada ou o protocolo presencialmente.",
      },
      {
        title: "Digitalização do documento",
        body: "O documento retirado é digitalizado e disponibilizado no sistema.",
      },
      {
        title: "Confirmação e cobrança única",
        body: "Você recebe a confirmação da execução, com todos os serviços consolidados em um único boleto.",
      },
    ],
    caseStudy: {
      title: "Retirada de alvará com prazo apertado",
      body: "Um cliente precisava retirar um alvará em um Fórum distante do seu escritório antes do fechamento do expediente. A solicitação foi feita pelo sistema pela manhã, e o documento foi retirado e digitalizado no mesmo dia, evitando o deslocamento da equipe do escritório.",
    },
    faq: [
      {
        question: "Quais documentos posso solicitar retirada?",
        answer:
          "Alvarás, mandados, certidões, editais, guias, ofícios, cartas precatórias e rogatórias, entre outros documentos judiciais.",
      },
      {
        question: "Vocês também fazem distribuição de petições iniciais?",
        answer:
          "Sim, realizamos a distribuição de iniciais e desentranhamentos junto aos fóruns e tribunais.",
      },
    ],
  },
  {
    slug: "visitas-in-loco",
    title: "Visitas in Loco",
    description:
      "Vistorias, verificações, levantamento de informações e outras diligências presenciais realizadas conforme as necessidades do seu escritório.",
    image: "/images/solutions/visita_in_loco.jpg",
    intro:
      "Há situações em que a comunicação escrita não é suficiente, é preciso uma conversa pessoal, uma reunião presencial. Um de nossos correspondentes pode, por exemplo, agendar e realizar uma reunião com um juiz ou outra autoridade para esclarecer pontos específicos do seu interesse.",
    highlights: [
      {
        title: "Contato pessoal",
        body: "Correspondentes presenciais para reuniões, vistorias e visitas técnicas em qualquer localidade do Brasil.",
      },
      {
        title: "Qualidade",
        body: "Rede construída ao longo de mais de 20 anos, com profissionais comprometidos e à altura das tarefas.",
      },
      {
        title: "Confidencialidade",
        body: "Nossos correspondentes atuam sob contratos de confidencialidade, garantindo sigilo das informações do seu caso.",
      },
      {
        title: "Cobrança consolidada",
        body: "Todas as visitas realizadas, em qualquer região, são pagas em um único boleto.",
      },
    ],
    steps: [
      {
        title: "Descreva a necessidade",
        body: "Informe o objetivo da visita, reunião, vistoria ou esclarecimento presencial.",
      },
      {
        title: "Agendamento pelo correspondente",
        body: "Um correspondente da nossa rede agenda a visita com a autoridade ou local envolvido.",
      },
      {
        title: "Visita realizada com sigilo",
        body: "O encontro é conduzido presencialmente, sob contrato de confidencialidade.",
      },
      {
        title: "Retorno com as informações",
        body: "Você recebe o retorno da visita com as informações e esclarecimentos obtidos.",
      },
    ],
    caseStudy: {
      title: "Esclarecimento presencial com autoridade local",
      body: "Um escritório precisava esclarecer um ponto específico de um processo diretamente com uma autoridade local, algo que não avançava apenas por petições escritas. Um correspondente da rede Judice agendou e realizou a reunião presencialmente, retornando com as informações necessárias para o andamento do caso.",
    },
    faq: [
      {
        question: "Que tipo de situação a Visita in Loco atende?",
        answer:
          "Situações que exigem contato presencial e conversa direta, como reuniões com juízes ou outras autoridades, vistorias e visitas técnicas.",
      },
      {
        question: "As informações do meu caso ficam protegidas?",
        answer:
          "Sim. Nossos correspondentes atuam sob contratos de confidencialidade em todas as visitas realizadas.",
      },
    ],
  },
  {
    slug: "pericias",
    title: "Perícias",
    description:
      "Perícias judiciais, extrajudiciais e assistência técnica nas áreas em que a Judice possui atuação especializada.",
    image: "/images/solutions/pericia.jpg",
    intro:
      "Oferecemos perícia judicial, extrajudicial e assistência técnica nas esferas trabalhista e civil, para esclarecer litígios em processos que envolvam pessoas ou patrimônio, com registro detalhado que subsidia cada etapa do processo.",
    highlights: [
      {
        title: "Esclarecimento técnico",
        body: "Laudos e pareceres elaborados para esclarecer pontos técnicos de litígios envolvendo pessoas ou patrimônio.",
      },
      {
        title: "Abrangência",
        body: "Atuação em perícia judicial, extrajudicial e assistência técnica, nas esferas trabalhista e civil.",
      },
      {
        title: "Registro detalhado",
        body: "Cada etapa da perícia é registrada de forma organizada, para subsidiar o andamento do processo.",
      },
    ],
    steps: [
      {
        title: "Solicitação do laudo",
        body: "Informe o objeto da perícia e o contexto do litígio envolvendo pessoas ou patrimônio.",
      },
      {
        title: "Análise técnica",
        body: "Nossos peritos avaliam a documentação e os elementos necessários ao esclarecimento do caso.",
      },
      {
        title: "Elaboração do parecer",
        body: "Um laudo ou parecer técnico é elaborado, com registro detalhado de cada etapa.",
      },
      {
        title: "Entrega do resultado",
        body: "O parecer é disponibilizado para subsidiar o andamento do processo.",
      },
    ],
    caseStudy: {
      title: "Assistência técnica em disputa patrimonial",
      body: "Em um processo civil envolvendo divisão de patrimônio, a Judice prestou assistência técnica pericial, elaborando um parecer detalhado que ajudou a esclarecer pontos controversos apontados pela perícia judicial, subsidiando a argumentação do escritório responsável pelo caso.",
    },
    faq: [
      {
        question: "Quais tipos de perícia a Judice realiza?",
        answer:
          "Perícia judicial, extrajudicial e assistência técnica, nas esferas trabalhista e civil.",
      },
      {
        question: "A perícia pode ser solicitada fora de um processo judicial?",
        answer:
          "Sim, também realizamos perícias no âmbito extrajudicial, quando há necessidade de esclarecimento técnico independente de um processo em curso.",
      },
    ],
  },
  {
    slug: "diligencias-extrajudiciais",
    title: "Diligências Extrajudiciais",
    description:
      "Notificações, constatações, levantamentos de informações e outras diligências extrajudiciais realizadas em todo o Brasil.",
    image: "/images/solutions/diligencias_extrajudiciais.jpg",
    intro:
      "Nem toda diligência depende de um processo judicial em andamento. Executamos diligências extrajudiciais como notificações, constatações e levantamento de informações, com o mesmo padrão de agilidade e confiabilidade das nossas demais soluções.",
    highlights: [
      {
        title: "Abrangência",
        body: "Notificações extrajudiciais, constatações e levantamento de informações em todo o Brasil.",
      },
      {
        title: "Agilidade",
        body: "Solicitações executadas com rapidez, sem depender do andamento de um processo judicial.",
      },
      {
        title: "Confiabilidade",
        body: "Mesma rede de correspondentes selecionada há mais de 20 anos, comprometida com prazos e qualidade.",
      },
      {
        title: "Registro detalhado",
        body: "Cada diligência é documentada e disponibilizada no sistema para consulta.",
      },
    ],
    steps: [
      {
        title: "Solicite a diligência",
        body: "Informe o tipo de diligência, notificação, constatação ou levantamento de informações.",
      },
      {
        title: "Execução por um correspondente local",
        body: "Um correspondente da nossa rede realiza a diligência no local necessário.",
      },
      {
        title: "Registro detalhado",
        body: "O resultado é documentado, com fotos e relatório quando aplicável.",
      },
      {
        title: "Disponibilização no sistema",
        body: "O relatório fica disponível no sistema para consulta e download.",
      },
    ],
    caseStudy: {
      title: "Notificação extrajudicial com constatação de local",
      body: "Um escritório precisava notificar uma parte e, ao mesmo tempo, constatar a situação de um imóvel envolvido em uma negociação. A diligência foi executada por um correspondente local, com registro fotográfico e relatório detalhado disponibilizado no sistema em poucos dias.",
    },
    faq: [
      {
        question: "Diligências extrajudiciais precisam de um processo em andamento?",
        answer:
          "Não. Elas podem ser solicitadas de forma independente, sem vínculo com um processo judicial em curso.",
      },
      {
        question: "Como recebo o resultado da diligência?",
        answer:
          "O correspondente registra o resultado no sistema, com relatório detalhado disponível para consulta e download.",
      },
    ],
  },
];

export function getSolutionBySlug(slug: string) {
  return SOLUTIONS.find((solution) => solution.slug === slug);
}
