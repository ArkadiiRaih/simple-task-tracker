export const blurPage = () => {
  const page = document.querySelector(".page_bg_blurable");
  if (!page) return;
  window.addEventListener("scroll", debounce(blurPage()));

  function blurPage() {
    const pageBottom = window.innerHeight;
    return function() {
      if (window.scrollY > pageBottom) return;
      const windowBottom = window.innerHeight + window.scrollY;
      page.style = `opacity: ${1 - (windowBottom - pageBottom) / pageBottom}`;
    };
  }
};

export const animatePicker = () => {
  const pagePicker = document.querySelector(".picker_page");
  if (!pagePicker) return;
  window.addEventListener("scroll", debounce(animatePagePicker()));
  function animatePagePicker() {
    let active = 0;
    return function() {
      const windowBottom = window.innerHeight + window.scrollY;
      const newActive = Math.floor(windowBottom / window.innerHeight - 1);
      if (newActive !== active) {
        pagePicker.children[active].classList.toggle("picker__item_active");
        pagePicker.children[newActive].classList.toggle("picker__item_active");
        active = newActive;
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
