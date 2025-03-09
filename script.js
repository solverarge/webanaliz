// Formu ve diğer elemanları seçiyoruz
const loginForm = document.getElementById('loginForm');
const downloadSection = document.getElementById('downloadSection');
const downloadBtn = document.getElementById('downloadBtn');

// Doğru giriş bilgilerini belirliyoruz
const correctEmail = "sonuc@solver.com.tr";
const correctPassword = "12345";

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

// İndirme butonuna tıklandığında klasörü aç
downloadBtn.addEventListener('click', function() {
    window.open("https://drive.google.com/drive/folders/1FLZdrt4dHFlCv65K4D17vVQyMvPnsAc3", "_blank");
});
