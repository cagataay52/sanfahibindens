// SES VE UYARI SİSTEMLERİ
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

// OYUN DEĞİŞKENLERİ
let galeriAdi = "Benim"; // Varsayılan galeri adı
let paramiz = 15000000; let bankaBorcu = 0; let garaj = []; let gun = 1; let idSayaci = 1; 
let toplamSatilanArac = 0; let toplamGelir = 0; let toplamGider = 0;
let dukkanSeviyesi = 1; let aracKapasitesi = 2;
let arabalar = [];

const seviyeler = [
    { seviye: 1, isim: "Sokak Arası Galeri", kapasite: 2, fiyat: 0 }, { seviye: 2, isim: "Lüks Galeri", kapasite: 5, fiyat: 2000000 },
    { seviye: 3, isim: "Oto Center", kapasite: 10, fiyat: 5000000 }, { seviye: 4, isim: "Dev Plaza", kapasite: 999, fiyat: 15000000 } 
];

const musteriIsimleri = ["Ahmet Bey", "Mehmet Bey", "Ayşe Hanım", "Can", "Zeynep", "Burak", "Kemal Abi", "Elif Hanım", "Mert", "Selin"];

// 2020 VE ÜSTÜ ARAÇLAR (Güncel TR Fiyatları)
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

// KAYIT SİSTEMİ (Galeri Adı Dahil Edildi)
function oyunuKaydet() {
    const kayitData = { galeriAdi, paramiz, bankaBorcu, garaj, gun, dukkanSeviyesi, aracKapasitesi, toplamSatilanArac, toplamGelir, toplamGider, arabalar, idSayaci };
    localStorage.setItem('sahibindenMotorsKayit', JSON.stringify(kayitData));
}

function oyunuYukle() {
    const eskiKayit = JSON.parse(localStorage.getItem('sahibindenMotorsKayit'));
    if (eskiKayit) {
        if (!eskiKayit.galeriAdi) return false; // Galeri adı olmayan çok eski sürümse sıfırla
        galeriAdi = eskiKayit.galeriAdi; paramiz = eskiKayit.paramiz; bankaBorcu = eskiKayit.bankaBorcu; garaj = eskiKayit.garaj;
        gun = eskiKayit.gun; dukkanSeviyesi = eskiKayit.dukkanSeviyesi; aracKapasitesi = eskiKayit.aracKapasitesi;
        toplamSatilanArac = eskiKayit.toplamSatilanArac; toplamGelir = eskiKayit.toplamGelir; toplamGider = eskiKayit.toplamGider;
        arabalar = eskiKayit.arabalar || []; idSayaci = eskiKayit.idSayaci || 1;
        document.getElementById('gun').innerText = gun;
        return true; 
    }
    return false; 
}

function oyunuSifirlaEkrani() {
    if(confirm("Tüm ilerlemen, galerindeki arabalar ve paran silinecek. Oyuna baştan başlayacaksın. Emin misin?")) {
        localStorage.removeItem('sahibindenMotorsKayit');
        location.reload();
    }
}

// EKSPERTİZ VE AÇIKLAMA (Aynı Kaldı)
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
    if (ekspertizPuan === 0 && km < 50000) return `Kapalı garaj arabasıdır. Nokta hatasız, boyasızdır. Dosta gidecek temizlikte bir ${marka}.`;
    if (ekspertizPuan === 0) return `Motoru yürüyeni kusursuzdur. Yaşına göre ufak çizikleri var ama orijinaldir.`;
    if (ekspertizPuan < 5) return `Sürtmelerden kaynaklı temizlik boyaları mevcuttur. Şase, podye işlemsizdir.`;
    if (ekspertizPuan < 15) return `Çeşitli yerlerinde boya ve değişenler mevcuttur. Ağır bir kazası yoktur.`;
    return `Araç ağır hasar kayıtlıdır (Pert). Tavan dahil işlemlidir. Kaportaya takıntısı olanlar aramasın.`;
}

