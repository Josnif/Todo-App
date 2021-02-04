<template>
  <div id="app">
    <div v-if="pageLoading" class="preload d-flex justify-content-center">
      <div class="align-content-center spinner-border"></div>
    </div>
    <router-view class="h-100 mh-100" v-else/>
  </div>
</template>

<script>
    // bring the auth out, and somethings in Home page here.
export default {
  components: {
  },
  data() {
    return {
      pageLoading: true
    }
  },
  created() {
    setTimeout(() => {
      this.pageLoading = false;
    }, 2000);
  },
  mounted() {

  }

}
</script>

<style>

/*
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
*/
</style>
