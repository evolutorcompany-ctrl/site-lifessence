/**
 * data.js — Dados do site Lifessence
 * Encoding: UTF-8 (sem BOM)
 * Atualizado: 2026-06
 */

const LIFESSENCE = {

  /* ── PROFISSIONAIS DE SAÚDE ─────────────────────────────── */
  doctors: [
    {
      id: 39572,
      name: "Amanda Arruda",
      slug: "amanda-arruda",
      photo: "assets/images/professionals/amanda-arruda.png",
      specialty: "Fisioterapeuta e Instrutora de Pilates",
      certifications: "Amanda Arruda atua na promoção da saúde e qualidade de vida por meio do Pilates, auxiliando na reabilitação, fortalecimento muscular e alinhamento postural. Seus atendimentos são voltados para pessoas que buscam mais equilíbrio e consciência corporal.",
      education: "Pilates: exercícios que melhoram a postura, aumentam a flexibilidade e fortalecem a musculatura, promovendo alinhamento corporal e prevenindo dores e lesões.",
      experience: "Cada sessão é estruturada conforme a necessidade do paciente, proporcionando acompanhamento individualizado para alcançar os melhores resultados.",
      services: ["pilates"],
      pageUrl: "especialista.html?slug=amanda-arruda"
    },
    {
      id: 39570,
      name: "Ana Carolina Alende",
      slug: "ana-carolina",
      photo: "assets/images/professionals/ana-carolina-alende.png",
      specialty: "Especialista em Fisioterapia Pélvica",
      certifications: "Ana Carolina Alende é formada em Fisioterapia pela Universidade Luterana do Brasil – Campus Santa Maria (2021) e possui formação em Pilates pelo Instituto Golden, em Porto Alegre/RS. Atualmente, realiza pós-graduação em Fisioterapia na Saúde da Mulher na Faculdade Dom Alberto de Santa Cruz/RS. Sua atuação se concentra na prática clínica fundamentada em abordagens específicas para a saúde pélvica e no aprimoramento dos métodos do Pilates. Especialização em Fisioterapia Pélvica (2025).",
      education: "Fisioterapia Pélvica com avaliação e condução de tratamentos direcionados à saúde pélvica feminina. Pilates com sessões orientadas para fortalecimento, mobilidade e equilíbrio.",
      experience: "Prática que integra conhecimentos teóricos e práticos com contínua atualização profissional, com foco na saúde integral da mulher.",
      services: ["fisioterapia-pelvica", "pilates"],
      pageUrl: "especialista.html?slug=ana-carolina"
    },
    {
      id: 39564,
      name: "Carolina Nazzari",
      slug: "carolina-nazzari",
      photo: "assets/images/professionals/carolina-nazzari.png",
      specialty: "Fisioterapeuta esportiva",
      certifications: "Especialização em Fisioterapia Esportiva (2022). Carolina Nazzari é fisioterapeuta formada desde 2016, com pós-graduação em Fisioterapia Manipulativa (técnicas manuais) concluída em 2018. Possui formação complementar em Pilates e diversos cursos voltados para técnicas manuais, liberação miofascial e movimentos funcionais. Seu atendimento é voltado para a recuperação e prevenção de disfunções musculoesqueléticas, promovendo a qualidade de vida por meio de abordagens terapêuticas adaptadas à necessidade de cada paciente.",
      education: "Atendimento personalizado com técnicas como ventosaterapia, agulhamento seco, terapias manuais e eletroterapia. Inclui fisioterapia desportiva para prevenção e tratamento de lesões.",
      experience: "Atendimento estruturado para oferecer soluções eficientes e personalizadas, combinando técnicas variadas conforme a necessidade de cada paciente.",
      services: ["fisioterapia-esportiva"],
      pageUrl: "especialista.html?slug=carolina-nazzari"
    },
    {
      id: 40761,
      name: "Clarice Ferreira",
      slug: "clarice-ferreira",
      photo: "assets/images/professionals/clarice.jpg",
      specialty: "Recepção e Marketing",
      certifications: "Responsável pelo acolhimento na recepção e pelas estratégias de comunicação e marketing da clínica, garantindo que nossos valores cheguem até você.",
      education: "Atendimento ao paciente e ações de marketing digital.",
      experience: "Integra o cuidado na recepção com a gestão da comunicação visual e institucional.",
      services: [],
      pageUrl: ""
    },
    {
      id: 39565,
      name: "Emanuele Rizzon",
      slug: "emanuele-rizzon",
      photo: "assets/images/professionals/emanuele-rizzon.png",
      specialty: "Fisioterapeuta | Instrutora de Pilates | Massoterapeuta",
      certifications: "Emanuele Rizzon oferece atendimento voltado à recuperação funcional, utilizando técnicas fisioterapêuticas que promovem equilíbrio muscular e melhora da mobilidade. Suas abordagens são indicadas tanto para reabilitação quanto para fortalecimento e prevenção de dores e lesões.",
      education: "Pilates Solo com Acessórios e Equipamentos. Fisioterapia indicada para reabilitação pós-lesão, dores musculoesqueléticas e condicionamento físico.",
      experience: "Atendimentos adaptados às necessidades de cada paciente, proporcionando cuidado direcionado e eficaz para a reabilitação e fortalecimento do corpo.",
      services: ["pilates", "massoterapia"],
      pageUrl: "especialista.html?slug=emanuele-rizzon"
    },
    {
      id: 39559,
      name: "Francielle Domingues",
      slug: "francielle-domingues",
      photo: "assets/images/professionals/francielle-domingues.png",
      specialty: "Professora de Yoga",
      certifications: "Francielle Teixeira Domingues é uma profissional dedicada ao equilíbrio integral do ser, unindo técnicas corporais, meditativas e energéticas para promover bem-estar e autoconhecimento. Acredita que a transformação pessoal ocorre por meio da conexão entre corpo e mente, utilizando abordagens como Yoga, meditação e Reiki para guiar seus alunos em um caminho de maior consciência e harmonia.",
      education: "Aulas individuais de Yoga adaptadas às necessidades e objetivos do aluno. Práticas fluídas e meditativas para equilíbrio físico, mental e emocional.",
      experience: "Atendimento personalizado com aulas estruturadas conforme o nível e os objetivos do aluno.",
      services: ["yoga"],
      pageUrl: "especialista.html?slug=francielle-domingues"
    },
    {
      id: 39563,
      name: "Gabrielly Rodrigues",
      slug: "gabrielly-rodrigues",
      photo: "assets/images/professionals/gabrielly-rodrigues.png",
      specialty: "Biomédica | Acupunturista",
      certifications: "Gabrielly iniciou sua trajetória em 2013, atuando na área administrativa de um hospital, experiência que ampliou sua visão sobre o setor da saúde. Em 2016 passou a trabalhar como técnica em enfermagem e, paralelamente, iniciou os estudos em Biomedicina. Formada em 2020 com ênfase em Patologia Clínica, ampliou suas possibilidades ao se especializar em Acupuntura por meio da Associação Brasileira de Acupuntura – ABA. Sua formação também inclui uma pós-graduação em Saúde Estética, reforçando sua prática integrativa.",
      education: "A acupuntura é uma prática da medicina tradicional chinesa que utiliza agulhas finas para estimular pontos específicos do corpo, promovendo equilíbrio energético, alívio da dor e bem-estar.",
      experience: "Prática baseada na compreensão individualizada do paciente, utilizando os conhecimentos adquiridos ao longo da formação para contribuir com o equilíbrio e o bem-estar.",
      services: ["acupuntura"],
      pageUrl: "especialista.html?slug=gabrielly-rodrigues"
    },
    {
      id: 39901,
      name: "Juan Hilbert",
      slug: "juan-hilbert",
      photo: "assets/images/professionals/juan-hilbert.jpg?v=2",
      photoPosition: "center 40%",
      specialty: "Fisioterapeuta e Instrutor de Pilates",
      certifications: "Formado em Fisioterapia pela Universidade Federal de Santa Catarina (UFSC) e especialista em traumato-ortopedia.",
      education: "Aulas de Pilates com foco em movimento consciente, postura, fortalecimento e prevenção de lesões, respeitando as necessidades individuais.",
      experience: "Acompanhamento focado na evolução segura e eficiente, promovendo um espaço de aprendizado e bem-estar.",
      services: ["pilates"],
      pageUrl: "especialista.html?slug=juan-hilbert"
    },
    {
      id: 39562,
      name: "Lídia Castilhos",
      slug: "lidia-castilhos",
      photo: "assets/images/professionals/lidia-castilhos.png",
      specialty: "Podóloga",
      certifications: "Lídia Castilhos possui formação técnica em Podologia pela UCS e graduação em Economia pela mesma instituição. Sua prática é voltada para a aplicação de métodos técnicos na avaliação e tratamento das condições dos pés.",
      education: "Avaliação e tratamento de condições podológicas. Tratamento com laser para micose nas unhas. Procedimentos para correção de unha encravada e calosidades.",
      experience: "Atuação fundamentada em conhecimentos técnicos adquiridos durante sua formação. A prática clínica é orientada pela análise cuidadosa de cada caso.",
      services: ["podologia"],
      pageUrl: "especialista.html?slug=lidia-castilhos"
    },
    {
      id: 39543,
      name: "Lucas Pezzi",
      slug: "lucas-pezzi",
      photo: "assets/images/professionals/lucas-pezzi.png",
      specialty: "Psicólogo",
      certifications: "Lucas Pezzi é psicólogo especializado em Terapia Cognitivo-Comportamental (TCC), com ampla experiência no atendimento a crianças, adolescentes, adultos e pessoas em tratamento para dependência química. Acredita na psicoterapia como um caminho para a mudança e desenvolvimento pessoal, utilizando uma abordagem estruturada e baseada em evidências para ajudar seus pacientes a superarem desafios emocionais e comportamentais.",
      education: "Psicoterapia individual com base na Terapia Cognitivo-Comportamental (TCC). Atendimento especializado para infância e adolescência. Intervenção terapêutica para ansiedade, depressão e transtornos emocionais.",
      experience: "Sessões personalizadas de acordo com as necessidades do paciente. Uso de técnicas da TCC para promover mudanças nos padrões de pensamento e comportamento.",
      services: ["psicologia"],
      pageUrl: "especialista.html?slug=lucas-pezzi"
    },
    {
      id: 39555,
      name: "Maira Tonetta",
      slug: "maira-tonetta",
      photo: "assets/images/professionals/maira-tonetta.png",
      specialty: "Fisioterapeuta | Osteopata",
      certifications: "Maira Canez Tonetta reúne formação e experiência prática na área da saúde. Com atuação de 4 anos em reabilitação e 8 anos em pilates, ela integra os conhecimentos adquiridos na formação em Fisioterapia pela Universidade Federal do Rio Grande do Sul (UFRGS) e na especialização em Osteopatia pelo Instituto Brasileiro de Osteopatia (OIA – Bélgica).",
      education: "Atendimento baseado em princípios osteopáticos, com foco na avaliação e condução dos tratamentos conforme as necessidades individuais de cada paciente.",
      experience: "Maira trabalha com métodos que unem sólida formação acadêmica e prática clínica. Sua condução dos tratamentos é orientada pela análise individualizada de cada caso.",
      services: ["osteopatia"],
      pageUrl: "especialista.html?slug=maira-tonetta"
    },
    {
      id: 39903,
      name: "Marília Chagas",
      slug: "marilia-chagas",
      photo: "assets/images/professionals/marilia-chagas.jpg",
      specialty: "Nutricionista Clínica",
      certifications: "Muito prazer, eu sou Marília Chagas e chego à Lifessence com um propósito claro: transformar sua rotina em aliada da sua saúde - sem que isso vire um desafio impossível.",
      education: "Análise de contexto: Seus exames, seu histórico e sua rotina real são o ponto de partida. Educação, não apenas prescrição: Você entende o porquê de cada escolha. A meta é autonomia, segurança e clareza nas decisões do dia a dia.",
      experience: "Foco na alta: Meu trabalho é para que você evolua até não depender mais de mim. Independência alimentar também é cuidado. Consultas estratégicas, plano adaptado à sua realidade, receitas possíveis e suporte para dúvidas.",
      services: ["nutricao"],
      pageUrl: "especialista.html?slug=marilia-chagas"
    },
    {
      id: 40764,
      name: "Milena Saibe",
      slug: "milena-saibe",
      photo: "assets/images/professionals/milena.jpg",
      specialty: "Coordenadora da Recepção",
      certifications: "Responsável por garantir que sua experiência na Lifessence seja acolhedora e organizada, desde o primeiro contato até o final do seu atendimento.",
      education: "Atendimento ao público e gestão da recepção.",
      experience: "Coordenação da equipe de recepção, priorizando o bem-estar e o acolhimento dos pacientes.",
      services: [],
      pageUrl: ""
    },
    {
      id: 39902,
      name: "Paula Simões",
      slug: "paula-simoes",
      photo: "assets/images/professionals/paula-simoes.jpg?v=2",
      photoPosition: "center 12%",
      specialty: "Fisioterapeuta e Instrutora de Pilates",
      certifications: "Formada em Fisioterapia pela Universidade FEEVALE, acredito que o movimento é uma ferramenta poderosa para promover saúde, qualidade de vida e autonomia.",
      education: "Meu objetivo aqui na Life é oferecer um atendimento humanizado e por meio dele promover flexibilidade, equilíbrio, maior força muscular e resistência.",
      experience: "Estou animada para fazer parte da sua jornada, promovendo saúde, movimento e qualidade de vida através do Pilates.",
      services: ["pilates"],
      pageUrl: "especialista.html?slug=paula-simoes"
    },
    {
      id: 39569,
      name: "Priscila Pail",
      slug: "priscila-pail",
      photo: "assets/images/professionals/priscila-pail.png",
      specialty: "Esteticista | Cosmetóloga",
      certifications: "Esteticista e cosmetóloga formada pela ULBRA Canoas. Doutora em Biologia Celular e Molecular pela PUCRS. Professora universitária desde 2013, com ampla experiência em procedimentos estéticos faciais e corporais.",
      education: "Tratamentos faciais (clareamento, rugas, flacidez, acne, limpeza de pele, toxina botulínica, bioestimuladores de colágeno, preenchimento, fios de PDO). Tratamentos corporais (celulite, gordura localizada, flacidez).",
      experience: "Prática que integra conhecimentos teóricos e práticos adquiridos na formação acadêmica e na contínua atualização profissional.",
      services: ["estetica-avancada"],
      pageUrl: "especialista.html?slug=priscila-pail"
    },
    {
      id: 39558,
      name: "Raquel Giovanella",
      slug: "raquel-giovanella",
      photo: "assets/images/professionals/raquel-giovanella.png",
      specialty: "Esteticista | Especialista em Estética Avançada",
      certifications: "Raquel Giovanella oferece tratamentos estéticos voltados para a revitalização da pele e a harmonização facial. Seus procedimentos utilizam tecnologias e técnicas especializadas para promover resultados seguros e eficazes.",
      education: "Tratamentos faciais e corporais personalizados. Procedimentos estéticos avançados com foco em resultados naturais e seguros.",
      experience: "Cada tratamento é planejado conforme as características e objetivos de cada paciente, priorizando resultados naturais e duradouros.",
      services: ["estetica-avancada"],
      pageUrl: "especialista.html?slug=raquel-giovanella"
    },
    {
      id: 39556,
      name: "Sabrina Stapasolla",
      slug: "sabrina-stapasolla",
      photo: "assets/images/professionals/sabrina-stapasolla.png",
      specialty: "Fisioterapeuta | Osteopata",
      certifications: "Sabrina atua com terapias manuais desde 2006. Formada em Fisioterapia e em Osteopatia pelo Instituto Brasileiro de Osteopatia (OIA – Bélgica), ela integra sua prática com conhecimentos que fortalecem a condução dos tratamentos. Como idealizadora da Clínica Lifessence, ela contribui para a estruturação de um espaço voltado à promoção da saúde e do bem-estar.",
      education: "Atendimento fisioterapêutico e osteopático com abordagem integrativa. Técnicas manuais, mobilização articular e reabilitação funcional personalizada.",
      experience: "Cada tratamento é planejado conforme as características e objetivos de cada paciente, combinando fisioterapia convencional e princípios osteopáticos.",
      services: ["osteopatia"],
      pageUrl: "especialista.html?slug=sabrina-stapasolla"
    }
  ],

  /* ── EQUIPE ADMINISTRATIVA ──────────────────────────────── */
  team: [
    {
      id: 40761,
      name: "Clarice",
      slug: "clarice",
      photo: "assets/images/professionals/clarice.jpg",
      role: "Secretária",
      isAdmin: true
    },
    {
      id: 40764,
      name: "Milena",
      slug: "milena",
      photo: "assets/images/professionals/milena.jpg",
      role: "Secretária",
      isAdmin: true
    },
    {
      id: 40767,
      name: "Yasmin",
      slug: "yasmin",
      photo: "assets/images/professionals/yasmin.jpg",
      role: "Auxiliar Administrativa",
      isAdmin: true
    },
    {
      id: 40769,
      name: "Hadassa",
      slug: "hadassa",
      photo: "assets/images/professionals/hadassa.jpg",
      role: "Auxiliar Administrativa",
      isAdmin: true
    }
  ],

  /* ── SERVIÇOS ─────────────────────────────────────────── */
  services: [
    {
      id: 39514,
      name: "Pilates",
      slug: "pilates",
      description: "Conecte corpo e mente com exercícios que respeitam seus limites e promovem equilíbrio, postura e bem-estar duradouro.",
      longDescription: "O Pilates é um método de exercícios que trabalha o fortalecimento muscular, a flexibilidade e a consciência corporal. Indicado para todas as idades e condições físicas, promove melhora da postura, alívio de dores e qualidade de vida.",
      benefits: ["Melhora da postura e alinhamento corporal", "Fortalecimento muscular profundo", "Aumento de flexibilidade e mobilidade", "Alívio de dores musculoesqueléticas", "Prevenção e reabilitação de lesões"],
      faqs: [
        { q: "O Pilates é indicado para quem sente dores nas costas?", a: "Sim! O Pilates é um dos métodos mais recomendados para aliviar dores na coluna, pois fortalece a musculatura e melhora a postura, reduzindo o impacto nas articulações." },
        { q: "Em quanto tempo começo a sentir os resultados?", a: "Os primeiros benefícios podem ser percebidos em poucas semanas. No entanto, o tempo varia de pessoa para pessoa, dependendo da frequência das aulas e das condições individuais." },
        { q: "O Pilates é seguro para todas as idades?", a: "Sim! Com a orientação correta, o Pilates pode ser praticado por pessoas de todas as idades, desde jovens até idosos, adaptando-se às necessidades individuais de cada aluno." }
      ],
      image: "assets/images/services/pilates.webp",
      icon: "assets/images/icons/Pilates.svg",
      professionals: ["emanuele-rizzon", "amanda-arruda", "ana-carolina", "paula-simoes", "juan-hilbert"],
      pageUrl: "servico.html?slug=pilates"
    },
    {
      id: 39129,
      name: "Fisioterapia Esportiva",
      slug: "fisioterapia-esportiva",
      description: "Reabilitação e prevenção de lesões esportivas com atendimento especializado e protocolos baseados em evidências.",
      longDescription: "A Fisioterapia Esportiva é voltada ao tratamento e prevenção de lesões decorrentes da prática esportiva. Combina técnicas como agulhamento seco, ventosaterapia, terapias manuais e eletroterapia para uma recuperação eficiente.",
      benefits: ["Tratamento de lesões musculares e articulares", "Prevenção de lesões no esporte", "Reabilitação pós-cirúrgica", "Melhora do desempenho atlético", "Agulhamento seco e ventosaterapia"],
      faqs: [
        { q: "Quais tipos de lesões e dores a fisioterapia esportiva pode tratar?", a: "A fisioterapia esportiva atua no alívio das dores musculares, na reabilitação de lesões e na melhora da mobilidade, ajudando a prevenir novos problemas e permitindo que você retome seus treinos com segurança." },
        { q: "Como funciona o processo de reabilitação?", a: "O tratamento começa com uma avaliação detalhada para identificar a origem das dores e lesões. A partir daí, são aplicadas técnicas personalizadas que restauram a função do seu corpo e promovem uma recuperação gradual e eficaz." },
        { q: "Em quanto tempo posso começar a notar os benefícios?", a: "Embora os resultados variem de acordo com cada caso, muitos atletas já percebem alívio e uma melhora na mobilidade logo nas primeiras sessões, o que ajuda a reconstruir a confiança e a segurança em seus movimentos." }
      ],
      image: "assets/images/services/fisioterapia-esportiva.webp",
      icon: "assets/images/icons/Fisioterapia-Esportiva.svg",
      professionals: ["carolina-nazzari"],
      pageUrl: "servico.html?slug=fisioterapia-esportiva"
    },
    {
      id: 39176,
      name: "Osteopatia",
      slug: "osteopatia",
      description: "Técnicas manuais para tratar disfunções do sistema musculoesquelético de forma holística, respeitando a autocura do organismo.",
      longDescription: "A Osteopatia é uma abordagem terapêutica manual que busca identificar e tratar desequilíbrios estruturais e funcionais do corpo. Parte do princípio de que o organismo tem capacidade de autocura quando em equilíbrio.",
      benefits: ["Tratamento de dores crônicas e agudas", "Melhora da mobilidade articular", "Equilíbrio do sistema musculoesquelético", "Abordagem holística e não-invasiva", "Prevenção de recorrência de lesões"],
      faqs: [
        { q: "Quais tipos de desconforto a osteopatia pode tratar?", a: "A osteopatia é eficaz para aliviar dores musculares, rigidez nas articulações, desconfortos pós-lesões e outros sinais de desequilíbrio corporal que comprometem sua qualidade de vida." },
        { q: "Como funciona o tratamento osteopático?", a: "O tratamento envolve técnicas manuais suaves que estimulam a mobilidade e a regeneração dos tecidos, promovendo a restauração do equilíbrio do seu corpo de maneira natural e progressiva." },
        { q: "Em quanto tempo posso começar a sentir os benefícios?", a: "Os resultados variam de pessoa para pessoa, mas muitos já relatam uma sensação de alívio e melhoria na mobilidade nas primeiras consultas, incentivando a continuidade do tratamento para resultados mais duradouros." }
      ],
      image: "assets/images/services/osteopatia.webp",
      icon: "assets/images/icons/Osteopatia.svg",
      professionals: ["maira-tonetta", "sabrina-stapasolla"],
      pageUrl: "servico.html?slug=osteopatia"
    },
    {
      id: 39502,
      name: "Fisioterapia Pélvica",
      slug: "fisioterapia-pelvica",
      description: "Cuidado especializado para a saúde pélvica feminina e masculina em todas as fases da vida.",
      longDescription: "A Fisioterapia Pélvica trata condições relacionadas ao assoalho pélvico, como incontinência urinária, disfunções sexuais, dores pélvicas e preparação para o parto.",
      benefits: ["Tratamento de incontinência urinária", "Preparação para o parto e pós-parto", "Tratamento de dores pélvicas", "Fortalecimento do assoalho pélvico", "Reabilitação pós-cirurgia pélvica"],
      faqs: [
        { q: "Quais situações podem ser beneficiadas pela fisioterapia pélvica?", a: "Essa abordagem é indicada para tratar dores pélvicas, problemas de incontinência, disfunções durante a relação íntima, e outros desconfortos que afetam a região pélvica. Ela atua restaurando o equilíbrio muscular e aliviando os sintomas que impactam sua qualidade de vida." },
        { q: "O tratamento é invasivo ou doloroso?", a: "A fisioterapia pélvica é um método seguro e não invasivo. As técnicas são aplicadas de forma cuidadosa e personalizada, priorizando o conforto e a segurança, sem causar dor e sem procedimentos agressivos." },
        { q: "Em quanto tempo posso perceber melhorias?", a: "Os resultados variam conforme as necessidades individuais, mas muitas pacientes já relatam sentir alívio e uma melhora na confiança logo nas primeiras sessões, o que incentiva a continuidade do tratamento para resultados ainda mais duradouros." }
      ],
      image: "assets/images/services/fisioterapia-pelvica.webp",
      icon: "assets/images/icons/Fisioterapia-Pelvica.svg",
      professionals: ["ana-carolina"],
      pageUrl: "servico.html?slug=fisioterapia-pelvica"
    },
    {
      id: 39508,
      name: "Estética Avançada",
      slug: "estetica-avancada",
      description: "Procedimentos estéticos de alta tecnologia para tratamentos corporais e faciais com resultados naturais.",
      longDescription: "A Estética Avançada engloba procedimentos de alta complexidade para rejuvenescimento, modelagem corporal e tratamentos especializados, utilizando tecnologias modernas e técnicas minimamente invasivas.",
      benefits: ["Tratamento de celulite e gordura localizada", "Rejuvenescimento facial avançado", "Fios de PDO e bioestimuladores", "Resultados naturais e duradouros", "Protocolos personalizados"],
      faqs: [
        { q: "Como funciona a avaliação inicial?", a: "Realizamos uma consulta completa para entender seus objetivos estéticos e avaliar as condições da pele e do corpo. A partir daí, elaboramos um protocolo personalizado para atender às suas necessidades com segurança e eficácia." },
        { q: "Em quanto tempo verei os resultados?", a: "Os resultados variam conforme o procedimento e as características individuais. Muitos tratamentos já mostram melhoras visíveis nas primeiras sessões, com resultados mais completos após o ciclo completo de tratamento." },
        { q: "Os tratamentos são invasivos?", a: "Trabalhamos principalmente com procedimentos minimamente invasivos e não invasivos, combinando tecnologias avançadas e técnicas seguras que promovem resultados naturais e duradouros." }
      ],
      image: "assets/images/services/estetica-avancada.webp",
      icon: "assets/images/icons/Estetica.svg",
      professionals: ["raquel-giovanella", "priscila-pail"],
      pageUrl: "servico.html?slug=estetica-avancada"
    },
    {
      id: 39756,
      name: "Massoterapia",
      slug: "massoterapia",
      description: "Massagens terapêuticas que aliviam tensões, reduzem estresse e promovem relaxamento profundo e bem-estar.",
      longDescription: "A Massoterapia utiliza diferentes técnicas de massagem para aliviar tensões musculares, melhorar a circulação sanguínea, reduzir o estresse e promover o bem-estar físico e mental.",
      benefits: ["Alívio de tensões musculares", "Redução do estresse e ansiedade", "Melhora da circulação sanguínea", "Relaxamento profundo", "Melhora da qualidade do sono"],
      faqs: [],
      image: "assets/images/services/massoterapia.webp",
      icon: "assets/images/icons/Massoterapia.svg",
      professionals: ["emanuele-rizzon"],
      pageUrl: "servico.html?slug=massoterapia"
    },
    {
      id: 39510,
      name: "Podologia",
      slug: "podologia",
      description: "Cuidados podológicos especializados, incluindo tratamento de micoses, unhas encravadas e todas as condições dos pés.",
      longDescription: "A Podologia é a especialidade dedicada ao diagnóstico, prevenção e tratamento das afecções dos pés. Oferecemos tratamento de micoses, unhas encravadas, calosidades e muito mais com tecnologia laser.",
      benefits: ["Tratamento de micose nas unhas (laser)", "Correção de unhas encravadas", "Tratamento de calosidades", "Avaliação e cuidado integral dos pés", "Prevenção de complicações em diabéticos"],
      faqs: [
        { q: "Quais problemas a podologia trata?", a: "Cuidamos de unhas encravadas, calos, micoses, rachaduras nos pés, pés diabéticos e outros desconfortos que podem comprometer sua mobilidade e bem-estar." },
        { q: "O tratamento é doloroso?", a: "Nossos procedimentos são feitos com técnicas modernas e cuidadosas para minimizar qualquer desconforto, proporcionando um atendimento seguro e tranquilo." },
        { q: "Preciso de podologia mesmo sem sentir dor?", a: "Sim! A podologia também atua na prevenção. Pequenos incômodos podem evoluir para problemas mais graves se não forem tratados a tempo. Cuidar dos pés regularmente evita complicações futuras." }
      ],
      image: "assets/images/services/podologia.webp",
      icon: "assets/images/icons/Podologia.svg",
      professionals: ["lidia-castilhos"],
      pageUrl: "servico.html?slug=podologia"
    },
    {
      id: 39511,
      name: "Psicologia",
      slug: "psicologia",
      description: "Suporte psicológico para o bem-estar emocional e mental, com abordagem humanizada, acolhedora e cientificamente embasada.",
      longDescription: "A Psicologia na Lifessence oferece atendimento individual baseado na Terapia Cognitivo-Comportamental (TCC), com especialização em psicoterapia para infância, adolescência e adultos.",
      benefits: ["Atendimento para ansiedade e depressão", "Psicoterapia para crianças e adolescentes", "Terapia Cognitivo-Comportamental (TCC)", "Desenvolvimento emocional e autoconhecimento", "Intervenção em transtornos emocionais"],
      faqs: [
        { q: "Como a psicoterapia pode me ajudar?", a: "A psicoterapia auxilia na identificação de padrões emocionais e comportamentais que podem estar afetando sua vida. Com o suporte de um profissional, você aprende a lidar melhor com desafios e a construir hábitos mais saudáveis." },
        { q: "Quanto tempo leva para sentir os benefícios?", a: "Os benefícios variam de acordo com cada pessoa e o tipo de dificuldade trabalhada. Muitas pessoas já relatam perceber mudanças positivas nas primeiras semanas de acompanhamento." },
        { q: "Preciso estar passando por um grande problema para fazer terapia?", a: "Não! A terapia é para qualquer pessoa que deseja se conhecer melhor, desenvolver inteligência emocional e ter mais qualidade de vida." }
      ],
      image: "assets/images/services/psicologia.webp",
      icon: "assets/images/icons/Psicologia.svg",
      professionals: ["lucas-pezzi"],
      pageUrl: "servico.html?slug=psicologia"
    },
    {
      id: 39512,
      name: "Acupuntura",
      slug: "acupuntura",
      description: "Medicina tradicional chinesa para equilíbrio energético, alívio da dor e promoção do bem-estar de forma natural e holística.",
      longDescription: "A Acupuntura é uma das práticas mais antigas da medicina, com eficácia comprovada para tratamento de dores, ansiedade, insônia e diversas condições. Utiliza agulhas finas em pontos específicos do corpo.",
      benefits: ["Alívio de dores crônicas e agudas", "Tratamento de ansiedade e insônia", "Equilíbrio energético e bem-estar", "Apoio ao tratamento de infertilidade", "Fortalecimento do sistema imunológico"],
      faqs: [
        { q: "A acupuntura ajuda em quais tipos de dor?", a: "A acupuntura é eficaz no tratamento de dores musculares, articulares, enxaquecas, dores nas costas e tensões acumuladas pelo estresse do dia a dia." },
        { q: "Quantas sessões são necessárias para sentir os efeitos?", a: "Os benefícios podem ser percebidos já na primeira sessão, mas a quantidade ideal varia conforme cada caso. Um plano personalizado será elaborado para atender suas necessidades." },
        { q: "Quem pode fazer acupuntura?", a: "A técnica é segura para a maioria das pessoas, inclusive para quem busca alívio da ansiedade, insônia e dores crônicas. Caso tenha dúvidas específicas, consulte um especialista." }
      ],
      image: "assets/images/services/acupuntura.webp",
      icon: "assets/images/icons/Acupuntura.svg",
      professionals: ["gabrielly-rodrigues"],
      pageUrl: "servico.html?slug=acupuntura"
    },
    {
      id: 39513,
      name: "Yoga",
      slug: "yoga",
      description: "Práticas fluídas e meditativas para integrar corpo, mente e espírito com consciência, leveza e equilíbrio.",
      longDescription: "O Yoga na Lifessence é praticado com abordagem personalizada, unindo métodos do Hatha, Vinyasa, Tantra e Vibracional. Movimento, consciência corporal e conexão profunda.",
      benefits: ["Equilíbrio físico, mental e emocional", "Melhora da flexibilidade e força", "Redução do estresse e ansiedade", "Práticas adaptadas a cada nível", "Meditação e respiração consciente"],
      faqs: [
        { q: "Nunca fiz Yoga antes. Posso participar?", a: "Sim! Nossas aulas são adaptadas para todos os níveis, desde iniciantes até praticantes experientes. Nosso objetivo é fazer você se sentir confortável e seguro em cada movimento." },
        { q: "Quais são os principais benefícios do Yoga?", a: "A prática regular de Yoga pode ajudar a reduzir a ansiedade, melhorar a qualidade do sono, fortalecer o corpo, aumentar a flexibilidade e proporcionar uma sensação geral de bem-estar." },
        { q: "Preciso de equipamentos específicos para a aula?", a: "Não se preocupe! Disponibilizamos tapetes e todos os materiais necessários para a sua prática. Basta vir com roupas confortáveis e o desejo de cuidar de si mesmo." }
      ],
      image: "assets/images/services/yoga.webp",
      icon: "assets/images/icons/Yoga.svg",
      professionals: ["francielle-domingues"],
      pageUrl: "servico.html?slug=yoga"
    },
    {
      id: 39910,
      name: "Nutrição Clínica",
      slug: "nutricao",
      description: "A Nutrição Clínica tem como objetivo promover saúde, prevenir doenças e melhorar a qualidade de vida por meio de uma alimentação personalizada.",
      longDescription: "A Nutrição Clínica tem como objetivo promover saúde, prevenir doenças e melhorar a qualidade de vida por meio de uma alimentação personalizada. Desenvolvemos estratégias nutricionais para tratar desequilíbrios metabólicos, auxiliando no funcionamento adequado do organismo e na promoção do bem-estar de forma sustentável.",
      benefits: [
        "Atendimento individualizado",
        "Plano alimentar adaptado à rotina e aos objetivos do paciente",
        "Foco na prevenção e no tratamento das causas dos desequilíbrios de saúde",
        "Educação nutricional para promover hábitos saudáveis a longo prazo"
      ],
      faqs: [
        { q: "Para quem é indicado?", a: "O atendimento é destinado a adultos a partir de 18 anos, sem limite máximo de idade, que desejam melhorar sua saúde, prevenir doenças ou controlar condições já existentes por meio da alimentação." },
        { q: "Quais as áreas de atuação?", a: "Atuamos em saúde digestiva, doenças crônicas (diabetes, hipertensão), síndrome metabólica e esteatose hepática, alterações da tireoide, dores articulares relacionadas à inflamação e melhora da disposição e sono." },
        { q: "A nutrição clínica possui contraindicações?", a: "A nutrição não possui contraindicações, pois todos precisam se alimentar. O que existem são estratégias específicas para cada patologia, priorizando a individualidade de cada paciente." }
      ],
      image: "assets/images/services/nutricao.webp",
      icon: "assets/images/icons/Nutricao.svg",
      professionals: ["marilia-chagas"],
      pageUrl: "servico.html?slug=nutricao"
    }
  ],

  /* ── BLOG ──────────────────────────────────────────────── */
  posts: [
    {
      title: "A acupuntura para aliviar a ansiedade",
      slug: "a-acupuntura-para-aliviar-a-ansiedade",
      excerpt: "A acupuntura oferece um caminho natural e holístico para aliviar a ansiedade. Ao equilibrar a energia do corpo, ela ajuda a promover tranquilidade e bem-estar.",
      category: "Acupuntura",
      date: "2024-12-06",
      image: "assets/images/services/acupuntura.webp"
    },
    {
      title: "Você sofre dores de cabeça frequentes?",
      slug: "voce-sofre-dores-de-cabeca-frequentes",
      excerpt: "A cefaleia de origem cervical, também conhecida como cefaleia cervicogênica, é um tipo de dor de cabeça que merece atenção especializada.",
      category: "Fisioterapia",
      date: "2024-12-06",
      image: "assets/images/services/fisioterapia-esportiva.webp"
    },
    {
      title: "Foco na autocura do organismo",
      slug: "foco-na-autocura-do-organismo",
      excerpt: "A relação entre paciente e terapeuta, de maneira mais humana e menos intervencionista, é o que define a conduta da nossa clínica.",
      category: "Osteopatia",
      date: "2024-12-06",
      image: "assets/images/services/osteopatia.webp"
    },
    {
      title: "Bioestimulação de Colágeno",
      slug: "bioestimulacao-de-colageno",
      excerpt: "Procedimentos modernos que estimulam o colágeno da pele promovendo rejuvenescimento natural, firmeza e luminosidade de forma segura.",
      category: "Estética",
      date: "2024-12-09",
      image: "assets/images/services/estetica-avancada.webp"
    },
    {
      title: "Yoga não é só meditação",
      slug: "yoga-nao-e-so-meditacao",
      excerpt: "Yoga é uma atividade física integral que combina movimento, consciência corporal e respiração. Muito mais do que meditação!",
      category: "Yoga",
      date: "2024-12-09",
      image: "assets/images/services/yoga.webp"
    },
    {
      title: "Fortaleça seu Corpo com Pilates",
      slug: "fortaleca-seu-corpo",
      excerpt: "Após a gestação, o corpo da mulher passa por muitas mudanças. O Pilates é um aliado essencial na recuperação e no fortalecimento.",
      category: "Pilates",
      date: "2024-12-09",
      image: "assets/images/services/pilates.webp"
    }
  ],

  /* ── CONTATO ─────────────────────────────────────────── */
  contact: {
    whatsapp: "5554981541639",
    phone: "(54) 98154-1639",
    email: "lifessence@lifessence.com.br",
    address: "Avenida Rio Branco, 1718, Caxias do Sul, RS 95096-000",
    hours: "Segunda a Sexta: 08:00 às 19:30",
    instagram: "https://www.instagram.com/lifessencesaudeebemestar/",
    facebook: "https://www.facebook.com/lifessencesaudeebemestar/"
  }

};

