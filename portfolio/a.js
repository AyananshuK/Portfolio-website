var form = document.querySelector(".form1")
var statusText = document.querySelector(".statusText")

function seterror(error){
    statusText.style.display = "block"
    statusText.style.color = "red"
    statusText.innerHTML = error
}


form.addEventListener('submit', (e)=>{
    e.preventDefault()
})
function submitForm(){

    const name = document.forms["form1"]["name"].value
    const email = document.forms["form1"]["email"].value
    const subject = document.forms["form1"]["subject"].value
    const message = document.forms["form1"]["message-box"].value
    
    if(name.length <= 2){
        seterror("Enter a proper name!")
        return false
    }
    if(email.length >= 33){
        seterror("Enter a proper email!")
        return false
    }
    if(subject.length <= 2){
        seterror("Give a proper subject!")
        return false
    }
    if(message.length <= 5){
        seterror("Give a proper message!")
        return false
    }
    if(name.length == 0 || email.length == 0 || subject.length == 0 || message.length == 0){
        seterror("Fill out all the fields!")
        return false
    }


    statusText.style.display = "block"
    statusText.style.color = "#356eff"
    statusText.innerHTML = "Sending..."
    setTimeout(() => {
        statusText.style.display = "none"
        form.submit()
        form.reset()    
        return true
    }, 2000);
}


const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {
    const verticalScrollPx = window.scrollY
  
    if (verticalScrollPx < 360) {
      navbar.style.backgroundColor = 'transparent';
    } else if (verticalScrollPx > 360) {
      navbar.style.backgroundColor = '#356eff';
    }
});

let navHome = document.querySelector(".nav-home").children[0]
navHome.onclick = ()=>{
    window.scrollTo(0,0)   //or scrollViewInto() by using element id
}
let navAbout = document.querySelector(".nav-about").children[0]
navAbout.onclick = ()=>{
    window.scrollTo(0,767)   //or scrollViewInto() by using element id
}
let navSkills = document.querySelector(".nav-skills").children[0]
navSkills.onclick = ()=>{
    window.scrollTo(0,1541)   //or scrollViewInto() by using element id
}
let navWorks = document.querySelector(".nav-works").children[0]
navWorks.onclick = ()=>{
    window.scrollTo(0,2464)   //or scrollViewInto() by using element id
}
let navContact = document.querySelector(".nav-contact").children[0]
navContact.onclick = ()=>{
    window.scrollTo(0,3600)   //or scrollViewInto() by using element id
}



document.querySelector(".my-content-items").children[0].classList.add("reveal")
document.querySelector(".my-content-items").children[1].classList.add("reveal")
document.querySelector(".skills").children[0].classList.add("reveal")
document.querySelector(".skills").children[1].classList.add("reveal")
document.querySelector(".skills").children[2].classList.add("reveal")
document.querySelector(".skills").children[3].classList.add("reveal")
document.querySelector(".skills").children[4].classList.add("reveal")
document.querySelector(".skills").children[5].classList.add("reveal")
document.querySelector(".project-videos").children[0].classList.add("reveal")


window.addEventListener('scroll', () => {
    if(window.scrollY > 350){
        document.querySelector(".my-content-items").children[0].classList.add("active")
    }else{
        document.querySelector(".my-content-items").children[0].classList.remove("active")
    }
    if(window.scrollY > 400){
        document.querySelector(".my-content-items").children[1].classList.add("active")
    }else{
        document.querySelector(".my-content-items").children[1].classList.remove("active")
    }


    if(window.scrollY > 1100){
        document.querySelector(".skills").children[0].classList.add("active")
    }else{
        document.querySelector(".skills").children[0].classList.remove("active")
    }
    if(window.scrollY > 1150){
        document.querySelector(".skills").children[1].classList.add("active")
    }else{
        document.querySelector(".skills").children[1].classList.remove("active")
    }
    if(window.scrollY > 1200){
        document.querySelector(".skills").children[2].classList.add("active")
    }else{
        document.querySelector(".skills").children[2].classList.remove("active")
    }
    if(window.scrollY > 1250){
        document.querySelector(".skills").children[3].classList.add("active")
    }else{
        document.querySelector(".skills").children[3].classList.remove("active")
    }
    if(window.scrollY > 1300){
        document.querySelector(".skills").children[4].classList.add("active")
    }else{
        document.querySelector(".skills").children[4].classList.remove("active")
    }
    if(window.scrollY > 1320){
        document.querySelector(".skills").children[5].classList.add("active")
    }else{
        document.querySelector(".skills").children[5].classList.remove("active")
    }


    if(window.scrollY > 2072){
        document.querySelector(".project-videos").children[0].classList.add("active")
    }else{
        document.querySelector(".project-videos").children[0].classList.remove("active")
    }
});





