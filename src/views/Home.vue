<template>
  <div>
    <Header :user="username" v-if="(auth, $isMobile())" />

    <Guest @login="checkUser" v-if="! auth" />

    <Todos class="mt-5 mb-3" :user="username" v-else />

    <Footer :user="username" v-if="(auth, $isMobile())" />
    
  </div>
</template>

<script>
  import Todos from '@/components/Todo/Todos.vue'
  import Guest from '@/components/Guest'
  import Header from '@/components/layout/Header.vue';
  import Footer from '@/components/layout/Footer.vue';

export default {
  name: 'Home',
  components: {
    Header, Todos, Guest, Footer
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
