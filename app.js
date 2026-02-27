// ==========================================
// 1. GENEL AYARLAR VE DEĞİŞKENLER (V8.0: SOSYAL MEDYA İMPARATORLUĞU)
// ==========================================
let galeriAdi = "Benim"; let paramiz = 15000000; let bankaBorcu = 0; let garaj = []; let gun = 1; let idSayaci = 1; 
let toplamSatilanArac = 0; let toplamGelir = 0; let toplamGider = 0; let dukkanSeviyesi = 1; let aracKapasitesi = 2;
let arabalar = []; let hakanAbiSonKullanim = -15; const noterUcreti = 2500; 

let ayarlar = { sesAcik: true, kompaktPara: false, hizliYenile: false };
let piyasaDurumu = "Normal"; let piyasaCarpani = 1.0; let aylikFaturalar = 4500; let sigortaVeMtvUcreti = 4000;
let haritaPuani = 5.0; let gizliKusurluAraclar = []; 
let euroKuru = 38.50; let euroBakiye = 0; let senetler = []; let rentACarFilosu = []; 

let personeller = { usta: false, smUzman: false, satisTemsilci: false, vale: false, eksper: false, avukat: false };
let personelMorali = 100;

// YENİ: Gelişmiş Sosyal Medya Motoru Değişkenleri
let sosyalMedya = { aktif: false, platform: "", kullaniciAdi: "", takipci: 0, populerlik: 0, maviTik: false, lincKalanGun: 0, gonderiler: [], takipciGecmisi: [0,0,0,0,0,0,0] };
let dmKutusu = [];
let aktifReklam = { aktif: false, kitle: "", kalanGun: 0 };
let aktifSponsor = { aktif: false, isim: "", gunlukGetiri: 0, kalanGun: 0 };
let sponsorlukTeklifleri = [];

let yayinInterval = null; let anlikIzleyici = 0; let anlikEnYuksekTeklif = 0; let yayindakiAraba = null; let yayindakiTeklifci = ""; let yayinTuruHype = 1.0;
let ihaleInterval = null; let ihaleAraba = null; let ihaleFiyat = 0; let ihaleBizdeMi = false; let ihaleKapanmaSayaci = 0;
let krediNotu = 900; let eksiBakiyeGun = 0; let krediler = []; let mevduat = {aktif: false, anapara: 0, kalanGun: 0, faizOrani: 0.15};
let vergiBorcu = 0; let gecikmisVergiGun = 0; let eHacizAktif = false; let sabikaliSatislar = []; 

let borsa = [ {kod: 'TOASO', isim: 'Tofaş Oto Fab.', fiyat: 250.00, eskiFiyat: 250.00, degisim: 0, portfoyAdet: 0, maliyet: 0}, {kod: 'FROTO', isim: 'Ford Otosan', fiyat: 950.00, eskiFiyat: 950.00, degisim: 0, portfoyAdet: 0, maliyet: 0}, {kod: 'DOAS', isim: 'Doğuş Otomotiv', fiyat: 280.00, eskiFiyat: 280.00, degisim: 0, portfoyAdet: 0, maliyet: 0}, {kod: 'SASA', isim: 'Sasa Polyester', fiyat: 45.00, eskiFiyat: 45.00, degisim: 0, portfoyAdet: 0, maliyet: 0} ];
let borsaInterval = null; let aktifHisseIndex = -1; let aktifHisseIslemTipi = '';

const sehirler = ["İstanbul", "İstanbul", "İstanbul", "Ankara", "İzmir", "Bursa", "Antalya", "Trabzon", "Diyarbakır"];
const seviyeler = [ { seviye: 1, isim: "Sokak Arası Galeri", kapasite: 2, fiyat: 0, kira: 5000 }, { seviye: 2, isim: "Lüks Galeri", kapasite: 5, fiyat: 2000000, kira: 25000 }, { seviye: 3, isim: "Oto Center", kapasite: 10, fiyat: 5000000, kira: 75000 }, { seviye: 4, isim: "Dev Plaza", kapasite: 999, fiyat: 15000000, kira: 250000 } ];
const modifiyePaketleri = [ { id: 1, isim: "Cam Filmi & Seramik Boya", ikon: "✨", maliyet: 25000, degerArtisi: 60000 }, { id: 2, isim: "Spor Çelik Jant & Lastik", ikon: "🛞", maliyet: 55000, degerArtisi: 130000 }, { id: 3, isim: "Stage 1 Yazılım & Egzoz", ikon: "💻", maliyet: 90000, degerArtisi: 220000 } ];
const aracSablonlari = [ { marka: "BMW", model: "320i", tabanFiyat: 3800000, gorsel: "img/bmw-320i.jpg" }, { marka: "Mercedes", model: "C200", tabanFiyat: 4100000, gorsel: "img/mercedes-c200.jpg" }, { marka: "Audi", model: "A3", tabanFiyat: 2400000, gorsel: "img/audi-a3.jpg" }, { marka: "Volkswagen", model: "Golf", tabanFiyat: 1850000, gorsel: "img/golf.jpg" }, { marka: "Renault", model: "Megane", tabanFiyat: 1400000, gorsel: "img/megane.jpg" }, { marka: "Fiat", model: "Egea", tabanFiyat: 1100000, gorsel: "img/egea.jpg" }, { marka: "Toyota", model: "Corolla", tabanFiyat: 1550000, gorsel: "img/corolla.jpg" }, { marka: "Honda", model: "Civic", tabanFiyat: 1750000, gorsel: "img/civic.jpg" }, { marka: "Citroën", model: "C3 Aircross 1.2 Hybrid", tabanFiyat: 1650000, gorsel: "img/c3-aircross.jpg" }, { marka: "Citroën", model: "C5 Aircross", tabanFiyat: 2050000, gorsel: "img/c5-aircross.jpg" }, { marka: "Volkswagen", model: "Tiguan", tabanFiyat: 2450000, gorsel: "img/tiguan.jpg" }, { marka: "Volkswagen", model: "Passat", tabanFiyat: 2200000, gorsel: "img/passat.jpg" }, { marka: "Volkswagen", model: "Jetta", tabanFiyat: 1250000, gorsel: "img/jetta.jpg" }, { marka: "Fiat", model: "Linea", tabanFiyat: 650000, gorsel: "img/linea.jpg" }, { marka: "Fiat", model: "Albea", tabanFiyat: 450000, gorsel: "img/albea.jpg" }, { marka: "Fiat", model: "Egea Cross", tabanFiyat: 1350000, gorsel: "img/egea-cross.jpg" }, { marka: "Mercedes", model: "A200 Sedan", tabanFiyat: 2650000, gorsel: "img/a200-sedan.jpg" }, { marka: "Mercedes", model: "GLA 200", tabanFiyat: 2850000, gorsel: "img/gla200.jpg" }, { marka: "Audi", model: "Q3", tabanFiyat: 3150000, gorsel: "img/audi-q3.jpg" } ];
const isimlerHavuzu = ["Ahmet", "Mehmet", "Can", "Burak", "Kemal", "Mert", "Mahmut", "Şahin", "Oğuz", "Cengiz", "Kadir", "Cem", "Orhan", "Hasan", "Hüseyin", "Emre", "Volkan", "Serkan", "Yasin", "Ali", "Veli", "Baturalp", "Muhammed", "Çağatay", "Asel", "Zeynep", "Selin", "Elif"];
const soyisimlerHavuzu = ["Yılmaz", "Kaya", "Demir", "Çelik", "Şahin", "Öztürk", "Kılıç", "Arslan", "Aydın", "Yıldız", "Erdoğan", "Can", "Polat", "Olça", "Koç", "Bulut", "Turan", "Yavuz", "Güler"];

function musteriIsmiUret(araba) { let mevcutIsimler = araba && araba.teklifler ? araba.teklifler.map(t => t.musteri) : []; let isim = ""; for(let i=0; i<50; i++) { isim = isimlerHavuzu[Math.floor(Math.random() * isimlerHavuzu.length)] + " " + soyisimlerHavuzu[Math.floor(Math.random() * soyisimlerHavuzu.length)]; if(!mevcutIsimler.includes(isim)) break; } return isim; }

// ==========================================
// 2. ÇEKİRDEK FONKSİYONLAR & UI
// ==========================================
function getKmhLimiti() { return krediNotu >= 900 ? (krediNotu - 800) * 10000 : 0; }
function bakiyeYeterliMi(tutar) { return (paramiz + getKmhLimiti()) >= tutar; }

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
function oyunSesi(tip) {
    if (!ayarlar.sesAcik) return; 
    try {
        if (audioCtx.state === 'suspended') { audioCtx.resume(); }
        const oscillator = audioCtx.createOscillator(); const gainNode = audioCtx.createGain();
        oscillator.connect(gainNode); gainNode.connect(audioCtx.destination);
        if (tip === 'kasa') { oscillator.type = 'sine'; oscillator.frequency.setValueAtTime(800, audioCtx.currentTime); oscillator.frequency.exponentialRampToValueAtTime(1500, audioCtx.currentTime + 0.1); gainNode.gain.setValueAtTime(0.2, audioCtx.currentTime); gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3); oscillator.start(); oscillator.stop(audioCtx.currentTime + 0.3); if (navigator.vibrate) navigator.vibrate([30, 50, 30]); } 
        else if (tip === 'hata') { oscillator.type = 'sawtooth'; oscillator.frequency.setValueAtTime(150, audioCtx.currentTime); gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime); gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.4); oscillator.start(); oscillator.stop(audioCtx.currentTime + 0.4); if (navigator.vibrate) navigator.vibrate([50, 50, 50, 50, 50]); }
        else if (tip === 'dokun') { if (navigator.vibrate) navigator.vibrate(10); }
    } catch(e) {}
}

function ozelUyari(mesaj, tip = 'bilgi') {
    let container = document.getElementById('toast-container'); if(!container) return; 
    let toast = document.createElement('div'); toast.className = `toast-mesaj ${tip}`;
    let ikon = tip === 'hata' ? '❌' : (tip === 'basari' ? '✅' : 'ℹ️');
    toast.innerHTML = `<span style="font-size: 20px;">${ikon}</span> <div style="flex:1;">${mesaj.replace(/\n/g, '<br>')}</div>`;
    container.appendChild(toast); if(tip === 'hata') oyunSesi('hata'); 
    setTimeout(() => { toast.style.animation = 'fadeOutUp 0.3s forwards'; setTimeout(() => toast.remove(), 300); }, 3500);
    if (document.hidden && "Notification" in window && Notification.permission === "granted") { let temizMesaj = mesaj.replace(/<[^>]*>?/gm, ''); new Notification(`SahibindenMotors ${ikon}`, { body: temizMesaj, icon: "https://cdn-icons-png.flaticon.com/512/3202/3202926.png" }); }
}
function modaliKapat(modalId) { let m = document.getElementById(modalId); if(m) m.style.display = "none"; }
function ayarlarModalAc() { document.getElementById('ayarlar-modal').style.display = "block"; }
function mobilMenuKapatAc() { document.querySelector('.sol-menu').classList.toggle('acik'); document.getElementById('mobil-menu-overlay').classList.toggle('acik'); }
function geceModuGecis() { document.body.classList.toggle('dark-mode'); let karanlikMi = document.body.classList.contains('dark-mode'); localStorage.setItem('sm_gece_modu', karanlikMi ? 'aktif' : 'pasif'); document.getElementById('btn-gece-modu').innerText = karanlikMi ? '☀️' : '🌙'; oyunSesi('dokun'); }
if(localStorage.getItem('sm_gece_modu') === 'aktif') { document.body.classList.add('dark-mode'); let btn = document.getElementById('btn-gece-modu'); if(btn) btn.innerText = '☀️'; }
document.addEventListener('click', () => { if ("Notification" in window && Notification.permission !== "granted" && Notification.permission !== "denied") Notification.requestPermission(); }, { once: true });

function paraFormatla(miktar) { if(!ayarlar.kompaktPara) return miktar.toLocaleString('tr-TR'); if(miktar >= 1000000) return (miktar / 1000000).toFixed(2).replace('.00', '') + "M"; if(miktar >= 1000) return (miktar / 1000).toFixed(1).replace('.0', '') + "K"; return miktar.toString(); }
function ayarDegistir(ayarAdi) { if(ayarAdi === 'ses') ayarlar.sesAcik = document.getElementById('ayar-ses').checked; if(ayarAdi === 'kompakt') { ayarlar.kompaktPara = document.getElementById('ayar-kompakt').checked; ekraniGuncelle(); } if(ayarAdi === 'hizliyenile') ayarlar.hizliYenile = document.getElementById('ayar-hizliyenile').checked; oyunuKaydet(); }

function ekraniGuncelle() {
    paramiz = Math.round(paramiz); euroBakiye = Math.round(euroBakiye);
    let prm = document.getElementById('paramiz'); if(prm) { prm.innerText = paraFormatla(paramiz); prm.style.color = paramiz < 0 ? '#e74c3c' : '#00b894'; }
    let kps = document.getElementById('kapasite-bilgi'); if(kps) { let toplam = garaj.length + rentACarFilosu.length; kps.innerText = toplam + " / " + (aracKapasitesi === 999 ? "Sınırsız" : aracKapasitesi); kps.style.color = (toplam >= aracKapasitesi && aracKapasitesi !== 999) ? '#e74c3c' : '#0984e3'; }
    let hp = document.getElementById('harita-puan'); if(hp) hp.innerText = haritaPuani.toFixed(1);
    let eb = document.getElementById('euro-bakiye'); if(eb) eb.innerText = paraFormatla(euroBakiye);
}

function aktifEkraniYenile() {
    try { ekraniGuncelle(); let pzr = document.getElementById('pazar-ekrani'); if(pzr && pzr.style.display === 'block') arabalariEkranaGetir(); let grj = document.getElementById('garaj-ekrani'); if(grj && grj.style.display === 'block') garajiEkranaGetir(); let dkn = document.getElementById('dukkan-ekrani'); if(dkn && dkn.style.display === 'block') dukkanEkraniniGuncelle(); let bnk = document.getElementById('banka-ekrani'); if(bnk && bnk.style.display === 'block') bankaEkraniniGuncelle(); let ist = document.getElementById('istatistik-ekrani'); if(ist && ist.style.display === 'block') istatistikleriGuncelle(); let sos = document.getElementById('sosyal-ekrani'); if(sos && sos.style.display === 'block') sosyalEkraniGuncelle(); let rnt = document.getElementById('rentacar-ekrani'); if(rnt && rnt.style.display === 'block') rentACarEkraniGuncelle(); let prs = document.getElementById('personel-ekrani'); if(prs && prs.style.display === 'block') personelEkraniGuncelle(); let ihl = document.getElementById('ihale-ekrani'); if(ihl && ihl.style.display === 'block') ihaleEkraniniGuncelle(); } catch(e) { console.error("Yenileme hatası:", e); }
}

function menuDegistir(menu) { oyunSesi('dokun'); document.querySelectorAll('.sayfa').forEach(s => s.style.display = 'none'); document.querySelectorAll('.sol-menu li').forEach(l => l.classList.remove('aktif')); let sayfa = document.getElementById(menu + '-ekrani'); if(sayfa) sayfa.style.display = 'block'; let btn = document.getElementById('menu-' + menu); if(btn) btn.classList.add('aktif'); document.querySelectorAll('.bottom-nav-item').forEach(b => b.classList.remove('aktif')); let bNavItem = document.getElementById('bnav-' + menu); if(bNavItem) bNavItem.classList.add('aktif'); document.querySelectorAll('.modal').forEach(m => { if(m.id !== 'karar-modal' && m.id !== 'telefon-modal') m.style.display = 'none'; }); aktifEkraniYenile(); let sm = document.querySelector('.sol-menu'); if(sm) sm.classList.remove('acik'); let ov = document.getElementById('mobil-menu-overlay'); if(ov) ov.classList.remove('acik'); }
function oyunuSifirlaEkrani() { if(window.confirm("🚨 TÜM İLERLEMEN SİLİNECEK! 🚨\n\nSıfırdan başlayacaksın. Onaylıyor musun?")) { window.localStorage.removeItem('sahibindenMotorsKayit'); window.location.href = window.location.href.split('?')[0]; } }

