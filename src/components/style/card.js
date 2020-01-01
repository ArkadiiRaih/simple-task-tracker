export const animateCard = () => {
  const pageCards = document.querySelectorAll(".card__appearable");
  if (!pageCards) return;
  window.addEventListener("scroll", debounce(showCard));

  function showCard() {
    pageCards.forEach(pageCard => {
      const cardBottom = pageCard.offsetTop + pageCard.offsetHeight;
      // half way through the image
      const slideInAt =
        window.scrollY + window.innerHeight - pageCard.offsetHeight / 2;
      // bottom of the image
      const isHalfShown = slideInAt > pageCard.offsetTop;
      const isNotScrollPast = window.scrollY < cardBottom;
      if (isHalfShown && isNotScrollPast) {
        pageCard.classList.add("card__appearable_active");
      } else {
        pageCard.classList.remove("card__appearable_active");
      }
    });
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
