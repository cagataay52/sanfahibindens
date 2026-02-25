function ozelUyari(mesaj, tip = 'bilgi') {
    try {
        const modal = document.getElementById('uyari-modal'); if(!modal) return;
        const icerik = modal.querySelector('.uyari-icerik');
        const ikon = document.getElementById('uyari-ikon');
        const baslik = document.getElementById('uyari-baslik');
        const mesajAlani = document.getElementById('uyari-mesaj');

        icerik.className = 'modal-icerik uyari-icerik'; 
        if (tip === 'hata') { icerik.classList.add('uyari-hata'); ikon.innerText = '❌'; baslik.innerText = 'İşlem Başarısız'; baslik.style.color = '#d63031'; } 
        else if (tip === 'basari') { icerik.classList.add('uyari-basarili'); ikon.innerText = '✅'; baslik.innerText = 'Tebrikler!'; baslik.style.color = '#00b894'; } 
        else { icerik.classList.add('uyari-bilgi'); ikon.innerText = 'ℹ️'; baslik.innerText = 'Bilgilendirme'; baslik.style.color = '#0984e3'; }

        mesajAlani.innerText = mesaj; modal.style.display = 'block';
    } catch(e) { alert(mesaj); }
}

function uyariyiKapat() { document.getElementById('uyari-modal').style.display = 'none'; }
function modaliKapat(modalId) { let m = document.getElementById(modalId); if(m) m.style.display = "none"; }
function ayarlarModalAc() { document.getElementById('ayarlar-modal').style.display = "block"; }
function mobilMenuKapatAc() { document.querySelector('.sol-menu').classList.toggle('acik'); document.getElementById('mobil-menu-overlay').classList.toggle('acik'); }

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
function oyunSesi(tip) {
    try {
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
    } catch(e) {}
}

let galeriAdi = "Benim"; let paramiz = 15000000; let bankaBorcu = 0; let garaj = []; let gun = 1; let idSayaci = 1; 
let toplamSatilanArac = 0; let toplamGelir = 0; let toplamGider = 0; let dukkanSeviyesi = 1; let aracKapasitesi = 2;
let arabalar = []; let hakanAbiSonKullanim = -15; const noterUcreti = 2500; 

let piyasaDurumu = "Normal"; let piyasaCarpani = 1.0; let aylikFaturalar = 4500; let sigortaVeMtvUcreti = 4000;
let haritaPuani = 5.0; let gizliKusurluAraclar = []; 
let euroKuru = 38.50; let euroBakiye = 0; let senetler = [];
let rentACarFilosu = []; let personeller = { usta: false, smUzman: false, satisTemsilci: false };
let sosyalMedya = { aktif: false, platform: "", kullaniciAdi: "", takipci: 0, populerlik: 0, maviTik: false, lincKalanGun: 0 };
let dmKutusu = [];

// Canlı Yayın Değişkenleri
let yayinInterval = null; let anlikIzleyici = 0; let anlikEnYuksekTeklif = 0; let yayindakiAraba = null; let yayindakiTeklifci = ""; let yayinTuruHype = 1.0;

// İhale Sistemi Değişkenleri
let ihaleInterval = null; let ihaleAraba = null; let ihaleFiyat = 0; let ihaleBizdeMi = false; let ihaleKapanmaSayaci = 0;

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

const musteriIsimleri = ["Ahmet Bey", "Mehmet Bey", "Ayşe Hanım", "Can", "Zeynep", "Burak", "Kemal Abi", "Elif Hanım", "Mert", "Selin", "Mahmut Usta", "Şahin", "user3182", "tayfa_01", "anonim_boss"];

const aracSablonlari = [
    { marka: "BMW", model: "320i", tabanFiyat: 3800000, gorsel: "img/bmw-320i.jpg" },
    { marka: "Mercedes", model: "C200", tabanFiyat: 4100000, gorsel: "img/mercedes-c200.jpg" },
    { marka: "Audi", model: "A3", tabanFiyat: 2400000, gorsel: "img/audi-a3.jpg" },
    { marka: "Volkswagen", model: "Golf", tabanFiyat: 1850000, gorsel: "img/golf.jpg" },
    { marka: "Renault", model: "Megane", tabanFiyat: 1400000, gorsel: "img/megane.jpg" }, 
    { marka: "Fiat", model: "Egea", tabanFiyat: 1100000, gorsel: "img/egea.jpg" },
    { marka: "Toyota", model: "Corolla", tabanFiyat: 1550000, gorsel: "img/corolla.jpg" },
    { marka: "Honda", model: "Civic", tabanFiyat: 1750000, gorsel: "img/civic.jpg" },
    { marka: "Citroën", model: "C3 Aircross", tabanFiyat: 1350000, gorsel: "img/egea.jpg" }
];

function oyunuKaydet() {
    const kayitData = { galeriAdi, paramiz, bankaBorcu, garaj, gun, dukkanSeviyesi, aracKapasitesi, toplamSatilanArac, toplamGelir, toplamGider, arabalar, idSayaci, hakanAbiSonKullanim, piyasaDurumu, piyasaCarpani, sosyalMedya, dmKutusu, haritaPuani, gizliKusurluAraclar, euroKuru, euroBakiye, senetler, rentACarFilosu, personeller };
    localStorage.setItem('sahibindenMotorsKayit', JSON.stringify(kayitData));
}

function oyunuYukle() {
    const eskiKayit = JSON.parse(localStorage.getItem('sahibindenMotorsKayit'));
    if (eskiKayit && eskiKayit.galeriAdi) {
        galeriAdi = eskiKayit.galeriAdi; paramiz = eskiKayit.paramiz || 0; bankaBorcu = eskiKayit.bankaBorcu || 0; garaj = eskiKayit.garaj || []; gun = eskiKayit.gun || 1; dukkanSeviyesi = eskiKayit.dukkanSeviyesi || 1; aracKapasitesi = eskiKayit.aracKapasitesi || 2; toplamSatilanArac = eskiKayit.toplamSatilanArac || 0; toplamGelir = eskiKayit.toplamGelir || 0; toplamGider = eskiKayit.toplamGider || 0; arabalar = eskiKayit.arabalar || []; idSayaci = eskiKayit.idSayaci || 1; hakanAbiSonKullanim = eskiKayit.hakanAbiSonKullanim || -15; piyasaDurumu = eskiKayit.piyasaDurumu || "Normal"; piyasaCarpani = eskiKayit.piyasaCarpani || 1.0; haritaPuani = eskiKayit.haritaPuani || 5.0; gizliKusurluAraclar = eskiKayit.gizliKusurluAraclar || []; euroKuru = eskiKayit.euroKuru || 38.50; euroBakiye = eskiKayit.euroBakiye || 0; senetler = eskiKayit.senetler || []; rentACarFilosu = eskiKayit.rentACarFilosu || []; personeller = eskiKayit.personeller || { usta: false, smUzman: false, satisTemsilci: false }; 
        sosyalMedya = eskiKayit.sosyalMedya || { aktif: false, platform: "", kullaniciAdi: "", takipci: 0, populerlik: 0, maviTik: false, lincKalanGun: 0 };
        if (typeof sosyalMedya.lincKalanGun === 'undefined') sosyalMedya.lincKalanGun = 0;
        dmKutusu = eskiKayit.dmKutusu || [];
        garaj.forEach(a => { if(a.tamirDurumu === undefined) a.tamirDurumu = 0; });
        document.getElementById('gun').innerText = gun; 
        return true; 
    }
    return false; 
}

function oyunuSifirlaEkrani() { if(confirm("Tüm ilerlemen silinecek. Oyuna baştan başlayacaksın. Emin misin?")) { localStorage.removeItem('sahibindenMotorsKayit'); location.reload(); } }

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
    let mesaj = `Kayıtlarımıza göre <b>${sasiNo}</b> şasi numaralı araçta `;
    if (hasarPuan === 0) return mesaj + `<b>HASAR KAYDI BULUNMAMIŞTIR.</b> B002`;
    let kazaSayisi = Math.floor(Math.random() * 3) + 1; 
    let toplamTramer = hasarPuan * (Math.floor(Math.random() * 15000) + 10000); 
    if (tavanHasarliMi || hasarPuan > 15) return mesaj + `<b>AĞIR HASAR KAYDI (ÇARPMA)</b> bulunmuştur. Toplam: <b>${toplamTramer.toLocaleString('tr-TR')} TL</b>. B002`;
    return mesaj + `<b>${kazaSayisi} adet</b> kazaya karışmıştır. Toplam: <b>${toplamTramer.toLocaleString('tr-TR')} TL</b>. B002`;
}

function aciklamaUret(ekspertizPuan, km, marka) {
    if (ekspertizPuan === 0 && km < 50000) return `Kapalı garaj arabasıdır. Nokta hatasızdır.`;
    if (ekspertizPuan === 0) return `Motoru kusursuzdur. Yaşına göre ufak tefek çizikleri var.`;
    if (ekspertizPuan < 5) return `Araçta sadece temizlik boyaları mevcuttur. Şase işlemsizdir.`;
    return `Araç ağır hasar kayıtlıdır. Takıntısı olan aramasın.`;
}

