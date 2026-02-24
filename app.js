function ozelUyari(mesaj, tip = 'bilgi') {
    const modal = document.getElementById('uyari-modal');
    const icerik = modal.querySelector('.uyari-icerik');
    const ikon = document.getElementById('uyari-ikon');
    const baslik = document.getElementById('uyari-baslik');
    const mesajAlani = document.getElementById('uyari-mesaj');

    icerik.className = 'modal-icerik uyari-icerik'; 
    if (tip === 'hata') { icerik.classList.add('uyari-hata'); ikon.innerText = '❌'; baslik.innerText = 'İşlem Başarısız'; baslik.style.color = '#d63031'; } 
    else if (tip === 'basari') { icerik.classList.add('uyari-basarili'); ikon.innerText = '✅'; baslik.innerText = 'Tebrikler!'; baslik.style.color = '#00b894'; } 
    else { icerik.classList.add('uyari-bilgi'); ikon.innerText = 'ℹ️'; baslik.innerText = 'Bilgilendirme'; baslik.style.color = '#0984e3'; }

    mesajAlani.innerText = mesaj; modal.style.display = 'block';
}

function uyariyiKapat() { document.getElementById('uyari-modal').style.display = 'none'; }
function modaliKapat(modalId) { document.getElementById(modalId).style.display = "none"; }
function ayarlarModalAc() { document.getElementById('ayarlar-modal').style.display = "block"; }
function mobilMenuKapatAc() { document.querySelector('.sol-menu').classList.toggle('acik'); document.getElementById('mobil-menu-overlay').classList.toggle('acik'); }

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
function oyunSesi(tip) {
    if (audioCtx.state === 'suspended') { audioCtx.resume(); }
    const oscillator = audioCtx.createOscillator(); const gainNode = audioCtx.createGain();
    oscillator.connect(gainNode); gainNode.connect(audioCtx.destination);
    if (tip === 'kasa') {
        oscillator.type = 'sine'; oscillator.frequency.setValueAtTime(800, audioCtx.currentTime); oscillator.frequency.exponentialRampToValueAtTime(1500, audioCtx.currentTime + 0.1);
        gainNode.gain.setValueAtTime(0.2, audioCtx.currentTime); gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
        oscillator.start(); oscillator.stop(audioCtx.currentTime + 0.3);
    } else if (tip === 'hata') {
        oscillator.type = 'sawtooth'; oscillator.frequency.setValueAtTime(150, audioCtx.currentTime);
        gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime); gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.4);
        oscillator.start(); oscillator.stop(audioCtx.currentTime + 0.4);
    }
}

let galeriAdi = "Benim"; 
let paramiz = 15000000; let bankaBorcu = 0; let garaj = []; let gun = 1; let idSayaci = 1; 
let toplamSatilanArac = 0; let toplamGelir = 0; let toplamGider = 0;
let dukkanSeviyesi = 1; let aracKapasitesi = 2;
let arabalar = [];
let hakanAbiSonKullanim = -15; // Oyuna başlar başlamaz hazır olsun

const seviyeler = [
    { seviye: 1, isim: "Sokak Arası Galeri", kapasite: 2, fiyat: 0 }, { seviye: 2, isim: "Lüks Galeri", kapasite: 5, fiyat: 2000000 },
    { seviye: 3, isim: "Oto Center", kapasite: 10, fiyat: 5000000 }, { seviye: 4, isim: "Dev Plaza", kapasite: 999, fiyat: 15000000 } 
];

const modifiyePaketleri = [
    { id: 1, isim: "Cam Filmi & Seramik Boya", ikon: "✨", maliyet: 25000, degerArtisi: 60000 },
    { id: 2, isim: "Spor Çelik Jant & Lastik", ikon: "🛞", maliyet: 55000, degerArtisi: 130000 },
    { id: 3, isim: "Stage 1 Yazılım & Egzoz", ikon: "💻", maliyet: 90000, degerArtisi: 220000 }
];

const musteriIsimleri = ["Ahmet Bey", "Mehmet Bey", "Ayşe Hanım", "Can", "Zeynep", "Burak", "Kemal Abi", "Elif Hanım", "Mert", "Selin"];

const aracSablonlari = [
    { marka: "BMW", model: "320i", tabanFiyat: 3800000, gorsel: "img/bmw-320i.jpg" },
    { marka: "Mercedes", model: "C200", tabanFiyat: 4100000, gorsel: "img/mercedes-c200.jpg" },
    { marka: "Audi", model: "A3", tabanFiyat: 2400000, gorsel: "img/audi-a3.jpg" },
    { marka: "Volkswagen", model: "Golf", tabanFiyat: 1850000, gorsel: "img/golf.jpg" },
    { marka: "Renault", model: "Megane", tabanFiyat: 1400000, gorsel: "img/megane.jpg" }, 
    { marka: "Fiat", model: "Egea", tabanFiyat: 1100000, gorsel: "img/egea.jpg" },
    { marka: "Toyota", model: "Corolla", tabanFiyat: 1550000, gorsel: "img/corolla.jpg" },
    { marka: "Honda", model: "Civic", tabanFiyat: 1750000, gorsel: "img/civic.jpg" }
];

