<template>
  <div>
  <div>
    <Header :user="username" v-if="(auth, !$isMobile())" />

    <Guest @login="checkUser" v-if="! auth" />

    <Todos class="mt-5 mb-3" :user="username" v-else />

    <Modal @close-modal="openModal=false" v-if="openModal">
      <MobileTask />
    </Modal>
  </div>

  

  <Footer @loadPage="showModal($event)" :user="username" v-if="(auth, $isMobile())" />
    
  </div>
</template>

<script>
  import Todos from '@/components/Todo/Todos.vue'
  import Guest from '@/components/Guest'
  import Header from '@/components/layout/Header.vue';
  import Footer from '@/components/layout/Footer.vue';
  import Modal from "../components/plugins/Modal";
  import MobileTask from "../components/Todo/MobileTask"

export default {
  name: 'Home',
  components: {
    Header, Todos, Guest, Footer, Modal, MobileTask
  },

  data() {
    return {
      auth: Boolean,
      username: '',
      component: 'AddTask',
      openModal: false,
      loadMobilePage: null
    }
  },

  methods: {
    showModal(evt) {
      // this.loadMobilePage = evt;
      console.log(evt);
      this.openModal = true;
      
    },
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
