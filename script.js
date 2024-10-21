function generateMarksheet() {
    const subject1 = parseFloat(document.getElementById('subject1').value);
    const subject2 = parseFloat(document.getElementById('subject2').value);
    const subject3 = parseFloat(document.getElementById('subject3').value);
    const subject4 = parseFloat(document.getElementById('subject4').value);
    const subject5 = parseFloat(document.getElementById('subject5').value);

    const totalMarks = subject1 + subject2 + subject3 + subject4 + subject5;
    const percentage = (totalMarks / 500) * 100;
    let grade = '';

    if (percentage >= 90) {
        grade = 'A+';
    } else if (percentage >= 80) {
        grade = 'A';
    } else if (percentage >= 70) {
        grade = 'B';
    } else if (percentage >= 60) {
        grade = 'C';
    } else if (percentage >= 50) {
        grade = 'D';
    } else {
        grade = 'Fail';
    }


    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h2>Marksheet</h2>
        <p>Total Marks: ${totalMarks} / 500</p>
        <p>Percentage: ${percentage.toFixed(2)}%</p>
        <p>Grade: ${grade}</p>
    `;
    
    if (grade === 'Fail') {
        resultDiv.className = 'fail result';
    } else {
        resultDiv.className = 'strong result';
    }

    resultDiv.style.display = 'block'; // Show result
}
