// slowMath.add(6, 2)
// .then((res) => {
//   console.log(`First result: ${res}`);
//   return res;
// })
// .then((res) => {
//   console.log(res);
//   return slowMath.multiply(res, 2);

// })
// .then((res) => {
//   console.log(res);
//   return slowMath.divide(res, 4);
// })
// .then((res) => {
//   console.log(res);
//   return slowMath.subtract(res, 3);
// })
// .then((res) => {
//   console.log(res);
//   return slowMath.add(res, 98);
// })
// .then((res) => {
//   console.log(res);
//   return slowMath.remainder(res, 2);
// })
// .then((res) => {
//   console.log(res);
//   return slowMath.multiply(res, 50);
// })
// .then((res) => {
//   console.log(res);
//   return slowMath.remainder(res, 40);
// })
// .then((res) => {
//   console.log(res);
//   return slowMath.add(res, 32);
// })
// .then((res) => {
//   console.log(`The final result is: ${res}`);
// })
// .catch(err => console.log(err));

async function doMath() {
  try {
    const first = await slowMath.add(6, 2);
    console.log(first);

    const second = await slowMath.multiply(first, 2);
    console.log(second);

    const third = await slowMath.divide(second, 4);
    console.log(third);

    const fourth = await slowMath.subtract(third, 3);
    console.log(fourth);

    const fifth = await slowMath.add(fourth, 98);
    console.log(fifth);

    const sixth = await slowMath.remainder(fifth, 2);
    console.log(sixth);

    const seventh = await slowMath.multiply(sixth, 50);
    console.log(seventh);

    const eighth = await slowMath.remainder(seventh, 40);
    console.log(eighth);

    const final = await slowMath.add(eighth, 32);
    console.log(`The final result is: ${final}`);
  } catch (err) {
    err => console.log(err);
  }
}

doMath();
