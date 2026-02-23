let paramiz = 5000000;
let garaj = []; // Satın aldığımız arabalar burada duracak

let arabalar = [
    { id: 1, marka: "Honda", model: "Civic", yil: 2021, fiyat: 1200000 },
    { id: 2, marka: "Renault", model: "Megane", yil: 2018, fiyat: 850000 },
    { id: 3, marka: "Volkswagen", model: "Golf", yil: 2016, fiyat: 950000 }
];

// Menü değiştirme fonksiyonu
function menuDegistir(menu) {
    if (menu === 'pazar') {
        document.getElementById('pazar-ekrani').style.display = 'block';
        document.getElementById('garaj-ekrani').style.display = 'none';
    } else if (menu === 'garaj') {
        document.getElementById('pazar-ekrani').style.display = 'none';
        document.getElementById('garaj-ekrani').style.display = 'block';
        garajiEkranaGetir(); // Garajı açtığımızda içindeki arabaları yükle
    }
}

// Piyasadaki arabaları ekrana getirme
function arabalariEkranaGetir() {
    const liste = document.getElementById('araba-listesi');
    liste.innerHTML = ''; // Önce listeyi temizle

    arabalar.forEach(araba => {
        liste.innerHTML += `
            <div class="araba-karti" id="araba-${araba.id}">
                <h3>${araba.marka} ${araba.model}</h3>
                <p>Yıl: ${araba.yil}</p>
                <p class="fiyat">${araba.fiyat.toLocaleString('tr-TR')} TL</p>
                <button onclick="satinAl(${araba.id})">Satın Al</button>
            </div>
        `;
    });
}

// Satın alma işlemi
function satinAl(arabaId) {
    // Tıkladığımız arabayı listeden bulalım
    const secilenAraba = arabalar.find(araba => araba.id === arabaId);

    if (paramiz >= secilenAraba.fiyat) {
        paramiz -= secilenAraba.fiyat; 
        document.getElementById('paramiz').innerText = paramiz.toLocaleString('tr-TR'); 
        
        // Arabayı garaja ekle
        garaj.push(secilenAraba);

        // Arabayı piyasadan (arabalar listesinden) sil
        arabalar = arabalar.filter(araba => araba.id !== arabaId);

        // Ekranda piyasayı güncelle
        arabalariEkranaGetir();

        alert("Hayırlı olsun! " + secilenAraba.marka + " artık garajında.");
    } else {
        alert("Kasadaki para bu aracı almaya yetmiyor patron!");
    }
}

// Garajdaki arabaları ekrana getirme
function garajiEkranaGetir() {
    const garajListesi = document.getElementById('garaj-listesi');
    const bilgiMesaji = document.getElementById('garaj-bilgi');
    garajListesi.innerHTML = '';

    if (garaj.length === 0) {
        bilgiMesaji.style.display = 'block';
    } else {
        bilgiMesaji.style.display = 'none';
        garaj.forEach(araba => {
            garajListesi.innerHTML += `
                <div class="araba-karti">
                    <h3>${araba.marka} ${araba.model}</h3>
                    <p>Yıl: ${araba.yil}</p>
                    <p class="fiyat">Maliyet: ${araba.fiyat.toLocaleString('tr-TR')} TL</p>
                    </div>
            `;
        });
    }
}

// Oyun açıldığında piyasayı yükle
arabalariEkranaGetir();