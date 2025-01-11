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
        `Se você quiser, posso responder tudo com "Sim". 😏`
    ];

    // Gerar uma resposta aleatória
    const randomIndex = Math.floor(Math.random() * funnyReplies.length);
    return funnyReplies[randomIndex];
}

// Formatação de texto estilo Discord
function applyFormatting(text) {
    let formattedText = text
        .replace(/\*\*(.*?)\*\*/g, "<b>$1</b>") // Negrito
        .replace(/\*(.*?)\*/g, "<i>$1</i>")   // Itálico
        .replace(/__(.*?)__/g, "<u>$1</u>")   // Sublinhado
        .replace(/~~(.*?)~~/g, "<s>$1</s>"); // Tachado
    return formattedText;
}

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
            const img = document.createElement('img');
            img.src = URL.createObjectURL(file);
            img.style.maxWidth = '100px';
            img.style.borderRadius = '10px';
            mediaMessage.appendChild(img);
        } else if (file.type.startsWith('video/')) {
            const video = document.createElement('video');
            video.src = URL.createObjectURL(file);
            video.controls = true;
            video.style.maxWidth = '150px';
            mediaMessage.appendChild(video);
        }
        chatBox.appendChild(mediaMessage);
        chatBox.scrollTop = chatBox.scrollHeight;
    }
});
