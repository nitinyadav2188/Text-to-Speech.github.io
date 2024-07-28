let speech = new SpeechSynthesisUtterance();

let voices=[];

let voiceSelect=document.querySelector("select");

window.speechSynthesis.onvoiceschanged=()=>{
    voices=window.speechSynthesis.getVoices(); //provide all voices available on the device
speech.voice=voices[0];//device me available pahli voice se hi bolna suru kar dega

//types of voices ko dropdown menu me show karega
voices.forEach((voice,i)=>(voiceSelect.options[i]=new Option(voice.name,i)));
}

//changing event on dropdown:
voiceSelect.addEventListener("change",()=>{
speech.voice=voices[voiceSelect.value];
});

//button pr click karne par textarea me likha hua bolne lagega
document.querySelector("button"),addEventListener("click",()=>{
    speech.text=document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});

//smooth scrolling k liye
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.footer-links a');

    for (const link of links) {
      link.addEventListener('click', (e) => {
        e.preventDefault();

        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    }
  });