/* ── Render Helpers ─────────────────────────────────────── */

function renderDoctorCard(doc) {
  const link = doc.pageUrl
    ? `<a href="${doc.pageUrl}" class="btn-profile">Ver perfil →</a>`
    : '';
  const imgStyle = doc.photoPosition ? ` style="object-position:${doc.photoPosition} !important;"` : '';
  const photoHtml = doc.photo
    ? `<a href="${doc.pageUrl || '#'}"><img class="doctor-img" src="${doc.photo}" alt="Foto de ${doc.name}" loading="lazy"${imgStyle}></a>`
    : `<div class="doctor-img-placeholder"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="48" height="48"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg></div>`;
  return `
    <div class="doctor-card fade-in">
      ${photoHtml}
      <div class="doctor-info">
        <h5>${doc.name}</h5>
        <span class="doctor-specialty">${doc.specialty}</span>
        ${doc.certifications ? `<p class="doctor-bio${(doc.slug === 'clarice-ferreira' || doc.slug === 'milena-saibe') ? ' full-text' : ''}">${doc.certifications}</p>` : ''}
        ${link}
      </div>
    </div>`;
}

function renderServiceCard(svc) {
  const icon = svc.icon
    ? `<img src="${svc.icon}" alt="" class="service-icon-img" loading="lazy" aria-hidden="true">`
    : '';
  const link = svc.pageUrl
    ? `<a href="${svc.pageUrl}" class="btn-service-more">Saiba mais →</a>`
    : '';
  return `
    <div class="service-card service-card-img fade-in">
      <div class="service-img-wrap">
        <img src="${svc.image}" alt="${svc.name}" loading="lazy"
             onerror="this.style.background='linear-gradient(135deg,#f0e8ed,#e8d5e8)';this.style.height='180px';">
      </div>
      <div class="service-card-body">
        <div class="service-card-title-row">
          ${icon}
          <h5>${svc.name}</h5>
        </div>
        <p>${svc.description}</p>
        ${link}
      </div>
    </div>`;
}

function renderBlogCard(post) {
  const date = new Date(post.date).toLocaleDateString('pt-BR', {
    day: '2-digit', month: 'long', year: 'numeric'
  });
  return `
    <article class="blog-card fade-in">
      <div class="blog-card-img">
        <img src="${post.image}" alt="${post.title}" loading="lazy">
      </div>
      <div class="blog-card-body">
        <span class="blog-tag">${post.category}</span>
        <h5>${post.title}</h5>
        <p>${post.excerpt}</p>
        <span class="blog-meta">${date}</span>
      </div>
    </article>`;
}

function populate(selector, items, renderFn) {
  const el = document.querySelector(selector);
  if (!el) return;
  el.innerHTML = items.map(renderFn).join('');
}
