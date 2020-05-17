<template>
<div class="admin">
  <appStats/>
  
  <div class="input-group mb-3">
    <div class="input-group-prepend">
      <label class="input-group-text" for="search">🔍 Player Search</label>
    </div>
    <input id='search' type="text" class="form-control" placeholder='Search here...' v-model='query' @keydown.enter='search'>

    <select class='input-group-append' v-model='searchBy'>
      <option value='username'>Username</option>
      <option value='character'>Character Name</option>
    </select>
  </div>

  <div v-if='results' class="results d-flex justify-content-center">
    <p>
      Found {{results.length}} /
      <a href="#" @click.prevent='results = null'>Clear Results</a>
    </p>
    
    <div v-for='(res, i) in results' :key='i' class="card">
      <template v-if='res.ownerId'>
        <h5 class="card-header">{{res.name}}</h5>
        <div class="card-body">
          <h6><strong>Money: </strong>{{res.cash + res.bank}}</h6>
          <h6><strong>Gender: </strong>{{res.gender == 'm'? 'male' : 'female'}}</h6>
          <h6><strong>Age: </strong>{{res.age}}</h6>
        </div>
        <router-link :to="'admin/character/'+res._id" class='card-footer btn btn-primary'>View</router-link>
      </template>

      <template v-else>
        <h5 class="card-header">{{res.username}}</h5>
        <div class="card-body">
          <h6><strong>Member since:</strong> {{new Date(res.created).toDateString()}}</h6>
          <h6><strong>Email:</strong> {{res.email}}</h6>
        </div>
        <router-link :to="'admin/account/'+res._id" class='card-footer btn btn-primary'>View</router-link>
      </template>
    </div>

  </div>

</div>
</template>

<style scoped>

.results {
  flex-wrap: wrap;
}
.results p:first-of-type {
  width: 100%;
  text-align: center;
}
.results .card {
  min-width: 225px;
  text-align: center;
  margin-right: 15px;
}
.results .card .card-header {
  color: #fff;
  background: #042E59;
}

.results .card .btn {
  background: rgba(6, 85, 171, 0.88);
}

</style>

<script>
import appStats from '@/components/adminAppsStats'

export default {
  components: {
    appStats
  },

  data() {
    return {
      results: null,
      query: '',
      searchBy: 'username'
    }
  },

  methods: {
    async search() {
      this.query = this.query.trim()
      this.results = []
      if (!this.query) return

      if (this.searchBy == 'username') {
        let res = await ajax('/admin?accounts='+this.query)
        this.results = res.accounts

      } else if (this.searchBy == 'character') {
        let res = await ajax('/admin?chars='+this.query)
        this.results = res.chars
      }
    }
  }
}
</script>