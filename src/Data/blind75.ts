import pic1 from "../utils/images/leetcode70.png";

type dataType = {
  id: number;
  difficulty: "Easy" | "Medium" | "Hard";
  img: string;
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
    img: pic1,
    name: "Climbing Stairs",
    topic: "N/A",
    question: `
    You are climbing a staircase. It takes n steps to reach the top.

    Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

    

    Example 1:

    Input: n = 2
    Output: 2
    Explanation: There are two ways to climb to the top.
    1. 1 step + 1 step
    2. 2 steps
    Example 2:

    Input: n = 3
    Output: 3
    Explanation: There are three ways to climb to the top.
    1. 1 step + 1 step + 1 step
    2. 1 step + 2 steps
    3. 2 steps + 1 step

    `,
    solution: `
      /**
       * @param {number} n
       * @return {number}
       */
      var climbStairs = function(n) {
          if (n == 1 || n == 0) return 1;

          return climbStairs(n - 1) + climbStairs(n - 2); 

      };
    `,
    approach: `
      Imagin it as a tree, for example the top is 4, what you want to return is 5 that would include: ["1 + 1 + 1 + 1", "1 + 1 + 2", "1 + 2 + 1", "2 + 1 + 1", "2 + 2"]
      
      The problem itself is not hard but think it as you are at 4th stair cases and try to step down 1 and 2 step at the same time until you hit the root.
    `,
  },
];

export default problems;