// ==========================================
// 3. KAYIT SİSTEMİ
// ==========================================
function oyunuKaydet() {
    const kayitData = { galeriAdi, paramiz, bankaBorcu, garaj, gun, dukkanSeviyesi, aracKapasitesi, toplamSatilanArac, toplamGelir, toplamGider, arabalar, idSayaci, hakanAbiSonKullanim, piyasaDurumu, piyasaCarpani, sosyalMedya, dmKutusu, haritaPuani, gizliKusurluAraclar, euroKuru, euroBakiye, senetler, rentACarFilosu, personeller, personelMorali, krediNotu, krediler, mevduat, eksiBakiyeGun, borsa, vergiBorcu, gecikmisVergiGun, eHacizAktif, sabikaliSatislar, ayarlar, aktifReklam, aktifSponsor, sponsorlukTeklifleri };
    localStorage.setItem('sahibindenMotorsKayit', JSON.stringify(kayitData));
}

function oyunuYukle() {
    const eskiKayit = JSON.parse(localStorage.getItem('sahibindenMotorsKayit'));
    if (eskiKayit && eskiKayit.galeriAdi) {
        galeriAdi = eskiKayit.galeriAdi; paramiz = Math.round(eskiKayit.paramiz) || 0; bankaBorcu = eskiKayit.bankaBorcu || 0; 
        garaj = eskiKayit.garaj || []; gun = eskiKayit.gun || 1; dukkanSeviyesi = eskiKayit.dukkanSeviyesi || 1; aracKapasitesi = eskiKayit.aracKapasitesi || 2; 
        toplamSatilanArac = eskiKayit.toplamSatilanArac || 0; toplamGelir = eskiKayit.toplamGelir || 0; toplamGider = eskiKayit.toplamGider || 0; arabalar = eskiKayit.arabalar || []; 
        idSayaci = eskiKayit.idSayaci || 1; hakanAbiSonKullanim = eskiKayit.hakanAbiSonKullanim || -15; piyasaDurumu = eskiKayit.piyasaDurumu || "Normal"; piyasaCarpani = eskiKayit.piyasaCarpani || 1.0; 
        haritaPuani = eskiKayit.haritaPuani || 5.0; gizliKusurluAraclar = eskiKayit.gizliKusurluAraclar || []; euroKuru = eskiKayit.euroKuru || 38.50; euroBakiye = Math.round(eskiKayit.euroBakiye) || 0; senetler = eskiKayit.senetler || []; rentACarFilosu = eskiKayit.rentACarFilosu || []; 
        personeller = eskiKayit.personeller || { usta: false, smUzman: false, satisTemsilci: false, vale: false, eksper: false, avukat: false }; personelMorali = eskiKayit.personelMorali !== undefined ? eskiKayit.personelMorali : 100;
        
        if (eskiKayit.ayarlar) { ayarlar = eskiKayit.ayarlar; } else { ayarlar = { sesAcik: true, kompaktPara: false, hizliYenile: false }; }
        let aSes = document.getElementById('ayar-ses'); if(aSes) aSes.checked = ayarlar.sesAcik; let aKomp = document.getElementById('ayar-kompakt'); if(aKomp) aKomp.checked = ayarlar.kompaktPara; let aHiz = document.getElementById('ayar-hizliyenile'); if(aHiz) aHiz.checked = ayarlar.hizliYenile;

        sosyalMedya = eskiKayit.sosyalMedya || { aktif: false, platform: "", kullaniciAdi: "", takipci: 0, populerlik: 0, maviTik: false, lincKalanGun: 0, gonderiler: [], takipciGecmisi: [0,0,0,0,0,0,0] }; dmKutusu = eskiKayit.dmKutusu || [];
        aktifReklam = eskiKayit.aktifReklam || { aktif: false, kitle: "", kalanGun: 0 }; aktifSponsor = eskiKayit.aktifSponsor || { aktif: false, isim: "", gunlukGetiri: 0, kalanGun: 0 }; sponsorlukTeklifleri = eskiKayit.sponsorlukTeklifleri || [];
        krediNotu = eskiKayit.krediNotu || 900; krediler = eskiKayit.krediler || []; mevduat = eskiKayit.mevduat || {aktif: false, anapara: 0, kalanGun: 0, faizOrani: 0.15}; eksiBakiyeGun = eskiKayit.eksiBakiyeGun || 0;
        if(eskiKayit.borsa) borsa = eskiKayit.borsa; vergiBorcu = eskiKayit.vergiBorcu || 0; gecikmisVergiGun = eskiKayit.gecikmisVergiGun || 0; eHacizAktif = eskiKayit.eHacizAktif || false; sabikaliSatislar = eskiKayit.sabikaliSatislar || [];
        garaj.forEach(a => { if(a.tamirDurumu === undefined) a.tamirDurumu = 0; if(a.muayeneVar === undefined) a.muayeneVar = true; if(a.muayenede === undefined) a.muayenede = false; if(a.gumrukKalanGun === undefined) a.gumrukKalanGun = 0; if(a.vites === undefined) a.vites = "Otomatik"; if(a.yakit === undefined) a.yakit = "Benzin"; if(a.motor === undefined) a.motor = "1.6"; if(a.hp === undefined) a.hp = 110; if(!a.donanimlar) a.donanimlar = ["Cam Tavan", "Led Far"]; }); document.getElementById('gun').innerText = gun; 
        return true; 
    }
    return false; 
}

// ==========================================
// 4. ARAÇ VE PAZAR MOTORU
// ==========================================
function ekspertizUret() { const parcalar = ['kaput', 'tavan', 'bagaj', 'solOnCamurluk', 'solOnKapi', 'solArkaKapi', 'solArkaCamurluk', 'sagOnCamurluk', 'sagOnKapi', 'sagArkaKapi', 'sagArkaCamurluk']; const ekspertiz = {}; let hasarPuan = 0; let temizMi = Math.random() < 0.25; parcalar.forEach(p => { if (temizMi) { ekspertiz[p] = 'orijinal'; } else { let rnd = Math.random(); if (rnd < 0.50) { ekspertiz[p] = 'orijinal'; } else if (rnd < 0.70) { ekspertiz[p] = 'lokal'; hasarPuan += 1; } else if (rnd < 0.88) { ekspertiz[p] = 'boyali'; hasarPuan += 3; } else { ekspertiz[p] = 'degisen'; hasarPuan += 6; } } }); let agirHasarSebebi = ""; if (ekspertiz['tavan'] === 'degisen' || ekspertiz['tavan'] === 'boyali') { hasarPuan += 25; agirHasarSebebi = "Tavan İşlemli (Taklalı)"; } if (ekspertiz['kaput'] !== 'orijinal' && ekspertiz['solOnCamurluk'] !== 'orijinal' && ekspertiz['sagOnCamurluk'] !== 'orijinal') { hasarPuan += 20; agirHasarSebebi = agirHasarSebebi ? agirHasarSebebi + " ve Ön 3 Parça" : "Ön 3 Parça İşlemli (Önden Kazalı)"; } return { detay: ekspertiz, puan: hasarPuan, agirHasarSebebi: agirHasarSebebi }; }
function tramerUret(hasarPuan, agirHasarSebebi) { let sasiNo = "WBA" + Math.random().toString(36).substring(2, 8).toUpperCase() + "***"; if (hasarPuan === 0) return `Kayıtlarımıza göre <b>${sasiNo}</b> şasi numaralı araçta <b>HASAR KAYDI BULUNMAMIŞTIR.</b>`; let kazaSayisi = Math.floor(Math.random() * 3) + 1; let toplamTramer = hasarPuan * (Math.floor(Math.random() * 15000) + 10000); if (agirHasarSebebi || hasarPuan > 15) return `Kayıtlarımıza göre <b>${sasiNo}</b> şasi numaralı araçta <b>AĞIR HASAR KAYDI (ÇARPMA)</b> bulunmuştur. Toplam: <b>${toplamTramer.toLocaleString('tr-TR')} TL</b>.`; return `Kayıtlarımıza göre <b>${sasiNo}</b> şasi numaralı araçta <b>${kazaSayisi} adet</b> kazaya karışmıştır. Toplam: <b>${toplamTramer.toLocaleString('tr-TR')} TL</b>.`; }
function aciklamaUret(ekspertizPuan, km, marka, saticiTipi, agirHasarSebebi) { if (saticiTipi === "Galeri") { if (ekspertizPuan === 0) return `Firmamız güvencesiyle, hatasız boyasız.`; return `Araç temizdir. Firmamızdan takas imkanı mevcuttur.`; } else { if (agirHasarSebebi) return `Aracın kazası belası yoktur, keyfe keder boyattım.`; if (ekspertizPuan === 0 && km < 50000) return `Kapalı garaj arabasıdır. Nokta hatasızdır. İlk sahibinden.`; if (ekspertizPuan < 5) return `Sadece temizlik boyaları mevcuttur. Şase işlemsizdir.`; return `Araç ağır hasar kayıtlıdır. Takıntısı olan aramasın.`; } }
function rastgeleArabaUret() {
    const sablon = aracSablonlari[Math.floor(Math.random() * aracSablonlari.length)]; const yil = Math.floor(Math.random() * (2026 - 2020 + 1)) + 2020; const km = ((2026 - yil) * Math.floor(Math.random() * 20000 + 10000)) + Math.floor(Math.random() * 15000);
    let degerKaybiOrani = ((2026 - yil) * 0.03) + ((km / 10000) * 0.015); if (degerKaybiOrani > 0.40) degerKaybiOrani = 0.40; let tabanHesap = sablon.tabanFiyat * (1 - degerKaybiOrani);
    let ekspertizVerisi = ekspertizUret(); let hasarIndirimi = ekspertizVerisi.puan * 0.015; if (hasarIndirimi > 0.50) hasarIndirimi = 0.50; let fiyat = Math.round((tabanHesap * (1 - hasarIndirimi)) * piyasaCarpani);
    let agirHasarliMi = ekspertizVerisi.agirHasarSebebi !== "" || ekspertizVerisi.puan > 15; let muayeneDurumu = Math.random() > 0.20; 
    let saticiTipi = Math.random() > 0.5 ? "Sahibinden" : "Galeri"; let sehir = sehirler[Math.floor(Math.random() * sehirler.length)]; let gumrukAraci = false; let gumrukKalanGun = 0;
    if (Math.random() < 0.10) { gumrukAraci = true; saticiTipi = "Gümrük Bakanlığı"; sehir = "Edirne (Gümrük)"; fiyat = Math.round(fiyat * 0.65); gumrukKalanGun = 5; }
    if (saticiTipi === "Galeri") fiyat = Math.round(fiyat * 1.05); if (saticiTipi === "Sahibinden") fiyat = Math.round(fiyat * 0.95); let takasFiyati = Math.round(fiyat * 1.08);
    let vitesler = ["Otomatik", "Manuel"]; let vites = vitesler[Math.floor(Math.random() * vitesler.length)]; let yakitTipleri = ["Benzin", "Dizel"]; if (sablon.marka === "Toyota" || sablon.marka === "Citroën") yakitTipleri.push("Hibrit");
    let yakit = yakitTipleri[Math.floor(Math.random() * yakitTipleri.length)]; let motor, hp; if (sablon.marka === "Citroën" && sablon.model.includes("Hybrid")) { yakit = "Hibrit"; vites = "Otomatik"; motor = "1.2"; hp = 136; } else { motor = (Math.random() * 1.0 + 1.0).toFixed(1); hp = Math.floor(Math.random() * 80) + 90; }
    let donanimHavuzu = ["Cam Tavan", "Hayalet Ekran", "Koltuk Isıtma", "Apple CarPlay", "Katlanır Ayna", "Şerit Takip", "Geri Görüş", "Led Far"]; let donanimlar = donanimHavuzu.sort(() => 0.5 - Math.random()).slice(0, Math.floor(Math.random() * 4) + 2);
    let rehinliMi = Math.random() < 0.15 && saticiTipi === "Sahibinden"; let rehinBedeli = rehinliMi ? Math.round(fiyat * (Math.random() * 0.25 + 0.05)) : 0; 
    return { id: idSayaci++, marka: sablon.marka, model: sablon.model, yil: yil, km: Math.floor(km), fiyat: fiyat, takasFiyati: takasFiyati, hasarli: agirHasarliMi, tamirMasrafi: agirHasarliMi ? Math.round(fiyat * 0.1) : 0, saticiTipi: saticiTipi, sehir: sehir, gumrukAraci: gumrukAraci, gumrukKalanGun: gumrukKalanGun, agirHasarSebebi: ekspertizVerisi.agirHasarSebebi, modifiyeler: [], gorsel: sablon.gorsel, ekspertiz: ekspertizVerisi.detay, ilanAciklamasi: aciklamaUret(ekspertizVerisi.puan, km, sablon.marka, saticiTipi, ekspertizVerisi.agirHasarSebebi), teklifler: [], telefon: '05' + Math.floor(Math.random() * 90000000 + 10000000), tramer: tramerUret(ekspertizVerisi.puan, ekspertizVerisi.agirHasarSebebi), tamirDurumu: 0, muayeneVar: muayeneDurumu, muayenede: false, kaskolu: false, vites: vites, yakit: yakit, motor: motor, hp: hp, donanimlar: donanimlar, rehinliMi: rehinliMi, rehinBedeli: rehinBedeli, rehinSorgulandiMi: false };
}
function piyasayiYenile() { arabalar = []; for(let i = 0; i < 6; i++) { arabalar.push(rastgeleArabaUret()); } aktifEkraniYenile(); }

// ==========================================
// 5. PULL-TO-REFRESH VE GÜNLÜK DÖNGÜ & YENİ SOSYAL ALGORİTMALAR
// ==========================================
let ptrBaslangicY = 0; let ptrCekiliyor = false; const ptrAlan = document.getElementById('ptr-spinner');
document.addEventListener('touchstart', function(e) { if(window.scrollY === 0 && document.getElementById('pazar-ekrani').style.display === 'block') { ptrBaslangicY = e.touches[0].screenY; ptrCekiliyor = true; } }, {passive: true});
document.addEventListener('touchmove', function(e) { if(!ptrCekiliyor || !ptrAlan) return; let cekmeMesafesi = e.touches[0].screenY - ptrBaslangicY; if(cekmeMesafesi > 60) { ptrAlan.classList.add('aktif'); } else { ptrAlan.classList.remove('aktif'); } }, {passive: true});
document.addEventListener('touchend', function(e) { if(!ptrCekiliyor || !ptrAlan) return; if(ptrAlan.classList.contains('aktif')) { f5At(); } ptrCekiliyor = false; ptrBaslangicY = 0; setTimeout(() => { ptrAlan.classList.remove('aktif'); }, 500);});

function ekonomiOlayiTetikle() { 
    const sans = Math.random(); let eskiCarpan = piyasaCarpani; let kurDegisimi = (Math.random() * 0.04) - 0.015; euroKuru = euroKuru * (1 + kurDegisimi); if(euroKuru < 20) euroKuru = 20; 
    if (sans < 0.05 && piyasaDurumu !== "Kriz") { piyasaDurumu = "Kriz"; piyasaCarpani = 0.85; euroKuru *= 1.10; borsa.forEach(h => h.fiyat *= 0.80); oyunSesi('hata'); ozelUyari("📉 KRİZ! Piyasa kilitlendi, Borsa Çöktü!", "hata"); } 
    else if (sans > 0.95 && piyasaDurumu !== "Canli") { piyasaDurumu = "Canli"; piyasaCarpani = 1.20; euroKuru *= 0.95; borsa.forEach(h => h.fiyat *= 1.20); oyunSesi('kasa'); ozelUyari("📈 BOOM! Kredi kampanyası! Piyasa Uçuyor!", "basari"); } 
    else if (sans > 0.40 && sans < 0.45 && piyasaDurumu !== "Normal") { piyasaDurumu = "Normal"; piyasaCarpani = 1.0; } 
    if (eskiCarpan !== piyasaCarpani) { let degisimOrani = piyasaCarpani / eskiCarpan; garaj.forEach(araba => { araba.fiyat = Math.round(araba.fiyat * degisimOrani); araba.teklifler = []; }); } 
}

