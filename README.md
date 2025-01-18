# Sweet and Savory

## Description
The `sweetAndSavory` function is designed to find a pair of dishes, one sweet (negative value) and one savory (positive value), whose combined sum is closest to a given target value. The function ensures efficiency by sorting the dishes and using a two-pointer technique.

---

## Function Signature
```javascript
function sweetAndSavory(dishes, target) -> [number, number]
```

---

## Parameters
- **dishes** (`Array<number>`): An array of integers where negative values represent sweet dishes, and positive values represent savory dishes.
- **target** (`number`): The target sum we want the sweet and savory dishes to approach.

---

## Returns
- **`Array<number>`**: A pair of numbers `[sweet, savory]` where `sweet` is the sweet dish (negative value), `savory` is the savory dish (positive value), and their sum is as close to the target as possible without exceeding it.

---

## Time and Space Complexity
- **Time Complexity**: `O(n log n)`
  - Sorting the array takes `O(n log n)`, and the two-pointer traversal takes `O(n)`.
- **Space Complexity**: `O(1)`
  - The function uses a constant amount of additional space.

---

## Algorithm Explanation
1. **Sort the Dishes**:
   - Sort the `dishes` array in ascending order. This allows efficient pairing using the two-pointer approach.

2. **Initialize Pointers and Variables**:
   - Use two pointers: `leftPointer` starts at the beginning of the array, and `rightPointer` starts at the end.
   - Initialize `result` to `[0, 0]` and `diff` to `Infinity` to track the closest pair.

3. **Iterate with Two Pointers**:
   - Calculate the sum of the dishes at the two pointers.
   - If the sum equals the target and the pair is valid (one sweet, one savory), return the pair immediately.
   - If the sum is less than the target, update `result` if this pair is closer to the target than the previous closest.
   - Adjust the pointers accordingly:
     - Move the `leftPointer` forward if the sum is less than the target.
     - Move the `rightPointer` backward if the sum exceeds the target.

4. **Return the Result**:
   - After the loop, return the pair stored in `result`.

---

## Examples
### Example 1
**Input:**
```javascript
const dishes = [-3, -2, -1, 5, 7, 10];
const target = 8;
```
**Output:**
```javascript
[-3, 10]
```
**Explanation:**
The closest sum to 8 is achieved by the pair `-3` (sweet) and `10` (savory).

### Example 2
**Input:**
```javascript
const dishes = [-5, -3, 2, 4, 8];
const target = 0;
```
**Output:**
```javascript
[-5, 4]
```
**Explanation:**
The closest sum to 0 is achieved by the pair `-5` (sweet) and `4` (savory).

### Example 3
**Input:**
```javascript
const dishes = [1, 3, 5, 7];
const target = 5;
```
**Output:**
```javascript
[0, 0]
```
**Explanation:**
No valid pair exists since there are no sweet dishes.

---

## Edge Cases
1. **No Sweet or Savory Dishes**:
   - If all numbers are positive or all are negative, return `[0, 0]`.
2. **Single Dish**:
   - If `dishes.length < 2`, return `[0, 0]` as pairing is not possible.
3. **Exact Match**:
   - If a sweet-savory pair perfectly matches the target, return it immediately.

---

## Usage
1. Import the function into your project:
   ```javascript
   const { sweetAndSavory } = require('./sweetAndSavory');
   ```
2. Call the function with your desired inputs:
   ```javascript
   const dishes = [-3, -2, -1, 5, 7, 10];
   const target = 8;
   console.log(sweetAndSavory(dishes, target)); // Output: [-3, 10]
   ```

---

## License
This code is available under the [MIT License](https://opensource.org/licenses/MIT).

