function hasTargetSum(array, target) {
    let i = 0;
    while (i<array.length) {
      let j = i + 1;
      while (j<array.length) {
        if (array[i]+array[j] === target) {
          return true;
        }
        j++;
      }
      i++;
    }
    return false;
}
    




/* 
  Write the Big O time complexity of your function here
  O(n²)
*/

/* 
  Add your pseudocode here
    iterate over the array to each element
    a nested loop to itearate over the array and add the other elements to the element captured
    check if the sum is equal to target, if it is return true
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
