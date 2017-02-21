export default function (arr) {
  return arr.reduce((snowball, curr) => {
    if (curr.name) {
      return [...snowball, curr.name];
    }

    return snowball;
  }, []);
}
