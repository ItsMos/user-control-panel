<template>
  <div class="shadow solidnews topnews" style="margin-bottom: 15px;">
    <h2 class="text-left mt-2" style="font-size: 20px;margin-left: 15px;">
      <strong>
        <router-link to='/'>Home</router-link> »
        <router-link to='/ucp'>UCP</router-link> » Quiz
      </strong>
    </h2>
    <hr />

    <section v-if='state.quizSubmitted'>
      <div class="alert alert-warning">
        Application submitted for review, our staff will review it then you'll get a notification of the result to your email.
      </div>
    </section>

    <section v-else-if='state.lastQuizAttempt && !questions'>
      <div class="alert alert-warning">
        You've recently attempted the quiz, please try again in 30 minutes
      </div>
    </section>

    <section v-else-if='questions && !result' style="margin: 0 15px;">
      <h3>Please answer all of the following questions</h3>
      <hr>
      
      <form @submit.prevent='submit'>
        <template v-for="(obj, i) in questions">
          <h4 :key='i'>{{ obj.q }}</h4>
          <div class="ml-4 form-check"
            v-for="(a, x) in obj.a"
            :key="i+''+x"
          >
            <input class="form-check-input" type="radio" :name="'answer'+i"
              :id="'answer'+i+'-'+x"
              :value="a.index"
              v-model="answers[i]"
              required
            >
            <label class="form-check-label" :for="'answer'+i+'-'+x">
              {{ a.ans }}
            </label>
          </div>
        </template>
        
        <button type="submit" class="mt-3 mb-3 btn btn-dark btn-block border rounded-0 border-light" style='background-color: rgb(4,46,89)'>Submit</button>
      </form>
    </section>

    <section v-else-if='result && !questions2' style='margin: 0 15px' class='text-center'>
      <h1>Your score is {{result.score}}</h1>
      <template v-if='!result.pass'>
        <h3 class='text-danger'>FAILED</h3>
        <p>Please try again in 30 minutes</p>
      </template>
      
      <template v-else>
        <h3 class='text-success'>PASSED</h3>

        <button @click='essayQuestions' class='btn btn-primary mb-3'>Proceed to next phase</button>
      </template>
      
    </section>

    <section v-else-if='questions2' class='ml-3 mr-3'>
      <h3>Please answer all of the following questions</h3>
      <form @submit.prevent='submit2'>
        <template v-for="(obj, i) in questions2">
          <div class="form-group" :key="i">
            <label :for="i">{{questions2[i]}}</label>
            <textarea v-model='answers2[i]'
              required minlength="150"
              class="form-control"
              :id="i" rows="3"></textarea>
              <div class="invalid-feedback"
                style="display: block"
                v-if="answers2[i]"
              >
                {{answers2[i].length}} / 150
              </div>
          </div>
        </template>
        <button type="submit" class="mt-3 mb-3 btn btn-dark btn-block border rounded-0 border-light" style='background-color: rgb(4,46,89)'>Finish</button>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  async created() {
    this.state = await ajax('/quizState')
    
    if (this.state.quizPassed)
      return this.$router.push('/ucp')
    
    this.questions = await ajax('/quiz')
  },

  data() {
    return {
      state: {},
      questions: null,
      answers: {},
      result: null,
      questions2: null,
      answers2: {}
    }
  },

  methods: {
    async submit() {
      this.result = await this.ajax('/quiz', {
        answers: this.answers
      }, 'POST')
    },

    async essayQuestions() {
      this.questions2 = await this.ajax('/quiz2')
    },

    async submit2() {
      await this.ajax('/quiz2', {answers: this.answers2}, 'POST')
      this.state.quizSubmitted = true
    }
  }
}
</script>

<style scoped>
  form {user-select: none}
</style>