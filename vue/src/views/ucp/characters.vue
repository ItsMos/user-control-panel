<template>
<div class="row justify-content-center">
  <h4 v-if='!characters || characters.length < 1'
  class='text-center ml-3'>You haven't created any characters yet, hop in game and create one :)</h4>
  
  <div v-for="(char, id) in characters" class="col-sm-4">
    <router-link class='card-link' :to="'/ucp/characters/'+id">
      <div class="card border rounded-0 shadow">
        <h3 class='charName'>{{char.name}}</h3>
        <h5>Age: {{char.age}}</h5>
        <h5>Cash: {{char.cash}}</h5>
        <h5>Bank Money: {{char.bank}}</h5>
        <button
          class="btn btn-light btn-block btn-sm"
          type="button"
          style="background-color: #042E59;color: #fff;"
        >SELECT</button>
      </div>
    </router-link>
  </div>
</div>
</template>

<style scoped>
.charName {
  color: #fff;
  background: #042E59;
  padding: 8px 0;
}
.card {
  text-align: center;
}
</style>

<script>
export default {
  async created() {
    let res = await ajax('/getcharacters')
    this.characters = res.characters
  },

  data() {
    return {
      characters: []
    }
  }
}
</script>