function davaKriziBaslat(index) {
    if(personeller.avukat && Math.random() < 0.85) { oyunSesi('kasa'); ozelUyari(`⚖️ Şirket avukatın, ${sabikaliSatislar[index].musteri} tarafından açılan dolandırıcılık davasını iptal ettirdi!`, "basari"); sabikaliSatislar.splice(index, 1); return; }
    let s = sabikaliSatislar[index]; let modal = document.getElementById('karar-modal');
    document.getElementById('karar-baslik').innerText = "⚖️ Mahkeme Tebligatı!"; document.getElementById('karar-metin').innerHTML = `Geçmişte KM'sini düşürüp sattığınız <b>${s.musteri}</b> durumu fark etti ve <b>Nitelikli Dolandırıcılık</b> suçlamasıyla dava açtı!<br><br>Avukatı uzlaşmak için <b>150.000 ₺</b> istiyor.`;
    let btn1 = document.getElementById('karar-btn-1'); let btn2 = document.getElementById('karar-btn-2');
    btn1.innerText = "Sus Payı Öde (150.000 ₺)"; btn1.className = "btn btn-yesil";
    btn1.onclick = function() { if(paramiz >= 150000) paramiz -= 150000; else bankaBorcu += 150000; toplamGider += 150000; sabikaliSatislar.splice(index, 1); oyunSesi('kasa'); modaliKapat('karar-modal'); aktifEkraniYenile(); oyunuKaydet(); ozelUyari("Parayı ödeyip davayı geri çektirdin.", "bilgi"); };
    btn2.innerText = "Mahkemeye Çık (Risk Al)"; btn2.className = "btn btn-kirmizi";
    btn2.onclick = function() { sabikaliSatislar.splice(index, 1); if(Math.random() < 0.30) { oyunSesi('kasa'); modaliKapat('karar-modal'); aktifEkraniYenile(); oyunuKaydet(); ozelUyari("Hakim beraat verdi! Yırttın.", "basari"); } else { let ceza = 300000; if(paramiz >= ceza) paramiz -= ceza; else bankaBorcu += ceza; toplamGider += ceza; haritaPuani -= 2.0; krediNotu -= 300; oyunSesi('hata'); modaliKapat('karar-modal'); aktifEkraniYenile(); oyunuKaydet(); ozelUyari(`🚨 Mahkemeyi KAYBETTİN! 300.000 ₺ tazminat ödedin.`, "hata"); } };
    modal.style.display = 'block';
}

// YENİ: DİJİTAL İFŞA KRİZİ
function ifsaKriziBaslat(index) {
    if(personeller.avukat && Math.random() < 0.40) { oyunSesi('kasa'); ozelUyari(`⚖️ Avukatın yasal ihtarla ifşa videosunu yayından kaldırttı!`, "basari"); sabikaliSatislar.splice(index, 1); return; }
    let s = sabikaliSatislar[index]; let modal = document.getElementById('karar-modal');
    document.getElementById('karar-baslik').innerText = "🚨 DİJİTAL İFŞA KRİZİ!"; 
    document.getElementById('karar-metin').innerHTML = `Geçmişte hasarını gizleyip sattığınız <b>${s.musteri}</b> durumu TikTok'ta ifşaladı! Video viral oldu ve linç yiyorsunuz.<br><br><b>Müşteri videoyu silmek için 200.000 ₺ istiyor.</b>`;
    
    let btn1 = document.getElementById('karar-btn-1'); let btn2 = document.getElementById('karar-btn-2');
    btn1.innerText = "Parayı Ver & Sildir (200.000 ₺)"; btn1.className = "btn btn-yesil";
    btn1.onclick = function() { if(paramiz >= 200000) paramiz -= 200000; else bankaBorcu += 200000; toplamGider += 200000; sabikaliSatislar.splice(index, 1); oyunSesi('kasa'); modaliKapat('karar-modal'); aktifEkraniYenile(); oyunuKaydet(); ozelUyari("Müşteriye parayı verip ifşayı kaldırttın. İtibarın kurtuldu.", "bilgi"); };
    
    if (personeller.smUzman) {
        btn2.innerText = "SM Uzmanı: Bot Bas & Linci Bastır (25.000 ₺)"; btn2.className = "btn btn-mavi";
        btn2.onclick = function() { if(paramiz >= 25000) paramiz -= 25000; sabikaliSatislar.splice(index, 1); oyunSesi('tamir'); modaliKapat('karar-modal'); aktifEkraniYenile(); oyunuKaydet(); ozelUyari("SM Uzmanın sahte hesaplarla adamı trolledi ve konuyu kapattı!", "basari"); };
    } else {
        btn2.innerText = "Sessiz Kal (Linç Ye ve Takipçi Kaybet)"; btn2.className = "btn btn-kirmizi";
        btn2.onclick = function() { sabikaliSatislar.splice(index, 1); sosyalMedya.lincKalanGun = 5; haritaPuani -= 1.5; oyunSesi('hata'); modaliKapat('karar-modal'); aktifEkraniYenile(); oyunuKaydet(); ozelUyari(`🚨 SAYFAN LİNÇ YİYOR! 5 gün boyunca kan kaybedeceksin.`, "hata"); };
    }
    modal.style.display = 'block';
}

// YENİ: SPONSORLUK MOTORU
function sponsorTeklifiUret() {
    let markalar = ["AutoClub Oto Parfüm", "Wolf Energy Drink", "VİP Detailing Garajı", "JetBet Sanal Bahis"];
    let m = markalar[Math.floor(Math.random() * markalar.length)];
    let getiri = Math.floor((sosyalMedya.takipci / 10000) * 5000); // 100k takipçi = 50k günlük
    if(m === "JetBet Sanal Bahis") getiri *= 3; // yüksek kazanç, yüksek risk
    sponsorlukTeklifleri.push({ isim: m, gunlukGetiri: getiri, kalanGun: 7 });
}
function sponsorKabul() { aktifSponsor = sponsorlukTeklifleri.shift(); aktifSponsor.aktif = true; oyunSesi('kasa'); aktifEkraniYenile(); oyunuKaydet(); ozelUyari(`${aktifSponsor.isim} ile anlaşma sağlandı!`, "basari"); }
function sponsorReddet() { sponsorlukTeklifleri.shift(); oyunSesi('dokun'); aktifEkraniYenile(); oyunuKaydet(); }
function sponsorIptal() { aktifSponsor.aktif = false; oyunSesi('hata'); aktifEkraniYenile(); oyunuKaydet(); ozelUyari(`Sözleşme tek taraflı feshedildi.`, "bilgi"); }

// YENİ: META ADS REKLAM ÇIKMA
function hedefliReklamEkraniAc() {
    if(!sosyalMedya.aktif) return ozelUyari("Önce sosyal medya hesabı açmalısın!", "hata");
    if(aktifReklam.aktif) return ozelUyari(`Zaten aktif bir reklamın var. Bitiş: ${aktifReklam.kalanGun} Gün.`, "bilgi");
    document.getElementById('meta-ads-modal').style.display = 'block';
}
function reklamKampanyasiBaslat(kitle, fiyat) {
    if(!bakiyeYeterliMi(fiyat)) return ozelUyari("Reklam bütçesi için yeterli paran yok!", "hata");
    paramiz -= fiyat; toplamGider += fiyat;
    aktifReklam = { aktif: true, kitle: kitle, kalanGun: 3 };
    oyunSesi('kasa'); modaliKapat('meta-ads-modal'); aktifEkraniYenile(); oyunuKaydet();
    ozelUyari(`🚀 Hedefli Reklam Başladı! 3 gün boyunca DM kutuna ${kitle} müşterileri düşecek.`, "basari");
}

function sonrakiGun() {
    try {
        gun++; let g = document.getElementById('gun'); if(g) g.innerText = gun; oyunSesi('dokun');
        if (sosyalMedya.aktif) { sosyalMedya.takipciGecmisi.shift(); sosyalMedya.takipciGecmisi.push(sosyalMedya.takipci); }
        if (paramiz < 0) { personelMorali -= 8; } else { personelMorali += 3; }
        if (personelMorali > 100) personelMorali = 100; if (personelMorali < 0) personelMorali = 0;

        // Dava / İfşa Algoritması
        let davaTetiklendi = false;
        if(sabikaliSatislar.length > 0) { 
            for (let i = 0; i < sabikaliSatislar.length; i++) { 
                if(!davaTetiklendi && gun - sabikaliSatislar[i].gun > 5 && Math.random() < 0.15) { 
                    davaTetiklendi = true; 
                    setTimeout(() => { 
                        if(sosyalMedya.aktif && Math.random() > 0.5) { ifsaKriziBaslat(i); } else { davaKriziBaslat(i); }
                    }, 1000); break; 
                } 
            } 
        }
        
        // Ay Sonu Giderler
        if (gun % 30 === 0) { 
            let guncelKira = seviyeler[dukkanSeviyesi - 1].kira; 
            let maaslar = (personeller.usta ? 25000 : 0) + (personeller.smUzman ? 15000 : 0) + (personeller.satisTemsilci ? 30000 : 0) + (personeller.vale ? 10000 : 0) + (personeller.eksper ? 20000 : 0) + (personeller.avukat ? 40000 : 0);
            let toplamAylikGider = guncelKira + aylikFaturalar + maaslar; 
            paramiz -= toplamAylikGider; toplamGider += toplamAylikGider; 
            oyunSesi('hata'); ozelUyari(`📅 Ay sonu! Maaşlar ve Giderler (${paraFormatla(toplamAylikGider)} ₺) kesildi.`, "bilgi"); 
            if(paramiz < 0) { personelMorali -= 40; setTimeout(()=> {ozelUyari("🚨 MAAŞLAR ÖDENEMEDİ! Personelin morali dibe vurdu, isyan edebilirler!", "hata");}, 2000); }
        }

        // Personel Sabotajı
        if (personelMorali < 30 && Math.random() < 0.20) {
            let isyanlar = [];
            if(personeller.usta) isyanlar.push(() => { paramiz -= 15000; ozelUyari("🚨 SABOTAJ! Usta Başı takımları satıp kaçtı! (15.000 ₺ Zarar)", "hata"); personeller.usta = false; });
            if(personeller.smUzman) isyanlar.push(() => { sosyalMedya.takipci = Math.floor(sosyalMedya.takipci * 0.8); ozelUyari("🚨 REZALET! SM Uzmanı sayfadan küfredip kaçtı! Takipçi kaybettin.", "hata"); personeller.smUzman = false; });
            if(personeller.satisTemsilci) isyanlar.push(() => { ozelUyari("🚨 İSTİFA! Satış temsilcisi müşteri portföyünü alıp rakip galeriye geçti!", "hata"); personeller.satisTemsilci = false; });
            if(isyanlar.length > 0) { isyanlar[Math.floor(Math.random() * isyanlar.length)](); oyunSesi('hata'); } 
            else { personeller = { usta: false, smUzman: false, satisTemsilci: false, vale: false, eksper: false, avukat: false }; ozelUyari("🚨 İSTİFA! Tüm personel istifa etti!", "hata"); }
        }

        if (vergiBorcu > 0) { 
            gecikmisVergiGun++; let hacizLimiti = personeller.avukat ? 8 : 5;
            if (gecikmisVergiGun >= hacizLimiti && !eHacizAktif) { eHacizAktif = true; oyunSesi('hata'); ozelUyari("🚨 MALİYE BAKANLIĞI e-HACİZ KOYDU!", "hata"); } 
        } else { gecikmisVergiGun = 0; eHacizAktif = false; }

        // SOSYAL MEDYA MOTORU GÜNLÜK HESAPLARI
        if (sosyalMedya.aktif) {
            // 1. Linç Düşüşü
            if (sosyalMedya.lincKalanGun > 0) { 
                sosyalMedya.lincKalanGun--; 
                let kayip = Math.floor(sosyalMedya.takipci * (Math.random() * 0.05 + 0.02)); sosyalMedya.takipci -= kayip;
                ozelUyari(`🚨 Linç devam ediyor! ${kayip} takipçi kaybettin.`, "hata");
            } 
            // 2. DM Gelme (Hedefli Reklam Etkisi)
            else if (garaj.length > 0) { 
                let dmIhtimali = (sosyalMedya.takipci / 50000) + (personeller.smUzman ? 0.25 : 0.10); 
                if (aktifReklam.aktif) dmIhtimali += 0.40; // Reklam çıkılmışsa DM yağar
                if (dmIhtimali > 0.95) dmIhtimali = 0.95; 
                
                if (Math.random() < dmIhtimali) { 
                    let sansliAraba = garaj[Math.floor(Math.random() * garaj.length)]; 
                    let teklif = 0; let kitle = "Normal";
                    
                    if(aktifReklam.aktif) {
                        kitle = aktifReklam.kitle;
                        if(kitle === 'Zengin') teklif = sansliAraba.fiyat * (Math.random() * 0.15 + 1.05); // Değerinin üstünde
                        if(kitle === 'Tayfa') teklif = sansliAraba.fiyat * (Math.random() * 0.10 + 1.0); // Değerinde
                        if(kitle === 'Olucu') teklif = sansliAraba.fiyat * (Math.random() * 0.15 + 0.60); // Fiyat öldürür
                    } else {
                        teklif = Math.random() * ((sansliAraba.fiyat * 1.15) - (sansliAraba.fiyat * 0.95) + 1) + (sansliAraba.fiyat * 0.95); 
                    }
                    if(sosyalMedya.maviTik) teklif *= 1.10; 
                    dmKutusu.push({ gonderen: "@" + isimlerHavuzu[Math.floor(Math.random()*isimlerHavuzu.length)].toLowerCase() + Math.floor(Math.random()*99), metin: `Araba duruyor mu? Gelip alayım.`, teklifFiyat: Math.round(teklif), arabaId: sansliAraba.id }); 
                } 
            }
            if (personeller.smUzman) { sosyalMedya.takipci += Math.floor(Math.random() * 150) + 50; }
            
            // 3. Sponsorluk Algoritması
            if (aktifSponsor.aktif) {
                paramiz += aktifSponsor.gunlukGetiri; toplamGelir += aktifSponsor.gunlukGetiri; aktifSponsor.kalanGun--;
                let tepkiSansi = aktifSponsor.isim.includes("Bahis") ? 0.30 : 0.10;
                if (Math.random() < tepkiSansi) { let kayip = Math.floor(sosyalMedya.takipci * 0.02); sosyalMedya.takipci -= kayip; ozelUyari(`📉 Sponsorluk tepki çekti! "Sayfa reklama boğuldu" diyen ${kayip} kişi takipten çıktı.`, "bilgi"); }
                if (aktifSponsor.kalanGun <= 0) { aktifSponsor.aktif = false; ozelUyari("🤝 Sponsorluk anlaşması sona erdi.", "bilgi"); }
            }
            if (sosyalMedya.takipci > 25000 && !aktifSponsor.aktif && sponsorlukTeklifleri.length === 0 && Math.random() < 0.15) { sponsorTeklifiUret(); }
            
            // 4. Meta Ads
            if (aktifReklam.aktif) { aktifReklam.kalanGun--; if (aktifReklam.kalanGun <= 0) aktifReklam.aktif = false; }
        }

        if (mevduat.aktif) { mevduat.kalanGun--; if (mevduat.kalanGun <= 0) { let getiri = Math.floor(mevduat.anapara * mevduat.faizOrani); paramiz += (mevduat.anapara + getiri); toplamGelir += getiri; mevduat.aktif = false; ozelUyari(`💰 Vadeli Hesabın Doldu!\nFaiziyle ${paraFormatla(getiri)} ₺ aldın.`, "basari"); } }
        if (krediler.length > 0) { krediler = krediler.filter(k => { paramiz -= k.taksit; toplamGider += k.taksit; k.kalanGun--; krediNotu += 2; if (k.kalanGun <= 0) { krediNotu += 50; ozelUyari("🎉 Kredi bitti! Notun fırladı.", "basari"); return false; } return true; }); }

        if (paramiz < 0) {
            let cezaFaizi = Math.floor(Math.abs(paramiz) * 0.05); paramiz -= cezaFaizi; toplamGider += cezaFaizi; eksiBakiyeGun++; krediNotu -= 20;
            if (eksiBakiyeGun >= 3) { if (garaj.length > 0) { garaj.sort((a,b) => b.fiyat - a.fiyat); let h = garaj.shift(); paramiz += Math.floor(h.fiyat * 0.50); eksiBakiyeGun = 0; krediNotu -= 300; oyunSesi('hata'); ozelUyari(`🚨 BANKA HACZİ!\nBanka garajındaki ${h.marka} aracına el koyup sattı!`, "hata"); } else if (rentACarFilosu.length > 0) { let h = rentACarFilosu.shift(); paramiz += Math.floor(h.fiyat * 0.50); eksiBakiyeGun = 0; krediNotu -= 300; oyunSesi('hata'); ozelUyari(`🚨 BANKA HACZİ!\nBanka Rent A Car filondaki ${h.marka} aracına el koyup sattı!`, "hata"); } }
        } else { eksiBakiyeGun = 0; } 
        if(krediNotu > 1900) krediNotu = 1900; if(krediNotu < 0) krediNotu = 0;
        
        ekonomiOlayiTetikle(); senetTahsilatiYap(); rentACarGelirVeRiskYonetimi();
        garaj.forEach(araba => {
            if (araba.gumrukKalanGun > 0) { araba.gumrukKalanGun--; }
            if (araba.tamirDurumu > 0) {
                araba.tamirDurumu--; 
                if (araba.tamirDurumu <= 0) { araba.tamirDurumu = 0; if (araba.muayenede) { araba.muayenede = false; if (araba.modifiyeler.includes("Stage 1 Yazılım & Egzoz") && Math.random() < 0.80) { let ceza = 15000; if(bakiyeYeterliMi(ceza)) { paramiz -= ceza; toplamGider += ceza; araba.muayeneVar = true; oyunSesi('hata'); ozelUyari(`🚨 Abartı egzozdan muayeneden kaldı. ${ceza.toLocaleString('tr-TR')} ₺ harcadın.`, "hata"); } else { araba.tamirDurumu = 1; araba.muayenede = true; ozelUyari("Aracın egzozdan kaldı. Paran olmadığı için istasyonda yatıyor!", "hata"); } } else { araba.muayeneVar = true; oyunSesi('kasa'); ozelUyari("✅ Araç TÜVTÜRK'ten geçti!", "basari"); } } else { araba.hasarli = false; araba.fiyat += (araba.tamirMasrafi * 3); araba.tamirMasrafi = 0; oyunSesi('kasa'); ozelUyari(`🛠️ Kaportacı: "Araban hazır ustam."`, "basari"); } } 
                else if (!araba.muayenede && Math.random() < 0.20 && !personeller.usta) { let ekstra = Math.floor(araba.tamirMasrafi * 0.5); if (bakiyeYeterliMi(ekstra)) { paramiz -= ekstra; toplamGider += ekstra; araba.tamirDurumu += 2; oyunSesi('hata'); ozelUyari(`📞 Hamza Usta: "Motorda sıkıntı çıktı. ${ekstra.toLocaleString('tr-TR')} ₺ kilitledim."`, "hata"); } }
            } else if(araba.muayeneVar && araba.gumrukKalanGun === 0) {
                if (!araba.teklifler) araba.teklifler = []; araba.teklifler = araba.teklifler.filter(t => (gun - t.gelisGunu) < 3); let teklifIhtimali = (piyasaDurumu === "Canli" ? 0.6 : (piyasaDurumu === "Kriz" ? 0.1 : 0.3)) + ((haritaPuani - 3.0) * 0.1); if(teklifIhtimali < 0.05) teklifIhtimali = 0.05; 
                if (Math.random() < teklifIhtimali) { 
                    let yeniTeklifSayisi = Math.floor(Math.random() * 2) + 1; 
                    for(let i=0; i<yeniTeklifSayisi; i++) { 
                        let musteriTipiRnd = Math.random(); let musteriTipi = "Normal"; let teklifTutari = 0; let takasArabasi = null; 
                        if (araba.modifiyeler.length >= 3 && Math.random() < 0.40) { musteriTipi = "Tayfa"; teklifTutari = Math.floor(araba.fiyat * (Math.random() * 0.20 + 1.10)); } 
                        else if (musteriTipiRnd < 0.20) { musteriTipi = "Olucu"; teklifTutari = Math.floor(araba.fiyat * (Math.random() * 0.20 + 0.50)); } 
                        else if (musteriTipiRnd < 0.45) { musteriTipi = "Takas"; takasArabasi = rastgeleArabaUret(); if (takasArabasi.fiyat >= araba.fiyat) takasArabasi.fiyat = Math.floor(araba.fiyat * 0.6); teklifTutari = Math.floor((araba.fiyat - takasArabasi.fiyat) * (Math.random() * 0.2 + 0.9)); } 
                        else { let maxFiyat = araba.hasarli ? araba.fiyat * 0.95 : araba.fiyat * 1.20; teklifTutari = Math.floor(Math.random() * (maxFiyat - (araba.fiyat * 0.90) + 1)) + (araba.fiyat * 0.90); } 
                        if(personeller.vale) { teklifTutari = Math.round(teklifTutari * 1.03); }
                        if (personeller.satisTemsilci && musteriTipi === "Olucu") continue; 
                        if (teklifTutari > 2500000 && musteriTipi === "Normal") musteriTipi = "Zengin"; 
                        araba.teklifler.push({ id: 'tklf-' + Math.floor(Math.random() * 1000000), musteri: musteriIsmiUret(araba), fiyat: Math.round(teklifTutari), gelisGunu: gun, tip: musteriTipi, takasArac: takasArabasi }); 
                    } 
                }
            }
        });
    } catch(e) { console.error("Gün hatası:", e); } finally { piyasayiYenile(); ekraniGuncelle(); aktifEkraniYenile(); oyunuKaydet(); }
}

