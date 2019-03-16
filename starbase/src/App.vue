<template lang="html">
  <div id="app">
    <h3>{{title}}</h3>
    <div class="row justify-content-md">
        <Character
          v-for="(id) in ids"
          :id="id" />
    </div>
  </div>
</template>

<script>
import Character from './components/character.vue'
export default {
  name: 'app',
  data() {
    return {
      title: 'Generate Your Team',
      ids: [1, 13, 14]
    }
  },
  components: {
    Character
  }
}
</script>
