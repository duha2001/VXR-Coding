module.exports = function methodRecursiveSum(n) {
  if (n === 1) {
    return 1;
  }
  return n + methodRecursiveSum(n - 1);
};
