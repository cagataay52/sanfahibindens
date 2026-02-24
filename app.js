function ozelUyari(mesaj, tip = 'bilgi') {
    const modal = document.getElementById('uyari-modal');
    const baslik = document.getElementById('uyari-baslik');
    const mesajAlani = document.getElementById('uyari-mesaj');
    if (tip === 'hata') { baslik.innerText = '❌ Hata'; baslik.style.color = '#d63031'; } 
    else if (tip === 'basari') { baslik.innerText = '✅ Başarılı'; baslik.style.color = '#00b894'; } 
    else { baslik.innerText = 'ℹ️ Bilgi'; baslik.style.color = '#0984e3'; }
    mesajAlani.innerText = mesaj; modal.style.display = 'block';
}

function uyariyiKapat() { document.getElementById('uyari-modal').style.display = 'none'; }
function modaliKapat(modalId) { document.getElementById(modalId).style.display = "none"; }
function ayarlarModalAc() { document.getElementById('ayarlar-modal').style.display = "block"; }
function mobilMenuKapatAc() { document.querySelector('.sol-menu').classList.toggle('acik'); document.getElementById('mobil-menu-overlay').classList.toggle('acik'); }

// DÜZELTME: Tarayıcıların "Yükleniyor" ekranında çökmesini engelleyen güvenli ses motoru
let audioCtx;
function oyunSesi(tip) {
    try {
        if (!audioCtx) { audioCtx = new (window.AudioContext || window.webkitAudioContext)(); }
        if (audioCtx.state === 'suspended') { audioCtx.resume(); }
        const osc = audioCtx.createOscillator(); const gain = audioCtx.createGain();
        osc.connect(gain); gain.connect(audioCtx.destination);
        if (tip === 'kasa') { osc.type = 'sine'; osc.frequency.setValueAtTime(800, audioCtx.currentTime); osc.frequency.exponentialRampToValueAtTime(1500, audioCtx.currentTime + 0.1); gain.gain.setValueAtTime(0.2, audioCtx.currentTime); gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3); osc.start(); osc.stop(audioCtx.currentTime + 0.3); } 
        else if (tip === 'hata') { osc.type = 'sawtooth'; osc.frequency.setValueAtTime(150, audioCtx.currentTime); gain.gain.setValueAtTime(0.1, audioCtx.currentTime); gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.4); osc.start(); osc.stop(audioCtx.currentTime + 0.4); }
    } catch(e) { console.log("Ses oynatılamadı", e); }
}

let galeriAdi = "Benim"; let paramiz = 15000000; let bankaBorcu = 0; let garaj = []; let gun = 1; let idSayaci = 1; 
let toplamSatilanArac = 0; let toplamGelir = 0; let toplamGider = 0;
let dukkanSeviyesi = 1; let aracKapasitesi = 2; let arabalar = []; let hakanAbiSonKullanim = -15; 
const noterUcreti = 2500; let piyasaDurumu = "Normal"; let piyasaCarpani = 1.0; let aylikFaturalar = 4500; let sigortaVeMtvUcreti = 4000;

let sosyalMedya = { aktif: false, platform: "", kullaniciAdi: "", takipci: 0, maviTik: false, lincBitisGunu: 0, sponsorlukAktif: false };
let dmKutusu = [];

const seviyeler = [{ seviye: 1, isim: "Sokak Arası Galeri", kapasite: 2, fiyat: 0, kira: 5000 }, { seviye: 2, isim: "Lüks Galeri", kapasite: 5, fiyat: 2000000, kira: 25000 }, { seviye: 3, isim: "Oto Center", kapasite: 10, fiyat: 5000000, kira: 75000 }, { seviye: 4, isim: "Dev Plaza", kapasite: 999, fiyat: 15000000, kira: 250000 }];
const modifiyePaketleri = [{ id: 1, isim: "Cam Filmi & Seramik Boya", ikon: "✨", maliyet: 25000, degerArtisi: 60000 }, { id: 2, isim: "Spor Çelik Jant & Lastik", ikon: "🛞", maliyet: 55000, degerArtisi: 130000 }, { id: 3, isim: "Stage 1 Yazılım & Egzoz", ikon: "💻", maliyet: 90000, degerArtisi: 220000 }];
const musteriIsimleri = ["Ahmet Bey", "Mehmet Bey", "Ayşe Hanım", "Can", "Zeynep", "Burak", "Kemal", "Elif", "Mert", "Selin", "hizli_cocuk", "drft_kral", "aylinex"];
const aracSablonlari = [{ marka: "BMW", model: "320i", tabanFiyat: 3800000, gorsel: "img/bmw-320i.jpg" }, { marka: "Mercedes", model: "C200", tabanFiyat: 4100000, gorsel: "img/mercedes-c200.jpg" }, { marka: "Audi", model: "A3", tabanFiyat: 2400000, gorsel: "img/audi-a3.jpg" }, { marka: "Volkswagen", model: "Golf", tabanFiyat: 1850000, gorsel: "img/golf.jpg" }, { marka: "Renault", model: "Megane", tabanFiyat: 1400000, gorsel: "img/megane.jpg" }, { marka: "Fiat", model: "Egea", tabanFiyat: 1100000, gorsel: "img/egea.jpg" }, { marka: "Toyota", model: "Corolla", tabanFiyat: 1550000, gorsel: "img/corolla.jpg" }, { marka: "Honda", model: "Civic", tabanFiyat: 1750000, gorsel: "img/civic.jpg" }];

