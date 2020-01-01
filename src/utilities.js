export const makePathFromString = str => str.replace(/\W/g, "").toLowerCase();

export const collectIdsAndDocs = doc => {
  return { id: doc.id, ...doc.data() };
};
