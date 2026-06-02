/**
 * data.js — Dados estáticos do site Lifessence
 * Substitui: Advanced Custom Fields (ACF Pro), Custom Post Type UI,
 *            e todas as chamadas dinâmicas ao WordPress.
 * Extraído de: wp_postmeta.sql + wp_posts.sql (backup 2026-04-22)
 */

const LIFESSENCE = {

  /* ── MÉDICOS / ESPECIALISTAS ─────────────────────────── */
  doctors: [
    {
      id: 39543,
      name: "Lucas Pezzi",
      slug: "lucas-pezzi",
      photo: "https://lifessence.com.br/wp-content/uploads/2025/09/9.png",
      specialty: "Psicólogo",
      certifications: "Graduação em Psicologia – UCS (2008). Especialização em Terapia Cognitivo-Comportamental – UFRGS (2010). Atuação em Psicoterapia Infantil e Adolescência.",
      education: "Psicoterapia individual com base na Terapia Cognitivo-Comportamental. Atendimento especializado para infância e adolescência. Intervenção terapêutica para ansiedade, depressão e transtornos emocionais.",
      experience: "Sessões personalizadas, de acordo com as necessidades do paciente. Uso de técnicas da Terapia Cognitivo-Comportamental para promover mudanças nos padrões de pensamento e comportamento.",
      quote: "",
      instagram: "",
      facebook: "",
      linkedin: "",
      email: ""
    },
    {
      id: 39555,
      name: "Maira Tonetta",
      slug: "maira-tonetta",
      photo: "https://lifessence.com.br/wp-content/uploads/2025/09/8.png",
      specialty: "Fisioterapeuta | Osteopata",
      certifications: "Fisioterapia: Graduação pela UFRGS (2015). Osteopatia: Especialização pelo Instituto Brasileiro de Osteopatia (OIA – Bélgica).",
      education: "Atendimento baseado em princípios osteopáticos, com foco na avaliação e condução dos tratamentos conforme as necessidades individuais.",
      experience: "Maira trabalha com métodos que unem sua sólida formação acadêmica e a prática clínica. Sua condução dos tratamentos é orientada pela análise individual de cada paciente.",
      quote: "",
      instagram: "",
      facebook: "",
      linkedin: "",
      email: ""
    },
    {
      id: 39556,
      name: "Sabrina Stapasolla",
      slug: "sabrina-stapasolla",
      photo: "https://lifessence.com.br/wp-content/uploads/2025/09/3-1.png",
      specialty: "Esteticista | Cosmetóloga",
      certifications: "Esteticista e cosmetóloga. Especialização em procedimentos faciais e corporais avançados.",
      education: "Procedimentos faciais e corporais como toxina botulínica, preenchimentos faciais, bioestimuladores de colágeno, peelings de diamante e químico, limpeza de pele profunda.",
      experience: "Cada tratamento é planejado conforme as características e objetivos de cada paciente. A abordagem personalizada permite alcançar resultados naturais e compatíveis com as necessidades individuais.",
      quote: "",
      instagram: "",
      facebook: "",
      linkedin: "",
      email: ""
    },
    {
      id: 39558,
      name: "Raquel Giovanella",
      slug: "raquel-giovanella",
      photo: "https://lifessence.com.br/wp-content/uploads/2025/09/4-1.png",
      specialty: "Estética Avançada",
      certifications: "Especialização em Estética Clínica e procedimentos faciais e corporais.",
      education: "Tratamentos faciais e corporais personalizados. Procedimentos estéticos avançados com foco em resultados naturais.",
      experience: "Cada tratamento é planejado conforme as características e objetivos de cada paciente.",
      quote: "",
      instagram: "",
      facebook: "",
      linkedin: "",
      email: ""
    },
    {
      id: 39559,
      name: "Francielle Domingues",
      slug: "francielle-domingues",
      photo: "https://lifessence.com.br/wp-content/uploads/2025/09/Fotos-Lifessence.png",
      specialty: "Professora de Yoga | Reiki",
      certifications: "Professora de Yoga e meditação, com práticas fluídas e meditativas baseadas no Hatha, Vinyasa, Tantra e Vibracional. Ministrante de cursos de Reiki nos níveis I, II e III. Graduanda em Psicologia pela FSG.",
      education: "Yoga Personalizado: Aulas individuais adaptadas às necessidades e objetivos do aluno. Práticas fluídas e meditativas: Métodos do Hatha, Vinyasa, Tantra e Vibracional para equilíbrio físico, mental e emocional.",
      experience: "Atendimento Personalizado: As aulas são estruturadas conforme o nível e os objetivos do aluno. Flexibilidade de Local: As práticas podem ser realizadas em domicílio ou em espaço adequado.",
      quote: "",
      instagram: "",
      facebook: "",
      linkedin: "",
      email: ""
    },
    {
      id: 39562,
      name: "Lídia Castilhos",
      slug: "lidia-castilhos",
      photo: "https://lifessence.com.br/wp-content/uploads/2025/09/10-1.png",
      specialty: "Podologista",
      certifications: "Formação técnica em Podologia pela UCS. Graduação em Economia pela UCS.",
      education: "Podologia: Avaliação e tratamento de condições podológicas. Tratamento com laser para micose nas unhas. Procedimentos para correção de unha encravada.",
      experience: "A atuação de Lídia é fundamentada em conhecimentos técnicos adquiridos durante sua formação. A prática clínica orienta-se pela análise cuidadosa de cada caso.",
      quote: "",
      instagram: "",
      facebook: "",
      linkedin: "",
      email: ""
    },
    {
      id: 39563,
      name: "Gabrielly Rodrigues",
      slug: "gabrielly-rodrigues",
      photo: "https://lifessence.com.br/wp-content/uploads/2025/09/1-1.png",
      specialty: "Biomédica | Acupunturista",
      certifications: "Graduação em Biomedicina – Ênfase em Patologia Clínica. Pós-graduação em Acupuntura – UCS em parceria com a ABA. Pós-graduação em Saúde Estética – FSG.",
      education: "A acupuntura é uma prática da medicina tradicional chinesa que utiliza agulhas finas para estimular pontos específicos do corpo, promovendo equilíbrio energético, alívio da dor e bem-estar.",
      experience: "A prática de Gabrielly baseia-se na compreensão individualizada do paciente, utilizando os conhecimentos adquiridos ao longo de sua formação para contribuir com o equilíbrio e o bem-estar.",
      quote: "",
      instagram: "",
      facebook: "",
      linkedin: "",
      email: ""
    },
    {
      id: 39564,
      name: "Carolina Nazzari",
      slug: "carolina-nazzari",
      photo: "https://lifessence.com.br/wp-content/uploads/2025/09/13-1.png",
      specialty: "Fisioterapeuta",
      certifications: "Formação acadêmica em Fisioterapia (2016). Pós-graduação em Fisioterapia Manipulativa (técnicas manuais) 2018. Pilates.",
      education: "Atendimento personalizado com técnicas como ventosaterapia, agulhamento seco, terapias manuais e eletroterapia. Inclui fisioterapia desportiva para prevenção e tratamento de lesões.",
      experience: "O atendimento é estruturado para oferecer soluções eficientes e personalizadas, combinando técnicas variadas conforme a necessidade de cada paciente.",
      quote: "",
      instagram: "",
      facebook: "",
      linkedin: "",
      email: ""
    },
    {
      id: 39565,
      name: "Emanuele Rizzon",
      slug: "emanuele-rizzon",
      photo: "https://lifessence.com.br/wp-content/uploads/2025/09/11.png",
      specialty: "Fisioterapeuta | Pilates",
      certifications: "Graduação em Fisioterapia pelo Centro Universitário da Serra Gaúcha (2017).",
      education: "Pilates Solo com Acessórios e Equipamentos. Fisioterapia: Indicada para reabilitação pós-lesão, dores musculoesqueléticas e condicionamento físico.",
      experience: "Os atendimentos são adaptados às necessidades de cada paciente, proporcionando um cuidado direcionado e eficaz para a reabilitação e fortalecimento do corpo.",
      quote: "",
      instagram: "",
      facebook: "",
      linkedin: "",
      email: ""
    },
    {
      id: 39569,
      name: "Priscila Pail",
      slug: "priscila-pail",
      photo: "https://lifessence.com.br/wp-content/uploads/2025/09/5-1.png",
      specialty: "Esteticista | Cosmetóloga",
      certifications: "Esteticista e cosmetóloga formada pela ULBRA Canoas. Doutora em biologia celular e molecular pela PUCRS. Professora universitária desde 2013.",
      education: "Tratamentos faciais (clareamento, rugas, flacidez de pele, acne, limpeza de pele, botox, bioestimuladores de colágeno, preenchimento, fios de PDO). Tratamentos corporais (celulite, gordura localizada, flacidez).",
      experience: "A prática de Priscila integra conhecimentos teóricos e práticos adquiridos em sua formação acadêmica e contínua atualização profissional.",
      quote: "",
      instagram: "",
      facebook: "",
      linkedin: "",
      email: ""
    },
    {
      id: 39570,
      name: "Ana Carolina Alende",
      slug: "ana-carolina",
      photo: "https://lifessence.com.br/wp-content/uploads/2025/09/14-1.png",
      specialty: "Fisioterapeuta Pélvica | Pilates",
      certifications: "Fisioterapeuta formada pela ULBRA (2021). Pilates pelo Instituto Golden em Porto Alegre/RS. Pós-graduanda em Fisioterapia na Saúde da Mulher.",
      education: "Fisioterapia Pélvica: Avaliação e condução de tratamentos direcionados à saúde pélvica. Pilates: Sessões orientadas para o fortalecimento, mobilidade e equilíbrio.",
      experience: "A prática de Ana Carolina integra conhecimentos teóricos e práticos adquiridos em sua formação acadêmica e contínua atualização profissional.",
      quote: "",
      instagram: "",
      facebook: "",
      linkedin: "",
      email: ""
    },
    {
      id: 39572,
      name: "Amanda Arruda",
      slug: "amanda-arruda",
      photo: "https://lifessence.com.br/wp-content/uploads/2025/09/15-1.png",
      specialty: "Fisioterapeuta | Pilates",
      certifications: "Graduação em Fisioterapia pela Universidade Franciscana de Santa Maria (2018).",
      education: "Pilates: Exercícios que melhoram a postura, aumentam a flexibilidade e fortalecem a musculatura, promovendo o alinhamento corporal e prevenindo dores e lesões.",
      experience: "Cada sessão é estruturada conforme a necessidade do paciente, proporcionando um acompanhamento individualizado para alcançar melhores resultados.",
      quote: "",
      instagram: "",
      facebook: "",
      linkedin: "",
      email: ""
    },
    {
      id: 40757,
      name: "Mariana Zenato",
      slug: "mariana",
      photo: "https://lifessence.com.br/wp-content/uploads/2025/12/Foto-3.jpg",
      specialty: "Nutricionista",
      certifications: "Pós-graduada em Comportamento Alimentar em Emagrecimento Consciente.",
      education: "Auxiliar no desenvolvimento de um comportamento alimentar harmônico, promovendo uma relação mais leve e consciente entre o paciente e os alimentos.",
      experience: "Mariana atua com foco em resultados reais e duradouros, sem dietas restritivas ou promessas milagrosas. Seu trabalho é pautado na ciência, no acolhimento e na construção de um estilo de vida saudável.",
      quote: "",
      instagram: "",
      facebook: "",
      linkedin: "",
      email: ""
    },
    {
      id: 40761,
      name: "Clarice",
      slug: "clarice",
      photo: "https://lifessence.com.br/wp-content/uploads/2025/12/Foto-5.jpg",
      specialty: "Especialista",
      certifications: "",
      education: "",
      experience: "",
      quote: "",
      instagram: "",
      facebook: "",
      linkedin: "",
      email: ""
    },
    {
      id: 40764,
      name: "Milena",
      slug: "milena",
      photo: "https://lifessence.com.br/wp-content/uploads/2025/12/Foto-4.jpg",
      specialty: "Especialista",
      certifications: "",
      education: "",
      experience: "",
      quote: "",
      instagram: "",
      facebook: "",
      linkedin: "",
      email: ""
    },
    {
      id: 40767,
      name: "Yasmin",
      slug: "yasmin",
      photo: "https://lifessence.com.br/wp-content/uploads/2025/12/Foto-6.jpg",
      specialty: "Especialista",
      certifications: "",
      education: "",
      experience: "",
      quote: "",
      instagram: "",
      facebook: "",
      linkedin: "",
      email: ""
    },
    {
      id: 40769,
      name: "Hadassa",
      slug: "hadassa",
      photo: "https://lifessence.com.br/wp-content/uploads/2025/12/Foto-7.jpg",
      specialty: "Especialista",
      certifications: "",
      education: "",
      experience: "",
      quote: "",
      instagram: "",
      facebook: "",
      linkedin: "",
      email: ""
    }
  ],

  /* ── SERVIÇOS ─────────────────────────────────────────── */
  services: [
    {
      id: 39514,
      name: "Pilates",
      slug: "pilates",
      description: "Conecte corpo e mente com exercícios que respeitam seus limites e promovem equilíbrio.",
      image: "https://lifessence.com.br/wp-content/uploads/2025/03/Foto-12.jpg",
      icon: "https://lifessence.com.br/wp-content/uploads/2024/10/Pilates.svg"
    },
    {
      id: 39129,
      name: "Fisioterapia Esportiva",
      slug: "fisioterapia-esportiva",
      description: "Reabilitação e prevenção de lesões esportivas com atendimento especializado.",
      image: "https://lifessence.com.br/wp-content/uploads/2024/09/9-2_11zon.webp",
      icon: "https://lifessence.com.br/wp-content/uploads/2024/10/Fisioterapia-Esportiva.svg"
    },
    {
      id: 39176,
      name: "Osteopatia",
      slug: "osteopatia",
      description: "Técnicas manuais para tratar disfunções do sistema musculoesquelético de forma holística.",
      image: "https://lifessence.com.br/wp-content/uploads/2024/09/3-6_11zon.webp",
      icon: null
    },
    {
      id: 39501,
      name: "Estética Facial",
      slug: "estetica-facial",
      description: "Tratamentos faciais avançados para realçar sua beleza natural com segurança e eficácia.",
      image: "https://lifessence.com.br/wp-content/uploads/2024/12/Foto-13.jpg",
      icon: null
    },
    {
      id: 39502,
      name: "Fisioterapia Pélvica",
      slug: "fisioterapia-pelvica",
      description: "Cuidado especializado para a saúde pélvica feminina e masculina em todas as fases da vida.",
      image: "https://lifessence.com.br/wp-content/uploads/2025/03/Foto-11.jpg",
      icon: null
    },
    {
      id: 39507,
      name: "Medicina de Família",
      slug: "medicina-de-familia",
      description: "Atendimento médico integral com foco no cuidado longitudinal e bem-estar de toda a família.",
      image: "https://lifessence.com.br/wp-content/uploads/2024/09/Foto-Amanda-Costa-1_11zon.webp",
      icon: null
    },
    {
      id: 39508,
      name: "Estética Avançada",
      slug: "estetica-avancada",
      description: "Procedimentos estéticos de alta tecnologia para tratamentos corporais e faciais personalizados.",
      image: "https://lifessence.com.br/wp-content/uploads/2024/09/2-6_11zon.webp",
      icon: null
    },
    {
      id: 39756,
      name: "Massoterapia",
      slug: "massoterapia",
      description: "Massagens terapêuticas que aliviam tensões, reduzem estresse e promovem relaxamento profundo.",
      image: "https://lifessence.com.br/wp-content/uploads/2025/05/Adicionar-Massoterapia.jpg",
      icon: null
    },
    {
      id: 39510,
      name: "Podologia",
      slug: "podologia",
      description: "Cuidados podológicos especializados, incluindo tratamento de micoses, unhas encravadas e mais.",
      image: "https://lifessence.com.br/wp-content/uploads/2025/03/Adicionar-podologia.jpg",
      icon: null
    },
    {
      id: 39511,
      name: "Psicologia",
      slug: "psicologia",
      description: "Suporte psicológico para o bem-estar emocional e mental, com abordagem humanizada e eficaz.",
      image: "https://lifessence.com.br/wp-content/uploads/2025/09/Sem-nome-3600-x-1971-px-2.png",
      icon: null
    },
    {
      id: 39512,
      name: "Acupuntura",
      slug: "acupuntura",
      description: "Medicina tradicional chinesa para equilíbrio energético, alívio da dor e promoção do bem-estar.",
      image: "https://lifessence.com.br/wp-content/uploads/2025/03/Foto-10.jpg",
      icon: null
    },
    {
      id: 39513,
      name: "Yoga",
      slug: "yoga",
      description: "Práticas fluídas e meditativas para integrar corpo, mente e espírito com consciência e leveza.",
      image: "https://lifessence.com.br/wp-content/uploads/2024/09/SAVE_20211110_195805_11zon.webp",
      icon: null
    },
    {
      id: 39515,
      name: "Fisioterapia Funcional",
      slug: "fisioterapia-funcional",
      description: "Reabilitação funcional com exercícios específicos para restaurar movimentos e qualidade de vida.",
      image: "https://lifessence.com.br/wp-content/uploads/2024/09/8-1_11zon.webp",
      icon: null
    },
    {
      id: 40707,
      name: "Pilates para Gestantes",
      slug: "pilates-para-gestantes",
      description: "Pilates adaptado para a gestação, promovendo bem-estar, saúde e preparo para o parto.",
      image: "https://lifessence.com.br/wp-content/uploads/2025/11/Pilates-para-gestantes-.jpg",
      icon: null
    },
    {
      id: 40717,
      name: "Nutrição",
      slug: "nutricao",
      description: "Orientação nutricional personalizada para um estilo de vida saudável e comportamento alimentar consciente.",
      image: "https://lifessence.com.br/wp-content/uploads/2025/11/nome-Falta-o-servico-de-NUTRICAO-profissional.jpg",
      icon: null
    },
    {
      id: 39509,
      name: "Massoterapia Especializada",
      slug: "massoterapia-2",
      description: "Técnicas avançadas de massagem para recuperação muscular, alívio de dores e bem-estar geral.",
      image: "https://lifessence.com.br/wp-content/uploads/2025/05/Adicionar-Massoterapia.jpg",
      icon: null
    }
  ],

  /* ── BLOG POSTS ────────────────────────────────────────── */
  posts: [
    {
      title: "A acupuntura para aliviar a ansiedade",
      slug: "a-acupuntura-para-aliviar-a-ansiedade",
      excerpt: "A acupuntura oferece um caminho natural e holístico para aliviar a ansiedade. Ao equilibrar a energia do corpo, ela ajuda a promover tranquilidade e bem-estar.",
      category: "Acupuntura",
      date: "2024-12-06",
      image: "https://lifessence.com.br/wp-content/uploads/2024/09/SAVE_20211110_195805_11zon.webp"
    },
    {
      title: "Você sofre dores de cabeça frequentes?",
      slug: "voce-sofre-dores-de-cabeca-frequentes",
      excerpt: "A cefaleia de origem cervical, também conhecida como cefaleia cervicogênica, é um tipo de dor de cabeça que merece atenção especializada.",
      category: "Fisioterapia",
      date: "2024-12-06",
      image: "https://lifessence.com.br/wp-content/uploads/2024/09/9-2_11zon.webp"
    },
    {
      title: "Foco na autocura do organismo",
      slug: "foco-na-autocura-do-organismo",
      excerpt: "A relação entre paciente e médico, de maneira mais humana e menos intervencionista, é o que define a conduta da nossa clínica.",
      category: "Osteopatia",
      date: "2024-12-06",
      image: "https://lifessence.com.br/wp-content/uploads/2024/09/3-6_11zon.webp"
    },
    {
      title: "Bioestimulação de Colágeno",
      slug: "bioestimulacao-de-colageno",
      excerpt: "O Ultraformer® é um novo equipamento de ultrassom micro e macrofocado que promove o estímulo de colágeno e queima da gordura localizada.",
      category: "Estética",
      date: "2024-12-09",
      image: "https://lifessence.com.br/wp-content/uploads/2025/09/Sem-nome-3600-x-1971-px-2.png"
    },
    {
      title: "Yoga não é só meditação",
      slug: "yoga-nao-e-so-meditacao",
      excerpt: "Yoga é uma atividade física integral que combina movimento, consciência corporal e respiração. Muito mais do que meditação!",
      category: "Yoga",
      date: "2024-12-09",
      image: "https://lifessence.com.br/wp-content/uploads/2024/09/SAVE_20211110_195805_11zon.webp"
    },
    {
      title: "Fortaleça seu Corpo com Pilates",
      slug: "fortaleca-seu-corpo",
      excerpt: "Após a gestação, o corpo da mulher passa por muitas mudanças, e a fisioterapia pélvica pode ajudar na recuperação.",
      category: "Pilates",
      date: "2024-12-09",
      image: "https://lifessence.com.br/wp-content/uploads/2025/03/Foto-12.jpg"
    }
  ],

  /* ── CONTACT INFO ──────────────────────────────────────── */
  contact: {
    whatsapp: "5454991234567",   // Substituir pelo número real
    phone: "(54) 9 9XXX-XXXX",  // Substituir pelo número real
    email: "lifessence@lifessence.com.br",
    address: "Caxias do Sul – RS",
    hours: "Segunda a Sábado: 08:00 – 19:00",
    instagram: "https://www.instagram.com/lifessence/",
    facebook: "https://www.facebook.com/lifessence/",
    maps_embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3462.!2d-51.17!3d-29.16!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zLifessence!5e0!3m2!1spt-BR!2sbr!4v1"
  }

};

