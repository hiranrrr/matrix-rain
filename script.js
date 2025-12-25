const canvas = document.getElementById("matrixCanvas");
const cizimAlani = canvas.getContext("2d");

const renkSecici = document.getElementById("renkSecici");
const hizKontrolu = document.getElementById("hizKontrolu");

let yaziRengi = renkSecici.value;
let dusmeHizi = hizKontrolu.value;

const karakterler = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*";
const fontBoyutu = 16;

let sutunSayisi;
let dususPozisyonlari;

function canvasBoyutlandir() {
    canvas.width = window.innerWidth - 200;
    canvas.height = window.innerHeight;
    canvas.style.marginLeft = "200px";

    sutunSayisi = Math.floor(canvas.width / fontBoyutu);
    dususPozisyonlari = Array(sutunSayisi).fill(1);
}

canvasBoyutlandir();


function matrixCiz() {
    cizimAlani.fillStyle = "rgba(0, 0, 0, 0.05)";
    cizimAlani.fillRect(0, 0, canvas.width, canvas.height);

    cizimAlani.fillStyle = yaziRengi;
    cizimAlani.font = fontBoyutu + "px monospace";

    for (let i = 0; i < dususPozisyonlari.length; i++) {
        const rastgeleKarakter =
            karakterler.charAt(Math.floor(Math.random() * karakterler.length));

        const x = i * fontBoyutu;
        const y = dususPozisyonlari[i] * fontBoyutu;

        cizimAlani.fillText(rastgeleKarakter, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
            dususPozisyonlari[i] = 0;
        }

        dususPozisyonlari[i]++;
    }
}


renkSecici.addEventListener("input", (e) => {
    renkSecici.addEventListener("input", (e) => {
    yaziRengi = e.target.value;

   
    document.documentElement.style
        .setProperty("--matrix-renk", yaziRengi);
});

});


let animasyon = setInterval(matrixCiz, 1000 / dusmeHizi);

hizKontrolu.addEventListener("input", (e) => {
    dusmeHizi = e.target.value;
    clearInterval(animasyon);
    animasyon = setInterval(matrixCiz, 1000 / dusmeHizi);
});


window.addEventListener("resize", canvasBoyutlandir);
