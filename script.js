/* ============================================
   HIMALAYAN HAVEN — Shared Scripts
   ============================================ */

(function () {
  "use strict";

  /* ---------- Icon sprite (inline SVG) ---------- */
  const ICONS = {
    menu: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',
    close: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="6" y1="6" x2="18" y2="18"/><line x1="6" y1="18" x2="18" y2="6"/></svg>',
    arrowRight: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
    arrowLeft: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>',
    arrowUp: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>',
    plus: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',
    wifi: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>',
    coffee: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>',
    bed: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8V4"/></svg>',
    view: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M8 3H5a2 2 0 0 0-2 2v3"/><path d="M21 8V5a2 2 0 0 0-2-2h-3"/><path d="M3 16v3a2 2 0 0 0 2 2h3"/><path d="M16 21h3a2 2 0 0 0 2-2v-3"/><line x1="3" y1="12" x2="21" y2="12"/></svg>',
    snow: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="12" y1="2" x2="12" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="5" y1="5" x2="19" y2="19"/><line x1="19" y1="5" x2="5" y2="19"/></svg>',
    phone: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
    mail: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
    clock: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    pin: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    sparkles: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3l1.9 5.8a2 2 0 0 0 1.3 1.3L21 12l-5.8 1.9a2 2 0 0 0-1.3 1.3L12 21l-1.9-5.8a2 2 0 0 0-1.3-1.3L3 12l5.8-1.9a2 2 0 0 0 1.3-1.3z"/></svg>',
    leaf: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6"/></svg>',
    heart: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
    map: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>',
    sun: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>',
    bath: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5h-9"/><line x1="10" y1="5" x2="8" y2="7"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="7" y1="19" x2="7" y2="21"/><line x1="17" y1="19" x2="17" y2="21"/></svg>',
    key: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 6.5m0 0l3 3L22 6l-3-3m-3.5 3.5L19 4"/></svg>',
    spark: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 2v6m0 8v6M2 12h6m8 0h6M4.93 4.93l4.24 4.24m5.66 5.66l4.24 4.24M4.93 19.07l4.24-4.24m5.66-5.66l4.24-4.24"/></svg>',
    check: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>',
    users: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  };

  /* ---------- Inject navigation + footer + modal ---------- */
  function buildNav() {
    const page = document.body.dataset.page || "";
    const links = [
      ["Home", "index.html", "home"],
      ["Stay", "stay.html", "stay"],
      ["Experience", "experience.html", "experience"],
      ["Gallery", "gallery.html", "gallery"],
      ["About", "about.html", "about"],
      ["Contact", "contact.html", "contact"],
    ];
    const navClass = document.body.dataset.nav === "solid" ? "nav solid" : "nav";
    const linksHtml = links
      .map(
        ([label, href, key]) =>
          `<a class="nav-link${key === page ? " active" : ""}" href="${href}">${label}</a>`
      )
      .join("");

    const nav = document.createElement("header");
    nav.className = navClass;
    nav.id = "nav";
    nav.innerHTML = `
      <div class="nav-inner">
        <a href="index.html" class="nav-logo">Himalayan Haven <span>Pokhara</span></a>
        <nav class="nav-links">
          ${linksHtml}
          <button class="btn btn-gold nav-cta" data-open-modal="booking">Book Your Stay</button>
        </nav>
        <button class="nav-toggle" id="navToggle" aria-label="Toggle menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>`;
    document.body.prepend(nav);

    const mobileMenu = document.createElement("div");
    mobileMenu.className = "mobile-menu";
    mobileMenu.id = "mobileMenu";
    mobileMenu.innerHTML = `
      ${links.map(([l, h]) => `<a href="${h}">${l}</a>`).join("")}
      <button class="btn btn-gold" data-open-modal="booking">Book Your Stay</button>`;
    document.body.appendChild(mobileMenu);
  }

  function buildFooter() {
    const footer = document.createElement("footer");
    footer.className = "footer";
    footer.innerHTML = `
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <div class="nav-logo">Himalayan Haven <span>Pokhara</span></div>
            <p>A peaceful boutique retreat in Lakeside, Pokhara, designed for slow mornings, mountain views, and meaningful stays.</p>
          </div>
          <div class="footer-col">
            <h5>Explore</h5>
            <a href="index.html">Home</a>
            <a href="stay.html">Stay</a>
            <a href="experience.html">Experience</a>
            <a href="gallery.html">Gallery</a>
          </div>
          <div class="footer-col">
            <h5>About</h5>
            <a href="about.html">Our Story</a>
            <a href="contact.html">Contact</a>
            <a href="stay.html">Rooms</a>
            <a href="experience.html">Experiences</a>
          </div>
          <div class="footer-col">
            <h5>Contact</h5>
            <a href="tel:+9779800000000">+977 98 0000 0000</a>
            <a href="mailto:hello@himalayanhaven.com">hello@himalayanhaven.com</a>
            <span>Lakeside, Pokhara, Nepal</span>
            <span>Reception open 24/7</span>
          </div>
        </div>
        <div class="footer-bottom">
          <span>&copy; ${new Date().getFullYear()} Himalayan Haven. All rights reserved.</span>
          <span>Boutique Hotel &amp; Café · Pokhara, Nepal</span>
        </div>
      </div>`;
    document.body.appendChild(footer);
  }

  function buildBookingModal() {
    const modal = document.createElement("div");
    modal.className = "modal-overlay";
    modal.id = "bookingModal";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-label", "Book your stay");
    modal.innerHTML = `
      <div class="modal">
        <button class="modal-close" data-close-modal aria-label="Close">${ICONS.close}</button>
        <span class="eyebrow">Reserve Your Stay</span>
        <h2>Book Your Escape</h2>
        <p class="modal-sub">Tell us when you'd like to visit and we'll help you plan the perfect stay.</p>
        <form id="bookingForm" novalidate>
          <div class="form-group">
            <label for="bkName">Full Name</label>
            <input type="text" class="form-control" id="bkName" name="name" required />
            <div class="form-error">Please enter your name.</div>
          </div>
          <div class="form-group">
            <label for="bkEmail">Email</label>
            <input type="email" class="form-control" id="bkEmail" name="email" required />
            <div class="form-error">Please enter a valid email.</div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label for="bkCheckIn">Check-in Date</label>
              <input type="date" class="form-control" id="bkCheckIn" name="checkin" required />
              <div class="form-error">Select a check-in date.</div>
            </div>
            <div class="form-group">
              <label for="bkCheckOut">Check-out Date</label>
              <input type="date" class="form-control" id="bkCheckOut" name="checkout" required />
              <div class="form-error">Select a check-out date.</div>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label for="bkGuests">Number of Guests</label>
              <select class="form-control" id="bkGuests" name="guests">
                <option>1 Guest</option>
                <option selected>2 Guests</option>
                <option>3 Guests</option>
                <option>4 Guests</option>
                <option>5+ Guests</option>
              </select>
            </div>
            <div class="form-group">
              <label for="bkRoom">Room Type</label>
              <select class="form-control" id="bkRoom" name="room">
                <option>Deluxe Room</option>
                <option>Mountain View Suite</option>
                <option>Family Retreat</option>
                <option>Not sure yet</option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <label for="bkRequest">Special Request</label>
            <textarea class="form-control" id="bkRequest" name="request" placeholder="Any preferences or questions?"></textarea>
          </div>
          <button type="submit" class="btn btn-primary btn-block">Request Availability</button>
        </form>
        <div class="form-success" id="bookingSuccess" style="display:none">
          <h3 id="successName">Thank you.</h3>
          <p>Your booking request has been received. We'll be in touch shortly to confirm your stay.</p>
          <button class="btn btn-gold" data-close-modal>Close</button>
        </div>
      </div>`;
    document.body.appendChild(modal);
  }

  function buildBackToTop() {
    const btn = document.createElement("button");
    btn.className = "back-to-top";
    btn.id = "backToTop";
    btn.setAttribute("aria-label", "Back to top");
    btn.innerHTML = ICONS.arrowUp;
    document.body.appendChild(btn);
  }

  /* ---------- Navigation behaviour ---------- */
  function initNav() {
    const nav = document.getElementById("nav");
    const toggle = document.getElementById("navToggle");
    const mobileMenu = document.getElementById("mobileMenu");

    if (!document.body.dataset.nav || document.body.dataset.nav !== "solid") {
      const onScroll = () => {
        if (window.scrollY > 60) nav.classList.add("scrolled");
        else nav.classList.remove("scrolled");
      };
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
    }

    toggle.addEventListener("click", () => {
      const open = mobileMenu.classList.toggle("open");
      toggle.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", open);
      document.body.style.overflow = open ? "hidden" : "";
    });

    mobileMenu.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
        toggle.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });
  }

  /* ---------- Modal behaviour ---------- */
  function initModal() {
    const modal = document.getElementById("bookingModal");
    const form = document.getElementById("bookingForm");
    const success = document.getElementById("bookingSuccess");

    document.addEventListener("click", (e) => {
      const opener = e.target.closest("[data-open-modal]");
      if (opener) {
        e.preventDefault();
        openModal();
        const room = opener.dataset.room;
        if (room && modal.querySelector("#bkRoom")) {
          const select = modal.querySelector("#bkRoom");
          for (const opt of select.options) {
            if (opt.value === room || opt.textContent === room) {
              opt.selected = true;
              break;
            }
          }
        }
      }
      const closer = e.target.closest("[data-close-modal]");
      if (closer) {
        closeModal();
      }
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.classList.contains("open")) closeModal();
    });

    function openModal() {
      modal.classList.add("open");
      document.body.style.overflow = "hidden";
      setTimeout(() => modal.querySelector("input")?.focus(), 200);
    }
    function closeModal() {
      modal.classList.remove("open");
      document.body.style.overflow = "";
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let valid = true;
      const fields = form.querySelectorAll("[required]");
      fields.forEach((f) => {
        const err = f.nextElementSibling;
        if (!f.value.trim() || (f.type === "email" && !/^[^@]+@[^@]+\.[^@]+$/.test(f.value))) {
          f.classList.add("error");
          valid = false;
        } else {
          f.classList.remove("error");
        }
      });
      const checkIn = form.querySelector("#bkCheckIn");
      const checkOut = form.querySelector("#bkCheckOut");
      if (checkIn.value && checkOut.value && checkOut.value <= checkIn.value) {
        checkOut.classList.add("error");
        valid = false;
      }
      if (!valid) return;

      const name = form.querySelector("#bkName").value.trim().split(" ")[0];
      form.querySelector("#successName").textContent = "Thank you, " + name + ".";
      form.style.display = "none";
      success.style.display = "block";
    });

    // Reset modal state when closed
    const observer = new MutationObserver(() => {
      if (!modal.classList.contains("open") && form.style.display === "none") {
        form.reset();
        form.style.display = "block";
        success.style.display = "none";
        form.querySelectorAll(".error").forEach((el) => el.classList.remove("error"));
      }
    });
    observer.observe(modal, { attributes: true, attributeFilter: ["class"] });
  }

  /* ---------- Scroll reveal ---------- */
  function initReveal() {
    const els = document.querySelectorAll(".reveal");
    if (!els.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            obs.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    els.forEach((el) => obs.observe(el));
  }

  /* ---------- Back to top ---------- */
  function initBackToTop() {
    const btn = document.getElementById("backToTop");
    window.addEventListener(
      "scroll",
      () => {
        if (window.scrollY > 600) btn.classList.add("show");
        else btn.classList.remove("show");
      },
      { passive: true }
    );
    btn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---------- Smooth scroll for in-page anchors ---------- */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      a.addEventListener("click", (e) => {
        const id = a.getAttribute("href");
        if (id.length <= 1) return;
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });
  }

  /* ---------- Gallery lightbox ---------- */
  function initGallery() {
    const grid = document.querySelector(".gallery-grid");
    if (!grid) return;
    const items = Array.from(grid.querySelectorAll(".gallery-item"));
    const images = items
      .map((it) => ({
        src: it.querySelector("img").dataset.full || it.querySelector("img").src,
        alt: it.querySelector("img").alt,
      }))
      .filter((img) => img.src);

    let current = 0;
    const lightbox = document.createElement("div");
    lightbox.className = "lightbox";
    lightbox.id = "lightbox";
    lightbox.innerHTML = `
      <button class="lightbox-btn lightbox-close" aria-label="Close">${ICONS.close}</button>
      <button class="lightbox-btn lightbox-prev" aria-label="Previous">${ICONS.arrowLeft}</button>
      <img src="" alt="" />
      <button class="lightbox-btn lightbox-next" aria-label="Next">${ICONS.arrowRight}</button>
      <div class="lightbox-caption"></div>`;
    document.body.appendChild(lightbox);

    const img = lightbox.querySelector("img");
    const caption = lightbox.querySelector(".lightbox-caption");

    function show(i) {
      current = (i + images.length) % images.length;
      img.src = images[current].src;
      img.alt = images[current].alt;
      caption.textContent = images[current].alt;
    }
    function open(i) {
      show(i);
      lightbox.classList.add("open");
      document.body.style.overflow = "hidden";
    }
    function close() {
      lightbox.classList.remove("open");
      document.body.style.overflow = "";
    }

    items.forEach((it, i) => {
      it.addEventListener("click", () => open(i));
      it.setAttribute("tabindex", "0");
      it.addEventListener("keydown", (e) => {
        if (e.key === "Enter") open(i);
      });
    });

    lightbox.querySelector(".lightbox-close").addEventListener("click", close);
    lightbox.querySelector(".lightbox-prev").addEventListener("click", (e) => {
      e.stopPropagation();
      show(current - 1);
    });
    lightbox.querySelector(".lightbox-next").addEventListener("click", (e) => {
      e.stopPropagation();
      show(current + 1);
    });
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) close();
    });
    document.addEventListener("keydown", (e) => {
      if (!lightbox.classList.contains("open")) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") show(current - 1);
      if (e.key === "ArrowRight") show(current + 1);
    });
  }

  /* ---------- Gallery filters ---------- */
  function initGalleryFilters() {
    const filters = document.querySelectorAll(".gallery-filter");
    if (!filters.length) return;
    const items = document.querySelectorAll(".gallery-item");
    filters.forEach((f) => {
      f.addEventListener("click", () => {
        filters.forEach((x) => x.classList.remove("active"));
        f.classList.add("active");
        const cat = f.dataset.filter;
        items.forEach((it) => {
          const show = cat === "all" || it.dataset.category === cat;
          it.style.display = show ? "" : "none";
        });
      });
    });
  }

  /* ---------- FAQ accordion ---------- */
  function initFAQ() {
    document.querySelectorAll(".faq-item").forEach((item) => {
      const q = item.querySelector(".faq-question");
      q.addEventListener("click", () => {
        const open = item.classList.contains("open");
        document.querySelectorAll(".faq-item").forEach((i) => i.classList.remove("open"));
        if (!open) item.classList.add("open");
      });
    });
  }

  /* ---------- Contact form ---------- */
  function initContactForm() {
    const form = document.getElementById("contactForm");
    if (!form) return;
    const success = document.getElementById("contactSuccess");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let valid = true;
      form.querySelectorAll("[required]").forEach((f) => {
        const err = f.parentElement.querySelector(".form-error");
        const bad = !f.value.trim() || (f.type === "email" && !/^[^@]+@[^@]+\.[^@]+$/.test(f.value));
        if (bad) {
          f.classList.add("error");
          if (err) err.style.display = "block";
          valid = false;
        } else {
          f.classList.remove("error");
          if (err) err.style.display = "none";
        }
      });
      if (!valid) return;
      const name = form.querySelector("#cfName").value.trim().split(" ")[0];
      success.querySelector("#contactSuccessName").textContent = "Thank you, " + name + ".";
      form.style.display = "none";
      success.style.display = "block";
    });
  }

  /* ---------- Init ---------- */
  function init() {
    buildNav();
    buildFooter();
    buildBookingModal();
    buildBackToTop();
    initNav();
    initModal();
    initReveal();
    initBackToTop();
    initSmoothScroll();
    initGallery();
    initGalleryFilters();
    initFAQ();
    initContactForm();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
