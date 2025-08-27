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
    
    const tl_cards = document.querySelectorAll(".timeline-item");
    
    tl_cards.forEach(card => {
        card.addEventListener("click", function() {
            // Find the <p> inside this timeline-item
            const hiddenText = this.querySelector(".card-desc");
            if (hiddenText) {
                // Toggle between display: none and block
                hiddenText.style.display = hiddenText.style.display === "block" ? "none" : "block";
            }
        });
    });
})
