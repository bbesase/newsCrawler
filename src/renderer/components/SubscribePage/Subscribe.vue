<template>
  <div id="wrapper">
    <main>
      <div class="left-side">
        <span class="title">
          Welcome!
        </span>
        TEST
        <button @click="getSources()">Get Sources</button>
        
        <div>
          <b-card title="Card Title"
                  img-src="https://lorempixel.com/600/300/food/5/"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 20rem;"
                  class="mb-2">
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <b-button href="#" variant="primary">Go somewhere</b-button>
          </b-card>
        </div>
        
        <li v-for="source in sources" :key="source.id">
          {{ source.name }}
        </li>
      </div>
      <router-link to="/">Go to Home</router-link>
    </main>
  </div>
</template>

<script>
  import axios from 'axios'
  import GetSources from '../../api/newsAPI'

  export default {
    name: 'subscribe-page',
    mixins: [ GetSources ],
    data: function () {
      return {
        sources: []
      }
    },
    methods: {
      _api () {
        return axios.get(`https://newsapi.org/v1/sources?language=en`)
          .then(response => {
            this.sources = response.data.sources
          })
      },
      getSources () {
        this._api()
      }
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body { font-family: 'Source Sans Pro', sans-serif; }

  #wrapper {
    background:
      radial-gradient(
        ellipse at top left,
        rgba(255, 255, 255, 1) 40%,
        rgba(229, 229, 229, .9) 100%
      );
    height: 100vh;
    padding: 60px 80px;
    width: 100vw;
  }
  main {
    display: flex;
    justify-content: space-between;
  }

  main > div { flex-basis: 50%; }

  .left-side {
    display: flex;
    flex-direction: column;
  }

  .left-side button {
    font-size: .8em;
    cursor: pointer;
    outline: none;
    padding: 0.75em 2em;
    border-radius: 2em;
    display: inline-block;
    color: #fff;
    background-color: #4fc08d;
    transition: all 0.15s ease;
    box-sizing: border-box;
    border: 1px solid #4fc08d;
    width: 50%;
  }

  .left-side button.alt {
    color: #42b983;
    background-color: transparent;
  }

  .welcome {
    color: #555;
    font-size: 23px;
    margin-bottom: 10px;
  }

  .title {
    color: #2c3e50;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 6px;
  }

  .title.alt {
    font-size: 18px;
    margin-bottom: 10px;
  }
</style>
