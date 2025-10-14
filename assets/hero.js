(function(altana, undefined) {
  const imageUrls = [
    '/assets/main-lighthouse-16x9-01.webp',
    '/assets/main-lighthouse-16x9-alt-01.webp',
    '/assets/main-beach-16x9-01.webp',
    '/assets/main-lightning-alt-16x9-01.webp',
    '/assets/main-greenhand-16x9-alt-less-green-01.webp'
  ];

  // ⚡ Efficient preloading using Promises
  function preloadImages(urls) {
    return Promise.all(
      urls.map(url => 
        new Promise(resolve => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = resolve;
          img.src = url;
        })
      )
    );
  }

  let loop = 0;
  let body, strap2;
  const heroClasses = ['hero01', 'hero02', 'hero03', 'hero04'];

  document.addEventListener('DOMContentLoaded', async () => {
    body = document.body;
    const parallaxImg = document.querySelector(".Parallax-host-outer .Parallax-item img");
    if (parallaxImg) parallaxImg.classList.add("back-image");

    body.classList.add("header-modified", "landing-page", "hero01");
    strap2 = document.getElementById("hero-strap2");

    // Preload all images before starting the loop
    await preloadImages(imageUrls);
    startHeroLoop();
  }, { passive: true });

  function startHeroLoop() {
    let lastTime = 0;
    const interval = 5000; // 5 seconds per loop

    function update(timestamp) {
      if (timestamp - lastTime > interval) {
        updateHero();
        lastTime = timestamp;
      }
      requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }

  function updateHero() {
    if (!body || !strap2) return;

    // Replace strap element to trigger animation reset
    const newStrap = strap2.cloneNode(true);
    strap2.parentNode.replaceChild(newStrap, strap2);
    strap2 = newStrap;

    // Cycle through hero classes
    body.classList.remove(...heroClasses);
    body.classList.add(heroClasses[loop]);
    loop = (loop + 1) % heroClasses.length;
  }

})(window.altana = window.altana || {});