// GÜNCELLENMİŞ ARAÇ ÜRETİMİ (Sadece 2020-2026 Arası)
function rastgeleArabaUret() {
    const sablon = aracSablonlari[Math.floor(Math.random() * aracSablonlari.length)];
    // YILI 2020 VE 2026 ARASINA SABİTLEDİK
    const yil = Math.floor(Math.random() * (2026 - 2020 + 1)) + 2020; 
    const km = ((2026 - yil) * Math.floor(Math.random() * 20000 + 10000)) + Math.floor(Math.random() * 15000);
    
    let yas = 2026 - yil;
    let degerKaybiOrani = (yas * 0.03) + ((km / 10000) * 0.015); 
    if (degerKaybiOrani > 0.40) degerKaybiOrani = 0.40; // 2020 model araba en fazla %40 değer kaybeder
    let tabanHesap = sablon.tabanFiyat * (1 - degerKaybiOrani);

    let ekspertizVerisi = ekspertizUret();
    let hasarIndirimi = ekspertizVerisi.puan * 0.015; 
    if (hasarIndirimi > 0.50) hasarIndirimi = 0.50; 
    let fiyat = tabanHesap * (1 - hasarIndirimi);

    let agirHasarliMi = ekspertizVerisi.puan > 15 || ekspertizVerisi.detay['tavan'] === 'degisen';
    let tamirMasrafi = agirHasarliMi ? Math.floor(fiyat * 0.1) : 0; 

    return { 
        id: idSayaci++, marka: sablon.marka, model: sablon.model, yil: yil, km: Math.floor(km), 
        fiyat: Math.floor(fiyat), hasarli: agirHasarliMi, tamirMasrafi: tamirMasrafi, modifiyeler: [],
        gorsel: sablon.gorsel, ekspertiz: ekspertizVerisi.detay, ilanAciklamasi: aciklamaUret(ekspertizVerisi.puan, km, sablon.marka),
        teklifler: [] // Yeni: Her aracın kendi teklif havuzu var
    };
}

function piyasayiYenile() {
    arabalar = []; for(let i = 0; i < 4; i++) { arabalar.push(rastgeleArabaUret()); }
    if (document.getElementById('pazar-ekrani').style.display === 'block') { arabalariEkranaGetir(); }
}

// SONRAKİ GÜN: TEKLİF BİRİKTİRME SİSTEMİ
function sonrakiGun() {
    gun++; document.getElementById('gun').innerText = gun;
    
    if (bankaBorcu > 0) {
        let faizMiktari = Math.floor(bankaBorcu * 0.05); bankaBorcu += faizMiktari; toplamGider += faizMiktari; 
        document.getElementById('borc-miktari').innerText = bankaBorcu.toLocaleString('tr-TR');
        ozelUyari(`Banka borcuna ${faizMiktari.toLocaleString('tr-TR')} TL faiz işledi!`, 'hata');
    }

    // GARAJDAKİ ARAÇLARA TEKLİF EKLE / SÜRESİ BİTENİ SİL
    garaj.forEach(araba => {
        if (!araba.teklifler) araba.teklifler = [];
        
        // 3 Günden eski teklifleri çöpe at
        araba.teklifler = araba.teklifler.filter(t => (gun - t.gelisGunu) < 3);

        // Her gün %70 ihtimalle yeni 1 veya 2 teklif gelsin
        if (Math.random() > 0.3) {
            let yeniTeklifSayisi = Math.floor(Math.random() * 2) + 1;
            let minFiyat = araba.fiyat * 0.85; let maxFiyat = araba.fiyat * 1.30;
            if (araba.hasarli) maxFiyat = araba.fiyat * 1.0; 

            for(let i=0; i<yeniTeklifSayisi; i++) {
                araba.teklifler.push({
                    id: 'tklf-' + Math.floor(Math.random() * 1000000),
                    musteri: musteriIsimleri[Math.floor(Math.random() * musteriIsimleri.length)],
                    fiyat: Math.floor(Math.random() * (maxFiyat - minFiyat + 1)) + minFiyat,
                    gelisGunu: gun
                });
            }
        }
    });

    piyasayiYenile(); 
    ekraniGuncelle();
    oyunuKaydet(); 
    menuDegistir('pazar'); 
}

function menuDegistir(menu) {
    document.querySelectorAll('.sayfa').forEach(s => s.style.display = 'none');
    document.querySelectorAll('.sol-menu li').forEach(l => l.classList.remove('aktif'));
    document.getElementById(menu + '-ekrani').style.display = 'block';
    document.getElementById('menu-' + menu).classList.add('aktif');
    
    if (menu === 'pazar') arabalariEkranaGetir();
    if (menu === 'garaj') garajiEkranaGetir();
    if (menu === 'dukkan') dukkanEkraniniGuncelle();
}

