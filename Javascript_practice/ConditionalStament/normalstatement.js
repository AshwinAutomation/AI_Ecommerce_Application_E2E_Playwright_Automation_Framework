function checkAgeForVote(age) {
  if (age >= 18) {
    console.log("You are eligible to vote.");
  } else {
    console.log("You are not eligible to vote.");
  }
}

checkAgeForVote(20);

function checkGrade(score) {
  let grade;

  if (score <= 90) {
    grade = "A";
  } else {
    if (score >= 80) {
      grade = "B";
    } else {
      grade = "C";
      if (score < 50) {
        grade = "D";
      }
    }
    return grade;
  }
}

let result = checkGrade(95);
console.log("Grade:", result);
