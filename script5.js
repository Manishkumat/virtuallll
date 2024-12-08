let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=0.9
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="hi-GB"
    window.speechSynthesis.speak(text_speak)
    window.speechSynthesis.getVoices(voice.name.includes("Microsoft David Desktop"))
}
function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    console.log(hours)
    if(hours>=0 && hours<12){
        speak("Good Morning Sir")
    }
    else if(hours>=12 && hours<16){
        speak("Good Afternoon")
    }
    else {
        speak("Good Evening")
    }
}
window.addEventListener('load',()=>{
   wishMe()
})
let speechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition
let recognition=new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
    console.log(event)
    takeCommand(transcript.toLowerCase())
}
btn.addEventListener("click",()=>{
recognition.start()
btn.style.display="none"
voice.style.display="block"
})
function takeCommand(message){
    btn.style.display="flex"
    voice.style.display="none"
    if(message.includes("hello")||message.includes("hey")){
        speak("hello Sir,what can i help you?")
    }
    else if(message.includes("who is chandni")){
        speak("manish ka pehla pyar")
    }else if(message.includes("open youtube")){
        speak("opening youtube")
        window.open("https://www.youtube.com/")
    }else if(message.includes("how are you")){
        speak("I am fine,what about you")
    }else if(message.includes("open facebook")){
        speak("opening facebook")
        window.open("https://www.facebook.com/")
    }else if(message.includes("open google")){
        speak("opening Google")
        window.open("https://www.google.com/")
    }else if(message.includes("open linkdin")){
        speak("opening linkdin")
        window.open("https://www.linkedin.com/in/manish-kumar-ba7997270/edit/forms/certification/new/?profileFormEntryPoint=PROFILE_COMPLETION_HUB")
    }else if(message.includes("open instagram")){
        speak("opening instagram")
        window.open("https://www.instagram.com/")
    }else if(message.includes("who created you")){
        speak("i am virtual assistant, created by manish")
    }else if(message.includes("chandni old friends")){
        speak("yamini,nikkita,monaa")
    }else if(message.includes("my friends forever")){
        speak("ankuu,neejuu")
    }else if(message.includes("open calculator")){
        speak("opening calculator")
        window.open("calculator://")
    }else if(message.includes("open clock")){
        speak("opening clock")
        window.open("Clock://")
    }else if(message.includes("time")){ 
        let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
        speak(time)
    }else if(message.includes("date")){ 
        let date=new Date().toLocaleString(undefined,{day:"numeric",month:"numeric"})
        speak(date)
    }else if(message.includes("open whatsapp")){
        speak("opening whatsapp")
        window.open("https://www.whatsapp.com/")
    }else if(message.includes("my love photo")){
        speak("opening foto")
        window.open("C:\Users\HP\Pictures\Camera Roll\IMG_20230506_210229_010.jpg")
    } else if(message.includes("open Word")){
        speak("opening word")
        window.open("Microsoft Word 2010://")
    }else if(message.includes("open chat gpt")){
        speak("opening chatgpt")
        window.open("https://chatgpt.com/")
    }else if(message.includes("open email")){
        speak("opening email")
        window.open("https://gmail.com/")
    }
    else 
    {
    speak(`this is what i found on internet regarding ${message}`)
    window.open(`https://www.google.com/search?q=${message}`)
    }
}
