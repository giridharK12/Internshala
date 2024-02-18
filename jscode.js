let chatbotMsgList = ["Hi", "Hey", "I'm good, thank you!", "Feeling fine, thanks for asking","Good Morning", "Good Evening", "I'm just a simple chatbot","How can I help you?", "Thank You"];

let containerEl = document.getElementById("chatContainer");
let userInputEl = document.getElementById("userInput")

function sendMgToChat() {
    let userMsg = userInputEl.value;
    let msgContainer = document.createElement("div");
    msgContainer.classList.add("msg-to-chatbot-container");
    containerEl.appendChild(msgContainer)

    let userMsgEl = document.createElement("span");
    userMsgEl.textContent = userMsg
    userMsgEl.classList.add("msg-to-chatbot")
    msgContainer.appendChild(userMsgEl);

    userInputEl.value = "";
    getReplyFromChatbot();
}

function getReplyFromChatbot() {
    let noOfChatbot = chatbotMsgList.length
    let chatbotMsg = chatbotMsgList[Math.ceil(Math.random() * noOfChatbot) - 1];
    let msgContainerEl = document.createElement("span")
    msgContainerEl.classList.add("msg-from-chatbot-container");
    containerEl.appendChild(msgContainerEl)

    let chatbotMsgEl = document.createElement("span");
    chatbotMsgEl.textContent = chatbotMsg
    chatbotMsgEl.classList.add("msg-from-chatbot")
    msgContainerEl.appendChild(chatbotMsgEl)
}