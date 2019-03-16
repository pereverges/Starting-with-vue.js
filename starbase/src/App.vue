<template lang="html">
  <div id="app">
    <h3>{{title}}</h3>
    <div class="row justify-content-md">
        <Character
          v-for="(id, index) in intial_ids"
          :id="id"
          key="index" />
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
      intial_ids: [1, 13, 14]
    }
  },
  components: {
    Character
  }
}
</script>