function ekraniGuncelle() {
    document.getElementById('paramiz').innerText = paramiz.toLocaleString('tr-TR');
    let kapasiteYazisi = aracKapasitesi === 999 ? "Sınırsız" : aracKapasitesi;
    document.getElementById('kapasite-bilgi').innerText = garaj.length + " / " + kapasiteYazisi;
    if (garaj.length >= aracKapasitesi && aracKapasitesi !== 999) { document.getElementById('kapasite-bilgi').style.color = '#e74c3c'; } else { document.getElementById('kapasite-bilgi').style.color = '#0984e3'; }
}

// PAZAR LİSTESİ VE DETAY MODALI (Aynı Kaldı)
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
                    <button class="btn btn-turuncu" onclick="ilanDetayEkraniAc(${araba.id})">🔍 İlanı İncele</button>
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

    const parcalar = ['kaput', 'tavan', 'bagaj', 'solOnCamurluk', 'solOnKapi', 'solArkaKapi', 'solArkaCamurluk', 'sagOnCamurluk', 'sagOnKapi', 'sagArkaKapi', 'sagArkaCamurluk'];
    parcalar.forEach(p => {
        const parcaDiv = document.getElementById(`eks-${p}`);
        parcaDiv.classList.remove('orijinal', 'lokal', 'boyali', 'degisen');
        parcaDiv.classList.add(araba.ekspertiz[p]);
    });

    document.getElementById('detay-satin-al-btn').onclick = function() { satinAl(araba.id); modaliKapat('ilan-detay-modal'); };
    document.getElementById('ilan-detay-modal').style.display = 'block';
}

function satinAl(arabaId) {
    if (garaj.length >= aracKapasitesi) { ozelUyari("Garaj kapasiten dolu!", "hata"); return; }
    const araba = arabalar.find(a => a.id === arabaId);
    if (paramiz >= araba.fiyat) {
        oyunSesi('kasa'); paramiz -= araba.fiyat; toplamGider += araba.fiyat; 
        garaj.push(araba); arabalar = arabalar.filter(a => a.id !== arabaId); 
        ekraniGuncelle(); arabalariEkranaGetir(); oyunuKaydet();
        ozelUyari(`Araç başarıyla garajınıza eklendi!`, "basari");
    } else { ozelUyari("Kasadaki paran bu aracı almaya yetmiyor!", "hata"); }
}

function garajiEkranaGetir() {
    const garajListesi = document.getElementById('garaj-listesi'); const bilgiMesaji = document.getElementById('garaj-bilgi');
    garajListesi.innerHTML = '';
    if (garaj.length === 0) { bilgiMesaji.style.display = 'block'; } else {
        bilgiMesaji.style.display = 'none';
        garaj.forEach(araba => {
            let teklifSayisi = araba.teklifler ? araba.teklifler.length : 0;
            let teklifUyari = teklifSayisi > 0 ? `<span style="color:#00b894; font-weight:bold;">🔥 ${teklifSayisi} Yeni Teklif Var!</span>` : `<span style="color:#e67e22;">Teklif Bekleniyor...</span>`;
            
            garajListesi.innerHTML += `
                <div class="ilan-karti">
                    <div class="araba-foto"><img src="${araba.gorsel}" style="width:100%; height:100%; object-fit:cover; border-radius:8px;"></div>
                    <div class="ilan-detay">
                        <h3 class="ilan-baslik">${araba.marka} ${araba.model} (Benim İlanım)</h3>
                        <div class="ilan-ozellikler"><span>🗓️ <strong>${araba.yil}</strong></span><span>🛣️ <strong>${araba.km.toLocaleString('tr-TR')}</strong> KM</span></div>
                        <div style="margin-top:8px; color:#b2bec3; font-size:13px; font-weight: 600;">Maliyet: ${araba.fiyat.toLocaleString('tr-TR')} ₺</div>
                        <div style="margin-top:5px; font-size:13px;">${teklifUyari}</div>
                    </div>
                    <div class="ilan-sag-taraf">
                        <button class="btn btn-kirmizi" onclick="araciSat(${araba.id})">🤝 Gelen Teklifleri Gör</button>
                    </div>
                </div>`;
        });
    }
}

