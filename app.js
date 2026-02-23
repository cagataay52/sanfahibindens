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

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
function oyunSesi(tip) {
    if (audioCtx.state === 'suspended') { audioCtx.resume(); }
    const oscillator = audioCtx.createOscillator(); const gainNode = audioCtx.createGain();
    oscillator.connect(gainNode); gainNode.connect(audioCtx.destination);
    if (tip === 'kasa') {
        oscillator.type = 'sine'; oscillator.frequency.setValueAtTime(800, audioCtx.currentTime); oscillator.frequency.exponentialRampToValueAtTime(1500, audioCtx.currentTime + 0.1);
        gainNode.gain.setValueAtTime(0.2, audioCtx.currentTime); gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
        oscillator.start(); oscillator.stop(audioCtx.currentTime + 0.3);
    } else if (tip === 'tamir') {
        oscillator.type = 'square'; oscillator.frequency.setValueAtTime(100, audioCtx.currentTime);
        gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime); gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.2);
        oscillator.start(); oscillator.stop(audioCtx.currentTime + 0.2);
    } else if (tip === 'hata') {
        oscillator.type = 'sawtooth'; oscillator.frequency.setValueAtTime(150, audioCtx.currentTime);
        gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime); gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.4);
        oscillator.start(); oscillator.stop(audioCtx.currentTime + 0.4);
    } else if (tip === 'satin-al') {
        oscillator.type = 'triangle'; oscillator.frequency.setValueAtTime(300, audioCtx.currentTime);
        gainNode.gain.setValueAtTime(0.2, audioCtx.currentTime); gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.2);
        oscillator.start(); oscillator.stop(audioCtx.currentTime + 0.2);
    }
}

let paramiz = 5000000; let bankaBorcu = 0; let garaj = []; let gun = 1; let idSayaci = 1; 
let toplamSatilanArac = 0; let toplamGelir = 0; let toplamGider = 0;
let dukkanSeviyesi = 1; let aracKapasitesi = 2;

const seviyeler = [
    { seviye: 1, isim: "Sokak Arası Galeri", kapasite: 2, fiyat: 0 }, { seviye: 2, isim: "Lüks Galeri", kapasite: 5, fiyat: 2000000 },
    { seviye: 3, isim: "Oto Center", kapasite: 10, fiyat: 5000000 }, { seviye: 4, isim: "Dev Plaza", kapasite: 999, fiyat: 15000000 } 
];

// YENİ: MODİFİYE SEÇENEKLERİ
const modifiyePaketleri = [
    { id: 1, isim: "Cam Filmi & Seramik Boya Koruma", ikon: "✨", maliyet: 25000, degerArtisi: 60000 },
    { id: 2, isim: "Spor Çelik Jant & Performans Lastik", ikon: "🛞", maliyet: 55000, degerArtisi: 130000 },
    { id: 3, isim: "Stage 1 Chiptuning & Spor Egzoz", ikon: "💻", maliyet: 90000, degerArtisi: 220000 }
];

const musteriIsimleri = ["Ahmet", "Mehmet Bey", "Ayşe Hanım", "Can", "Zeynep", "Burak", "Kemal Abi", "Elif Hanım"];
const aracSablonlari = [
    { marka: "BMW", model: "320i", tabanFiyat: 1500000 }, { marka: "Mercedes", model: "C200", tabanFiyat: 1600000 },
    { marka: "Audi", model: "A3", tabanFiyat: 1300000 }, { marka: "Volkswagen", model: "Golf", tabanFiyat: 900000 },
    { marka: "Renault", model: "Megane", tabanFiyat: 750000 }, { marka: "Fiat", model: "Egea", tabanFiyat: 600000 },
    { marka: "Toyota", model: "Corolla", tabanFiyat: 850000 }, { marka: "Honda", model: "Civic", tabanFiyat: 950000 }
];

let arabalar = [];