function oyunuKaydet() {
    const kayitData = { galeriAdi, paramiz, bankaBorcu, garaj, gun, dukkanSeviyesi, aracKapasitesi, toplamSatilanArac, toplamGelir, toplamGider, arabalar, idSayaci, hakanAbiSonKullanim };
    localStorage.setItem('sahibindenMotorsKayit', JSON.stringify(kayitData));
}

function oyunuYukle() {
    const eskiKayit = JSON.parse(localStorage.getItem('sahibindenMotorsKayit'));
    if (eskiKayit && eskiKayit.galeriAdi) {
        galeriAdi = eskiKayit.galeriAdi; paramiz = eskiKayit.paramiz; bankaBorcu = eskiKayit.bankaBorcu; garaj = eskiKayit.garaj;
        gun = eskiKayit.gun; dukkanSeviyesi = eskiKayit.dukkanSeviyesi; aracKapasitesi = eskiKayit.aracKapasitesi;
        toplamSatilanArac = eskiKayit.toplamSatilanArac; toplamGelir = eskiKayit.toplamGelir; toplamGider = eskiKayit.toplamGider;
        arabalar = eskiKayit.arabalar || []; idSayaci = eskiKayit.idSayaci || 1;
        hakanAbiSonKullanim = eskiKayit.hakanAbiSonKullanim || -15;
        document.getElementById('gun').innerText = gun;
        return true; 
    }
    return false; 
}

function oyunuSifirlaEkrani() {
    if(confirm("Tüm ilerlemen silinecek. Oyuna baştan başlayacaksın. Emin misin?")) {
        localStorage.removeItem('sahibindenMotorsKayit');
        location.reload();
    }
}

function ekspertizUret() {
    const parcalar = ['kaput', 'tavan', 'bagaj', 'solOnCamurluk', 'solOnKapi', 'solArkaKapi', 'solArkaCamurluk', 'sagOnCamurluk', 'sagOnKapi', 'sagArkaKapi', 'sagArkaCamurluk'];
    const ekspertiz = {}; let hasarPuan = 0; let temizMi = Math.random() < 0.25;
    parcalar.forEach(p => {
        if (temizMi) { ekspertiz[p] = 'orijinal'; } else {
            let rnd = Math.random();
            if (rnd < 0.50) { ekspertiz[p] = 'orijinal'; } else if (rnd < 0.70) { ekspertiz[p] = 'lokal'; hasarPuan += 1; } 
            else if (rnd < 0.88) { ekspertiz[p] = 'boyali'; hasarPuan += 3; } else { ekspertiz[p] = 'degisen'; hasarPuan += 6; }
        }
    });
    return { detay: ekspertiz, puan: hasarPuan };
}

function aciklamaUret(ekspertizPuan, km, marka) {
    if (ekspertizPuan === 0 && km < 50000) return `Kapalı garaj arabasıdır. Nokta hatasızdır. Dosta gidecek temizlikte bir ${marka}.`;
    if (ekspertizPuan === 0) return `Motoru kusursuzdur. Yaşına göre ufak tefek çizikleri var ama orijinaldir.`;
    if (ekspertizPuan < 5) return `Araçta sadece temizlik boyaları mevcuttur. Şase, podye işlemsizdir.`;
    if (ekspertizPuan < 15) return `Aracın çeşitli yerlerinde boya ve değişenler mevcuttur. Parça parça trameri var.`;
    return `Araç ağır hasar kayıtlıdır (Pert). Tavan dahil işlemlidir. Kaportaya takıntısı olanlar aramasın.`;
}

function rastgeleArabaUret() {
    const sablon = aracSablonlari[Math.floor(Math.random() * aracSablonlari.length)];
    const yil = Math.floor(Math.random() * (2026 - 2020 + 1)) + 2020; 
    const km = ((2026 - yil) * Math.floor(Math.random() * 20000 + 10000)) + Math.floor(Math.random() * 15000);
    
    let yas = 2026 - yil;
    let degerKaybiOrani = (yas * 0.03) + ((km / 10000) * 0.015); 
    if (degerKaybiOrani > 0.40) degerKaybiOrani = 0.40; 
    let tabanHesap = sablon.tabanFiyat * (1 - degerKaybiOrani);

    let ekspertizVerisi = ekspertizUret();
    let hasarIndirimi = ekspertizVerisi.puan * 0.015; 
    if (hasarIndirimi > 0.50) hasarIndirimi = 0.50; 
    let fiyat = tabanHesap * (1 - hasarIndirimi);

    let agirHasarliMi = ekspertizVerisi.puan > 15 || ekspertizVerisi.detay['tavan'] === 'degisen';
    let tamirMasrafi = agirHasarliMi ? Math.floor(fiyat * 0.1) : 0; 

    // YENİ: RASTGELE TELEFON NUMARASI
    let telNo = '05' + Math.floor(Math.random() * 90000000 + 10000000);

    return { 
        id: idSayaci++, marka: sablon.marka, model: sablon.model, yil: yil, km: Math.floor(km), 
        fiyat: Math.floor(fiyat), hasarli: agirHasarliMi, tamirMasrafi: tamirMasrafi, modifiyeler: [],
        gorsel: sablon.gorsel, ekspertiz: ekspertizVerisi.detay, ilanAciklamasi: aciklamaUret(ekspertizVerisi.puan, km, sablon.marka),
        teklifler: [], telefon: telNo
    };
}

