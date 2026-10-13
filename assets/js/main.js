// Mobile menu
(function () {
  var nav = document.querySelector('.nav');
  var btn = document.querySelector('.nav__toggle');
  if (!nav || !btn) return;
  btn.addEventListener('click', function () {
    var open = nav.classList.toggle('nav--open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
})();

// Tag / tool filters on the Blog and Projects pages.
// Supports deep links like /blog/?tag=tableau
(function () {
  var bar = document.querySelector('.filters');
  if (!bar) return;
  var items = document.querySelectorAll(bar.dataset.filterTarget);
  var attr = bar.dataset.filterAttr;
  var empty = document.querySelector('.empty');
  var buttons = bar.querySelectorAll('.filter');

  function apply(value) {
    var shown = 0;
    buttons.forEach(function (b) { b.classList.toggle('is-active', b.dataset.value === value); });
    items.forEach(function (el) {
      var list = (el.dataset[attr] || '').split('|');
      var match = !value || list.indexOf(value) !== -1;
      el.hidden = !match;
      if (match) shown++;
    });
    if (empty) empty.hidden = shown !== 0;
  }

  bar.addEventListener('click', function (e) {
    var b = e.target.closest('.filter');
    if (!b) return;
    apply(b.dataset.value);
    var url = new URL(window.location);
    if (b.dataset.value) url.searchParams.set('tag', b.dataset.value); else url.searchParams.delete('tag');
    history.replaceState(null, '', url);
  });

  var initial = new URLSearchParams(window.location.search).get('tag');
  if (initial) apply(initial.toLowerCase());
})();
