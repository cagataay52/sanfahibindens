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
let arabalar = []; let hakanAbiSonKullanim = -15; 
const noterUcreti = 2500; 

let piyasaDurumu = "Normal"; let piyasaCarpani = 1.0;
let aylikFaturalar = 4500; let sigortaVeMtvUcreti = 4000;

// SOSYAL MEDYA 2.0 DEĞİŞKENLERİ
let sosyalMedya = { aktif: false, platform: "", kullaniciAdi: "", takipci: 0, populerlik: 0, maviTik: false, lincBitisGunu: 0 };
let dmKutusu = [];

const seviyeler = [
    { seviye: 1, isim: "Sokak Arası Galeri", kapasite: 2, fiyat: 0, kira: 5000 }, 
    { seviye: 2, isim: "Lüks Galeri", kapasite: 5, fiyat: 2000000, kira: 25000 },
    { seviye: 3, isim: "Oto Center", kapasite: 10, fiyat: 5000000, kira: 75000 }, 
    { seviye: 4, isim: "Dev Plaza", kapasite: 999, fiyat: 15000000, kira: 250000 } 
];

const modifiyePaketleri = [
    { id: 1, isim: "Cam Filmi & Seramik Boya", ikon: "✨", maliyet: 25000, degerArtisi: 60000 },
    { id: 2, isim: "Spor Çelik Jant & Lastik", ikon: "🛞", maliyet: 55000, degerArtisi: 130000 },
    { id: 3, isim: "Stage 1 Yazılım & Egzoz", ikon: "💻", maliyet: 90000, degerArtisi: 220000 }
];

const musteriIsimleri = ["Ahmet Bey", "Mehmet Bey", "Ayşe Hanım", "Can", "Zeynep", "Burak", "Kemal Abi", "Elif Hanım", "Mert", "Selin", "hizlitutku44", "drft_kral", "aylinex"];

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
    const kayitData = { galeriAdi, paramiz, bankaBorcu, garaj, gun, dukkanSeviyesi, aracKapasitesi, toplamSatilanArac, toplamGelir, toplamGider, arabalar, idSayaci, hakanAbiSonKullanim, piyasaDurumu, piyasaCarpani, sosyalMedya, dmKutusu };
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
        piyasaDurumu = eskiKayit.piyasaDurumu || "Normal"; piyasaCarpani = eskiKayit.piyasaCarpani || 1.0;
        
        sosyalMedya = eskiKayit.sosyalMedya || { aktif: false, platform: "", kullaniciAdi: "", takipci: 0, populerlik: 0, maviTik: false, lincBitisGunu: 0 };
        dmKutusu = eskiKayit.dmKutusu || [];

        garaj.forEach(a => { if(a.tamirDurumu === undefined) a.tamirDurumu = 0; });
        document.getElementById('gun').innerText = gun;
        return true; 
    }
    return false; 
}

function oyunuSifirlaEkrani() {
    if(confirm("Tüm ilerlemen silinecek. Oyuna baştan başlayacaksın. Emin misin?")) {
        localStorage.removeItem('sahibindenMotorsKayit'); location.reload();
    }
}

// ... (Araç üretme, Ekspertiz ve Tramer Fonksiyonları aynı) ...
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
function tramerUret(hasarPuan, tavanHasarliMi) {
    let sasiNo = "WBA" + Math.random().toString(36).substring(2, 8).toUpperCase() + "***";
    let mesaj = `Sayın İlgili, kayıtlarımıza göre <b>${sasiNo}</b> şasi numaralı araçta `;
    if (hasarPuan === 0) return mesaj + `<b>HASAR KAYDI BULUNMAMIŞTIR.</b> B002`;
    let kazaSayisi = Math.floor(Math.random() * 3) + 1; 
    let toplamTramer = hasarPuan * (Math.floor(Math.random() * 15000) + 10000); 
    if (tavanHasarliMi || hasarPuan > 15) return mesaj + `<b>AĞIR HASAR KAYDI (ÇARPMA)</b> bulunmuştur. Toplam Hasar: <b>${toplamTramer.toLocaleString('tr-TR')} TL</b>. B002`;
    return mesaj + `<b>${kazaSayisi} adet</b> kazaya karışmıştır. Toplam Hasar Tutarı: <b>${toplamTramer.toLocaleString('tr-TR')} TL</b>. B002`;
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
    let yas = 2026 - yil; let degerKaybiOrani = (yas * 0.03) + ((km / 10000) * 0.015); if (degerKaybiOrani > 0.40) degerKaybiOrani = 0.40; 
    let tabanHesap = sablon.tabanFiyat * (1 - degerKaybiOrani);
    let ekspertizVerisi = ekspertizUret(); let hasarIndirimi = ekspertizVerisi.puan * 0.015; if (hasarIndirimi > 0.50) hasarIndirimi = 0.50; 
    let fiyat = (tabanHesap * (1 - hasarIndirimi)) * piyasaCarpani;
    let agirHasarliMi = ekspertizVerisi.puan > 15 || ekspertizVerisi.detay['tavan'] === 'degisen';
    let tamirMasrafi = agirHasarliMi ? Math.floor(fiyat * 0.1) : 0; 
    let telNo = '05' + Math.floor(Math.random() * 90000000 + 10000000);
    let tramerMesaji = tramerUret(ekspertizVerisi.puan, agirHasarliMi);

    return { 
        id: idSayaci++, marka: sablon.marka, model: sablon.model, yil: yil, km: Math.floor(km), 
        fiyat: Math.floor(fiyat), hasarli: agirHasarliMi, tamirMasrafi: tamirMasrafi, modifiyeler: [],
        gorsel: sablon.gorsel, ekspertiz: ekspertizVerisi.detay, ilanAciklamasi: aciklamaUret(ekspertizVerisi.puan, km, sablon.marka),
        teklifler: [], telefon: telNo, tramer: tramerMesaji, tamirDurumu: 0
    };
}

function piyasayiYenile() {
    arabalar = []; for(let i = 0; i < 4; i++) { arabalar.push(rastgeleArabaUret()); }
    if (document.getElementById('pazar-ekrani').style.display === 'block') { arabalariEkranaGetir(); }
}

