<template>

    <section class="scoreGame">
        Player <span>{{ this.winCount }}</span> X <span>{{ this.loseCount }}</span> Computer
    </section>  
  
</template>
  
  <script>
  
  export default {
    props: ['winCount', 'loseCount']
  }
  </script>
  
  <style lang="sass">
  
  .scoreGame
    font-size: 1.5rem
    border-bottom: 1px solid #000000
    max-width: 50%
    margin: 2rem auto
    padding: 1rem
    span
        border: 1px solid #000000
        padding: .5rem
  
  </style>