function piyasayiYenile() {
    arabalar = []; for(let i = 0; i < 4; i++) { arabalar.push(rastgeleArabaUret()); }
    if (document.getElementById('pazar-ekrani').style.display === 'block') { arabalariEkranaGetir(); }
}

function sonrakiGun() {
    gun++; document.getElementById('gun').innerText = gun;
    
    if (bankaBorcu > 0) {
        let faizMiktari = Math.floor(bankaBorcu * 0.05); bankaBorcu += faizMiktari; toplamGider += faizMiktari; 
        document.getElementById('borc-miktari').innerText = bankaBorcu.toLocaleString('tr-TR');
    }

    if(Math.random() < 0.15) {
        let ceza = Math.floor(paramiz * 0.05) + 15000; 
        if(ceza > paramiz) ceza = paramiz; 
        paramiz -= ceza; toplamGider += ceza;
        oyunSesi('hata'); ozelUyari(`Vergi dairesi denetime geldi! ${ceza.toLocaleString('tr-TR')} TL ceza yedin.`, 'hata');
    }

    garaj.forEach(araba => {
        if (!araba.teklifler) araba.teklifler = [];
        araba.teklifler = araba.teklifler.filter(t => (gun - t.gelisGunu) < 3);

        if (Math.random() > 0.3) {
            let yeniTeklifSayisi = Math.floor(Math.random() * 2) + 1;
            let minFiyat = araba.fiyat * 0.85; let maxFiyat = araba.fiyat * 1.30;
            if (araba.hasarli) maxFiyat = araba.fiyat * 1.0; 

            for(let i=0; i<yeniTeklifSayisi; i++) {
                araba.teklifler.push({
                    id: 'tklf-' + Math.floor(Math.random() * 1000000), musteri: musteriIsimleri[Math.floor(Math.random() * musteriIsimleri.length)],
                    fiyat: Math.floor(Math.random() * (maxFiyat - minFiyat + 1)) + minFiyat, gelisGunu: gun
                });
            }
        }
    });

    piyasayiYenile(); ekraniGuncelle(); oyunuKaydet(); menuDegistir('pazar'); 
}

function menuDegistir(menu) {
    document.querySelectorAll('.sayfa').forEach(s => s.style.display = 'none');
    document.querySelectorAll('.sol-menu li').forEach(l => l.classList.remove('aktif'));
    document.getElementById(menu + '-ekrani').style.display = 'block';
    document.getElementById('menu-' + menu).classList.add('aktif');
    
    if (menu === 'pazar') arabalariEkranaGetir();
    if (menu === 'garaj') garajiEkranaGetir();
    if (menu === 'istatistik') istatistikleriGuncelle();
    if (menu === 'dukkan') dukkanEkraniniGuncelle();
    if (menu === 'banka') document.getElementById('borc-miktari').innerText = bankaBorcu.toLocaleString('tr-TR');

    if(window.innerWidth <= 768) { document.querySelector('.sol-menu').classList.remove('acik'); document.getElementById('mobil-menu-overlay').classList.remove('acik'); }
}

function krediCek(miktar) { oyunSesi('kasa'); paramiz += miktar; bankaBorcu += miktar; ekraniGuncelle(); oyunuKaydet(); ozelUyari(`Bankadan ${miktar.toLocaleString('tr-TR')} TL kredi çektin.`, 'basari'); document.getElementById('borc-miktari').innerText = bankaBorcu.toLocaleString('tr-TR'); }
function borcOde(miktar) { 
    if (bankaBorcu === 0) { ozelUyari("Bankaya hiç borcun yok!", "bilgi"); return; } 
    if (paramiz >= miktar) { let odenecek = miktar > bankaBorcu ? bankaBorcu : miktar; paramiz -= odenecek; bankaBorcu -= odenecek; ekraniGuncelle(); oyunuKaydet(); oyunSesi('satin-al'); ozelUyari(`${odenecek.toLocaleString('tr-TR')} TL borç ödendi.`, "basari"); document.getElementById('borc-miktari').innerText = bankaBorcu.toLocaleString('tr-TR');
    } else { oyunSesi('hata'); ozelUyari("Kasanda bu borcu ödeyecek kadar para yok!", "hata"); } 
}
function borcuKapat() { 
    if (bankaBorcu === 0) { ozelUyari("Zaten borcun yok.", "bilgi"); return; } 
    if (paramiz >= bankaBorcu) { paramiz -= bankaBorcu; bankaBorcu = 0; ekraniGuncelle(); oyunuKaydet(); oyunSesi('satin-al'); ozelUyari("Tebrikler, bankaya olan tüm borcunu kapattın!", "basari"); document.getElementById('borc-miktari').innerText = bankaBorcu.toLocaleString('tr-TR');
    } else { oyunSesi('hata'); ozelUyari("Kasanda tüm borcu kapatacak kadar para yok!", "hata"); } 
}