function oyunuKaydet() { localStorage.setItem('sahibindenMotorsKayit', JSON.stringify({ galeriAdi, paramiz, bankaBorcu, garaj, gun, dukkanSeviyesi, aracKapasitesi, toplamSatilanArac, toplamGelir, toplamGider, arabalar, idSayaci, hakanAbiSonKullanim, piyasaDurumu, piyasaCarpani, sosyalMedya, dmKutusu })); }
function oyunuYukle() {
    const k = JSON.parse(localStorage.getItem('sahibindenMotorsKayit'));
    if (k && k.galeriAdi) {
        galeriAdi=k.galeriAdi; paramiz=k.paramiz; bankaBorcu=k.bankaBorcu; garaj=k.garaj; gun=k.gun; dukkanSeviyesi=k.dukkanSeviyesi; aracKapasitesi=k.aracKapasitesi; toplamSatilanArac=k.toplamSatilanArac; toplamGelir=k.toplamGelir; toplamGider=k.toplamGider; arabalar=k.arabalar||[]; idSayaci=k.idSayaci||1; hakanAbiSonKullanim=k.hakanAbiSonKullanim||-15; piyasaDurumu=k.piyasaDurumu||"Normal"; piyasaCarpani=k.piyasaCarpani||1.0;
        sosyalMedya=k.sosyalMedya||{ aktif: false, platform: "", kullaniciAdi: "", takipci: 0, maviTik: false, lincBitisGunu: 0, sponsorlukAktif: false }; dmKutusu=k.dmKutusu||[];
        garaj.forEach(a => { if(a.tamirDurumu === undefined) a.tamirDurumu = 0; }); document.getElementById('gun').innerText = gun; return true; 
    } return false; 
}
function oyunuSifirlaEkrani() { if(confirm("Tüm ilerlemen silinecek! Emin misin?")) { localStorage.removeItem('sahibindenMotorsKayit'); location.reload(); } }

function ekspertizUret() {
    const parcalar = ['kaput', 'tavan', 'bagaj', 'solOnCamurluk', 'solOnKapi', 'solArkaKapi', 'solArkaCamurluk', 'sagOnCamurluk', 'sagOnKapi', 'sagArkaKapi', 'sagArkaCamurluk'];
    const ekspertiz = {}; let hasarPuan = 0; let temizMi = Math.random() < 0.25;
    parcalar.forEach(p => { if (temizMi) { ekspertiz[p] = 'orijinal'; } else { let rnd = Math.random(); if (rnd < 0.50) ekspertiz[p] = 'orijinal'; else if (rnd < 0.70) { ekspertiz[p] = 'lokal'; hasarPuan += 1; } else if (rnd < 0.88) { ekspertiz[p] = 'boyali'; hasarPuan += 3; } else { ekspertiz[p] = 'degisen'; hasarPuan += 6; } } });
    return { detay: ekspertiz, puan: hasarPuan };
}
function tramerUret(hasarPuan, tavanHasarliMi) {
    let sasiNo = "WBA" + Math.random().toString(36).substring(2, 8).toUpperCase() + "***"; let mesaj = `Sayın İlgili, kayıtlarımıza göre <b>${sasiNo}</b> şasi numaralı araçta `;
    if (hasarPuan === 0) return mesaj + `<b>HASAR KAYDI BULUNMAMIŞTIR.</b> B002`;
    let kazaSayisi = Math.floor(Math.random() * 3) + 1; let toplamTramer = hasarPuan * (Math.floor(Math.random() * 15000) + 10000); 
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
    const sablon = aracSablonlari[Math.floor(Math.random() * aracSablonlari.length)]; const yil = Math.floor(Math.random() * (2026 - 2020 + 1)) + 2020; const km = ((2026 - yil) * Math.floor(Math.random() * 20000 + 10000)) + Math.floor(Math.random() * 15000);
    let yas = 2026 - yil; let degerKaybiOrani = (yas * 0.03) + ((km / 10000) * 0.015); if (degerKaybiOrani > 0.40) degerKaybiOrani = 0.40; let tabanHesap = sablon.tabanFiyat * (1 - degerKaybiOrani);
    let ekspertizVerisi = ekspertizUret(); let hasarIndirimi = ekspertizVerisi.puan * 0.015; if (hasarIndirimi > 0.50) hasarIndirimi = 0.50; let fiyat = (tabanHesap * (1 - hasarIndirimi)) * piyasaCarpani;
    let agirHasarliMi = ekspertizVerisi.puan > 15 || ekspertizVerisi.detay['tavan'] === 'degisen'; let tamirMasrafi = agirHasarliMi ? Math.floor(fiyat * 0.1) : 0; 
    return { id: idSayaci++, marka: sablon.marka, model: sablon.model, yil: yil, km: Math.floor(km), fiyat: Math.floor(fiyat), hasarli: agirHasarliMi, tamirMasrafi: tamirMasrafi, modifiyeler: [], gorsel: sablon.gorsel, ekspertiz: ekspertizVerisi.detay, ilanAciklamasi: aciklamaUret(ekspertizVerisi.puan, km, sablon.marka), teklifler: [], telefon: '05' + Math.floor(Math.random() * 90000000 + 10000000), tramer: tramerUret(ekspertizVerisi.puan, agirHasarliMi), tamirDurumu: 0 };
}

function piyasayiYenile() { arabalar = []; for(let i = 0; i < 4; i++) { arabalar.push(rastgeleArabaUret()); } if (document.getElementById('pazar-ekrani').style.display === 'block') arabalariEkranaGetir(); }

