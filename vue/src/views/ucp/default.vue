<template>
  <div class="ucp shadow solidnews topnews">
    <span class="breadcrumps text-left">
      <strong>
        <router-link to='/'>Home</router-link> »
        <template v-if="$route.name == 'UCP'">
          UCP 
        </template>
        <template v-else>
          <router-link to='/ucp'>UCP</router-link>

          <template v-for='(route, i) in crumbs()'>
             »
            <router-link
              v-if="i != crumbs().length -1"
              :key="i"
              to="">{{route.name}}</router-link>
            <template v-else>{{route.name}}</template>
          </template>
        </template>
                
      </strong>
    </span>
    <hr />

    <section
      v-if="$user.quizPassed === false && $route.name != 'Quiz'"
      class='alert alert-primary text-center mt-5 mb-5'>
      Hello, please take this roleplay quiz to be able to play 
      <router-link class='btn btn-primary' to='/ucp/quiz'>Take Quiz</router-link>
    </section>

    <router-view v-else></router-view>
    <hr />
  </div>
</template>

<style scoped>
.ucp {
  padding: 15px;
}

.breadcrumps {
  font-size: 20px;
}
</style>

<script>
export default {
  methods: {
    crumbs() {
      return this.$route.matched.slice(2)
    }
  }
}
</script>