function ekraniGuncelle() {
    document.getElementById('paramiz').innerText = paramiz.toLocaleString('tr-TR');
    let kapasiteYazisi = aracKapasitesi === 999 ? "Sınırsız" : aracKapasitesi;
    document.getElementById('kapasite-bilgi').innerText = garaj.length + " / " + kapasiteYazisi;
    if (garaj.length >= aracKapasitesi && aracKapasitesi !== 999) { document.getElementById('kapasite-bilgi').style.color = '#e74c3c'; } else { document.getElementById('kapasite-bilgi').style.color = '#0984e3'; }
}

function arabalariEkranaGetir() {
    const liste = document.getElementById('araba-listesi'); liste.innerHTML = ''; 
    arabalar.forEach(araba => {
        let hasarMetni = araba.hasarli ? '<span class="etiket etiket-kirmizi">Ağır Hasarlı Olabilir</span>' : '<span class="etiket etiket-yesil">Ekspertiz Raporlu</span>';
        liste.innerHTML += `
            <div class="ilan-karti">
                <div class="araba-foto"><img src="${araba.gorsel}" style="width:100%; height:100%; object-fit:cover; border-radius:8px;"></div>
                <div class="ilan-detay">
                    <h3 class="ilan-baslik">Sahibinden ${araba.marka} ${araba.model}</h3>
                    <div class="ilan-ozellikler"><span>🗓️ <strong>${araba.yil}</strong></span><span>🛣️ <strong>${araba.km.toLocaleString('tr-TR')}</strong> KM</span></div>
                    <div class="ilan-durum" style="margin-top: 5px;">${hasarMetni}</div>
                </div>
                <div class="ilan-sag-taraf">
                    <div class="ilan-fiyat">${araba.fiyat.toLocaleString('tr-TR')} ₺</div>
                    <button class="btn btn-turuncu" onclick="ilanDetayEkraniAc(${araba.id})">🔍 İncele</button>
                </div>
            </div>`;
    });
}

function ilanDetayEkraniAc(arabaId) {
    const araba = arabalar.find(a => a.id === arabaId);
    document.getElementById('detay-foto').src = araba.gorsel;
    document.getElementById('detay-baslik').innerText = `Satılık ${araba.marka} ${araba.model}`;
    document.getElementById('detay-fiyat').innerText = `${araba.fiyat.toLocaleString('tr-TR')} TL`;
    document.getElementById('detay-marka').innerText = araba.marka;
    document.getElementById('detay-model').innerText = araba.model;
    document.getElementById('detay-yil').innerText = araba.yil;
    document.getElementById('detay-km').innerText = araba.km.toLocaleString('tr-TR');
    document.getElementById('detay-aciklama').innerText = araba.ilanAciklamasi;
    
    // YENİ: Telefon numarasını butona yazdır
    document.getElementById('detay-telefon').innerText = araba.telefon;

    const parcalar = ['kaput', 'tavan', 'bagaj', 'solOnCamurluk', 'solOnKapi', 'solArkaKapi', 'solArkaCamurluk', 'sagOnCamurluk', 'sagOnKapi', 'sagArkaKapi', 'sagArkaCamurluk'];
    parcalar.forEach(p => {
        const parcaDiv = document.getElementById(`eks-${p}`);
        parcaDiv.classList.remove('orijinal', 'lokal', 'boyali', 'degisen');
        parcaDiv.classList.add(araba.ekspertiz[p]);
    });

    // YENİ: HAKAN ABİ BUTONU KONTROLÜ
    const hakanAbiBtn = document.getElementById('detay-hakan-abi-btn');
    let kalanGun = 15 - (gun - hakanAbiSonKullanim);
    if (kalanGun <= 0) {
        hakanAbiBtn.innerText = "👑 Hakan Abi'ye Arattır (%40 İndirim)";
        hakanAbiBtn.style.opacity = "1";
        hakanAbiBtn.onclick = function() { hakanAbiAra(araba.id); };
    } else {
        hakanAbiBtn.innerText = `👑 Hakan Abi Meşgul (${kalanGun} Gün Sonra)`;
        hakanAbiBtn.style.opacity = "0.5";
        hakanAbiBtn.onclick = function() { ozelUyari(`Hakan Abi şu an tahsilatta. ${kalanGun} gün sonra tekrar deneyebilirsin.`, "bilgi"); };
    }

    document.getElementById('detay-satici-ara-btn').onclick = function() { saticiAra(araba.id); };
    document.getElementById('ilan-detay-modal').style.display = 'block';
}

