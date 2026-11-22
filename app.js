// Selçuklu Sultanları - app.js
// İnternet Programcılığı I projesi

// ================== VERİLER ==================
// sultan bilgilerini nesne dizisi olarak tuttum
const sultanlar = [
  {
    ad: "Tuğrul Bey",
    devlet: "buyuk",
    baslangic: 1040,
    bitis: 1063,
    baskent: "Nişabur, sonra Rey",
    ozet: "Büyük Selçuklu Devleti'nin kurucusu.",
    olaylar: [
      "1040 Dandanakan Savaşı'nda Gaznelileri yendi; devlet resmen kuruldu.",
      "1048 Pasinler Savaşı'nda Bizans'a karşı ilk büyük zafer kazanıldı.",
      "1055'te Bağdat'a girerek Abbasi halifesini Büveyhoğulları baskısından kurtardı.",
      "Halife tarafından 'Doğu'nun ve Batı'nın Sultanı' unvanıyla anıldı."
    ]
  },
  {
    ad: "Alp Arslan",
    devlet: "buyuk",
    baslangic: 1063,
    bitis: 1072,
    baskent: "Rey",
    ozet: "Malazgirt zaferiyle Anadolu'nun kapılarını Türklere açtı.",
    olaylar: [
      "1064'te Kafkasya'da Ani şehrini fethetti.",
      "26 Ağustos 1071'de Malazgirt'te Bizans İmparatoru Romen Diyojen'i yendi ve esir aldı.",
      "Malazgirt'ten sonra Türkmen beyleri Anadolu'nun içlerine yayıldı.",
      "1072'de Maveraünnehir seferinde aldığı yarayla hayatını kaybetti."
    ]
  },
  {
    ad: "Melikşah",
    devlet: "buyuk",
    baslangic: 1072,
    bitis: 1092,
    baskent: "İsfahan",
    ozet: "Devlet onun döneminde en geniş sınırlarına ulaştı.",
    olaylar: [
      "Vezir Nizamülmülk ile birlikte güçlü bir devlet teşkilatı kurdu.",
      "Nizamiye medreseleri yaygınlaştı; bilim ve eğitim desteklendi.",
      "Ömer Hayyam'ın da katkı verdiği Celali takvimi hazırlandı.",
      "1092'de Nizamülmülk'ün öldürülmesinden kısa süre sonra öldü; taht kavgaları başladı."
    ]
  },
  {
    ad: "Berkyaruk",
    devlet: "buyuk",
    baslangic: 1094,
    bitis: 1105,
    baskent: "Rey / İsfahan",
    ozet: "Saltanatı kardeşleriyle taht mücadelesiyle geçti.",
    olaylar: [
      "Melikşah'tan sonra kısa süre tahtta kalan kardeşi Mahmud'un ardından sultan oldu.",
      "Kardeşi Muhammed Tapar ile uzun yıllar savaştı.",
      "İç karışıklıklar nedeniyle I. Haçlı Seferi'ne (1096-1099) karşı etkili olunamadı.",
      "Batınilerin (Haşhaşiler) güçlenmesi bu döneme denk gelir."
    ]
  },
  {
    ad: "Muhammed Tapar",
    devlet: "buyuk",
    baslangic: 1105,
    bitis: 1118,
    baskent: "İsfahan",
    ozet: "Devlette birliği yeniden sağlamaya çalıştı.",
    olaylar: [
      "Berkyaruk'un ölümünden sonra tek başına sultan oldu.",
      "Batınilere karşı kararlı seferler düzenledi; Alamut çevresini kuşattı.",
      "Haçlılara karşı Suriye bölgesine ordular gönderdi."
    ]
  },
  {
    ad: "Sultan Sencer",
    devlet: "buyuk",
    baslangic: 1118,
    bitis: 1157,
    baskent: "Merv",
    ozet: "Büyük Selçuklu'nun son büyük sultanı.",
    olaylar: [
      "Sultan olmadan önce yıllarca Horasan meliki olarak görev yaptı.",
      "1141 Katvan Savaşı'nda Karahıtaylara yenildi.",
      "1153'te Oğuzlara esir düştü; 1156'da kurtuldu.",
      "1157'de Merv'de ölümüyle Büyük Selçuklu Devleti dağıldı."
    ]
  },
  {
    ad: "Kutalmışoğlu Süleyman Şah",
    devlet: "turkiye",
    baslangic: 1075,
    bitis: 1086,
    baskent: "İznik",
    ozet: "Türkiye Selçuklu Devleti'nin kurucusu.",
    olaylar: [
      "Malazgirt'ten sonra Anadolu'da ilerleyerek İznik'i başkent yaptı.",
      "Batıda Marmara kıyılarına kadar ulaştı.",
      "1084'te Antakya'yı aldı.",
      "1086'da Suriye Selçuklu meliki Tutuş ile yaptığı savaşta öldü."
    ]
  },
  {
    ad: "I. Kılıç Arslan",
    devlet: "turkiye",
    baslangic: 1092,
    bitis: 1107,
    baskent: "İznik, sonra Konya",
    ozet: "I. Haçlı Seferi'ne karşı Anadolu'yu savundu.",
    olaylar: [
      "1096'da Haçlıların öncü 'Halk Haçlıları' ordusunu yendi.",
      "1097'de İznik kaybedilince başkent Konya'ya taşındı.",
      "1101'de Anadolu'ya giren yeni Haçlı ordularını büyük yenilgiye uğrattı.",
      "1107'de Habur Irmağı kıyısındaki savaşta boğularak öldü."
    ]
  },
  {
    ad: "I. Mesud",
    devlet: "turkiye",
    baslangic: 1116,
    bitis: 1155,
    baskent: "Konya",
    ozet: "Konya merkezli devleti sağlamlaştırdı.",
    olaylar: [
      "Uzun saltanatı boyunca Danişmendlilerle bazen ittifak, bazen rekabet içinde oldu.",
      "1147'de II. Haçlı Seferi'ne katılan Alman ordusunu Eskişehir yakınlarında bozguna uğrattı.",
      "Konya'yı devletin kalıcı başkenti hâline getirdi."
    ]
  },
  {
    ad: "II. Kılıç Arslan",
    devlet: "turkiye",
    baslangic: 1155,
    bitis: 1192,
    baskent: "Konya",
    ozet: "Miryokefalon zaferiyle Anadolu'nun Türk yurdu olduğunu kesinleştirdi.",
    olaylar: [
      "17 Eylül 1176'da Miryokefalon'da Bizans İmparatoru Manuel Komnenos'u yendi.",
      "1178'de Danişmendli Beyliği'ne son verdi.",
      "Ülkeyi oğulları arasında paylaştırması iç karışıklığa yol açtı.",
      "1190'da III. Haçlı Seferi sırasında Alman ordusu Konya'ya kadar geldi."
    ]
  },
  {
    ad: "I. Gıyaseddin Keyhüsrev",
    devlet: "turkiye",
    baslangic: 1192,
    bitis: 1211,
    baskent: "Konya",
    ozet: "Antalya'yı alarak devleti Akdeniz'e ulaştırdı. (İki kez tahta çıktı: 1192-1196 ve 1205-1211.)",
    olaylar: [
      "Kardeşi II. Süleyman Şah tarafından tahttan indirildi, 1205'te yeniden sultan oldu.",
      "1207'de Antalya'yı fethederek Akdeniz ticaretine açıldı.",
      "1211'de İznik İmparatorluğu'na karşı yapılan Alaşehir Savaşı'nda öldü."
    ]
  },
  {
    ad: "I. İzzeddin Keykavus",
    devlet: "turkiye",
    baslangic: 1211,
    bitis: 1220,
    baskent: "Konya",
    ozet: "Sinop'u alarak devleti Karadeniz'e ulaştırdı.",
    olaylar: [
      "1214'te Sinop'u fethetti; Karadeniz ticareti güvenceye alındı.",
      "1217'de Sivas Darüşşifası'nı (hastane) yaptırdı.",
      "Kendisi de bu darüşşifadaki türbesinde yatmaktadır."
    ]
  },
  {
    ad: "I. Alaeddin Keykubad",
    devlet: "turkiye",
    baslangic: 1220,
    bitis: 1237,
    baskent: "Konya",
    ozet: "Türkiye Selçuklu Devleti'nin en parlak dönemini yaşattı.",
    olaylar: [
      "1221'de Kalonoros'u alarak adını Alaiye (Alanya) koydu.",
      "Kırım'daki Sudak'a deniz aşırı bir sefer düzenledi.",
      "1230 Yassıçemen Savaşı'nda Harezmşah Celaleddin'i yendi.",
      "Kubadabad Sarayı ve Sultan Hanı gibi kervansaraylar bu dönemde yapıldı."
    ]
  },
  {
    ad: "II. Gıyaseddin Keyhüsrev",
    devlet: "turkiye",
    baslangic: 1237,
    bitis: 1246,
    baskent: "Konya",
    ozet: "Kösedağ yenilgisiyle devlet Moğol hâkimiyetine girdi.",
    olaylar: [
      "1240'ta Babai İsyanı çıktı ve devleti zayıflattı.",
      "1243 Kösedağ Savaşı'nda Baycu Noyan komutasındaki Moğollara yenildi.",
      "Kösedağ'dan sonra devlet Moğollara vergi veren bir yapıya dönüştü.",
      "Sonraki sultanlar dönemindeki parçalanma 1308'de devletin sona ermesiyle bitti."
    ]
  }
];