function rastgeleArabaUret() {
    const sablon = aracSablonlari[Math.floor(Math.random() * aracSablonlari.length)];
    const yil = Math.floor(Math.random() * (2025 - 2005 + 1)) + 2005; 
    const km = ((2026 - yil) * Math.floor(Math.random() * 15000 + 10000)) + Math.floor(Math.random() * 10000);
    let fiyat = sablon.tabanFiyat - ((2026 - yil) * 25000) - (km * 1.5); 
    if (fiyat < sablon.tabanFiyat * 0.2) fiyat = sablon.tabanFiyat * 0.2;
    const hasarliMi = Math.random() < 0.40; let tamirMasrafi = 0;
    if (hasarliMi) {
        fiyat = fiyat - (fiyat * ((Math.floor(Math.random() * 20) + 30) / 100));
        tamirMasrafi = Math.floor(fiyat * ((Math.floor(Math.random() * 10) + 10) / 100));
    }
    return { 
        id: idSayaci++, marka: sablon.marka, model: sablon.model, yil: yil, km: Math.floor(km), 
        fiyat: Math.floor(fiyat), hasarli: hasarliMi, tamirMasrafi: Math.floor(tamirMasrafi), 
        modifiyeler: [] // Aracın modifiye hafızası
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
        oyunSesi('hata'); ozelUyari(`Banka borcuna ${faizMiktari.toLocaleString('tr-TR')} TL gecikme faizi uyguladı!`, 'hata');
    }
    piyasayiYenile(); menuDegistir('pazar'); 
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
}

function krediCek(miktar) { oyunSesi('kasa'); paramiz += miktar; bankaBorcu += miktar; ekraniGuncelle(); ozelUyari(`Bankadan ${miktar.toLocaleString('tr-TR')} TL kredi çektin.`, 'basari'); }
function borcOde(miktar) { 
    if (bankaBorcu === 0) { ozelUyari("Bankaya hiç borcun yok!", "bilgi"); return; } 
    if (paramiz >= miktar) { let odenecek = miktar > bankaBorcu ? bankaBorcu : miktar; paramiz -= odenecek; bankaBorcu -= odenecek; ekraniGuncelle(); oyunSesi('satin-al'); ozelUyari(`${odenecek.toLocaleString('tr-TR')} TL borç ödendi.`, "basari"); 
    } else { oyunSesi('hata'); ozelUyari("Kasanda bu borcu ödeyecek kadar para yok!", "hata"); } 
}
function borcuKapat() { 
    if (bankaBorcu === 0) { ozelUyari("Zaten borcun yok.", "bilgi"); return; } 
    if (paramiz >= bankaBorcu) { paramiz -= bankaBorcu; bankaBorcu = 0; ekraniGuncelle(); oyunSesi('satin-al'); ozelUyari("Tebrikler, bankaya olan tüm borcunu kapattın!", "basari"); 
    } else { oyunSesi('hata'); ozelUyari("Kasanda tüm borcu kapatacak kadar para yok!", "hata"); } 
}

function ekraniGuncelle() {
    document.getElementById('paramiz').innerText = paramiz.toLocaleString('tr-TR');
    document.getElementById('borc-miktari').innerText = bankaBorcu.toLocaleString('tr-TR');
    let kapasiteYazisi = aracKapasitesi === 999 ? "Sınırsız" : aracKapasitesi;
    document.getElementById('kapasite-bilgi').innerText = garaj.length + " / " + kapasiteYazisi;
    if (garaj.length >= aracKapasitesi && aracKapasitesi !== 999) { document.getElementById('kapasite-bilgi').style.color = '#e74c3c'; } else { document.getElementById('kapasite-bilgi').style.color = '#0984e3'; }
}

function arabalariEkranaGetir() {
    const liste = document.getElementById('araba-listesi'); liste.innerHTML = ''; 
    arabalar.forEach(araba => {
        let hasarMetni = araba.hasarli ? '<span class="etiket etiket-kirmizi">Ağır Hasar Kayıtlı</span>' : '<span class="etiket etiket-yesil">Hatasız Boyasız Orijinal</span>';
        liste.innerHTML += `
            <div class="ilan-karti">
                <div class="araba-foto">🚗</div>
                <div class="ilan-detay">
                    <h3 class="ilan-baslik">Sahibinden Temiz ${araba.marka} ${araba.model}</h3>
                    <div class="ilan-ozellikler"><span>🗓️ <strong>${araba.yil}</strong> Model</span><span>🛣️ <strong>${araba.km.toLocaleString('tr-TR')}</strong> KM</span></div>
                    <div class="ilan-durum" style="margin-top: 5px;">${hasarMetni}</div>
                </div>
                <div class="ilan-sag-taraf">
                    <div class="ilan-fiyat">${araba.fiyat.toLocaleString('tr-TR')} ₺</div>
                    <button class="btn btn-mavi" onclick="satinAl(${araba.id})">İlanı Satın Al</button>
                </div>
            </div>`;
    });
}

