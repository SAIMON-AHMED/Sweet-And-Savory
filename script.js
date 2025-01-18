// Time -> O(nlogn) | Space -> O(1) - n is the number of items in the dishes
function sweetAndSavory(dishes, target) {
  dishes.sort((a, b) => a - b);
  let result = [0, 0];
  let leftPointer = 0;
  let rightPointer = dishes.length - 1;
  let diff = Infinity;

  while (leftPointer < rightPointer) {
    let sweet = dishes[leftPointer];
    let savory = dishes[rightPointer];
    let sum = sweet + savory;

    if (sum === target && sweet < 0 && savory > 0) {
      return [sweet, savory];
    } else if (sum < target) {
      if (sweet < 0 && savory > 0 && target - sum < diff) {
        diff = target - sum;
        result = [sweet, savory];
      }
      leftPointer++;
    } else {
      rightPointer--;
    }
  }

  return result;
}

