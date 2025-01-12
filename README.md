# 🤡💬 **Chat Clown**  

> **Transforme qualquer conversa em uma experiência repleta de risadas!**  

## **Sobre o Projeto**  
**Chat Clown** é um site divertido que faz você rir com piadas únicas e criativas.  
O site é gratuito, com uma experiência moderna e visualmente atraente.  

---

## **Funcionalidades Principais**  
- 🎭 **Geração de piadas** com temas variados.  
- 🌟 **Interface intuitiva** e compatível com dispositivos móveis.  
- 🔤 **Suporte a ícones Personalizados no Chat** com [Font Awesome](https://fontawesome.com/).  

---

## **Formatação de Texto no Estilo Discord**  

```javascript
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
```

💡 **Exemplo de Uso no Chat Clown:**  
Digite: `**Negrito**, *Itálico*, __Sublinhado__, ~~Tachado~~`  
O texto será renderizado como:  
- **Negrito**, *Itálico*, __Sublinhado__, ~~Tachado~~  

---

## **Como Contribuir**  
1. Faça um fork do repositório.  
2. Crie uma branch para suas alterações:  
   ```bash
   git checkout -b feature/sua-feature
   ```  
3. Faça um commit das alterações:  
   ```bash
   git commit -m "Descrição da feature"
   ```  
4. Envie suas alterações:  
   ```bash
   git push origin feature/sua-feature
   ```  
5. Abra um Pull Request.  

---

💻 **Desenvolvido por:** **ErikrafT**  
📢 **Anúncios inteligentes com ErikrafT Ads!**  

--- 
