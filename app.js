image.style.animation = "image 1.5s linear infinite";
graphical.style.animation = "backlight 1s linear infinite";
graphical.addEventListener("click", function(){
    skill.style.backgroundColor = "rgb(39, 39, 39)";
    graphical.style.backgroundColor = "rgb(77, 77, 77)";
    skill.style.transition = ".2s";
    skill.style.cursor = "pointer"
    graphical.style.cursor = "auto";
    graphical.style.cursor = "auto";
    graphical.style.animation = "";
    image.style.animation = "";
});
skill.addEventListener("click", function(){
    skill.style.animation = "";
    skill.style.animation = "";
    skill.style.backgroundColor = "rgb(77, 77, 77)";
    graphical.style.backgroundColor = "rgb(39, 39, 39)";
    skill.style.cursor = "auto";
    graphical.style.cursor = "pointer";
});