// ==========================================
// 6. BANKA, FİNANS VE BORSALAR 
// ==========================================
function bankaEkraniniGuncelle() {
    let skorDiv = document.getElementById('findeks-skor'); if(skorDiv) { skorDiv.innerText = krediNotu; skorDiv.style.color = krediNotu > 1400 ? '#00b894' : (krediNotu < 1000 ? '#e74c3c' : '#f1c40f'); }
    let limitDiv = document.getElementById('kmh-limit'); if(limitDiv) limitDiv.innerText = paraFormatla(getKmhLimiti()) + " ₺";
    let vb = document.getElementById('vergi-borcu-ekran'); if(vb) vb.innerText = paraFormatla(Math.round(vergiBorcu)); let hUyari = document.getElementById('e-haciz-uyari'); if(hUyari) hUyari.style.display = eHacizAktif ? 'block' : 'none';
    let krediAlani = document.getElementById('aktif-krediler-alani'); if(krediAlani) { krediAlani.innerHTML = ''; if(krediler.length > 0) { krediler.forEach(k => { krediAlani.innerHTML += `<div style="background:rgba(241, 196, 15, 0.1); color:#f39c12; padding:10px; border-radius:5px; margin-bottom:5px; font-size:13px; font-weight:bold; border:1px solid rgba(241, 196, 15, 0.4);">📌 Kredi: Günlük ${paraFormatla(k.taksit)} ₺ (Kalan: ${k.kalanGun} Gün)</div>`; }); } }
    let vadeliDurum = document.getElementById('vadeli-hesap-durum'); if(vadeliDurum) { if(mevduat.aktif) { vadeliDurum.innerHTML = `💸 Kilitli: ${paraFormatla(mevduat.anapara)} ₺<br>⏳ Kalan: ${mevduat.kalanGun} Gün<br><span style="color:#27ae60;">Getiri: +${paraFormatla(Math.floor(mevduat.anapara * mevduat.faizOrani))} ₺</span>`; } else { vadeliDurum.innerText = "Aktif hesabınız yok."; } }
    let kur = document.getElementById('euro-kur-ekran'); if(kur) kur.innerText = euroKuru.toFixed(2); borsaArayuzGuncelle(); senetleriEkranaBas();
}
function vergiOde() { if(vergiBorcu === 0) { ozelUyari("Vergi borcunuz bulunmuyor.", "bilgi"); return; } if(!bakiyeYeterliMi(vergiBorcu)) { ozelUyari("Vergiyi ödeyecek limitin yok!", "hata"); return; } paramiz -= Math.round(vergiBorcu); toplamGider += Math.round(vergiBorcu); vergiBorcu = 0; gecikmisVergiGun = 0; eHacizAktif = false; oyunSesi('kasa'); aktifEkraniYenile(); oyunuKaydet(); ozelUyari("Devlete olan tüm vergi borcunu ödedin.", "basari"); }
function borsaBaslat() { if(borsaInterval) clearInterval(borsaInterval); borsaInterval = setInterval(() => { borsa.forEach(h => { let volatilite = h.kod === 'SASA' ? 0.05 : 0.015; let yon = Math.random() > 0.5 ? 1 : -1; if (h.fiyat < 5) yon = 1; if (piyasaDurumu === "Kriz") yon = Math.random() > 0.8 ? 1 : -1; if (piyasaDurumu === "Canli") yon = Math.random() > 0.2 ? 1 : -1; let degisimOrani = (Math.random() * volatilite) * yon; let degisimMiktari = h.fiyat * degisimOrani; h.eskiFiyat = h.fiyat; h.fiyat += degisimMiktari; h.degisim = (degisimMiktari / h.eskiFiyat) * 100; }); if(document.getElementById('banka-ekrani') && document.getElementById('banka-ekrani').style.display === 'block') { borsaArayuzGuncelle(); } if(document.getElementById('hisse-islem-modal') && document.getElementById('hisse-islem-modal').style.display === 'block' && aktifHisseIndex !== -1) { let h = borsa[aktifHisseIndex]; document.getElementById('hisse-modal-fiyat').innerText = h.fiyat.toFixed(2) + " ₺"; hisseModalHesapla(); } }, 3000); }
function borsaArayuzGuncelle() { const alan = document.getElementById('borsa-alani'); if(!alan) return; let html = ''; borsa.forEach((h, index) => { let renk = h.degisim >= 0 ? '#00b894' : '#e74c3c'; let ok = h.degisim >= 0 ? '▲' : '▼'; let classAnim = h.degisim > 0 ? 'fiyat-artti' : (h.degisim < 0 ? 'fiyat-dustu' : ''); let portfoyMetin = h.portfoyAdet > 0 ? `<div style="font-size:11px; color:var(--text-main); font-weight:bold;">Sende: ${h.portfoyAdet} Lot (Ort: ${h.maliyet.toFixed(2)} ₺)</div>` : `<div style="font-size:11px; color:var(--text-muted);">Elinde yok</div>`; html += `<div class="hisse-karti ${classAnim}"><div style="flex:1;"><strong style="font-size:16px; color:var(--text-main);">${h.kod}</strong><br><span style="font-size:11px; color:var(--text-muted);">${h.isim}</span></div><div style="flex:1; text-align:center;"><span style="font-size:18px; font-weight:bold; color:${renk};">${h.fiyat.toFixed(2)} ₺</span><br><span style="font-size:12px; color:${renk};">${ok} %${Math.abs(h.degisim).toFixed(2)}</span></div><div style="flex:1.2; text-align:right;">${portfoyMetin}<div style="margin-top:5px;"><button class="btn btn-yesil" style="margin:0; padding:5px 10px; width:auto; font-size:11px;" onclick="hisseIslemEkraniAc(${index}, 'al')">Al</button> <button class="btn btn-kirmizi" style="margin:0; padding:5px 10px; width:auto; font-size:11px;" onclick="hisseIslemEkraniAc(${index}, 'sat')">Sat</button></div></div></div>`; }); alan.innerHTML = html; }
function hisseIslemEkraniAc(index, tip) { if(eHacizAktif) { ozelUyari("Hesaplarında e-Haciz var!", "hata"); return; } aktifHisseIndex = index; aktifHisseIslemTipi = tip; let h = borsa[index]; document.getElementById('hisse-modal-kod').innerText = h.kod; document.getElementById('hisse-modal-isim').innerText = h.isim; document.getElementById('hisse-modal-fiyat').innerText = h.fiyat.toFixed(2) + " ₺"; let btn = document.getElementById('hisse-modal-onay-btn'); let input = document.getElementById('hisse-modal-adet'); let bilgi = document.getElementById('hisse-modal-bilgi'); if (tip === 'al') { document.getElementById('hisse-modal-baslik').innerText = "📈 Hisse Satın Al"; document.getElementById('hisse-modal-baslik').style.color = "#00b894"; btn.style.background = "#00b894"; btn.innerText = "Satın Al"; let maxAl = Math.floor((paramiz + getKmhLimiti()) / h.fiyat); bilgi.innerText = `Maksimum: ${paraFormatla(maxAl)} Lot`; input.value = maxAl > 100 ? 100 : maxAl; } else { if (h.portfoyAdet <= 0) { ozelUyari("Elinde bu hisseden yok!", "hata"); return; } document.getElementById('hisse-modal-baslik').innerText = "📉 Hisse Sat"; document.getElementById('hisse-modal-baslik').style.color = "#d63031"; btn.style.background = "#d63031"; btn.innerText = "Satış Yap"; bilgi.innerText = `Elindeki lot: ${paraFormatla(h.portfoyAdet)}`; input.value = h.portfoyAdet; } hisseModalHesapla(); document.getElementById('hisse-islem-modal').style.display = 'block'; }
function hisseModalHesapla() { if (aktifHisseIndex === -1) return; let h = borsa[aktifHisseIndex]; let adet = parseInt(document.getElementById('hisse-modal-adet').value) || 0; let tutar = Math.round(adet * h.fiyat); document.getElementById('hisse-modal-tutar').innerText = paraFormatla(tutar) + " ₺"; }
function hisseIslemOnayla() { if (aktifHisseIndex === -1) return; let h = borsa[aktifHisseIndex]; let adet = parseInt(document.getElementById('hisse-modal-adet').value) || 0; if (adet <= 0) { ozelUyari("Geçerli adet girin.", "hata"); return; } let tutar = Math.round(adet * h.fiyat); if (aktifHisseIslemTipi === 'al') { if(bakiyeYeterliMi(tutar)) { paramiz -= tutar; toplamGider += tutar; let toplamMaliyet = (h.portfoyAdet * h.maliyet) + tutar; h.portfoyAdet += adet; h.maliyet = toplamMaliyet / h.portfoyAdet; oyunSesi('kasa'); modaliKapat('hisse-islem-modal'); aktifEkraniYenile(); oyunuKaydet(); ozelUyari(`${adet} lot ${h.kod} alındı.`, "basari"); } else { ozelUyari("Limit yetersiz!", "hata"); } } else { if(adet > h.portfoyAdet) { ozelUyari("O kadar hissen yok!", "hata"); return; } paramiz += tutar; toplamGelir += tutar; h.portfoyAdet -= adet; if(h.portfoyAdet === 0) h.maliyet = 0; oyunSesi('kasa'); modaliKapat('hisse-islem-modal'); aktifEkraniYenile(); oyunuKaydet(); ozelUyari(`${adet} lot ${h.kod} satıldı.`, "basari"); } }
function krediCek(tip) { if(eHacizAktif) { ozelUyari("Hesaplarında e-Haciz var!", "hata"); return; } let paketler = { 'esnaf': { miktar: 1000000, geriOdeme: 1200000, vade: 10, minNot: 500 }, 'arac': { miktar: 5000000, geriOdeme: 6500000, vade: 20, minNot: 1200 }, 'holding': { miktar: 25000000, geriOdeme: 35000000, vade: 30, minNot: 1600 } }; let p = paketler[tip]; if (krediNotu < p.minNot) { ozelUyari(`Reddedildi!\nNotunuzun en az ${p.minNot} olması gerekiyor.`, "hata"); return; } krediler.push({ tip: tip, miktar: p.miktar, toplamBorc: p.geriOdeme, taksit: Math.floor(p.geriOdeme/p.vade), kalanGun: p.vade }); paramiz += p.miktar; krediNotu -= 20; oyunSesi('kasa'); aktifEkraniYenile(); oyunuKaydet(); ozelUyari(`${paraFormatla(p.miktar)} ₺ kredi onaylandı!`, "basari"); }
function vadeliyeYatir() { if(eHacizAktif) { ozelUyari("e-Haciz var!", "hata"); return; } if(mevduat.aktif) { ozelUyari("Zaten aktif vadeli hesabın var!", "hata"); return; } let miktarStr = prompt(`Vadeliye kaç TL yatırmak istiyorsun?\n(10 Gün, %15 Getiri)\nNakit: ${paraFormatla(paramiz)} ₺`, "1000000"); let miktar = parseInt(miktarStr); if(isNaN(miktar) || miktar <= 0) return; if(paramiz < miktar) { ozelUyari("Kasanda o kadar nakit yok!", "hata"); return; } paramiz -= miktar; mevduat = { aktif: true, anapara: miktar, kalanGun: 10, faizOrani: 0.15 }; oyunSesi('kasa'); aktifEkraniYenile(); oyunuKaydet(); ozelUyari(`${paraFormatla(miktar)} ₺ bankaya %15 faizle kilitlendi.`, "basari"); }
function euroAl(miktar) { if(eHacizAktif) { ozelUyari("e-Haciz var!", "hata"); return; } let maliyet = Math.round(miktar * euroKuru); if (bakiyeYeterliMi(maliyet)) { paramiz -= maliyet; euroBakiye += miktar; oyunSesi('kasa'); aktifEkraniYenile(); oyunuKaydet(); ozelUyari(`${paraFormatla(miktar)} Euro alındı.`, 'basari'); } else { oyunSesi('hata'); ozelUyari("Limitiniz yetersiz!", "hata"); } } 
function euroBozdur(miktar) { if(eHacizAktif) { ozelUyari("e-Haciz var!", "hata"); return; } if (euroBakiye >= miktar) { let gelir = Math.round(miktar * euroKuru); euroBakiye -= miktar; paramiz += gelir; oyunSesi('kasa'); aktifEkraniYenile(); oyunuKaydet(); ozelUyari(`${paraFormatla(miktar)} Euro bozduruldu.`, 'basari'); } else { oyunSesi('hata'); ozelUyari("Euro yok!", "hata"); } } 
function tumEurouBozdur() { if(euroBakiye > 0) euroBozdur(euroBakiye); }
function senetTahsilatiYap() { senetler.forEach((s, i) => { if (s.durum === 'Patladi' || s.kalanGun <= 0) return; if (Math.random() < 0.10) { s.durum = 'Patladi'; oyunSesi('hata'); ozelUyari(`🚨 SENET PATLADI! ${s.musteri} ödeme yapmıyor!`, 'hata'); } else { paramiz += s.taksit; toplamGelir += s.taksit; s.odenen += s.taksit; s.kalanGun--; if (s.kalanGun <= 0) s.durum = 'Bitti'; } }); }
function senetleriEkranaBas() { const liste = document.getElementById('senet-listesi'); if(!liste) return; liste.innerHTML = ''; if (senetler.length === 0) { liste.innerHTML = '<div class="uyari-mesaji">Senet yok.</div>'; return; } senetler.forEach((s, i) => { let renk = s.durum === 'Bitti' ? '#27ae60' : (s.durum === 'Patladi' ? '#d63031' : '#f39c12'); let btnAksiyon = s.durum === 'Patladi' ? `<button class="btn" style="background:#2d3436; color:#f1c40f; margin-top:10px;" onclick="hakanAbiTahsilat(${i})"><i class='bx bxs-crown'></i> Hakan Abi (%20 Komisyon)</button>` : (s.durum !== 'Bitti' ? `<button class="btn" style="background:#3498db; color:white; margin-top:10px;" onclick="senetKirdir(${i})">Faktoringe Kırdır (%30 Kesinti)</button>` : ''); liste.innerHTML += `<div class="ilan-karti" style="border-left: 5px solid ${renk}; flex-direction: column; align-items: flex-start;"><div style="display:flex; justify-content:space-between; width:100%;"><h3 class="ilan-baslik"><i class='bx bxs-user-circle'></i> ${s.musteri}</h3><div style="font-weight:bold; color:${renk};">${s.durum}</div></div><div style="width: 100%; display: flex; justify-content: space-between; margin-top:10px; font-size:14px;"><span>Kalan: ${s.kalanGun} Gün</span></div>${btnAksiyon}</div>`; }); }
function senetKirdir(i) { let s = senetler[i]; let kalan = s.toplamBorc - s.odenen; let nakit = Math.floor(kalan * 0.70); paramiz += nakit; toplamGelir += nakit; senetler.splice(i, 1); krediNotu -= 5; oyunSesi('kasa'); aktifEkraniYenile(); oyunuKaydet(); ozelUyari(`Senet kırdırıldı.\n${paraFormatla(kalan)} ₺ acil nakit alındı.`, "bilgi"); }
function hakanAbiTahsilat(i) { let s = senetler[i]; let kalan = s.toplamBorc - s.odenen; let komisyon = Math.floor(kalan * 0.20); paramiz += (kalan - komisyon); toplamGelir += (kalan - komisyon); s.odenen += kalan; s.kalanGun = 0; s.durum = 'Bitti (Tahsil Edildi)'; oyunSesi('kasa'); aktifEkraniYenile(); oyunuKaydet(); ozelUyari(`Hakan Abi tahsilatı yaptı!`, "basari"); }

