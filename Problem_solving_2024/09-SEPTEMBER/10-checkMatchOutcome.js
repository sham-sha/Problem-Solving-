function checkMatchOutcome(teamScore, targetScore, oversLeft) {
    if (teamScore >= targetScore) {
        console.log("Team wins by DL method");
    } else if (oversLeft > 0) {
        console.log("Match to be continued");
    } else {
        console.log("Team loses by DL method");
    }
}


checkMatchOutcome(250, 240, 5); 
checkMatchOutcome(200, 240, 10); 
checkMatchOutcome(200, 240, 0); 
