// SELEZIONARE GLI ELEMENTI DEL DOM
const container = document.getElementById("container");
const overlay = document.getElementById("overlay");
const overlayImg = document.getElementById("overlayImg");
const closeBtn = document.getElementById("closeBtn");

// FARE CHIAMATA API PER PRENDERE I DATI
const API = "https://lanciweb.github.io/demo/api/pictures/";

axios.get(API).then(function (resp) {

    // CREARE DINAMICAMENTE LE CARD
    const cardArray = resp.data;

    let cardStr = "";

    cardArray.forEach(function (curCard) {

        // ogni card con immagine e testo
        cardStr += `
            <div class="card rotate">
                <img class="pin" src="./img/pin.svg" alt="">
                <img class="photo" src="${curCard.url}" alt="${curCard.title}">
                <div class="card-text">
                    <p class="date">${curCard.date}</p>
                    <span>${curCard.title.toUpperCase()}</span>
                </div>
            </div>
        `;
    });

    // STAMPARE IN PAGINA
    container.innerHTML = cardStr;


    // PRENDO TUTTE LE FOTO
    const allPhotos = document.querySelectorAll(".photo");

    // AGGIUNGO CLICK A OGNI FOTO
    allPhotos.forEach(function (photo) {

        photo.addEventListener("click", function () {

            // quando clicco una foto
            // metto la foto dentro overlay
            overlayImg.src = photo.src;

            // apro overlay
            overlay.classList.add("active");
        });
    });

});


// CHIUDERE L'OVERLAY QUANDO SI CLICCA FUORI DALL'IMMAGINE
overlay.addEventListener("click", function (event) {

    // prendo l'elemento esatto cliccato
    let elementoCliccato = event.target;

    // se ho cliccato proprio l'overlay (lo sfondo)
    if (elementoCliccato === overlay) {
        overlay.classList.remove("active");
    }
});

// CHIUDERE L'OVERLAY QUANDO CLICCO IL BOTTONE
closeBtn.addEventListener("click", function () {

    // tolgo la classe active
    overlay.classList.remove("active");
});