// ==========================================
// 7. ARAÇ AL/SAT VE KRİZLER
// ==========================================
function arabalariEkranaGetir() { 
    const liste = document.getElementById('araba-listesi'); if(!liste) return; liste.innerHTML = ''; 
    arabalar.forEach(a => { 
        let saticiBadge = a.saticiTipi === "Sahibinden" ? `<span class="etiket" style="background:#f39c12; margin-right:5px;">👤 Sahibinden</span>` : (a.saticiTipi === "Gümrük Bakanlığı" ? `<span class="etiket" style="background:#8e44ad; margin-right:5px;">🇪🇺 Gümrük Çıkışlı</span>` : `<span class="etiket" style="background:#2c3e50; margin-right:5px;">🏢 Galeriden</span>`);
        let sehirBadge = `<span class="etiket" style="background:var(--text-muted); color:var(--card-bg); margin-right:5px;">📍 ${a.sehir}</span>`;
        let hasarMetni = a.hasarli ? `<span class="etiket etiket-kirmizi">Ağır Hasarlı Olabilir</span>` : `<span class="etiket etiket-yesil">Temiz</span>`; 
        let muayeneBadge = a.muayeneVar ? "" : `<span class="etiket etiket-kirmizi" style="margin-right:5px;">🛑 Çekme Belgeli</span>`;
        liste.innerHTML += `<div class="ilan-karti" style="${a.gumrukAraci ? 'border: 2px solid #8e44ad;' : ''}"><div class="araba-foto"><img src="${a.gorsel}" style="width:100%; height:100%; object-fit:cover; border-radius:8px;"></div><div class="ilan-detay"><h3 class="ilan-baslik">${a.marka} ${a.model}</h3><div class="ilan-ozellikler"><span>🗓️ <strong>${a.yil}</strong></span><span>🛣️ <strong>${paraFormatla(a.km)}</strong> KM</span></div><div class="ilan-durum" style="margin-top: 5px;">${saticiBadge} ${sehirBadge} <br> <div style="margin-top:5px;">${muayeneBadge} ${hasarMetni}</div></div></div><div class="ilan-sag-taraf"><div class="ilan-fiyat">${paraFormatla(a.fiyat)} ₺</div><div style="font-size:11px; color:var(--text-muted); margin-bottom:8px; text-align:right;">Takas Fiyatı: ${paraFormatla(a.takasFiyati)} ₺</div><button class="btn btn-turuncu" onclick="ilanDetayEkraniAc(${a.id})"><i class='bx bx-search-alt'></i> İncele</button></div></div>`; 
    }); 
}

function ilanDetayEkraniAc(arabaId) { 
    const a = arabalar.find(x => x.id === arabaId); if(!a) { ozelUyari("İlan yayından kalkmış!", "hata"); return; }
    try {
        let f = document.getElementById('detay-foto'); if(f) f.src = a.gorsel; 
        let b = document.getElementById('detay-baslik'); if(b) b.innerText = `${a.marka} ${a.model}`; 
        let fyt = document.getElementById('detay-fiyat'); if(fyt) fyt.innerText = `${a.fiyat.toLocaleString('tr-TR')} TL`; 
        let mk = document.getElementById('detay-marka'); if(mk) mk.innerText = a.marka; 
        let md = document.getElementById('detay-model'); if(md) md.innerText = a.model; 
        let yl = document.getElementById('detay-yil'); if(yl) yl.innerText = a.yil; 
        let kmm = document.getElementById('detay-km'); if(kmm) kmm.innerText = a.km.toLocaleString('tr-TR'); 
        let ac = document.getElementById('detay-aciklama'); if(ac) ac.innerText = a.ilanAciklamasi; 

        let vitesEl = document.getElementById('detay-vites'); if(vitesEl) vitesEl.innerText = a.vites || "Otomatik";
        let yakitEl = document.getElementById('detay-yakit'); if(yakitEl) yakitEl.innerText = a.yakit || "Benzin";
        let motorEl = document.getElementById('detay-motor'); if(motorEl) motorEl.innerText = a.motor ? a.motor + " L" : "1.6 L";
        let hpEl = document.getElementById('detay-hp'); if(hpEl) hpEl.innerText = a.hp ? a.hp + " HP" : "110 HP";

        let donanimHtml = ""; if(a.donanimlar) { a.donanimlar.forEach(d => { donanimHtml += `<span style="background: var(--sidebar-bg); color: #fff; padding: 4px 8px; border-radius: 4px; font-size: 11px; font-weight: bold; border-bottom: 2px solid var(--primary); margin-right:4px;">✔️ ${d}</span>`; }); }
        let donanimEl = document.getElementById('detay-donanim'); if(donanimEl) donanimEl.innerHTML = donanimHtml;

        let aylikFaiz = 0.045; let taksitAyi = 12; let krediTutari = a.fiyat * 0.70; let aylikTaksit = Math.floor((krediTutari * aylikFaiz * Math.pow(1 + aylikFaiz, taksitAyi)) / (Math.pow(1 + aylikFaiz, taksitAyi) - 1));
        let krediEl = document.getElementById('detay-kredi-taksit'); if(krediEl) krediEl.innerText = aylikTaksit.toLocaleString('tr-TR') + " ₺";

        let agirHasarUyariHTML = a.agirHasarSebebi !== "" ? `<div style="background:#ffcccc; color:#c0392b; padding:10px; border-radius:8px; margin-bottom:15px; font-weight:bold; font-size:13px;">🚨 UYARI: Bu araçta ${a.agirHasarSebebi} var!</div>` : "";
        ['kaput', 'tavan', 'bagaj', 'solOnCamurluk', 'solOnKapi', 'solArkaKapi', 'solArkaCamurluk', 'sagOnCamurluk', 'sagOnKapi', 'sagArkaKapi', 'sagArkaCamurluk'].forEach(p => { const div = document.getElementById(`eks-${p}`); if(div){ div.className='eks-parca'; div.classList.add(a.ekspertiz[p]); } }); 
        
        let tBtn = document.getElementById('detay-tramer-btn');
        if(tBtn) { tBtn.onclick = function() { if(!bakiyeYeterliMi(150)){ ozelUyari("Paranız yetersiz!","hata"); return; } paramiz-=150; oyunSesi('kasa'); document.getElementById('tramer-mesaj-icerik').innerHTML= agirHasarUyariHTML + a.tramer; document.getElementById('tramer-modal').style.display='block'; }; }

        let edevletBtn = document.getElementById('detay-edevlet-btn');
        if(edevletBtn) {
            if (personeller.eksper) {
                edevletBtn.innerHTML = "<i class='bx bx-check-shield'></i> Ücretsiz Sorgu (Eksper)";
                edevletBtn.onclick = function() {
                    oyunSesi('kasa'); a.rehinSorgulandiMi = true;
                    let tModal = document.getElementById('tramer-mesaj-icerik');
                    if(a.rehinliMi) { tModal.innerHTML = `<div style="background: #c0392b; color: white; padding: 10px; border-radius: 5px; text-align: center; font-weight: bold; font-size: 16px;">🚨 DİKKAT! HAK MAHRUMİYETİ VAR!</div><br>Araç üzerinde <b>${paraFormatla(a.rehinBedeli)} ₺</b> banka/vergi rehni bulunmaktadır. Satın alırken araba parasına ek olarak bu borcu da ödemek zorunda kalırsınız!`; } 
                    else { tModal.innerHTML = `<div style="background: #27ae60; color: white; padding: 10px; border-radius: 5px; text-align: center; font-weight: bold; font-size: 16px;">✅ TEMİZ (HAK MAHRUMİYETİ YOK)</div><br>Araç üzerinde herhangi bir rehin, haciz veya yakalama kararı bulunmamaktadır. Satışa uygundur.`; }
                    document.getElementById('tramer-modal').style.display = 'block'; aktifEkraniYenile(); oyunuKaydet();
                }
            } else {
                edevletBtn.innerHTML = "<i class='bx bxs-institution'></i> e-Devlet (250 ₺)";
                edevletBtn.onclick = function() {
                    if(!bakiyeYeterliMi(250)) { ozelUyari("Sorgu ücreti (250 ₺) için limitiniz yok!", "hata"); return; }
                    paramiz -= 250; toplamGider += 250; oyunSesi('kasa'); a.rehinSorgulandiMi = true;
                    let tModal = document.getElementById('tramer-mesaj-icerik');
                    if(a.rehinliMi) { tModal.innerHTML = `<div style="background: #c0392b; color: white; padding: 10px; border-radius: 5px; text-align: center; font-weight: bold; font-size: 16px;">🚨 DİKKAT! HAK MAHRUMİYETİ VAR!</div><br>Araç üzerinde <b>${paraFormatla(a.rehinBedeli)} ₺</b> banka/vergi rehni bulunmaktadır. Satın alırken araba parasına ek olarak bu borcu da ödemek zorunda kalırsınız!`; } 
                    else { tModal.innerHTML = `<div style="background: #27ae60; color: white; padding: 10px; border-radius: 5px; text-align: center; font-weight: bold; font-size: 16px;">✅ TEMİZ (HAK MAHRUMİYETİ YOK)</div><br>Araç üzerinde herhangi bir rehin, haciz veya yakalama kararı bulunmamaktadır. Satışa uygundur.`; }
                    document.getElementById('tramer-modal').style.display = 'block'; aktifEkraniYenile(); oyunuKaydet();
                };
            }
        }

        let sAra = document.getElementById('detay-satici-ara-btn'); if(sAra) sAra.onclick = function() { saticiAra(a.id); }; 
        const hk = document.getElementById('detay-hakan-abi-btn'); let kg = 15 - (gun - hakanAbiSonKullanim); 
        if(hk) { if (kg <= 0) { hk.innerHTML = "<i class='bx bxs-crown'></i> Hakan Abi'ye Çöktürt"; hk.style.opacity = "1"; hk.onclick = function() { hakanAbiAra(a.id); }; } else { hk.innerHTML = `<i class='bx bx-time'></i> Hakan Abi Meşgul`; hk.style.opacity = "0.5"; hk.onclick = function() { ozelUyari(`Meşgul.`, "bilgi"); }; } }
        document.getElementById('ilan-detay-modal').style.display = 'block'; 
    } catch(e) { console.error("Detay hatası:", e); }
}