// tablo için savaşlar ve olaylar
const olaylar = [
  { yil: 1040, olay: "Dandanakan Savaşı", sultan: "Tuğrul Bey", karsi: "Gazneliler", sonuc: "zafer" },
  { yil: 1048, olay: "Pasinler Savaşı", sultan: "Tuğrul Bey", karsi: "Bizans", sonuc: "zafer" },
  { yil: 1055, olay: "Bağdat'a giriş", sultan: "Tuğrul Bey", karsi: "Büveyhoğulları", sonuc: "olay" },
  { yil: 1071, olay: "Malazgirt Meydan Savaşı", sultan: "Alp Arslan", karsi: "Bizans", sonuc: "zafer" },
  { yil: 1141, olay: "Katvan Savaşı", sultan: "Sultan Sencer", karsi: "Karahıtaylar", sonuc: "yenilgi" },
  { yil: 1176, olay: "Miryokefalon Savaşı", sultan: "II. Kılıç Arslan", karsi: "Bizans", sonuc: "zafer" },
  { yil: 1207, olay: "Antalya'nın fethi", sultan: "I. Gıyaseddin Keyhüsrev", karsi: "-", sonuc: "olay" },
  { yil: 1214, olay: "Sinop'un fethi", sultan: "I. İzzeddin Keykavus", karsi: "Trabzon Rum Devleti", sonuc: "olay" },
  { yil: 1230, olay: "Yassıçemen Savaşı", sultan: "I. Alaeddin Keykubad", karsi: "Harezmşahlar", sonuc: "zafer" },
  { yil: 1243, olay: "Kösedağ Savaşı", sultan: "II. Gıyaseddin Keyhüsrev", karsi: "Moğollar", sonuc: "yenilgi" }
];

