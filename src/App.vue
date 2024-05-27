<template>

  <template v-if="this.question">
    <div class="question">
      <h2 v-html="this.question"></h2>
    </div>
    <div v-for="answer in answers" class="answer" :key="answer">
      <input type="radio" name="response" value="answer">
      <label v-html="answer"></label><br>
    </div>
  </template>

  <input type="button" class="btn" value="Responder">

</template>

<script>

export default {
  name: 'App',

  data() {
    return {
      question: undefined,
      incorrect_answers: undefined,
      correct_answer: undefined
    }
  },
  computed: {
    answers() {
      let answers = [...this.incorrect_answers];
      answers.splice(Math.round(Math.random() * answers.length), 0, this.correct_answer);
      return answers;
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
  margin-top: 8%
  padding: 1.5%
  background-color: #4169E1
  color: #ffffff
  border-radius: 10px

</style>
