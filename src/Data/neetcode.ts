type dataType = {
  id: number;
  difficulty: "Easy" | "Medium" | "Hard";
  name: string;
  topic: string;
  question: string;
  solution: string;
  approach: string;
};

const problems: dataType[] = [
  {
    id: 1,
    difficulty: "Easy",
    name: "Contains Duplicate",
    topic: "Arrays & Hashing",
    question: `
    Given an integer array nums, return true if any value appears more than once in the array, otherwise return false

    Example 1:
    Input: nums = [1, 2, 3, 3]
    Output: true

    Example 2:
    Input: nums = [1, 2, 3, 4]
    Output: false
    `,
    solution: `
    class Solution {
      hasDuplicate(nums) {
        let map = new Map();

        for (const num of nums) {
          if (map.has(num)) {
            return true;
          } else {
            map.set(num, 1)
          }
        }
        return false;
      }
    }
    `,
    approach: `
    For this question we used Map to store the frequency of each number if this number already existed return true otherwise set it to 1
    `,
  },
  {
    id: 2,
    difficulty: "Easy",
    name: "Valid Diagram",
    topic: "Arrays & Hashing",
    question: `
    Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false,

    An anagram is a string that contains the exact same characters as another string, but the order of the characters can be differnet.

    Example 1:
    Input: s = "racecar", t = "carrace"
    Output: true

    Example 2:
    Input: s = "jar", t = "jam"
    Output: false
    `,
    solution: `
    class Solution {
      isAnagram(s, t) {
        let mapS = new Map();
        let mapT = new Map();

        for (let i = 0; i < s.length; i++) {
          mapS.set(s[i], mapS.get(s[i]) ? mapS.get(s[i]) + 1 : 1);
          mapT.set(t[i], mapT.get(t[i]) ? mapT.get(t[i]) + 1 : 1);
        }
        
        if (s.length !== t.length) return false;

        for (const ch of mapS.keys()) {
          if (!(mapT.has(ch) &&  mapT.get(ch) === mapS.get(ch))) {
            return false;
          }
        }

        return true;
      }
    }
    `,
    approach: `
      We could compare the frequncy of each characters in the string using HashMap
    `,
  },
  {
    id: 3,
    difficulty: "Easy",
    name: "Two Sum",
    topic: "Arrays & Hashing",
    question: `
    Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + num[j] == target and i != j.

    You may assume that every input has exactly one pair of indices i and j that satisfy the condition.

    Example 1:
    Input: nums = [4,5,6], target = 10
    Output: [0, 1]

    Example 2:
    Input: nums = [4, 5, 6], target = 10
    Output: [0, 2]
    `,
    solution: `
    class Solution {
      twoSum(nums, target) {
        let left = 0;
        let right = nums.length - 1;

        while (left < right) {
          let current = nums[left] + nums[right];

          if (current === target) {
            return [left, right];
          } else if(current < target) {
            left++;
          } else {
            right--;
          }
        }
      }
    }
    `,
    approach: `
      We could use HashMap way, which we store key as "target - current" and value as its index and loop until we found a pair
      
      In other hands we could use two pointer to find a pairs 
    `,
  },
  {
    id: 4,
    difficulty: "Medium",
    name: "Group Anagram",
    topic: "Arrays & Hashing",
    question: `
    Given an array of string strs, group all anagrams together into sublists. You may return the output in any order.

    An anagram is a string that contains the next same characters as another string, but the order of the characters can be different

    Example 1:
    Input: strs = ["act","pots","tops","cat","stop","hat"]
    Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]

    Example 2:
    Input: nums = ["x"]
    Output: [["x"]]
    `,
    solution: `
    class Solution {
      groupAnagrams(strs) {
        let map = new Map();
        
        for (const str of strs) {
          const sortedStr = str.split("").sort().join("");

          if (map.has(sortedStr)) {
            map.get(sortedStr).push(str);
          } else {
            let arr = [str];
            map.set(sortedStr, arr);
          }
        }
        
        let res = [];

        for (const array of map.values()) {
          res.push(array);
        } 
        
        return res;
      }
    }
    `,
    approach: `
      For this problem we for each character we should sort them and store in the Map as key and values would be the array of original words
    `,
  },
  {
    id: 5,
    difficulty: "Medium",
    name: "Top K Frequent Elements",
    topic: "Arrays & Hashing",
    question: `
    Given an integer array nums and an integer k, return the k most frequent elements within the array.

    The test cases are generated such that the answer is always unique.

    Example 1:
    Input: nums = [1,2,2,3,3,3], k = 2
    Output: [2,3]

    Example 2:
    Input: nums = [7,7], k = 1
    Output: [7]
    `,
    solution: `
    class Solution {
      topKFrequency(nums, k) {
        let map = new Map();
        
        for (const num of nums) {
          map.set(num, map.get(num) ? map.get(num) + 1 : 1);
        }
        
        let sortedMap = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));
        let res = [];
        let count = 0;
        for (const [key, value] of sortedMap.entries()) {
          if (count < k) {
            res.push(key);
          } else {
            break; 
          }
          count++;
        }

        return res;
      }
    }
    `,
    approach: `
    For this problem we could use map to store the frequency of each number, and store them in the Queue/Array and pop k element out
    `,
  },
  {
    id: 6,
    difficulty: "Medium",
    name: "Encode and Decode Strings",
    topic: "Arrays & Hashing",
    question: `
    Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.

    Example 1:
    Input: ["neet","code","love","you"]
    Output:["neet","code","love","you"]

    Example 2:
    Input: ["we","say",":","yes"]
    Output: ["we","say",":","yes"]
    `,
    solution: `
    class Solution {
      encode(strs) {
        let res = "";

        for (const str of strs) {
          res += (str.length + "#" + str);
        }

        return res;
      }

      encode(str) {
        let res = [];
        let i = 0;

        while (i < str.length) {
          let j = i;

          while (str[i] !== "#") {
            j++;
          }

          let len = parseInt(str.slice(i, j));

          res.push(str.slice(j + 1, j + len + 1));

          i = j + 1 + len;
        }

        return res;
      }
    }
    `,
    approach: `
      No Hints
    `,
  },
  {
    id: 7,
    difficulty: "Medium",
    name: "Products of Array Except Self",
    topic: "Arrays & Hashing",
    question: `
    Given an integer array nums, return an array output where output[i] is the product of all the elements of nums except nums[i].
    
    Example 1:
    Input: nums = [1,2,4,6]
    Output: [48,24,12,8]

    Example 2:
    Input: nums = [-1,0,1,2,3]
    Output: [0,-6,0,0,0]
    `,
    solution: `
    class Solution {
      productExceptSelf(nums) {
        let forward = [...nums];
        let backward = [...nums];

        for (let i = 1; i < nums.length - 1; i++) {
          forward[i] = forward[i-1] * nums[i];
        }
        for (let j = nums.length - 2; j >= 0; j++) {
          backward[j] = backward[j + 1] * nums[j];
        }

        let res = [];
        for (let k = 0; k < nums.length; k++) {
          if (k === 0) {
            res[k] = backward[k + 1];
          } else if (k === nums.length - 1) {
            res[k] = forward[k -1];
          } else {
            res[k] = forward[k - 1] * backward[k + 1]; 
          }
        }
        
        return res;
      }
    }
    `,
    approach: `
      One things I want to notice that when we want to copy the entire element of the array in JS, make sure you do 
      "let forward = [...nums]" instead of "let forward = nums" because if we use the second way, it would create a 
      reference to the original array and both will be affacted but the first way is that you create the shalow copy
      and will not affact the original copy.

      For the approach to this question, we created two array forward (multiply foward) and backward (multiply backward)
    `,
  },
  {
    id: 8,
    difficulty: "Medium",
    name: "Valid Sudoku",
    topic: "Arrays & Hashing",
    question: `
    You are given a 9 x 9 Sudoku board board. A Sudoku board is valid if the following rules are followed:    
    
    1. Each row must contain the digits 1-9 without duplicates.
    2. Each column must contain the digits 1-9 without duplicates.
    3. Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without duplicates.

    Example 1:
    Input: board = 
    [["1","2",".",".","3",".",".",".","."],
    ["4",".",".","5",".",".",".",".","."],
    [".","9","8",".",".",".",".",".","3"],
    ["5",".",".",".","6",".",".",".","4"],
    [".",".",".","8",".","3",".",".","5"],
    ["7",".",".",".","2",".",".",".","6"],
    [".",".",".",".",".",".","2",".","."],
    [".",".",".","4","1","9",".",".","8"],
    [".",".",".",".","8",".",".","7","9"]]

    Output: true


    Example 2:
    Input: board = 
    [["1","2",".",".","3",".",".",".","."],
    ["4",".",".","5",".",".",".",".","."],
    [".","9","1",".",".",".",".",".","3"],
    ["5",".",".",".","6",".",".",".","4"],
    [".",".",".","8",".","3",".",".","5"],
    ["7",".",".",".","2",".",".",".","6"],
    [".",".",".",".",".",".","2",".","."],
    [".",".",".","4","1","9",".",".","8"],
    [".",".",".",".","8",".",".","7","9"]]

    Output: false

    `,
    solution: `
    isValidSudoku(board) {
        let map = new Map();

        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                let val = board[row][col];
                if (val !== ".") {
                    let rowKey = \`\${val} in row \${row}\`;
                    let colKey = \`\${val} in col \${col}\`;
                    let boxKey = \`\${val} in box \${Math.floor(row / 3)}-\${Math.floor(col / 3)}\`;

                    if (map.has(rowKey) || map.has(colKey) || map.has(boxKey)) {
                        return false;
                    }

                    map.set(rowKey, true);
                    map.set(colKey, true);
                    map.set(boxKey, true);
                }
            }
        }
        return true;
    }
`,
    approach: `
      The way to approach this problem is we store them in hashmap as string of row / col and table that element belongs to.
    `,
  },
  {
    id: 9,
    difficulty: "Medium",
    name: "Longest Consecutive Sequence",
    topic: "Arrays & Hashing",
    question: `
    Given an array of integers nums, return the length of the longest consecutive sequence of elements that can be formed.    
    
    A consecutive sequence is a sequence of elements in which each element is exactly 1 greater than the previous element. The elements do not have to be consecutive in the original array.
    
    You must write an algorithm that runs in O(n) time.

    Example 1:
    Input: nums = [2,20,4,10,3,4,5]
    Output: 4

    Example 2:
    Input: nums = [0,3,2,5,4,6,1,1]
    Output: 7
    
    `,
    solution: `
    class Solution {
      longestConsecutive(nums) {
        const set = new Set(nums);
        let longest = 1;

        for (let num of nums) {
          if (!set.has(num - 1)) {
            let length = 1;
            while (set.has(num + length)) {
              length++;
            }
            
            longest = Math.max(longest, length);
          }
        }

        return longest;
      }
    }
    `,
    approach: `
      The brute tio solve this problem is loop through the array and at each element we find the max continuous part we could get and store it

      Instead do it for each element we only do it for the "start elment which is the one dont have num - 1" and find the continuous for those

      O(n)
    `,
  },
  {
    id: 10,
    difficulty: "Easy",
    name: "Valid Palindrome",
    topic: "Two Pointers",
    question: `
    Given a string s, return true if it is a palindrome, otherwise return false.    
        
    A palindrome is a string that reads the same forward and backward. It is also case-insensitive and ignores all non-alphanumeric characters.
    
    Note: Alphanumeric characters consist of letters (A-Z, a-z) and numbers (0-9).

    Example 1:
    Input: s = "Was it a car or a cat I saw?"
    Output: true

    Example 2:
    Input: s = "tab a cat"
    Output: false
    
    `,
    solution: `
    class Solution {
      isPalindrome(s) {
        s = s.toLowerCase();
        const arr = [...s].filter((char) => this.isAlphanumeric(char));

        let left = 0;
        let right = arr.length - 1;

        while (left < right) {
          if (arr[left] !== arr[right]) {
            return false;
          }
          left++;
          right--;
        }
        return true;
      }
      isAlphanumeric(char) {
        const regex = /^[a-zA-Z0-9]*/;
        return regex.test(char);
      }
    }
    `,
    approach: `
      The only hard part of this problem is regex to eliminate white space and special characters.
    `,
  },
  {
    id: 11,
    difficulty: "Medium",
    name: "TWO SUM V2",
    topic: "Two Pointers",
    question: `
    Given an array of integers numbers that is sorted in non-decreasing order.

    Return the indices (1-indexed) of two numbers, [index1, index2], such that they add up to a given target number target and index1 < index2. Note that index1 and index2 cannot be equal, therefore you may not use the same element twice.

    There will always be exactly one valid solution.

    Your solution must use O(1) additional space.

    Example 1:
    Input: numbers = [1,2,3,4], target = 3
    Output: [1,2]
    
    `,
    solution: `
    class Solution {
      twoSum(numbers, target) {
        let left = 0;
        left right = numbers.length - 1;

        while (left < right) {
          let current = numbers[left] + numbers[right];

          if (current === target) {
            return [left+1, right+1];
          } else if (current < target) {
            left++;
          } else {
            right--;
          }
        }
      }
    }
    `,
    approach: `
      Easy Easy lemon tree
    `,
  },
  {
    id: 12,
    difficulty: "Medium",
    name: "3SUM",
    topic: "Two Pointers",
    question: `
    Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] where nums[i] + nums[j] + nums[k] == 0, and the indices i, j and k are all distinct.

    The output should not contain any duplicate triplets. You may return the output and the triplets in any order.

    Example 1:
    Input: nums = [-1,0,1,2,-1,-4]
    Output: [[-1,-1,2],[-1,0,1]]

    Example 2:
    Input: nums = [0,1,1]
    Output: []
    
    `,
    solution: `
    class Solution {
      threeSum(nums) {
        let res = [];
        nums = nums.sort((a, b) => a - b);

        for (let i = 0; i < nums.length - 2; i++) {
          if (i > 0 && nums[i] === nums[i + 1]) continue;
          const target = nums[i];

          let left = i + 1;
          let right = nums.length - 1;

          while (left < right) {
            
            while (left < right && nums[left] === nums[left + 1]) left++;
            while (left < right && nums[right] === nums[right - 1]) right--;

            const sum = nums[left] + nums[right];

            if (sum + target === 0) {
              res.push(taget, nums[left], nums[right]);

              left++;
              right--;
            } else if (sum + target < 0) {
              left++; 
            } else {
              right--;
            }
          }
        }
        return res;
      }
    }
    `,
    approach: `
      This is tricky question, we could go through every element of the array and split array from index + 1 to end, and set up two pointer
      that would work but that is really hard to remove dupplicated array at the end before we return, for example res = [[1, 1, -2], [1, 1, -2]] 
      if we put it to the set and like "const set = new Set(res)" that would not work instead we have to convert them to String before put it to the set
      "const set = new Set(arr.map((a) => JOSN.stringify(a))) return Array.from(set).map(str => JSON.parse(str))"

      The easy way to solve is eleminate the duplicated case on the way we solving, so we sort the original array, and use while loop to
      move on if we see the next number same as current, do the same logic when we choose left and right pointer. One last thing I we need to
      remember is when we found a pair that plus sum to be 0 we do not stop but keep increment both left and right
    `,
  },
  {
    id: 13,
    difficulty: "Medium",
    name: "CONTAIN WITH MOST WATER",
    topic: "Two Pointers",
    question: `
    You are given an integer array heights where heights[i] represents the height of the ith bar.

    You may choose any two bars to form a container. Return the maximum amount of water a container can store.

    Example 1:
    Input: height = [1,7,2,5,4,7,3,6]
    Output: 36

    Example 2:
    Input: height = [2,2,2]
    Output: 4
    
    `,
    solution: `
    class Solution {
      maxArea(heights) {
        let max = 0;
        let left = 0;
        let right = heights.length - 1

        while (left < right) {
          cosnt h = Math.min(heights[left], heights[right]);
          const w = right - left;
          const area = w * h;
          max = Math.max(max, area);

          if (heights[left] <= heights[right]) {
            left++;
          } else {
            right--;
          }
        }
        return max
      }
    }
    `,
    approach: `
      Move smaller pointer to get a chance to have chance to get bigger value.
    `,
  },
  {
    id: 14,
    difficulty: "Hard",
    name: "TRAPPING RAIN WATER",
    topic: "Two Pointers",
    question: `
    You are given an array of non-negative integers height which represent an elevation map. Each value height[i] represents the height of a bar, which has a width of 1.

    Return the maximum area of water that can be trapped between the bars.

    Example 1:
    Input: height = [0,2,0,3,1,0,1,3,2,1]
    Output: 9
    
    `,
    solution: `
    class Solution {
        public int trap(int[] height) {
            if (height == null || height.length == 0) {
                return 0;
            }

            int n = height.length;
            int[] maxLeft = new int[n];
            int[] maxRight = new int[n];

            // Fill maxLeft array
            maxLeft[0] = height[0];
            for (int i = 1; i < n; i++) {
                maxLeft[i] = Math.max(maxLeft[i - 1], height[i]);
            }

            // Fill maxRight array
            maxRight[n - 1] = height[n - 1];
            for (int i = n - 2; i >= 0; i--) {
                maxRight[i] = Math.max(maxRight[i + 1], height[i]);
            }

            // Calculate the trapped water
            int trappedWater = 0;
            for (int i = 0; i < n; i++) {
                trappedWater += Math.min(maxLeft[i], maxRight[i]) - height[i];
            }

            return trappedWater;
        }
    }
    `,
    approach: `
      Will go back
    `,
  },
  {
    id: 15,
    difficulty: "Medium",
    name: "MINIMUM STACK",
    topic: "Stack",
    question: `
    Design a stack class that supports the push, pop, top, and getMin operations.

    MinStack() initializes the stack object.
    void push(int val) pushes the element val onto the stack.
    void pop() removes the element on the top of the stack.
    int top() gets the top element of the stack.
    int getMin() retrieves the minimum element in the stack.

    Each function should run in O(1)

    Example 1:

    Input: ["MinStack", "push", 1, "push", 2, "push", 0, "getMin", "pop", "top", "getMin"]

    Output: [null,null,null,null,0,null,2,1]

    Explanation:
    MinStack minStack = new MinStack();
    minStack.push(1);
    minStack.push(2);
    minStack.push(0);
    minStack.getMin(); // return 0
    minStack.pop();
    minStack.top();    // return 2
    minStack.getMin(); // return 1
    `,
    solution: `
      class MinStack {
      constructor() {
        this.stack = [];
        this.minStack = [];
      }

      /**
       * @param {number} val
       * @return {void}
       */
      push(val) {
        this.stack.push();
        val = Math.min(val, this.stack.length === 0 ? val : this.stack[this.stack.length - 1]);
        this.stack.push(val);
      }

      /**
       * @return {void}
       */
      pop() {
        this.stack.pop();
        this.minStack.pop();
      }

      /**
       * @return {number}
       */
      top() {
          return this.stack[this.stack.length - 1];
      }

      /**
       * @return {number}
       */
      getMin() {
        return this.minStack[this.minStack.length - 1];
      }
    }
    `,
    approach: `
      Every funtion is O(1) in term of time complexity, we use the minStack to make sure at every point of the stack
      we know the min value at the index.
    `,
  },
  {
    id: 16,
    difficulty: "Medium",
    name: "EVALUATE REVERSE POLISH NOTATION",
    topic: "Stack",
    question: `
    You are given an array of strings tokens that represents a valid arithmetic expression in Reverse Polish Notation.

    Return the integer that represents the evaluation of the expression.

    The operands may be integers or the results of other operations.
    The operators include '+', '-', '*', and '/'.
    Assume that division between integers always truncates toward zero.

    Example 1:

    Input: tokens = ["1","2","+","3","*","4","-"]
    Output: 5

    Explanation: ((1 + 2) * 3) - 4 = 5
    `,
    solution: `
      class Solution {
        evalRPN(tokens) {
          let arr = ["+", "-", "*", "/"];
          let stack = [];

          for (const t of tokens) {
            if (arr.includes(t)) {
              let num1 = Number(stack.pop());
              let num2 = Number(stack.pop());

              switch (t) {
                case "+":
                  stack.push(num2 + num1);
                  break;
                case "-": 
                  stack.push(num2 - num1);
                  break;
                case "*":
                  stack.push(num2 * num1);
                  break;
                case "/":
                  stack.push(Math.trunc(num2 / num1));
                  break;
              } else {
                stack.push(t);
              }
            }
          }
          
          return stack[0];
        }
      }

    `,
    approach: `
      Tips as soon as we encounter a operands pop 2 num out of stack and push the result back in until we done.
    `,
  },
  {
    id: 17,
    difficulty: "Medium",
    name: "GENTERATE PARENTHESES",
    topic: "Stack",
    question: `
    You are given an integer n. Return all well-formed parentheses strings that you can generate with n pairs of parentheses.

    Example 1:

    Input: n = 1
    Output: ["()"]

    Example 2:

    Input: n = 3
    Output: ["((()))","(()())","(())()","()(())","()()()"]
    `,
    solution: `
    class Solution {
        generateParenthesis(n) {
          let stack = [];
          let res = [];

          function backtrack(open, close) { 
            if (open === n && close === n) {
              res.push(stack.join(""));
              return;
            }

            if (open < n) {
              stack.push("(");
              backtrack(open + 1, close);
              stack.pop();
            }

            if (close < open) {
              stack.push(")");
              backtrack(open, close + 1);
              stack.pop();
            }
          }
          backtrack(0, 0);

          return res;
        }
    }
    `,
    approach: `
      Rules:
      1. If open = close = n -> considered as res case
      2. We could add "(" as long as open < n
      3. We could add ")" as long as close < open

      Tracing example:
      ((())) -> ((()) -> ((() -> ((( -> (( -> (() -> (()( -> (()() -> (()()) -> (()() -> (()( -> (()) -> (())( -> (())()
    `,
  },
  {
    id: 18,
    difficulty: "Medium",
    name: "DAILY TEMPERATURES",
    topic: "Stack",
    question: `
    You are given an array of integers temperatures where temperatures[i] represents the daily temperatures on the ith day.
    
    Return an array result where result[i] is the number of days after the ith day before a warmer temperature appears on a future day. If there is no day in the future where a warmer temperature will appear for the ith day, set result[i] to 0 instead.

    Example 1:

    Input: temperatures = [30,38,30,36,35,40,28]
    Output: [1,4,1,2,1,0,0] 

    Example 2:

    Input: temperatures = [22,21,20]
    Output: [0,0,0]
    `,
    solution: `
    class Solution {
        dailyTemperatures(temperatures) {
          let stack = [];
          let res = [...temperatures].fill(0);

          for (let i = 0; i < temperatures.length; i++) {
            while (stack.length !== 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
              let prev = stack.pop();
              res[prev] = i - prev;
            }
            stack.push(i);
          }
          
          return res;
        }
    }
    `,
    approach: `
      We always compare the current temperatures with the temperatures at top of the stack.
      
      [78, 76, 74, 77, 79] -> Stack [0, 1, 2] is when we hit 77 then 77 knock off index 2 (in res arr at index 2 -> 3 - 2),
      then keep checking 77 vs index 1 (currently stack [0, 1]) we knock it off too (in res arr at index 1 -> 3 - 1) then 77 
      cant knock off index 1 since it is 78 so currently stack is [1, 3] then go on.
    `,
  },
  {
    id: 19,
    difficulty: "Medium",
    name: "CAR FLEET",
    topic: "Stack",
    question: `
    There are n cars traveling to the same destination on a one-lane highway.
    You are given two arrays of integers position and speed, both of length n.  

    position[i] is the position of the ith car (in miles)
    speed[i] is the speed of the ith car (in miles per hour)
    The destination is at position target miles.

    A car can not pass another car ahead of it. It can only catch up to another car and then drive at the same speed as the car ahead of it.

    A car fleet is a non-empty set of cars driving at the same position and same speed. A single car is also considered a car fleet.

    If a car catches up to a car fleet the moment the fleet reaches the destination, then the car is considered to be part of the fleet.

    Return the number of different car fleets that will arrive at the destination.

    Example 1:
    Input: target = 10, position = [1,4], speed = [3,2]
    Output: 1

    Explanation: The cars starting at 1 (speed 3) and 4 (speed 2) become a fleet, meeting each other at 10, the destination.

    Example 2: 
    Input: target = 10, position = [4,1,0,7], speed = [2,2,1,1]
    Output: 3

    `,
    solution: `
    class Solution {
        carFleet(target, position, speed) {
          let cars = [];
          let stack = [];

          for (let i = 0; i < position.length; i++) {
            cars.push([position[i], speed[i]]);
          }
          
          cars.sort((a, b) => b[0] - a[0]);

          for (const [p, s] of cars) {
            stack.push((target - p) / s);

            if (stack.length >= 0 && stack[stack.length -1] <= stack[stack.length -2]) {
              stack.pop();
            }
          }
          
          return stack.length;
        }
    }
    `,
    approach: `
      Car fleet means how many GROUP of cars can catch up each other when they are ALL finished the race.

      We store the position and speed as a pair and sort them backward respect to position because later on when we
      iterate through the cars array we went other way. then for the stack as soon as had 2 time in the stack we would consider
      to pop. For example [3, 3] -> then we pop first 3 then [3, 4] -> we keep it as it is and go on.
      
    `,
  },
  {
    id: 20,
    difficulty: "Hard",
    name: "LARGEST RECTANGLE IN HISTOGRAM",
    topic: "Stack",
    question: `
    You are given an array of integers heights where heights[i] represents the height of a bar. The width of each bar is 1.
    Return the area of the largest rectangle that can be formed among the bars.

    Example 1:
    Input: heights = [7,1,7,2,2,4]
    Output: 8

    Explanation: The cars starting at 1 (speed 3) and 4 (speed 2) become a fleet, meeting each other at 10, the destination.

    Example 2: 
    Input: heights = [1,3,7]
    Output: 7

    `,
    solution: `
    class Solution {
        largestRectangleArea(heights) {
          const n = heights.length;
          let maxArea = 0;
          const stack = [];

          for (let i = 0; i <= n; i++) {
              while (
                  stack.length &&
                  (i === n || heights[stack[stack.length - 1]] >= heights[i])
              ) {
                  const height = heights[stack.pop()];
                  const width =
                      stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
                  maxArea = Math.max(maxArea, height * width);
              }
              stack.push(i);
          }
          return maxArea;
        }
    }
    `,
    approach: `
      Will go back
      
    `,
  },
  {
    id: 21,
    difficulty: "Easy",
    name: "Binary Search",
    topic: "Binary Search",
    question: `
    You are given an array of distinct integers nums, sorted in ascending order, and an integer target.
    
    Implement a function to search for target within nums. If it exists, then return its index, otherwise, return -1.

    Your solution must be in O(logn) time

    Example 1:
    Input: nums = [-1,0,2,4,6,8], target = 4
    Output: 3

    Example 2: 
    Input: nums = [-1,0,2,4,6,8], target = 3
    Output: -1

    `,
    solution: `
    class Solution {
        search(nums, target) {
          let left = 0;
          let right = nums.length -1;

          while (left <= right) {

            let middle = Math.floor(left + (right - left) / 2);

            let current = nums[middle];

            if (target === current) {
              return middle;
            } else if (target < current) {
              right = middle - 1;
            } else {
              left = middle + 1;  
            }
          }

          return -1;
        }
    }
    `,
    approach: `
      Note: middle calculate by "left + (right - left) / 2" to prevent overflow
    `,
  },
  {
    id: 22,
    difficulty: "Medium",
    name: "SEARCH A 2D MATRIX",
    topic: "Binary Search",
    question: `
    You are given an m x n 2-D integer array matrix and an integer target.

    - Each row in matrix is sorted in non-decreasing order.
    - The first integer of every row is greater than the last integer of the previous row.

    The Time Complexity must be 0(log(m*n))

    Return true if target exists within matrix or false otherwise.

    Example 1:
    Input: matrix = [[1,2,4,8],[10,11,12,13],[14,20,30,40]], target = 10
    Output: true

    Example 2: 
    Input: matrix = [[1,2,4,8],[10,11,12,13],[14,20,30,40]],
    target = 15

    `,
    solution: `
    class Solution {
        searchMatrix(matrix, target) {
          let start = 0;
          let end = matrix.length -1;
          let potentialR = 0;


          // Only compare to last value of each row
          while (start <= end) {
            let middle = Math.floor(start + (end - start) / 2);

            if (target === matrix[middle][matrix[middle].length - 1]) {
              return true;
            } else if (target < matrix[middle][matrix[middle].length - 1]) {
              end = middle - 1;
            } else {
              start = middle + 1;
            }
            potentialR = middle;
          }

          // apply Binary Search to that row
          start = 0;
          end = matrix[middle].length - 1;

          while(start <= end) {
            middle = Math.floor(start + (end - start) / 2 );

            if (target === matrix[potentialR][middle]) {
              return true;
            } else if (target < matrix[potentialR][middle]) {
              end = middle - 1;
            } else {
              start = middle + 1;
            }
          }

          return false;
        }
    }
    `,
    approach: `
      If we choose the brute force which just loop through every index would cost O(m*n). 
      If we choose to binary search for every row it would cost O(m*log(n))
      If we find the potential row and apply Binary Search on that row it would cost O(logm) + O(logn) = O(log(m*n))
    `,
  },
  {
    id: 23,
    difficulty: "Medium",
    name: "KOKO EATING BANANAS",
    topic: "Binary Search",
    question: `
    You are given an integer array piles where piles[i] is the number of bananas in the ith pile. You are also given an integer h, which represents the number of hours you have to eat all the bananas.

    You may decide your bananas-per-hour eating rate of k. Each hour, you may choose a pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, you may finish eating the pile but you can not eat from another pile in the same hour.

    Return the minimum integer k such that you can eat all the bananas within h hours.

    Example 1:
    Input: piles = [1,4,3,2], h = 9
    Output: 2

    Explanation: With an eating rate of 2, you can eat the bananas in 6 hours. With an eating rate of 1, you would need 10 hours to eat all the bananas (which exceeds h=9), thus the minimum eating rate is 2.

    `,
    solution: `
    class Solution {
        minEatingSpeed(piles, h) {
          let left = 0;
          let right = Math.max(...piles);

          while (left < right) {
            let time = 0;
            let middle = Math.floor(left + (right - left) / 2); // a current rate

            for (const b of piles) {
              time += Math.floor(b / middle);
            }

            if (time <= h) {
              right = middle - 1;
            } else {
              left = middle + 1;
            }
          }

          return left;
        }
    }
    `,
    approach: `
      We can apply binary search on the eating rate between 1 and Math.max(...piles). The middle value is the current rate, and we use it to calculate the total time needed to consume all the piles. If the total time <= h, then the rate is valid, but we can try lowering it (since our goal is to find the minimum rate) by setting right = mid - 1. Eating slower will definitely increase the total time, but we want to keep it within <= h. Otherwise, if the total time > h, it means the current rate is too slow, so we increase it by setting left = mid + 1. In the end, left will store the smallest valid rate, which is our answer.
    `,
  },
  {
    id: 24,
    difficulty: "Medium",
    name: "FIND MINIMUM IN ROTATED SORTED ARRAY",
    topic: "Binary Search",
    question: `
    You are given an array of length n which was originally sorted in ascending order. It has now been rotated between 1 and n times. For example, the array nums = [1,2,3,4,5,6] might become:

    [3,4,5,6,1,2] if it was rotated 4 times.
    [1,2,3,4,5,6] if it was rotated 6 times.
    Notice that rotating the array 4 times moves the last four elements of the array to the beginning. Rotating the array 6 times produces the original array.

    Assuming all elements in the rotated sorted array nums are unique, return the minimum element of this array.

    Solve in O(logn);


    Example 1:
    Input: nums = [3,4,5,6,1,2]
    Output: 1


    `,
    solution: `
    class Solution {
      findMin(nums) {
        let left = 0, right = nums.length -1;

        while (left < right) {
            let mid = Math.floor(left + (right - left) / 2);
            if (nums[mid] > nums[right]) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        return nums[left];
      }
    }
    `,
    approach: `
      Binary Search on this array if nums[mid] < nums[right] which means the the rotated part / the part that contains min value is there so would could do left = mid + 1, otherwise when nums[mid] < nums[right] that means the nums itself and the front would contains the mins like [4, 5, 6, 7, 0, 1] assume prvious middle was at value 1 can we just cut last part off. 

      And we could either return nums[left] or nums[right], just think about the case [2, 3] when it has only 2 values in array, so nums[mid] = 2 <= 3 so right = mid = 1 at that point left = right = 1.
    `,
  },
  {
    id: 25,
    difficulty: "Medium",
    name: "SEARCH IN ROTATED SORTED ARRAY",
    topic: "Binary Search",
    question: `
    You are given an array of length n which was originally sorted in ascending order. It has now been rotated between 1 and n times. For example, the array nums = [1,2,3,4,5,6] might become:

    [3,4,5,6,1,2] if it was rotated 4 times.
    [1,2,3,4,5,6] if it was rotated 6 times.
    Notice that rotating the array 4 times moves the last four elements of the array to the beginning. Rotating the array 6 times produces the original array.

    Assuming all elements in the rotated sorted array nums are unique, return the minimum element of this array.

    Solve in O(logn);


    Example 1:
    Input: nums = [3,4,5,6,1,2], target = 1
    Output: 4

    `,
    solution: `
    class Solution {
      search(nums, target) {
        let left = 0, right = nums.length -1;

        while (left <= right) {
          let mid = Math.floor((right + left)/2);
          
          if (nums[mid] === target) {
            return mid;
          } else if (nums[left] < nums[mid]) { // left side is sorted
            if (target >= nums[left] && target < nums[mid]) {
              right = mid - 1;
            } else {
              left = mid + 1;
            }
          } else {
            if (target > nums[mid] && target <= nums[right]) {
              left = mid + 1;
            } else {
              right = mid - 1;  
            }
          }
        }

        return -1; 
      }
    }
    `,
    approach: `
      Base on the value of at mid we could say which part is sorted, and then check if our target is on that range, otherwise check the opposite range.
    `,
  },
  {
    id: 26,
    difficulty: "Medium",
    name: "SEARCH IN ROTATED SORTED ARRAY",
    topic: "Binary Search",
    question: `
    Implement a time-based key-value data structure that supports:

    Storing multiple values for the same key at specified time stamps
    Retrieving the key's value at a specified timestamp
    Implement the TimeMap class:

    TimeMap() Initializes the object.
    void set(String key, String value, int timestamp) Stores the key key with the value value at the given time timestamp.
    String get(String key, int timestamp) Returns the most recent value of key if set was previously called on it and the most recent timestamp for that key prev_timestamp is less than or equal to the given timestamp (prev_timestamp <= timestamp). If there are no values, it returns "".
    Note: For all calls to set, the timestamps are in strictly increasing order.

    Input:
    ["TimeMap", "set", ["alice", "happy", 1], "get", ["alice", 1], "get", ["alice", 2], "set", ["alice", "sad", 3], "get", ["alice", 3]]

    Output:
    [null, null, "happy", "happy", null, "sad"]

    Explanation:
    TimeMap timeMap = new TimeMap();
    timeMap.set("alice", "happy", 1);  // store the key "alice" and value "happy" along with timestamp = 1.
    timeMap.get("alice", 1);           // return "happy"
    timeMap.get("alice", 2);           // return "happy", there is no value stored for timestamp 2, thus we return the value at timestamp 1.
    timeMap.set("alice", "sad", 3);    // store the key "alice" and value "sad" along with timestamp = 3.
    timeMap.get("alice", 3);           // return "sad"

    `,
    solution: `
      class TimeMap {
        constructor() {
          this.keyStore = new Map();
        }

        /**
         * @param {string} key
         * @param {string} value
         * @param {number} timestamp
         * @return {void}
         */
        set(key, value, timestamp) {
          if (!this.keyStore.has(key)) {
              this.keyStore.set(key, []);
          }

          this.keyStore.get(key).push([timestamp, value]);
        }

        /**
         * @param {string} key
         * @param {number} timestamp
         * @return {string}
         */
        get(key, timestamp) {
          const values = this.keyStore.get(key) || [];

          let left = 0;
          let right = values.length - 1;
          let res = "";

          while (left <= right) {
            let mid = Math.floor((right + left) / 2);

            if (values[mid][0] <= timestamp) {
                res = values[mid][1];
                left = mid + 1;
            } else {
                right = mid - 1;
            }
          }

        return res;
      }
    }
    `,
    approach: `
      We dont need to sort it before Binary Search because "for all calls to set, the timestamps are in strictly increasing order."    `,
  },
  {
    id: 27,
    difficulty: "Easy",
    name: "REVERSE LINKED LIST",
    topic: "Linked List",
    question: `
    Given the beginning of a singly linked list head, reverse the list, and return the new beginning of the list.

    Example 1: 
    Input: head = [0,1,2,3]
    Output: [3,2,1,0]

    `,
    solution: `
      /**
       * Definition for singly-linked list.
       * class ListNode {
       *     constructor(val = 0, next = null) {
       *         this.val = val;
       *         this.next = next;
       *     }
       * }
       */

      class Solution {
          /**
           * @param {ListNode} head
           * @return {ListNode}
           */
          reverseList(head) {
              let prev = null;
              let curr = head;

              while (curr) {
                  let temp = curr.next;
                  curr.next = prev;
                  prev = curr;
                  curr = temp;

                  console.log(curr);
              }

              return prev;
          }
      }
    `,
    approach: `
      Explaination: So the goal is to reverse the linkedlist backward, so we use prev node which would store null at the beginning, so using while loop as long as the current node !== null then we move on, we set current.next = prev then prev = current and the reason why we use temp = current.next at very beginning was because we want to store it (to move to new node to satisfy the condition of why loop) before change it.
`,
  },
  {
    id: 28,
    difficulty: "Easy",
    name: "MERGE TWO SORTED LINKED LIST",
    topic: "Linked List",
    question: `
    You are given the heads of two sorted linked lists list1 and list2.

    Merge the two lists into one sorted linked list and return the head of the new sorted linked list.

    The new list should be made up of nodes from list1 and list2.

    Example 1: 
    Input: list1 = [1,2,4], list2 = [1,3,5]
    Output: [1,1,2,3,4,5]

    `,
    solution: `
      /**
       * Definition for singly-linked list.
       * class ListNode {
       *     constructor(val = 0, next = null) {
       *         this.val = val;
       *         this.next = next;
       *     }
       * }
       */

      class Solution {
          /**
           * @param {ListNode} head
           * @return {ListNode}
           */
          mergeTwoLists(list1, list2) {
            const dummy = new ListNode(0, null);
            let node = dummy;

            while (list1 && list2) {
              if (list1.val <= list2.val) {
                node.next = list1;
                list1 = list1.next;
              } else {
                node.next = list2;
                list2 = list2.next;
              }
              node = node.next;
            }
            
            return dummy.next;
          }
      }
    `,
    approach: `
      The reason why we use dummy node is dummy node would store the same beginning memory address of the node, we do that because the node always need to updated.

      We find list.next first then set node = node.next, instead of setting node = list1 or list2 because we need a connection between the nodes. Otherwise we would lose the node.
    `,
  },
  {
    id: 29,
    difficulty: "Easy",
    name: "LINKED LIST CYCLE DECTION",
    topic: "Linked List",
    question: `
    Given the beginning of a linked list head, return true if there is a cycle in the linked list. Otherwise, return false.

    There is a cycle in a linked list if at least one node in the list can be visited again by following the next pointer.

    Internally, index determines the index of the beginning of the cycle, if it exists. The tail node of the list will set it's next pointer to the index-th node. If index = -1, then the tail node points to null and no cycle exists.

    Note: index is not given to you as a parameter.

    Example 1: 
    Input: head = [1,2,3,4], index = 1
    Output: true

    `,
    solution: `
      /**
       * Definition for singly-linked list.
       * class ListNode {
       *     constructor(val = 0, next = null) {
       *         this.val = val;
       *         this.next = next;
       *     }
       * }
       */

      class Solution {
          /**
           * @param {ListNode} head
           * @return {ListNode}
           */
          hasCycle(list1, list2) {
            let slow = head;
            let fast = head;

            while (fast && fast.next) {
              slow = slow.next;
              fast = fast.next.next;

              if (slow === fast) {
                return true;
              }
            }

            return false;
          }
      }
    `,
    approach: `
      We use the idea of slow and fast pointers, the fast pointer always catch up the slow at some point if there is an cycle.
    `,
  },
  {
    id: 30,
    difficulty: "Medium",
    name: "REORDER LINKED LIST",
    topic: "Linked List",
    question: `
    You are given the head of a singly linked-list.

    The positions of a linked list of length = 7 for example, can intially be represented as:

    [0, 1, 2, 3, 4, 5, 6]

    Reorder the nodes of the linked list to be in the following order:

    [0, 6, 1, 5, 2, 4, 3]

    Notice that in the general case for a list of length = n the nodes are reordered to be in the following order:

    [0, n-1, 1, n-2, 2, n-3, ...]

    You may not modify the values in the list's nodes, but instead you must reorder the nodes themselves.

    `,
    solution: `
      /**
       * Definition for singly-linked list.
       * class ListNode {
       *     constructor(val = 0, next = null) {
       *         this.val = val;
       *         this.next = next;
       *     }
       * }
       */

      class Solution {
          /**
           * @param {ListNode} head
           * @return {void}
           */
          reorderList(head) {
            let node = [];
            let curr = head;

            while (curr) {
              node.push(curr);
              curr = curr.next;
            }

            let left = 0; right = node.length - 1;

            while (left < right) {
              node[left].next = node[right];
              left++;

              if (left === right) break;
              
              node[right].next = node[left];
              right--;
            }

            node[left].next = null;
          }
      }
    `,
    approach: `
      We store every nodes and its connection into an array, then reorder the connection.

      At first we may wondering what was the relation of node array and curr, so for example if we have [1,2,3,4] as each point to each other and 4 point to the null.

      So node = [1->2->3->4->null, 2->3->4->null, 3->4->null, 4->null]

      By set "let curr = head" we would not mess the order of head when we store value into node array.

      Then set two pointer throught the arr and set up the connection of each node as we want as 0 (left) -> n - 1 (right) -> 2 (left)-> n - 2 (right) and so on.
    `,
  },
  {
    id: 31,
    difficulty: "Medium",
    name: "REMOVE NODE FROM THE END OF LINKED LIST",
    topic: "Linked List",
    question: `
    You are given the beginning of a linked list head, and an integer n.

    Remove the nth node from the end of the list and return the beginning of the list.

    Example 1:
    Input: head = [1,2,3,4], n = 2
    Output: [1,2,4]

    Example 2:
    Input: head = [5], n = 1
    Output: []

    Example 3:
    Input: head = [1,2], n = 2
    Output: [2]


    `,
    solution: `
      /**
       * Definition for singly-linked list.
       * class ListNode {
       *     constructor(val = 0, next = null) {
       *         this.val = val;
       *         this.next = next;
       *     }
       * }
       */

      class Solution {
        /**
         * @param {ListNode} head
         * @param {number} n
         * @return {ListNode}
         */
        removeNthFromEnd(head, n) {
          // reverse 
          let prev = null, curr = head;
          while (curr) {
            let temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
          }

          // remove
          let dummy = new ListNode(0, prev);
          curr = dummy;
          let pos = 0;

          while (pos < n - 1 && curr.next) {
            curr = curr.next;
            pos++;
          }

          if (curr.next) curr.next = curr.next.next;

          // reverse back
          prev = null;
          curr = dummy.next;

          while (curr) {
            let temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
          }
          return prev;
        }
      }
    `,
    approach: `
      This is not a optimal solution, the idea was we could reverse the linked list since it is hard to track them and remove backward.

      So we reverse the list then remove the target node and reverse it back to the orignal order then return.
    `,
  },
  {
    id: 32,
    difficulty: "Easy",
    name: "BEST TIME TO BUT AND SELL STOCK",
    topic: "Sliding Window",
    question: `
    You are given an integer array prices where prices[i] is the price of NeetCoin on the ith day.

    You may choose a single day to buy one NeetCoin and choose a different day in the future to sell it.

    Return the maximum profit you can achieve. You may choose to not make any transactions, in which case the profit would be 0.

    Example 1:
    Input: prices = [10,1,5,6,7,1]
    Output: 6
    Explanation: Buy prices[1] and sell prices[4], profit = 7 - 1 = 6.

    Example 2:
    Input: prices = [10,8,7,5,2]
    Output: 0
    Explanation: No profitable transactions can be made, thus the max profit is 0.


    `,
    solution: `
      class Solution {
        /**
         * @param {number[]} prices
         * @return {number}
         */
        maxProfit(prices) {
          let profit = 0;
          let left = 0, right = 1;

          while (right < prices.length) {
            if (prices[left] < prices[right]) {
              profit = Math.max(profit, prices[right] - prices[left]);
            } else {
              left = right;
            }
            right++;
          }

          return profit;
        }
      }
    `,
    approach: `
      We are using sliding window technique, which set first pointer at day 0 and second at day 1 at first.

      So we always move the right pointer and only move left when prices at left >= prices at right.
      The reason why we dont need to care what if we miss the price on the left to form the best profit, the answer is WHAT A DUMB QUESTION because that why we move left = right and they are at smaller value now.
    `,
  },
  {
    id: 33,
    difficulty: "Medium",
    name: "LONGEST SUBSTRING WITHOUT REPEATING CHARACTERS",
    topic: "Sliding Window",
    question: `
    Given a string s, find the length of the longest substring without duplicate characters.

    A substring is a contiguous sequence of characters within a string.

    Example 1:
    Input: s = "zxyzxyz"
    Output: 3

    Explanation: The string "xyz" is the longest without duplicate characters.

    Example 2:
    Input: s = "xxxx"
    Output: 1


    `,
    solution: `
      class Solution {
        /**
         * @param {string} s
         * @return {number}
         */
        lengthOfLongestSubstring(s) {
          let set = new Set();
          let left = 0; 
          let max = 0; 

          for (let right = 0; right < s.length; right++) {
            while(set.has(s[right])) {
              set.delete(s[left]);
              left++;
            }
            set.add(s[right]);
            max = Math.max(max, right - left + 1);
          }

          return max;

        }
      }
    `,
    approach: `
      We use Set in this case since it has delete funtion that could delete everywhere, but instead we could use Queue and use shift() as a pop() in JS.
      
      Check every element to see if set have it if it does pop until its not and store the max.
    `,
  },
  {
    id: 34,
    difficulty: "Medium",
    name: "PERMUATION IN STRING",
    topic: "Sliding Window",
    question: `
    You are given two strings s1 and s2.

    Return true if s2 contains a permutation of s1, or false otherwise. That means if a permutation of s1 exists as a substring of s2, then return true.

    Both strings only contain lowercase letters.

    Example 1:
    Input: s1 = "abc", s2 = "lecabee"
    Output: true

    Explanation: The substring "cab" is a permutation of "abc" and is present in "lecabee".

    Example 2:
    Input: s1 = "abc", s2 = "lecaabee"
    Output: false


    `,
    solution: `
    class Solution {
      /**
       * @param {string} s1
       * @param {string} s2
       * @return {boolean}
       */
      checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false; // s1 is always the pattern

        let sorter = s1.split("").sort().join("");

        for (let i = 0; i <= s2.length - s1.length; i++) {
          let current = s2.slice(i, i + s1.length).split("").sort().join("");
          if (current === sorter) return true;
        }
        return false;
      }
    }
    `,
    approach: `
      This is not optimal solution
    `,
  },
];

export default problems;
