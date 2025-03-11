/*n e-commerce platform offers reward points to its members. For every $10 spent, members earn 1 point. Non-members don't earn any points.

      Task:

Write a program that takes the total purchase amount and a boolean indicating if the customer is a member.

Calculate the reward points earned.

Output the number of reward points.

*/


function calculateRewardPoints(totalAmount, isMember) {
    let points = 0;
    if (isMember) {
        points = Math.floor(totalAmount / 10);
    }
    console.log("Reward points earned:", points);
}

// Example usage
calculateRewardPoints(45, true);
calculateRewardPoints(30, false); 
calculateRewardPoints(100, true); 