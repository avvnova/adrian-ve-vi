function Marquee(selector, speed) {
  const parentSelector = document.querySelector(selector);
  const clone = parentSelector.innerHTML;
  const firstElement = parentSelector.children[0];
  let i = 0;
  
  // Create one clone with a specific class for CSS targeting
  const cloneHTML = clone.replace('id="title"', 'class="marquee-clone"');
  parentSelector.insertAdjacentHTML('beforeend', cloneHTML);

  setInterval(function () {
    if (!document.body.classList.contains('freezer-on')) {
      firstElement.style.marginLeft = `0px`;
      return;
    }

    firstElement.style.marginLeft = `-${i}px`;
    if (i > firstElement.clientWidth) {
      i = 0;
    }
    i = i + speed;
  }, 0);
}

//after window is completed load
//1 class selector for marquee
//2 marquee speed 0.2
window.addEventListener('load', Marquee('.marquee', 0.2))
