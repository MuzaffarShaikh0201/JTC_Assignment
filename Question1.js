/* Language: JavaScript(node.js)
 * input: elements of sorted array in a single line seperated by space eg,
 * 	2 4 6 8 10
 * output: modified array eg,
 * 	[10, 2, 8, 4, 6]
 * Time complexity: O(n)
 * Space complexity: O(1)
 * Test Cases: Test 1 => input: 1 2 3 4 5 6
 *                       output: [6, 1, 5, 2, 4, 3]
 *             Test 2 => input: 3 6 9 12 15
 *                       output: [15, 3, 12, 6, 9]
 * */

const readline = require("readline").createInterface(
  process.stdin,
  process.stdout
);

readline.question(
  "Enter elements of the array seperated by space:\n",
  (userInput) => {
    let nums = userInput.replace(/\s+$/g, "").split(" ");
    console.log(nums);
    alternateSort(nums);
    readline.close();
  }
);

function alternateSort(arr) {
  for (let i = 0; i < arr.length; i += 2) {
    arr.splice(i, 0, arr.pop());
  }
  console.log(arr);
}
