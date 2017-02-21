import sum from './sum';

export default function (arr) {
  return arr.reduce(sum, 0);
}