function rastgeleArabaUret() {
    const sablon = aracSablonlari[Math.floor(Math.random() * aracSablonlari.length)];
    const yil = Math.floor(Math.random() * (2026 - 2020 + 1)) + 2020; 
    const km = ((2026 - yil) * Math.floor(Math.random() * 20000 + 10000)) + Math.floor(Math.random() * 15000);
    
    let degerKaybiOrani = ((2026 - yil) * 0.03) + ((km / 10000) * 0.015); 
    if (degerKaybiOrani > 0.40) degerKaybiOrani = 0.40; 
    let tabanHesap = sablon.tabanFiyat * (1 - degerKaybiOrani);

    let ekspertizVerisi = ekspertizUret();
    let hasarIndirimi = ekspertizVerisi.puan * 0.015; 
    if (hasarIndirimi > 0.50) hasarIndirimi = 0.50; 
    let fiyat = (tabanHesap * (1 - hasarIndirimi)) * piyasaCarpani;

    let agirHasarliMi = ekspertizVerisi.puan > 15 || ekspertizVerisi.detay['tavan'] === 'degisen';
    
    return { 
        id: idSayaci++, marka: sablon.marka, model: sablon.model, yil: yil, km: Math.floor(km), 
        fiyat: Math.floor(fiyat), hasarli: agirHasarliMi, tamirMasrafi: agirHasarliMi ? Math.floor(fiyat * 0.1) : 0, 
        modifiyeler: [], gorsel: sablon.gorsel, ekspertiz: ekspertizVerisi.detay, 
        ilanAciklamasi: aciklamaUret(ekspertizVerisi.puan, km, sablon.marka), teklifler: [], 
        telefon: '05' + Math.floor(Math.random() * 90000000 + 10000000), tramer: tramerUret(ekspertizVerisi.puan, agirHasarliMi), tamirDurumu: 0 
    };
}

function piyasayiYenile() { 
    arabalar = []; for(let i = 0; i < 4; i++) { arabalar.push(rastgeleArabaUret()); } 
}

function ekonomiOlayiTetikle() { 
    const sans = Math.random(); let eskiCarpan = piyasaCarpani; 
    let kurDegisimi = (Math.random() * 0.04) - 0.015; euroKuru = euroKuru * (1 + kurDegisimi); if(euroKuru < 20) euroKuru = 20; 
    if (sans < 0.05 && piyasaDurumu !== "Kriz") { piyasaDurumu = "Kriz"; piyasaCarpani = 0.85; euroKuru *= 1.10; oyunSesi('hata'); ozelUyari("📉 FLAŞ HABER: Kriz! Araç fiyatları düştü, Euro fırladı!", "hata"); } 
    else if (sans > 0.95 && piyasaDurumu !== "Canli") { piyasaDurumu = "Canli"; piyasaCarpani = 1.20; euroKuru *= 0.95; oyunSesi('kasa'); ozelUyari("📈 FLAŞ HABER: Kredi kampanyası! Fiyatlar fırladı!", "basari"); } 
    else if (sans > 0.40 && sans < 0.45 && piyasaDurumu !== "Normal") { piyasaDurumu = "Normal"; piyasaCarpani = 1.0; } 
    if (eskiCarpan !== piyasaCarpani) { let degisimOrani = piyasaCarpani / eskiCarpan; garaj.forEach(araba => { araba.fiyat = Math.floor(araba.fiyat * degisimOrani); araba.teklifler = []; }); } 
}

function sonrakiGun() {
    try {
        gun++; let g = document.getElementById('gun'); if(g) g.innerText = gun;
        
        // YEDİEMİN İHALESİ (HER 7 GÜNDE BİR TETİKLENİR)
        if (gun > 1 && gun % 7 === 0) {
            setTimeout(() => { ihaleHazirla(); }, 500);
        }
        
        if (sosyalMedya.aktif) {
            if (sosyalMedya.lincKalanGun > 0) { sosyalMedya.lincKalanGun--; } 
            else if (garaj.length > 0) {
                let dmIhtimali = (sosyalMedya.takipci / 50000) + (personeller.smUzman ? 0.25 : 0.10); if (dmIhtimali > 0.85) dmIhtimali = 0.85; 
                if (Math.random() < dmIhtimali) {
                    let sansliAraba = garaj[Math.floor(Math.random() * garaj.length)];
                    let teklif = Math.floor(Math.random() * ((sansliAraba.fiyat * 1.15) - (sansliAraba.fiyat * 0.95) + 1)) + (sansliAraba.fiyat * 0.95);
                    if(sosyalMedya.maviTik) teklif = Math.floor(teklif * 1.10);
                    dmKutusu.push({ gonderen: "@" + musteriIsimleri[Math.floor(Math.random() * musteriIsimleri.length)].toLowerCase() + Math.floor(Math.random()*99), metin: `Reis araba duruyor mu? Gelip alayım.`, teklifFiyat: teklif, arabaId: sansliAraba.id });
                }
            }
            if (personeller.smUzman) { sosyalMedya.takipci += Math.floor(Math.random() * 150) + 50; }
        }
        
        if (gun % 30 === 0) { 
            let guncelKira = seviyeler[dukkanSeviyesi - 1].kira; 
            let personelMaaslari = (personeller.usta ? 25000 : 0) + (personeller.smUzman ? 15000 : 0) + (personeller.satisTemsilci ? 30000 : 0); 
            let toplamAylikGider = guncelKira + aylikFaturalar + personelMaaslari; 
            paramiz -= toplamAylikGider; toplamGider += toplamAylikGider; 
            oyunSesi('hata'); ozelUyari(`📅 Ay sonu geldi! Giderler toplamı ${toplamAylikGider.toLocaleString('tr-TR')} ₺ kasadan çekildi.`, "bilgi"); 
        }
        
        if (bankaBorcu > 0) { let faizMiktari = Math.floor(bankaBorcu * 0.05); bankaBorcu += faizMiktari; toplamGider += faizMiktari; }
        
        ekonomiOlayiTetikle(); senetTahsilatiYap(); rentACarGelirVeRiskYonetimi();

        garaj.forEach(araba => {
            if (araba.tamirDurumu > 0) {
                araba.tamirDurumu--; 
                if (araba.tamirDurumu <= 0) { araba.tamirDurumu = 0; araba.hasarli = false; araba.fiyat += (araba.tamirMasrafi * 3); araba.tamirMasrafi = 0; oyunSesi('kasa'); ozelUyari(`🛠️ Usta: "Araban hazır usta."`, "basari"); } 
                else if (Math.random() < 0.20 && !personeller.usta) { let ekstra = Math.floor(araba.tamirMasrafi * 0.5); if (paramiz >= ekstra) { paramiz -= ekstra; toplamGider += ekstra; araba.tamirDurumu += 2; oyunSesi('hata'); ozelUyari(`📞 Hamza Usta: "Motorda sıkıntı çıktı. ${ekstra.toLocaleString('tr-TR')} ₺ daha kilitledim."`, "hata"); } }
            } else {
                if (!araba.teklifler) araba.teklifler = [];
                araba.teklifler = araba.teklifler.filter(t => (gun - t.gelisGunu) < 3);
                let teklifIhtimali = (piyasaDurumu === "Canli" ? 0.6 : (piyasaDurumu === "Kriz" ? 0.1 : 0.3)) + ((haritaPuani - 3.0) * 0.1); 
                if(teklifIhtimali < 0.05) teklifIhtimali = 0.05; 
                
                if (Math.random() < teklifIhtimali) {
                    let yeniTeklifSayisi = Math.floor(Math.random() * 2) + 1;
                    for(let i=0; i<yeniTeklifSayisi; i++) {
                        let musteriTipiRnd = Math.random(); let musteriTipi = "Normal"; let teklifTutari = 0; let takasArabasi = null;
                        if (araba.modifiyeler.length >= 3 && Math.random() < 0.40) { musteriTipi = "Tayfa"; teklifTutari = Math.floor(araba.fiyat * (Math.random() * 0.20 + 1.10)); } 
                        else if (musteriTipiRnd < 0.20) { musteriTipi = "Olucu"; teklifTutari = Math.floor(araba.fiyat * (Math.random() * 0.20 + 0.50)); } 
                        else if (musteriTipiRnd < 0.45) { musteriTipi = "Takas"; takasArabasi = rastgeleArabaUret(); if (takasArabasi.fiyat >= araba.fiyat) takasArabasi.fiyat = Math.floor(araba.fiyat * 0.6); teklifTutari = Math.floor((araba.fiyat - takasArabasi.fiyat) * (Math.random() * 0.2 + 0.9)); } 
                        else { let maxFiyat = araba.hasarli ? araba.fiyat * 0.95 : araba.fiyat * 1.20; teklifTutari = Math.floor(Math.random() * (maxFiyat - (araba.fiyat * 0.90) + 1)) + (araba.fiyat * 0.90); }
                        
                        if (personeller.satisTemsilci && musteriTipi === "Olucu") continue; 
                        
                        // Zengin musteri mantigi
                        if (teklifTutari > 2500000 && musteriTipi === "Normal") musteriTipi = "Zengin";

                        araba.teklifler.push({ id: 'tklf-' + Math.floor(Math.random() * 1000000), musteri: musteriIsimleri[Math.floor(Math.random() * musteriIsimleri.length)], fiyat: teklifTutari, gelisGunu: gun, tip: musteriTipi, takasArac: takasArabasi });
                    }
                }
            }
        });

    } catch(e) { console.error("Gün atlatma sisteminde hata:", e); } 
    finally { piyasayiYenile(); ekraniGuncelle(); aktifEkraniYenile(); oyunuKaydet(); }
}

