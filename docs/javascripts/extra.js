// Open all links to external sites in a new tab.
// Uses Material's `document$` observable (instead of DOMContentLoaded) so this
// also re-applies after "navigation.instant" page swaps, not just the first load.
document$.subscribe(function () {
  document.querySelectorAll("a[href^='http']").forEach(function (link) {
    if (link.hostname !== window.location.hostname) {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener");
    }
  });
});
