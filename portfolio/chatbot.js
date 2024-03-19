const responseObj = {
    hello: "Hey! What's Up. How may I assist you?",
    Hello: "Hey! What's Up. How may I assist you?",
    hi: "Hey! How may I assist you?",
    Hi: "Hey! How may I assist you?",
    Today: new Date().toDateString(),
    today: new Date().toDateString(),
    time: new Date().toLocaleTimeString(),
    Time: new Date().toLocaleTimeString(),
    Services: "1.Web dev\n2.App dev.\nFor further details send us a message or email.",
    services: "1.Web dev\n2.App dev.\nFor further details send us a message or email."
};

const chatBody = document.querySelector(".chat-body");
const txtInput = document.querySelector("#txtInput");
const send = document.querySelector(".send");

send.addEventListener("click", () => userMessage());

txtInput.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
        userMessage();
    }
});

const userMessage = () => {
    const userInput = txtInput.value;
    if (userInput.length != 0) {
        renderMessage(userInput, "user");
        txtInput.value = "";
        setTimeout(() => {
            renderChatbotResponse(userInput);
            setScrollPosition();
        }, 180);
    }
};

const renderMessage = (txt, type) => {
    let className = "user-message";
    if (type !== "user") {
        className = "chatbot-message";
    }
    const message = document.createElement("div");
    message.classList.add(className);
    message.innerHTML = txt;
    chatBody.append(message);
};

const renderChatbotResponse = (userInput) => {
    const res = getChatbotResponse(userInput);
    renderMessage(res);
};

const getChatbotResponse = (userInput) => {
    return responseObj[userInput] == undefined
        ? "Sorry I didn't understand. If you want to send any message, fill out the contact form."
        : responseObj[userInput];
};

const setScrollPosition = () => {
    if (chatBody.scrollHeight > 0) {
        chatBody.scrollTop = chatBody.scrollHeight;
    }
};
