function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const messageText = messageInput.value.trim();
    const chatBox = document.getElementById('chatBox');

    if (messageText === "") return;

    // Aplicar formatação estilo Discord
    const formattedMessage = applyFormatting(messageText);

    // Criar mensagem enviada
    const sentMessage = document.createElement('div');
    sentMessage.classList.add('message', 'sent');
    sentMessage.innerHTML = formattedMessage;
    chatBox.appendChild(sentMessage);

    // Limpar entrada e rolar para o final
    messageInput.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;

    // Resposta automática no Modo Bobo
    setTimeout(() => {
        const replyMessage = document.createElement('div');
        replyMessage.classList.add('message', 'received');
        replyMessage.textContent = getFunnyReply(messageText);
        chatBox.appendChild(replyMessage);
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);
}

// Respostas engraçadas do Modo Bobo
let lastReplyIndex = -1; // Índice da última resposta selecionada

function getFunnyReply(userMessage) {
    const funnyReplies = [
        "Eu sou um bot, mas também gosto de memes! 😂",
        "Você tá falando sério ou só me testando? 👀",
        "Eu não entendi, mas finge que eu entendi. 😅",
        "Legal! Vou anotar isso... Mentira, não vou não. 😜",
        "Isso é muito profundo, quase me emocionei. 😢",
        "Você tá bem? Porque eu tô confuso agora. 🤔",
        "Sim, claro! A resposta é 42. 🪐",
        "Eu sou apenas um bot bobo, mas obrigado por falar comigo. 🤖",
        "Hmm... Vou fingir que entendi. Continua! 🤡",
        "Se você quiser, posso responder tudo com 'Sim'. 😏",
        "Minha memória ficou tão ruim que realmente me fez perder o emprego. Ainda estou empregado. Só não consigo lembrar onde. 🤔",
        "🙏🏻 Qual é a comida mais sagrada? O Amén-doim! 🥜",
        "Qual é o desastre natural que os cães mais odeiam? Fura-cão! 🤡",
        "Qual é a peça de carro que é feita só no Egito? Os faraóis! 🚨",
        "O que o cadarço falou para o tênis? 'Estou amarradão em você'! 👟",
        "O engenheiro olhou para o espelho. O que aconteceu? O engenheiro civil! 🤡",
        "Na briga entre o esparadrapo e a fita isolante, quem ganhou? A fita isolante, pois ela é faixa preta. 🖤",
        "O que o menino fez para não ir ao oculista? Se mudou para Boa Vista! 👀",
        "Quem é a mãe do mingau? A mãe zena! 🍽️",
        "Qual é a roupa preferida do macaco? O macacão. 🙊",
        "Qual é a parte mais velha do carro? O vô-lante! 👴🏻",
        "Qual é a nota musical preferida dos carros? A ré. 🎵🚗",
        "Tenho uma enxada, uma pá e uma foice. Quantas ferramentas eu tenho? Duas, porque uma foi-se! ⛏️",
        "Qual é o estado brasileiro que ama ferramentas? O Ama-pá! 💞",
        "Por que a loja do canivete faliu? Porque só vendia a-fiado! 😜",
        "Por que não falta energia no quartel? Porque todo cabo já foi soldado! 🪖",
        "Por que as rodas do trem são de ferro? Porque se fossem de borracha apagariam a linha! 🚂",
        "Nunca desista de seus sonhos! Se acabou em uma padaria, busque em outra. 🍞😋",
        "Por que o jacaré tirou o jacarezinho da escola? Porque ele réptil de ano! 🐊",
        "Quem fala errado: a Mônica ou o Cebolinha? A Mônica, pois o Cebolinha fala 'elado'! 😶",
        "O que uma impressora falou para outra? 'Esse papel é seu ou é impressão minha?' 📃",
        "O que a lâmpada falou quando a ligaram? 'Tô ligada!' 💡",
        "O que o lápis disse para o apontador? 'Estou desapontado!' ✏️",
        "Que animal já passou da validade? O javali! 🐗",
        "Por que a criança comeu a lição de matemática? Porque a professora disse que fazer a lição era mamão com açúcar! 📄😋",
        "O que é um pontinho rosa no estádio de luta dos Pokémon? É o invencível PINKachu. 🩷⚡",
        "Por que a água foi presa? Porque matou a sede! 💧😱",
        "Qual bicho que não é caro? A barata! 🪳",
        "Como se chama o primo vegetariano do Bruce Lee? É o Bróco Lee! 🥦",
        "Qual é o esporte preferido dos músicos? Lançamento de disco! 💽💿",
        "O que o azeite disse para o vinagre? 'Falo nada, só óleo' 🛢️👀",
        "O que a vaca foi fazer no espaço? Procurar o vácuo! 🐮🕳️",
        "Qual é o prato preferido do Thor? Thorresmo. 🤯",
    ];

    // Remover piadas repetidas com base no histórico de mensagens
    let previousReplies = [];
    let replyMessage = funnyReplies.find(reply => !previousReplies.includes(reply));
    previousReplies.push(replyMessage);
    return replyMessage;

// Upload de arquivos
const attachButton = document.getElementById('attachButton');
const fileInput = document.getElementById('fileInput');

attachButton.addEventListener('click', () => {
    fileInput.click();
});

fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const chatBox = document.getElementById('chatBox');
        const mediaMessage = document.createElement('div');
        mediaMessage.classList.add('message', 'sent');

        if (file.type.startsWith('image/')) {
            // Criar elemento para imagem
            const img = document.createElement('img');
            img.src = URL.createObjectURL(file);
            img.style.maxWidth = '100px';
            img.style.borderRadius = '10px';
            img.alt = 'Imagem enviada'; // Alt para acessibilidade
            mediaMessage.appendChild(img);
        } else if (file.type.startsWith('video/')) {
            // Criar elemento para vídeo
            const video = document.createElement('video');
            video.src = URL.createObjectURL(file);
            video.controls = true;
            video.style.maxWidth = '150px';
            mediaMessage.appendChild(video);
        } else {
            // Mensagem de erro para arquivos incompatíveis
            const errorMessage = document.createElement('div');
            errorMessage.textContent = 'Tipo de arquivo não suportado!';
            errorMessage.style.color = 'red';
            mediaMessage.appendChild(errorMessage);
        }

        chatBox.appendChild(mediaMessage);
        chatBox.scrollTop = chatBox.scrollHeight;
    }
});

// Formatação de texto estilo Discord
function applyFormatting(text) {
    let formattedText = text
        .replace(/\*\*(.*?)\*\*/g, "<b>$1</b>")   // Negrito
        .replace(/\*(.*?)\*/g, "<i>$1</i>")       // Itálico
        .replace(/__(.*?)__/g, "<u>$1</u>")       // Sublinhado
        .replace(/~~(.*?)~~/g, "<s>$1</s>")       // Tachado
        .replace(
            /(https?:\/\/[^\s]+)/g,               // Links
            '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>'
        );
    return formattedText;
}

// Ajustar altura do textarea automaticamente
const messageInput = document.getElementById('messageInput');

messageInput.addEventListener('input', () => {
    messageInput.style.height = 'auto'; // Reseta a altura para recalcular
    messageInput.style.height = `${messageInput.scrollHeight}px`; // Define a altura conforme o conteúdo
});