function sonrakiGun() {
    gun++; document.getElementById('gun').innerText = gun;
    
    if (gun % 30 === 0) {
        let guncelKira = seviyeler[dukkanSeviyesi - 1].kira; let toplamAylikGider = guncelKira + aylikFaturalar; paramiz -= toplamAylikGider; toplamGider += toplamAylikGider; oyunSesi('hata'); ozelUyari(`📅 Ay sonu geldi! Kira ve faturalar (${toplamAylikGider.toLocaleString('tr-TR')} ₺) ödendi.`, "bilgi");
    }

    if (bankaBorcu > 0) { let faiz = Math.floor(bankaBorcu * 0.05); bankaBorcu += faiz; toplamGider += faiz; document.getElementById('borc-miktari').innerText = bankaBorcu.toLocaleString('tr-TR'); }
    if(Math.random() < 0.10) { let ceza = Math.floor(paramiz * 0.05) + 15000; if(ceza > paramiz) ceza = paramiz; paramiz -= ceza; toplamGider += ceza; oyunSesi('hata'); ozelUyari(`Maliye denetimi! ${ceza.toLocaleString('tr-TR')} TL ceza yedin.`, 'hata'); }
    
    // SPONSORLUK GELİRİ
    if (sosyalMedya.sponsorlukAktif) { paramiz += 15000; toplamGelir += 15000; }

    const sans = Math.random(); let eskiCarpan = piyasaCarpani;
    if (sans < 0.05 && piyasaDurumu !== "Kriz") { piyasaDurumu = "Kriz"; piyasaCarpani = 0.85; oyunSesi('hata'); ozelUyari("📉 FLAŞ HABER: Kredi faizleri uçtu, piyasa kilitlendi! Araç fiyatları düştü.", "hata"); } 
    else if (sans > 0.95 && piyasaDurumu !== "Canli") { piyasaDurumu = "Canli"; piyasaCarpani = 1.20; oyunSesi('kasa'); ozelUyari("📈 FLAŞ HABER: Devletten muazzam kredi kampanyası! Fiyatlar fırladı!", "basari"); } 
    else if (sans > 0.40 && sans < 0.45 && piyasaDurumu !== "Normal") { piyasaDurumu = "Normal"; piyasaCarpani = 1.0; ozelUyari("⚖️ Piyasa ateşini kaybetti, alım-satımlar normale döndü.", "bilgi"); }

    if (eskiCarpan !== piyasaCarpani) { let degisimOrani = piyasaCarpani / eskiCarpan; garaj.forEach(araba => { araba.fiyat = Math.floor(araba.fiyat * degisimOrani); araba.teklifler = []; }); }

    garaj.forEach(araba => {
        if (araba.tamirDurumu > 0) {
            araba.tamirDurumu--; 
            if (araba.tamirDurumu === 0) { araba.hasarli = false; araba.fiyat += (araba.tamirMasrafi * 3); araba.tamirMasrafi = 0; oyunSesi('kasa'); } 
        } else {
            araba.teklifler = araba.teklifler.filter(t => (gun - t.gelisGunu) < 3);
            if (Math.random() < 0.4) {
                let mTip = Math.random(); let tip = "Normal"; let tFiyat = 0; let takas = null;
                if(araba.modifiyeler.length >= 3 && Math.random() < 0.4) { tip = "Tayfa"; tFiyat = Math.floor(araba.fiyat * (Math.random() * 0.20 + 1.10)); }
                else if (mTip < 0.2) { tip = "Olucu"; tFiyat = Math.floor(araba.fiyat * (Math.random() * 0.20 + 0.50)); }
                else if (mTip < 0.45) { tip = "Takas"; takas = rastgeleArabaUret(); takas.fiyat = Math.floor(araba.fiyat * 0.6); tFiyat = Math.floor((araba.fiyat - takas.fiyat) * 1.05); }
                else { tFiyat = Math.floor(araba.fiyat * (Math.random() * 0.30 + 0.90)); }
                araba.teklifler.push({ id: 'tk-'+Math.floor(Math.random()*99999), musteri: musteriIsimleri[Math.floor(Math.random() * musteriIsimleri.length)], fiyat: tFiyat, gelisGunu: gun, tip: tip, takasArac: takas });
            }
        }
    });

    if (sosyalMedya.aktif && garaj.length > 0 && gun >= sosyalMedya.lincBitisGunu) {
        let dmIhtimali = (sosyalMedya.takipci / 50000) + 0.10; if(sosyalMedya.maviTik) dmIhtimali += 0.15; if (dmIhtimali > 0.85) dmIhtimali = 0.85; 
        if (Math.random() < dmIhtimali) {
            let sAraba = garaj[Math.floor(Math.random() * garaj.length)];
            let teklif = Math.floor(sAraba.fiyat * (sosyalMedya.maviTik ? 1.10 : 1.0));
            dmKutusu.push({ gonderen: "@"+musteriIsimleri[Math.floor(Math.random()*musteriIsimleri.length)].toLowerCase()+Math.floor(Math.random()*99), metin: `Araç duruyorsa nakit alıyorum.`, teklifFiyat: teklif, arabaId: sAraba.id });
        }
    }

    piyasayiYenile(); ekraniGuncelle(); oyunuKaydet(); 
    if(document.getElementById('sosyal-ekrani').style.display === 'block') sosyalEkraniGuncelle(); else menuDegistir('pazar');
}

function menuDegistir(menu) {
    document.querySelectorAll('.sayfa').forEach(s => s.style.display = 'none'); document.querySelectorAll('.sol-menu li').forEach(l => l.classList.remove('aktif'));
    if(document.getElementById(menu + '-ekrani')) document.getElementById(menu + '-ekrani').style.display = 'block';
    if(document.getElementById('menu-' + menu)) document.getElementById('menu-' + menu).classList.add('aktif');
    if (menu === 'pazar') arabalariEkranaGetir(); if (menu === 'garaj') garajiEkranaGetir(); if (menu === 'istatistik') istatistikleriGuncelle(); if (menu === 'dukkan') dukkanEkraniniGuncelle(); if (menu === 'banka') document.getElementById('borc-miktari').innerText = bankaBorcu.toLocaleString('tr-TR'); if (menu === 'sosyal') sosyalEkraniGuncelle();
    if(window.innerWidth <= 768) { document.querySelector('.sol-menu').classList.remove('acik'); document.getElementById('mobil-menu-overlay').classList.remove('acik'); }
}

function krediCek(m) { oyunSesi('kasa'); paramiz+=m; bankaBorcu+=m; ekraniGuncelle(); oyunuKaydet(); ozelUyari(`Bankadan ${m.toLocaleString()} TL kredi çektin.`, 'basari'); document.getElementById('borc-miktari').innerText = bankaBorcu.toLocaleString(); }
function borcOde(m) { if(bankaBorcu===0) return ozelUyari("Borcun yok", "bilgi"); if(paramiz>=m){ let o=m>bankaBorcu?bankaBorcu:m; paramiz-=o; bankaBorcu-=o; ekraniGuncelle(); oyunuKaydet(); oyunSesi('satin-al'); ozelUyari(`${o.toLocaleString()} TL ödendi.`, "basari"); document.getElementById('borc-miktari').innerText = bankaBorcu.toLocaleString(); } else { oyunSesi('hata'); ozelUyari("Para yetersiz!", "hata"); } }
function borcuKapat() { if(bankaBorcu===0) return; if(paramiz>=bankaBorcu){ paramiz-=bankaBorcu; bankaBorcu=0; ekraniGuncelle(); oyunuKaydet(); oyunSesi('satin-al'); document.getElementById('borc-miktari').innerText = "0"; ozelUyari("Tüm borç kapandı!", "basari"); } else { ozelUyari("Para yetersiz!", "hata"); } }