// YENİ: TELEFON SİSTEMİ MANTIKLARI
let aktifAramaArabaId = null;

function telefonuKapat() {
    document.getElementById('telefon-modal').style.display = 'none';
    document.querySelector('.telefon-ekrani').classList.remove('caliyor');
}

function saticiAra(arabaId) {
    if (garaj.length >= aracKapasitesi) { ozelUyari("Garaj kapasiten tamamen dolu! Dükkanı büyüt.", "hata"); return; }
    aktifAramaArabaId = arabaId;
    const araba = arabalar.find(a => a.id === arabaId);
    
    modaliKapat('ilan-detay-modal');
    document.getElementById('tel-aranan-kisi').innerText = `Satıcı Aranıyor (${araba.telefon})`;
    document.getElementById('tel-diyalog').innerText = "Dıt... Dıt... Dıt...";
    document.getElementById('tel-aksiyonlar').style.display = 'none';
    document.querySelector('.telefon-ekrani').classList.add('caliyor');
    document.getElementById('telefon-modal').style.display = 'block';
    
    setTimeout(() => {
        document.querySelector('.telefon-ekrani').classList.remove('caliyor');
        document.getElementById('tel-aranan-kisi').innerText = `Görüşme Sağlanıyor: Satıcı`;
        document.getElementById('tel-diyalog').innerText = `"Alo buyur kardeşim. İlan için aradın sanırım. Aracın son fiyatı ${araba.fiyat.toLocaleString('tr-TR')} TL. Alıyor musun?"`;
        document.getElementById('tel-aksiyonlar').style.display = 'flex';
        
        // Buton fonksiyonlarını bağla
        document.getElementById('tel-satin-al-btn').onclick = function() { telSatinAl(araba.id); };
        document.getElementById('tel-pazarlik-btn').onclick = function() { telPazarlikYap(araba.id); };
    }, 2000);
}

function telPazarlikYap(arabaId) {
    const araba = arabalar.find(a => a.id === arabaId);
    document.getElementById('tel-aksiyonlar').style.display = 'none';
    
    // %60 Şansla başarılı pazarlık
    if (Math.random() > 0.40) {
        let indirimOrani = (Math.floor(Math.random() * 8) + 3) / 100; // %3 ile %10 arası indirim
        araba.fiyat = Math.floor(araba.fiyat * (1 - indirimOrani));
        oyunSesi('kasa');
        
        document.getElementById('tel-diyalog').innerHTML = `"Valla kardeşim beni zorluyorsun ama esnaf adamız... Hadi senin güzel hatrına <strong style='color:#00b894;'>${araba.fiyat.toLocaleString('tr-TR')} TL</strong> olsun. Gel al."`;
        document.getElementById('tel-aksiyonlar').style.display = 'flex';
        document.getElementById('tel-pazarlik-btn').style.display = 'none'; // Bir kere pazarlık yapılır
    } else {
        // Satıcı sinirlenir
        oyunSesi('hata');
        document.getElementById('tel-diyalog').innerHTML = `<span style="color:#e74c3c; font-weight:bold;">"Kardeşim ölücülerle işim olmaz benim, hadi eyvallah!"</span> (Telefon kapandı)`;
        
        // Arabayı piyasadan kaldır (Ceza)
        arabalar = arabalar.filter(a => a.id !== arabaId);
        piyasayiYenile(); // Ekranda eksik kalmasın diye yeni araç çek
    }
}

function hakanAbiAra(arabaId) {
    if (garaj.length >= aracKapasitesi) { ozelUyari("Garaj kapasiten tamamen dolu! Dükkanı büyüt.", "hata"); return; }
    aktifAramaArabaId = arabaId;
    const araba = arabalar.find(a => a.id === arabaId);
    
    modaliKapat('ilan-detay-modal');
    document.getElementById('tel-aranan-kisi').innerText = `👑 Hakan Abi Aranıyor...`;
    document.getElementById('tel-diyalog').innerText = "Dıt... Dıt... Dıt...";
    document.getElementById('tel-aksiyonlar').style.display = 'none';
    document.querySelector('.telefon-ekrani').classList.add('caliyor');
    document.getElementById('telefon-modal').style.display = 'block';
    
    setTimeout(() => {
        document.querySelector('.telefon-ekrani').classList.remove('caliyor');
        document.getElementById('tel-aranan-kisi').innerText = `Görüşme Sağlanıyor: 👑 Hakan Abi`;
        
        let indirimliFiyat = Math.floor(araba.fiyat * 0.60); // %40 İndirim
        
        document.getElementById('tel-diyalog').innerHTML = `"Buyrun benim, hallettim arabayı. Adam sana <strong style='color:#f1c40f;'>${indirimliFiyat.toLocaleString('tr-TR')} TL</strong>'ye bırakıyor. Yattı balık yan gider al gitsin."`;
        document.getElementById('tel-aksiyonlar').style.display = 'flex';
        document.getElementById('tel-pazarlik-btn').style.display = 'none'; // Hakan Abiyle pazarlık olmaz :)
        
        document.getElementById('tel-satin-al-btn').onclick = function() { 
            araba.fiyat = indirimliFiyat; 
            hakanAbiSonKullanim = gun; // Hakan abiyi kullandık, sayaç sıfırlandı
            telSatinAl(araba.id); 
        };
    }, 2500);
}

