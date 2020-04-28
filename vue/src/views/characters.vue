<template>
  <div class="shadow solidnews topnews" style="margin-bottom: 15px;">
    <h2 class="text-left mt-2" style="font-size: 20px;margin-left: 15px;">
      <strong>
        <router-link to='/'>Home</router-link> »
        <router-link to='/ucp'>UCP</router-link> » Characters
      </strong>
    </h2>
    <hr />
    <div style="margin: 0 15px;">
      <div class="row">
        <h4 v-if='!characters || characters.length < 1'
        class='text-center ml-3'>You haven't created any characters yet, hop in game and create one :)</h4>
        
        <div v-for="(char, id) in characters" class="col-sm-4">
          <router-link class='card-link' :to="'/ucp/characters/'+id">
            <div class="card border rounded-0 shadow">
              <h3 class='charName'>{{char.name}}</h3>
              <h5>Age: {{char.age}}</h5>
              <h5>Money: N/A</h5>
              <h5>Bank Money: N/A</h5>
              <button
                class="btn btn-light btn-block btn-sm"
                type="button"
                style="background-color: #042E59;color: #fff;"
              >SELECT</button>
            </div>
          </router-link>
        </div>
      </div>
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
  async mounted() {
    let ajax = await fetch("/getcharacters", {
      headers: { "Content-Type": "application/json", Authorization: localStorage.jwt }
    })

    ajax = await ajax.json()
    this.characters = ajax.characters
  },

  data() {
    return {
      characters: []
    }
  }
}
</script>