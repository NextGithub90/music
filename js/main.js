// Main JavaScript for JQ COMPOSEY Website

document.addEventListener("DOMContentLoaded", function () {
  // Panggil semua fungsi inisialisasi
  initNavbar();
  initAnimations();
  initScrollEffects();
  initContactForm();
  initParallax(); // <-- Bug fix: Fungsi ini sekarang dipanggil
  initCounters(); // <-- Bug fix: Fungsi ini sekarang dipanggil
  initTestimonialSlider(); // <-- Bug fix: Fungsi ini sekarang dipanggil
  initArtistCarousel();
  initHeroCarousel();
});

/**
 * Mengelola semua fungsionalitas navbar, termasuk scroll effect dan dropdown.
 */
function initNavbar() {
  const navbar = document.querySelector(".navbar");
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  const currentLocation = window.location.pathname;

  // Efek scroll untuk mengubah tampilan navbar
  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navbar.classList.add("navbar-scrolled", "shadow-sm");
      } else {
        navbar.classList.remove("navbar-scrolled", "shadow-sm");
      }
    });
  }

  // Memberi class 'active' pada link navigasi yang sesuai dengan halaman saat ini
  navLinks.forEach((link) => {
    // Membersihkan path untuk perbandingan yang lebih akurat
    const linkPath = new URL(link.href).pathname;
    if (linkPath === currentLocation || (currentLocation === "/" && link.getAttribute("href") === "index.html")) {
      link.classList.add("active");
    }
  });

  // Logika dropdown yang disederhanakan (mengandalkan Bootstrap atau CSS)
  document.querySelectorAll(".navbar .dropdown").forEach((dropdown) => {
    dropdown.addEventListener("click", function (e) {
      // Hanya toggle dropdown jika yang diklik adalah .dropdown-toggle
      if (e.target.matches(".dropdown-toggle")) {
        e.preventDefault();
        const isOpen = this.classList.contains("show");
        // Tutup semua dropdown lain
        document.querySelectorAll(".navbar .dropdown.show").forEach((openDropdown) => {
          if (openDropdown !== this) {
            openDropdown.classList.remove("show");
          }
        });
        // Toggle dropdown yang diklik
        this.classList.toggle("show");
      }
    });
  });

  // Menutup dropdown jika klik di luar area navbar
  window.addEventListener("click", function (e) {
    if (!e.target.closest(".navbar")) {
      document.querySelectorAll(".navbar .dropdown.show").forEach((openDropdown) => {
        openDropdown.classList.remove("show");
      });
    }
  });
}
/**
 * Mengatur ulang carousel artis agar responsif.
 * - Desktop: Beberapa artis per slide.
 * - Mobile: Satu artis per slide.
 */