function telefonuKapat() { modaliKapat('telefon-modal'); document.querySelector('.telefon-ekrani').classList.remove('caliyor'); }
function saticiAra(id) { 
    if(eHacizAktif) { ozelUyari("Hesaplarında e-Haciz var! Araba alamazsın.", "hata"); return; }
    if ((garaj.length + rentACarFilosu.length) >= aracKapasitesi) { ozelUyari("Kapasiteniz dolu!", "hata"); return; } 
    const a = arabalar.find(x => x.id === id); modaliKapat('ilan-detay-modal'); document.getElementById('tel-aranan-kisi').innerText = `Satıcı Aranıyor: ${a.saticiTipi}`; document.getElementById('tel-diyalog').innerText = "Dıt... Dıt..."; document.getElementById('tel-aksiyonlar').style.display = 'none'; document.querySelector('.telefon-ekrani').classList.add('caliyor'); document.getElementById('telefon-modal').style.display = 'block'; 
    setTimeout(() => { 
        document.querySelector('.telefon-ekrani').classList.remove('caliyor'); 
        if (a.gumrukAraci) { document.getElementById('tel-diyalog').innerText = `"Burası Gümrük. ${paraFormatla(a.fiyat)} TL ödemeyi yaparsanız işlemleri başlatırız."`; document.getElementById('tel-aksiyonlar').innerHTML = `<button class="btn btn-yesil" onclick="telSatinAl(${a.id}, 0)" style="padding: 15px; font-size: 16px;">Ücreti Öde</button>`; document.getElementById('tel-aksiyonlar').style.display = 'flex'; return; }
        let baslangicDiyalog = a.sehir === "İstanbul" ? `"Alo buyur kardeşim. Fiyat nakit ${a.fiyat.toLocaleString('tr-TR')} TL."` : `"Alo buyur kardeşim. Ben ${a.sehir}'dayım. Fiyatım ${a.fiyat.toLocaleString('tr-TR')} TL."`; document.getElementById('tel-diyalog').innerText = baslangicDiyalog; let aksiyonButonlari = "";
        if (a.sehir === "İstanbul") { aksiyonButonlari = `<button class="btn btn-yesil" onclick="telSatinAl(${a.id}, 0)" style="padding: 15px; font-size: 16px;"><i class='bx bx-money'></i> Nakit Al</button><button class="btn btn-mavi" onclick="takasEkraniAc(${a.id})" style="padding: 15px; font-size: 16px;"><i class='bx bx-transfer'></i> Takas Yap</button><button class="btn btn-turuncu" id="tel-pazarlik-btn" onclick="telPazarlikYap(${a.id})" style="padding: 15px; font-size: 16px;">Pazarlık Yap</button>`; } 
        else { 
            let biletFiyat = personeller.eksper ? 1000 : 2500;
            aksiyonButonlari = `<button class="btn btn-yesil" onclick="sehirDisinaGit(${a.id})" style="padding: 15px; font-size: 16px;">✈️ Gidip Gör (${biletFiyat.toLocaleString('tr-TR')} ₺)</button><button class="btn btn-mavi" onclick="telSatinAl(${a.id}, 10000)" style="padding: 15px; font-size: 16px;">🚛 Çekici Yolla (10.000 ₺)</button><button class="btn btn-turuncu" id="tel-pazarlik-btn" onclick="telPazarlikYap(${a.id})" style="padding: 15px; font-size: 16px;">Pazarlık Yap</button>`; 
        }
        document.getElementById('tel-aksiyonlar').innerHTML = aksiyonButonlari; document.getElementById('tel-aksiyonlar').style.display = 'flex'; 
    }, 2000); 
}
function telPazarlikYap(id) { const a = arabalar.find(x => x.id === id); document.getElementById('tel-aksiyonlar').style.display = 'none'; let pazarIhtimali = a.saticiTipi === "Galeri" ? 0.20 : 0.50; if (Math.random() < pazarIhtimali) { a.fiyat = Math.floor(a.fiyat * (1 - ((Math.floor(Math.random()*8)+3)/100))); a.takasFiyati = Math.floor(a.fiyat * 1.08); oyunSesi('kasa'); document.getElementById('tel-diyalog').innerHTML = `"Hadi senin canın sağolsun kardeşim, nakit ${a.fiyat.toLocaleString('tr-TR')} TL olsun."`; let biletFiyat = personeller.eksper ? 1000 : 2500; let aksiyonButonlari = a.sehir === "İstanbul" ? `<button class="btn btn-yesil" onclick="telSatinAl(${a.id}, 0)" style="padding: 15px; font-size: 16px;"><i class='bx bx-money'></i> Nakit Al</button><button class="btn btn-mavi" onclick="takasEkraniAc(${a.id})" style="padding: 15px; font-size: 16px;"><i class='bx bx-transfer'></i> Takas Yap</button>` : `<button class="btn btn-yesil" onclick="sehirDisinaGit(${a.id})" style="padding: 15px; font-size: 16px;">✈️ Gidip Gör (${biletFiyat.toLocaleString('tr-TR')} ₺)</button><button class="btn btn-mavi" onclick="telSatinAl(${a.id}, 10000)" style="padding: 15px; font-size: 16px;">🚛 Çekici Yolla (10.000 ₺)</button>`; document.getElementById('tel-aksiyonlar').innerHTML = aksiyonButonlari; document.getElementById('tel-aksiyonlar').style.display = 'flex'; } else { oyunSesi('hata'); document.getElementById('tel-diyalog').innerHTML = `"Biz esnafız kardeşim, dip rakam budur!"`; arabalar = arabalar.filter(x => x.id !== id); aktifEkraniYenile(); } }
function sehirDisinaGit(id) {
    if(eHacizAktif) { ozelUyari("e-Haciz var! İşlem yapılamaz.", "hata"); return; } 
    let biletFiyat = personeller.eksper ? 1000 : 2500;
    if (!bakiyeYeterliMi(biletFiyat)) { ozelUyari("Gidecek limitin yok!", "hata"); return; } 
    paramiz -= biletFiyat; toplamGider += biletFiyat; aktifEkraniYenile(); 
    const a = arabalar.find(x => x.id === id); if(!a) { ozelUyari("İlan yayından kalkmış!", "hata"); telefonuKapat(); return; }
    
    document.getElementById('tel-aksiyonlar').style.display = 'none'; document.getElementById('tel-aranan-kisi').innerText = `✈️ ${a.sehir}'a Gidiliyor...`; document.getElementById('tel-diyalog').innerText = "Araç ekspere sokuluyor..."; document.querySelector('.telefon-ekrani').classList.add('caliyor'); 
    
    setTimeout(() => { 
        document.querySelector('.telefon-ekrani').classList.remove('caliyor'); 
        if (personeller.eksper) {
            oyunSesi('kasa'); a.rehinSorgulandiMi = true; 
            let hasarDurumu = a.hasarli ? "🚨 AĞIR HASARLI" : "✅ Ekspertiz Temiz";
            let rehinDurumu = a.rehinliMi ? `<br><br><span style='color:#f1c40f;'>⚠️ DİKKAT: Üzerinde ${a.rehinBedeli.toLocaleString('tr-TR')} ₺ Haciz Var!</span>` : "";
            document.getElementById('tel-aranan-kisi').innerText = `Eksper Raporu Çıktı`; 
            document.getElementById('tel-diyalog').innerHTML = `<b>Durum:</b> ${hasarDurumu} ${rehinDurumu}`; 
            document.getElementById('tel-aksiyonlar').innerHTML = `<button class="btn btn-yesil" onclick="telSatinAl(${a.id}, 0)" style="padding: 15px; font-size: 16px;"><i class='bx bx-money'></i> Satın Al ve Dön</button><button class="btn btn-kirmizi" onclick="telefonuKapat()" style="padding: 15px; font-size: 16px;">Vazgeç ve Dön</button>`;
            document.getElementById('tel-aksiyonlar').style.display = 'flex';
        } else {
            let yalanIhtimali = a.saticiTipi === "Sahibinden" ? 0.35 : 0.05; 
            if (Math.random() < yalanIhtimali && !a.hasarli) { oyunSesi('hata'); a.hasarli = true; a.tamirMasrafi = Math.floor(a.fiyat * 0.15); document.getElementById('tel-aranan-kisi').innerText = `🚨 BÜYÜK ŞOK!`; document.getElementById('tel-diyalog').innerHTML = `<span style="color:#e74c3c; font-weight:bold;">Araç ağır hasarlı çıktı! Yol masrafı çöpe gitti.</span>`; document.getElementById('tel-aksiyonlar').innerHTML = `<button class="btn btn-kirmizi" onclick="telefonuKapat()" style="padding: 15px; font-size: 16px;">Geri Dön</button>`; document.getElementById('tel-aksiyonlar').style.display = 'flex'; arabalar = arabalar.filter(x => x.id !== id); aktifEkraniYenile(); oyunuKaydet(); } 
            else { oyunSesi('kasa'); document.getElementById('tel-aranan-kisi').innerText = `✅ Ekspertiz Temiz`; document.getElementById('tel-diyalog').innerText = `Araç söylendiği gibi çıktı.`; document.getElementById('tel-aksiyonlar').innerHTML = `<button class="btn btn-yesil" onclick="telSatinAl(${a.id}, 0)" style="padding: 15px; font-size: 16px;"><i class='bx bx-money'></i> Nakit Al ve Dön</button>`; document.getElementById('tel-aksiyonlar').style.display = 'flex'; } 
        }
    }, 3000);
}
function takasEkraniAc(id) { telefonuKapat(); const karsiAraba = arabalar.find(x => x.id === id); const lst = document.getElementById('takas-araba-listesi'); lst.innerHTML = ''; let uygunAracVarMi = false; garaj.forEach(b => { if(b.tamirDurumu === 0 && b.muayeneVar && b.gumrukKalanGun === 0) { uygunAracVarMi = true; let fark = karsiAraba.takasFiyati - b.fiyat; let farkMetni = fark > 0 ? `<span style="color:#e74c3c;">Senin ödeyeceğin: ${paraFormatla(fark)} ₺</span>` : `<span style="color:#00b894;">Karşıdan alacağın: ${paraFormatla(Math.abs(fark))} ₺</span>`; lst.innerHTML += `<div class="teklif-karti"><div style="text-align:left;"><b>${b.marka} ${b.model}</b><br>Senin Aracın: ${paraFormatla(b.fiyat)} ₺ <br>Karşının Takas Fiyatı: ${paraFormatla(karsiAraba.takasFiyati)} ₺ <br><b>${farkMetni}</b></div><button class="btn btn-mavi" style="width:auto; margin:0;" onclick="takasiTamamla(${b.id}, ${karsiAraba.id}, ${fark})">Takasla</button></div>`; } }); if(!uygunAracVarMi) { lst.innerHTML = `<p style="color:#d63031; text-align:center; font-weight:bold;">Garajında takasa uygun araç yok!</p>`; } document.getElementById('takas-secim-modal').style.display = 'block'; }
function takasiTamamla(bId, kId, fark) { if (fark > 0 && !bakiyeYeterliMi(fark + noterUcreti + sigortaVeMtvUcreti)) { ozelUyari("Üste verecek nakit paran ve limitin yok!", "hata"); return; } const karsiAraba = arabalar.find(x => x.id === kId); if (fark > 0) { paramiz -= (fark + noterUcreti + sigortaVeMtvUcreti); toplamGider += (fark + noterUcreti + sigortaVeMtvUcreti); } else { paramiz += (Math.abs(fark) - noterUcreti - sigortaVeMtvUcreti); toplamGelir += Math.abs(fark); toplamGider += (noterUcreti + sigortaVeMtvUcreti); } garaj = garaj.filter(x => x.id !== bId); karsiAraba.fiyat = karsiAraba.takasFiyati; garaj.push(karsiAraba); arabalar = arabalar.filter(x => x.id !== kId); toplamSatilanArac++; oyunSesi('kasa'); modaliKapat('takas-secim-modal'); aktifEkraniYenile(); oyunuKaydet(); ozelUyari(`🔄 Takas Başarıyla Gerçekleşti!\n${karsiAraba.marka} aracını garaja çektin.`, "basari"); }
function telSatinAl(id, ekMasraf) {
    if(eHacizAktif) { ozelUyari("Hesaplarında e-Haciz var! Araç alamazsın.", "hata"); return; }
    const a = arabalar.find(x => x.id === id); if (!a) { ozelUyari("Araç bulunamadı veya satılmış!", "hata"); telefonuKapat(); return; }
    if ((garaj.length + rentACarFilosu.length) >= aracKapasitesi) { ozelUyari("Garaj kapasiteniz dolu!", "hata"); telefonuKapat(); return; }
    let rehinMasrafi = a.rehinliMi ? a.rehinBedeli : 0; let t = a.fiyat + noterUcreti + sigortaVeMtvUcreti + ekMasraf + rehinMasrafi; 
    if (bakiyeYeterliMi(t)) { 
        paramiz -= Math.round(t); toplamGider += Math.round(t); a.tamirDurumu = 0; a.alisFiyati = t; a.rehinliMi = false; garaj.push(a); arabalar = arabalar.filter(x => x.id !== id); oyunSesi('kasa'); telefonuKapat(); aktifEkraniYenile(); oyunuKaydet(); 
        if (rehinMasrafi > 0 && !a.rehinSorgulandiMi) { setTimeout(() => { ozelUyari(`🚨 NOTERDE ŞOK!\n\nSatıcı gizlemiş! Arabanın üzerinde ${paraFormatla(rehinMasrafi)} ₺ haciz/rehin varmış. Arabayı üstüne almak için mecburen o borcu da ödedin!`, "hata"); }, 500); } else if (rehinMasrafi > 0 && a.rehinSorgulandiMi) { setTimeout(() => { ozelUyari(`Aracın üzerindeki ${paraFormatla(rehinMasrafi)} ₺ rehin bedeli ödenip haciz kaldırıldı. Araç garaja çekildi.`, "bilgi"); }, 500); } else if(a.gumrukAraci) { ozelUyari(`🇪🇺 Gümrük Aracı Alındı!\nAraç bürokrasi için 5 gün rehin kalacak.`, "basari"); } else { ozelUyari(`Araç satın alındı ve garaja çekildi!`, "basari"); }
    } else { oyunSesi('hata'); document.getElementById('tel-diyalog').innerHTML = `<span style="color:#e74c3c; font-weight:bold;">"Kardeşim paran çıkışmıyor, beni oyalama!"</span>`; document.getElementById('tel-aksiyonlar').style.display = 'none'; } 
}
function hakanAbiAra(id) { if(eHacizAktif) { ozelUyari("Hesaplarında e-Haciz var! Araba alamazsın.", "hata"); return; } if ((garaj.length + rentACarFilosu.length) >= aracKapasitesi) return ozelUyari("Kapasite dolu!","hata"); const a = arabalar.find(x => x.id === id); modaliKapat('ilan-detay-modal'); document.getElementById('tel-aranan-kisi').innerText = `Hakan Abi Aranıyor...`; document.getElementById('tel-diyalog').innerText = "Dıt..."; document.getElementById('tel-aksiyonlar').style.display = 'none'; document.querySelector('.telefon-ekrani').classList.add('caliyor'); document.getElementById('telefon-modal').style.display = 'block'; setTimeout(() => { document.querySelector('.telefon-ekrani').classList.remove('caliyor'); let ind = Math.floor(a.fiyat * 0.60); document.getElementById('tel-diyalog').innerHTML = `"Adam ${paraFormatla(ind)} TL'ye bırakıyor."`; document.getElementById('tel-aksiyonlar').innerHTML = `<button class="btn btn-yesil" onclick="telSatinAl(${a.id}, 0)" style="padding: 15px; font-size: 16px;">Hakan Abi'nin Fiyatından Al</button>`; document.getElementById('tel-aksiyonlar').style.display = 'flex'; hakanAbiSonKullanim = gun; }, 2500); }