function ekonomiOlayiTetikle() {
    const sans = Math.random(); let eskiCarpan = piyasaCarpani;
    if (sans < 0.05 && piyasaDurumu !== "Kriz") { piyasaDurumu = "Kriz"; piyasaCarpani = 0.85; oyunSesi('hata'); ozelUyari("📉 FLAŞ HABER: Kredi faizleri uçtu, piyasa kilitlendi! Araç fiyatları anında %15 düştü.", "hata"); } 
    else if (sans > 0.95 && piyasaDurumu !== "Canli") { piyasaDurumu = "Canli"; piyasaCarpani = 1.20; oyunSesi('kasa'); ozelUyari("📈 FLAŞ HABER: Devletten muazzam kredi kampanyası! Fiyatlar %20 fırladı!", "basari"); } 
    else if (sans > 0.40 && sans < 0.45 && piyasaDurumu !== "Normal") { piyasaDurumu = "Normal"; piyasaCarpani = 1.0; ozelUyari("⚖️ Piyasa ateşini kaybetti, alım-satımlar normale döndü.", "bilgi"); }

    if (eskiCarpan !== piyasaCarpani) {
        let degisimOrani = piyasaCarpani / eskiCarpan;
        garaj.forEach(araba => { araba.fiyat = Math.floor(araba.fiyat * degisimOrani); araba.teklifler = []; });
    }
}

function sonrakiGun() {
    gun++; document.getElementById('gun').innerText = gun;
    
    if (gun % 30 === 0) {
        let guncelKira = seviyeler[dukkanSeviyesi - 1].kira; let toplamAylikGider = guncelKira + aylikFaturalar;
        paramiz -= toplamAylikGider; toplamGider += toplamAylikGider; oyunSesi('hata');
        ozelUyari(`📅 Ay sonu geldi! Dükkan kiran (${guncelKira.toLocaleString('tr-TR')} ₺) ve faturalar (Toplam ${toplamAylikGider.toLocaleString('tr-TR')} ₺) kasadan çekildi.`, "bilgi");
    }

    if (bankaBorcu > 0) { let faizMiktari = Math.floor(bankaBorcu * 0.05); bankaBorcu += faizMiktari; toplamGider += faizMiktari; document.getElementById('borc-miktari').innerText = bankaBorcu.toLocaleString('tr-TR'); }

    ekonomiOlayiTetikle();

    if(Math.random() < 0.10) {
        let ceza = Math.floor(paramiz * 0.05) + 15000; if(ceza > paramiz) ceza = paramiz; 
        paramiz -= ceza; toplamGider += ceza; oyunSesi('hata'); ozelUyari(`Maliye denetime geldi! Evrak eksikliğinden ${ceza.toLocaleString('tr-TR')} TL ceza yedin.`, 'hata');
    }

    garaj.forEach(araba => {
        if (araba.tamirDurumu > 0) {
            araba.tamirDurumu--; 
            if (araba.tamirDurumu === 0) { araba.hasarli = false; araba.fiyat += (araba.tamirMasrafi * 3); araba.tamirMasrafi = 0; oyunSesi('kasa'); ozelUyari(`🛠️ Usta: "Patron araban hazır, gel al."`, "basari"); } 
            else {
                if (Math.random() < 0.25) {
                    let ekstra = Math.floor(araba.tamirMasrafi * 0.5);
                    if (paramiz >= ekstra) { paramiz -= ekstra; toplamGider += ekstra; araba.tamirDurumu += 2; oyunSesi('hata'); ozelUyari(`📞 Kaportacı Hamza Usta: "Ustam yatak sarmış bu. Sana ${ekstra.toLocaleString('tr-TR')} ₺ daha kilitledim, araç 2 gün daha bende."`, "hata"); }
                }
            }
        } else {
            if (!araba.teklifler) araba.teklifler = []; araba.teklifler = araba.teklifler.filter(t => (gun - t.gelisGunu) < 3);
            let teklifIhtimali = piyasaDurumu === "Canli" ? 0.6 : (piyasaDurumu === "Kriz" ? 0.1 : 0.3);

            if (Math.random() < teklifIhtimali) {
                let yeniTeklifSayisi = Math.floor(Math.random() * 2) + 1;
                for(let i=0; i<yeniTeklifSayisi; i++) {
                    let musteriTipiRnd = Math.random(); let musteriTipi = "Normal"; let teklifTutari = 0; let takasArabasi = null; let girtlakDoluMu = araba.modifiyeler && araba.modifiyeler.length >= 3;

                    if (girtlakDoluMu && Math.random() < 0.40) { musteriTipi = "Tayfa"; teklifTutari = Math.floor(araba.fiyat * (Math.random() * 0.20 + 1.10)); } 
                    else if (musteriTipiRnd < 0.20) { musteriTipi = "Olucu"; teklifTutari = Math.floor(araba.fiyat * (Math.random() * 0.20 + 0.50)); } 
                    else if (musteriTipiRnd < 0.45) { musteriTipi = "Takas"; takasArabasi = rastgeleArabaUret(); if (takasArabasi.fiyat >= araba.fiyat) takasArabasi.fiyat = Math.floor(araba.fiyat * 0.6); teklifTutari = Math.floor((araba.fiyat - takasArabasi.fiyat) * (Math.random() * 0.2 + 0.9)); } 
                    else { let minFiyat = araba.fiyat * 0.90; let maxFiyat = araba.fiyat * 1.20; if (araba.hasarli) maxFiyat = araba.fiyat * 0.95; teklifTutari = Math.floor(Math.random() * (maxFiyat - minFiyat + 1)) + minFiyat; }

                    araba.teklifler.push({ id: 'tklf-' + Math.floor(Math.random() * 1000000), musteri: musteriIsimleri[Math.floor(Math.random() * musteriIsimleri.length)], fiyat: teklifTutari, gelisGunu: gun, tip: musteriTipi, takasArac: takasArabasi });
                }
            }
        }
    });

    // SOSYAL MEDYA DM DÖNGÜSÜ
    if (sosyalMedya.aktif && garaj.length > 0 && gun >= sosyalMedya.lincBitisGunu) {
        let dmIhtimali = (sosyalMedya.takipci / 50000) + 0.10; 
        if(sosyalMedya.maviTik) dmIhtimali += 0.15; // Mavi tik şansı artırır
        if (dmIhtimali > 0.85) dmIhtimali = 0.85; 
        
        if (Math.random() < dmIhtimali) {
            let sansliAraba = garaj[Math.floor(Math.random() * garaj.length)];
            let carpan = sosyalMedya.maviTik ? 1.05 : 0.95; // Mavi Tik teklifi yüksek tutar
            let minF = sansliAraba.fiyat * carpan; let maxF = sansliAraba.fiyat * (carpan + 0.20);
            let teklif = Math.floor(Math.random() * (maxF - minF + 1)) + minF;
            
            dmKutusu.push({
                gonderen: "@" + musteriIsimleri[Math.floor(Math.random() * musteriIsimleri.length)].toLowerCase() + Math.floor(Math.random()*99),
                metin: sosyalMedya.maviTik ? `Güvenilir adres, araç duruyorsa direkt alıyorum nakit hazır.` : `Reis profildeki ${sansliAraba.marka} duruyor mu? Gelip alayım.`,
                teklifFiyat: teklif,
                arabaId: sansliAraba.id
            });
            ozelUyari("📱 Sosyal medyan yıkılıyor! Bir araca DM'den ciddi bir teklif geldi.", "bilgi");
        }
    }

    piyasayiYenile(); ekraniGuncelle(); oyunuKaydet(); 
    if(document.getElementById('sosyal-ekrani').style.display === 'block') { sosyalEkraniGuncelle(); } else { menuDegistir('pazar'); }
}