function ekraniGuncelle() { document.getElementById('paramiz').innerText = paramiz.toLocaleString('tr-TR'); document.getElementById('kapasite-bilgi').innerText = garaj.length + "/" + (aracKapasitesi === 999 ? "Sınırsız" : aracKapasitesi); document.getElementById('kapasite-bilgi').style.color = (garaj.length >= aracKapasitesi && aracKapasitesi !== 999) ? '#e74c3c' : '#0984e3'; }

function arabalariEkranaGetir() {
    const l = document.getElementById('araba-listesi'); l.innerHTML = ''; 
    arabalar.forEach(a => {
        l.innerHTML += `<div class="ilan-karti"><div class="araba-foto"><img src="${a.gorsel}" style="width:100%; height:100%; object-fit:cover; border-radius:12px;"></div><div class="ilan-detay"><h3 class="ilan-baslik">Sahibinden ${a.marka} ${a.model}</h3><div class="ilan-ozellikler"><span>🗓️ <strong>${a.yil}</strong></span><span>🛣️ <strong>${a.km.toLocaleString()}</strong> KM</span></div><div class="ilan-durum" style="margin-top:5px;">${a.hasarli ? '<span class="etiket etiket-kirmizi">Ağır Hasarlı Olabilir</span>' : '<span class="etiket etiket-yesil">Ekspertiz Raporlu</span>'}</div></div><div class="ilan-sag-taraf"><div class="ilan-fiyat">${a.fiyat.toLocaleString()} ₺</div><button class="btn btn-turuncu" onclick="ilanDetayEkraniAc(${a.id})">🔍 İncele</button></div></div>`;
    });
}

function ilanDetayEkraniAc(id) {
    const a = arabalar.find(x => x.id === id); document.getElementById('detay-foto').src = a.gorsel; document.getElementById('detay-baslik').innerText = `Satılık ${a.marka} ${a.model}`; document.getElementById('detay-fiyat').innerText = `${a.fiyat.toLocaleString()} TL`; document.getElementById('detay-marka').innerText = a.marka; document.getElementById('detay-model').innerText = a.model; document.getElementById('detay-yil').innerText = a.yil; document.getElementById('detay-km').innerText = a.km.toLocaleString(); document.getElementById('detay-aciklama').innerText = a.ilanAciklamasi; document.getElementById('detay-telefon').innerText = a.telefon;
    ['kaput', 'tavan', 'bagaj', 'solOnCamurluk', 'solOnKapi', 'solArkaKapi', 'solArkaCamurluk', 'sagOnCamurluk', 'sagOnKapi', 'sagArkaKapi', 'sagArkaCamurluk'].forEach(p => { const div = document.getElementById(`eks-${p}`); div.className = `eks-parca ${a.ekspertiz[p]}`; });
    document.getElementById('detay-tramer-btn').onclick = () => tramerSorgula(a.id); document.getElementById('detay-satici-ara-btn').onclick = () => saticiAra(a.id); 
    const hBtn = document.getElementById('detay-hakan-abi-btn'); let kg = 15 - (gun - hakanAbiSonKullanim);
    if(kg <= 0) { hBtn.innerText = "👑 Hakan Abi'ye Çöktürt"; hBtn.style.opacity = "1"; hBtn.onclick = () => hakanAbiAra(a.id); } else { hBtn.innerText = `👑 Hakan Abi Meşgul (${kg} Gün)`; hBtn.style.opacity = "0.5"; hBtn.onclick = () => ozelUyari("Meşgul!", "bilgi"); }
    document.getElementById('ilan-detay-modal').style.display = 'block';
}

function tramerSorgula(id) { if(paramiz<150) return ozelUyari("Para yok!","hata"); paramiz-=150; toplamGider+=150; ekraniGuncelle(); oyunSesi('kasa'); document.getElementById('tramer-mesaj-icerik').innerHTML = arabalar.find(a=>a.id===id).tramer; document.getElementById('tramer-modal').style.display = 'block'; }
function telefonuKapat() { document.getElementById('telefon-modal').style.display = 'none'; document.querySelector('.telefon-ekrani').classList.remove('caliyor'); }

function saticiAra(id) {
    if(garaj.length>=aracKapasitesi) return ozelUyari("Garaj dolu!","hata"); const a = arabalar.find(x=>x.id===id); modaliKapat('ilan-detay-modal');
    document.getElementById('tel-aranan-kisi').innerText = `Satıcı (${a.telefon})`; document.getElementById('tel-aksiyonlar').style.display = 'none'; document.getElementById('telefon-modal').style.display = 'block'; document.querySelector('.telefon-ekrani').classList.add('caliyor'); document.getElementById('tel-diyalog').innerText="Dıt... Dıt...";
    setTimeout(() => { document.querySelector('.telefon-ekrani').classList.remove('caliyor'); document.getElementById('tel-diyalog').innerText = `"Alo buyur kardeşim. Fiyat ${a.fiyat.toLocaleString()} TL."`; document.getElementById('tel-aksiyonlar').style.display = 'flex'; document.getElementById('tel-satin-al-btn').onclick=()=>telSatinAl(a.id); document.getElementById('tel-pazarlik-btn').onclick=()=>telPazarlikYap(a.id); }, 2000);
}
function telPazarlikYap(id) {
    const a = arabalar.find(x=>x.id===id); document.getElementById('tel-aksiyonlar').style.display = 'none';
    if(Math.random()>0.4) { a.fiyat = Math.floor(a.fiyat*(1 - (Math.floor(Math.random()*8)+3)/100)); oyunSesi('kasa'); document.getElementById('tel-diyalog').innerHTML=`"Hadi ${a.fiyat.toLocaleString()} olsun gel."`; document.getElementById('tel-aksiyonlar').style.display='flex'; document.getElementById('tel-pazarlik-btn').style.display='none'; } 
    else { oyunSesi('hata'); document.getElementById('tel-diyalog').innerHTML=`<span style="color:#e74c3c">"Ölücüler aramasın!"</span>`; arabalar = arabalar.filter(x=>x.id!==id); piyasayiYenile(); }
}
function hakanAbiAra(id) {
    if(garaj.length>=aracKapasitesi) return; const a = arabalar.find(x=>x.id===id); modaliKapat('ilan-detay-modal'); document.getElementById('tel-aranan-kisi').innerText = `👑 Hakan Abi`; document.getElementById('tel-aksiyonlar').style.display = 'none'; document.getElementById('telefon-modal').style.display = 'block'; document.querySelector('.telefon-ekrani').classList.add('caliyor');
    setTimeout(() => { document.querySelector('.telefon-ekrani').classList.remove('caliyor'); let ind = Math.floor(a.fiyat*0.6); document.getElementById('tel-diyalog').innerHTML=`"Hallettim, ${ind.toLocaleString()} TL ver al."`; document.getElementById('tel-aksiyonlar').style.display='flex'; document.getElementById('tel-pazarlik-btn').style.display='none'; document.getElementById('tel-satin-al-btn').onclick=()=>{a.fiyat=ind; hakanAbiSonKullanim=gun; telSatinAl(a.id);}; }, 2500);
}
function telSatinAl(id) {
    const a = arabalar.find(x=>x.id===id); let tm = a.fiyat + noterUcreti + sigortaVeMtvUcreti;
    if(paramiz>=tm) { oyunSesi('kasa'); paramiz-=tm; toplamGider+=tm; a.tamirDurumu=0; garaj.push(a); arabalar = arabalar.filter(x=>x.id!==id); ekraniGuncelle(); arabalariEkranaGetir(); oyunuKaydet(); telefonuKapat(); ozelUyari(`Araç alındı!`, "basari"); } else { oyunSesi('hata'); document.getElementById('tel-diyalog').innerHTML=`<span style="color:#e74c3c">"Para yok kardeşim!"</span>`; document.getElementById('tel-aksiyonlar').style.display='none'; }
}