/* ── Render Helpers ──────────────────────────────────────── */

/**
 * Renderiza o card de um doutor
 */
function renderDoctorCard(doc) {
  const social = [
    doc.instagram ? `<a href="${doc.instagram}" target="_blank" rel="noopener" aria-label="Instagram de ${doc.name}">
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
    </a>` : '',
    doc.facebook ? `<a href="${doc.facebook}" target="_blank" rel="noopener" aria-label="Facebook de ${doc.name}">
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
    </a>` : '',
    doc.linkedin ? `<a href="${doc.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn de ${doc.name}">
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
    </a>` : ''
  ].filter(Boolean).join('');

  return `
    <div class="doctor-card fade-in">
      ${doc.photo
        ? `<img class="doctor-img" src="${doc.photo}" alt="Foto de ${doc.name}" loading="lazy">`
        : `<div class="doctor-img-placeholder"><span>👤</span></div>`}
      <div class="doctor-info">
        <h5>${doc.name}</h5>
        <span class="doctor-specialty">${doc.specialty}</span>
        ${doc.certifications ? `<p class="doctor-bio">${doc.certifications}</p>` : ''}
        ${social ? `<div class="doctor-socials">${social}</div>` : ''}
      </div>
    </div>`;
}

/**
 * Renderiza o card de um serviço
 */
function renderServiceCard(svc) {
  return `
    <div class="service-card service-card-img fade-in">
      <div class="service-img-wrap">
        <img src="${svc.image}" alt="${svc.name}" loading="lazy">
      </div>
      <div class="service-card-body">
        <h5>${svc.name}</h5>
        <p>${svc.description}</p>
      </div>
    </div>`;
}

/**
 * Popula elemento com conteúdo gerado
 */
function populate(selector, items, renderFn) {
  const el = document.querySelector(selector);
  if (!el) return;
  el.innerHTML = items.map(renderFn).join('');
}
