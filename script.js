document.addEventListener("DOMContentLoaded", () => {

    const text = "Hi, I'm Suwarna Ravindra Gite";
    const typing = document.querySelector(".typing");
    let i = 0;

    function typeEffect(){
        if(i < text.length){
            typing.textContent += text.charAt(i);
            i++;
            setTimeout(typeEffect, 100);
        }
    }

    if(typing){
        typing.textContent = "";
        typeEffect();
    }

    const elements = document.querySelectorAll(".scroll");

    function reveal(){
        elements.forEach(el => {
            if(el.getBoundingClientRect().top < window.innerHeight - 100){
                el.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", reveal);
    reveal();
});