function menuDegistir(menu) {
    document.querySelectorAll('.sayfa').forEach(s => s.style.display = 'none');
    document.querySelectorAll('.sol-menu li').forEach(l => l.classList.remove('aktif'));
    if(document.getElementById(menu + '-ekrani')) document.getElementById(menu + '-ekrani').style.display = 'block';
    if(document.getElementById('menu-' + menu)) document.getElementById('menu-' + menu).classList.add('aktif');
    
    if (menu === 'pazar') arabalariEkranaGetir();
    if (menu === 'garaj') garajiEkranaGetir();
    if (menu === 'istatistik') istatistikleriGuncelle();
    if (menu === 'dukkan') dukkanEkraniniGuncelle();
    if (menu === 'banka') document.getElementById('borc-miktari').innerText = bankaBorcu.toLocaleString('tr-TR');
    if (menu === 'sosyal') sosyalEkraniGuncelle();

    if(window.innerWidth <= 768) { document.querySelector('.sol-menu').classList.remove('acik'); document.getElementById('mobil-menu-overlay').classList.remove('acik'); }
}

function krediCek(miktar) { oyunSesi('kasa'); paramiz += miktar; bankaBorcu += miktar; ekraniGuncelle(); oyunuKaydet(); ozelUyari(`Bankadan ${miktar.toLocaleString('tr-TR')} TL kredi çektin.`, 'basari'); document.getElementById('borc-miktari').innerText = bankaBorcu.toLocaleString('tr-TR'); }
function borcOde(miktar) { if (bankaBorcu === 0) { ozelUyari("Bankaya hiç borcun yok!", "bilgi"); return; } if (paramiz >= miktar) { let odenecek = miktar > bankaBorcu ? bankaBorcu : miktar; paramiz -= odenecek; bankaBorcu -= odenecek; ekraniGuncelle(); oyunuKaydet(); oyunSesi('satin-al'); ozelUyari(`${odenecek.toLocaleString('tr-TR')} TL borç ödendi.`, "basari"); document.getElementById('borc-miktari').innerText = bankaBorcu.toLocaleString('tr-TR'); } else { oyunSesi('hata'); ozelUyari("Kasanda bu borcu ödeyecek kadar para yok!", "hata"); } }
function borcuKapat() { if (bankaBorcu === 0) { ozelUyari("Zaten borcun yok.", "bilgi"); return; } if (paramiz >= bankaBorcu) { paramiz -= bankaBorcu; bankaBorcu = 0; ekraniGuncelle(); oyunuKaydet(); oyunSesi('satin-al'); ozelUyari("Tebrikler, bankaya olan tüm borcunu kapattın!", "basari"); document.getElementById('borc-miktari').innerText = bankaBorcu.toLocaleString('tr-TR'); } else { oyunSesi('hata'); ozelUyari("Kasanda tüm borcu kapatacak kadar para yok!", "hata"); } }

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
    document.getElementById('detay-marka').innerText = araba.marka; document.getElementById('detay-model').innerText = araba.model; document.getElementById('detay-yil').innerText = araba.yil; document.getElementById('detay-km').innerText = araba.km.toLocaleString('tr-TR');
    document.getElementById('detay-aciklama').innerText = araba.ilanAciklamasi; document.getElementById('detay-telefon').innerText = araba.telefon;

    const parcalar = ['kaput', 'tavan', 'bagaj', 'solOnCamurluk', 'solOnKapi', 'solArkaKapi', 'solArkaCamurluk', 'sagOnCamurluk', 'sagOnKapi', 'sagArkaKapi', 'sagArkaCamurluk'];
    parcalar.forEach(p => { const parcaDiv = document.getElementById(`eks-${p}`); parcaDiv.classList.remove('orijinal', 'lokal', 'boyali', 'degisen'); parcaDiv.classList.add(araba.ekspertiz[p]); });

    document.getElementById('detay-tramer-btn').onclick = function() { tramerSorgula(araba.id); };

    const hakanAbiBtn = document.getElementById('detay-hakan-abi-btn'); let kalanGun = 15 - (gun - hakanAbiSonKullanim);
    if (kalanGun <= 0) { hakanAbiBtn.innerText = "👑 Hakan Abi'ye Çöktürt (%40 İndirim)"; hakanAbiBtn.style.opacity = "1"; hakanAbiBtn.onclick = function() { hakanAbiAra(araba.id); }; } 
    else { hakanAbiBtn.innerText = `👑 Hakan Abi Meşgul (${kalanGun} Gün Sonra)`; hakanAbiBtn.style.opacity = "0.5"; hakanAbiBtn.onclick = function() { ozelUyari(`Hakan Abi şu an tahsilatta. ${kalanGun} gün sonra tekrar deneyebilirsin.`, "bilgi"); }; }

    document.getElementById('detay-satici-ara-btn').onclick = function() { saticiAra(araba.id); }; document.getElementById('ilan-detay-modal').style.display = 'block';
}

