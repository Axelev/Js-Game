/***** VARIABLER *****/
/*** Lagre HTML-elementer du trenger i variabler ***/
//Spillområde
const field = document.querySelector ("#spill-område");
//Score-tekst
const scoreText = document.querySelector ("#score");
//Game-over plakat
const gameOver = document.querySelector ("#game-over");


/*** Lag globale variabler ***/
//Hastighet
let speed = 100;
//Score
let score = 0;


/***** FUNKSJONER *****/
/*** Bobble-objekt ***/

function Ball () {
    //Lage bobble-element
    this.ball = document.createElement("p");
    this.ball.classList.add ("bobble");
    //Posisjon
    this.ball.style.position = "absolute";
    this.ball.style.top = Math.random() * 100 +"%";
    this.ball.style.left = Math.random() * 100 +"%";
    //Størrelse
    this.ball.style.width = "200px";
    this.ball.style.height = "200px";
    //Metode for endre størrelsen
    
    //Eventlistener for når brukeren klikker bobblen
    this.ball.addEventListener ("click", createNewBall);
}


/*** Funksjon for å feste en ny bobble til spillområdet ***/
function giveMeNewBall() {
    //Lag bobble
    const newBall = new Ball ();
    //Fest bobble til spillområde
    field.appendChild (newBall.ball);
    //Krymp bobble
    shrinkBall ();
    function shrinkBall () {;
        let size = 200; 
        const shrink = setInterval (function () {
        size--;
        newBall.ball.style.width = size + "px";
        newBall.ball.style.height = size + "px";
        if (size === 0) {
            clearInterval(shrink);
            endGame();
        }
        else () => {
            return;
        }
    }, speed); 
    }


/*** Funksjon for å krympe bobblen ***/
//Bruk endre størrelse-metoden på bobblen i et jevnt temp.

}


/*** Funksjon for når spilleren sprenger bobblen ***/
function createNewBall ()  {
    //Gi poeng
    score++;
    scoreText.innerHTML = score;
    // Fjern bobblen fra spillområde
    field.removeChild(field.lastChild);
    speed = speed - 5;
    // Lag ny bobble
    giveMeNewBall ();
}


//Funksjon som viser game-over teksten.
function endGame () {
    //Vis Game-over elementet fra HTML-filen.
    gameOver.classList.remove ("invisible");
}




/***** PROGRAM *****/
/*** Start programmet ***/
//Gi brukeren en bobble å sprenge.
giveMeNewBall();