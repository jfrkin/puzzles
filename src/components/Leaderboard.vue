<template>
    <div class="rating-list-container">
      <div class="rating-list-header">
        <span>
          LEADERBOARD
        </span>
      </div>
      <div class="rating-list-body">
        <ul>
          <li v-for="(user,index) in ratingList" :key="index">
            <div class="rating-list-row d-flex justify-content-between" 
              v-bind:class="{'golden': index == 0, 'silver': index == 1, 'bronze': index == 2}"
            >
              <div class="rating-list-username">
                <span>
                  {{index+1}}. {{ user.username }} - {{ user.moves }} moves
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props:['ratingList']
  }
  </script>
  
  <style scoped>

  li {
    list-style: none;
  }

  ul {
    padding: 0;
  }
  .rating-list-container {
    position: sticky;
    top: 10vh;
    margin: 1em auto;
    height: 40vh;
    width: 80%;
    min-width: 25vh;
    overflow: hidden;
  }
  
  .rating-list-header {
    justify-content: center;
    background-color: #303030;
    color: #5cb85c;
    padding: 1em 2em;
  }
  
  .rating-list-header span {
    font-size: 1.7em;
  }
  
  .rating-list-body {
    height: 80%;
    border-style: groove;
    border-color:#5cb85c;
    border-top: 0;
    overflow-y: auto;
  }
  
  .rating-list-body li {
    list-style: none;
  }
  
  .rating-list-row {
    padding: 0.3em 1em;
    border-bottom: 1px solid;
  }
  
  .rating-list-row span{
    font-size: 1em;
  }
  
  .golden {
    background-color: gold;
  }
  
  .silver {
    background-color: silver;
  }
  
  .bronze {
    background-color: #cd7f32;
  }
  
  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }
  
  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1; 
  }
   
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888; 
  }
  
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }
  </style>