slowMath.add(1, 1)
.then((res) => {
  console.log(`First result: ${res}`);
  return res;
})
.then((res) => {
  console.log(res);
  return slowMath.multiply(res, 2);

})
.then((res) => {
  console.log(res);
  return slowMath.divide(res, 4);
})
.then((res) => {
  console.log(res);
  return slowMath.subtract(res, 3);
})
.then((res) => {
  console.log(res);
  return slowMath.add(res, 98);
})
.then((res) => {
  console.log(res);
  return slowMath.remainder(res, 2);
})
.then((res) => {
  console.log(res);
  return slowMath.multiply(res, 50);
})
.then((res) => {
  console.log(res);
  return slowMath.remainder(res, 40);
})
.then((res) => {
  console.log(res);
  return slowMath.add(res, 32);
})
.then((res) => {
  console.log(`The final result is: ${res}`);
})
.catch(err => console.log(err));
