<template>
  <div class="ucp shadow solidnews topnews">
    <span class="breadcrumps text-left">
      <strong>
        <router-link to='/'>Home</router-link>

        <template>

          <template v-for='(route, i) in crumbs()'>
             »
            <router-link
              :key="i"
              v-if="i != crumbs().length -1"
              :to="route.path">{{route.name}}
            </router-link>

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
    <hr class='bottom' />
  </div>
</template>

<style scoped>
.ucp {
  padding: 15px;
  min-height: 60vh;
  margin-bottom: 30px;
  position: relative;
}

hr.bottom {
  position: absolute;
  bottom: 0;
  width: 95%;
}

.breadcrumps {
  font-size: 20px;
}
</style>

<script>
export default {
  methods: {
    crumbs() {
      let links = []
      this.$route.matched.map(r=> {
        if (r.path && r.name)
          links.push({path: r.path, name: r.name})
      })
      return links
    }
  }
}
</script>