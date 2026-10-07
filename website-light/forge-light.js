/* Forge Energy Solutions — website (light): interactions.
   Plain JavaScript, no libraries. Works on any page that contains the .fl markup.
   On Squarespace, paste it into Code Injection → Footer, wrapped in a script tag. */
(function () {
  function init() {
    var root = document.querySelector('.fl');
    if (!root) return;

    /* Crosshair with an X/Y readout in millimetres (24 px grid = 5 mm) */
    root.querySelectorAll('[data-xh-zone]').forEach(function (zone) {
      var layer = zone.querySelector('[data-xh-layer]');
      if (!layer) return;
      var v = layer.querySelector('[data-xh-v]'), h = layer.querySelector('[data-xh-h]');
      var mx = layer.querySelector('[data-xh-mx]'), my = layer.querySelector('[data-xh-my]');
      zone.addEventListener('mousemove', function (e) {
        var r = zone.getBoundingClientRect();
        var x = Math.round(e.clientX - r.left), y = Math.round(e.clientY - r.top);
        layer.hidden = false;
        v.style.left = x + 'px';
        h.style.top = y + 'px';
        mx.textContent = (x * 5 / 24).toFixed(1);
        my.textContent = (y * 5 / 24).toFixed(1);
      });
      zone.addEventListener('mouseleave', function () { layer.hidden = true; });
    });

    /* Supply chain: hovering a bill-of-materials row lights up its regions on the map */
    var pins = root.querySelectorAll('[data-pin]');
    function paint(regions) {
      pins.forEach(function (pin) {
        var code = pin.getAttribute('data-pin');
        var hot = regions ? regions.indexOf(code) >= 0 : false;
        var dim = regions && !hot;
        pin.style.background = hot ? '#E6A700' : (dim ? '#F5F7FA' : '#121212');
        pin.style.transform = 'scale(' + (hot ? 1.4 : 1) + ')';
        var lbl = pin.querySelector('[data-pin-lbl]');
        if (lbl) lbl.style.color = dim ? '#9EA3AB' : '#121212';
      });
    }
    /* Hover previews a row's regions; a click or tap keeps them lit until clicked again */
    var rows = root.querySelectorAll('[data-bom]'), pinned = null;
    function regionsOf(row) { return row ? row.getAttribute('data-regions').split(' ') : null; }
    rows.forEach(function (row) {
      row.addEventListener('mouseenter', function () { paint(regionsOf(row)); });
      row.addEventListener('mouseleave', function () { paint(regionsOf(pinned)); });
      row.addEventListener('click', function () {
        pinned = pinned === row ? null : row;
        rows.forEach(function (r) { r.setAttribute('aria-pressed', r === pinned ? 'true' : 'false'); });
        paint(regionsOf(pinned));
      });
    });

    /* Draw the timeline and charts as they scroll into view */
    if (typeof IntersectionObserver === 'undefined') return;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    root.classList.add('motion');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var key = en.target.getAttribute('data-reveal');
        root.querySelectorAll('[data-reveal="' + key + '"]').forEach(function (el) {
          el.classList.add('is-in');
          io.unobserve(el);
        });
      });
    }, { threshold: 0.35 });
    root.querySelectorAll('[data-reveal]').forEach(function (el) { io.observe(el); });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
