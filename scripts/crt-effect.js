(function crtJitter(){
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', crtJitter, { once: true });
    return;
  }

  const target = document.querySelector('.crt') || document.body;
  if (!target) return;

  const cs = getComputedStyle(target);
  const baseTransform = cs.transform === 'none' ? '' : cs.transform;

  let offsetX = 0, offsetY = 0, rot = 0;
  let destX = 0, destY = 0, destR = 0;
  let lastUpdate = 0;

  // Tweakables
  const intensityPx = 0.3;   // max pixel jitter
  const rotationDeg = 0.2;  // max rotation
  const updateEveryMs = 90;  // pick a new random target every N ms
  const smoothing = 0.15;    // approach [0..1], higher = snappier

  function frame(now){
    if (!lastUpdate || now - lastUpdate > updateEveryMs) {
      destX = (Math.random() * 2 - 1) * intensityPx;
      destY = (Math.random() * 2 - 1) * intensityPx;
      destR = (Math.random() * 2 - 1) * rotationDeg;
      lastUpdate = now;
    }

    offsetX += (destX - offsetX) * smoothing;
    offsetY += (destY - offsetY) * smoothing;
    rot     += (destR - rot) * smoothing;

    const transform = `${baseTransform ? baseTransform + ' ' : ''}translate(${offsetX.toFixed(3)}px, ${offsetY.toFixed(3)}px) rotate(${rot.toFixed(3)}deg)`;
    target.style.transform = transform;

    requestAnimationFrame(frame);
  }

  target.style.willChange = 'transform';
  requestAnimationFrame(frame);
})();

// Subtle scroll bob effect
(function scrollBob(){
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', scrollBob, { once: true });
    return;
  }

  let enabled = true;
  let baseY = window.scrollY;
  let lastUserChangeAt = performance.now();
  let isTouching = false;

  // Tweakables
  const amplitudePx = 1.0;   // max bob in pixels (keep tiny)
  const periodMs = 1400;     // full sine period
  const settleMs = 400;      // pause after user scroll before resuming bob

  window.addEventListener('scroll', () => {
    lastUserChangeAt = performance.now();
    baseY = window.scrollY; // re-center around new user position
  }, { passive: true });

  window.addEventListener('wheel', () => {
    lastUserChangeAt = performance.now();
  }, { passive: true });

  window.addEventListener('touchstart', () => { isTouching = true; }, { passive: true });
  window.addEventListener('touchend',   () => { isTouching = false; lastUserChangeAt = performance.now(); }, { passive: true });

  function atScrollBounds(){
    const maxY = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
    return window.scrollY <= 0 || window.scrollY >= maxY;
  }

  function frame(now){
    if (!enabled) return;

    const sinceUser = now - lastUserChangeAt;
    const canBob = sinceUser > settleMs && !isTouching && !atScrollBounds();

    if (canBob) {
      const t = (now % periodMs) / periodMs; // 0..1
      const y = baseY + Math.sin(t * Math.PI * 2) * amplitudePx;
      window.scrollTo({ top: y, left: window.scrollX });
    }

    requestAnimationFrame(frame);
  }

  requestAnimationFrame(frame);
})();