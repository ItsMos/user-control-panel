<template>
<div>
  <table class='table text-center'>
    <thead>
      <th>Username</th>
      <th>Submitted At</th>
      <th>App ID</th>
    </thead>
    <tbody>
      <tr>
        <td>{{app.username}}</td>
        <td>{{new Date(app.lastChange).toLocaleString()}}</td>
        <td>{{app._id}}</td>
      </tr>
    </tbody>
  </table>

  <template v-for='(q, i) in app.questions'>
    <h5 :key='i'>{{q}}</h5>
    <p :key='i + 10'>{{app.answers[i]}}</p>
  </template>
  
  <form @submit.prevent v-if='app._id' class='mb-3'>
    <div class='form-group'>
      <label for='comment'>Comments: (optional)</label>
      <textarea class='form-control' v-model='comment' id='comment'></textarea>
    </div>
    <div class='text-center'>
      <button @click="submit(true)" class='btn btn-primary'>Accept</button>
      <button @click="submit()" class='btn btn-danger ml-1'>Deny</button>
    </div>
  </form>
</div>
</template>

<script>
export default {
  async created() {
    let id = this.$route.params.id
    let {app} = await ajax('/admin?app='+id)
    this.app = app || {}

    if (!this.app._id) {
      alert('application is being reviewd by someone else')
    }
  },

  data() {
    return {
      app: {},
      comment: ''
    }
  },

  methods: {
    async submit(accept) {
      await ajax('/admin', {
        reviewApp: this.app._id,
        comment: this.comment,
        accept
      }, 'post')

      this.$router.push('/ucp/admin/apps')
    }
  }
}
</script>

<style scoped>
  h5 {font-weight: bold}
  p {border-bottom: 1px solid #c4c4c4}
</style>