function garajiEkranaGetir() {
    const l = document.getElementById('garaj-listesi'); const b = document.getElementById('garaj-bilgi'); l.innerHTML = '';
    if(garaj.length===0) { b.style.display='block'; } else {
        b.style.display='none';
        garaj.forEach(a => {
            if(a.tamirDurumu>0) { l.innerHTML+=`<div class="ilan-karti" style="opacity:0.8; border-left:5px solid #e67e22;"><div class="araba-foto"><img src="${a.gorsel}" style="width:100%; height:100%; object-fit:cover;"></div><div class="ilan-detay"><h3 class="ilan-baslik">${a.marka} ${a.model}</h3><div style="color:#e67e22; font-weight:bold;">🛠️ Sanayide... (Kalan: ${a.tamirDurumu} Gün)</div></div></div>`; } 
            else {
                let ts = a.teklifler ? a.teklifler.length : 0; let mods = ''; a.modifiyeler.forEach(m => { mods+=`<span class="etiket" style="background:#102a43; margin-right:5px;">${m}</span>`; });
                l.innerHTML+=`<div class="ilan-karti"><div class="araba-foto"><img src="${a.gorsel}" style="width:100%; height:100%; object-fit:cover; border-radius:12px;"></div><div class="ilan-detay"><h3 class="ilan-baslik">${a.marka} ${a.model}</h3><div class="ilan-ozellikler"><span>🗓️ ${a.yil}</span><span>🛣️ ${a.km.toLocaleString()} KM</span></div><div style="margin-top:5px;">${a.hasarli?'<span class="etiket etiket-kirmizi">Ağır Hasarlı</span>':'<span class="etiket etiket-yesil">Sorunsuz</span>'}<br><div style="margin-top:5px;">${mods}</div></div><div style="margin-top:8px; font-size:13px; color:#627d98;">Maliyet: ${a.fiyat.toLocaleString()} ₺</div><div style="margin-top:5px; font-size:13px; font-weight:bold; color:#00b894;">🔥 ${ts} Teklif</div></div><div class="ilan-sag-taraf">${a.hasarli?`<button class="btn btn-turuncu" onclick="tamirEt(${a.id})">🛠️ Sanayiye Ver</button>`:''}<button class="btn btn-mor" onclick="modifiyeEkraniAc(${a.id})">✨ Modifiye</button><button class="btn btn-kirmizi" onclick="araciSat(${a.id})">🤝 Teklifleri Gör</button></div></div>`;
            }
        });
    }
}

function tamirEt(id) { const a = garaj.find(x=>x.id===id); if(paramiz>=a.tamirMasrafi){ oyunSesi('tamir'); paramiz-=a.tamirMasrafi; toplamGider+=a.tamirMasrafi; a.tamirDurumu=Math.floor(Math.random()*3)+2; a.teklifler=[]; ekraniGuncelle(); garajiEkranaGetir(); oyunuKaydet(); ozelUyari("Araç sanayiye verildi.", "basari"); } else ozelUyari("Para yok!", "hata"); }
function modifiyeEkraniAc(id) {
    const a = garaj.find(x=>x.id===id); const l = document.getElementById('modifiye-listesi'); l.innerHTML=''; let y=false;
    modifiyePaketleri.forEach(p => { if(!a.modifiyeler.includes(p.isim)){ y=true; l.innerHTML+=`<div style="display:flex; justify-content:space-between; background:#f0f4f8; padding:15px; border-radius:12px; margin-bottom:10px; align-items:center;"><div><span style="font-size:20px;">${p.ikon}</span> <strong>${p.isim}</strong><br><span style="color:#d63031;">${p.maliyet.toLocaleString()} ₺</span></div><button class="btn btn-mavi" style="width:auto;" onclick="modifiyeUygula(${a.id}, ${p.id})">Uygula</button></div>`; } });
    if(!y) l.innerHTML=`<p style="text-align:center; color:#e67e22; font-weight:bold;">Araç Gırtlak Dolu!</p>`; document.getElementById('modifiye-modal').style.display='block';
}
function modifiyeUygula(aid, pid) { const a=garaj.find(x=>x.id===aid); const p=modifiyePaketleri.find(x=>x.id===pid); if(paramiz>=p.maliyet){ oyunSesi('tamir'); paramiz-=p.maliyet; toplamGider+=p.maliyet; a.fiyat+=p.degerArtisi; a.modifiyeler.push(p.isim); ekraniGuncelle(); garajiEkranaGetir(); modaliKapat('modifiye-modal'); oyunuKaydet(); ozelUyari("Modifiye yapıldı!", "basari"); } else ozelUyari("Para yok!", "hata"); }