// ==========================================
// 8. GARAJ YÖNETİMİ (SHOWROOM)
// ==========================================
garajiEkranaGetir = function() { 
    const lst = document.getElementById('garaj-listesi'); const blg = document.getElementById('garaj-bilgi'); if(!lst) return; 
    lst.innerHTML = ''; lst.className = 'showroom-grid';
    if (garaj.length === 0) { if(blg) blg.style.display = 'block'; lst.classList.remove('showroom-grid'); } 
    else { 
        if(blg) blg.style.display = 'none'; 
        garaj.forEach(a => { 
            let aksiyonButonlari = ''; let ekstraBilgi = '';
            if (a.gumrukKalanGun > 0) { ekstraBilgi = `<div style="color:#8e44ad; font-weight:bold; font-size:14px; margin-bottom:10px;"><i class='bx bx-lock-alt'></i> Gümrükte: ${a.gumrukKalanGun} Gün</div>`; aksiyonButonlari = `<button class="btn btn-kirmizi" disabled style="opacity:0.5;">İşlem Yapılamaz</button>`; }
            else if (a.tamirDurumu > 0) { let dY = a.muayenede ? "TÜVTÜRK'te" : "Sanayide"; ekstraBilgi = `<div style="color:#e67e22; font-weight:bold; font-size:14px; margin-bottom:10px;"><i class='bx bx-wrench'></i> ${dY}: ${a.tamirDurumu} Gün</div>`; aksiyonButonlari = `<button class="btn btn-kirmizi" disabled style="opacity:0.5;">İşlem Yapılamaz</button>`; } 
            else { 
                let tek = a.teklifler ? a.teklifler.length : 0; let teklifMetni = tek > 0 ? `<span style="color:#00b894; font-weight:bold; font-size:13px;"><i class='bx bxs-hot'></i> ${tek} Yeni Teklif!</span>` : `<span style="color:var(--text-muted); font-size:12px;"><i class='bx bx-time'></i> Teklif Bekleniyor</span>`;
                ekstraBilgi = !a.muayeneVar ? `<div style="color:#d63031; font-weight:bold; font-size:13px; margin-bottom:10px;"><i class='bx bx-error-circle'></i> Çekme Belgeli</div>` : `<div style="margin-bottom:10px;">${teklifMetni}</div>`;
                aksiyonButonlari = !a.muayeneVar ? `<button class="btn btn-mavi" onclick="muayeneyeSok(${a.id})"><i class='bx bx-check-shield'></i> Muayene (3.5K ₺)</button> ${a.hasarli ? `<button class="btn btn-turuncu" onclick="tamirEt(${a.id})"><i class='bx bx-wrench'></i> Sanayiye Ver</button>` : ''} <button class="btn btn-mor" onclick="modifiyeEkraniAc(${a.id})"><i class='bx bx-sparkles'></i> Modifiye</button>` : `${a.hasarli ? `<button class="btn btn-turuncu" onclick="tamirEt(${a.id})"><i class='bx bx-wrench'></i> Sanayiye Ver</button>` : ''} <button class="btn" style="background:#2c3e50; color:#f1c40f;" onclick="kilometreDusur(${a.id})"><i class='bx bx-ghost'></i> KM Düşür</button> <button class="btn" style="background:#d35400; color:white;" onclick="kirayaVer(${a.id})"><i class='bx bx-key'></i> Kiraya Ver</button> <button class="btn btn-mor" onclick="modifiyeEkraniAc(${a.id})"><i class='bx bx-sparkles'></i> Modifiye</button> <button class="btn btn-yesil" onclick="araciSat(${a.id})" style="width:100%; font-size:15px; margin-top:5px;"><i class='bx bx-money'></i> Müşterileri Gör</button>`;
            } 
            lst.innerHTML += `<div class="showroom-karti"><div class="spotlight"></div><div class="showroom-img-kutu"><img src="${a.gorsel}" style="${a.gumrukKalanGun > 0 ? 'filter: grayscale(80%);' : ''}"></div><h3 class="showroom-baslik">${a.marka} ${a.model}</h3><div style="font-size:12px; color:var(--text-muted); margin-bottom:5px;">🗓️ ${a.yil} | 🛣️ ${paraFormatla(a.km)} KM</div><div class="showroom-fiyat">${paraFormatla(a.fiyat)} ₺</div>${ekstraBilgi}<div class="showroom-aksiyonlar">${aksiyonButonlari}</div></div>`; 
        }); 
    } 
};
function muayeneyeSok(id) { const a = garaj.find(x => x.id === id); if(a.hasarli) { ozelUyari("Araç hasarlıyken muayeneden geçemez!", "hata"); return; } if(!bakiyeYeterliMi(3500)) { ozelUyari("Paranız yetersiz!", "hata"); return; } paramiz -= 3500; toplamGider += 3500; a.tamirDurumu = 1; a.muayenede = true; a.teklifler = []; oyunSesi('kasa'); aktifEkraniYenile(); oyunuKaydet(); ozelUyari("Araç TÜVTÜRK'e bırakıldı.", "basari"); }
function kilometreDusur(id) { const a = garaj.find(x => x.id === id); if (!bakiyeYeterliMi(35000)) { ozelUyari("Para yok!", "hata"); return; } if (a.km < 80000) { ozelUyari("KM zaten düşük!", "bilgi"); return; } if (Math.random() < 0.15) { paramiz -= 35000; a.fiyat = Math.floor(a.fiyat * 0.7); oyunSesi('hata'); aktifEkraniYenile(); oyunuKaydet(); ozelUyari("🚨 Usta beyni yaktı.", "hata"); return; } paramiz -= 35000; let d = Math.floor(a.km * (Math.random() * 0.3 + 0.3)); a.km -= d; a.fiyat += Math.floor(d * 1.5); gizliKusurluAraclar.push(a.id); oyunSesi('tamir'); aktifEkraniYenile(); oyunuKaydet(); ozelUyari(`KM düşürüldü.`, "basari"); }
function tamirEt(id) { const a = garaj.find(x => x.id === id); let masraf = personeller.usta ? Math.floor(a.tamirMasrafi * 0.7) : a.tamirMasrafi; if (bakiyeYeterliMi(masraf)) { paramiz -= masraf; a.tamirDurumu = Math.floor(Math.random() * 3) + 2; a.teklifler = []; oyunSesi('tamir'); aktifEkraniYenile(); oyunuKaydet(); ozelUyari(`Araç sanayiye verildi.`, "basari"); } else { ozelUyari("Para yok!", "hata"); } }
function modifiyeEkraniAc(id) { const a = garaj.find(x => x.id === id); const lst = document.getElementById('modifiye-listesi'); lst.innerHTML = ''; let varMi = false; modifiyePaketleri.forEach(p => { if (!a.modifiyeler.includes(p.isim)) { varMi = true; let c = personeller.usta ? Math.floor(p.maliyet * 0.7) : p.maliyet; lst.innerHTML += `<div class="teklif-karti"><div><span style="font-size: 20px;">${p.ikon}</span> <b>${p.isim}</b><br><span>Maliyet: ${paraFormatla(c)} ₺</span></div><button class="btn btn-mavi" onclick="modifiyeUygula(${a.id}, ${p.id}, ${c})">Uygula</button></div>`; } }); if (!varMi) lst.innerHTML = `<p>Gırtlak dolu!</p>`; document.getElementById('modifiye-modal').style.display = "block"; }
function modifiyeUygula(id, pId, c) { const a = garaj.find(x => x.id === id); const p = modifiyePaketleri.find(x => x.id === pId); if (bakiyeYeterliMi(c)) { paramiz -= c; a.fiyat += p.degerArtisi; a.modifiyeler.push(p.isim); oyunSesi('tamir'); modaliKapat('modifiye-modal'); aktifEkraniYenile(); oyunuKaydet(); ozelUyari(`${p.isim} eklendi.`, "basari"); } else { ozelUyari(`Para yok.`, "hata"); } }
function araciSat(id) { const a = garaj.find(x => x.id === id); const lst = document.getElementById('teklif-listesi'); lst.innerHTML = `<p>Maliyet: <b>${paraFormatla(a.fiyat)} TL</b></p>`; if (!a.teklifler || a.teklifler.length === 0) { lst.innerHTML += `<p style="text-align:center; color:#e74c3c; font-weight:bold;">Henüz teklif yok.</p>`; } else { a.teklifler.sort((a,b) => b.fiyat - a.fiyat).forEach(t => { let sF = Math.floor(t.fiyat * 1.30); let kalanGun = 3 - (gun - t.gelisGunu); let avatarEmoji = "👤"; let avatarBg = "#0984e3"; let musteriEtiketi = ""; let teklifGorunumu = `${paraFormatla(t.fiyat)} ₺`; if (t.tip === "Tayfa") { avatarEmoji = "😎"; avatarBg = "#2c3e50"; musteriEtiketi = `<span class="etiket" style="background: #2c3e50; color:#f1c40f;">🔊 Piyasa Tayfası</span>`; } else if (t.tip === "Olucu") { avatarEmoji = "🤡"; avatarBg = "#e74c3c"; musteriEtiketi = `<span class="etiket etiket-kirmizi">💀 Ölücü</span>`; } else if (t.tip === "Takas") { avatarEmoji = "🔄"; avatarBg = "#27ae60"; musteriEtiketi = `<span class="etiket etiket-yesil">🔄 Takasçı</span>`; teklifGorunumu = `<span style="font-size:14px; color:#636e72;">${t.takasArac.marka} +</span><br>${paraFormatla(t.fiyat)} ₺`; } else if (t.tip === "Zengin") { avatarEmoji = "🎩"; avatarBg = "#8e44ad"; musteriEtiketi = `<span class="etiket" style="background:#8e44ad;">💎 Elit Müşteri</span>`; } lst.innerHTML += `<div class="teklif-karti" id="${t.id}" style="align-items: flex-start;"><div style="display:flex; gap:15px; align-items:center; width: 100%;"><div style="width:55px; height:55px; min-width:55px; border-radius:50%; background:${avatarBg}; display:flex; justify-content:center; align-items:center; font-size:28px; box-shadow:0 4px 10px rgba(0,0,0,0.2);">${avatarEmoji}</div><div style="text-align: left; flex:1;"><span style="color: var(--text-main); font-weight: 700; font-size: 16px;">${t.musteri}</span> ${musteriEtiketi} <span style="font-size:11px; color:var(--text-muted);">(${kalanGun} Gün)</span><br><span style="font-size: 20px; color: #00b894; font-weight: 700;">Nakit: ${teklifGorunumu}</span></div></div><div style="display:flex; flex-direction:column; gap:5px; width:100%; margin-top:15px;"><button class="btn btn-yesil" style="margin:0;" onclick="teklifiKabulEt(${id}, '${t.id}')">Nakit Sat</button><button class="btn" style="background:#8e44ad; color:white; margin:0;" onclick="senetleSat(${id}, '${t.id}', ${sF})">📝 Senetle (${paraFormatla(sF)} ₺)</button><button class="btn btn-turuncu" style="margin:0;" onclick="pazarlikGarajAraci(${id}, '${t.id}')">Pazarlık Yap</button></div></div>`; }); } document.getElementById('teklif-modal').style.display = "block"; }
function pazarlikGarajAraci(id, tId) { const a = garaj.find(x => x.id === id); const tI = a.teklifler.findIndex(x => x.id === tId); const t = a.teklifler[tI]; const k = document.getElementById(tId); if (t.tip === "Olucu") { oyunSesi('hata'); a.teklifler.splice(tI, 1); k.innerHTML = `<div style="text-align: center; color: #d63031; padding: 20px; font-weight: bold;">Müşteri küfredip gitti!</div>`; return; } if (Math.random() > 0.5) { t.fiyat = Math.round(t.fiyat * (1 + ((Math.floor(Math.random()*8)+5)/100))); oyunSesi('kasa'); let sF = Math.round(t.fiyat * 1.30); k.innerHTML = `<div style="display:flex; gap:15px; align-items:center; width: 100%;"><div style="width:55px; height:55px; min-width:55px; border-radius:50%; background:#27ae60; display:flex; justify-content:center; align-items:center; font-size:28px;">🤑</div><div style="text-align: left; flex:1;"><span style="color: var(--text-main); font-weight: 700; font-size: 16px;">${t.musteri} (İkna Oldu)</span><br><span style="font-size: 20px; color: #00b894; font-weight: 700;">Nakit: ${paraFormatla(t.fiyat)} ₺</span></div></div><div style="display:flex; flex-direction:column; gap:5px; width:100%; margin-top:15px;"><button class="btn btn-yesil" style="margin:0;" onclick="teklifiKabulEt(${id}, '${t.id}')">Nakit Sat</button><button class="btn" style="background:#8e44ad; color:white; margin:0;" onclick="senetleSat(${id}, '${t.id}', ${sF})">📝 Senetle (${paraFormatla(sF)} ₺)</button></div>`; } else { oyunSesi('hata'); a.teklifler.splice(tI, 1); k.innerHTML = `<div style="text-align: center; color: #d63031; padding: 20px; font-weight: bold;">Müşteri sinirlenip gitti!</div>`; } oyunuKaydet(); }
function teklifiKabulEt(id, tId) { const a = garaj.find(x => x.id === id); const t = a.teklifler.find(x => x.id === tId); satisiTamamla(id, tId, "nakit", 0); }
function senetleSat(id, tId, sF) { const a = garaj.find(x => x.id === id); const t = a.teklifler.find(x => x.id === tId); satisiTamamla(id, tId, "senet", sF); }
function satisiTamamla(id, tId, tip, sF) { const a = garaj.find(x => x.id === id); const t = a.teklifler.find(x => x.id === tId); modaliKapat('teklif-modal'); let netKazanc = 0; if(tip === "nakit") { netKazanc = t.fiyat - noterUcreti; paramiz += netKazanc; toplamGelir += netKazanc; if (t.tip === "Takas") { if ((garaj.length + rentACarFilosu.length) >= aracKapasitesi) { ozelUyari(`TAKAS edilen araca yer yok!`, "hata"); return; } garaj.push(t.takasArac); ozelUyari(`Takas Başarılı!`, "basari"); } else { ozelUyari(`Araç Nakit Satıldı!`, "basari"); } } else { let pes = Math.round(sF * 0.20); netKazanc = sF; paramiz += pes; toplamGelir += pes; senetler.push({ id: 'snt-'+Math.floor(Math.random()*10000), musteri: t.musteri, arabaMarka: a.marka, toplamBorc: sF, odenen: pes, taksit: Math.round((sF-pes)/10), kalanGun: 10, durum: 'Düzenli Ödüyor' }); ozelUyari(`Araç Senetle Satıldı!`, "basari"); } let maliyet = a.alisFiyati || Math.floor(a.fiyat * 0.85); let kar = netKazanc - maliyet; if(kar > 0) vergiBorcu += Math.round(kar * 0.20); if(gizliKusurluAraclar.includes(id)) { sabikaliSatislar.push({ musteri: t.musteri, satilanFiyat: netKazanc, gun: gun, id: a.id }); gizliKusurluAraclar = gizliKusurluAraclar.filter(x => x !== id); } haritaPuani += 0.2; if(haritaPuani > 5.0) haritaPuani = 5.0; garaj = garaj.filter(x => x.id !== id); toplamSatilanArac++; oyunSesi('kasa'); aktifEkraniYenile(); oyunuKaydet(); }

