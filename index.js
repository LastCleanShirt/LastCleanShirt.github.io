document.addEventListener("DOMContentLoaded", function(){
    var i = 0;
    var welcometext = "Let's connect 👀";
    var speed = 50;
    
    function typeWriter(){
        if (i<welcometext.length)
        {
            document.getElementById("lets-connect").innerHTML += welcometext.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
})
