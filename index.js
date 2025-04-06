const { Client, Buttons, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

// Cria cliente com sessão salva automaticamente
const client = new Client({
  authStrategy: new LocalAuth()
});

// Gera o QR Code
client.on('qr', qr => {
  console.log('📲 Escaneie o QR code abaixo com seu WhatsApp Business:');
  qrcode.generate(qr, { small: true });
});

// Confirma que está pronto
client.on('ready', () => {
  console.log('🤖 Bot está online!');
});

// Saudação personalizada quando recebe “oi” ou “menu”
client.on('message', async msg => {
  const texto = msg.body.toLowerCase();

  if (texto === 'oi' || texto === 'menu' || texto === '.' || texto === 'Olá, boa tarde!') {
    const buttons = new Buttons(
      'Olá! 👋 Eu sou o assistente da *Lili desenvolvedora web*.\n\nEm que posso te ajudar hoje?',
      [
        { body: '🚀 Front-End' },
        { body: '🔧 Back-End' },
        { body: '📱 Mobile' },
        { body: '🎨 Design UI/UX' },
        { body: '🖌️ Design Gráfico' },
        { body: '🎬 Vídeo Motion' },
        { body: '👩‍💻 Falar com a Dev' },
        { body: '📁 Ver Portfólio' }
      ],
      'Menu de Serviços',
      'Escolha uma opção abaixo 👇'
    );
    await msg.reply(buttons);
  }

  // Respostas automáticas para cada botão
  switch (texto) {
    case '🚀 front-end':
      msg.reply('✨ Front-End: Desenvolvimento com HTML, CSS, JS, React, Angular, etc.');
      msg.reply('✨ Descreva a sua ideia de projeto!');
      break;
    case '🔧 back-end':
      msg.reply('💻 Back-End: Java com Spring Boot, Node.js, APIs, banco de dados MySQL...');
      msg.reply('✨ Descreva a sua ideia de projeto!');
      break;
    case '📱 mobile':
      msg.reply('📱 Mobile: Desenvolvimento de apps híbridos com React Native ou Flutter.');
      msg.reply('✨ Descreva a sua ideia de projeto!');
      break;
    case '🎨 design ui/ux':
      msg.reply('🎨 UI/UX: prototipação no Figma, foco em experiência e usabilidade!');
      msg.reply('✨ Descreva a sua ideia de projeto!');
      break;
    case '🖌️ design gráfico':
      msg.reply('🖼️ Design Gráfico: criação de artes, identidade visual, social media...');
      msg.reply('✨ Descreva a sua ideia de projeto!');
      break;
    case '🎬 vídeo motion':
      msg.reply('🎬 Vídeos: edição criativa, animações simples e motion para redes sociais.');
      msg.reply('✨ Descreva a sua ideia de projeto!');
      break;
    case '👩‍💻 falar com a dev':
      msg.reply('👋 Você será atendido diretamente por mim em instantes!');
      break;
    case '📁 ver portfólio':
        msg.reply('🔗 Aqui está meu portfólio: https://portifolio-lyart-ten-15.vercel.app');
      break;
  }
});

// Inicializa o cliente
client.initialize();