function satinAl(arabaId) {
    if (garaj.length >= aracKapasitesi) { oyunSesi('hata'); ozelUyari("Garaj kapasiten tamamen dolu! Dükkan Yönetimi menüsünden galeri seviyeni yükselt.", "hata"); return; }
    const secilenAraba = arabalar.find(araba => araba.id === arabaId);
    if (paramiz >= secilenAraba.fiyat) {
        oyunSesi('satin-al'); paramiz -= secilenAraba.fiyat; toplamGider += secilenAraba.fiyat; 
        garaj.push(secilenAraba); arabalar = arabalar.filter(araba => araba.id !== arabaId); ekraniGuncelle(); arabalariEkranaGetir(); 
    } else { oyunSesi('hata'); ozelUyari("Kasadaki paran bu aracı almaya yetmiyor!", "hata"); }
}

function garajiEkranaGetir() {
    const garajListesi = document.getElementById('garaj-listesi'); const bilgiMesaji = document.getElementById('garaj-bilgi');
    garajListesi.innerHTML = '';
    if (garaj.length === 0) { bilgiMesaji.style.display = 'block'; } else {
        bilgiMesaji.style.display = 'none';
        garaj.forEach(araba => {
            let hasarMetni = araba.hasarli ? '<span class="etiket etiket-kirmizi">Hasarlı (Müşteri Kırar)</span>' : '<span class="etiket etiket-yesil">Sorunsuz (Hızlı Satılır)</span>';
            let tamirButonuKodu = araba.hasarli ? `<button class="btn btn-turuncu" onclick="tamirEt(${araba.id})">🛠️ Sanayide Tamir Et (${araba.tamirMasrafi.toLocaleString('tr-TR')} ₺)</button>` : '';
            
            // Aracın yapılmış modifiyelerini etiket olarak bas
            let modifiyeEtiketleri = '';
            araba.modifiyeler.forEach(mod => {
                modifiyeEtiketleri += `<span class="etiket etiket-siyah">${mod}</span>`;
            });

            garajListesi.innerHTML += `
                <div class="ilan-karti">
                    <div class="araba-foto">🚗</div>
                    <div class="ilan-detay">
                        <h3 class="ilan-baslik">${araba.marka} ${araba.model} (Benim İlanım)</h3>
                        <div class="ilan-ozellikler"><span>🗓️ <strong>${araba.yil}</strong></span><span>🛣️ <strong>${araba.km.toLocaleString('tr-TR')}</strong> KM</span></div>
                        <div class="ilan-durum" style="margin-top: 5px;">${hasarMetni} <br><div style="margin-top:5px;">${modifiyeEtiketleri}</div></div>
                        <div style="margin-top:8px; color:#b2bec3; font-size:12px; font-weight: 600;">Maliyetim: ${araba.fiyat.toLocaleString('tr-TR')} ₺</div>
                    </div>
                    <div class="ilan-sag-taraf">
                        ${tamirButonuKodu}
                        <button class="btn btn-mor" onclick="modifiyeEkraniAc(${araba.id})">✨ Modifiye Et</button>
                        <button class="btn btn-kirmizi" onclick="araciSat(${araba.id})">🤝 Müşteri Teklifleri Gör</button>
                    </div>
                </div>`;
        });
    }
}

function tamirEt(arabaId) {
    const araba = garaj.find(a => a.id === arabaId);
    if (paramiz >= araba.tamirMasrafi) {
        oyunSesi('tamir'); paramiz -= araba.tamirMasrafi; toplamGider += araba.tamirMasrafi; ekraniGuncelle();
        araba.hasarli = false; araba.fiyat += (araba.tamirMasrafi * 3); araba.tamirMasrafi = 0; garajiEkranaGetir(); 
        ozelUyari(`${araba.marka} sanayiden pırıl pırıl çıktı. Değeri arttı!`, "basari");
    } else { oyunSesi('hata'); ozelUyari("Sanayiciye verecek paran yok patron!", "hata"); }
}