function araciSat(id) {
    const a=garaj.find(x=>x.id===id); const l=document.getElementById('teklif-listesi'); l.innerHTML=`<p style="color:#627d98;">Maliyet: <strong>${a.fiyat.toLocaleString()} TL</strong></p>`;
    if(!a.teklifler || a.teklifler.length===0) l.innerHTML+=`<p style="text-align:center; color:#e74c3c; font-weight:bold;">Teklif yok.</p>`;
    else {
        a.teklifler.sort((x,y)=>y.fiyat-x.fiyat).forEach(t => {
            let et = t.tip==="Tayfa"?`<span class="etiket" style="background:#243b53; color:#f1c40f;">Tayfa</span>`:t.tip==="Olucu"?`<span class="etiket etiket-kirmizi">Ölücü</span>`:t.tip==="Takas"?`<span class="etiket etiket-yesil">Takas</span>`:'';
            let gr = t.tip==="Takas"?`<span style="font-size:12px; color:#627d98;">${t.takasArac.marka} + </span><br>${t.fiyat.toLocaleString()} ₺`:`${t.fiyat.toLocaleString()} ₺`;
            l.innerHTML+=`<div id="${t.id}" style="background:#f0f4f8; padding:15px; border-radius:12px; margin-bottom:10px; display:flex; justify-content:space-between; align-items:center;"><div><div style="color:#0984e3; font-weight:bold;">👤 ${t.musteri} ${et}</div><div style="font-size:20px; font-weight:bold; color:#00b894; margin-top:5px;">${gr}</div></div><div style="display:flex; flex-direction:column; gap:5px;"><button class="btn btn-yesil" onclick="teklifiKabulEt(${a.id}, '${t.id}')">Kabul Et</button><button class="btn btn-turuncu" onclick="pazarlikYapp(${a.id}, '${t.id}')">Pazarlık</button></div></div>`;
        });
    } document.getElementById('teklif-modal').style.display="block";
}
function pazarlikYapp(aid, tid) {
    const a=garaj.find(x=>x.id===aid); const ix=a.teklifler.findIndex(x=>x.id===tid); const t=a.teklifler[ix]; const div=document.getElementById(tid);
    if(t.tip==="Olucu") { oyunSesi('hata'); a.teklifler.splice(ix,1); oyunuKaydet(); div.innerHTML=`<div style="color:#d63031; font-weight:bold; text-align:center; width:100%;">Küfredip gitti! 😡</div>`; return; }
    if(Math.random()>0.5) { t.fiyat=Math.floor(t.fiyat*(1+((Math.floor(Math.random()*8)+5)/100))); oyunSesi('kasa'); oyunuKaydet(); div.innerHTML=`<div style="color:#00b894; font-weight:bold;">İkna Oldu! ${t.fiyat.toLocaleString()} ₺</div><button class="btn btn-yesil" onclick="teklifiKabulEt(${a.id}, '${t.id}')">Kabul Et</button>`; } else { oyunSesi('hata'); a.teklifler.splice(ix,1); oyunuKaydet(); div.innerHTML=`<div style="color:#d63031; font-weight:bold; text-align:center; width:100%;">Sinirlendi ve gitti!</div>`; }
}
function teklifiKabulEt(aid, tid) {
    const a=garaj.find(x=>x.id===aid); const t=a.teklifler.find(x=>x.id===tid); let nk = t.fiyat - noterUcreti; modaliKapat('teklif-modal'); oyunSesi('kasa'); paramiz+=nk; toplamGelir+=nk; toplamGider+=noterUcreti; toplamSatilanArac++; garaj=garaj.filter(x=>x.id!==aid);
    if(t.tip==="Takas") { if(garaj.length>=aracKapasitesi) ozelUyari("Garaj dolu, takas arabası çalındı!", "hata"); else { garaj.push(t.takasArac); ozelUyari(`Takas başarılı! +${nk.toLocaleString()} ₺`, "basari"); } } else ozelUyari(`Araç Satıldı! +${nk.toLocaleString()} ₺`, "basari");
    ekraniGuncelle(); garajiEkranaGetir(); oyunuKaydet();
}

function dukkanEkraniniGuncelle() {
    const s = seviyeler[dukkanSeviyesi-1]; document.getElementById('dukkan-isim').innerText = `${s.isim} (Seviye ${s.seviye})`; document.getElementById('dukkan-kapasite').innerText = s.kapasite===999?"Sınırsız Araç":`${s.kapasite} Araç`;
    if(dukkanSeviyesi<seviyeler.length) { document.getElementById('yukseltme-alani').style.display='block'; document.getElementById('yeni-seviye-isim').innerText=`${seviyeler[dukkanSeviyesi].isim}`; document.getElementById('yeni-seviye-fiyat').innerText=`${seviyeler[dukkanSeviyesi].fiyat.toLocaleString()} ₺`; } else document.getElementById('yukseltme-alani').innerHTML=`<h3 style="color:#00b894;">🎉 Maksimum Seviye!</h3>`;
}
function dukkaniYukselt() { if(dukkanSeviyesi>=seviyeler.length) return; const s=seviyeler[dukkanSeviyesi]; if(paramiz>=s.fiyat){ paramiz-=s.fiyat; dukkanSeviyesi++; aracKapasitesi=s.kapasite; ekraniGuncelle(); dukkanEkraniniGuncelle(); oyunuKaydet(); oyunSesi('kasa'); ozelUyari("Dükkan büyütüldü!", "basari"); } else ozelUyari("Para yok!", "hata"); }
function istatistikleriGuncelle() { document.getElementById('ist-satilan').innerText=toplamSatilanArac; document.getElementById('ist-gelir').innerText=toplamGelir.toLocaleString(); document.getElementById('ist-gider').innerText=toplamGider.toLocaleString(); let nk=toplamGelir-toplamGider; document.getElementById('ist-net').innerText=nk.toLocaleString(); document.getElementById('ist-net').style.color=nk<0?'#d63031':'#00b894'; }