function aktifEkraniYenile() {
    try {
        let pzr = document.getElementById('pazar-ekrani'); if(pzr && pzr.style.display === 'block') arabalariEkranaGetir();
        let grj = document.getElementById('garaj-ekrani'); if(grj && grj.style.display === 'block') garajiEkranaGetir();
        let dkn = document.getElementById('dukkan-ekrani'); if(dkn && dkn.style.display === 'block') dukkanEkraniniGuncelle();
        let bnk = document.getElementById('banka-ekrani'); if(bnk && bnk.style.display === 'block') { senetleriEkranaBas(); let kur = document.getElementById('euro-kur-ekran'); if(kur) kur.innerText = euroKuru.toFixed(2); let brc = document.getElementById('borc-miktari'); if(brc) brc.innerText = bankaBorcu.toLocaleString('tr-TR'); let dovizKutusu = bnk.querySelectorAll('.modern-kutu')[1]; if (dovizKutusu) { let icBakiye = document.getElementById('ic-euro-bakiye'); if(!icBakiye) { icBakiye = document.createElement('div'); icBakiye.id = 'ic-euro-bakiye'; icBakiye.style = "font-size: 16px; color: #27ae60; font-weight: bold; margin-bottom: 10px; padding: 5px; background: rgba(39, 174, 96, 0.1); border-radius: 5px;"; dovizKutusu.insertBefore(icBakiye, dovizKutusu.querySelector('div')); } icBakiye.innerText = `💶 Kasandaki Euro: ${Math.floor(euroBakiye).toLocaleString('tr-TR')} €`; } }
        let ist = document.getElementById('istatistik-ekrani'); if(ist && ist.style.display === 'block') istatistikleriGuncelle();
        let sos = document.getElementById('sosyal-ekrani'); if(sos && sos.style.display === 'block') sosyalEkraniGuncelle();
        let rnt = document.getElementById('rentacar-ekrani'); if(rnt && rnt.style.display === 'block') rentACarEkraniGuncelle();
        let prs = document.getElementById('personel-ekrani'); if(prs && prs.style.display === 'block') personelEkraniGuncelle();
    } catch(e) {}
}

function ekraniGuncelle() {
    let prm = document.getElementById('paramiz'); if(prm) prm.innerText = paramiz.toLocaleString('tr-TR');
    let kps = document.getElementById('kapasite-bilgi'); 
    if(kps) { let toplamAracSayisi = garaj.length + rentACarFilosu.length; kps.innerText = toplamAracSayisi + " / " + (aracKapasitesi === 999 ? "Sınırsız" : aracKapasitesi); kps.style.color = (toplamAracSayisi >= aracKapasitesi && aracKapasitesi !== 999) ? '#e74c3c' : '#0984e3'; }
    let hp = document.getElementById('harita-puan'); if(hp) hp.innerText = haritaPuani.toFixed(1);
    let eb = document.getElementById('euro-bakiye'); if(eb) eb.innerText = Math.floor(euroBakiye).toLocaleString('tr-TR');
}

function menuDegistir(menu) {
    document.querySelectorAll('.sayfa').forEach(s => s.style.display = 'none'); document.querySelectorAll('.sol-menu li').forEach(l => l.classList.remove('aktif'));
    let sayfa = document.getElementById(menu + '-ekrani'); if(sayfa) sayfa.style.display = 'block';
    let btn = document.getElementById('menu-' + menu); if(btn) btn.classList.add('aktif');
    aktifEkraniYenile();
    let sm = document.querySelector('.sol-menu'); if(sm) sm.classList.remove('acik'); let ov = document.getElementById('mobil-menu-overlay'); if(ov) ov.classList.remove('acik');
}

// ----------------------------------------------------
// V3.0 ÖZELLİKLERİ
// ----------------------------------------------------

// 1. YAPAY ZEKA MÜŞTERİ (AVATAR) SİSTEMİ EKLENDİ
function araciSat(id) { 
    const a = garaj.find(x => x.id === id); const lst = document.getElementById('teklif-listesi'); 
    lst.innerHTML = `<p>Maliyet: <b>${a.fiyat.toLocaleString('tr-TR')} TL</b></p>`; 
    if (!a.teklifler || a.teklifler.length === 0) { lst.innerHTML += `<p style="text-align:center; color:#e74c3c; font-weight:bold;">Henüz teklif yok.</p>`; } 
    else { 
        a.teklifler.sort((a,b) => b.fiyat - a.fiyat).forEach(t => { 
            let sF = Math.floor(t.fiyat * 1.30); 
            let kalanGun = 3 - (gun - t.gelisGunu);
            
            // GÖRSEL AVATAR ATAMALARI
            let avatarEmoji = "👤"; let avatarBg = "#0984e3"; let musteriEtiketi = "";
            let teklifGorunumu = `${t.fiyat.toLocaleString('tr-TR')} ₺`;
            
            if (t.tip === "Tayfa") { avatarEmoji = "😎"; avatarBg = "#2c3e50"; musteriEtiketi = `<span class="etiket" style="background: #2c3e50; color:#f1c40f;">🔊 Piyasa Tayfası</span>`; } 
            else if (t.tip === "Olucu") { avatarEmoji = "🤡"; avatarBg = "#e74c3c"; musteriEtiketi = `<span class="etiket etiket-kirmizi">💀 Ölücü</span>`; } 
            else if (t.tip === "Takas") { avatarEmoji = "🔄"; avatarBg = "#27ae60"; musteriEtiketi = `<span class="etiket etiket-yesil">🔄 Takasçı</span>`; teklifGorunumu = `<span style="font-size:14px; color:#636e72;">${t.takasArac.marka} +</span><br>${t.fiyat.toLocaleString('tr-TR')} ₺`; }
            else if (t.tip === "Zengin") { avatarEmoji = "🎩"; avatarBg = "#8e44ad"; musteriEtiketi = `<span class="etiket" style="background:#8e44ad;">💎 Elit Müşteri</span>`; }

            lst.innerHTML += `
            <div class="teklif-karti" id="${t.id}" style="align-items: flex-start;">
                <div style="display:flex; gap:15px; align-items:center; width: 100%;">
                    <div style="width:55px; height:55px; min-width:55px; border-radius:50%; background:${avatarBg}; display:flex; justify-content:center; align-items:center; font-size:28px; box-shadow:0 4px 10px rgba(0,0,0,0.2);">${avatarEmoji}</div>
                    <div style="text-align: left; flex:1;"> 
                        <span style="color: #2d3436; font-weight: 700; font-size: 16px;">${t.musteri}</span> ${musteriEtiketi} <span style="font-size:11px; color:#b2bec3;">(${kalanGun} Gün)</span><br> 
                        <span style="font-size: 20px; color: #00b894; font-weight: 700;">Nakit: ${teklifGorunumu}</span> 
                    </div>
                </div>
                <div style="display:flex; flex-direction:column; gap:5px; width:100%; margin-top:15px;">
                    <button class="btn btn-yesil" style="margin:0;" onclick="teklifiKabulEt(${id}, '${t.id}')">Nakit Sat</button>
                    <button class="btn" style="background:#8e44ad; color:white; margin:0;" onclick="senetleSat(${id}, '${t.id}', ${sF})">📝 Senetle (${sF.toLocaleString('tr-TR')} ₺)</button>
                    <button class="btn btn-turuncu" style="margin:0;" onclick="pazarlikYapp(${id}, '${t.id}')">Pazarlık Yap</button>
                </div>
            </div>`; 
        }); 
    } 
    document.getElementById('teklif-modal').style.display = "block"; 
}

// 2. YEDİEMİN YERALTI İHALESİ SİSTEMİ EKLENDİ
function ihaleHazirla() {
    if ((garaj.length + rentACarFilosu.length) >= aracKapasitesi) return; // Kapasite doluysa ihale açılmaz
    
    ihaleAraba = rastgeleArabaUret();
    // Araba gerçek değerinden bağımsız ihaleye çıkar. Gerçek ekspertiz saklanır.
    ihaleFiyat = Math.floor(ihaleAraba.fiyat * 0.25); // Çok ucuzdan açılır
    ihaleBizdeMi = false;
    ihaleKapanmaSayaci = 0;

    document.getElementById('ihale-araba-isim').innerText = `${ihaleAraba.marka} ${ihaleAraba.model} (${ihaleAraba.yil})`;
    document.getElementById('ihale-guncel-teklif').innerText = ihaleFiyat.toLocaleString('tr-TR');
    document.getElementById('ihale-teklif-sahibi').innerText = "Başlangıç Bedeli";
    
    document.getElementById('ihale-modal').style.display = 'block';
    
    if(ihaleInterval) clearInterval(ihaleInterval);
    ihaleInterval = setInterval(ihaleDongusu, 2000);
}