function tramerSorgula(arabaId) {
    if (paramiz < 150) { ozelUyari("Tramer sorgulamak için 150 TL'niz yok!", "hata"); return; } paramiz -= 150; toplamGider += 150; ekraniGuncelle(); oyunSesi('kasa');
    const araba = arabalar.find(a => a.id === arabaId); document.getElementById('tramer-mesaj-icerik').innerHTML = araba.tramer; document.getElementById('tramer-modal').style.display = 'block';
}

function telefonuKapat() { document.getElementById('telefon-modal').style.display = 'none'; document.querySelector('.telefon-ekrani').classList.remove('caliyor'); }

function saticiAra(arabaId) {
    if (garaj.length >= aracKapasitesi) { ozelUyari("Garaj kapasiten tamamen dolu! Dükkanı büyüt.", "hata"); return; }
    const araba = arabalar.find(a => a.id === arabaId); modaliKapat('ilan-detay-modal');
    document.getElementById('tel-aranan-kisi').innerText = `Satıcı Aranıyor (${araba.telefon})`; document.getElementById('tel-diyalog').innerText = "Dıt... Dıt... Dıt..."; document.getElementById('tel-aksiyonlar').style.display = 'none';
    document.querySelector('.telefon-ekrani').classList.add('caliyor'); document.getElementById('telefon-modal').style.display = 'block';
    
    setTimeout(() => {
        document.querySelector('.telefon-ekrani').classList.remove('caliyor'); document.getElementById('tel-aranan-kisi').innerText = `Görüşme Sağlanıyor: Satıcı`;
        document.getElementById('tel-diyalog').innerText = `"Alo buyur kardeşim. İlan için aradın sanırım. Aracın son fiyatı ${araba.fiyat.toLocaleString('tr-TR')} TL. Alıyor musun?"`;
        document.getElementById('tel-aksiyonlar').style.display = 'flex';
        document.getElementById('tel-satin-al-btn').onclick = function() { telSatinAl(araba.id); }; document.getElementById('tel-pazarlik-btn').onclick = function() { telPazarlikYap(araba.id); };
    }, 2000);
}

function telPazarlikYap(arabaId) {
    const araba = arabalar.find(a => a.id === arabaId); document.getElementById('tel-aksiyonlar').style.display = 'none';
    if (Math.random() > 0.40) {
        let indirimOrani = (Math.floor(Math.random() * 8) + 3) / 100; araba.fiyat = Math.floor(araba.fiyat * (1 - indirimOrani)); oyunSesi('kasa');
        document.getElementById('tel-diyalog').innerHTML = `"Valla kardeşim beni zorluyorsun ama esnaf adamız... Hadi senin hatrına <strong style='color:#00b894;'>${araba.fiyat.toLocaleString('tr-TR')} TL</strong> olsun. Gel al."`;
        document.getElementById('tel-aksiyonlar').style.display = 'flex'; document.getElementById('tel-pazarlik-btn').style.display = 'none'; 
    } else {
        oyunSesi('hata'); document.getElementById('tel-diyalog').innerHTML = `<span style="color:#e74c3c; font-weight:bold;">"Kardeşim ölücülerle işim olmaz benim, hadi eyvallah!"</span> (Telefon kapandı)`;
        arabalar = arabalar.filter(a => a.id !== arabaId); piyasayiYenile(); 
    }
}

function hakanAbiAra(arabaId) {
    if (garaj.length >= aracKapasitesi) { ozelUyari("Garaj kapasiten tamamen dolu! Dükkanı büyüt.", "hata"); return; }
    const araba = arabalar.find(a => a.id === arabaId); modaliKapat('ilan-detay-modal');
    document.getElementById('tel-aranan-kisi').innerText = `👑 Hakan Abi Aranıyor...`; document.getElementById('tel-diyalog').innerText = "Dıt... Dıt... Dıt..."; document.getElementById('tel-aksiyonlar').style.display = 'none';
    document.querySelector('.telefon-ekrani').classList.add('caliyor'); document.getElementById('telefon-modal').style.display = 'block';
    
    setTimeout(() => {
        document.querySelector('.telefon-ekrani').classList.remove('caliyor'); document.getElementById('tel-aranan-kisi').innerText = `Görüşme Sağlanıyor: 👑 Hakan Abi`;
        let indirimliFiyat = Math.floor(araba.fiyat * 0.60); 
        document.getElementById('tel-diyalog').innerHTML = `"Buyrun benim, hallettim o işi. Adam sana <strong style='color:#f1c40f;'>${indirimliFiyat.toLocaleString('tr-TR')} TL</strong>'ye bırakıyor. Battı balık yan gider al gitsin."`;
        document.getElementById('tel-aksiyonlar').style.display = 'flex'; document.getElementById('tel-pazarlik-btn').style.display = 'none'; 
        document.getElementById('tel-satin-al-btn').onclick = function() { araba.fiyat = indirimliFiyat; hakanAbiSonKullanim = gun; telSatinAl(araba.id); };
    }, 2500);
}

function telSatinAl(arabaId) {
    const araba = arabalar.find(a => a.id === arabaId); let toplamMaliyet = araba.fiyat + noterUcreti + sigortaVeMtvUcreti;
    if (paramiz >= toplamMaliyet) {
        oyunSesi('kasa'); paramiz -= toplamMaliyet; toplamGider += toplamMaliyet; araba.tamirDurumu = 0; garaj.push(araba); arabalar = arabalar.filter(a => a.id !== arabaId); 
        ekraniGuncelle(); arabalariEkranaGetir(); oyunuKaydet(); telefonuKapat(); ozelUyari(`Araç garaja çekildi!\nNoter: ${noterUcreti.toLocaleString('tr-TR')} ₺\nSigorta/MTV: ${sigortaVeMtvUcreti.toLocaleString('tr-TR')} ₺`, "basari");
    } else { 
        oyunSesi('hata'); document.getElementById('tel-diyalog').innerHTML = `<span style="color:#e74c3c;">"Kardeşim araba + noter + sigorta parası çıkışmıyor sende, vaktimi alma!"</span>`; document.getElementById('tel-aksiyonlar').style.display = 'none';
    }
}