function sosyalEkraniGuncelle() {
    if (!sosyalMedya.aktif) { document.getElementById('sosyal-kurulum').style.display = 'block'; document.getElementById('sosyal-yonetim').style.display = 'none'; } 
    else {
        document.getElementById('sosyal-kurulum').style.display = 'none'; document.getElementById('sosyal-yonetim').style.display = 'block';
        document.getElementById('profil-ad').innerHTML = sosyalMedya.kullaniciAdi + (sosyalMedya.maviTik ? ' <span style="color:#00d2d3; background:white; border-radius:50%; font-size:16px; padding:2px;">☑️</span>' : '');
        document.getElementById('profil-platform').innerText = sosyalMedya.platform; document.getElementById('profil-takipci').innerText = Math.floor(sosyalMedya.takipci).toLocaleString('tr-TR');
        if (gun < sosyalMedya.lincBitisGunu) { document.getElementById('sosyal-linc-uyari').style.display = 'block'; document.getElementById('linc-kalan').innerText = (sosyalMedya.lincBitisGunu - gun); } else { document.getElementById('sosyal-linc-uyari').style.display = 'none'; }
        let sBtn = document.getElementById('sponsor-btn');
        if (sosyalMedya.takipci >= 100000 && !sosyalMedya.sponsorlukAktif) { sBtn.disabled = false; sBtn.innerText = "Anlaşma İmzala"; } else if (sosyalMedya.sponsorlukAktif) { sBtn.disabled = true; sBtn.innerText = "Sponsor Aktif"; document.getElementById('sponsorluk-alani').style.display = 'block'; } else { sBtn.disabled = true; sBtn.innerText = "100k Takipçi Lazım"; }
        const kutu = document.getElementById('dm-kutusu'); kutu.innerHTML = '';
        if (dmKutusu.length === 0) kutu.innerHTML = '<p style="text-align:center; color:#829ab1;">Mesaj kutun boş.</p>';
        else { dmKutusu.forEach((m, i) => { kutu.innerHTML += `<div class="ilan-karti" style="border-left: 5px solid #0984e3;"><div class="ilan-detay"><div style="font-weight: bold;">📩 ${m.gonderen}</div><div style="font-size: 13px; color: #627d98;">"${m.metin}"</div><div style="font-weight: bold; color: #00b894; margin-top: 8px;">Teklif: ${m.teklifFiyat.toLocaleString()} ₺</div></div><div class="ilan-sag-taraf"><button class="btn btn-yesil" style="margin-bottom:5px;" onclick="dmTeklifKabul(${i}, ${m.arabaId})">Sat</button><button class="btn btn-kirmizi" onclick="dmSil(${i})">Sil</button></div></div>`; }); }
    }
}

function sosyalHesapAc() { let ka = document.getElementById('sm-kullanici-adi').value; let plat = document.getElementById('sm-platform').value; if (ka.trim() === "") return ozelUyari("Kullanıcı adı girin.", "hata"); sosyalMedya.aktif = true; sosyalMedya.platform = plat; sosyalMedya.kullaniciAdi = ka.startsWith('@') ? ka : '@'+ka; sosyalMedya.takipci = 15; oyunSesi('kasa'); oyunuKaydet(); sosyalEkraniGuncelle(); ozelUyari(`Hesabın açıldı.`, "basari"); }
function dmSil(i) { dmKutusu.splice(i, 1); oyunSesi('hata'); sosyalEkraniGuncelle(); oyunuKaydet(); }
function dmTeklifKabul(i, aId) { const aIx = garaj.findIndex(x => x.id === aId); if (aIx === -1) { ozelUyari("Araç garajda yok!", "hata"); dmSil(i); return; } let nk = dmKutusu[i].teklifFiyat - noterUcreti; paramiz += nk; toplamGelir += nk; toplamGider += noterUcreti; toplamSatilanArac++; garaj.splice(aIx, 1); dmKutusu.splice(i, 1); oyunSesi('kasa'); ekraniGuncelle(); garajiEkranaGetir(); sosyalEkraniGuncelle(); oyunuKaydet(); ozelUyari(`DM satışı tamam! +${nk.toLocaleString()} TL`, "basari"); }
function maviTikAl() { if(sosyalMedya.maviTik) return ozelUyari("Zaten var!", "bilgi"); if(paramiz<25000) return ozelUyari("Para yetersiz.", "hata"); paramiz-=25000; toplamGider+=25000; sosyalMedya.maviTik=true; oyunSesi('kasa'); sosyalEkraniGuncelle(); ekraniGuncelle(); oyunuKaydet(); ozelUyari("Mavi Tik alındı!", "basari"); }
function ozurVideosuCek() { if (paramiz < 30000) return ozelUyari("PR ajansına verecek paran yok!", "hata"); paramiz -= 30000; toplamGider += 30000; sosyalMedya.lincBitisGunu = gun; let kayip = Math.floor(sosyalMedya.takipci * 0.1); sosyalMedya.takipci -= kayip; oyunSesi('kasa'); sosyalEkraniGuncelle(); ekraniGuncelle(); oyunuKaydet(); ozelUyari(`Linç bitti ama ${kayip} takipçi kaybettin.`, "basari"); }
function sponsorlukAnlasmasi() { sosyalMedya.sponsorlukAktif = true; oyunSesi('kasa'); sosyalEkraniGuncelle(); oyunuKaydet(); ozelUyari("Sponsorluk bağlandı!", "basari"); }

function icerikSecimEkraniAc() {
    if(garaj.length===0) return ozelUyari("Garaj boş!", "hata"); const l=document.getElementById('icerik-araba-listesi'); l.innerHTML='';
    garaj.forEach(a => { l.innerHTML+=`<div class="ilan-karti" style="cursor:pointer;" onclick="videoCek(${a.id})"><img src="${a.gorsel}" style="width:80px; height:60px; object-fit:cover; border-radius:8px; margin-right:15px;"><div><h3 style="margin:0; font-size:14px;">${a.marka} ${a.model}</h3></div></div>`; }); document.getElementById('icerik-secim-modal').style.display='block';
}

