<template lang="html">
  <div id="app">
    <h3>Got any jokes?</h3>
    <button class="btn btn-primary" @click="initJokes"> Add 10 jokes </button>
    <button class="btn btn-primary" @click="addJoke"> Add joke </button>

    <br>
    <span v-for="type in types">
      <input
        type="checkbox"
        :value="type"
        v-model="checkedTypes"
        checked>
      <label>{{type}}</label>&nbsp;
    </span>
    <br>
    <div class="row justify-content-md">
      <Joke
        v-for="(joke, index) in $store.state.jokes"
        v-show="checkedTypes.includes(joke.typet)"
        :joke="joke"
        :index="index"
        key="index"/>
    </div>
  </div>
</template>


<script>
import {mapActions} from 'vuex'
import Joke from './joke.vue'
export default {
  data(){
    return{
      types: ['general','knock-knock','programming'],
      checkedTypes: ['general','knock-knock','programming']
    }
  },
  methods: mapActions([
    'initJokes',
    'addJoke'
  ]),
  components: {
    Joke
  }
}
</script>

<style lang="css" scoped>
</style>
