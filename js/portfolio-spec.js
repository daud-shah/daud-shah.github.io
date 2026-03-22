(function () {
  "use strict";

  var hero = document.getElementById("about");
  if (hero) hero.classList.add("io-visible");

  var nav = document.getElementById("ftco-navbar");
  var lastY = window.scrollY;
  var ticking = false;

  var scrollTopBtn = document.getElementById("scroll-top-btn");

  function onScrollNav() {
    if (!nav) return;
    var y = window.scrollY;
    if (y > 40) {
      nav.classList.add("spec-nav--glass");
    } else {
      nav.classList.remove("spec-nav--glass");
    }
    if (y > lastY && y > 120) {
      nav.classList.add("nav-hidden");
    } else {
      nav.classList.remove("nav-hidden");
    }
    lastY = y;

    if (scrollTopBtn) {
      if (y > 400) scrollTopBtn.classList.add("is-visible");
      else scrollTopBtn.classList.remove("is-visible");
    }
  }

  window.addEventListener(
    "scroll",
    function () {
      if (!ticking) {
        window.requestAnimationFrame(function () {
          onScrollNav();
          ticking = false;
        });
        ticking = true;
      }
    },
    { passive: true }
  );

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* Typewriter */
  var words = [
    "Computer Vision Engineer",
    "AI/ML Developer",
    "Research-oriented Developer",
  ];
  var el = document.getElementById("typewriter-role");
  if (el) {
    var wi = 0;
    var ci = 0;
    var deleting = false;

    function tick() {
      var w = words[wi];
      if (!deleting) {
        ci++;
        el.textContent = w.slice(0, ci);
        if (ci === w.length) {
          setTimeout(function () {
            deleting = true;
            tick();
          }, 2000);
          return;
        }
        setTimeout(tick, 100);
      } else {
        ci--;
        el.textContent = w.slice(0, Math.max(0, ci));
        if (ci === 0) {
          deleting = false;
          wi = (wi + 1) % words.length;
          setTimeout(tick, 400);
          return;
        }
        setTimeout(tick, 50);
      }
    }
    tick();
  }

  /* IntersectionObserver fade */
  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("io-visible");
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
  );
  document.querySelectorAll(".io-fade").forEach(function (n) {
    io.observe(n);
  });

  /* Stats counter */
  var statObs = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var target = entry.target;
        var end = parseInt(target.getAttribute("data-count-end"), 10);
        if (isNaN(end)) return;
        statObs.unobserve(target);
        var start = 0;
        var dur = 2000;
        var t0 = null;
        function step(ts) {
          if (!t0) t0 = ts;
          var p = Math.min((ts - t0) / dur, 1);
          target.textContent = Math.floor(p * end);
          if (p < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
      });
    },
    { threshold: 0.2 }
  );
  document.querySelectorAll(".spec-stat-num[data-count-end]").forEach(function (n) {
    statObs.observe(n);
  });

  /* Active nav link */
  var sectionIds = ["about", "experience", "research", "skills", "projects", "contact"];
  var navLinks = document.querySelectorAll("#ftco-nav .nav-link[href^='#']");

  function setActiveNav() {
    var y = window.scrollY + 120;
    var active = sectionIds[0];
    sectionIds.forEach(function (id) {
      var sec = document.getElementById(id);
      if (sec && sec.offsetTop <= y) active = id;
    });
    navLinks.forEach(function (a) {
      var href = a.getAttribute("href");
      if (href === "#" + active) a.classList.add("active");
      else a.classList.remove("active");
    });
  }
  window.addEventListener("scroll", function () {
    requestAnimationFrame(setActiveNav);
  });
  setActiveNav();
  onScrollNav();
})();