function videoCek(aId) {
    let tip = document.getElementById('icerik-konsept-secim').value; let m=0; let t=0;
    if(tip==="normal") m=1500; else if(tip==="teslimat") m=5000;
    if(paramiz<m) return ozelUyari("Para yetersiz!", "hata");
    paramiz-=m; toplamGider+=m; modaliKapat('icerik-secim-modal'); oyunSesi('kasa');
    if(tip==="normal") { t = Math.floor(Math.random()*300)+100; ozelUyari(`Video atıldı. +${t} takipçi!`, "basari"); }
    else if(tip==="teslimat") { t = Math.floor(Math.random()*500)+200; ozelUyari(`Teslimat çektin. +${t} takipçi!`, "basari"); }
    else if(tip==="ifsa") { if(Math.random()<0.20) { let ceza=Math.floor(paramiz*0.1); paramiz-=ceza; toplamGider+=ceza; sosyalMedya.lincBitisGunu=gun+3; oyunSesi('hata'); ozelUyari(`🚨 YANLIŞ İFŞA! Galericiler dükkanı bastı!`, "hata"); return; } t = Math.floor(Math.random()*5000)+2000; ozelUyari(`🔥 İfşa viral oldu! +${t} takipçi!`, "basari"); }
    sosyalMedya.takipci += t; sosyalEkraniGuncelle(); ekraniGuncelle(); oyunuKaydet();
}

let yayinInterval; let yayinArabaId; let anlikFiyat = 0; let yayinIzleyici = 0; let yayinTuru = 0;
function canliYayinSecimAc() {
    if(garaj.length===0) return ozelUyari("Garaj boş!", "hata");
    const l=document.getElementById('canli-araba-listesi'); l.innerHTML='';
    garaj.forEach(a => { l.innerHTML+=`<div class="ilan-karti" style="cursor:pointer;" onclick="canliYayinaBasla(${a.id})"><img src="${a.gorsel}" style="width:80px; height:60px; border-radius:8px; margin-right:15px;"><div><h3 style="margin:0; font-size:14px;">${a.marka} ${a.model}</h3></div></div>`; }); document.getElementById('canli-yayin-secim-modal').style.display='block';
}

function canliYayinaBasla(aId) {
    modaliKapat('canli-yayin-secim-modal'); const a = garaj.find(x=>x.id===aId); yayinArabaId = a.id;
    yayinTuru = 0; anlikFiyat = Math.floor(a.fiyat * 0.75); yayinIzleyici = Math.floor(sosyalMedya.takipci * 0.05) + Math.floor(Math.random()*500);
    document.getElementById('yayin-foto').src = a.gorsel; document.getElementById('yayin-araba-isim').innerText = `${a.marka} ${a.model}`; document.getElementById('yayin-guncel-teklif').innerText = `${anlikFiyat.toLocaleString()} ₺`; document.getElementById('yayin-kisi-sayisi').innerText = yayinIzleyici.toLocaleString(); document.getElementById('yayin-yorum-alani').innerHTML = ''; document.getElementById('canli-yayin-modal').style.display = 'block';
    
    yayinInterval = setInterval(() => {
        yayinTuru++;
        if (yayinTuru > 15) { yayinIzleyici = Math.floor(yayinIzleyici * 0.8); if (Math.random() > 0.5) anlikFiyat = Math.floor(anlikFiyat * 0.98); } 
        else {
            yayinIzleyici += Math.floor(Math.random() * 50);
            if (Math.random() > 0.3) {
                anlikFiyat += Math.floor(anlikFiyat * (Math.random() * 0.04 + 0.01)); oyunSesi('kasa');
                let yorumC = document.getElementById('yayin-yorum-alani');
                let kisi = "@"+musteriIsimleri[Math.floor(Math.random()*musteriIsimleri.length)].toLowerCase();
                yorumC.innerHTML = `<div class="yayin-yorum" style="color:#fff;"><strong style="color:#00d2d3;">${kisi}</strong>: ${anlikFiyat.toLocaleString()} ₺ !</div>` + yorumC.innerHTML;
                let kalp = document.createElement('div'); kalp.className = 'kalp-animasyon'; kalp.innerText = ['❤️','🔥','💸'][Math.floor(Math.random()*3)];
                document.querySelector('.canli-yayin-ekrani').appendChild(kalp); setTimeout(()=>kalp.remove(), 2000);
            }
        }
        document.getElementById('yayin-guncel-teklif').innerText = `${anlikFiyat.toLocaleString()} ₺`; document.getElementById('yayin-kisi-sayisi').innerText = yayinIzleyici.toLocaleString();
        if(yayinIzleyici < 10) yayiniKapat("Seyirci kalmadı, yayın bitti.");
    }, 1500);
}

function yayindaSat() {
    clearInterval(yayinInterval); const aIx = garaj.findIndex(x=>x.id===yayinArabaId); let nk = anlikFiyat - noterUcreti; paramiz += nk; toplamGelir += nk; toplamGider += noterUcreti; toplamSatilanArac++; garaj.splice(aIx, 1); oyunSesi('kasa'); ekraniGuncelle(); garajiEkranaGetir(); oyunuKaydet(); modaliKapat('canli-yayin-modal'); ozelUyari(`Canlı yayında araç SATILDI! +${nk.toLocaleString()} TL`, "basari");
}
function yayiniKapat(msj = null) { clearInterval(yayinInterval); modaliKapat('canli-yayin-modal'); if(msj) ozelUyari(msj, "bilgi"); }

function oyunuBaslat() { 
    if (!oyunuYukle()) { 
        document.getElementById('baslangic-modal').style.display = 'block'; 
        piyasayiYenile();
    } else { 
        document.getElementById('header-logo').innerHTML = `${galeriAdi}<span>Motors</span>`; 
        ekraniGuncelle(); 
        menuDegistir('pazar'); 
    } 
}
function galeriAdiniKaydet() { let girilenAd = document.getElementById('galeri-adi-input').value; if (girilenAd.trim() === "") { ozelUyari("İsim girin!", "hata"); return; } galeriAdi = girilenAd; document.getElementById('baslangic-modal').style.display = 'none'; document.getElementById('header-logo').innerHTML = `${galeriAdi}<span>Motors</span>`; oyunuKaydet(); ekraniGuncelle(); menuDegistir('pazar'); }

oyunuBaslat();