function initArtistCarousel() {
  const carousel = document.querySelector("#artistsCarousel");
  if (!carousel) return; // Keluar jika carousel tidak ditemukan

  const carouselInner = carousel.querySelector(".carousel-inner");
  const carouselIndicators = carousel.querySelector(".carousel-indicators");

  // Simpan konten HTML asli untuk tampilan desktop
  const originalDesktopContent = {
    inner: carouselInner.innerHTML,
    indicators: carouselIndicators.innerHTML,
  };

  // Simpan semua kartu artis dari struktur asli
  const allArtistCards = [];
  carousel.querySelectorAll(".artist-card").forEach((card) => {
    // Simpan elemen kolomnya (col-lg-4 col-md-6) untuk menjaga struktur
    allArtistCards.push(card.parentElement);
  });

  let isMobileView = window.innerWidth < 768;

  function setupMobileView() {
    // Kosongkan isi carousel yang ada
    carouselInner.innerHTML = "";
    carouselIndicators.innerHTML = "";

    allArtistCards.forEach((artistCol, index) => {
      // 1. Buat <div class="carousel-item"> baru
      const carouselItem = document.createElement("div");
      carouselItem.className = "carousel-item";
      if (index === 0) {
        carouselItem.classList.add("active");
      }

      // 2. Buat wrapper untuk menjaga layout
      const wrapper = document.createElement("div");
      wrapper.className = "row justify-content-center px-3";

      // 3. Masukkan kolom artis ke dalam wrapper dan carousel-item
      wrapper.appendChild(artistCol);
      carouselItem.appendChild(wrapper);
      carouselInner.appendChild(carouselItem);

      // 4. Buat indikator (titik di bawah) untuk setiap slide
      const indicator = document.createElement("button");
      indicator.type = "button";
      indicator.setAttribute("data-bs-target", "#artistsCarousel");
      indicator.setAttribute("data-bs-slide-to", index);
      indicator.setAttribute("aria-label", `Slide ${index + 1}`);
      if (index === 0) {
        indicator.className = "active";
        indicator.setAttribute("aria-current", "true");
      }
      carouselIndicators.appendChild(indicator);
    });
  }

  function setupDesktopView() {
    // Kembalikan konten carousel dan indikator ke versi desktop asli
    carouselInner.innerHTML = originalDesktopContent.inner;
    carouselIndicators.innerHTML = originalDesktopContent.indicators;
  }

  // Fungsi utama untuk memeriksa dan mengubah tampilan
  function updateCarouselView() {
    const currentlyMobile = window.innerWidth < 768;
    if (currentlyMobile && !isMobileView) {
      // Dari desktop ke mobile
      isMobileView = true;
      setupMobileView();
    } else if (!currentlyMobile && isMobileView) {
      // Dari mobile ke desktop
      isMobileView = false;
      setupDesktopView();
    }
  }

  // Inisialisasi tampilan saat halaman pertama kali dimuat
  if (isMobileView) {
    setupMobileView();
  }

  // Dengarkan perubahan ukuran jendela
  window.addEventListener("resize", updateCarouselView);
}
/**
 * Menginisialisasi efek hover pada elemen (lebih baik dilakukan dengan CSS).
 * Fungsi ini dipertahankan jika ada logika animasi kompleks di masa depan.
 */
function initAnimations() {
  // Catatan: Efek hover pada service-card lebih efisien jika ditangani dengan CSS.
  // Tambahkan ini di file CSS Anda:
  /*
    .service-card {
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .service-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 1rem 3rem rgba(0,0,0,.175)!important; // shadow-lg
    }
  */
}

/**
 * Mengelola efek yang terkait dengan scroll, seperti smooth scroll dan memunculkan elemen.
 */
function initScrollEffects() {
  // Smooth scroll untuk anchor links
  document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Offset untuk tinggi navbar
          behavior: "smooth",
        });
      }
    });
  });

  // OPTIMASI: Menggunakan IntersectionObserver untuk memunculkan elemen saat di-scroll
  const revealElements = document.querySelectorAll(".reveal-on-scroll");
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target); // Berhenti mengamati setelah elemen muncul
        }
      });
    },
    { threshold: 0.15 }
  );

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });
}

/**
 * Mengelola fungsionalitas form kontak.
 */
function initContactForm() {
  const contactForm = document.querySelector("#contactForm");
  if (!contactForm) return;

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(this);
    let isValid = true;

    // Validasi sederhana (pastikan semua field terisi)
    formData.forEach((value, key) => {
      const input = this.querySelector(`[name="${key}"]`);
      if (input && input.hasAttribute("required") && value.trim() === "") {
        isValid = false;
        input.classList.add("is-invalid");
      } else if (input) {
        input.classList.remove("is-invalid");
      }
    });

    if (isValid) {
      console.log("Form valid. Mengirim data:", Object.fromEntries(formData));
      const successMessage = document.createElement("div");
      successMessage.className = "alert alert-success mt-3";
      successMessage.textContent = "Thank you! Your message has been sent.";

      this.reset();
      this.append(successMessage);

      setTimeout(() => successMessage.remove(), 5000);
    }
  });
}

