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
}).catch(function (error) {
    console.error("Errore nel caricamento delle immagini:", error);
});


// APRI OVERLAY QUANDO CLICCHI UNA FOTO

    const allPhotos = document.querySelectorAll(".photo");

    // PER OGNI FOTO AGGIUNGO IL CLICK
    allPhotos.forEach(function (photo) {

        photo.addEventListener("click", function () {

            // IMPOSTO L’IMMAGINE NELL’OVERLAY
            overlayImg.src = photo.src;

            // MOSTRO L’OVERLAY
            overlay.classList.add("active");
        });
    });




// BOTTONE PER CHIUDERE
closeBtn.addEventListener("click", function () {
    overlay.classList.remove("active");
});
