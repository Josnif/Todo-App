<template>
  <div id="app">
    <div v-if="pageLoading" class="preload d-flex justify-content-center">
      <div class="align-content-center spinner-border"></div>
    </div>
    <router-view class="h-100 mh-100" v-else/>
  </div>
</template>

<script>
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  line-height: 1.4;
  overflow: hidden;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    overflow:hidden
}
.bg-col {
  background: #f1f1f1f7;
}
.preload {
  transform: translateY(300px);
}
.full-height {
  height: 100vh;
}
.flex-center {
  align-items: center;
  display: flex;
  justify-content: center;
}
.position-ref {
  position: relative;
}
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
