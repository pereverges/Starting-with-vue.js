<template>
  <div class="col-md-4">
    <div class="character-card" @click="switchCharacter">
      <div class="card-block">
        <h4 class="card-title">{{character.name}}</h4>
        <p class="card-text">Height: {{character.height}}cm</p>
        <p class="card-text">Mass: {{character.mass}}kg</p>
        <p class="card-text">Hair color: {{character.hair_color}}</p>
        <p class="card-text">Eye color: {{character.eye_color}}</p>
      </div>
    </div>
    <button class="btn btn-primary" style="margin: auto; margin-top: 2px; width: 100%" @click="lastCharacter">Last character</button>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data () {
    return {
      actual_id: 1,
      last_id: 1,
      character: {}
    }
  },
  methods: {
    fetchCharacter(id) {
      fetch(`https://swapi.co/api/people/${id}`, {
        method: 'GET'
      }).then(response => response.json())
        .then(json => this.character = json)
    },
    switchCharacter(){
      let random_id = Math.floor(Math.random()*83)+1
      this.last_id = this.actual_id,
      this.actual_id = random_id,
      this.fetchCharacter(random_id)

    },
    lastCharacter() {
      this.actual_id = this.last_id,
      this.fetchCharacter(this.last_id)
    }
  },
  created(){
    this.fetchCharacter(this.id)
  }
}
</script>
