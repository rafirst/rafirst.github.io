const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        }
    });
});

// Reveal animations on scroll
const revealElements = document.querySelectorAll('.project-card, .timeline-item');

function checkReveal() {
    const triggerBottom = window.innerHeight * 0.8;
    
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < triggerBottom) {
            element.classList.add('opacity-100');
            element.classList.remove('opacity-0', 'translate-y-10');
        }
    });
}

// Initialize elements
revealElements.forEach(element => {
    element.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-10');
});

// Check on load and scroll
window.addEventListener('load', checkReveal);
window.addEventListener('scroll', checkReveal);

document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            // Hapus kelas 'active' dari semua tombol
            filterButtons.forEach((btn) => btn.classList.remove("active"));
            // Tambahkan kelas 'active' ke tombol yang diklik
            button.classList.add("active");

            const category = button.textContent.trim();

            projectCards.forEach((card) => {
                // Tampilkan semua proyek jika kategori adalah 'All'
                if (category === "All" || card.dataset.category === category) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });
});

document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); // Mencegah reload halaman

    // Ambil data dari form
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Kirim data ke EmailJS
    emailjs
        .send("service_l7ok8zh", "template_flbpa3r", {
            from_name: name,
            from_email: email,
            subject: subject,
            message: message,
        }, "i5fE1QEsFXa1ymcAa")
        .then(
            function (response) {
                alert("Pesan berhasil dikirim! Terima kasih telah menghubungi saya.");
                document.querySelector("form").reset(); // Reset form setelah berhasil
            },
            function (error) {
                alert("Terjadi kesalahan. Silakan coba lagi.");
                console.error("Error:", error);
            }
        );
});