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
  }
];

window.getProductBySlug = function(slug) {
  return window.PRODUCTS.find(product => product.slug === slug);
};