// ==========================================
// 10. SOSYAL MEDYA
// ==========================================
function sosyalEkraniGuncelle() { 
    let k = document.getElementById('sosyal-kurulum'); let y = document.getElementById('sosyal-yonetim'); 
    if (!sosyalMedya.aktif) { if(k) k.style.display = 'block'; if(y) y.style.display = 'none'; } 
    else { 
        if(k) k.style.display = 'none'; if(y) y.style.display = 'block'; 
        let isim = sosyalMedya.kullaniciAdi.replace('@', '');
        document.getElementById('profil-ad').innerHTML = `@${isim}`; document.getElementById('sm-avatar-harf').innerText = isim.charAt(0).toUpperCase(); document.getElementById('profil-platform').innerText = sosyalMedya.platform; document.getElementById('mavi-tik-ikon').style.display = sosyalMedya.maviTik ? 'inline' : 'none';
        document.getElementById('profil-takipci').innerText = paraFormatla(Math.floor(sosyalMedya.takipci)); document.getElementById('profil-gonderi-sayisi').innerText = sosyalMedya.gonderiler.length;
        let etkilesim = sosyalMedya.maviTik ? 18.5 : (sosyalMedya.gonderiler.length * 1.2 + 2.4); if (sosyalMedya.lincKalanGun > 0) etkilesim = 0.1; document.getElementById('profil-etkilesim').innerText = "%" + etkilesim.toFixed(1);
        
        let grafikAlan = document.getElementById('sm-grafik'); grafikAlan.innerHTML = ''; let maxTakipci = Math.max(...sosyalMedya.takipciGecmisi, 100); 
        sosyalMedya.takipciGecmisi.forEach((deger, index) => { let yukseklik = (deger / maxTakipci) * 100; if(yukseklik < 5) yukseklik = 5; let kMetin = deger > 1000 ? (deger/1000).toFixed(1) + "k" : Math.floor(deger); grafikAlan.innerHTML += `<div class="grafik-sutun" style="height: ${yukseklik}%;"><span class="grafik-deger">${kMetin}</span><span class="grafik-gun">G${gun - (6 - index)}</span></div>`; });
        
        let grid = document.getElementById('sm-post-grid'); grid.innerHTML = '';
        if (sosyalMedya.gonderiler.length === 0) { grid.innerHTML = `<div style="grid-column: 1 / -1; text-align:center; color:var(--text-muted); padding: 30px; background:var(--card-bg); border-radius:10px;">Henüz hiç gönderi paylaşmadın.</div>`; } 
        else { sosyalMedya.gonderiler.forEach(p => { grid.innerHTML += `<div class="sm-post-item"><img src="${p.gorsel}"><div class="sm-post-overlay"><span>❤️ ${paraFormatla(p.begeni)}</span><span>💬 ${paraFormatla(p.yorum)}</span></div></div>`; }); }
        
        let lu = document.getElementById('sosyal-linc-uyari'); let lk = document.getElementById('linc-kalan'); 
        if (sosyalMedya.lincKalanGun > 0) { if(lu) lu.style.display = "block"; if(lk) lk.innerText = sosyalMedya.lincKalanGun; } else { if(lu) lu.style.display = "none"; } 
        
        // YENİ: Sponsorluk Arayüzü
        let spAlan = document.getElementById('sponsor-alani');
        if(aktifSponsor.aktif) { spAlan.innerHTML = `<div class="modern-kutu" style="background:#27ae60; color:white; display:flex; justify-content:space-between; align-items:center;"><div style="font-size:14px;"><b>🤝 Sponsor:</b> ${aktifSponsor.isim}<br><span style="font-size:12px;">Getiri: +${paraFormatla(aktifSponsor.gunlukGetiri)}₺/Gün (Kalan: ${aktifSponsor.kalanGun} Gün)</span></div><button class="btn btn-kirmizi" style="width:auto; margin:0; padding:10px;" onclick="sponsorIptal()">İptal Et</button></div>`; } 
        else if (sponsorlukTeklifleri.length > 0) { let t = sponsorlukTeklifleri[0]; spAlan.innerHTML = `<div class="modern-kutu" style="border: 2px solid #f39c12;"><h4 style="margin:0 0 10px 0; color:#f39c12;">🤝 Yeni Sponsorluk Teklifi</h4><p style="font-size:13px; margin-bottom:10px;"><b>${t.isim}</b> markası sayfana reklam vermek istiyor. <br><b>Teklif:</b> Günlük ${paraFormatla(t.gunlukGetiri)} ₺ (7 Gün)</p><div style="display:flex; gap:10px;"><button class="btn btn-yesil" style="margin:0;" onclick="sponsorKabul()">Kabul Et</button><button class="btn btn-kirmizi" style="margin:0;" onclick="sponsorReddet()">Reddet</button></div></div>`; } 
        else { spAlan.innerHTML = `<div class="uyari-mesaji" style="font-size:13px;"><i class='bx bx-info-circle'></i> Aktif bir sponsorluk teklifi yok. (Takipçi arttıkça markalar DM atacaktır).</div>`; }

        // YENİ: Reklam Durumu
        let rUyari = document.getElementById('aktif-reklam-uyarisi');
        if (aktifReklam.aktif) { rUyari.style.display = "block"; document.getElementById('reklam-hedef-isim').innerText = aktifReklam.kitle; document.getElementById('reklam-kalan-gun').innerText = aktifReklam.kalanGun; } else { rUyari.style.display = "none"; }

        dmKutusunuEkranaBas(); 
    } 
}
function sosyalHesapAc() { let ka = document.getElementById('sm-kullanici-adi').value; let plat = document.getElementById('sm-platform').value; if (ka.trim() === "") return ozelUyari("İsim girin.", "hata"); sosyalMedya.aktif = true; sosyalMedya.platform = plat; sosyalMedya.kullaniciAdi = ka.startsWith('@') ? ka : '@'+ka; sosyalMedya.takipci = 50; oyunSesi('kasa'); aktifEkraniYenile(); oyunuKaydet(); }
function maviTikAl() { if (sosyalMedya.maviTik) return; if (!bakiyeYeterliMi(25000)) return ozelUyari("Para yok!", "hata"); paramiz -= 25000; sosyalMedya.maviTik = true; oyunSesi('kasa'); aktifEkraniYenile(); oyunuKaydet(); ozelUyari("Mavi Tik Alındı.", "basari"); }
function cekilisYap() { if (!bakiyeYeterliMi(80000)) return ozelUyari("Para yok!", "hata"); if (sosyalMedya.lincKalanGun > 0) return ozelUyari("Linç yiyorsun!", "hata"); paramiz -= 80000; if (Math.random() < 0.15) { sosyalMedya.lincKalanGun = 5; sosyalMedya.takipci -= Math.floor(sosyalMedya.takipci * 0.10); oyunSesi('hata'); ozelUyari(`🚨 İFŞALANDIN!`, "hata"); } else { sosyalMedya.takipci += 15000; oyunSesi('kasa'); ozelUyari(`🎁 Çekiliş patladı!`, "basari"); } aktifEkraniYenile(); oyunuKaydet(); }
function postIcinArabaSec() { if (garaj.length === 0) return ozelUyari("Garaj boş!", "hata"); if (!bakiyeYeterliMi(1500)) return ozelUyari("Para yok.", "hata"); const lst = document.getElementById('post-araba-listesi'); lst.innerHTML = ''; garaj.forEach(a => { lst.innerHTML += `<div class="teklif-karti"><div><b>${a.marka} ${a.model}</b></div><button class="btn btn-yesil" onclick="videoCekVePaylas(${a.id})">Çek</button></div>`; }); document.getElementById('post-secim-modal').style.display = "block"; }
function videoCekVePaylas(id) { 
    const a = garaj.find(x => x.id === id); if (!a) return; modaliKapat('post-secim-modal'); paramiz -= 1500; 
    let kazanilanTakipci = Math.floor(Math.random() * 1000) + 1000; if(sosyalMedya.maviTik) kazanilanTakipci *= 2; sosyalMedya.takipci += kazanilanTakipci; 
    let begeni = Math.floor(sosyalMedya.takipci * (Math.random() * 0.15 + 0.05)); let yorum = Math.floor(begeni * (Math.random() * 0.1 + 0.02));
    sosyalMedya.gonderiler.unshift({ gorsel: a.gorsel, begeni: begeni, yorum: yorum }); if (sosyalMedya.gonderiler.length > 9) sosyalMedya.gonderiler.pop();
    document.getElementById('post-sonuc-takipci').innerText = `+${paraFormatla(kazanilanTakipci)} Takipçi`; document.getElementById('post-yorumlar').innerHTML = `<div style="margin-bottom:5px;"><b>@sokak_tayfasi:</b> Ateş ediyor 🔥</div><div style="margin-bottom:5px;"><b>@otomanyak:</b> Fiyat nedir usta?</div><div><b>@${sosyalMedya.kullaniciAdi.replace('@','')}_fan:</b> Kral yine piyasayı belirlemişsin.</div>`; 
    oyunSesi('kasa'); aktifEkraniYenile(); oyunuKaydet(); document.getElementById('post-sonuc-modal').style.display = "block"; 
}
function dmKutusunuEkranaBas() { const k = document.getElementById('dm-kutusu'); if(!k) return; k.innerHTML = ''; if (dmKutusu.length === 0) { k.innerHTML = '<p style="color:var(--text-muted); font-size:13px;">Gelen kutusu boş.</p>'; return; } dmKutusu.forEach((m, i) => { k.innerHTML += `<div class="ilan-karti"><div><b>📩 ${m.gonderen}</b><br>Teklif: <span style="color:#00b894; font-weight:bold; font-size:16px;">${paraFormatla(m.teklifFiyat)} ₺</span></div><div style="display:flex; gap:10px;"><button class="btn btn-yesil" onclick="dmTeklifKabul(${i}, ${m.arabaId})">Sat</button> <button class="btn btn-kirmizi" onclick="dmSil(${i})">Sil</button></div></div>`; }); }
function dmSil(i) { dmKutusu.splice(i, 1); oyunSesi('hata'); aktifEkraniYenile(); oyunuKaydet(); }
function dmTeklifKabul(i, id) { const aI = garaj.findIndex(x => x.id === id); if (aI === -1) { dmSil(i); return; } let m = dmKutusu[i]; paramiz += (m.teklifFiyat - noterUcreti); garaj.splice(aI, 1); dmKutusu.splice(i, 1); oyunSesi('kasa'); aktifEkraniYenile(); oyunuKaydet(); ozelUyari(`DM satışı tamam!`, "basari"); }

function canliYayinIcinArabaSec() { if (garaj.length===0) return ozelUyari("Garajda araç yok.","hata"); if (sosyalMedya.takipci<500) return ozelUyari("En az 500 takipçin olmalı!","hata"); const l = document.getElementById('yayin-araba-listesi'); if(!l) return; l.innerHTML=''; garaj.forEach(a=>{ l.innerHTML+=`<div class="teklif-karti"><div><b>${a.marka} ${a.model}</b></div><button class="btn btn-kirmizi" onclick="canliYayiniBaslat(${a.id})">Yayınla</button></div>`; }); document.getElementById('yayin-secim-modal').style.display="block"; }
function canliYayiniBaslat(id) { modaliKapat('yayin-secim-modal'); yayindakiAraba = garaj.find(x => x.id === id); anlikIzleyici = Math.floor(sosyalMedya.takipci * 0.1) + 10; anlikEnYuksekTeklif = Math.floor(yayindakiAraba.fiyat * 0.60); yayindakiTeklifci = "Sistem"; yayinTuruHype = 1.0; document.getElementById('yayin-araba-foto').src = yayindakiAraba.gorsel; document.getElementById('yayin-araba-baslik').innerText = `${yayindakiAraba.marka} ${yayindakiAraba.model}`; document.getElementById('yayin-araba-deger').innerText = paraFormatla(yayindakiAraba.fiyat); document.getElementById('yayin-en-yuksek-teklif').innerText = paraFormatla(anlikEnYuksekTeklif); document.getElementById('yayin-teklif-veren').innerText = "Başlangıç Fiyatı"; document.getElementById('yayin-chat').innerHTML = `<div style="color:#00b894; text-align:center;">Yayın başladı...</div>`; document.getElementById('canli-yayin-modal').style.display="block"; if(yayinInterval) clearInterval(yayinInterval); yayinInterval = setInterval(yayinDongusu, 1500); }
function yayinDongusu() { anlikIzleyici += Math.floor((Math.random()*20-10)*yayinTuruHype); if(anlikIzleyici<5)anlikIzleyici=5; document.getElementById('yayin-izleyici').innerText = anlikIzleyici; if(yayinTuruHype>1.0) yayinTuruHype -= 0.1; let ct = document.getElementById('yayin-chat'); let sans = 0.35 * yayinTuruHype; if (anlikEnYuksekTeklif > (yayindakiAraba.fiyat * 1.20)) sans = 0.05; if(Math.random() < sans) { anlikEnYuksekTeklif += Math.floor(Math.random() * 30000) + 10000; yayindakiTeklifci = "Anonim" + Math.floor(Math.random()*99); document.getElementById('yayin-en-yuksek-teklif').innerText = paraFormatla(anlikEnYuksekTeklif); document.getElementById('yayin-teklif-veren').innerText = yayindakiTeklifci; ct.innerHTML += `<div style="color:#00b894;">💰 Benden ${paraFormatla(anlikEnYuksekTeklif)} ₺ çalışır!</div>`; oyunSesi('kasa'); } else { let bosYorumlar = ["Araba yorgun duruyor", "Fiyat çok şişti", "O paraya uçak alırım", "🔥🔥🔥", "Değişeni var mı?"]; let yorum = bosYorumlar[Math.floor(Math.random() * bosYorumlar.length)]; ct.innerHTML += `<div><span style="color:#dfe6e9;">${yorum}</span></div>`; } ct.scrollTop=ct.scrollHeight; }
function yayinGazaGetir() { yayinTuruHype = 2.5; let chat = document.getElementById('yayin-chat'); chat.innerHTML += `<div style="color:#ff7675;">📣 HAYDİ BEYLER!</div>`; chat.scrollTop = chat.scrollHeight; }
function yayindaSat() { if(anlikEnYuksekTeklif < (yayindakiAraba.fiyat * 0.5)) return ozelUyari("Çok ucuz!","hata"); clearInterval(yayinInterval); modaliKapat('canli-yayin-modal'); paramiz += anlikEnYuksekTeklif; garaj = garaj.filter(x => x.id !== yayindakiAraba.id); oyunSesi('kasa'); aktifEkraniYenile(); oyunuKaydet(); ozelUyari(`Yayında Satıldı!`, "basari"); }
function yayiniBitir() { clearInterval(yayinInterval); modaliKapat('canli-yayin-modal'); }

// ==========================================
// 11. YEDİEMİN İHALESİ
// ==========================================
function ihaleEkraniniGuncelle() {
    let alan = document.getElementById('ihale-durum-alani'); if(!alan) return;
    let ihaleGunu = gun % 3 === 0; 
    if (ihaleGunu && !ihaleInterval && !ihaleAraba) { alan.innerHTML = `<div style="background: #fff3cd; padding: 20px; border-radius: 10px; border: 2px solid #f1c40f;"><h2 style="color: #d35400; margin-top: 0;">Yeni Bir İhale Başlamak Üzere!</h2><p style="color:#2d3436;">İhaleye giriş bedeli: <b>5.000 ₺</b></p><button class="btn btn-turuncu" style="font-size: 18px; padding: 15px;" onclick="ihaleyeGir()">🎟️ İhaleye Katıl (5.000 ₺)</button></div>`; } 
    else if (ihaleInterval || ihaleAraba) { alan.innerHTML = `<button class="btn btn-mavi" style="font-size: 18px; padding: 15px;" onclick="document.getElementById('ihale-modal').style.display='block'">Aktif İhaleye Dön</button>`; } 
    else { let kalan = 3 - (gun % 3); alan.innerHTML = `<div class="uyari-mesaji">Şu an aktif bir ihale bulunmuyor. Bir sonraki ihale <b>${kalan} gün</b> sonra.</div>`; }
}
function ihaleyeGir() { if(eHacizAktif) { ozelUyari("Hesaplarında e-Haciz var! Devlet ihalesine giremezsin.", "hata"); return; } if(!bakiyeYeterliMi(5000)) { ozelUyari("Giriş bedeli için 5.000 ₺ paranız yok.", "hata"); return; } paramiz -= 5000; toplamGider += 5000; oyunSesi('kasa'); aktifEkraniYenile(); ihaleHazirla('manuel'); }
function ihaleHazirla(tetik) { if (tetik !== 'manuel') return; if ((garaj.length + rentACarFilosu.length) >= aracKapasitesi) { ozelUyari("Garaj kapasiteniz dolu!", "hata"); return; } ihaleAraba = rastgeleArabaUret(); ihaleFiyat = Math.round(ihaleAraba.fiyat * 0.25); ihaleBizdeMi = false; ihaleKapanmaSayaci = 0; document.getElementById('ihale-araba-isim').innerText = `${ihaleAraba.marka} ${ihaleAraba.model}`; document.getElementById('ihale-guncel-teklif').innerText = paraFormatla(ihaleFiyat); document.getElementById('ihale-teklif-sahibi').innerText = "Başlangıç Bedeli"; document.getElementById('ihale-modal').style.display = 'block'; if(ihaleInterval) clearInterval(ihaleInterval); ihaleInterval = setInterval(ihaleDongusu, 2000); aktifEkraniYenile(); }
function ihaleDongusu() { if (ihaleKapanmaSayaci >= 3) { ihaleBitir(); return; } let npcMaxLimit = ihaleAraba.fiyat * 0.85; let npcTeklifSansi = ihaleBizdeMi ? 0.65 : 0.35; if (Math.random() < npcTeklifSansi && ihaleFiyat < npcMaxLimit) { let artis = (Math.floor(Math.random() * 3) + 1) * 10000; ihaleFiyat += artis; ihaleBizdeMi = false; ihaleKapanmaSayaci = 0; oyunSesi('hata'); document.getElementById('ihale-guncel-teklif').innerText = paraFormatla(ihaleFiyat); document.getElementById('ihale-teklif-sahibi').innerText = "Rakip Galeri (+" + paraFormatla(artis) + " ₺)"; } else { ihaleKapanmaSayaci++; let durumMetni = ihaleBizdeMi ? "Sende!" : "Rakip Galeri"; if (ihaleKapanmaSayaci === 1) document.getElementById('ihale-teklif-sahibi').innerText = durumMetni + " (Satıyorum...)"; if (ihaleKapanmaSayaci === 2) document.getElementById('ihale-teklif-sahibi').innerText = durumMetni + " (Sattıııım...)"; } }
function ihaleTeklifVer() { if(eHacizAktif) { ozelUyari("Hesaplarında e-Haciz var! İhaleye giremezsin.", "hata"); return; } if (!bakiyeYeterliMi(ihaleFiyat + 25000)) { ozelUyari("Para yok!", "hata"); return; } ihaleFiyat += 25000; ihaleBizdeMi = true; ihaleKapanmaSayaci = 0; oyunSesi('kasa'); document.getElementById('ihale-guncel-teklif').innerText = paraFormatla(ihaleFiyat); document.getElementById('ihale-teklif-sahibi').innerText = "Sende!"; }
function ihaleBitir() { if(ihaleInterval) clearInterval(ihaleInterval); modaliKapat('ihale-modal'); if (ihaleBizdeMi && ihaleAraba) { paramiz -= ihaleFiyat; toplamGider += ihaleFiyat; ihaleAraba.fiyat = Math.round(ihaleAraba.fiyat); ihaleAraba.alisFiyati = ihaleFiyat; ihaleAraba.rehinliMi = false; garaj.push(ihaleAraba); ihaleAraba = null; ihaleInterval = null; aktifEkraniYenile(); oyunuKaydet(); ozelUyari(`🎉 İhaleyi Kazandın!\nSürpriz araç ${paraFormatla(ihaleFiyat)} ₺ karşılığında garajına çekildi.`, "basari"); } else { ihaleAraba = null; ihaleInterval = null; aktifEkraniYenile(); ozelUyari(`İhale Kapandı. Araç rakip galeriye satıldı.`, "bilgi"); } }
function ihaledenCekil() { if(ihaleInterval) clearInterval(ihaleInterval); ihaleAraba = null; ihaleInterval = null; modaliKapat('ihale-modal'); aktifEkraniYenile(); }

// ==========================================
// BAŞLANGIÇ
// ==========================================
function oyunuBaslat() {
    if (!oyunuYukle()) { document.getElementById('baslangic-modal').style.display = 'block'; } 
    else { document.getElementById('header-logo').innerHTML = `${galeriAdi}<span>Motors</span>`; if (arabalar.length === 0) piyasayiYenile(); borsaBaslat(); aktifEkraniYenile(); menuDegistir('pazar'); }
}
function galeriAdiniKaydet() {
    let ad = document.getElementById('galeri-adi-input').value; if (ad.trim() === "") return; galeriAdi = ad;
    document.getElementById('baslangic-modal').style.display = 'none'; document.getElementById('header-logo').innerHTML = `${galeriAdi}<span>Motors</span>`;
    piyasayiYenile(); oyunuKaydet(); borsaBaslat(); aktifEkraniYenile(); menuDegistir('pazar'); 
}

oyunuBaslat();