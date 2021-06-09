const getQuestions = async () => {
   const resp = await fetch('questions.json');
   const result = resp.json();
   return result;
}
const timer = document.querySelector('#timer');

let questions = await getQuestions();

class getMoney {
   constructor(pickUpPage) {
      this.pickUpPage = document.querySelector(pickUpPage);
      this.endGame = false;
   }
   getMoneyBtn() {
      this.pickUpPage.innerHTML = ``;
      this.endGame = true;
      popap.total(quastionsCard.dollars, this.endGame);
   }
   setup() {
      const btn = document.querySelector('[data-type="pick-up-btn"]');
      btn.addEventListener('click', () => this.getMoneyBtn());
   }
   render() {
      let getMoney = `
      <div class="btn-pick-up__body">
         <button class="pick-up" data-type="pick-up-btn" id="btnPickUp">Забрать деньги</button>
      </div>
      `;
      this.pickUpPage.innerHTML = getMoney;
      this.setup();
   }
}
class Hints {
   constructor(questions, hintsPage) {
      this.hintsPage = document.querySelector(hintsPage);
      this.questions = questions.questions;
   }
   fiftyFifty(prompt) { //RANDOM !!!!!!!!!!!!!!!!!!!!!!!
      const answers = document.querySelectorAll('.quiz-quastions__item');
      prompt.classList.add('disabled');
      let answersSome = this.questions.find(question => question.id == quastionsCard.current);
      console.log(answersSome)
      const trueAnswer = answersSome.answer;
      const falseAnswers = answersSome.someAnswer.filter(answer => answer !== trueAnswer);
      const random = falseAnswers[Math.floor(Math.random() * falseAnswers.length)];
      for (let index = 0; index < answers.length; index++) {
         const answer = answers[index];
         if (answer.innerText === random || answer.innerText === trueAnswer) {
            continue;
         }
         answer.remove();
      }
   }
   phone(prompt) {
      const answers = document.querySelectorAll('.quiz-quastions__item');
      let answersSome = this.questions.find(question => question.id == quastionsCard.current).someAnswer;
      const answersRandom = answersSome[Math.floor(Math.random() * answersSome.length)];
      // ПОПАПЫВФЫВФЫВФЫВФЫВФЫВЫФВФЫВЫФВФЫВ
      popap.usePhone(answersRandom);
   }
   chooseHint(event) {
      const prompt = event.currentTarget;
      const typePrompt = prompt.dataset.type;
      if (typePrompt) {
         if (typePrompt === 'fifty-fifty') {
            prompt.classList.add('disabled');
            this.fiftyFifty(prompt);
         } else if (typePrompt === 'phone') {
            prompt.classList.add('disabled');
            this.phone(prompt)
         }
      }

   }
   setup() {
      const prompt = document.querySelectorAll('[data-get="prompt"]');
      prompt.forEach(prompt => prompt.addEventListener('click', (e) => this.chooseHint(e), { once: true }));
      // promptFirst.removeEventListener('click', (e) => this.chooseHint(e), false);
   }
   render() {
      let hints = `
      <div class="page-hint__body">
         <div class="page-hints__item"  data-get="prompt" data-type="fifty-fifty">
            <img src="50.jpg" alt="50/50">
         </div>
         <div class="page-hints__item"  data-get="prompt" data-type="phone">
            <img src="phone.jpg" alt="phone">
         </div>
         <div class="page-hints__item"  data-type="health">
            <img src="continue.png" alt="continue">
         </div>
      </div>
      `;
      this.hintsPage.innerHTML = hints;
      this.setup();
   }
}
class StartBtn {
   constructor(btnPage) {
      this.btnPage = document.querySelector(btnPage);;
      this.render();
      this.setup();
   }
   hiddenBtn() {
      this.btnPage.style.display = 'none';
   }
   handleStartGame() {
      this.hiddenBtn();
      popap.render();
   }
   setup() {
      const btn = document.querySelector('[data-type="btn-start"]');
      btn.addEventListener('click', () => this.handleStartGame());
   }
   render() {
      let btn = `
      <div class="page__btn d-flex">
         <button id="btnStart" data-type="btn-start">Начать игру</button>
      </div>
      `
      this.btnPage.innerHTML = btn;
   }
}
class Timer {
   constructor(questions, timer) {
      this.questions = questions.questions;
      this.timer = document.querySelector(timer);
      this.timeNow = 60 + 1;
   }
   refresh() {
      this.timeNow = 60 + 1;
   }
   render() {
      let timer = `
      <div class="timer__body">
         <span>${--this.timeNow} sec</span>
      </div>
      `;
      this.timer.innerHTML = timer;
      return this.timeNow
   }
}
class Popap {
   constructor(questions, popap, timer) {
      this.questions = questions.questions;
      this.popap = document.querySelector(popap);
      this.timer = timer;
      this.timerTick = true;
   }
   usePhone(answer) {
      let phone = `
      <div class="popap__body">
         <h2 class="popap__title">Внимание!</h2>
         <div class="popap__content">
            Ответ зала: <strong class="answer-bold">${answer}</strong>
         </div>
      </div>
   `;
      this.popap.classList.add('_show');
      this.popap.innerHTML = phone;
      setTimeout(() => {
         this.popap.classList.remove('_show')
         this.popap.innerHTML = ``;
      }, 3000);
   }
   attention() {
      let statusTitlePopap = `Attention`;
      let infoText = `имеете одну попытку! Будьте внимательны!`;
      let html = `
         <div class="popap__body">
            <h2 class="popap__title">${statusTitlePopap}</h2>
            <div class="popap__content">
               Вы ${infoText}
            </div>
         </div>
      `;
      this.popap.classList.add('_show');
      this.popap.innerHTML = html;
      setTimeout(() => {
         this.popap.classList.remove('_show')
         this.popap.innerHTML = ``;
      }, 3000);
   }
   warning(attempt, dollars) {
      if (attempt < 0) {
         if (dollars === quastionsCard.reward[quastionsCard.rewardCurrent].innerText)
         this.total(dollars);
      }
      if (attempt === 0) {
         this.attention();
         quastionsCard.render();
      }
   }
   total(dollars, endGame) {
      let statusTitlePopap = `Attention`;
      let statusBtn = `Okey`;
      let infoText = ``;
      if (quastionsCard.attempt === 0) {
         infoText = `имеете одну попытку! Будьте внимательны!`;
      }
      if (quastionsCard.attempt < 0) {
         console.log(dollars)
         statusBtn = `Начать заново`;
         infoText = `Проиграли ${quastionsCard.dollars}`
      }
      if (quastionsCard.current == this.questions.length && dollars || endGame) {
         quastionsCard.innerText = `1000 000$`;
         if (endGame) {
            quastionsCard.innerText = dollars;
            this.startGameAgain();
         }
         statusBtn = `Забрать приз и начать сначала?`;
         infoText = `Выиграли ${quastionsCard.innerText}`
      }
      let html = `
         <div class="popap__body">
            <h2 class="popap__title">${statusTitlePopap}</h2>
            <div class="popap__content">
               Вы ${infoText}
            </div>
            <button class="popap__btn">
               ${statusBtn}
            </button>
            <div class="popap__close">
               <i class="fas fa-times"></i>
            </div>
         </div>
      `;
      this.popap.classList.add('_show');
      this.popap.innerHTML = html;
      this.setup(); // TOTAL НАчать СНАЧАЛА
   }
   handleCloseBtn() {
      this.popap.innerHTML = ``;
      this.popap.classList.remove('_show');
      pageBody.innerHTML = `
      <div class="not-today">
         <p> Штош, знач не седня <p>
      </div>
      `
   }
   timerRefresh() { //ОБНОВЛЕНИЕ ТАЙМЕРА ПО ОКОНЧАНИЮ ВРЕМЕНИ
      let timer = setInterval(() => {
         let nowTime = this.timer.render();
         if (nowTime === 0) {
            getMoneyPage.render();
            quastionsCard.attempt--
            if (quastionsCard.current == this.questions.length) {
               clearInterval(timer);
               this.total(this.dollars);
            }
            if (quastionsCard.attempt == 0) {
               quastionsCard.dollars = quastionsCard.reward[quastionsCard.rewardCurrent].innerText; // DOLLARS
               quastionsCard.reward[quastionsCard.rewardCurrent].classList.add('active'); // DOLLARS
               quastionsCard.rewardCurrent--;
               this.attention();//ВЫЗОВ ПОПАПА В КОНЦЕ
               document.querySelector('[data-type="health"]').classList.add('disabled');
               timerPage.refresh();
               quastionsCard.render();
            } else {
               clearInterval(timer); // TIMER FALSE!!
               this.total(this.dollars);
            }
         }
         if (!this.timerTick) {
            clearInterval(timer); // TIMER FALSE!!
         }
      }, 1000);
   }
   startGameAgain() {
      popap.timerTick = false;
      timerPage.refresh();
      quastionsCard.reward.forEach(e => e.classList.remove('active'));
      quastionsCard.rewardCurrent = 14;
      quastionsCard.nextLevel = 1;
      quastionsCard.current = 0;
      quastionsCard.attempt = 1;
   }
   handleStartBtn() {
      if (quastionsCard.current == this.questions.length || quastionsCard.attempt < 0) {
         // НАЧАТЬ ЗАНОВО!

         this.startGameAgain();
      }
      quastionsCard.reward.forEach(e => e.classList.remove('active'));
      popap.timerTick = true;
      this.timerRefresh();
      this.popap.classList.remove('_show');
      hints.render();
      quastionsCard.render();
   }
   setup() {
      const closeBtn = document.querySelector('.popap__close');
      const startGame = document.querySelector('.popap__btn');
      closeBtn.addEventListener('click', () => this.handleCloseBtn());
      startGame.addEventListener('click', () => this.handleStartBtn());
   }
   render() {
      let html = `
         <div class="popap__body">
            <h2 class="popap__title">Attention!</h2>
            <div class="popap__content">
               На каждый вопрос даётся 1 минута! Поехали?
            </div>
            <button class="popap__btn">
               Давай начинать уже!
            </button>
            <div class="popap__close">
               <i class="fas fa-times"></i>
            </div>
         </div>
      `;
      this.popap.classList.add('_show');
      this.popap.innerHTML = html;
      this.setup();
   }
}
class Questions {
   constructor(questions, windowQuestion, popap, timerPage) {
      this.questions = questions.questions;
      this.windowQuestion = document.querySelector(windowQuestion);
      this.nextLevel = 1;
      this.currentAnswer = ``;
      this.popap = popap;
      this.timerPage = timerPage;
      this.current = 0; //на каком уровне мы находимся
      this.reward = document.querySelectorAll('.nav-list__item');
      this.rewardCurrent = 14;
      this.attempt = 1;
      this.dollars = this.reward[this.rewardCurrent].innerText;
   }
   validate(currentAnswer) {
      let status = false;
      if (this.currentAnswer == currentAnswer || quastionsCard.attempt < 0) {
         status = true;
         // МЫ ОПРЕДЕЛЯЕМ ПРОШЛИ ЛИ НА СЛЕД. ЭТАП
         this.dollars = this.reward[this.rewardCurrent].innerText;
         this.reward[this.rewardCurrent].classList.add('active');
         this.rewardCurrent--;
         // reward ДОБАВИТЬ КЛАСС РЕВАРД
      }
      return status
   }
   handleClickBtn() {
      getMoneyPage.render();
      const answer = document.querySelector('[data-check="checked"]');
      if (answer) {
         const valueAnswer = answer.dataset.value;
         if (this.current >= this.questions.length) {
            this.popap.total(this.dollars) // РЕЗУЛЬТАТ ПОСЛЕ ПРОХОЖДЕНИЯ ТЕСТА
            popap.timerTick = false;
         }
         this.timerPage.refresh(); //REFRESH TIMER
         if (this.validate(valueAnswer)) {
            this.render();
            console.log(this.current)
         } else {
            this.attempt--;
            if (quastionsCard.attempt < 0) {
               if (quastionsCard.rewardCurrent >= 6 && quastionsCard.rewardCurrent <= 9) {
                  this.dollars = this.reward[10].innerText;
                  console.log('yes')
               }
               popap.timerTick = false;
               popap.warning(this.attempt, this.dollars);
            }
            if (quastionsCard.attempt == 0) {
               const health = document.querySelector('[data-type="health"]');
               if (!health.classList.contains('disabled')) {
                  this.dollars = this.reward[this.rewardCurrent].innerText;
                  this.reward[this.rewardCurrent].classList.add('active');
                  this.rewardCurrent--;
                  health.classList.add('disabled');
               };
               console.log(this.dollars)
               popap.warning(this.attempt);
               //ОШИБКА ПОПАП ПРЕДУПРЕЖДЕНИЕ!!!!!
            }
         }
      }
      // Проверка!!
   }
   checkedAnswer(e, answers) {
      const currentAnswer = e.currentTarget;
      answers.forEach(e => {
         e.classList.remove('checked');
         e.removeAttribute('data-check', 'checked');
         e.removeAttribute('data-value', currentAnswer.innerText);
      });
      currentAnswer.classList.add('checked');
      currentAnswer.setAttribute('data-check', 'checked');
      currentAnswer.setAttribute('data-value', currentAnswer.innerText);
   }
   levelUp() {
      let nextLevel = this.questions.filter(question => {
         return +question.id === this.nextLevel;
      });
      this.nextLevel++;
      return nextLevel;
   }
   setup() {
      const btn = document.querySelector('[data-type="next"]');
      const answers = document.querySelectorAll('.quiz-quastions__item');
      btn.addEventListener('click', () => this.handleClickBtn());
      if (answers.length) { answers.forEach(e => e.addEventListener('click', (e) => this.checkedAnswer(e, answers))) };
   }
   render() {
      const currentLevel = this.levelUp();
      if (currentLevel[0]) {
         const { id, quastionTitle, question, someAnswer, answer } = currentLevel[0];
         this.currentAnswer = answer;
         let li = ``;
         someAnswer.forEach(answer => {
            li += `
            <li class="quiz-quastions__item">
               <span>${answer}</span>
            </li>
            `;
         });
         let currentQuestion = `
            <h2 class="quiz__title">${quastionTitle}</h2>
            <h3 class="quiz__question">${question}</h3>
            <ul class="quiz-quastions d-grid">
               ${li}
            </ul>
            <button class="quiz__btn" data-type="next">
               Выбрать
            </button>
            `;
         this.windowQuestion.innerHTML = currentQuestion;
         this.setup();
         this.current = id;
      }
   }
};
const startBtnPage = new StartBtn('#pageBtn');
const timerPage = new Timer(questions, '#timer');
const popap = new Popap(questions, '#popap', timerPage);
const quastionsCard = new Questions(questions, '#windowQuestion', popap, timerPage);
const getMoneyPage = new getMoney('#btnPickUp');
const hints = new Hints(questions, '#hints');

