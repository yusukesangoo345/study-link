// 基本問題の解答チェック
function checkAnswers() {
    const q1 = document.getElementById('q1').value;
    const q2 = document.getElementById('q2').value;
    const q3 = document.getElementById('q3').value;
    const q4 = document.getElementById('q4').value;
    const q5 = document.getElementById('q5').value;

    const resultQ1 = document.getElementById('result-q1');
    const resultQ2 = document.getElementById('result-q2');
    const resultQ3 = document.getElementById('result-q3');
    const resultQ4 = document.getElementById('result-q4');
    const resultQ5 = document.getElementById('result-q5');

    let correctCount = 0;

    // 問題1: 2 + 3 = 5
    if (q1 == 5) {
        resultQ1.textContent = ' ○';
        resultQ1.style.color = 'green';
        correctCount++;
    } else {
        resultQ1.textContent = ' ✘';
        resultQ1.style.color = 'red';
    }

    // 問題2: 4 + 1 = 5
    if (q2 == 5) {
        resultQ2.textContent = ' ○';
        resultQ2.style.color = 'green';
        correctCount++;
    } else {
        resultQ2.textContent = ' ✘';
        resultQ2.style.color = 'red';
    }

    // 問題3: 5 + 2 = 7
    if (q3 == 7) {
        resultQ3.textContent = ' ○';
        resultQ3.style.color = 'green';
        correctCount++;
    } else {
        resultQ3.textContent = ' ✘';
        resultQ3.style.color = 'red';
    }

    // 問題4: 3 + 4 = 7
    if (q4 == 7) {
        resultQ4.textContent = ' ○';
        resultQ4.style.color = 'green';
        correctCount++;
    } else {
        resultQ4.textContent = ' ✘';
        resultQ4.style.color = 'red';
    }

    // 問題5: 6 + 1 = 7
    if (q5 == 7) {
        resultQ5.textContent = ' ○';
        resultQ5.style.color = 'green';
        correctCount++;
    } else {
        resultQ5.textContent = ' ✘';
        resultQ5.style.color = 'red';
    }

    // 5問正解なら次のページボタンを表示
    if (correctCount === 5) {
        document.getElementById('next-button').style.display = 'inline';
    } else {
        document.getElementById('next-button').style.display = 'none';
    }
}

// 次のページに遷移
function nextPage() {
    window.location.href = 'grade1-math-continue.html';  // 次のページへ移動
}
