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

// OYUN DEĞİŞKENLERİ
let paramiz = 15000000; let bankaBorcu = 0; let garaj = []; let gun = 1; let idSayaci = 1; 
let toplamSatilanArac = 0; let toplamGelir = 0; let toplamGider = 0;
let dukkanSeviyesi = 1; let aracKapasitesi = 2;
let arabalar = [];

const seviyeler = [
    { seviye: 1, isim: "Sokak Arası Galeri", kapasite: 2, fiyat: 0 }, { seviye: 2, isim: "Lüks Galeri", kapasite: 5, fiyat: 2000000 },
    { seviye: 3, isim: "Oto Center", kapasite: 10, fiyat: 5000000 }, { seviye: 4, isim: "Dev Plaza", kapasite: 999, fiyat: 15000000 } 
];

const modifiyePaketleri = [
    { id: 1, isim: "Cam Filmi & Seramik Boya Koruma", ikon: "✨", maliyet: 25000, degerArtisi: 60000 },
    { id: 2, isim: "Spor Çelik Jant & Performans Lastik", ikon: "🛞", maliyet: 55000, degerArtisi: 130000 },
    { id: 3, isim: "Stage 1 Chiptuning & Spor Egzoz", ikon: "💻", maliyet: 90000, degerArtisi: 220000 }
];

const musteriIsimleri = ["Ahmet Bey", "Mehmet Bey", "Ayşe Hanım", "Can", "Zeynep", "Burak", "Kemal Abi", "Elif Hanım"];

