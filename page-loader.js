(function () {
  "use strict";

  const loader = document.getElementById("ppmPageLoader");

  if (!loader) {
    return;
  }

  let hideTimer = 0;
  let failsafeTimer = 0;

  function show() {
    window.clearTimeout(hideTimer);
    window.clearTimeout(failsafeTimer);
    loader.hidden = false;
    loader.classList.remove("is-hidden");
    loader.setAttribute("aria-hidden", "false");
    loader.setAttribute("aria-label", "Loading");
    document.documentElement.setAttribute("aria-busy", "true");

    failsafeTimer = window.setTimeout(hide, 4000);
  }

  function hide() {
    window.clearTimeout(hideTimer);
    window.clearTimeout(failsafeTimer);
    loader.classList.add("is-hidden");
    loader.setAttribute("aria-hidden", "true");
    document.documentElement.removeAttribute("aria-busy");
    hideTimer = window.setTimeout(function () {
      loader.hidden = true;
    }, 80);
  }

  function hideSoon(delay = 0) {
    window.clearTimeout(hideTimer);
    hideTimer = window.setTimeout(hide, delay);
  }

  window.PPMPageLoader = { show, hide, hideSoon };

  function revealPage() {
    hideSoon(0);
  }

  window.addEventListener("pageshow", revealPage);

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", revealPage, { once: true });
  } else {
    revealPage();
  }
})();
