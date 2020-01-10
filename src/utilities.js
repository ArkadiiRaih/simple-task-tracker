export const makePathFromString = str => str.replace(/\W/g, "").toLowerCase();

export const collectIdsAndDocs = function collectIdsAndDocs(doc) {
  return { id: doc.id, ...doc.data() };
};

export function debounce(cb, wait) {
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
