<template>

  <scoreBoard :winCount="this.winCount" :loseCount="this.loseCount"/>

  <template v-if="this.question">
    <div class="question">
      <h2 v-html="this.question"></h2>
    </div>
    <div v-for="answer in answers" class="answer" :key="answer">
      <input :disabled="this.answer_submitted" v-model="this.chosen_answer" type="radio" name="response" :value="answer">
      <label v-html="answer"></label><br>
    </div>
    <input v-if="this.answer_submitted == false" @click="submitAnswer()" type="button" class="btn" value="Responder">
  </template>

  <section v-if="this.answer_submitted" class="resultados">
    <h4 v-if="this.chosen_answer == this.correct_answer" 
    v-html="'&#9989; Congratulations! You are right. ' + this.correct_answer + ' is correct.'"></h4>
    <h4 v-else 
    v-html="'&#10060; Sorry, wrong answer. The correct answer is ' + this.correct_answer + '.'">
      </h4>
    <input @click="this.nextQuestion();" type="button" class="btn" value="Next Question">
  </section>

</template>

<script>

import scoreBoard from "./components/scoreBoard.vue";

export default {
  name: 'App',
  components: {
    scoreBoard
  },

  data() {
    return {
      question: undefined,
      incorrect_answers: undefined,
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
    },

    nextQuestion() {

      this.answer_submitted = false;
      this.chosen_answer = undefined;
      this.question = undefined;

      this.axios.get("https://opentdb.com/api.php?amount=10&category=15").then((response) => {
      this.question = response.data.results[0].question;
      this.incorrect_answers = response.data.results[0].incorrect_answers;
      this.correct_answer = response.data.results[0].correct_answer;
    })
    }
  },

  created() {
    this.nextQuestion();
  }
}

</script>

<style lang="sass">

#app 
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  margin-top: 60px
  max-width: 50%
  margin: 10% auto

.answer
  input
    margin-top: 2%

.btn
  width: 20%
  margin-top: 5%
  padding: 1.5%
  background-color: #4169E1
  color: #ffffff
  border-radius: 10px

.resultados
  margin-top: 5%

</style>
