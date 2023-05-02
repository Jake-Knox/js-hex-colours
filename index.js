
// console.log("test")

// add cards to list of elements
// add button in middle

// add on click -> generates random letternumber combos to make hex
// st bg color to hex code generated eg -> #c7ff34 (lime green)
// click button again to rand the colours again

const chars = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"]

const rndButton = document.getElementById("rnd-btn");

const cards = document.querySelectorAll(".card");

rndButton.addEventListener("click", () => {

    for(let x = 0; x < cards.length; x++){
        
        let hexcode = "#";
        for (let i = 0; i < 6; i++ )
        {
            const random = Math.floor(Math.random() * chars.length);
            hexcode += chars[random]
        }
        cards[x].style.backgroundColor = hexcode;
        cards[x].innerHTML = hexcode
    }    
})