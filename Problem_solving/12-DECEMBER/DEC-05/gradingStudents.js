// https://www.hackerrank.com/challenges/grading/problem?isFullScreen=true


function gradingStudents(grades) {

    let roundedGrades = [];
    let index = 0;

    for (let i = 0; i < grades.length; i++) {
        let grade = grades[i];

        if (grade < 38) {
            
            roundedGrades[index] = grade;
        } else {
            // Find the next multiple of 5
            let nextMultipleOf5 = grade;
            while (nextMultipleOf5 % 5 !== 0) {
                nextMultipleOf5++;
            }

            if (nextMultipleOf5 - grade < 3) {
                
                roundedGrades[index] = nextMultipleOf5;
                
            } else {
                
                roundedGrades[index] = grade;
            }
        }
        index++;
    }

    return roundedGrades;
}
