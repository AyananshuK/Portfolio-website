document.body.querySelector(".chat-container").classList.add("show-chatbot")
const robotBtn = document.body.querySelector(".chatbot-toogler")

robotBtn.onclick = ()=>{
    document.body.querySelector(".chat-container").classList.toggle("active-show-chatbot")
    let a = robotBtn.children[1].classList.toggle("close-div")
    if(a === false){
        robotBtn.children[0].style.display = "none"
    }else{
        robotBtn.children[0].style.display = "block"
    }
}