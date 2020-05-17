<template>
<div>
  <appStats/>

  <h2 class='text-center'>{{view}} applications</h2>

  <table class="table text-center">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Username</th>
        <template v-if="view == 'Pending'">
          <th scope="col">Time Applied</th>
          <th scope="col"></th>
        </template>
        <th v-if="view != 'Pending'">{{view}} By</th>
      </tr>
    </thead>
    <tbody>
      <tr v-if='apps.length == 0'>
        <td colspan='99'> No applications </td>
      </tr>

      <tr scope='row'
        v-for='(app, i) in apps'
        :key='i'
      >
        <th scope='row'>{{i+1}}</th>
        <td>{{app.username}}</td>
        <template v-if="view == 'Pending'">
          <td>{{new Date(app.lastChange).toLocaleString()}}</td>
          <td>
            <router-link :to="'app/'+app._id" class="btn btn-primary">Review</router-link>
          </td>
        </template>

        <td v-if="view != 'Pending'">
          {{app.reviewedBy}}
        </td>
      </tr>

      <tr v-if='!noMore'>
        <td colspan='10'>
          <button @click='loadMore' class='btn btn-info'>Load More</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
import appStats from '@/components/adminAppsStats'
export default {
  components: {appStats},

  async created() {
    let v = this.$route.query.v
    if (v) {
      if (this.views.includes(v)) {
        this.view = v
      }
    }

    let {apps} = await ajax(`/admin?apps=${this.view}`)
    this.apps = apps
  },

  data() {
    return {
      views: ['Pending', 'Accepted', 'Denied'],
      view: 'Pending',
      apps: [],
      noMore: false
    }
  },

  methods: {
    async loadMore() {
      let {apps} = await ajax(`/admin?apps=${this.view}&skip=${this.apps.length}`)
      apps.forEach(app => {
        this.apps.push(app)
      })

      if (apps.length == 0)
        this.noMore = true
    }
  },

  watch: {
    '$route.query': async function() {
      this.noMore = false

      let v = this.$route.query.v
      if (v) {
        if (this.views.includes(v)) {
          this.view = v
        }
      }

      let {apps} = await ajax(`/admin?apps=${this.view}`)
      this.apps = apps
      
    }
  }
}
</script>

<style>

</style>