function telSatinAl(arabaId) {
    const araba = arabalar.find(a => a.id === arabaId);
    if (paramiz >= araba.fiyat) {
        oyunSesi('kasa'); paramiz -= araba.fiyat; toplamGider += araba.fiyat; 
        garaj.push(araba); arabalar = arabalar.filter(a => a.id !== arabaId); 
        ekraniGuncelle(); arabalariEkranaGetir(); oyunuKaydet();
        telefonuKapat();
        ozelUyari(`Araç başarıyla garajınıza eklendi!`, "basari");
    } else { 
        oyunSesi('hata'); 
        document.getElementById('tel-diyalog').innerHTML = `<span style="color:#e74c3c;">"Kardeşim paran çıkışmıyor senin, vaktimi alma!"</span>`;
        document.getElementById('tel-aksiyonlar').style.display = 'none';
    }
}

function garajiEkranaGetir() {
    const garajListesi = document.getElementById('garaj-listesi'); const bilgiMesaji = document.getElementById('garaj-bilgi');
    garajListesi.innerHTML = '';
    if (garaj.length === 0) { bilgiMesaji.style.display = 'block'; } else {
        bilgiMesaji.style.display = 'none';
        garaj.forEach(araba => {
            let teklifSayisi = araba.teklifler ? araba.teklifler.length : 0;
            let teklifUyari = teklifSayisi > 0 ? `<span style="color:#00b894; font-weight:bold;">🔥 ${teklifSayisi} Yeni Teklif!</span>` : `<span style="color:#e67e22;">Teklif Bekleniyor...</span>`;
            let hasarMetni = araba.hasarli ? '<span class="etiket etiket-kirmizi">Ağır Hasarlı</span>' : '<span class="etiket etiket-yesil">Sorunsuz</span>';
            let tamirButonuKodu = araba.hasarli ? `<button class="btn btn-turuncu" style="margin-bottom:5px;" onclick="tamirEt(${araba.id})">🛠️ Tamir Et (${araba.tamirMasrafi.toLocaleString('tr-TR')} ₺)</button>` : '';
            
            let modifiyeEtiketleri = '';
            araba.modifiyeler.forEach(mod => { modifiyeEtiketleri += `<span class="etiket" style="background:#2d3436; margin-right:5px;">${mod}</span>`; });

            garajListesi.innerHTML += `
                <div class="ilan-karti">
                    <div class="araba-foto"><img src="${araba.gorsel}" style="width:100%; height:100%; object-fit:cover; border-radius:8px;"></div>
                    <div class="ilan-detay">
                        <h3 class="ilan-baslik">${araba.marka} ${araba.model}</h3>
                        <div class="ilan-ozellikler"><span>🗓️ <strong>${araba.yil}</strong></span><span>🛣️ <strong>${araba.km.toLocaleString('tr-TR')}</strong> KM</span></div>
                        <div class="ilan-durum" style="margin-top: 5px;">${hasarMetni} <br><div style="margin-top:5px;">${modifiyeEtiketleri}</div></div>
                        <div style="margin-top:8px; color:#b2bec3; font-size:13px; font-weight: 600;">Maliyet: ${araba.fiyat.toLocaleString('tr-TR')} ₺</div>
                        <div style="margin-top:5px; font-size:13px;">${teklifUyari}</div>
                    </div>
                    <div class="ilan-sag-taraf">
                        ${tamirButonuKodu}
                        <button class="btn btn-mor" style="background:#6c5ce7; color:white; margin-bottom:5px;" onclick="modifiyeEkraniAc(${araba.id})">✨ Modifiye Et</button>
                        <button class="btn btn-kirmizi" onclick="araciSat(${araba.id})">🤝 Teklifleri Gör</button>
                    </div>
                </div>`;
        });
    }
}

function tamirEt(arabaId) {
    const araba = garaj.find(a => a.id === arabaId);
    if (paramiz >= araba.tamirMasrafi) {
        oyunSesi('tamir'); paramiz -= araba.tamirMasrafi; toplamGider += araba.tamirMasrafi; 
        araba.hasarli = false; araba.fiyat += (araba.tamirMasrafi * 3); araba.tamirMasrafi = 0; 
        ekraniGuncelle(); garajiEkranaGetir(); oyunuKaydet();
        ozelUyari(`${araba.marka} sanayiden pırıl pırıl çıktı. Değeri arttı!`, "basari");
    } else { oyunSesi('hata'); ozelUyari("Sanayiciye verecek paran yok patron!", "hata"); }
}

