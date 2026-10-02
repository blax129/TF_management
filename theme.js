(function () {
  var STORAGE_KEY = "ppm-theme";

  function currentTheme() {
    return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }

  function applyTheme(theme) {
    var next = theme === "dark" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    document.documentElement.style.colorScheme = next;
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch (error) {
      /* ignore private-mode storage errors */
    }
    syncToggles();
  }

  function syncToggles() {
    var theme = currentTheme();
    var nextLabel = theme === "dark" ? "Switch to light mode" : "Switch to dark mode";
    document.querySelectorAll("[data-theme-toggle]").forEach(function (button) {
      button.setAttribute("data-active-theme", theme);
      button.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
      button.setAttribute("aria-label", nextLabel);
      button.dataset.ariaLabelKey = nextLabel;
    });
    if (window.PPM_I18N && typeof window.PPM_I18N.applyLanguage === "function") {
      window.PPM_I18N.applyLanguage(document.documentElement.lang || "en");
    }
  }

  document.addEventListener("click", function (event) {
    var button = event.target.closest("[data-theme-toggle]");
    if (!button) return;
    applyTheme(currentTheme() === "dark" ? "light" : "dark");
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", syncToggles);
  } else {
    syncToggles();
  }
})();
