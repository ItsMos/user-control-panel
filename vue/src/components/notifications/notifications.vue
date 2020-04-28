<template>
  <div class="notifications">
    <transition-group name="list">
      <div v-for="(item, i) in list"
        class="notify"
        :class="item.color? 'bg-'+item.color:null"
        :key="i"
      >
        <p><i class="far fa-bell"></i> {{item.text}}</p>
      </div>
    </transition-group>
  </div>
</template>

<style scoped>
.notifications {
  position: fixed;
  top: 15px;
  right: 15px;
  z-index: 15;
  user-select: none;
}

.notify {
  color: #fff;
  background: #c4c4c4;
  padding: 10px 20px;
  margin: 4px;
  border-radius: 4px;
}
.notify p {
  margin: 0;
}

.fa, .far {
  margin-right: 6px;
}

.list-move {
  transition: transform 0.3s, opacity 0.4s;
}
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: opacity 0.4s;
}
.list-enter, .list-leave-to  /* .list-leave-active for <2.1.8 */ {
  opacity: 0;
}
</style>

<script>
let data = {
  list: []
}
export default {
  data() {
    return data
  },

  methods: {
    notify(obj) {
      data.list.push(obj)
      setTimeout(() => {
        let x = data.list.indexOf(obj)
        data.list.splice(x, 1)
      }, obj.timeout || 4000)
    }
  }
}
</script>