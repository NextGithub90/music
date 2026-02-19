/* ============================================
   MELODEX - Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

    // ============================================
    // AOS Animation Init
    // ============================================
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 700,
            once: true,
            offset: 80,
            easing: 'ease-out-cubic'
        });
    }

    // ============================================
    // Header Scroll
    // ============================================
    const header = document.getElementById('header');
    if (header) {
        function handleHeaderScroll() {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
        window.addEventListener('scroll', handleHeaderScroll);
        handleHeaderScroll(); // run on load
    }

    // ============================================
    // Back to Top
    // ============================================
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });

        backToTop.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ============================================
    // Show More Artists
    // ============================================
    const showMoreBtn = document.getElementById('showMoreArtists');
    if (showMoreBtn) {
        let artistsExpanded = false;
        const hiddenArtists = document.querySelectorAll('.artist-hidden');
        const showMoreText = document.getElementById('showMoreText');
        const badge = showMoreBtn.querySelector('.badge');

        showMoreBtn.addEventListener('click', function () {
            artistsExpanded = !artistsExpanded;

            hiddenArtists.forEach(function (artist) {
                if (artistsExpanded) {
                    artist.classList.add('show');
                } else {
                    artist.classList.remove('show');
                }
            });

            if (showMoreText) {
                showMoreText.textContent = artistsExpanded ? 'Show Less' : 'Show More Composers';
            }

            if (badge) {
                badge.style.display = artistsExpanded ? 'none' : 'inline-block';
            }

            // Update icon
            const icon = showMoreBtn.querySelector('i');
            if (icon) {
                icon.className = artistsExpanded ? 'fas fa-chevron-up me-2' : 'fas fa-chevron-down me-2';
            }

            // Re-init AOS for newly visible items
            if (typeof AOS !== 'undefined') {
                setTimeout(function () {
                    AOS.refresh();
                }, 100);
            }
        });
    }

    // ============================================
    // Smooth scroll for anchor links
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const headerOffset = 80;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Close mobile nav
                const navCollapse = document.getElementById('navbarNav');
                if (navCollapse && navCollapse.classList.contains('show')) {
                    const bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
                    if (bsCollapse) bsCollapse.hide();
                }
            }
        });
    });

    // ============================================
    // Contact Form Handler
    // ============================================
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = this.querySelector('[name="name"]');
            const email = this.querySelector('[name="email"]');
            const subject = this.querySelector('[name="subject"]');
            const message = this.querySelector('[name="message"]');

            // Basic validation
            let isValid = true;
            [name, email, message].forEach(function (field) {
                if (field && !field.value.trim()) {
                    field.classList.add('is-invalid');
                    isValid = false;
                } else if (field) {
                    field.classList.remove('is-invalid');
                }
            });

            if (!isValid) return;

            // Build WhatsApp message
            let whatsappMessage = 'Hello MELODEX!%0A%0A';
            if (name) whatsappMessage += 'Name: ' + encodeURIComponent(name.value) + '%0A';
            if (email) whatsappMessage += 'Email: ' + encodeURIComponent(email.value) + '%0A';
            if (subject) whatsappMessage += 'Subject: ' + encodeURIComponent(subject.value) + '%0A';
            if (message) whatsappMessage += 'Message: ' + encodeURIComponent(message.value);

            const whatsappUrl = 'https://wa.me/6281110003806?text=' + whatsappMessage;
            window.open(whatsappUrl, '_blank');

            // Show success
            const successAlert = document.createElement('div');
            successAlert.className = 'alert alert-success mt-3';
            successAlert.innerHTML = '<i class="fas fa-check-circle me-2"></i>Redirecting to WhatsApp...';
            contactForm.appendChild(successAlert);

            setTimeout(function () {
                successAlert.remove();
            }, 3000);
        });
    }

    // ============================================
    // Counter Animation (for stats)
    // ============================================
    function animateCounters() {
        const counters = document.querySelectorAll('.stat-number');
        if (counters.length === 0) return;

        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    if (counter.dataset.animated) return;

                    const text = counter.textContent;
                    const match = text.match(/(\d+)/);
                    if (match) {
                        const target = parseInt(match[1]);
                        const suffix = text.replace(match[1], '');
                        let current = 0;
                        const increment = Math.ceil(target / 50);
                        const timer = setInterval(function () {
                            current += increment;
                            if (current >= target) {
                                current = target;
                                clearInterval(timer);
                            }
                            counter.innerHTML = current + '<span class="stat-suffix">' + suffix.replace(/<[^>]*>/g, '') + '</span>';
                        }, 30);
                    }
                    counter.dataset.animated = 'true';
                    observer.unobserve(counter);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(function (counter) {
            observer.observe(counter);
        });
    }

    animateCounters();

    // ============================================
    // Newsletter Form
    // ============================================
    document.querySelectorAll('footer form, .cta-section form').forEach(function (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            if (emailInput && emailInput.value.trim()) {
                const alert = document.createElement('div');
                alert.className = 'alert alert-success mt-2 py-2 small';
                alert.textContent = 'Thank you for subscribing!';
                this.parentNode.appendChild(alert);
                emailInput.value = '';
                setTimeout(function () { alert.remove(); }, 3000);
            }
        });
    });

    // ============================================
    // Active Nav Link
    // ============================================
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(function (link) {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        } else if (link.classList.contains('active') && href !== currentPage) {
            // Don't remove active if manually set
        }
    });

    // ============================================
    // Catalog Search/Filter
    // ============================================
    const searchInput = document.getElementById('catalogSearch');
    if (searchInput) {
        searchInput.addEventListener('input', function () {
            const query = this.value.toLowerCase().trim();
            const rows = document.querySelectorAll('#catalogTable tbody tr');
            let visibleCount = 0;

            rows.forEach(function (row) {
                const text = row.textContent.toLowerCase();
                if (text.includes(query)) {
                    row.style.display = '';
                    visibleCount++;
                } else {
                    row.style.display = 'none';
                }
            });

            const noResults = document.getElementById('noResults');
            if (noResults) {
                noResults.style.display = visibleCount === 0 ? 'block' : 'none';
            }
        });
    }

    // Genre filter
    const genreFilter = document.getElementById('genreFilter');
    if (genreFilter) {
        genreFilter.addEventListener('change', function () {
            const genre = this.value.toLowerCase();
            const rows = document.querySelectorAll('#catalogTable tbody tr');

            rows.forEach(function (row) {
                if (!genre) {
                    row.style.display = '';
                } else {
                    const rowGenre = row.querySelector('td:nth-child(4)');
                    if (rowGenre && rowGenre.textContent.toLowerCase().includes(genre)) {
                        row.style.display = '';
                    } else {
                        row.style.display = 'none';
                    }
                }
            });
        });
    }

});
