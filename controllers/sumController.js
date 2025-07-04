//localhost:3000/api/sum?n=10&method=1
//localhost:3000/api/sum?n=10&method=2
//localhost:3000/api/sum?n=10&method=3
const loopSum = require('../service/methodLoopSum');
const formulaSum = require('../service/methodFormulaSum');
const recursiveSum = require('../service/methodRecursiveSum'); // Assuming you have a recursive method
const STATUS = require('../constants/httpCode');

const methodSum = {
  1: loopSum,
  2: formulaSum,
  3: recursiveSum, // Assuming you have a recursive method
};
exports.calculateSum = (req, res) => {
  const n = parseInt(req.query.n, 10);
  const methodType = parseInt(req.query.method, 10);

  if (isNaN(n) || n <= 0 || !methodSum[methodType]) {
    return res.status(STATUS.HTTP_STATUS_CODE_BAD_REQUEST).json({
      error:
        'Invalid input. Please provide a positive integer for n or a valid method type.',
    });
  }

  try {
    const result = methodSum[methodType](n);
    res.status(STATUS.HTTP_STATUS_CODE_SUCCESS).json({
      result,
    });
  } catch (error) {
    res
      .status(STATUS.HTTP_STATUS_CODE_INTERNAL_SERVER_ERROR)
      .json({ error: 'An error occurred while calculating the sum.' });
  }
};