// quiz soruları
const sorular = [
  {
    soru: "Malazgirt Meydan Savaşı'nı (1071) hangi sultan kazandı?",
    secenekler: ["Tuğrul Bey", "Alp Arslan", "Melikşah", "Sultan Sencer"],
    dogru: "Alp Arslan"
  },
  {
    soru: "1055'te Bağdat'a girerek Abbasi halifesini koruması altına alan sultan kimdir?",
    secenekler: ["Tuğrul Bey", "Berkyaruk", "Alp Arslan", "Muhammed Tapar"],
    dogru: "Tuğrul Bey"
  },
  {
    soru: "Miryokefalon Savaşı'nda (1176) Bizans'ı yenen sultan kimdir?",
    secenekler: ["I. Kılıç Arslan", "I. Mesud", "II. Kılıç Arslan", "I. Alaeddin Keykubad"],
    dogru: "II. Kılıç Arslan"
  },
  {
    soru: "Alanya'yı (Alaiye) fethederek ona kendi adını veren sultan kimdir?",
    secenekler: ["I. İzzeddin Keykavus", "I. Alaeddin Keykubad", "I. Gıyaseddin Keyhüsrev", "Süleyman Şah"],
    dogru: "I. Alaeddin Keykubad"
  },
  {
    soru: "1243 Kösedağ Savaşı kime karşı yapıldı?",
    secenekler: ["Haçlılar", "Bizans", "Moğollar", "Harezmşahlar"],
    dogru: "Moğollar"
  }
];


