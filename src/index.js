
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) return [];
  if(matrix.length === 0) return [];
  //let arr = matrix.map((item, index)=> item);
  matrix.forEach((item, index) => {
        if (index % 2 == 0) {
          item.sort((a,b)=> a-b);
        } else {
          item.sort((a,b)=> b-a);
        }
  });
  return matrix.join(",").split(",").map(item=> item*1);
}
