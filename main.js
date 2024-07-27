import "./styles/main.scss";

// textarea
document.addEventListener('DOMContentLoaded', function () {
    const textarea = document.querySelector('.interact-q');
    textarea.addEventListener('input', function () {
        this.style.height = 'auto';
        this.style.height = this.scrollHeight + 'px';
    });
});

const answer = "";
const answerDiv = `<div class="main-a">
                          <img src="./assets/w1.svg" alt="w1" class="icon">
                          ${answer}
                      </div>`;

                      
const question = "";
const questionDiv = `<div class="main-q">
                          ${question}
                      </div>`;