const aracSablonlari = [
    { marka: "BMW", model: "320i", tabanFiyat: 3800000, gorsel: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&q=80" },
    { marka: "Mercedes", model: "C200", tabanFiyat: 4200000, gorsel: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400&q=80" },
    { marka: "Audi", model: "A3", tabanFiyat: 2600000, gorsel: "https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?w=400&q=80" },
    { marka: "Volkswagen", model: "Golf", tabanFiyat: 1900000, gorsel: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=400&q=80" },
    { marka: "Renault", model: "Megane", tabanFiyat: 1350000, gorsel: "https://images.unsplash.com/photo-1612083042468-b39177a41221?w=400&q=80" }, 
    { marka: "Fiat", model: "Egea", tabanFiyat: 1100000, gorsel: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&q=80" },
    { marka: "Toyota", model: "Corolla", tabanFiyat: 1600000, gorsel: "https://images.unsplash.com/photo-1629897048514-3dd74142ffbe?w=400&q=80" },
    { marka: "Honda", model: "Civic", tabanFiyat: 1850000, gorsel: "https://images.unsplash.com/photo-1605816988069-b1c09eb0534d?w=400&q=80" }
];

// KAYIT SİSTEMİ
function oyunuKaydet() {
    const kayitData = { paramiz, bankaBorcu, garaj, gun, dukkanSeviyesi, aracKapasitesi, toplamSatilanArac, toplamGelir, toplamGider, arabalar, idSayaci };
    localStorage.setItem('sahibindenMotorsKayit', JSON.stringify(kayitData));
}

function oyunuYukle() {
    const eskiKayit = JSON.parse(localStorage.getItem('sahibindenMotorsKayit'));
    if (eskiKayit) {
        if (eskiKayit.arabalar && eskiKayit.arabalar.length > 0 && !eskiKayit.arabalar[0].ekspertiz) {
            console.log("Ekspertizsiz eski sürüm kayıt bulundu, sistem sıfırlanıyor...");
            localStorage.removeItem('sahibindenMotorsKayit');
            return false;
        }
        paramiz = eskiKayit.paramiz; bankaBorcu = eskiKayit.bankaBorcu; garaj = eskiKayit.garaj;
        gun = eskiKayit.gun; dukkanSeviyesi = eskiKayit.dukkanSeviyesi; aracKapasitesi = eskiKayit.aracKapasitesi;
        toplamSatilanArac = eskiKayit.toplamSatilanArac; toplamGelir = eskiKayit.toplamGelir; toplamGider = eskiKayit.toplamGider;
        arabalar = eskiKayit.arabalar || []; idSayaci = eskiKayit.idSayaci || 1;
        document.getElementById('gun').innerText = gun;
        return true; 
    }
    return false; 
}

function oyunuSifirla() {
    if(confirm("Tüm ilerlemen silinecek ve oyuna baştan başlayacaksın. Emin misin?")) {
        localStorage.removeItem('sahibindenMotorsKayit');
        location.reload();
    }
}

// YENİ: DİNAMİK EKSPERTİZ ÜRETİCİSİ
function ekspertizUret() {
    const parcalar = ['kaput', 'tavan', 'bagaj', 'solOnCamurluk', 'solOnKapi', 'solArkaKapi', 'solArkaCamurluk', 'sagOnCamurluk', 'sagOnKapi', 'sagArkaKapi', 'sagArkaCamurluk'];
    const ekspertiz = {};
    let hasarPuan = 0;
    
    let temizMi = Math.random() < 0.25;

    parcalar.forEach(p => {
        if (temizMi) {
            ekspertiz[p] = 'orijinal';
        } else {
            let rnd = Math.random();
            if (rnd < 0.50) { ekspertiz[p] = 'orijinal'; } 
            else if (rnd < 0.70) { ekspertiz[p] = 'lokal'; hasarPuan += 1; } 
            else if (rnd < 0.88) { ekspertiz[p] = 'boyali'; hasarPuan += 3; } 
            else { ekspertiz[p] = 'degisen'; hasarPuan += 6; }
        }
    });

    return { detay: ekspertiz, puan: hasarPuan };
}

// YENİ: İLAN AÇIKLAMASI ÜRETİCİSİ
function aciklamaUret(ekspertizPuan, km, marka) {
    if (ekspertizPuan === 0 && km < 50000) return `Aracım kapalı garaj arabasıdır. İçinde sigara içilmemiştir. Nokta hatasız, boyasız, tramersizdir. Dosta gidecek temizlikte bir ${marka}. Alıcısına şimdiden hayırlı olsun.`;
    if (ekspertizPuan === 0) return `Aracın motoru yürüyeni kusursuzdur. Yaşına göre ufak tefek çizikleri var ama orijinaldir, boya vurdurmadım. Model yükseltmek için satıyorum.`;
    if (ekspertizPuan < 5) return `Araçta sadece sürtmelerden kaynaklı temizlik boyaları ve lokal boyalar mevcuttur. Şase, podye, direkler kesinlikle işlemsizdir. Ekspere açıktır.`;
    if (ekspertizPuan < 15) return `Aracın çeşitli yerlerinde boya ve değişenler mevcuttur, ekspertiz şablonunda işaretledim. Ağır bir kazası yoktur. Parça parça trameri var. Fiyatı uygun tuttum, ölücüler aramasın.`;
    return `Araç ağır hasar kayıtlıdır (Pert). Tavan dahil işlemlidir, takla atmış olabilir. Kaportaya takıntısı olanlar sıfır araba baksın. Motoru yapılmıştır, yürüründe sıkıntı yok. Acil nakit ihtiyacından bu fiyata!`;
}

// ARAÇ ÜRETİMİ (Ekspertiz ve Açıklama Entegreli)
function rastgeleArabaUret() {
    const sablon = aracSablonlari[Math.floor(Math.random() * aracSablonlari.length)];
    const yil = Math.floor(Math.random() * (2026 - 2005 + 1)) + 2005; 
    const km = ((2026 - yil) * Math.floor(Math.random() * 15000 + 10000)) + Math.floor(Math.random() * 10000);
    
    let yas = 2026 - yil;
    let degerKaybiOrani = (yas * 0.02) + ((km / 10000) * 0.015); 
    if (degerKaybiOrani > 0.60) degerKaybiOrani = 0.60; 
    let tabanHesap = sablon.tabanFiyat * (1 - degerKaybiOrani);

    let ekspertizVerisi = ekspertizUret();
    
    let hasarIndirimi = ekspertizVerisi.puan * 0.015; 
    if (hasarIndirimi > 0.50) hasarIndirimi = 0.50; 
    
    let fiyat = tabanHesap * (1 - hasarIndirimi);

    let agirHasarliMi = ekspertizVerisi.puan > 15 || ekspertizVerisi.detay['tavan'] === 'degisen';
    let tamirMasrafi = agirHasarliMi ? Math.floor(fiyat * 0.1) : 0; 

    let aciklama = aciklamaUret(ekspertizVerisi.puan, km, sablon.marka);

    return { 
        id: idSayaci++, marka: sablon.marka, model: sablon.model, yil: yil, km: Math.floor(km), 
        fiyat: Math.floor(fiyat), hasarli: agirHasarliMi, tamirMasrafi: tamirMasrafi, modifiyeler: [],
        gorsel: sablon.gorsel, ekspertiz: ekspertizVerisi.detay, ilanAciklamasi: aciklama
    };
}

function piyasayiYenile() {
    arabalar = []; for(let i = 0; i < 4; i++) { arabalar.push(rastgeleArabaUret()); }
    if (document.getElementById('pazar-ekrani').style.display === 'block') { arabalariEkranaGetir(); }
}

function rastgeleOlayTetikle() {
    const sans = Math.random();
    if (sans < 0.15) { 
        let ceza = Math.floor(paramiz * 0.05) + 15000; 
        if(ceza > paramiz) ceza = paramiz; 
        paramiz -= ceza; toplamGider += ceza;
        oyunSesi('hata');
        ozelUyari(`Vergi dairesi denetime geldi! Evrak eksikliğinden ${ceza.toLocaleString('tr-TR')} TL ceza yedin.`, 'hata');
    } else if (sans > 0.85) { 
        let bonus = Math.floor(Math.random() * 40000) + 20000;
        paramiz += bonus; toplamGelir += bonus;
        oyunSesi('kasa');
        ozelUyari(`Dükkana gelen zengin bir müşteri kahveni çok beğendi ve sana ${bonus.toLocaleString('tr-TR')} TL bahşiş bıraktı!`, 'basari');
    }
}

function sonrakiGun() {
    gun++; document.getElementById('gun').innerText = gun;
    
    if (bankaBorcu > 0) {
        let faizMiktari = Math.floor(bankaBorcu * 0.05); bankaBorcu += faizMiktari; toplamGider += faizMiktari; 
        document.getElementById('borc-miktari').innerText = bankaBorcu.toLocaleString('tr-TR');
        oyunSesi('hata'); ozelUyari(`Banka borcuna ${faizMiktari.toLocaleString('tr-TR')} TL gecikme faizi uyguladı!`, 'hata');
    }

    rastgeleOlayTetikle(); 
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
    if (menu === 'istatistik') istatistikleriGuncelle();
    if (menu === 'dukkan') dukkanEkraniniGuncelle();
}

function krediCek(miktar) { oyunSesi('kasa'); paramiz += miktar; bankaBorcu += miktar; ekraniGuncelle(); oyunuKaydet(); ozelUyari(`Bankadan ${miktar.toLocaleString('tr-TR')} TL kredi çektin.`, 'basari'); }
function borcOde(miktar) { 
    if (bankaBorcu === 0) { ozelUyari("Bankaya hiç borcun yok!", "bilgi"); return; } 
    if (paramiz >= miktar) { let odenecek = miktar > bankaBorcu ? bankaBorcu : miktar; paramiz -= odenecek; bankaBorcu -= odenecek; ekraniGuncelle(); oyunuKaydet(); oyunSesi('satin-al'); ozelUyari(`${odenecek.toLocaleString('tr-TR')} TL borç ödendi.`, "basari"); 
    } else { oyunSesi('hata'); ozelUyari("Kasanda bu borcu ödeyecek kadar para yok!", "hata"); } 
}
function borcuKapat() { 
    if (bankaBorcu === 0) { ozelUyari("Zaten borcun yok.", "bilgi"); return; } 
    if (paramiz >= bankaBorcu) { paramiz -= bankaBorcu; bankaBorcu = 0; ekraniGuncelle(); oyunuKaydet(); oyunSesi('satin-al'); ozelUyari("Tebrikler, bankaya olan tüm borcunu kapattın!", "basari"); 
    } else { oyunSesi('hata'); ozelUyari("Kasanda tüm borcu kapatacak kadar para yok!", "hata"); } 
}

function ekraniGuncelle() {
    document.getElementById('paramiz').innerText = paramiz.toLocaleString('tr-TR');
    document.getElementById('borc-miktari').innerText = bankaBorcu.toLocaleString('tr-TR');
    let kapasiteYazisi = aracKapasitesi === 999 ? "Sınırsız" : aracKapasitesi;
    document.getElementById('kapasite-bilgi').innerText = garaj.length + " / " + kapasiteYazisi;
    if (garaj.length >= aracKapasitesi && aracKapasitesi !== 999) { document.getElementById('kapasite-bilgi').style.color = '#e74c3c'; } else { document.getElementById('kapasite-bilgi').style.color = '#0984e3'; }
}

// PAZAR LİSTESİ ("İlan İncele" Butonu Eklendi)
function arabalariEkranaGetir() {
    const liste = document.getElementById('araba-listesi'); liste.innerHTML = ''; 
    arabalar.forEach(araba => {
        let hasarMetni = araba.hasarli ? '<span class="etiket etiket-kirmizi">Ağır Hasarlı Olabilir</span>' : '<span class="etiket etiket-yesil">Ekspertiz Raporlu</span>';
        liste.innerHTML += `
            <div class="ilan-karti">
                <div class="araba-foto">
                    <img src="${araba.gorsel}" alt="${araba.marka}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px;">
                </div>
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

// YENİ: İLAN DETAY MODALINI AÇAN FONKSİYON
function ilanDetayEkraniAc(arabaId) {
    const araba = arabalar.find(a => a.id === arabaId);
    
    document.getElementById('detay-foto').src = araba.gorsel;
    document.getElementById('detay-baslik').innerText = `Sahibinden Satılık ${araba.marka} ${araba.model}`;
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

    document.getElementById('detay-satin-al-btn').onclick = function() {
        satinAl(araba.id);
        modaliKapat('ilan-detay-modal');
    };

    document.getElementById('ilan-detay-modal').style.display = 'block';
}

function satinAl(arabaId) {
    if (garaj.length >= aracKapasitesi) { oyunSesi('hata'); ozelUyari("Garaj kapasiten tamamen dolu! Dükkan Yönetimi menüsünden galeri seviyeni yükselt.", "hata"); return; }
    const secilenAraba = arabalar.find(araba => araba.id === arabaId);
    if (paramiz >= secilenAraba.fiyat) {
        oyunSesi('satin-al'); paramiz -= secilenAraba.fiyat; toplamGider += secilenAraba.fiyat; 
        garaj.push(secilenAraba); arabalar = arabalar.filter(araba => araba.id !== arabaId); 
        ekraniGuncelle(); arabalariEkranaGetir(); oyunuKaydet();
        ozelUyari(`Araç başarıyla satın alındı ve garajınıza eklendi!`, "basari");
    } else { oyunSesi('hata'); ozelUyari("Kasadaki paran bu aracı almaya yetmiyor!", "hata"); }
}

function garajiEkranaGetir() {
    const garajListesi = document.getElementById('garaj-listesi'); const bilgiMesaji = document.getElementById('garaj-bilgi');
    garajListesi.innerHTML = '';
    if (garaj.length === 0) { bilgiMesaji.style.display = 'block'; } else {
        bilgiMesaji.style.display = 'none';
        garaj.forEach(araba => {
            let hasarMetni = araba.hasarli ? '<span class="etiket etiket-kirmizi">Ağır Hasarlı Olabilir</span>' : '<span class="etiket etiket-yesil">Sorunsuz</span>';
            let tamirButonuKodu = araba.hasarli ? `<button class="btn btn-turuncu" onclick="tamirEt(${araba.id})">🛠️ Sanayide Tamir Et (${araba.tamirMasrafi.toLocaleString('tr-TR')} ₺)</button>` : '';
            
            let modifiyeEtiketleri = '';
            araba.modifiyeler.forEach(mod => { modifiyeEtiketleri += `<span class="etiket" style="background:#2d3436; margin-right:5px;">${mod}</span>`; });

            garajListesi.innerHTML += `
                <div class="ilan-karti">
                    <div class="araba-foto">
                        <img src="${araba.gorsel}" alt="${araba.marka}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px;">
                    </div>
                    <div class="ilan-detay">
                        <h3 class="ilan-baslik">${araba.marka} ${araba.model} (Benim İlanım)</h3>
                        <div class="ilan-ozellikler"><span>🗓️ <strong>${araba.yil}</strong></span><span>🛣️ <strong>${araba.km.toLocaleString('tr-TR')}</strong> KM</span></div>
                        <div class="ilan-durum" style="margin-top: 5px;">${hasarMetni} <br><div style="margin-top:5px;">${modifiyeEtiketleri}</div></div>
                        <div style="margin-top:8px; color:#b2bec3; font-size:12px; font-weight: 600;">Maliyetim: ${araba.fiyat.toLocaleString('tr-TR')} ₺</div>
                    </div>
                    <div class="ilan-sag-taraf">
                        ${tamirButonuKodu}
                        <button class="btn btn-mor" style="background:#6c5ce7; color:white;" onclick="modifiyeEkraniAc(${araba.id})">✨ Modifiye Et</button>
                        <button class="btn btn-kirmizi" onclick="araciSat(${araba.id})">🤝 Müşteri Teklifleri Gör</button>
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
                        <span style="font-size: 14px; color: #636e72;">Maliyet: <strong style="color:#d63031;">${paket.maliyet.toLocaleString('tr-TR')} ₺</strong> | Değer Artışı: <strong style="color:#00b894;">+${paket.degerArtisi.toLocaleString('tr-TR')} ₺</strong></span>
                    </div>
                    <button class="btn" style="background:#6c5ce7; color:white; width: auto; margin:0;" onclick="modifiyeUygula(${araba.id}, ${paket.id})">Uygula</button>
                </div>`;
        }
    });

    if (!yapilacakModKaldimi) { modListesi.innerHTML = `<p style="text-align:center; color:#e67e22; font-weight:bold;">Bu araç en "gırtlak dolu" halinde! Ekleyecek başka modifiye kalmadı.</p>`; }
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
    const satilacakAraba = garaj.find(araba => araba.id === arabaId);
    let minFiyat = satilacakAraba.fiyat * 0.8; let maxFiyat = satilacakAraba.fiyat * 1.3;
    if (satilacakAraba.hasarli) { maxFiyat = satilacakAraba.fiyat * 1.0; } 
    
    const listeHTML = document.getElementById('teklif-listesi');
    listeHTML.innerHTML = `<p style="color: #636e72; margin-bottom: 20px; font-size: 15px;">Aracın Sana Maliyeti: <strong style="color: #2d3436;">${satilacakAraba.fiyat.toLocaleString('tr-TR')} TL</strong></p>`;

    for(let i=0; i<3; i++) {
        const teklifMiktari = Math.floor(Math.random() * (maxFiyat - minFiyat + 1)) + minFiyat;
        const musteriAdayi = musteriIsimleri[Math.floor(Math.random() * musteriIsimleri.length)];
        const teklifId = `teklif-${arabaId}-${i}`; 
        
        listeHTML.innerHTML += `
            <div class="teklif-karti" id="${teklifId}">
                <div style="text-align: left;">
                    <span style="color: #0984e3; font-weight: 700; font-size: 16px;">👤 ${musteriAdayi}</span><br>
                    <span style="font-size: 22px; color: #00b894; font-weight: 700;">${teklifMiktari.toLocaleString('tr-TR')} ₺</span>
                </div>
                <div style="display: flex; gap: 8px; flex-direction: column;">
                    <button class="btn btn-yesil" style="margin:0;" onclick="teklifiKabulEt(${arabaId}, ${teklifMiktari})">Kabul Et</button>
                    <button class="btn btn-turuncu" style="margin:0;" onclick="pazarlikYap(${arabaId}, ${teklifMiktari}, '${teklifId}')">Pazarlık Yap</button>
                </div>
            </div>`;
    }
    document.getElementById('teklif-modal').style.display = "block";
}

function pazarlikYap(arabaId, eskiTeklif, teklifId) {
    const kart = document.getElementById(teklifId);
    const sans = Math.random();
    
    if (sans > 0.5) {
        const artisOrani = (Math.floor(Math.random() * 10) + 5) / 100;
        const yeniTeklif = Math.floor(eskiTeklif * (1 + artisOrani));
        oyunSesi('kasa');
        
        kart.innerHTML = `
            <div style="text-align: left;">
                <span style="color: #0984e3; font-weight: 700; font-size: 16px;">👤 Müşteri (İkna Oldu!)</span><br>
                <span style="font-size: 22px; color: #00b894; font-weight: 700;">${yeniTeklif.toLocaleString('tr-TR')} ₺</span>
            </div>
            <button class="btn btn-yesil" style="width: auto; margin:0;" onclick="teklifiKabulEt(${arabaId}, ${yeniTeklif})">Yeni Teklifi Kabul Et</button>
        `;
    } else {
        oyunSesi('hata');
        kart.innerHTML = `
            <div style="text-align: center; width: 100%; padding: 10px 0;">
                <span style="color: #d63031; font-weight: 700;">Müşteri sinirlendi ve masadan kalktı! 😡</span>
            </div>
        `;
    }
}

function teklifiKabulEt(arabaId, kabulEdilenFiyat) {
    modaliKapat('teklif-modal'); oyunSesi('kasa');
    paramiz += kabulEdilenFiyat; toplamGelir += kabulEdilenFiyat; toplamSatilanArac++; 
    garaj = garaj.filter(araba => araba.id !== arabaId); 
    ekraniGuncelle(); garajiEkranaGetir(); oyunuKaydet();
}

function modaliKapat(modalId) { document.getElementById(modalId).style.display = "none"; }

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

// OYUN BAŞLANGICI
if (!oyunuYukle()) {
    piyasayiYenile();
} else {
    if (arabalar.length === 0) piyasayiYenile(); 
    else arabalariEkranaGetir();
}
ekraniGuncelle();