// YENİ: MODİFİYE SİSTEMİ
function modifiyeEkraniAc(arabaId) {
    const araba = garaj.find(a => a.id === arabaId);
    const modListesi = document.getElementById('modifiye-listesi');
    modListesi.innerHTML = '';

    // Modifiye paketlerini döngüye al
    let yapilacakModKaldimi = false;

    modifiyePaketleri.forEach(paket => {
        // Eğer bu araba bu modifiyeyi henüz almamışsa listele
        if (!araba.modifiyeler.includes(paket.isim)) {
            yapilacakModKaldimi = true;
            modListesi.innerHTML += `
                <div class="mod-karti">
                    <div style="text-align: left;">
                        <span style="font-size: 20px;">${paket.ikon}</span> <span style="font-weight: 700; color: #2d3436;">${paket.isim}</span><br>
                        <span style="font-size: 14px; color: #636e72;">Maliyet: <strong style="color:#d63031;">${paket.maliyet.toLocaleString('tr-TR')} ₺</strong> | Değer Artışı: <strong style="color:#00b894;">+${paket.degerArtisi.toLocaleString('tr-TR')} ₺</strong></span>
                    </div>
                    <button class="btn btn-mor" style="width: auto; margin:0;" onclick="modifiyeUygula(${araba.id}, ${paket.id})">Uygula</button>
                </div>`;
        }
    });

    if (!yapilacakModKaldimi) {
        modListesi.innerHTML = `<p style="text-align:center; color:#e67e22; font-weight:bold;">Bu araç en "gırtlak dolu" halinde! Ekleyecek başka modifiye kalmadı.</p>`;
    }

    document.getElementById('modifiye-modal').style.display = "block";
}

function modifiyeUygula(arabaId, paketId) {
    const araba = garaj.find(a => a.id === arabaId);
    const paket = modifiyePaketleri.find(p => p.id === paketId);

    if (paramiz >= paket.maliyet) {
        oyunSesi('tamir');
        paramiz -= paket.maliyet;
        toplamGider += paket.maliyet;
        
        araba.fiyat += paket.degerArtisi; // Arabanın maliyet/satış değerini devasa artırıyoruz
        araba.modifiyeler.push(paket.isim); // Yapılan modifiyeyi arabanın hafızasına yaz
        
        ekraniGuncelle();
        garajiEkranaGetir();
        modaliKapat('modifiye-modal');
        ozelUyari(`${paket.isim} araca başarıyla eklendi. Aracın değeri uçtu!`, "basari");
    } else {
        oyunSesi('hata');
        ozelUyari(`Bu modifiyeyi yapmak için kasanızda yeterli para yok. (${paket.maliyet.toLocaleString('tr-TR')} TL gerekiyor)`, "hata");
    }
}

function araciSat(arabaId) {
    const satilacakAraba = garaj.find(araba => araba.id === arabaId);
    let minFiyat = satilacakAraba.fiyat * 0.8; let maxFiyat = satilacakAraba.fiyat * 1.3;
    if (satilacakAraba.hasarli) { maxFiyat = satilacakAraba.fiyat * 1.0; } 
    
    const listeHTML = document.getElementById('teklif-listesi');
    listeHTML.innerHTML = `<p style="color: #636e72; margin-bottom: 20px; font-size: 15px;">Aracın Sana Maliyeti (Modifiyeler Dahil): <strong style="color: #2d3436;">${satilacakAraba.fiyat.toLocaleString('tr-TR')} TL</strong></p>`;

    for(let i=0; i<3; i++) {
        const teklifMiktari = Math.floor(Math.random() * (maxFiyat - minFiyat + 1)) + minFiyat;
        const musteriAdayi = musteriIsimleri[Math.floor(Math.random() * musteriIsimleri.length)];
        listeHTML.innerHTML += `
            <div class="teklif-karti">
                <div style="text-align: left;">
                    <span style="color: #0984e3; font-weight: 700; font-size: 16px;">👤 ${musteriAdayi}</span><br>
                    <span style="font-size: 22px; color: #00b894; font-weight: 700;">${teklifMiktari.toLocaleString('tr-TR')} ₺</span>
                </div>
                <button class="btn btn-yesil" style="width: auto; margin:0;" onclick="teklifiKabulEt(${arabaId}, ${teklifMiktari})">Kabul Et ve Sat</button>
            </div>`;
    }
    document.getElementById('teklif-modal').style.display = "block";
}

function modaliKapat(modalId) { document.getElementById(modalId).style.display = "none"; }

function teklifiKabulEt(arabaId, kabulEdilenFiyat) {
    modaliKapat('teklif-modal'); oyunSesi('kasa');
    paramiz += kabulEdilenFiyat; toplamGelir += kabulEdilenFiyat; toplamSatilanArac++; 
    garaj = garaj.filter(araba => araba.id !== arabaId); 
    ekraniGuncelle(); garajiEkranaGetir(); 
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
        ekraniGuncelle(); dukkanEkraniniGuncelle();
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

piyasayiYenile(); ekraniGuncelle();