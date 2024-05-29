<template>

  <navMenu />

  <scoreGame :winCount="this.winCount" :loseCount="this.loseCount"/>

  <div class="answers" v-if="this.question">
    <h3 v-html="this.question"></h3>
    <section class="options">
      <div v-for="answer in answers" :key="answer" class="option">
        <input type="radio" name="option1" id="" v-model="this.chosen_answer" :disabled="this.answer_submitted" :value="answer">
        <label for="option1" v-html="answer"></label>
      </div>
    </section>
    <button v-if="this.answer_submitted == false" @click="submitAnswer();" type="button" class="btn btn-dark btn-lg">Send reply</button>
  </div>

  <section v-if="this.answer_submitted" class="results">
    <h4 v-if="this.chosen_answer == this.correct_answer" 
      v-html="'&#9989; Congratulations! You are right. ' + this.correct_answer + ' is correct.'"></h4>
    <h4 v-else 
      v-html="'&#10060; Sorry, wrong answer. The correct answer is ' + this.correct_answer + '.'">
    </h4>
    <button @click="this.nextQuestion();" type="button" class="btn btn-dark btn-lg">Next Question</button>
  </section>
  

</template>

<script>
import navMenu from './components/nav-menu.vue'
import scoreGame from './components/scoreGame.vue'

export default {
  name: 'App',
  components: {
    navMenu,
    scoreGame
  },

  data() {
    return {
      question: undefined,
      incorrect_answers: [],
      correct_answer: undefined,
      chosen_answer: undefined,
      answer_submitted: false,
      winCount: 0,
      loseCount: 0
    }
    
  },

  computed: {
    answers() {
      let answers = [...this.incorrect_answers];
      answers.splice(Math.round(Math.random() * answers.length), 0, this.correct_answer);
      return answers;
    }
  },

  methods: {
    submitAnswer() {
      if(!this.chosen_answer) {
        alert("Pick one of the options");
      }else if(this.chosen_answer == this.correct_answer) {
        this.answer_submitted = true;
        this.winCount++;
      }else {
        this.answer_submitted = true;
        this.loseCount++;
      }

      localStorage.setItem("winCount", (this.winCount));
      localStorage.setItem("loseCount", (this.loseCount));

    },

    nextQuestion() {

      this.answer_submitted = false;
      this.chosen_answer = undefined;
      this.question = undefined;

      this.axios.get("https://opentdb.com/api.php?amount=15&category=11").then((response) => {
      this.question = response.data.results[0].question;
      this.incorrect_answers = response.data.results[0].incorrect_answers;
      this.correct_answer = response.data.results[0].correct_answer;
    })
    }
  },

  created() {
    this.nextQuestion();
    this.winCount = localStorage.getItem("winCount") ? (localStorage.getItem("winCount")) : this.winCount;
    this.loseCount = localStorage.getItem("loseCount") ? (localStorage.getItem("loseCount")) : this.loseCount;
    },
    updated() { 
        localStorage.setItem("winCount", (this.winCount));
        localStorage.setItem("loseCount", (this.loseCount));
    } //Também podemos transformar em um método, e vinculá-lo aos botões add e clear.

};
  

</script>

<style lang="sass">
#app 
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50

.answers
  margin-top: 3rem

.options 
  display: flex
  flex-direction: column
  margin-top: 2rem
  .option
    flex-direction: row
    label
      padding: 1rem

button.btn
  margin-top: 2rem

.results
  margin-top: 2rem 
  h4 
    font-size: 1.1rem
  
</style>
