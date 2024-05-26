document.addEventListener('DOMContentLoaded', () => {
    const questions = document.querySelectorAll('.question');

    questions.forEach((question) => {
        const btn = question.querySelector('.ques-btn');
        const questionText = question.querySelector('.question-text');
        const plusIcon = question.querySelector('.plus-icon');
        const minusIcon = question.querySelector('.minus-icon');

        btn.addEventListener('click', () => {
            const isVisible = questionText.style.maxHeight;

            questions.forEach((item) => {
                item.querySelector('.question-text').style.maxHeight = null;
                item.querySelector('.plus-icon').style.display = 'inline';
                item.querySelector('.minus-icon').style.display = 'none';
            });

            if (!isVisible || isVisible === '0px') {
                questionText.style.maxHeight = questionText.scrollHeight + 'px';
                plusIcon.style.display = 'none';
                minusIcon.style.display = 'inline';
            } else {
                questionText.style.maxHeight = null;
                plusIcon.style.display = 'inline';
                minusIcon.style.display = 'none';
            }
        });
    });
});
