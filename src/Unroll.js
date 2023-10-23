function unroll(squareArray) {
   const unrolledArray = [];

   for(let row of squareArray){
    unrolledArray.push(...row);
   }
    return unrolledArray;
}

module.exports = unroll;