/* ===============================
   Scroll‑triggered gallery reveal
   =============================== */
   document.addEventListener("DOMContentLoaded", () => {
    const imgs = document.querySelectorAll(".gallery img");
  
    // Fade‑in using IntersectionObserver (native, no libs)
    const revelio = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal");
            revelio.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
  
    imgs.forEach((img) => revelio.observe(img));
  
    /* ==========================
       Fancy parallax with GSAP
       ========================== */
    if (window.gsap) {
      gsap.utils.toArray(".gallery img").forEach((img) => {
        gsap.to(img, {
          yPercent: 15,
          ease: "none",
          scrollTrigger: {
            trigger: img,
            scrub: true,
          },
        });
      });
    }
  
    /* ==========================
       Confession dialog logic
       ========================== */
    const overlay = document.getElementById("overlay");
    const dialog = document.getElementById("confess");
    const sendBtn = dialog.querySelector(".send");
    const closeBtn = dialog.querySelector(".close");
  
    // Open dialog after a playful delay
    setTimeout(() => {
      overlay.classList.add("show");
      dialog.showModal();
    }, 4500);
  
    // Close handlers
    closeBtn.onclick = sendBtn.onclick = () => {
      dialog.close();
      overlay.classList.remove("show");
    };
  });
  