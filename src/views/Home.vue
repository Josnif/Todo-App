<template>
  <div>
    <Header :user="username" v-if="auth" />

    <Guest @login="checkUser" v-if="! auth" />

    <Todos class="mt-5" :user="username" v-else />
    
  </div>
</template>

<script>
  import Todos from '@/components/Todo/Todos.vue'
  import Guest from '@/components/Guest'
  import Header from '@/components/layout/Header.vue';

export default {
  name: 'Home',
  components: {
    Header, Todos, Guest
  },

  data() {
    return {
      auth: Boolean,
      username: ''
    }
  },

  methods: {
    checkUser() {

      if (localStorage.getItem('name') == null || localStorage.getItem('name') == "undefined") {
        this.auth = false
      } else {
        this.auth = true
        this.username = localStorage.getItem('name');
      }

    }
  },
  
  created() {
    this.checkUser()
  }
  
}
</script>

<style>
 

</style>