/**
 * Utility function untuk membatasi frekuensi eksekusi fungsi (misal saat scroll).
 */
function debounce(func, wait = 10) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

/**
 * Efek parallax yang dioptimalkan dengan debounce.
 */
function initParallax() {
  const parallaxElements = document.querySelectorAll(".parallax");
  if (parallaxElements.length === 0) return;

  const handleScroll = debounce(() => {
    parallaxElements.forEach((element) => {
      const speed = parseFloat(element.getAttribute("data-speed") || 0.5);
      const yPos = -(window.scrollY * speed);
      element.style.transform = `translateY(${yPos}px)`;
    });
  });

  window.addEventListener("scroll", handleScroll);
}

/**
 * Animasi counter yang hanya berjalan saat elemen terlihat.
 */
function initCounters() {
  const counters = document.querySelectorAll(".counter");
  if (counters.length === 0) return;

  const counterObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const target = +counter.getAttribute("data-target");
          counter.innerText = "0";

          const updateCount = () => {
            const count = +counter.innerText.replace(/,/g, "");
            const increment = target / 200; // Kecepatan animasi

            if (count < target) {
              counter.innerText = Math.ceil(count + increment).toLocaleString();
              requestAnimationFrame(updateCount); // Lebih baik untuk animasi
            } else {
              counter.innerText = target.toLocaleString();
            }
          };
          requestAnimationFrame(updateCount);
          observer.unobserve(counter);
        }
      });
    },
    { threshold: 0.8 }
  );

  counters.forEach((counter) => counterObserver.observe(counter));
}

/**
 * Slider testimoni yang diperbaiki logikanya.
 */
function initTestimonialSlider() {
  const slider = document.querySelector(".testimonial-slider-container"); // Ganti dengan selector container slider Anda
  if (!slider) return;

  let currentSlide = 0;
  const slides = slider.querySelectorAll(".testimonial-slide");
  const dots = slider.querySelectorAll(".testimonial-dot");
  let autoSlideInterval;

  if (slides.length <= 1) return; // Tidak perlu slider jika hanya ada 1 slide

  function showSlide(index) {
    slides.forEach((slide) => (slide.style.display = "none"));
    dots.forEach((dot) => dot.classList.remove("active"));
    slides[index].style.display = "block";
    dots[index].classList.add("active");
  }

  function changeSlide(newIndex) {
    currentSlide = (newIndex + slides.length) % slides.length;
    showSlide(currentSlide);
    resetAutoSlide();
  }

  function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => changeSlide(currentSlide + 1), 5000);
  }

  // Event listeners untuk tombol
  slider.querySelector(".testimonial-next")?.addEventListener("click", () => changeSlide(currentSlide + 1));
  slider.querySelector(".testimonial-prev")?.addEventListener("click", () => changeSlide(currentSlide - 1));
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => changeSlide(index));
  });

  // Inisialisasi
  showSlide(currentSlide);
  resetAutoSlide();
}

/**
 * Inisialisasi Hero Carousel dengan auto slider
 */
function initHeroCarousel() {
  const heroCarousel = document.querySelector("#heroCarousel");

  if (heroCarousel && typeof bootstrap !== "undefined" && bootstrap.Carousel) {
    // Inisialisasi carousel dengan konfigurasi auto slider
    const carousel = new bootstrap.Carousel(heroCarousel, {
      interval: 6000, // Auto slide setiap 6 detik
      wrap: true, // Loop kembali ke slide pertama
      keyboard: true, // Kontrol dengan keyboard
      pause: "hover", // Pause saat hover
      ride: "carousel", // Auto start
    });

    // Event listener untuk transisi yang smooth
    heroCarousel.addEventListener("slide.bs.carousel", function (e) {
      // Tambahkan efek fade atau animasi custom jika diperlukan
      console.log("Hero carousel sliding to:", e.to);
    });

    console.log("Hero carousel auto slider initialized");
  }
}