function garajiEkranaGetir() {
    const garajListesi = document.getElementById('garaj-listesi'); const bilgiMesaji = document.getElementById('garaj-bilgi');
    garajListesi.innerHTML = '';
    if (garaj.length === 0) { bilgiMesaji.style.display = 'block'; } else {
        bilgiMesaji.style.display = 'none';
        garaj.forEach(araba => {
            if (araba.tamirDurumu > 0) {
                garajListesi.innerHTML += `
                    <div class="ilan-karti" style="opacity:0.8; border-left:5px solid #e67e22;">
                        <div class="araba-foto"><img src="${araba.gorsel}" style="width:100%; height:100%; object-fit:cover; border-radius:8px;"></div>
                        <div class="ilan-detay">
                            <h3 class="ilan-baslik">${araba.marka} ${araba.model} (Sanayide)</h3>
                            <div class="ilan-ozellikler"><span>🗓️ <strong>${araba.yil}</strong></span><span>🛣️ <strong>${araba.km.toLocaleString('tr-TR')}</strong> KM</span></div>
                            <div style="margin-top:8px; color:#e67e22; font-size:14px; font-weight: bold;">🛠️ Kaportacıda Yatıyor...</div>
                        </div>
                        <div class="ilan-sag-taraf" style="justify-content:center;">
                            <span style="font-size:18px; font-weight:bold; color:#2d3436; text-align:center;">⏳ Kalan:<br>${araba.tamirDurumu} Gün</span>
                        </div>
                    </div>`;
            } else {
                let teklifSayisi = araba.teklifler ? araba.teklifler.length : 0; let teklifUyari = teklifSayisi > 0 ? `<span style="color:#00b894; font-weight:bold;">🔥 ${teklifSayisi} Yeni Teklif!</span>` : `<span style="color:#e67e22;">Teklif Bekleniyor...</span>`;
                let hasarMetni = araba.hasarli ? '<span class="etiket etiket-kirmizi">Ağır Hasarlı</span>' : '<span class="etiket etiket-yesil">Sorunsuz</span>';
                let tamirButonuKodu = araba.hasarli ? `<button class="btn btn-turuncu" style="margin-bottom:5px;" onclick="tamirEt(${araba.id})">🛠️ Sanayiye Ver (${araba.tamirMasrafi.toLocaleString('tr-TR')} ₺)</button>` : '';
                let modifiyeEtiketleri = ''; araba.modifiyeler.forEach(mod => { modifiyeEtiketleri += `<span class="etiket" style="background:#2d3436; margin-right:5px;">${mod}</span>`; });

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
            }
        });
    }
}

function tamirEt(arabaId) {
    const araba = garaj.find(a => a.id === arabaId);
    if (paramiz >= araba.tamirMasrafi) {
        oyunSesi('tamir'); paramiz -= araba.tamirMasrafi; toplamGider += araba.tamirMasrafi; araba.tamirDurumu = Math.floor(Math.random() * 3) + 2; araba.teklifler = []; 
        ekraniGuncelle(); garajiEkranaGetir(); oyunuKaydet(); ozelUyari(`Araç kaportacıya bırakıldı. Usta ${araba.tamirDurumu} gün sonra teslim edeceğini söyledi.`, "basari");
    } else { oyunSesi('hata'); ozelUyari("Ustanın parasını peşin vermen lazım, kasanda para yok!", "hata"); }
}

function modifiyeEkraniAc(arabaId) {
    const araba = garaj.find(a => a.id === arabaId); const modListesi = document.getElementById('modifiye-listesi'); modListesi.innerHTML = ''; let yapilacakModKaldimi = false;
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
    const araba = garaj.find(a => a.id === arabaId); const paket = modifiyePaketleri.find(p => p.id === paketId);
    if (paramiz >= paket.maliyet) {
        oyunSesi('tamir'); paramiz -= paket.maliyet; toplamGider += paket.maliyet; araba.fiyat += paket.degerArtisi; araba.modifiyeler.push(paket.isim);
        ekraniGuncelle(); garajiEkranaGetir(); modaliKapat('modifiye-modal'); oyunuKaydet(); ozelUyari(`${paket.isim} araca başarıyla eklendi. Aracın değeri uçtu!`, "basari");
    } else { oyunSesi('hata'); ozelUyari(`Bu modifiyeyi yapmak için kasanızda yeterli para yok.`, "hata"); }
}

