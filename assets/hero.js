// Banner curtain: each slide slides off to the left to uncover the next one underneath.
// Advances on its own; arrows, dots, keys and swipes jump around and restart the timer.
(function () {
  var hero = document.querySelector('.hero');
  if (!hero) return;

  var slides = hero.querySelectorAll('.hero-slide');
  var dotsBox = hero.querySelector('.hero-dots');
  var n = slides.length;
  var INTERVAL = 6500;
  var DURATION = 1300; // keep in sync with the .is-top transition in custom.css
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var current = 0;
  var busy = false;
  var timer = null;

  var dots = Array.prototype.map.call(slides, function (_, i) {
    var b = document.createElement('button');
    b.type = 'button';
    b.setAttribute('role', 'tab');
    b.setAttribute('aria-label', 'Slide ' + (i + 1));
    b.addEventListener('click', function () { go(i, i > current ? 1 : -1); });
    dotsBox.appendChild(b);
    return b;
  });

  function setDots() {
    dots.forEach(function (d, j) { d.setAttribute('aria-selected', j === current); });
  }

  function show(i, dir) {
    i = (i + n) % n;
    if (busy || i === current) return;
    busy = true;
    var from = slides[current];
    var to = slides[i];
    current = i;
    setDots();

    if (dir > 0) {
      // Forward: the target waits underneath while the current slide slides off to the left.
      to.classList.add('is-current');
      from.classList.remove('is-current');
      from.classList.add('is-top');
      from.offsetWidth; // commit the start position before moving
      from.classList.add('is-off');
      setTimeout(function () {
        from.classList.remove('is-top', 'is-off');
        busy = false;
      }, reduceMotion ? 0 : DURATION);
    } else {
      // Back: the target slides in from the left over the current slide.
      to.classList.add('is-off');
      to.offsetWidth;
      to.classList.add('is-top');
      to.offsetWidth;
      to.classList.remove('is-off');
      setTimeout(function () {
        from.classList.remove('is-current');
        to.classList.remove('is-top');
        to.classList.add('is-current');
        busy = false;
      }, reduceMotion ? 0 : DURATION);
    }
  }

  function go(i, dir) {
    show(i, dir);
    restart();
  }

  function restart() {
    clearInterval(timer);
    if (!reduceMotion) timer = setInterval(function () { show(current + 1, 1); }, INTERVAL);
  }

  hero.querySelector('.hero-prev').addEventListener('click', function () { go(current - 1, -1); });
  hero.querySelector('.hero-next').addEventListener('click', function () { go(current + 1, 1); });
  hero.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') go(current - 1, -1);
    if (e.key === 'ArrowRight') go(current + 1, 1);
  });

  // Swipe on touch screens
  var x0 = null;
  hero.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
  hero.addEventListener('touchend', function (e) {
    if (x0 === null) return;
    var dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 40) go(current + (dx < 0 ? 1 : -1), dx < 0 ? 1 : -1);
    x0 = null;
  });

  setDots();
  restart();
})();
