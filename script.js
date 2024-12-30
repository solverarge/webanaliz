// Formu ve diğer elemanları seçiyoruz
const loginForm = document.getElementById('loginForm');
const downloadSection = document.getElementById('downloadSection');
const downloadBtn = document.getElementById('downloadBtn');

// Doğru giriş bilgilerini belirliyoruz
const correctEmail = "user@solver.com.tr";
const correctPassword = "user12345";

// Form gönderildiğinde giriş bilgilerini kontrol et
loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Sayfanın yeniden yüklenmesini engeller

    // Kullanıcıdan alınan bilgileri al
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Giriş bilgileri doğruysa
    if (email === correctEmail && password === correctPassword) {
        alert("Giriş başarılı!");
        loginForm.style.display = "none"; // Formu gizle
        downloadSection.style.display = "block"; // İndirme butonunu göster
    } else {
        alert("E-posta veya şifre hatalı. Lütfen tekrar deneyin.");
    }
});

// İndirme butonuna tıklandığında dosya indir
downloadBtn.addEventListener('click', function() {
    const downloadLink = document.createElement('a');
    downloadLink.href = "https://drive.google.com/uc?export=download&id=1tryCe1UCrjmLPK-yhKoT8oSDIa24li5q"; // Google Drive indirme linki
    downloadLink.target = "_blank"; // Yeni sekmede aç
    downloadLink.download = "analiz_sonuclari.pdf"; // İndirilen dosya adı
    downloadLink.click();
});
