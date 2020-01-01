export const animateHeader = () => {
  const nav = document.querySelector(".nav");
  if (!nav) return;
  window.addEventListener("scroll", debounce(activateNav()));

  function activateNav() {
    let active = false;
    const windowBottom = window.innerHeight;
    return function() {
      if (
        (windowBottom < window.scrollY && !active) ||
        (windowBottom > window.scrollY && active)
      ) {
        active = !active;
        nav.classList.toggle("nav_active");
      }
    };
  }
};

function debounce(cb, wait) {
  let timeout;
  return function() {
    const context = this,
      args = arguments;

    if (!timeout) {
      timeout = setTimeout(() => {
        timeout = null;
      }, wait);
      cb.apply(context, args);
    }
  };
}