// ================== FONKSİYONLAR ==================

// saltanat süresini hesaplayan fonksiyon
function sureHesapla(baslangic, bitis) {
  return bitis - baslangic;
}

// devlet kodunu yazıya çeviriyor
function devletAdi(kod) {
  switch (kod) {
    case "buyuk":
      return "Büyük Selçuklu";
    case "turkiye":
      return "Türkiye Selçuklu";
    default:
      return "";
  }
}

// ================== SAYILAR ==================
document.getElementById("sultanSayisi").textContent = sultanlar.length;
document.getElementById("savasSayisi").textContent = olaylar.length;

// ================== SULTAN KARTLARI ==================
const sultanListesi = document.getElementById("sultanListesi");
const devletSecim = document.getElementById("devletSecim");
const arama = document.getElementById("arama");
const bilgi = document.getElementById("bilgi");

function sultanlariGoster() {
  const secilen = devletSecim.value;
  const aranan = arama.value.toLowerCase();
  let sayac = 0;

  sultanListesi.innerHTML = ""; // önce listeyi temizle

  for (let i = 0; i < sultanlar.length; i++) {
    const s = sultanlar[i];

    // devlet filtresi
    if (secilen !== "hepsi" && s.devlet !== secilen) {
      continue;
    }

    // arama filtresi
    if (aranan !== "" && !s.ad.toLowerCase().includes(aranan)) {
      continue;
    }

    // olayları liste haline getir
    let olayListesi = "";
    for (let j = 0; j < s.olaylar.length; j++) {
      olayListesi += `<li>${s.olaylar[j]}</li>`;
    }

    sultanListesi.innerHTML += `
      <div class="col-md-6 col-lg-4">
        <div class="card kart h-100">
          <div class="kart-ust ${s.devlet}">
            <h3>${s.ad}</h3>
            <small>${s.baslangic} - ${s.bitis}</small>
          </div>
          <div class="card-body">
            <span class="badge bg-secondary mb-2">${devletAdi(s.devlet)}</span>
            <p>${s.ozet}</p>
            <p class="small text-muted">
              Saltanat süresi: ${sureHesapla(s.baslangic, s.bitis)} yıl <br>
              Başkent: ${s.baskent}
            </p>
            <button class="btn btn-outline-dark btn-sm detay-buton" type="button" onclick="detayAcKapa(${i})">Detayları Göster</button>
            <ul class="detay mt-3" id="detay${i}">
              ${olayListesi}
            </ul>
          </div>
        </div>
      </div>`;
    sayac++;
  }

  if (sayac === 0) {
    bilgi.textContent = "Aradığınız sultan bulunamadı.";
  } else {
    bilgi.textContent = sayac + " sultan gösteriliyor.";
  }
}

// detay butonuna basınca listeyi aç/kapat
function detayAcKapa(no) {
  const detay = document.getElementById("detay" + no);
  detay.classList.toggle("acik");

  const buton = detay.previousElementSibling;
  if (detay.classList.contains("acik")) {
    buton.textContent = "Detayları Gizle";
  } else {
    buton.textContent = "Detayları Göster";
  }
}

devletSecim.addEventListener("change", sultanlariGoster);
arama.addEventListener("input", sultanlariGoster);

// ================== TABLO ==================
const tabloGovde = document.getElementById("tabloGovde");

for (let i = 0; i < olaylar.length; i++) {
  const o = olaylar[i];
  let sonucYazi = "";
  let sinif = "";

  if (o.sonuc === "zafer") {
    sonucYazi = "Zafer";
    sinif = "zafer";
  } else if (o.sonuc === "yenilgi") {
    sonucYazi = "Yenilgi";
    sinif = "yenilgi";
  } else {
    sonucYazi = "Önemli olay";
  }

  tabloGovde.innerHTML += `
    <tr>
      <td><b>${o.yil}</b></td>
      <td>${o.olay}</td>
      <td>${o.sultan}</td>
      <td>${o.karsi}</td>
      <td class="${sinif}">${sonucYazi}</td>
    </tr>`;
}