function ihaleDongusu() {
    if (ihaleKapanmaSayaci >= 3) { ihaleBitir(); return; }

    let npcMaxLimit = ihaleAraba.fiyat * 0.85; // NPC gerçek fiyatın %85'ine kadar çıkabilir
    
    if (!ihaleBizdeMi && Math.random() < 0.65 && ihaleFiyat < npcMaxLimit) {
        let artis = Math.floor(Math.random() * 3) * 10000 + 10000; // 10k, 20k veya 30k artır
        ihaleFiyat += artis;
        ihaleBizdeMi = false;
        ihaleKapanmaSayaci = 0;
        oyunSesi('hata'); // Saat sesi gibi
        document.getElementById('ihale-guncel-teklif').innerText = ihaleFiyat.toLocaleString('tr-TR');
        document.getElementById('ihale-teklif-sahibi').innerText = "Rakip Galeri: " + musteriIsimleri[Math.floor(Math.random()*musteriIsimleri.length)];
    } else {
        ihaleKapanmaSayaci++;
        if (ihaleKapanmaSayaci === 1) document.getElementById('ihale-teklif-sahibi').innerText += " (Satıyorum...)";
        if (ihaleKapanmaSayaci === 2) document.getElementById('ihale-teklif-sahibi').innerText += " (Sattıııım...)";
    }
}

function ihaleTeklifVer() {
    if (paramiz < ihaleFiyat + 25000) { ozelUyari("Paranız yetersiz!", "hata"); return; }
    ihaleFiyat += 25000;
    ihaleBizdeMi = true;
    ihaleKapanmaSayaci = 0;
    oyunSesi('kasa');
    document.getElementById('ihale-guncel-teklif').innerText = ihaleFiyat.toLocaleString('tr-TR');
    document.getElementById('ihale-teklif-sahibi').innerText = "Sende! (En Yüksek Teklif)";
}

function ihaledenCekil() {
    clearInterval(ihaleInterval); modaliKapat('ihale-modal');
    ozelUyari("İhaleden çekildin. Araç riskli olabilirdi zaten.", "bilgi");
}

function ihaleBitir() {
    clearInterval(ihaleInterval); modaliKapat('ihale-modal');
    
    if (ihaleBizdeMi) {
        paramiz -= ihaleFiyat;
        toplamGider += ihaleFiyat;
        ihaleAraba.fiyat = ihaleFiyat; // Maliyeti aldığın fiyat oldu
        garaj.push(ihaleAraba);
        
        let durumMesaji = "";
        if (ihaleAraba.hasarli) {
            durumMesaji = `🚨 BÜYÜK HÜSRAN! Araç ağır hasarlı (PERT) çıktı! Sanayide öpecekler seni.`;
            oyunSesi('hata');
        } else if (ihaleAraba.km > 150000) {
            durumMesaji = `⚠️ Araç taksi çıkması gibi yorgun. Kilometresi çok yüksek (${ihaleAraba.km.toLocaleString('tr-TR')} KM).`;
        } else {
            durumMesaji = `🎉 İNANILMAZ ŞANS! Araç kapalı garajda yatmış, hasarsız ve tertemiz çıktı! Köşeyi döndün!`;
            oyunSesi('kasa');
        }
        
        ekraniGuncelle(); aktifEkraniYenile(); oyunuKaydet();
        ozelUyari(`İhaleyi Kazandın!\n\nAraç ${ihaleFiyat.toLocaleString('tr-TR')} ₺'ye senin oldu.\n\nEkspertiz Sonucu:\n${durumMesaji}`, "basari");
    } else {
        ozelUyari(`İhale Kapandı. Araç rakip galeriye ${ihaleFiyat.toLocaleString('tr-TR')} ₺'ye satıldı.`, "bilgi");
    }
}

// DİĞER FONKSİYONLAR AYNEN KORUNDU
function pazarlikYapp(id, tId) { 
    const a = garaj.find(x => x.id === id); const tI = a.teklifler.findIndex(x => x.id === tId); const t = a.teklifler[tI]; const k = document.getElementById(tId); 
    if (t.tip === "Olucu") { oyunSesi('hata'); a.teklifler.splice(tI, 1); k.innerHTML = `<div style="text-align: center; color: #d63031; padding: 20px; font-weight: bold;">Müşteri küfredip gitti!</div>`; return; } 
    if (Math.random() > 0.5) { 
        t.fiyat = Math.floor(t.fiyat * (1 + ((Math.floor(Math.random()*8)+5)/100))); oyunSesi('kasa'); let sF = Math.floor(t.fiyat * 1.30); 
        k.innerHTML = `<div style="display:flex; gap:15px; align-items:center; width: 100%;"><div style="width:55px; height:55px; min-width:55px; border-radius:50%; background:#27ae60; display:flex; justify-content:center; align-items:center; font-size:28px;">🤑</div><div style="text-align: left; flex:1;"><span style="color: #2d3436; font-weight: 700; font-size: 16px;">${t.musteri} (İkna Oldu)</span><br><span style="font-size: 20px; color: #00b894; font-weight: 700;">Nakit: ${t.fiyat.toLocaleString('tr-TR')} ₺</span></div></div><div style="display:flex; flex-direction:column; gap:5px; width:100%; margin-top:15px;"><button class="btn btn-yesil" style="margin:0;" onclick="teklifiKabulEt(${id}, '${t.id}')">Nakit Sat</button><button class="btn" style="background:#8e44ad; color:white; margin:0;" onclick="senetleSat(${id}, '${t.id}', ${sF})">📝 Senetle (${sF.toLocaleString('tr-TR')} ₺)</button></div>`; 
    } else { oyunSesi('hata'); a.teklifler.splice(tI, 1); k.innerHTML = `<div style="text-align: center; color: #d63031; padding: 20px; font-weight: bold;">Müşteri sinirlenip gitti!</div>`; } oyunuKaydet(); 
}
function teklifiKabulEt(id, tId) { 
    const a = garaj.find(x => x.id === id); const t = a.teklifler.find(x => x.id === tId); let nk = t.fiyat - noterUcreti; 
    modaliKapat('teklif-modal'); oyunSesi('kasa'); paramiz += nk; toplamGelir += nk; garaj = garaj.filter(x => x.id !== id); 
    if (t.tip === "Takas") { if ((garaj.length + rentACarFilosu.length) >= aracKapasitesi) { ozelUyari(`TAKAS edilen araca yer yok!`, "hata"); } else { garaj.push(t.takasArac); ozelUyari(`Takas Başarılı!`, "basari"); } } 
    else { ozelUyari(`Araç Nakit Satıldı!`, "basari"); } 
    if (gizliKusurluAraclar.includes(id)) { if (Math.random() < 0.40) { let taz = Math.floor(nk * 1.5); paramiz -= taz; haritaPuani -= 1.5; if (haritaPuani < 1.0) haritaPuani = 1.0; oyunSesi('hata'); ozelUyari(`🚨 Müşteri KM düşürüldüğünü anladı! ${taz.toLocaleString('tr-TR')} ₺ ceza ödedin!`, "hata"); } else { haritaPuani += 0.1; if(haritaPuani>5.0) haritaPuani=5.0; } gizliKusurluAraclar = gizliKusurluAraclar.filter(x => x !== id); } else { haritaPuani += 0.2; if(haritaPuani>5.0) haritaPuani=5.0; } aktifEkraniYenile(); oyunuKaydet(); 
}
function senetleSat(id, tId, sF) { 
    const a = garaj.find(x => x.id === id); const t = a.teklifler.find(x => x.id === tId); let pes = Math.floor(sF * 0.20); 
    modaliKapat('teklif-modal'); oyunSesi('kasa'); paramiz += pes; toplamGelir += pes; garaj = garaj.filter(x => x.id !== id); 
    senetler.push({ id: 'snt-'+Math.floor(Math.random()*10000), musteri: t.musteri, arabaMarka: a.marka, toplamBorc: sF, odenen: pes, taksit: Math.floor((sF-pes)/10), kalanGun: 10, durum: 'Düzenli Ödüyor' }); 
    ozelUyari(`Araç Senetle Satıldı!`, "basari"); 
    if (gizliKusurluAraclar.includes(id)) { if (Math.random() < 0.40) { haritaPuani -= 1.5; if (haritaPuani < 1.0) haritaPuani = 1.0; } else { haritaPuani += 0.1; } gizliKusurluAraclar = gizliKusurluAraclar.filter(x => x !== id); } else { haritaPuani += 0.2; } if(haritaPuani>5.0) haritaPuani=5.0; aktifEkraniYenile(); oyunuKaydet(); 
}

