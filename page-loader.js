(function () {
  "use strict";

  const loader = document.getElementById("ppmPageLoader");

  if (!loader) {
    return;
  }

  let hideTimer = 0;
  let failsafeTimer = 0;

  function show(options) {
    const persist = Boolean(options && typeof options === "object" && options.persist);
    window.clearTimeout(hideTimer);
    window.clearTimeout(failsafeTimer);
    loader.hidden = false;
    loader.classList.remove("is-hidden");
    loader.setAttribute("aria-hidden", "false");
    var loadingLabel = "Loading";
    if (window.PPM_I18N && typeof window.PPM_I18N.translateText === "function") {
      loadingLabel = window.PPM_I18N.translateText("Loading", document.documentElement.lang || "en");
    }
    loader.setAttribute("aria-label", loadingLabel);
    document.documentElement.setAttribute("aria-busy", "true");

    if (!persist) {
      failsafeTimer = window.setTimeout(hide, 4000);
    }
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
