<template>

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
    <h4 v-if="this.chosen_answer == this.correct_answer">
      &#9989; Congratulations! You're right. "{{ this.correct_answer }}" is correct.
    </h4>
    <h4 v-else>
      &#10060; Sorry, wrong answer. The correct answer is "{{ this.correct_answer }}".
    </h4>
    <input type="button" class="btn" value="Next Question">
  </section>

</template>

<script>

export default {
  name: 'App',

  data() {
    return {
      question: undefined,
      incorrect_answers: undefined,
      correct_answer: undefined,
      chosen_answer: undefined,
      answer_submitted: false
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
        console.log("Congratulations! You're right.");
      }else {
        this.answer_submitted = true;
        console.log("Sorry! Try again.");
      }
    }
  },

  created() {
    this.axios.get("https://opentdb.com/api.php?amount=10&category=15").then((response) => {
      this.question = response.data.results[0].question;
      this.incorrect_answers = response.data.results[0].incorrect_answers;
      this.correct_answer = response.data.results[0].correct_answer;
    })
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

</style>
