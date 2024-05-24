<template>

<div class="question">
  <h2>Which of these characters was NOT planned to be playable for Super Smash Bros. 64?</h2>
</div>
<div class="answer">
  <input type="radio" name="response" value="Peach">
  <label for="">Peach</label><br>

  <input type="radio" name="response" value="Bowser">
  <label for="">Bowser</label><br>

  <input type="radio" name="response" value="Mewtwo">
  <label for="">Mewtwo</label><br>

  <input type="radio" name="response" value="King Dedede">
  <label for="">King Dedede</label>
</div>

<input type="button" class="btn" value="Responder">

</template>

<script>

export default {
  name: 'App',
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