function modifiyeEkraniAc(arabaId) {
    const araba = garaj.find(a => a.id === arabaId);
    const modListesi = document.getElementById('modifiye-listesi');
    modListesi.innerHTML = '';
    let yapilacakModKaldimi = false;

    modifiyePaketleri.forEach(paket => {
        if (!araba.modifiyeler.includes(paket.isim)) {
            yapilacakModKaldimi = true;
            modListesi.innerHTML += `
                <div class="teklif-karti">
                    <div style="text-align: left;">
                        <span style="font-size: 20px;">${paket.ikon}</span> <span style="font-weight: 700; color: #2d3436;">${paket.isim}</span><br>
                        <span style="font-size: 14px; color: #636e72;">Maliyet: <strong style="color:#d63031;">${paket.maliyet.toLocaleString('tr-TR')} ₺</strong></span>
                    </div>
                    <button class="btn" style="background:#6c5ce7; color:white; width: auto; margin:0;" onclick="modifiyeUygula(${araba.id}, ${paket.id})">Uygula</button>
                </div>`;
        }
    });

    if (!yapilacakModKaldimi) { modListesi.innerHTML = `<p style="text-align:center; color:#e67e22; font-weight:bold;">Araç en "gırtlak dolu" halinde!</p>`; }
    document.getElementById('modifiye-modal').style.display = "block";
}

function modifiyeUygula(arabaId, paketId) {
    const araba = garaj.find(a => a.id === arabaId);
    const paket = modifiyePaketleri.find(p => p.id === paketId);

    if (paramiz >= paket.maliyet) {
        oyunSesi('tamir'); paramiz -= paket.maliyet; toplamGider += paket.maliyet;
        araba.fiyat += paket.degerArtisi; araba.modifiyeler.push(paket.isim);
        ekraniGuncelle(); garajiEkranaGetir(); modaliKapat('modifiye-modal'); oyunuKaydet();
        ozelUyari(`${paket.isim} araca başarıyla eklendi. Aracın değeri uçtu!`, "basari");
    } else { oyunSesi('hata'); ozelUyari(`Bu modifiyeyi yapmak için kasanızda yeterli para yok.`, "hata"); }
}

function araciSat(arabaId) {
    const araba = garaj.find(a => a.id === arabaId);
    const listeHTML = document.getElementById('teklif-listesi');
    listeHTML.innerHTML = `<p style="color: #636e72; margin-bottom: 20px; font-size: 15px;">Aracın Maliyeti: <strong style="color: #2d3436;">${araba.fiyat.toLocaleString('tr-TR')} TL</strong></p>`;

    if (!araba.teklifler || araba.teklifler.length === 0) {
        listeHTML.innerHTML += `<p style="text-align:center; color:#e74c3c; font-weight:bold; padding:20px;">Henüz teklif yok. Sonraki Gün'e geçerek müşteri bekle.</p>`;
    } else {
        let siraliTeklifler = araba.teklifler.sort((a,b) => b.fiyat - a.fiyat);
        
        siraliTeklifler.forEach(teklif => {
            let kalanGun = 3 - (gun - teklif.gelisGunu);
            listeHTML.innerHTML += `
                <div class="teklif-karti" id="${teklif.id}">
                    <div style="text-align: left;">
                        <span style="color: #0984e3; font-weight: 700; font-size: 16px;">👤 ${teklif.musteri}</span>
                        <span style="font-size:12px; color:#b2bec3; margin-left:10px;">(⏱️ ${kalanGun} Gün Kaldı)</span><br>
                        <span style="font-size: 20px; color: #00b894; font-weight: 700;">${teklif.fiyat.toLocaleString('tr-TR')} ₺</span>
                    </div>
                    <div style="display: flex; gap: 8px; flex-direction: column;">
                        <button class="btn btn-yesil" style="margin:0;" onclick="teklifiKabulEt(${arabaId}, '${teklif.id}')">Kabul Et</button>
                        <button class="btn btn-turuncu" style="margin:0;" onclick="pazarlikYapp(${arabaId}, '${teklif.id}')">Pazarlık Yap</button>
                    </div>
                </div>`;
        });
    }
    document.getElementById('teklif-modal').style.display = "block";
}