// BİRİKEN TEKLİFLERİ GÖSTERME (YENİ)
function araciSat(arabaId) {
    const araba = garaj.find(a => a.id === arabaId);
    const listeHTML = document.getElementById('teklif-listesi');
    listeHTML.innerHTML = `<p style="color: #636e72; margin-bottom: 20px; font-size: 15px;">Aracın Maliyeti: <strong style="color: #2d3436;">${araba.fiyat.toLocaleString('tr-TR')} TL</strong></p>`;

    if (!araba.teklifler || araba.teklifler.length === 0) {
        listeHTML.innerHTML += `<p style="text-align:center; color:#e74c3c; font-weight:bold; padding:20px;">Bu araca henüz teklif veren olmadı. Geceyi atlayarak ("Sonraki Gün") yeni müşterilerin gelmesini bekle.</p>`;
    } else {
        // Teklifleri en yüksek fiyata göre sırala
        let siraliTeklifler = araba.teklifler.sort((a,b) => b.fiyat - a.fiyat);
        
        siraliTeklifler.forEach(teklif => {
            let kalanGun = 3 - (gun - teklif.gelisGunu);
            listeHTML.innerHTML += `
                <div class="teklif-karti" id="${teklif.id}">
                    <div style="text-align: left;">
                        <span style="color: #0984e3; font-weight: 700; font-size: 16px;">👤 ${teklif.musteri}</span>
                        <span style="font-size:12px; color:#b2bec3; margin-left:10px;">(⏱️ ${kalanGun} Gün Kaldı)</span><br>
                        <span style="font-size: 22px; color: #00b894; font-weight: 700;">${teklif.fiyat.toLocaleString('tr-TR')} ₺</span>
                    </div>
                    <div style="display: flex; gap: 8px; flex-direction: column;">
                        <button class="btn btn-yesil" style="margin:0;" onclick="teklifiKabulEt(${arabaId}, '${teklif.id}')">Kabul Et</button>
                        <button class="btn btn-turuncu" style="margin:0;" onclick="pazarlikYap(${arabaId}, '${teklif.id}')">Pazarlık Yap</button>
                    </div>
                </div>`;
        });
    }
    document.getElementById('teklif-modal').style.display = "block";
}

function pazarlikYap(arabaId, teklifId) {
    const araba = garaj.find(a => a.id === arabaId);
    const teklifIndex = araba.teklifler.findIndex(t => t.id === teklifId);
    const teklif = araba.teklifler[teklifIndex];
    const kart = document.getElementById(teklifId);
    
    if (Math.random() > 0.5) {
        // %5 ile %12 arası fiyat artır
        const artisOrani = (Math.floor(Math.random() * 8) + 5) / 100;
        teklif.fiyat = Math.floor(teklif.fiyat * (1 + artisOrani));
        oyunSesi('kasa'); oyunuKaydet();
        
        kart.innerHTML = `
            <div style="text-align: left;">
                <span style="color: #0984e3; font-weight: 700; font-size: 16px;">👤 ${teklif.musteri} (İkna Oldu!)</span><br>
                <span style="font-size: 22px; color: #00b894; font-weight: 700;">${teklif.fiyat.toLocaleString('tr-TR')} ₺</span>
            </div>
            <button class="btn btn-yesil" style="width: auto; margin:0;" onclick="teklifiKabulEt(${arabaId}, '${teklif.id}')">Yeni Teklifi Kabul Et</button>
        `;
    } else {
        // Pazarlık ters tepti, müşteri masadan kalktı (Teklifi diziden sil)
        oyunSesi('hata');
        araba.teklifler.splice(teklifIndex, 1);
        oyunuKaydet();
        
        kart.innerHTML = `
            <div style="text-align: center; width: 100%; padding: 10px 0;">
                <span style="color: #d63031; font-weight: 700;">Müşteri sinirlendi ve teklifi geri çekti! 😡</span>
            </div>
        `;
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
    // Mevcut kodlar aynı (Yer kaplamaması için özet geçiyorum, dükkan seviye atlama kısmı)
    const mevcut = seviyeler[dukkanSeviyesi - 1];
    document.getElementById('dukkan-isim').innerText = `${mevcut.isim} (Seviye ${mevcut.seviye})`;
    document.getElementById('dukkan-kapasite').innerText = mevcut.kapasite === 999 ? "Sınırsız Araç" : `${mevcut.kapasite} Araç`;
}

// OYUN BAŞLANGICI VE GALERİ İSMİ ALMA
function oyunuBaslat() {
    if (!oyunuYukle()) {
        // İlk defa giriyorsa Galeri Adını Sor
        let girilenAd = prompt("Galerinizin adını girin (Örn: Cagatay):");
        galeriAdi = (girilenAd && girilenAd.trim() !== "") ? girilenAd : "Benim";
        piyasayiYenile();
        oyunuKaydet();
    }
    // İsmi logoya yazdır
    document.getElementById('header-logo').innerHTML = `${galeriAdi}<span>Motors</span>`;
    ekraniGuncelle();
}

oyunuBaslat();