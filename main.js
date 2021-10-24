
//generating a random number between a min number,and a max number.
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
//creating shapes defined as div when page mounted on screen .giving every shape a random hex color,width and height.
window.onload = function() {
    var counter=getRandomArbitrary(10, 30);
    for (let i = 0; i < counter; i++) {
        var newdiv = document.createElement("div");
        var randomColor = Math.floor(Math.random() * 16777215).toString(16);

        newdiv.onmouseover = Translate;

        let reg_width = getRandomArbitrary(0, 400)
        let reg_height = getRandomArbitrary(0, 400)
        newdiv.classList.add("transition");

        newdiv.style.backgroundColor = "#" + randomColor;
        newdiv.style.width = reg_width + "px";
        newdiv.style.height = reg_height + "px";
        newdiv.style.position = "absolute"

        //initializing a random position for each div.
        newdiv.style.left = getRandomArbitrary(0, window.innerWidth - reg_width * 1.5) + 'px';
        newdiv.style.top = getRandomArbitrary(0, window.innerHeight - reg_height * 1.5) + 'px';


        //adding the div to document
        document.body.appendChild(newdiv)

    }

}
function Translate() {
    this.style.transform = `translate(${getRandomArbitrary(0, 300)}px , ${getRandomArbitrary(0, 300)}px  )`;
}