function araciSat(arabaId) {
    const araba = garaj.find(a => a.id === arabaId); const listeHTML = document.getElementById('teklif-listesi');
    listeHTML.innerHTML = `<p style="color: #636e72; margin-bottom: 20px; font-size: 15px;">Aracın Sana Maliyeti: <strong style="color: #2d3436;">${araba.fiyat.toLocaleString('tr-TR')} TL</strong></p>`;

    if (!araba.teklifler || araba.teklifler.length === 0) { listeHTML.innerHTML += `<p style="text-align:center; color:#e74c3c; font-weight:bold; padding:20px;">Henüz teklif yok. Sonraki Gün'e geçerek müşteri bekle.</p>`; } 
    else {
        let siraliTeklifler = araba.teklifler.sort((a,b) => b.fiyat - a.fiyat);
        siraliTeklifler.forEach(teklif => {
            let kalanGun = 3 - (gun - teklif.gelisGunu); let musteriEtiketi = ""; let teklifGorunumu = `${teklif.fiyat.toLocaleString('tr-TR')} ₺`;
            if (teklif.tip === "Tayfa") { musteriEtiketi = `<span class="etiket" style="background: #2c3e50; color:#f1c40f;">🔊 Piyasa Tayfası</span>`; teklifGorunumu = `${teklif.fiyat.toLocaleString('tr-TR')} ₺ <br><span style="font-size:11px; color:#636e72;">(Motive çalarak yanaştı)</span>`; } 
            else if (teklif.tip === "Olucu") { musteriEtiketi = `<span class="etiket etiket-kirmizi">💀 Ölücü</span>`; } 
            else if (teklif.tip === "Takas") { musteriEtiketi = `<span class="etiket etiket-yesil">🔄 Takasçı</span>`; teklifGorunumu = `<span style="font-size:14px; color:#636e72;">${teklif.takasArac.marka} ${teklif.takasArac.model} +</span><br>${teklif.fiyat.toLocaleString('tr-TR')} ₺`; }

            listeHTML.innerHTML += `
                <div class="teklif-karti" id="${teklif.id}">
                    <div style="text-align: left;">
                        <span style="color: #0984e3; font-weight: 700; font-size: 16px;">👤 ${teklif.musteri}</span> ${musteriEtiketi}
                        <span style="font-size:12px; color:#b2bec3; margin-left:10px;">(⏱️ ${kalanGun} Gün)</span><br>
                        <span style="font-size: 20px; color: #00b894; font-weight: 700;">${teklifGorunumu}</span>
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
    const araba = garaj.find(a => a.id === arabaId); const teklifIndex = araba.teklifler.findIndex(t => t.id === teklifId); const teklif = araba.teklifler[teklifIndex]; const kart = document.getElementById(teklifId);
    if (teklif.tip === "Olucu") { oyunSesi('hata'); araba.teklifler.splice(teklifIndex, 1); oyunuKaydet(); kart.innerHTML = `<div style="text-align: center; width: 100%; padding: 10px 0;"><span style="color: #d63031; font-weight: 700;">"Bu hurdaya o parayı vereceğime gider bisiklet alırım lan!" 😡<br>(Müşteri küfredip gitti)</span></div>`; return; }

    if (Math.random() > 0.5) {
        const artisOrani = (Math.floor(Math.random() * 8) + 5) / 100; teklif.fiyat = Math.floor(teklif.fiyat * (1 + artisOrani)); oyunSesi('kasa'); oyunuKaydet();
        let teklifGorunumu = teklif.tip === "Takas" ? `<span style="font-size:14px; color:#636e72;">${teklif.takasArac.marka} ${teklif.takasArac.model} +</span><br>${teklif.fiyat.toLocaleString('tr-TR')} ₺` : `${teklif.fiyat.toLocaleString('tr-TR')} ₺`;
        kart.innerHTML = `<div style="text-align: left;"><span style="color: #0984e3; font-weight: 700; font-size: 16px;">👤 ${teklif.musteri} (İkna Oldu!)</span><br><span style="font-size: 20px; color: #00b894; font-weight: 700;">${teklifGorunumu}</span></div><button class="btn btn-yesil" style="width: auto; margin:0;" onclick="teklifiKabulEt(${arabaId}, '${teklif.id}')">Kabul Et</button>`;
    } else { oyunSesi('hata'); araba.teklifler.splice(teklifIndex, 1); oyunuKaydet(); kart.innerHTML = `<div style="text-align: center; width: 100%; padding: 10px 0;"><span style="color: #d63031; font-weight: 700;">Müşteri sinirlendi ve gitti! 😡</span></div>`; }
}

function teklifiKabulEt(arabaId, teklifId) {
    const araba = garaj.find(a => a.id === arabaId); const teklif = araba.teklifler.find(t => t.id === teklifId); let netKazanc = teklif.fiyat - noterUcreti; 
    modaliKapat('teklif-modal'); oyunSesi('kasa'); paramiz += netKazanc; toplamGelir += netKazanc; toplamGider += noterUcreti; toplamSatilanArac++; garaj = garaj.filter(a => a.id !== arabaId); 

    if (teklif.tip === "Takas") {
        if (garaj.length >= aracKapasitesi) { ozelUyari(`Araç satıldı ama TAKAS edilen aracı koyacak yerin yok! Arabayı sokakta bıraktın (Çalındı).`, "hata"); } 
        else { garaj.push(teklif.takasArac); ozelUyari(`Takas Başarılı!\nÜste Alınan Nakit: ${netKazanc.toLocaleString('tr-TR')} TL.\nTakasla gelen ${teklif.takasArac.marka} garaja çekildi.`, "basari"); }
    } else { ozelUyari(`Araç Satıldı!\nNet Kasa Girişi: ${netKazanc.toLocaleString('tr-TR')} TL.`, "basari"); }
    ekraniGuncelle(); garajiEkranaGetir(); oyunuKaydet();
}

function dukkanEkraniniGuncelle() {
    const mevcutSeviyeBilgi = seviyeler[dukkanSeviyesi - 1]; document.getElementById('dukkan-isim').innerText = `${mevcutSeviyeBilgi.isim} (Seviye ${mevcutSeviyeBilgi.seviye})`; document.getElementById('dukkan-kapasite').innerText = mevcutSeviyeBilgi.kapasite === 999 ? "Sınırsız Araç" : `${mevcutSeviyeBilgi.kapasite} Araç`;
    const yukseltmeAlani = document.getElementById('yukseltme-alani');
    if (dukkanSeviyesi < seviyeler.length) {
        const sonrakiSeviye = seviyeler[dukkanSeviyesi]; yukseltmeAlani.style.display = 'block'; document.getElementById('yeni-seviye-isim').innerText = `${sonrakiSeviye.isim} (${sonrakiSeviye.kapasite === 999 ? "Sınırsız" : sonrakiSeviye.kapasite} Araç Kapasitesi)`; document.getElementById('yeni-seviye-fiyat').innerText = `${sonrakiSeviye.fiyat.toLocaleString('tr-TR')} TL`;
    } else { yukseltmeAlani.innerHTML = `<h3 style="color: #27ae60;">🎉 Maksimum seviyedesin! Şehrin en büyük galerisi sensin.</h3>`; }
}

function dukkaniYukselt() {
    if (dukkanSeviyesi >= seviyeler.length) return; const sonrakiSeviye = seviyeler[dukkanSeviyesi];
    if (paramiz >= sonrakiSeviye.fiyat) { oyunSesi('tamir'); paramiz -= sonrakiSeviye.fiyat; toplamGider += sonrakiSeviye.fiyat; dukkanSeviyesi++; aracKapasitesi = sonrakiSeviye.kapasite; ekraniGuncelle(); dukkanEkraniniGuncelle(); oyunuKaydet(); ozelUyari(`Dükkanını "${sonrakiSeviye.isim}" seviyesine yükselttin. Kira giderin artık aylık ${sonrakiSeviye.kira.toLocaleString('tr-TR')} ₺ olacak.`, "basari"); } 
    else { oyunSesi('hata'); ozelUyari("Dükkanı büyütmek için kasanda yeterli para yok!", "hata"); }
}

function istatistikleriGuncelle() {
    document.getElementById('ist-satilan').innerText = toplamSatilanArac; document.getElementById('ist-gelir').innerText = toplamGelir.toLocaleString('tr-TR'); document.getElementById('ist-gider').innerText = toplamGider.toLocaleString('tr-TR');
    let netKar = toplamGelir - toplamGider; const netGosterge = document.getElementById('ist-net'); netGosterge.innerText = netKar.toLocaleString('tr-TR'); if (netKar < 0) { netGosterge.style.color = '#d63031'; } else { netGosterge.style.color = '#00b894'; }
}

// ----------------------------------------------------
// SOSYAL MEDYA 2.0 FONKSİYONLARI (LINÇ, MAVİ TİK, TROLLER)
// ----------------------------------------------------
function sosyalEkraniGuncelle() {
    if (!sosyalMedya.aktif) {
        document.getElementById('sosyal-kurulum').style.display = 'block'; document.getElementById('sosyal-yonetim').style.display = 'none';
    } else {
        document.getElementById('sosyal-kurulum').style.display = 'none'; document.getElementById('sosyal-yonetim').style.display = 'block';
        document.getElementById('profil-ad').innerHTML = sosyalMedya.kullaniciAdi + (sosyalMedya.maviTik ? ' <span style="color:#00d2d3; background:white; border-radius:50%; font-size:16px; padding:2px;">☑️</span>' : '');
        document.getElementById('profil-platform').innerText = sosyalMedya.platform;
        document.getElementById('profil-takipci').innerText = Math.floor(sosyalMedya.takipci).toLocaleString('tr-TR');
        
        let lincUyarisi = document.getElementById('sosyal-linc-uyari');
        if (gun < sosyalMedya.lincBitisGunu) {
            lincUyarisi.style.display = 'block';
            document.getElementById('linc-kalan').innerText = (sosyalMedya.lincBitisGunu - gun);
        } else { lincUyarisi.style.display = 'none'; }
        
        dmKutusunuEkranaBas();
    }
}

function sosyalHesapAc() {
    let ka = document.getElementById('sm-kullanici-adi').value; let plat = document.getElementById('sm-platform').value;
    if (ka.trim() === "") { ozelUyari("Geçerli bir kullanıcı adı girin.", "hata"); return; }
    sosyalMedya.aktif = true; sosyalMedya.platform = plat; sosyalMedya.kullaniciAdi = ka.startsWith('@') ? ka : '@' + ka; sosyalMedya.takipci = Math.floor(Math.random() * 50) + 10; 
    oyunSesi('kasa'); oyunuKaydet(); sosyalEkraniGuncelle(); ozelUyari(`Hayırlı olsun! ${plat} hesabın açıldı. Artık dijitaldesin.`, "basari");
}

function maviTikAl() {
    if(sosyalMedya.maviTik) return ozelUyari("Zaten Mavi Tik sahibisin! Daha ne kadar doğrulanacaksın?", "bilgi");
    if(paramiz < 25000) return ozelUyari("Mavi tik almak için hesabında 25.000 TL nakit olmalı.", "hata");
    paramiz -= 25000; toplamGider += 25000; sosyalMedya.maviTik = true;
    oyunSesi('kasa'); sosyalEkraniGuncelle(); ekraniGuncelle(); oyunuKaydet();
    ozelUyari("Hesabın doğrulandı! (☑️ Mavi Tik eklendi). Artık sana daha ciddi müşteriler DM atacak.", "basari");
}

function cekilisYap() {
    if (gun < sosyalMedya.lincBitisGunu) return ozelUyari("Şu an linç yiyorsun! Çekiliş yaparsan daha çok küfür yersin, biraz bekle.", "hata");
    if (paramiz < 80000) return ozelUyari("Kardeşim iPhone dağıtacak 80.000 TL paran yok ki!", "hata");
    
    paramiz -= 80000; toplamGider += 80000;
    if (Math.random() < 0.15) { // %15 İFŞA VE LİNÇ
        oyunSesi('hata');
        let kayip = Math.floor(sosyalMedya.takipci * 0.40); sosyalMedya.takipci -= kayip; sosyalMedya.lincBitisGunu = gun + 5;
        ozelUyari(`🚨 SKANDAL! "iPhone'u yan sanayi hesaba verdin" diyerek seni ifşa ettiler. Linç yiyorsun! ${kayip.toLocaleString('tr-TR')} takipçi kaybettin. 5 gün boyunca DM gelmeyecek.`, "hata");
    } else {
        oyunSesi('kasa');
        let kazanilan = Math.floor(Math.random() * 25000) + 10000; sosyalMedya.takipci += kazanilan; sosyalMedya.populerlik += 10;
        ozelUyari(`🎉 Çekiliş çok başarılı geçti! ${kazanilan.toLocaleString('tr-TR')} yeni takipçi kazandın. Profilin alev alev!`, "basari");
    }
    sosyalEkraniGuncelle(); ekraniGuncelle(); oyunuKaydet();
}

function postIcinArabaSec() {
    if (garaj.length === 0) return ozelUyari("Garajda araba yok ki videosunu çekip paylaşasın!", "hata");
    if (paramiz < 1500) return ozelUyari("Video prodüksiyonu ve boostlamak için 1.500 TL lazım.", "hata");
    
    const liste = document.getElementById('post-araba-listesi'); liste.innerHTML = '';
    garaj.forEach(araba => {
        liste.innerHTML += `
            <div class="ilan-karti" style="cursor:pointer;" onclick="arabaPostla(${araba.id})">
                <div class="araba-foto"><img src="${araba.gorsel}" style="width:100%; height:100%; object-fit:cover; border-radius:8px;"></div>
                <div class="ilan-detay"><h3 class="ilan-baslik">${araba.marka} ${araba.model}</h3></div>
                <button class="btn btn-mavi" style="width:auto;">Seç ve Çek</button>
            </div>`;
    });
    document.getElementById('post-secim-modal').style.display = 'block';
}

function arabaPostla(arabaId) {
    modaliKapat('post-secim-modal'); paramiz -= 1500; toplamGider += 1500; oyunSesi('kasa');
    const araba = garaj.find(a => a.id === arabaId);
    
    // TAKİPÇİ HESAPLAMA (Arabanın değeri ve modifiyesine göre)
    let bazTakipci = Math.floor(araba.fiyat / 50000); 
    if (araba.modifiyeler.length > 0) bazTakipci *= 2; 
    let kazanilanTakipci = Math.floor(Math.random() * 200) + bazTakipci + 50;
    sosyalMedya.takipci += kazanilanTakipci; sosyalMedya.populerlik += 3;
    
    // TROLL YORUMLARI ÜRETME
    let yorumlarHTML = ""; let yorumSayisi = Math.floor(Math.random() * 3) + 2;
    for(let i=0; i<yorumSayisi; i++) {
        let isim = "@" + musteriIsimleri[Math.floor(Math.random()*musteriIsimleri.length)].toLowerCase() + Math.floor(Math.random()*99);
        let metin = "";
        if (araba.hasarli && Math.random() > 0.4) {
            metin = ["Şasesi işlemli duruyor ustam yeme bizi.", "O paraya hasar kayıtlısını alırsın anca.", "Tavan değişmiş diyorlar doğru mu?", "Macun yığını maşallah."][Math.floor(Math.random()*4)];
        } else if (araba.modifiyeler.length >= 2) {
            metin = ["Ateş ediyor maşallah 🔥", "Konum at geleyim reis", "Yazılım kimin abi çok iyi kesiciye giriyor", "Bebekler bebeği harbiden."][Math.floor(Math.random()*4)];
        } else {
            metin = ["O paraya sıfır Egea alırım reis", "Piyasa çok durgun, yatıyor mu bu hala?", "Temiz duruyor hayırlı satışlar", "Son ne olur abi nakit hazır?"][Math.floor(Math.random()*4)];
        }
        yorumlarHTML += `<div style="background:#f1f2f6; padding:10px; border-radius:8px; margin-bottom:8px; font-size:13px;"><strong style="color:#0984e3;">${isim}</strong>: ${metin}</div>`;
    }
    
    document.getElementById('post-yorumlar').innerHTML = yorumlarHTML;
    document.getElementById('post-sonuc-takipci').innerText = `+${kazanilanTakipci.toLocaleString('tr-TR')} Takipçi`;
    document.getElementById('post-sonuc-modal').style.display = 'block';
    
    sosyalEkraniGuncelle(); ekraniGuncelle(); oyunuKaydet();
}

function influencerReklamVer() {
    if (paramiz < 50000) { ozelUyari("Fenomenlere yedirecek 50.000 TL paran yok!", "hata"); return; }
    paramiz -= 50000; toplamGider += 50000;
    let kazanilanTakipci = Math.floor(Math.random() * 8000) + 2000; sosyalMedya.takipci += kazanilanTakipci; sosyalMedya.populerlik += 15;
    oyunSesi('kasa'); ekraniGuncelle(); sosyalEkraniGuncelle(); oyunuKaydet();
    ozelUyari(`Şehrin en ünlü influencer'ı dükkana gelip story attı! İnanılmaz bir etkileşim aldın, ${kazanilanTakipci.toLocaleString('tr-TR')} takipçi geldi!`, "basari");
}

function dmKutusunuEkranaBas() {
    const kutu = document.getElementById('dm-kutusu'); kutu.innerHTML = '';
    if (dmKutusu.length === 0) { kutu.innerHTML = '<p style="text-align:center; color:#b2bec3;">Mesaj kutun şu an boş.</p>'; return; }
    dmKutusu.forEach((mesaj, index) => {
        kutu.innerHTML += `
            <div class="ilan-karti" style="border-left: 5px solid #0984e3;">
                <div class="ilan-detay">
                    <div style="font-weight: bold; color: #2d3436;">📩 ${mesaj.gonderen}</div>
                    <div style="font-size: 13px; color: #636e72; margin-top: 5px;">"${mesaj.metin}"</div>
                    <div style="font-size: 16px; font-weight: bold; color: #00b894; margin-top: 8px;">Teklif: ${mesaj.teklifFiyat.toLocaleString('tr-TR')} ₺</div>
                </div>
                <div class="ilan-sag-taraf">
                    <button class="btn btn-yesil" style="margin-bottom:5px;" onclick="dmTeklifKabul(${index}, ${mesaj.arabaId})">Satışı Onayla</button>
                    <button class="btn btn-kirmizi" onclick="dmSil(${index})">Sil</button>
                </div>
            </div>`;
    });
}

function dmSil(index) { dmKutusu.splice(index, 1); oyunSesi('hata'); dmKutusunuEkranaBas(); oyunuKaydet(); }
function dmTeklifKabul(dmIndex, arabaId) {
    const arabaIndex = garaj.findIndex(a => a.id === arabaId);
    if (arabaIndex === -1) { ozelUyari("Müşterinin istediği bu araç artık garajında değil!", "hata"); dmSil(dmIndex); return; }
    
    let mesaj = dmKutusu[dmIndex]; let netKazanc = mesaj.teklifFiyat - noterUcreti;
    paramiz += netKazanc; toplamGelir += netKazanc; toplamGider += noterUcreti; toplamSatilanArac++;
    garaj.splice(arabaIndex, 1); dmKutusu.splice(dmIndex, 1);
    
    oyunSesi('kasa'); ekraniGuncelle(); garajiEkranaGetir(); sosyalEkraniGuncelle(); oyunuKaydet();
    ozelUyari(`DM üzerinden satış tamamlandı! ${mesaj.gonderen} aracı aldı.\nNet Kasa Girişi: ${netKazanc.toLocaleString('tr-TR')} TL.`, "basari");
}

function oyunuBaslat() { if (!oyunuYukle()) { document.getElementById('baslangic-modal').style.display = 'block'; } else { document.getElementById('header-logo').innerHTML = `${galeriAdi}<span>Motors</span>`; ekraniGuncelle(); } }
function galeriAdiniKaydet() {
    let girilenAd = document.getElementById('galeri-adi-input').value; if (girilenAd.trim() === "") { ozelUyari("Lütfen galeriniz için bir isim girin!", "hata"); return; }
    galeriAdi = girilenAd; document.getElementById('baslangic-modal').style.display = 'none'; document.getElementById('header-logo').innerHTML = `${galeriAdi}<span>Motors</span>`;
    piyasayiYenile(); oyunuKaydet(); ekraniGuncelle();
}

oyunuBaslat();