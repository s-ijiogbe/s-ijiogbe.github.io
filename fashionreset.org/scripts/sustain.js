window.addEventListener('scroll', function () {
    const header = document.getElementById('header');
    if (!header) return; // safety check if #header doesn't exist on a page

    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


document.querySelectorAll('.accordion-button').forEach((button) => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        button.classList.toggle('active');
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});

function gradeQuiz() {
    const answers = {
        q1: 'b',
        q2: 'a',
        q3: 'b',
        q4: 'c',
        q5: 'b',
        q6: 'a'
    };

    let score = 0;
    let total = Object.keys(answers).length;

    for (let question in answers) {
        const selected = document.querySelector(`input[name="${question}"]:checked`);
        if (selected && selected.value === answers[question]) {
            score++;
        }
    }

    let feedback = "";
    if (score === total) {
        feedback = "Perfect! You're a sustainability pro!";
    } else if (score >= total - 2) {
        feedback = "Great job! A little more to learn.";
    } else {
        feedback = "Keep going—you’re on your way!";
    }

    document.getElementById('quiz-result').textContent = `Your score: ${score}/${total}. ${feedback}`;
}



function openScopedTab(containerId, tabId) {
    const container = document.getElementById(containerId);
    const contents = container.querySelectorAll('.tab-content');
    const buttons = container.querySelectorAll('.tab-button');

    contents.forEach((tab) => tab.classList.remove('tab-content-active'));
    buttons.forEach((btn) => btn.classList.remove('tab-button-active'));

    container.querySelector(`#${tabId}`).classList.add('tab-content-active');
    container.querySelector(`[onclick*="${tabId}"]`).classList.add('tab-button-active');
}