function pazarlikYapp(arabaId, teklifId) {
    const araba = garaj.find(a => a.id === arabaId);
    const teklifIndex = araba.teklifler.findIndex(t => t.id === teklifId);
    const teklif = araba.teklifler[teklifIndex];
    const kart = document.getElementById(teklifId);
    
    if (Math.random() > 0.5) {
        const artisOrani = (Math.floor(Math.random() * 8) + 5) / 100;
        teklif.fiyat = Math.floor(teklif.fiyat * (1 + artisOrani));
        oyunSesi('kasa'); oyunuKaydet();
        
        kart.innerHTML = `
            <div style="text-align: left;">
                <span style="color: #0984e3; font-weight: 700; font-size: 16px;">👤 ${teklif.musteri} (İkna Oldu!)</span><br>
                <span style="font-size: 20px; color: #00b894; font-weight: 700;">${teklif.fiyat.toLocaleString('tr-TR')} ₺</span>
            </div>
            <button class="btn btn-yesil" style="width: auto; margin:0;" onclick="teklifiKabulEt(${arabaId}, '${teklif.id}')">Kabul Et</button>
        `;
    } else {
        oyunSesi('hata');
        araba.teklifler.splice(teklifIndex, 1);
        oyunuKaydet();
        kart.innerHTML = `<div style="text-align: center; width: 100%; padding: 10px 0;"><span style="color: #d63031; font-weight: 700;">Müşteri sinirlendi ve gitti! 😡</span></div>`;
    }
}

function teklifiKabulEt(arabaId, teklifId) {
    const araba = garaj.find(a => a.id === arabaId);
    const teklif = araba.teklifler.find(t => t.id === teklifId);
    
    modaliKapat('teklif-modal'); oyunSesi('kasa');
    paramiz += teklif.fiyat; toplamGelir += teklif.fiyat; toplamSatilanArac++; 
    garaj = garaj.filter(a => a.id !== arabaId); 
    ekraniGuncelle(); garajiEkranaGetir(); oyunuKaydet();
}

function dukkanEkraniniGuncelle() {
    const mevcutSeviyeBilgi = seviyeler[dukkanSeviyesi - 1];
    document.getElementById('dukkan-isim').innerText = `${mevcutSeviyeBilgi.isim} (Seviye ${mevcutSeviyeBilgi.seviye})`;
    document.getElementById('dukkan-kapasite').innerText = mevcutSeviyeBilgi.kapasite === 999 ? "Sınırsız Araç" : `${mevcutSeviyeBilgi.kapasite} Araç`;
    const yukseltmeAlani = document.getElementById('yukseltme-alani');
    if (dukkanSeviyesi < seviyeler.length) {
        const sonrakiSeviye = seviyeler[dukkanSeviyesi];
        yukseltmeAlani.style.display = 'block';
        document.getElementById('yeni-seviye-isim').innerText = `${sonrakiSeviye.isim} (${sonrakiSeviye.kapasite === 999 ? "Sınırsız" : sonrakiSeviye.kapasite} Araç Kapasitesi)`;
        document.getElementById('yeni-seviye-fiyat').innerText = `${sonrakiSeviye.fiyat.toLocaleString('tr-TR')} TL`;
    } else { yukseltmeAlani.innerHTML = `<h3 style="color: #27ae60;">🎉 Maksimum seviyedesin! Şehrin en büyük galerisi sensin.</h3>`; }
}

function dukkaniYukselt() {
    if (dukkanSeviyesi >= seviyeler.length) return; 
    const sonrakiSeviye = seviyeler[dukkanSeviyesi];
    if (paramiz >= sonrakiSeviye.fiyat) {
        oyunSesi('tamir'); paramiz -= sonrakiSeviye.fiyat; toplamGider += sonrakiSeviye.fiyat;
        dukkanSeviyesi++; aracKapasitesi = sonrakiSeviye.kapasite;
        ekraniGuncelle(); dukkanEkraniniGuncelle(); oyunuKaydet();
        ozelUyari(`Dükkanını "${sonrakiSeviye.isim}" seviyesine yükselttin.`, "basari");
    } else { oyunSesi('hata'); ozelUyari("Dükkanı büyütmek için kasanda yeterli para yok!", "hata"); }
}

function istatistikleriGuncelle() {
    document.getElementById('ist-satilan').innerText = toplamSatilanArac;
    document.getElementById('ist-gelir').innerText = toplamGelir.toLocaleString('tr-TR');
    document.getElementById('ist-gider').innerText = toplamGider.toLocaleString('tr-TR');
    let netKar = toplamGelir - toplamGider; const netGosterge = document.getElementById('ist-net');
    netGosterge.innerText = netKar.toLocaleString('tr-TR');
    if (netKar < 0) { netGosterge.style.color = '#d63031'; } else { netGosterge.style.color = '#00b894'; }
}

function oyunuBaslat() {
    if (!oyunuYukle()) {
        document.getElementById('baslangic-modal').style.display = 'block';
    } else {
        document.getElementById('header-logo').innerHTML = `${galeriAdi}<span>Motors</span>`;
        ekraniGuncelle();
    }
}

function galeriAdiniKaydet() {
    let girilenAd = document.getElementById('galeri-adi-input').value;
    if (girilenAd.trim() === "") { ozelUyari("Lütfen galeriniz için bir isim girin!", "hata"); return; }
    galeriAdi = girilenAd;
    document.getElementById('baslangic-modal').style.display = 'none';
    document.getElementById('header-logo').innerHTML = `${galeriAdi}<span>Motors</span>`;
    piyasayiYenile(); oyunuKaydet(); ekraniGuncelle();
}

oyunuBaslat();