<template>

    <nav class="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
      <div class="menu container-fluid">
        <a class="navbar-brand" href="#">
          <img src="../assets/img/logo_andreia_lira2.png" alt="Bootstrap" width="30" height="24">
        </a>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="itens navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="index.html">QUIZ GAME - CINÉFILOS</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  
  </template>
  
  <script>
  
  export default {
    name: 'navMenu',
    components: {
      
    }
  }
  </script>
  
  <style lang="sass">
  
  nav .menu 
    max-width: 50%
    margin: 0 auto
  
  </style>