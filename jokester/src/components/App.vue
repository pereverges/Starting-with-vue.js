<template lang="html">
  <div id="app">

    <h3>Got any jokes?</h3>
    <button class="btn btn-primary" @click="initJokes"> Add joke </button>
    <div class="">
          {{$store.state}}
    </div>

  </div>
</template>


<script>
import {mapActions} from 'vuex'
export default {
  methods: mapActions([
    'initJokes'
  ])
}
</script>

<style lang="css" scoped>
</style>
