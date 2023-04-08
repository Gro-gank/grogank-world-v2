export const createArrayofNumber = (first, last) => {
  const array = [];
  for (let i = first; i <= last; i++) {
    array.push(i);
  }
  return array;
};
export const randomId = () => {
  const id = (Math.random() + 1).toString(36).substring(7);
  return id;
};
export const sortbyView = (list) => {
  const newList = list.slice(0).sort((a, b) => b.view - a.view);
  return newList;
};
export const sortbyRate = (list) => {
  const newList = list.slice(0).sort((a, b) => b.rate - a.rate);
  return newList;
};

export const newestFirst = function (array) {
  const newArray = array.sort(
    (a, b) => new Date(b.release) - new Date(a.release)
  );
  return newArray;
};
export const sortHightoLow = function (array) {
  const newArray = array.slice(0).sort((a, b) => b.price - a.price);
  return newArray;
};

export const sortLowtoHigh = function (array) {
  const newArray = array.slice(0).sort((a, b) => a.price - b.price);
  return newArray;
};
