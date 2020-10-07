/*Je déclare ma fonction IIFE, histoire de sécuriser mes variables*/
/*Trois const, une pour cibler ma balise img, une autre pour 
cibler mon bouton et l'autre pour créer un beau tableau-objet
contenant tous mes gifs*/
/*J'aurais pu utiliser une API mais je préfère cette fois-ci avoir
une maîtrise totale des gifs qu'affiche mon générateur*/
(function () {
    const gif = document.getElementById("gif");
    const button = document.getElementById("btn");
    const imgSrc = [
        "https://media.giphy.com/media/IL4iTvQH0MjS/giphy.gif",
        "https://media.giphy.com/media/XCy2gXigoY7Cq22lZI/giphy.gif",
        "https://media.giphy.com/media/l2R03nrt5LDkpc6VG/giphy.gif",
        "https://media.giphy.com/media/o1I8DMW1hVtAI/giphy.gif",
        "https://media.giphy.com/media/cK0QSfVaTl62A/giphy.gif",
        "https://media.giphy.com/media/x7gybOmE9zBmw/giphy.gif",
        "https://media.giphy.com/media/Ihz1iwBy2Y9VNdN4a7/giphy.gif",
        "https://media.giphy.com/media/QvRfWdvCVkJy3LkrOQ/giphy.gif",
        "https://media.giphy.com/media/H4KX18qpW7giqwtdVc/giphy.gif",
        "https://media.giphy.com/media/KZdVx62In8FxF281D6/giphy.gif",
        "https://media.giphy.com/media/WV4UG1JHqVofI6KveA/giphy.gif",
        "https://media.giphy.com/media/4APAe5Vw4xHGM/giphy.gif",
        "https://media.giphy.com/media/i9qmSfLuXXcXK/giphy.gif",
        "https://media.giphy.com/media/5hdijbS3MDVw0SHWmn/giphy.gif",
        "https://media.giphy.com/media/l0MYPPqqAY0Kp6g0w/giphy.gif",
        "https://media.giphy.com/media/cm6ckCs1cEK22Y3NLv/giphy.gif",
        "https://media.giphy.com/media/NpEE2cRs2Amkg/giphy.gif",
        "https://media.giphy.com/media/8jO8ZmkCVnwmk/giphy.gif",
        "https://media.giphy.com/media/RkcTvnA2AJvfTz2drD/giphy.gif",
        "https://media.giphy.com/media/X1b0IkAwdpjzO/giphy.gif",
        "https://media.giphy.com/media/tUmqyBrCWAyTC/giphy.gif",
    ];
    /*j'initialise mon générateur*/
    var index = 0;
    
    /*je prends ma const button et lui assigne un événement onclick*/
    button.onclick = function () {
        index = Math.floor(Math.random() * imgSrc.length);
        gif.src = imgSrc[index];
    };
})();
