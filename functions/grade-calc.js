const gradeCalc = (score, totalScore) => {
  if (typeof score !== "number" || typeof totalScore !== "number") {
    throw Error("Please provide numbers only");
  }

  const percent = (score / totalScore) * 100;
  let letterGrade = "";

  if (percent >= 90) {
    letterGrade = "A";
  } else if (percent >= 80) {
    letterGrade = "B";
  } else if (percent >= 70) {
    letterGrade = "C";
  } else if (percent >= 60) {
    letterGrade = "D";
  } else {
    letterGrade = "F";
  }
  return `You got a ${letterGrade} and ${percent}%!`;
};

try {
  const result = gradeCalc(66, 100);
  console.log(result);
} catch (e) {
  console.log(e.message);
}