// tabloyu gizle / göster
const tabloButon = document.getElementById("tabloButon");
tabloButon.addEventListener("click", function () {
  const alan = document.getElementById("tabloAlani");
  alan.classList.toggle("gizle");

  if (alan.classList.contains("gizle")) {
    tabloButon.textContent = "Tabloyu Göster";
  } else {
    tabloButon.textContent = "Tabloyu Gizle";
  }
});

// ================== QUIZ ==================
const sorularAlani = document.getElementById("sorular");

for (let i = 0; i < sorular.length; i++) {
  let secenekler = "";
  for (let j = 0; j < sorular[i].secenekler.length; j++) {
    const secenek = sorular[i].secenekler[j];
    secenekler += `
      <div class="form-check">
        <input class="form-check-input" type="radio" name="soru${i}" id="s${i}_${j}" value="${secenek}">
        <label class="form-check-label" for="s${i}_${j}">${secenek}</label>
      </div>`;
  }

  sorularAlani.innerHTML += `
    <div class="soru" id="soru${i}">
      <p class="fw-bold">${i + 1}. ${sorular[i].soru}</p>
      ${secenekler}
    </div>`;
}

const quizForm = document.getElementById("quizForm");
const quizSonuc = document.getElementById("quizSonuc");

quizForm.addEventListener("submit", function (olay) {
  olay.preventDefault();
  let dogru = 0;

  for (let i = 0; i < sorular.length; i++) {
    const kutu = document.getElementById("soru" + i);
    const secim = document.querySelector(`input[name="soru${i}"]:checked`);

    kutu.classList.remove("dogru");
    kutu.classList.remove("yanlis");

    if (secim && secim.value === sorular[i].dogru) {
      dogru++;
      kutu.classList.add("dogru");
    } else {
      kutu.classList.add("yanlis");
    }
  }

  let mesaj = "";
  switch (dogru) {
    case 5:
      mesaj = "Harika! Hepsini bildiniz.";
      break;
    case 4:
      mesaj = "Çok iyi!";
      break;
    case 3:
      mesaj = "Fena değil.";
      break;
    default:
      mesaj = "Sultanlar bölümünü tekrar okuyabilirsiniz.";
  }

  quizSonuc.innerHTML = `<div class="alert alert-warning"><b>${sorular.length} sorudan ${dogru} doğru.</b> ${mesaj}</div>`;
});

// sıfırla butonu (onay soruyor)
quizForm.addEventListener("reset", function (olay) {
  if (!confirm("Cevaplar silinsin mi?")) {
    olay.preventDefault();
    return;
  }
  quizSonuc.innerHTML = "";
  for (let i = 0; i < sorular.length; i++) {
    document.getElementById("soru" + i).classList.remove("dogru", "yanlis");
  }
});

// ================== İLETİŞİM FORMU ==================
const mesajAlani = document.getElementById("mesaj");
const formMesaj = document.getElementById("formMesaj");

// yazdıkça karakter sayısı
mesajAlani.addEventListener("input", function () {
  document.getElementById("sayac").textContent = mesajAlani.value.length;
});

document.getElementById("iletisimForm").addEventListener("submit", function (olay) {
  olay.preventDefault();

  const ad = document.getElementById("ad").value.trim();
  const email = document.getElementById("email").value.trim();
  const mesaj = mesajAlani.value.trim();

  if (ad === "" || email === "" || mesaj === "") {
    formMesaj.textContent = "Lütfen bütün alanları doldurun.";
    formMesaj.className = "mt-3 text-danger";
  } else if (!email.includes("@") || !email.includes(".")) {
    formMesaj.textContent = "E-posta adresi geçerli değil.";
    formMesaj.className = "mt-3 text-danger";
  } else if (mesaj.length < 10) {
    formMesaj.textContent = "Mesaj en az 10 karakter olmalı.";
    formMesaj.className = "mt-3 text-danger";
  } else {
    // kullanıcının yazdığını innerHTML yerine textContent ile yazıyoruz
    formMesaj.textContent = "Teşekkürler " + ad + ", formunuz başarıyla dolduruldu!";
    formMesaj.className = "mt-3 text-success";
    this.reset();
    document.getElementById("sayac").textContent = "0";
  }
});

// sayfa açılınca sultanları göster
sultanlariGoster();