function arabalariEkranaGetir() { const liste = document.getElementById('araba-listesi'); if(!liste) return; liste.innerHTML = ''; arabalar.forEach(araba => { let hasarMetni = araba.hasarli ? '<span class="etiket etiket-kirmizi">Ağır Hasarlı Olabilir</span>' : '<span class="etiket etiket-yesil">Ekspertiz Raporlu</span>'; liste.innerHTML += `<div class="ilan-karti"><div class="araba-foto"><img src="${araba.gorsel}" style="width:100%; height:100%; object-fit:cover; border-radius:8px;"></div><div class="ilan-detay"><h3 class="ilan-baslik">Sahibinden ${araba.marka} ${araba.model}</h3><div class="ilan-ozellikler"><span>🗓️ <strong>${araba.yil}</strong></span><span>🛣️ <strong>${araba.km.toLocaleString('tr-TR')}</strong> KM</span></div><div class="ilan-durum" style="margin-top: 5px;">${hasarMetni}</div></div><div class="ilan-sag-taraf"><div class="ilan-fiyat">${araba.fiyat.toLocaleString('tr-TR')} ₺</div><button class="btn btn-turuncu" onclick="ilanDetayEkraniAc(${araba.id})">🔍 İncele</button></div></div>`; }); }
function ilanDetayEkraniAc(arabaId) { const a = arabalar.find(x => x.id === arabaId); if(!a) { ozelUyari("İlan yayından kalkmış!", "hata"); return; } try { document.getElementById('detay-foto').src = a.gorsel; document.getElementById('detay-baslik').innerText = `Satılık ${a.marka} ${a.model}`; document.getElementById('detay-fiyat').innerText = `${a.fiyat.toLocaleString('tr-TR')} TL`; document.getElementById('detay-marka').innerText = a.marka; document.getElementById('detay-model').innerText = a.model; document.getElementById('detay-yil').innerText = a.yil; document.getElementById('detay-km').innerText = a.km.toLocaleString('tr-TR'); document.getElementById('detay-aciklama').innerText = a.ilanAciklamasi; ['kaput', 'tavan', 'bagaj', 'solOnCamurluk', 'solOnKapi', 'solArkaKapi', 'solArkaCamurluk', 'sagOnCamurluk', 'sagOnKapi', 'sagArkaKapi', 'sagArkaCamurluk'].forEach(p => { const div = document.getElementById(`eks-${p}`); if(div){ div.className='eks-parca'; div.classList.add(a.ekspertiz[p]); } }); document.getElementById('detay-tramer-btn').onclick = function() { if(paramiz<150){ ozelUyari("Paranız yetersiz!","hata"); return; } paramiz-=150; oyunSesi('kasa'); document.getElementById('tramer-mesaj-icerik').innerHTML=a.tramer; document.getElementById('tramer-modal').style.display='block'; }; document.getElementById('detay-satici-ara-btn').onclick = function() { saticiAra(a.id); }; const hk = document.getElementById('detay-hakan-abi-btn'); let kg = 15 - (gun - hakanAbiSonKullanim); if (kg <= 0) { hk.innerText = "👑 Hakan Abi'ye Çöktürt"; hk.style.opacity = "1"; hk.onclick = function() { hakanAbiAra(a.id); }; } else { hk.innerText = `👑 Hakan Abi Meşgul`; hk.style.opacity = "0.5"; hk.onclick = function() { ozelUyari(`Meşgul.`, "bilgi"); }; } document.getElementById('ilan-detay-modal').style.display = 'block'; } catch(e) { console.error(e); } }
function saticiAra(id) { if ((garaj.length + rentACarFilosu.length) >= aracKapasitesi) { ozelUyari("Kapasiteniz dolu!", "hata"); return; } const a = arabalar.find(x => x.id === id); modaliKapat('ilan-detay-modal'); document.getElementById('tel-aranan-kisi').innerText = `Satıcı Aranıyor`; document.getElementById('tel-diyalog').innerText = "Dıt... Dıt..."; document.getElementById('tel-aksiyonlar').style.display = 'none'; document.querySelector('.telefon-ekrani').classList.add('caliyor'); document.getElementById('telefon-modal').style.display = 'block'; setTimeout(() => { document.querySelector('.telefon-ekrani').classList.remove('caliyor'); document.getElementById('tel-diyalog').innerText = `"Alo buyur kardeşim. Fiyat ${a.fiyat.toLocaleString('tr-TR')} TL."`; document.getElementById('tel-aksiyonlar').style.display = 'flex'; document.getElementById('tel-satin-al-btn').onclick = function() { telSatinAl(a.id); }; document.getElementById('tel-pazarlik-btn').onclick = function() { document.getElementById('tel-aksiyonlar').style.display = 'none'; if (Math.random() > 0.40) { a.fiyat = Math.floor(a.fiyat * (1 - ((Math.floor(Math.random()*8)+3)/100))); oyunSesi('kasa'); document.getElementById('tel-diyalog').innerHTML = `"Hadi ${a.fiyat.toLocaleString('tr-TR')} TL olsun."`; document.getElementById('tel-aksiyonlar').style.display = 'flex'; document.getElementById('tel-pazarlik-btn').style.display = 'none'; } else { oyunSesi('hata'); document.getElementById('tel-diyalog').innerHTML = `"Ölücülerle işim olmaz!"`; arabalar = arabalar.filter(x => x.id !== id); aktifEkraniYenile(); } }; }, 2000); }
function hakanAbiAra(id) { if ((garaj.length + rentACarFilosu.length) >= aracKapasitesi) return ozelUyari("Kapasite dolu!","hata"); const a = arabalar.find(x => x.id === id); modaliKapat('ilan-detay-modal'); document.getElementById('tel-aranan-kisi').innerText = `Hakan Abi Aranıyor...`; document.getElementById('tel-diyalog').innerText = "Dıt..."; document.getElementById('tel-aksiyonlar').style.display = 'none'; document.querySelector('.telefon-ekrani').classList.add('caliyor'); document.getElementById('telefon-modal').style.display = 'block'; setTimeout(() => { document.querySelector('.telefon-ekrani').classList.remove('caliyor'); let ind = Math.floor(a.fiyat * 0.60); document.getElementById('tel-diyalog').innerHTML = `"Adam ${ind.toLocaleString('tr-TR')} TL'ye bırakıyor."`; document.getElementById('tel-aksiyonlar').style.display = 'flex'; document.getElementById('tel-pazarlik-btn').style.display = 'none'; document.getElementById('tel-satin-al-btn').onclick = function() { a.fiyat = ind; hakanAbiSonKullanim = gun; telSatinAl(a.id); }; }, 2500); }
function telSatinAl(id) { const a = arabalar.find(x => x.id === id); let t = a.fiyat + noterUcreti + sigortaVeMtvUcreti; if (paramiz >= t) { paramiz -= t; a.tamirDurumu = 0; garaj.push(a); arabalar = arabalar.filter(x => x.id !== id); oyunSesi('kasa'); telefonuKapat(); aktifEkraniYenile(); oyunuKaydet(); ozelUyari(`Araç garaja çekildi!`, "basari"); } else { oyunSesi('hata'); document.getElementById('tel-diyalog').innerHTML = `"Para çıkışmıyor kardeşim!"`; document.getElementById('tel-aksiyonlar').style.display = 'none'; } }
function telefonuKapat() { modaliKapat('telefon-modal'); document.querySelector('.telefon-ekrani').classList.remove('caliyor'); }
function garajiEkranaGetir() { const lst = document.getElementById('garaj-listesi'); const blg = document.getElementById('garaj-bilgi'); if(!lst) return; lst.innerHTML = ''; if (garaj.length === 0) { if(blg) blg.style.display = 'block'; } else { if(blg) blg.style.display = 'none'; garaj.forEach(a => { if (a.tamirDurumu > 0) { lst.innerHTML += `<div class="ilan-karti" style="opacity:0.8; border-left:5px solid #e67e22;"><div class="araba-foto"><img src="${a.gorsel}" style="width:100%; height:100%; object-fit:cover; border-radius:8px;"></div><div class="ilan-detay"><h3 class="ilan-baslik">${a.marka} ${a.model} (Sanayide)</h3><div style="color:#e67e22; font-weight: bold;">Kalan: ${a.tamirDurumu} Gün</div></div></div>`; } else { let tek = a.teklifler ? a.teklifler.length : 0; let m = ''; a.modifiyeler.forEach(md => m+=`<span class="etiket" style="background:#2d3436; margin-right:5px;">${md}</span>`); lst.innerHTML += `<div class="ilan-karti"><div class="araba-foto"><img src="${a.gorsel}" style="width:100%; height:100%; object-fit:cover; border-radius:8px;"></div><div class="ilan-detay"><h3 class="ilan-baslik">${a.marka} ${a.model}</h3><div class="ilan-durum">${a.hasarli?'<span class="etiket etiket-kirmizi">Ağır Hasarlı</span>':'<span class="etiket etiket-yesil">Sorunsuz</span>'} ${m}</div><div style="font-size:13px;">${tek>0?`🔥 ${tek} Yeni Teklif!`:`Teklif Bekleniyor`}</div></div><div class="ilan-sag-taraf">${a.hasarli?`<button class="btn btn-turuncu" style="margin-bottom:5px;" onclick="tamirEt(${a.id})">🛠️ Sanayiye Ver</button>`:''}<button class="btn" style="background:#2c3e50; color:#f1c40f; margin-bottom:5px;" onclick="kilometreDusur(${a.id})">🤫 KM Düşür</button><button class="btn" style="background:#d35400; color:white; margin-bottom:5px;" onclick="kirayaVer(${a.id})">🔑 Kiraya Ver</button><button class="btn btn-mor" style="margin-bottom:5px;" onclick="modifiyeEkraniAc(${a.id})">✨ Modifiye</button><button class="btn btn-kirmizi" onclick="araciSat(${a.id})">🤝 Sat</button></div></div>`; } }); } }
function kilometreDusur(id) { const a = garaj.find(x => x.id === id); if (paramiz < 35000) { ozelUyari("Para yok!", "hata"); return; } if (a.km < 80000) { ozelUyari("KM zaten düşük!", "bilgi"); return; } if (Math.random() < 0.15) { paramiz -= 35000; a.fiyat = Math.floor(a.fiyat * 0.7); oyunSesi('hata'); aktifEkraniYenile(); oyunuKaydet(); ozelUyari("🚨 FELAKET! Usta beyni yaktı.", "hata"); return; } paramiz -= 35000; let d = Math.floor(a.km * (Math.random() * 0.3 + 0.3)); a.km -= d; a.fiyat += Math.floor(d * 1.5); gizliKusurluAraclar.push(a.id); oyunSesi('tamir'); aktifEkraniYenile(); oyunuKaydet(); ozelUyari(`KM düşürüldü. Çaktırma!`, "basari"); }
function tamirEt(id) { const a = garaj.find(x => x.id === id); let masraf = personeller.usta ? Math.floor(a.tamirMasrafi * 0.7) : a.tamirMasrafi; if (paramiz >= masraf) { paramiz -= masraf; a.tamirDurumu = Math.floor(Math.random() * 3) + 2; a.teklifler = []; oyunSesi('tamir'); aktifEkraniYenile(); oyunuKaydet(); ozelUyari(`Araç sanayiye verildi.`, "basari"); } else { ozelUyari("Para yok!", "hata"); } }
function modifiyeEkraniAc(id) { const a = garaj.find(x => x.id === id); const lst = document.getElementById('modifiye-listesi'); lst.innerHTML = ''; let varMi = false; modifiyePaketleri.forEach(p => { if (!a.modifiyeler.includes(p.isim)) { varMi = true; let c = personeller.usta ? Math.floor(p.maliyet * 0.7) : p.maliyet; lst.innerHTML += `<div class="teklif-karti"><div><span style="font-size: 20px;">${p.ikon}</span> <b>${p.isim}</b><br><span>Maliyet: ${c.toLocaleString('tr-TR')} ₺</span></div><button class="btn btn-mavi" onclick="modifiyeUygula(${a.id}, ${p.id}, ${c})">Uygula</button></div>`; } }); if (!varMi) lst.innerHTML = `<p>Gırtlak dolu!</p>`; document.getElementById('modifiye-modal').style.display = "block"; }
function modifiyeUygula(id, pId, c) { const a = garaj.find(x => x.id === id); const p = modifiyePaketleri.find(x => x.id === pId); if (paramiz >= c) { paramiz -= c; a.fiyat += p.degerArtisi; a.modifiyeler.push(p.isim); oyunSesi('tamir'); modaliKapat('modifiye-modal'); aktifEkraniYenile(); oyunuKaydet(); ozelUyari(`${p.isim} eklendi.`, "basari"); } else { ozelUyari(`Para yok.`, "hata"); } }
function euroAl(miktar) { let maliyet = miktar * euroKuru; if (paramiz >= maliyet) { paramiz -= maliyet; euroBakiye += miktar; oyunSesi('kasa'); ekraniGuncelle(); aktifEkraniYenile(); oyunuKaydet(); ozelUyari(`Euro alındı.`, 'basari'); } else { oyunSesi('hata'); ozelUyari("Para yok!", "hata"); } } 
function euroBozdur(miktar) { if (euroBakiye >= miktar) { paramiz += miktar * euroKuru; euroBakiye -= miktar; oyunSesi('kasa'); ekraniGuncelle(); aktifEkraniYenile(); oyunuKaydet(); ozelUyari(`Euro bozduruldu.`, 'basari'); } else { oyunSesi('hata'); ozelUyari("Euro yok!", "hata"); } } 
function tumEurouBozdur() { if(euroBakiye > 0) euroBozdur(euroBakiye); }
function kirayaVer(arabaId) { const arabaIndex = garaj.findIndex(a => a.id === arabaId); let araba = garaj[arabaIndex]; if (araba.hasarli || araba.tamirDurumu > 0) { ozelUyari("Hasarlı aracı kiraya veremezsin!", "hata"); return; } araba.gunlukKiraBedeli = Math.floor(araba.fiyat * 0.005); rentACarFilosu.push(araba); garaj.splice(arabaIndex, 1); oyunSesi('kasa'); ekraniGuncelle(); aktifEkraniYenile(); oyunuKaydet(); ozelUyari(`Araç filoya katıldı!`, "basari"); }
function kiradanCek(arabaId) { const arabaIndex = rentACarFilosu.findIndex(a => a.id === arabaId); let araba = rentACarFilosu[arabaIndex]; garaj.push(araba); rentACarFilosu.splice(arabaIndex, 1); ekraniGuncelle(); aktifEkraniYenile(); oyunuKaydet(); ozelUyari(`Araç kiradan çekildi.`, "bilgi"); }
function rentACarEkraniGuncelle() { const liste = document.getElementById('rentacar-listesi'); const bilgi = document.getElementById('rentacar-bilgi'); if(!liste) return; liste.innerHTML = ''; if (rentACarFilosu.length === 0) { if(bilgi) bilgi.style.display = 'block'; } else { if(bilgi) bilgi.style.display = 'none'; let toplam = 0; rentACarFilosu.forEach(a => { if(!a.gunlukKiraBedeli) a.gunlukKiraBedeli = Math.floor(a.fiyat * 0.005); toplam += a.gunlukKiraBedeli; liste.innerHTML += `<div class="ilan-karti" style="border-left: 5px solid #d35400;"><div class="araba-foto"><img src="${a.gorsel}" style="width:100%; height:100%; object-fit:cover; border-radius:8px;"></div><div class="ilan-detay"><h3 class="ilan-baslik">${a.marka} ${a.model}</h3><div style="margin-top:8px; color:#27ae60; font-size:16px; font-weight: bold;">Günlük Getiri: +${a.gunlukKiraBedeli.toLocaleString('tr-TR')} ₺</div></div><div class="ilan-sag-taraf"><button class="btn btn-turuncu" onclick="kiradanCek(${a.id})">Kiradan Çek</button></div></div>`; }); liste.innerHTML = `<h3 style="color:#27ae60; text-align:center;">Toplam Günlük Pasif Gelir: ${toplam.toLocaleString('tr-TR')} ₺</h3>` + liste.innerHTML; } }
function rentACarGelirVeRiskYonetimi() { if (rentACarFilosu.length === 0) return; let kazanilan = 0; for (let i = rentACarFilosu.length - 1; i >= 0; i--) { let a = rentACarFilosu[i]; if(!a.gunlukKiraBedeli) a.gunlukKiraBedeli = Math.floor(a.fiyat * 0.005); let risk = Math.random(); if (risk < 0.02) { oyunSesi('hata'); ozelUyari(`🚨 ŞOK! Kiradaki ${a.marka} aracın çalındı!`, "hata"); rentACarFilosu.splice(i, 1); } else if (risk < 0.07) { a.hasarli = true; a.tamirMasrafi = Math.floor(a.fiyat * 0.20); a.fiyat = Math.floor(a.fiyat * 0.70); garaj.push(a); rentACarFilosu.splice(i, 1); oyunSesi('hata'); ozelUyari(`🚨 KAZA! Müşteri ${a.marka} ile kaza yapmış!`, "hata"); } else if (risk < 0.15) { let ceza = Math.floor(a.gunlukKiraBedeli * 2); paramiz -= ceza; toplamGider += ceza; kazanilan += a.gunlukKiraBedeli; ozelUyari(`⚠️ Kiradaki ${a.marka} hor kullanılmış. ${ceza} ₺ masraf.`, "bilgi"); } else { kazanilan += a.gunlukKiraBedeli; a.km += Math.floor(Math.random() * 200) + 50; } } if (kazanilan > 0) { paramiz += kazanilan; toplamGelir += kazanilan; oyunSesi('kasa'); } }
function personelEkraniGuncelle() { const bUsta = document.getElementById('btn-personel-usta'); const bSm = document.getElementById('btn-personel-sm'); const bSatis = document.getElementById('btn-personel-satis'); if(!bUsta) return; if(personeller.usta) { bUsta.innerHTML = `<button class="btn btn-kirmizi" onclick="personelKov('usta')">Kov</button> <br><span style="color:#27ae60; font-weight:bold;">✅ Çalışıyor</span>`; } else { bUsta.innerHTML = `<button class="btn btn-yesil" onclick="personelIseAl('usta')">İşe Al</button>`; } if(personeller.smUzman) { bSm.innerHTML = `<button class="btn btn-kirmizi" onclick="personelKov('smUzman')">Kov</button> <br><span style="color:#27ae60; font-weight:bold;">✅ Çalışıyor</span>`; } else { bSm.innerHTML = `<button class="btn btn-yesil" onclick="personelIseAl('smUzman')">İşe Al</button>`; } if(personeller.satisTemsilci) { bSatis.innerHTML = `<button class="btn btn-kirmizi" onclick="personelKov('satisTemsilci')">Kov</button> <br><span style="color:#27ae60; font-weight:bold;">✅ Çalışıyor</span>`; } else { bSatis.innerHTML = `<button class="btn btn-yesil" onclick="personelIseAl('satisTemsilci')">İşe Al</button>`; } }
function personelIseAl(rol) { let m = { usta: 25000, smUzman: 15000, satisTemsilci: 30000 }; if(paramiz < m[rol]) { ozelUyari("Para yok!", "hata"); return; } paramiz -= m[rol]; toplamGider += m[rol]; personeller[rol] = true; oyunSesi('kasa'); aktifEkraniYenile(); oyunuKaydet(); ozelUyari(`İşe alındı!`, "basari"); }
function personelKov(rol) { personeller[rol] = false; oyunSesi('hata'); aktifEkraniYenile(); oyunuKaydet(); ozelUyari(`Kovuldu.`, "bilgi"); }
function dukkanEkraniniGuncelle() { let isim=document.getElementById('dukkan-isim'); if(!isim)return; const bil = seviyeler[dukkanSeviyesi - 1]; isim.innerText = `${bil.isim} (Seviye ${bil.seviye})`; document.getElementById('dukkan-kapasite').innerText = bil.kapasite === 999 ? "Sınırsız" : bil.kapasite; const alan = document.getElementById('yukseltme-alani'); if (dukkanSeviyesi < seviyeler.length) { alan.style.display = 'block'; document.getElementById('yeni-seviye-isim').innerText = seviyeler[dukkanSeviyesi].isim; document.getElementById('yeni-seviye-fiyat').innerText = seviyeler[dukkanSeviyesi].fiyat.toLocaleString('tr-TR') + " TL"; } else { alan.innerHTML = `<h3 style="color: #27ae60;">Maksimum seviyedesin!</h3>`; } }
function dukkaniYukselt() { if (dukkanSeviyesi >= seviyeler.length) return; const son = seviyeler[dukkanSeviyesi]; if (paramiz >= son.fiyat) { oyunSesi('tamir'); paramiz -= son.fiyat; toplamGider += son.fiyat; dukkanSeviyesi++; aracKapasitesi = son.kapasite; aktifEkraniYenile(); oyunuKaydet(); ozelUyari(`Dükkan büyüdü!`, "basari"); } else { oyunSesi('hata'); ozelUyari("Para yok!", "hata"); } }
function istatistikleriGuncelle() { let st=document.getElementById('ist-satilan'); if(st) st.innerText=toplamSatilanArac; let gl=document.getElementById('ist-gelir'); if(gl) gl.innerText=toplamGelir.toLocaleString('tr-TR'); let gd=document.getElementById('ist-gider'); if(gd) gd.innerText=toplamGider.toLocaleString('tr-TR'); let nt=document.getElementById('ist-net'); if(nt){ let k=toplamGelir-toplamGider; nt.innerText=k.toLocaleString('tr-TR'); nt.style.color=k<0?'#d63031':'#00b894'; } }
function krediCek(m) { paramiz+=m; bankaBorcu+=m; oyunSesi('kasa'); aktifEkraniYenile(); oyunuKaydet(); ozelUyari(`Kredi çekildi.`, 'basari'); } function borcOde(m) { if(bankaBorcu===0)return; if(paramiz>=m){ let od=m>bankaBorcu?bankaBorcu:m; paramiz-=od; bankaBorcu-=od; oyunSesi('kasa'); aktifEkraniYenile(); oyunuKaydet(); }else{ ozelUyari("Para yok!", "hata"); } } function borcuKapat() { if(bankaBorcu===0)return; if(paramiz>=bankaBorcu){ paramiz-=bankaBorcu; bankaBorcu=0; oyunSesi('kasa'); aktifEkraniYenile(); oyunuKaydet(); }else{ ozelUyari("Para yok!", "hata"); } }
function senetTahsilatiYap() { senetler.forEach((s, i) => { if (s.durum === 'Patladi' || s.kalanGun <= 0) return; if (Math.random() < 0.10) { s.durum = 'Patladi'; oyunSesi('hata'); ozelUyari(`🚨 SENET PATLADI! ${s.musteri} ödeme yapmıyor!`, 'hata'); } else { paramiz += s.taksit; toplamGelir += s.taksit; s.odenen += s.taksit; s.kalanGun--; if (s.kalanGun <= 0) s.durum = 'Bitti'; } }); }
function senetleriEkranaBas() { const liste = document.getElementById('senet-listesi'); if(!liste) return; liste.innerHTML = ''; if (senetler.length === 0) { liste.innerHTML = '<div class="uyari-mesaji">Senet yok.</div>'; return; } senetler.forEach((s, i) => { let renk = s.durum === 'Bitti' ? '#27ae60' : (s.durum === 'Patladi' ? '#d63031' : '#f39c12'); let btn = s.durum === 'Patladi' ? `<button class="btn" style="background:#2d3436; color:#f1c40f; margin-top:10px;" onclick="hakanAbiTahsilat(${i})">👑 Hakan Abi (%20 Komisyon)</button>` : ''; liste.innerHTML += `<div class="ilan-karti" style="border-left: 5px solid ${renk}; flex-direction: column; align-items: flex-start;"><div style="display:flex; justify-content:space-between; width:100%;"><h3 class="ilan-baslik">👤 ${s.musteri}</h3><div style="font-weight:bold; color:${renk};">${s.durum}</div></div><div style="width: 100%; display: flex; justify-content: space-between; margin-top:10px; font-size:14px;"><span>Kalan: ${s.kalanGun} Gün</span></div>${btn}</div>`; }); }
function hakanAbiTahsilat(i) { let s = senetler[i]; let kalan = s.toplamBorc - s.odenen; let komisyon = Math.floor(kalan * 0.20); paramiz += (kalan - komisyon); toplamGelir += (kalan - komisyon); s.odenen += kalan; s.kalanGun = 0; s.durum = 'Bitti (Tahsil Edildi)'; oyunSesi('kasa'); aktifEkraniYenile(); oyunuKaydet(); ozelUyari(`Hakan Abi tahsilatı yaptı!`, "basari"); }
function sosyalEkraniGuncelle() { let k=document.getElementById('sosyal-kurulum'); let y=document.getElementById('sosyal-yonetim'); if (!sosyalMedya.aktif) { if(k) k.style.display = 'block'; if(y) y.style.display = 'none'; } else { if(k) k.style.display = 'none'; if(y) y.style.display = 'block'; let pa=document.getElementById('profil-ad'); if(pa) pa.innerHTML = `${sosyalMedya.kullaniciAdi} <span style="display:${sosyalMedya.maviTik ? 'inline' : 'none'};">☑️</span>`; let pp=document.getElementById('profil-platform'); if(pp) pp.innerText = sosyalMedya.platform; let pt=document.getElementById('profil-takipci'); if(pt) pt.innerText = Math.floor(sosyalMedya.takipci).toLocaleString('tr-TR'); let lu=document.getElementById('sosyal-linc-uyari'); let lk=document.getElementById('linc-kalan'); if (sosyalMedya.lincKalanGun > 0) { if(lu) lu.style.display = "block"; if(lk) lk.innerText = sosyalMedya.lincKalanGun; } else { if(lu) lu.style.display = "none"; } dmKutusunuEkranaBas(); } }
function sosyalHesapAc() { let ka = document.getElementById('sm-kullanici-adi').value; let plat = document.getElementById('sm-platform').value; if (ka.trim() === "") return ozelUyari("İsim girin.", "hata"); sosyalMedya.aktif = true; sosyalMedya.platform = plat; sosyalMedya.kullaniciAdi = ka.startsWith('@') ? ka : '@'+ka; sosyalMedya.takipci = 50; oyunSesi('kasa'); aktifEkraniYenile(); oyunuKaydet(); }
function maviTikAl() { if (sosyalMedya.maviTik) return; if (paramiz < 25000) return ozelUyari("Para yok!", "hata"); paramiz -= 25000; sosyalMedya.maviTik = true; oyunSesi('kasa'); aktifEkraniYenile(); oyunuKaydet(); ozelUyari("Mavi Tik Alındı.", "basari"); }
function cekilisYap() { if (paramiz < 80000) return ozelUyari("Para yok!", "hata"); if (sosyalMedya.lincKalanGun > 0) return ozelUyari("Linç yiyorsun!", "hata"); paramiz -= 80000; if (Math.random() < 0.15) { sosyalMedya.lincKalanGun = 5; sosyalMedya.takipci -= Math.floor(sosyalMedya.takipci * 0.10); oyunSesi('hata'); ozelUyari(`🚨 İFŞALANDIN!`, "hata"); } else { sosyalMedya.takipci += 15000; oyunSesi('kasa'); ozelUyari(`🎁 Çekiliş patladı!`, "basari"); } aktifEkraniYenile(); oyunuKaydet(); }
function postIcinArabaSec() { if (garaj.length === 0) return ozelUyari("Garaj boş!", "hata"); if (paramiz < 1500) return ozelUyari("Para yok.", "hata"); const lst = document.getElementById('post-araba-listesi'); lst.innerHTML = ''; garaj.forEach(a => { lst.innerHTML += `<div class="teklif-karti"><div><b>${a.marka} ${a.model}</b></div><button class="btn btn-yesil" onclick="videoCekVePaylas(${a.id})">Çek</button></div>`; }); document.getElementById('post-secim-modal').style.display = "block"; }
function videoCekVePaylas(id) { modaliKapat('post-secim-modal'); paramiz -= 1500; sosyalMedya.takipci += 1500; document.getElementById('post-sonuc-takipci').innerText = `+1500 Takipçi`; document.getElementById('post-yorumlar').innerHTML = `<b>@kral:</b> Harika araba!`; oyunSesi('kasa'); aktifEkraniYenile(); oyunuKaydet(); document.getElementById('post-sonuc-modal').style.display = "block"; }
function influencerReklamVer() { if (paramiz < 50000) return ozelUyari("Para yok!", "hata"); paramiz -= 50000; sosyalMedya.takipci += 8000; oyunSesi('kasa'); aktifEkraniYenile(); oyunuKaydet(); ozelUyari(`Reklam verildi!`, "basari"); }
function dmKutusunuEkranaBas() { const k = document.getElementById('dm-kutusu'); if(!k) return; k.innerHTML = ''; if (dmKutusu.length === 0) { k.innerHTML = '<p>Boş.</p>'; return; } dmKutusu.forEach((m, i) => { k.innerHTML += `<div class="ilan-karti"><div><b>📩 ${m.gonderen}</b><br>Teklif: ${m.teklifFiyat.toLocaleString('tr-TR')} ₺</div><div><button class="btn btn-yesil" onclick="dmTeklifKabul(${i}, ${m.arabaId})">Sat</button> <button class="btn btn-kirmizi" onclick="dmSil(${i})">Sil</button></div></div>`; }); }
function dmSil(i) { dmKutusu.splice(i, 1); oyunSesi('hata'); aktifEkraniYenile(); oyunuKaydet(); }
function dmTeklifKabul(i, id) { const aI = garaj.findIndex(x => x.id === id); if (aI === -1) { dmSil(i); return; } let m = dmKutusu[i]; paramiz += (m.teklifFiyat - noterUcreti); garaj.splice(aI, 1); dmKutusu.splice(i, 1); oyunSesi('kasa'); aktifEkraniYenile(); oyunuKaydet(); ozelUyari(`DM satışı tamam!`, "basari"); }
function canliYayinIcinArabaSec() { if (garaj.length===0) return ozelUyari("Garajda satılacak araç yok.","hata"); if (sosyalMedya.takipci<500) return ozelUyari("Canlı yayına kimse gelmez. En az 500 takipçin olmalı!","hata"); const l = document.getElementById('yayin-araba-listesi'); if(!l) return; l.innerHTML=''; garaj.forEach(a=>{ l.innerHTML+=`<div class="teklif-karti"><div><b>${a.marka} ${a.model}</b></div><button class="btn btn-kirmizi" onclick="canliYayiniBaslat(${a.id})">Yayınla</button></div>`; }); document.getElementById('yayin-secim-modal').style.display="block"; }
function canliYayiniBaslat(id) { modaliKapat('yayin-secim-modal'); yayindakiAraba = garaj.find(x => x.id === id); anlikIzleyici = Math.floor(sosyalMedya.takipci * 0.1) + 10; anlikEnYuksekTeklif = Math.floor(yayindakiAraba.fiyat * 0.60); yayindakiTeklifci = "Sistem"; yayinTuruHype = 1.0; let foto = document.getElementById('yayin-araba-foto'); if(foto) foto.src = yayindakiAraba.gorsel; let baslik = document.getElementById('yayin-araba-baslik'); if(baslik) baslik.innerText = `${yayindakiAraba.marka} ${yayindakiAraba.model}`; let deger = document.getElementById('yayin-araba-deger'); if(deger) deger.innerText = yayindakiAraba.fiyat.toLocaleString('tr-TR'); let teklif = document.getElementById('yayin-en-yuksek-teklif'); if(teklif) teklif.innerText = anlikEnYuksekTeklif.toLocaleString('tr-TR'); let veren = document.getElementById('yayin-teklif-veren'); if(veren) veren.innerText = "Başlangıç Fiyatı"; let chat = document.getElementById('yayin-chat'); if(chat) chat.innerHTML = `<div style="color: #00b894; text-align: center; font-style: italic;">Yayın başladı, teklifler bekleniyor...</div>`; document.getElementById('canli-yayin-modal').style.display="block"; if(yayinInterval) clearInterval(yayinInterval); yayinInterval = setInterval(yayinDongusu, 1500); }
function yayinDongusu() { anlikIzleyici += Math.floor((Math.random()*20-10)*yayinTuruHype); if(anlikIzleyici<5)anlikIzleyici=5; document.getElementById('yayin-izleyici').innerText = anlikIzleyici; if(yayinTuruHype>1.0) yayinTuruHype -= 0.1; let ct = document.getElementById('yayin-chat'); let sans = 0.35 * yayinTuruHype; if (anlikEnYuksekTeklif > (yayindakiAraba.fiyat * 1.20)) sans = 0.05; if(Math.random() < sans) { anlikEnYuksekTeklif += Math.floor(Math.random() * 30000) + 10000; yayindakiTeklifci = "Anonim" + Math.floor(Math.random()*99); document.getElementById('yayin-en-yuksek-teklif').innerText = anlikEnYuksekTeklif.toLocaleString('tr-TR'); document.getElementById('yayin-teklif-veren').innerText = yayindakiTeklifci; ct.innerHTML += `<div style="color:#00b894;">💰 Benden ${anlikEnYuksekTeklif.toLocaleString('tr-TR')} ₺ çalışır!</div>`; oyunSesi('kasa'); } else { let bosYorumlar = ["Araba yorgun duruyor", "Fiyat çok şişti", "O paraya uçak alırım", "🔥🔥🔥", "Değişeni var mı?"]; let yorum = bosYorumlar[Math.floor(Math.random() * bosYorumlar.length)]; ct.innerHTML += `<div><span style="color:#dfe6e9;">${yorum}</span></div>`; } ct.scrollTop=ct.scrollHeight; }
function yayinGazaGetir() { yayinTuruHype = 2.5; let chat = document.getElementById('yayin-chat'); chat.innerHTML += `<div style="color:#ff7675;">📣 HAYDİ BEYLER YOK MU ARTIRAN!</div>`; chat.scrollTop = chat.scrollHeight; }
function yayindaSat() { if(anlikEnYuksekTeklif < (yayindakiAraba.fiyat * 0.5)) return ozelUyari("Çok ucuz, bu fiyata verilmez!","hata"); clearInterval(yayinInterval); modaliKapat('canli-yayin-modal'); paramiz += anlikEnYuksekTeklif; garaj = garaj.filter(x => x.id !== yayindakiAraba.id); oyunSesi('kasa'); aktifEkraniYenile(); oyunuKaydet(); ozelUyari(`Araç yayında ${anlikEnYuksekTeklif.toLocaleString('tr-TR')} ₺ fiyata satıldı!`, "basari"); }
function yayiniBitir() { clearInterval(yayinInterval); modaliKapat('canli-yayin-modal'); }

function oyunuBaslat() {
    if (!oyunuYukle()) { document.getElementById('baslangic-modal').style.display = 'block'; } 
    else { document.getElementById('header-logo').innerHTML = `${galeriAdi}<span>Motors</span>`; if (arabalar.length === 0) piyasayiYenile(); ekraniGuncelle(); menuDegistir('pazar'); }
}
function galeriAdiniKaydet() {
    let ad = document.getElementById('galeri-adi-input').value; if (ad.trim() === "") return; galeriAdi = ad;
    document.getElementById('baslangic-modal').style.display = 'none'; document.getElementById('header-logo').innerHTML = `${galeriAdi}<span>Motors</span>`;
    piyasayiYenile(); oyunuKaydet(); ekraniGuncelle(); menuDegistir('pazar'); 
}

oyunuBaslat();