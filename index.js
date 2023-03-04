var nofbut=document.querySelectorAll(".drum").length;

for (let i = 0; i < nofbut; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var audio = new Audio('sounds/kick-bass.mp3');
        audio.play();
    });   
}
