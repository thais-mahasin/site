window.SITE_CONFIG = {
  brand: 'Thais Mahasin',
  whatsappNumber: '5521996313804',
  whatsappDisplay: '(21) 99631-3804',
  instagramHandle: 'thais_mahasin',
  instagramDisplay: '@thais_mahasin',
  email: 'estilistamahasin23@gmail.com'
};

window.buildWhatsAppUrl = function(message = '') {
  const number = window.SITE_CONFIG.whatsappNumber;
  return `https://wa.me/${number}${message ? `?text=${encodeURIComponent(message)}` : ''}`;
};

window.formatPriceBRL = function(value) {
  if (value === null || value === undefined || value === '') return 'Sob consulta';
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

window.applyContactInfo = function() {
  document.querySelectorAll('[data-wa-link]').forEach(el => {
    el.href = buildWhatsAppUrl(el.dataset.waText || '');
  });

  document.querySelectorAll('[data-wa-display]').forEach(el => {
    el.textContent = SITE_CONFIG.whatsappDisplay;
  });

  document.querySelectorAll('[data-email-link]').forEach(el => {
    el.href = `mailto:${SITE_CONFIG.email}`;
  });

  document.querySelectorAll('[data-email-display]').forEach(el => {
    el.textContent = SITE_CONFIG.email;
  });

  document.querySelectorAll('[data-instagram-link]').forEach(el => {
    el.href = `https://instagram.com/${SITE_CONFIG.instagramHandle}`;
  });

  document.querySelectorAll('[data-instagram-display]').forEach(el => {
    el.textContent = SITE_CONFIG.instagramDisplay;
  });
};

window.openMobileMenu = function() {
  const menu = document.getElementById('mobileMenu');
  if (!menu) return;
  menu.classList.add('open');
  document.body.classList.add('menu-open');
};

window.closeMobileMenu = function() {
  const menu = document.getElementById('mobileMenu');
  if (!menu) return;
  menu.classList.remove('open');
  document.body.classList.remove('menu-open');
};

window.enableTopbarScroll = function() {
  const topbar = document.getElementById('topbar');
  if (!topbar) return;
  const onScroll = () => topbar.classList.toggle('scrolled', window.scrollY > 10);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
};

window.PRODUCTS = [
  {
    id: 'p1',
    slug: 'vestido-rubi-imperial',
    name: 'Vestido Rubi Imperial',
    line: 'Linha Rubi Imperial',
    category: 'festa',
    categoryLabel: 'Vestido de festa',
    price: 1890,
    availability: 'Disponível',
    shortDescription: 'Vestido longo em cetim acetinado, ombro a ombro, fenda frontal e aplicação dourada lateral.',
    description: 'Peça marcante para eventos especiais, com brilho sofisticado e caimento fluido. A modelagem valoriza a silhueta sem perder o conforto visual.',
    colors: [
      { name: 'Rubi', hex: '#8b0f27' }
    ],
    sizes: ['Sob consulta'],
    materials: ['Cetim acetinado', 'Aplicação bordada'],
    highlights: [
      'Decote ombro a ombro',
      'Fenda frontal marcante',
      'Aplicação lateral dourada',
      'Ótimo para festas e formaturas'
    ],
    story: 'O Rubi Imperial foi pensado para a mulher que quer chegar com presença. O brilho profundo do tom rubi, somado ao desenho do busto e à aplicação lateral, cria uma leitura de festa refinada e memorável.',
    gallery: [
      { type: 'image', src: 'assets/media/products/vestido-rubi-imperial/editorial.jpg', alt: 'Vestido Rubi Imperial em foto editorial' },
      { type: 'image', src: 'assets/media/products/vestido-rubi-imperial/atelier.jpg', alt: 'Vestido Rubi Imperial no manequim' },
      { type: 'video', src: 'assets/media/products/vestido-rubi-imperial/desfile.mp4', poster: 'assets/media/products/vestido-rubi-imperial/editorial.jpg', alt: 'Vídeo do Vestido Rubi Imperial' }
    ]
  },
  {
    id: 'p2',
    slug: 'vestido-rose-pluma',
    name: 'Vestido Rosé Pluma',
    line: 'Linha Rosé Pluma',
    category: 'midi',
    categoryLabel: 'Vestido midi',
    price: 890,
    availability: 'Disponível',
    shortDescription: 'Vestido midi rosé claro com alças finas, fenda discreta e barra com detalhe em pluma.',
    description: 'Modelo delicado e contemporâneo, ideal para jantares, mini weddings e eventos em que a elegância precisa aparecer de forma leve.',
    colors: [
      { name: 'Rosé claro', hex: '#ead7d3' }
    ],
    sizes: ['Sob consulta'],
    materials: ['Crepe acetinado', 'Detalhe em pluma'],
    highlights: [
      'Barra com textura em pluma',
      'Alças finas e decote suave',
      'Modelagem limpa e elegante',
      'Excelente para ocasiões intimistas'
    ],
    story: 'O Rosé Pluma equilibra romantismo e desenho limpo. É uma peça que funciona muito bem para celebrações menores, jantares especiais e propostas de visual com feminilidade sutil.',
    gallery: [
      { type: 'image', src: 'assets/media/products/vestido-rose-pluma/editorial.jpg', alt: 'Vestido Rosé Pluma em foto editorial' },
      { type: 'image', src: 'assets/media/products/vestido-rose-pluma/atelier.jpg', alt: 'Vestido Rosé Pluma no manequim' },
      { type: 'video', src: 'assets/media/products/vestido-rose-pluma/desfile.mp4', poster: 'assets/media/products/vestido-rose-pluma/editorial.jpg', alt: 'Vídeo do Vestido Rosé Pluma' }
    ]
  },
  {
    id: 'p3',
    slug: 'casaco-neve-paris',
    name: 'Casaco Neve Paris',
    line: 'Linha Neve Paris',
    category: 'casacos',
    categoryLabel: 'Casaco',
    price: 1290,
    availability: 'Disponível',
    shortDescription: 'Casaco branco estruturado com abotoamento duplo, faixa na cintura e contraste interno em vermelho.',
    description: 'Uma peça de impacto para dias frios, com leitura sofisticada e urbana. O contraste vermelho interno reforça a identidade visual do look.',
    colors: [
      { name: 'Branco neve', hex: '#f4f4f1' },
      { name: 'Vermelho interno', hex: '#b81125' }
    ],
    sizes: ['Sob consulta'],
    materials: ['Lã batida', 'Forro contrastante'],
    highlights: [
      'Abotoamento duplo',
      'Faixa ajustável na cintura',
      'Contraste interno vermelho',
      'Visual elegante para inverno'
    ],
    story: 'O Neve Paris traz uma elegância urbana de inverno. O branco estruturado ilumina o visual, enquanto o vermelho interno acrescenta personalidade e profundidade ao look.',
    gallery: [
      { type: 'image', src: 'assets/media/products/casaco-neve-paris/editorial.jpg', alt: 'Casaco Neve Paris em foto editorial' },
	  { type: 'image', src: 'assets/media/products/casaco-neve-paris/atelier.png', alt: 'Casaco Neve Paris no manequim' },
	  { type: 'video', src: 'assets/media/products/casaco-neve-paris/desfile.mp4', poster: 'assets/media/products/casaco-neve-paris/editorial.jpg', alt: 'Vídeo do Casaco Neve Paris' }
    ]
  },
  {
    id: 'p4',
    slug: 'vestido-champagne-assimetrico',
    name: 'Vestido Champagne Assimétrico',
    line: 'Linha Champagne Assimétrica',
    category: 'festa',
    categoryLabel: 'Vestido de festa',
    price: 1750,
    availability: 'Disponível',
    shortDescription: 'Vestido longo em tom champagne com manga única, drapeado envolvente e fenda elegante.',
    description: 'Modelo autoral com presença sofisticada e leitura contemporânea. O brilho do tecido e a assimetria da peça criam um efeito luxuoso.',
    colors: [
      { name: 'Champagne', hex: '#a58b74' }
    ],
    sizes: ['Sob consulta'],
    materials: ['Cetim fluido', 'Acabamento premium'],
    highlights: [
      'Manga única',
      'Drapeado escultural',
      'Fenda frontal sofisticada',
      'Ideal para gala e eventos noturnos'
    ],
    story: 'O Champagne Assimétrico foi desenhado para ocasiões em que a peça precisa falar por si. A construção drapeada cria movimento e sofisticação, enquanto a assimetria acrescenta assinatura autoral.',
    gallery: [
      { type: 'image', src: 'assets/media/products/vestido-champagne-assimetrico/editorial.jpg', alt: 'Vestido Champagne Assimétrico em foto editorial' },
      { type: 'image', src: 'assets/media/products/vestido-champagne-assimetrico/atelier.png', alt: 'Vestido Champagne Assimétrico no manequim' },
	  { type: 'video', src: 'assets/media/products/vestido-champagne-assimetrico/desfile.mp4', poster: 'assets/media/products/vestido-champagne-assimetrico/editorial.jpg', alt: 'Vídeo do Vestido Champagne Assimétrico' }
    ]
  },
  {
    id: 'p5',
    slug: 'acessorio-flor',
    name: 'Acessório Flor',
    line: 'Linha Acessórios Atelier',
    category: 'acessorios',
    categoryLabel: 'Acessório',
    price: 90,
    availability: 'Disponível',
    shortDescription: 'Flor têxtil em tom cinza-prateado com centro perolado, ideal para aplicações sofisticadas e autorais.',
    description: 'Acessório floral com construção em camadas, acabamento delicado e presença elegante. Pode ser usado como ponto de destaque em produções de festa, alfaiataria feminina ou composições editoriais.',
    colors: [
      { name: 'Cinza prata', hex: '#b8b8bc' },
      { name: 'Grafite suave', hex: '#5e6168' }
    ],
    sizes: ['Único'],
    materials: ['Tecido estruturado', 'Aplicação perolada'],
    highlights: [
      'Design floral em camadas',
      'Centro com detalhe perolado',
      'Leitura delicada e sofisticada',
      'Ideal para looks autorais'
    ],
    story: 'O Acessório Flor foi pensado como um elemento de assinatura visual. Ele traz delicadeza escultórica, leve dramaticidade e um toque artesanal refinado para composições elegantes.',
    gallery: [
      { type: 'image', src: 'assets/media/products/acessorio-flor/editorial.png', alt: 'Acessório Flor em foto editorial' },
      { type: 'image', src: 'assets/media/products/acessorio-flor/atelier.png', alt: 'Acessório Flor no busto de atelier' },
      { type: 'video', src: 'assets/media/products/acessorio-flor/desfile.mp4', poster: 'assets/media/products/acessorio-flor/editorial.png', alt: 'Vídeo do Acessório Flor' }
    ]
  },
  {
    id: 'p6',
    slug: 'conjunto-egipcia',
    name: 'Conjunto Egípcia',
    line: 'Linha Egípcia',
    category: 'conjuntos',
    categoryLabel: 'Conjunto',
    price: 250,
    availability: 'Disponível',
    shortDescription: 'Conjunto preto de alfaiataria com blazer vestido ajustado e detalhe assimétrico com brilho discreto.',
    description: 'Peça marcante de leitura sofisticada e contemporânea. A modelagem estruturada valoriza a silhueta, enquanto o recorte assimétrico cria identidade visual forte e autoral.',
    colors: [
      { name: 'Preto', hex: '#111111' },
      { name: 'Prata grafite', hex: '#6f6f73' }
    ],
    sizes: ['Sob consulta'],
    materials: ['Alfaiataria estruturada', 'Acabamento com brilho discreto'],
    highlights: [
      'Modelagem estruturada',
      'Detalhe assimétrico frontal',
      'Leitura sofisticada e marcante',
      'Ideal para produções noturnas'
    ],
    story: 'O Conjunto Egípcia traduz força, elegância e presença. O desenho limpo da alfaiataria encontra um gesto assimétrico que dá modernidade e transforma a peça em protagonista.',
    gallery: [
      { type: 'image', src: 'assets/media/products/conjunto-egipcia/editorial.png', alt: 'Conjunto Egípcia em foto editorial' },
      { type: 'image', src: 'assets/media/products/conjunto-egipcia/atelier.png', alt: 'Conjunto Egípcia no manequim' },
      { type: 'video', src: 'assets/media/products/conjunto-egipcia/desfile.mp4', poster: 'assets/media/products/conjunto-egipcia/editorial.png', alt: 'Vídeo do Conjunto Egípcia' }
    ]
  },
  {
    id: 'p7',
    slug: 'conjunto-linho',
    name: 'Conjunto Linho',
    line: 'Linha Linho Natural',
    category: 'conjuntos',
    categoryLabel: 'Conjunto',
    price: 320,
    availability: 'Disponível',
    shortDescription: 'Conjunto claro em linho com colete frente única e calça pantalona de caimento amplo.',
    description: 'Modelo leve, refinado e atemporal, ideal para propostas elegantes com frescor. A combinação do colete com a pantalona cria uma estética clean, sofisticada e muito versátil.',
    colors: [
      { name: 'Off-white', hex: '#ece4d6' }
    ],
    sizes: ['Sob consulta'],
    materials: ['Linho misto', 'Acabamento leve'],
    highlights: [
      'Colete frente única',
      'Calça pantalona ampla',
      'Visual leve e sofisticado',
      'Excelente para eventos diurnos'
    ],
    story: 'O Conjunto Linho nasce da ideia de elegância natural. A textura suave, a paleta clara e a modelagem limpa criam um visual luminoso, contemporâneo e extremamente refinado.',
    gallery: [
      { type: 'image', src: 'assets/media/products/conjunto-linho/editorial.png', alt: 'Conjunto Linho em foto editorial' },
      { type: 'image', src: 'assets/media/products/conjunto-linho/atelier.png', alt: 'Conjunto Linho no manequim' },
      { type: 'video', src: 'assets/media/products/conjunto-linho/desfile.mp4', poster: 'assets/media/products/conjunto-linho/editorial.png', alt: 'Vídeo do Conjunto Linho' }
    ]
  },
  {
  id: 'p8',
  slug: 'vestido-rose-halter',
  name: 'Vestido Rosé Halter',
  line: 'Linha Rosé Halter',
  category: 'festa',
  categoryLabel: 'Vestido de festa',
  price: 950,
  availability: 'Disponível',
  shortDescription: 'Vestido curto em tom rosé com decote halter, caimento fluido e brilho acetinado.',
  description: 'Modelo autoral de estética delicada e refinada. A leveza da silhueta aliada ao acabamento acetinado cria uma peça elegante, versátil e contemporânea.',
  colors: [
    { name: 'Rosé', hex: '#d8c0c3' }
  ],
  sizes: ['Sob consulta'],
  materials: ['Cetim acetinado', 'Acabamento premium'],
  highlights: [
    'Decote halter',
    'Caimento leve e fluido',
    'Modelagem evasê',
    'Ideal para festas e eventos elegantes'
  ],
  story: 'O Rosé Halter foi pensado para transmitir suavidade e sofisticação em uma leitura minimalista. Sua construção limpa valoriza o caimento do tecido e a delicadeza do decote, resultando em uma peça atemporal e feminina.',
  gallery: [
    { type: 'image', src: 'assets/media/products/vestido-rose-halter/editorial.png', alt: 'Vestido Rosé Halter em foto editorial' },
    { type: 'image', src: 'assets/media/products/vestido-rose-halter/atelier.png', alt: 'Vestido Rosé Halter no manequim' },
    { type: 'video', src: 'assets/media/products/vestido-rose-halter/desfile.mp4', poster: 'assets/media/products/vestido-rose-halter/editorial.png', alt: 'Vídeo do Vestido Rosé Halter' }
  ]
  },

  {
    id: 'p9',
    slug: 'conjunto-rosa-urbano',
    name: 'Conjunto Rosé Urbano',
    line: 'Linha Rosé Urbano',
    category: 'conjuntos',
    categoryLabel: 'Conjunto',
    price: 390,
    availability: 'Disponível',
    shortDescription: 'Conjunto em tom rosé com blusa de sobreposição frontal e calça pantalona de caimento amplo.',
    description: 'Peça contemporânea com leitura leve e sofisticada, ideal para propostas elegantes com frescor urbano. A composição alongada valoriza a silhueta com suavidade e presença autoral.',
    colors: [
      { name: 'Rosé claro', hex: '#d7b8b2' }
    ],
    sizes: ['Sob consulta'],
    materials: ['Alfaiataria leve', 'Acabamento premium'],
    highlights: [
      'Blusa com sobreposição frontal',
      'Calça pantalona ampla',
      'Paleta rosé delicada',
      'Elegância leve e contemporânea'
    ],
    story: 'O Conjunto Rosé Urbano nasce do encontro entre delicadeza e desenho limpo. A cor suave, somada à construção fluida da peça, cria uma presença refinada, feminina e atual.',
    gallery: [
      { type: 'image', src: 'assets/media/products/conjunto_rosa_urbano/editorial.jpg', alt: 'Conjunto Rosé Urbano em foto editorial' },
      { type: 'image', src: 'assets/media/products/conjunto_rosa_urbano/atelier.png', alt: 'Conjunto Rosé Urbano no manequim' },
      { type: 'video', src: 'assets/media/products/conjunto_rosa_urbano/desfile.mp4', poster: 'assets/media/products/conjunto_rosa_urbano/editorial.jpg', alt: 'Vídeo do Conjunto Rosé Urbano' }
    ]
  },
  {
    id: 'p10',
    slug: 'vestido-bege_-botoes',
    name: 'Vestido Bege Botões',
    line: 'Linha Bege Botões',
    category: 'midi',
    categoryLabel: 'Vestido midi',
    price: 520,
    availability: 'Disponível',
    shortDescription: 'Vestido midi bege com modelagem ajustada, abotoamento frontal e recorte sem mangas.',
    description: 'Modelo de estética limpa e sofisticada, com presença discreta e refinada. O desenho vertical dos botões e a silhueta alongada criam uma leitura elegante e atemporal.',
    colors: [
      { name: 'Bege areia', hex: '#d7c9b2' },
      { name: 'Dourado suave', hex: '#b48b58' }
    ],
    sizes: ['Sob consulta'],
    materials: ['Tecido estruturado', 'Botões metálicos'],
    highlights: [
      'Abotoamento frontal aparente',
      'Silhueta midi alongada',
      'Modelagem sem mangas',
      'Visual clean e refinado'
    ],
    story: 'O Vestido Bege Botões foi pensado para uma elegância silenciosa. Sua construção reta, a paleta neutra e os detalhes frontais traduzem sofisticação com naturalidade e versatilidade.',
    gallery: [
      { type: 'image', src: 'assets/media/products/vestido_bege_botoes/editorial.jpg', alt: 'Vestido Bege Botões em foto editorial' },
      { type: 'image', src: 'assets/media/products/vestido_bege_botoes/atelier.png', alt: 'Vestido Bege Botões no manequim' },
      { type: 'video', src: 'assets/media/products/vestido_bege_botoes/desfile.mp4', poster: 'assets/media/products/vestido_bege_botoes/editorial.jpg', alt: 'Vídeo do Vestido Bege Botões' }
    ]
  },
  {
    id: 'p11',
    slug: 'vestido-branco-assimetrico',
    name: 'Vestido Branco Assimétrico',
    line: 'Linha Branco Assimétrico',
    category: 'festa',
    categoryLabel: 'Vestido de festa',
    price: 950,
    availability: 'Disponível',
    shortDescription: 'Vestido branco curto com um ombro só, drapeado lateral e barra assimétrica.',
    description: 'Peça autoral de presença minimalista e sofisticada. A assimetria da construção valoriza o movimento do corpo e cria um visual contemporâneo, leve e marcante.',
    colors: [
      { name: 'Branco', hex: '#f3f3f1' }
    ],
    sizes: ['Sob consulta'],
    materials: ['Malha estruturada', 'Acabamento premium'],
    highlights: [
      'Decote de um ombro só',
      'Drapeado lateral elegante',
      'Barra assimétrica',
      'Leitura moderna e sofisticada'
    ],
    story: 'O Vestido Branco Assimétrico traduz elegância com gesto escultural. Sua construção limpa destaca a silhueta e entrega uma feminilidade contemporânea, precisa e muito refinada.',
    gallery: [
      { type: 'image', src: 'assets/media/products/vestido_branco_assimetrico/editorial.jpg', alt: 'Vestido Branco Assimétrico em foto editorial' },
      { type: 'image', src: 'assets/media/products/vestido_branco_assimetrico/atelier.png', alt: 'Vestido Branco Assimétrico no manequim' },
      { type: 'video', src: 'assets/media/products/vestido_branco_assimetrico/desfile.mp4', poster: 'assets/media/products/vestido_branco_assimetrico/editorial.jpg', alt: 'Vídeo do Vestido Branco Assimétrico' }
    ]
  },
  {
    id: 'p12',
    slug: 'vestido-cinza-transparente',
    name: 'Vestido Cinza Transparente',
    line: 'Linha Cinza Transparente',
    category: 'festa',
    categoryLabel: 'Vestido de festa',
    price: 1390,
    availability: 'Disponível',
    shortDescription: 'Vestido longo em cinza translúcido com caimento fluido, mangas leves e transparência delicada.',
    description: 'Modelo etéreo e sofisticado, pensado para produções que pedem leveza visual e presença elegante. A transparência sutil e a fluidez do tecido criam um efeito delicado e autoral.',
    colors: [
      { name: 'Cinza lavanda', hex: '#9a95a8' },
      { name: 'Cinza fumê', hex: '#625d69' }
    ],
    sizes: ['Sob consulta'],
    materials: ['Tule leve', 'Forro fluido'],
    highlights: [
      'Transparência delicada',
      'Caimento longo e fluido',
      'Mangas leves com movimento',
      'Visual etéreo e sofisticado'
    ],
    story: 'O Vestido Cinza Transparente nasce da ideia de leveza em movimento. A sobreposição translúcida envolve a silhueta com suavidade e cria uma presença poética, elegante e contemporânea.',
    gallery: [
      { type: 'image', src: 'assets/media/products/vestido_cinza_transparente/editorial.jpg', alt: 'Vestido Cinza Transparente em foto editorial' },
      { type: 'image', src: 'assets/media/products/vestido_cinza_transparente/atelier.png', alt: 'Vestido Cinza Transparente no manequim' },
      { type: 'video', src: 'assets/media/products/vestido_cinza_transparente/desfile.mp4', poster: 'assets/media/products/vestido_cinza_transparente/editorial.jpg', alt: 'Vídeo do Vestido Cinza Transparente' }
    ]
  },
  {
    id: 'p13',
    slug: 'vestido-colorido-transparente',
    name: 'Vestido Colorido Transparente',
    line: 'Linha Colorido Transparente',
    category: 'festa',
    categoryLabel: 'Vestido de festa',
    price: 1590,
    availability: 'Disponível',
    shortDescription: 'Vestido longo translúcido com degradê colorido, mangas contrastantes e caimento leve.',
    description: 'Peça de forte identidade visual, com leitura artística e sofisticada. A composição cromática, unida à transparência do tecido, cria um visual expressivo, luminoso e contemporâneo.',
    colors: [
      { name: 'Dourado suave', hex: '#d8b264' },
      { name: 'Coral rosado', hex: '#db826a' },
      { name: 'Azul petróleo suave', hex: '#5c97a6' }
    ],
    sizes: ['Sob consulta'],
    materials: ['Tule leve', 'Acabamento translúcido'],
    highlights: [
      'Degradê colorido marcante',
      'Mangas com contraste de cor',
      'Silhueta longa e fluida',
      'Estética autoral e expressiva'
    ],
    story: 'O Vestido Colorido Transparente foi criado para quem deseja vestir cor com sofisticação. A mistura de tons e a leve transparência revelam uma peça vibrante, sensível e memorável.',
    gallery: [
      { type: 'image', src: 'assets/media/products/vestido_colorido_transparente/editorial.jpg', alt: 'Vestido Colorido Transparente em foto editorial' },
      { type: 'image', src: 'assets/media/products/vestido_colorido_transparente/atelier.png', alt: 'Vestido Colorido Transparente no manequim' },
      { type: 'video', src: 'assets/media/products/vestido_colorido_transparente/desfile.mp4', poster: 'assets/media/products/vestido_colorido_transparente/editorial.jpg', alt: 'Vídeo do Vestido Colorido Transparente' }
    ]
  },
  {
    id: 'p14',
    slug: 'vestido-preto-assimetrico',
    name: 'Vestido Preto Assimétrico',
    line: 'Linha Preto Assimétrico',
    category: 'festa',
    categoryLabel: 'Vestido de festa',
    price: 980,
    availability: 'Disponível',
    shortDescription: 'Vestido preto curto com brilho acetinado, manga única e drapeado lateral.',
    description: 'Modelo de presença marcante, com construção escultural e elegância contemporânea. O brilho sutil do tecido reforça a sofisticação da peça sem perder a leitura minimalista.',
    colors: [
      { name: 'Preto', hex: '#151515' }
    ],
    sizes: ['Sob consulta'],
    materials: ['Cetim encorpado', 'Acabamento premium'],
    highlights: [
      'Manga única elegante',
      'Drapeado lateral marcante',
      'Brilho acetinado discreto',
      'Visual noturno sofisticado'
    ],
    story: 'O Vestido Preto Assimétrico foi desenhado para uma presença segura e refinada. Sua assimetria precisa, aliada ao brilho contido do tecido, cria uma peça intensa, feminina e atemporal.',
    gallery: [
      { type: 'image', src: 'assets/media/products/vestido_preto_assimetrico/editorial.jpg', alt: 'Vestido Preto Assimétrico em foto editorial' },
      { type: 'image', src: 'assets/media/products/vestido_preto_assimetrico/atelier.png', alt: 'Vestido Preto Assimétrico no manequim' },
      { type: 'video', src: 'assets/media/products/vestido_preto_assimetrico/desfile.mp4', poster: 'assets/media/products/vestido_preto_assimetrico/editorial.jpg', alt: 'Vídeo do Vestido Preto Assimétrico' }
    ]
  },
  {
    id: 'p15',
    slug: 'vestido-preto-botoes',
    name: 'Vestido Preto Botões',
    line: 'Linha Preto Botões',
    category: 'midi',
    categoryLabel: 'Vestido midi',
    price: 560,
    availability: 'Disponível',
    shortDescription: 'Vestido midi preto sem mangas com abotoamento frontal e fenda sutil.',
    description: 'Peça de desenho limpo e sofisticado, com leitura urbana e elegante. Os botões frontais alongam a silhueta e acrescentam um ponto de brilho discreto à composição.',
    colors: [
      { name: 'Preto', hex: '#141414' },
      { name: 'Dourado suave', hex: '#b18b56' }
    ],
    sizes: ['Sob consulta'],
    materials: ['Alfaiataria acetinada', 'Botões metálicos'],
    highlights: [
      'Abotoamento frontal marcante',
      'Modelagem midi sem mangas',
      'Fenda frontal discreta',
      'Visual elegante e versátil'
    ],
    story: 'O Vestido Preto Botões aposta na força do essencial bem desenhado. A silhueta reta, o acabamento escuro e os detalhes metálicos criam uma peça sofisticada, moderna e muito fácil de destacar.',
    gallery: [
      { type: 'image', src: 'assets/media/products/vestido_preto_botoes/editorial.jpg', alt: 'Vestido Preto Botões em foto editorial' },
      { type: 'image', src: 'assets/media/products/vestido_preto_botoes/atelier.png', alt: 'Vestido Preto Botões no manequim' },
      { type: 'video', src: 'assets/media/products/vestido_preto_botoes/desfile.mp4', poster: 'assets/media/products/vestido_preto_botoes/editorial.jpg', alt: 'Vídeo do Vestido Preto Botões' }
    ]
  },
  {
	id: 'p16',
	slug: 'conjunto-preto-rendado',
	name: 'Conjunto Preto Rendado',
	line: 'Linha Preto Rendado',
	category: 'conjuntos',
	categoryLabel: 'Conjunto',
	price: 590,
	availability: 'Disponível',
	shortDescription: 'Conjunto preto com colete alongado de alfaiataria, amarração na cintura e saia longa rendada.',
	description: 'Peça autoral de presença marcante, com contraste entre estrutura e transparência em uma leitura sofisticada. O colete alongado equilibra a delicadeza da renda e cria um visual noturno elegante e contemporâneo.',
	colors: [
		{ name: 'Preto', hex: '#111111' },
		{ name: 'Café profundo', hex: '#3a2928' }
	],
	sizes: ['Sob consulta'],
	materials: ['Alfaiataria estruturada', 'Renda translúcida'],
	highlights: [
	'Colete alongado sem mangas',
	'Saia longa com renda',
	'Amarração marcando a cintura',
	'Visual noturno sofisticado'
	],
	story: 'O Conjunto Preto Rendado nasce do encontro entre força e delicadeza. A alfaiataria limpa do colete encontra a leve transparência da renda em uma composição feminina, intensa e refinada.',
	gallery: [
		{ type: 'image', src: 'assets/media/products/conjunto-preto-rendado/editorial.jpg', alt: 'Conjunto Preto Rendado em foto editorial' },
		{ type: 'image', src: 'assets/media/products/conjunto-preto-rendado/atelier.png', alt: 'Conjunto Preto Rendado no manequim' },
		{ type: 'video', src: 'assets/media/products/conjunto-preto-rendado/desfile.mp4', poster: 'assets/media/products/conjunto-preto-rendado/editorial.jpg', alt: 'Vídeo do Conjunto Preto Rendado' }
	]
 }
];

window.getProductBySlug = function(slug) {
  const normalize = value =>
    (value || '').trim().toLowerCase().replaceAll('_', '-');

  return window.PRODUCTS.find(product => normalize(product.slug) === normalize(slug));
};
