
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let sortMatrix = [];
  if (matrix == undefined) {
    return [];
  } else {
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 === 0) {
      sortMatrix.push(matrix[i]);
    } else {
       sortMatrix.push((matrix[i]).reverse());
    }
  }
  return (sortMatrix.flat(Infinity));
}
}