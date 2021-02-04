<template>
  <div>
    <div class="mobile-nav-space"></div>
    <nav class="mobile-nav-menu fixed-bottom">
        <div class="menu-list row">
            <div class="navbar-brand col"><a :to="{name: 'Home'}" class=" menu-link"><i class="fas fa-tachometer-alt"></i></a></div>
            <div class="navbar-brand col" @click="loadPage('taskList')"><router-link to="/" class="menu-link"><i class="fas fa-tasks"></i></router-link></div>
            <div class="navbar-brand col" @click="loadPage('add-task')"><router-link to="/add-task"  class="menu-center no-mg"><i class="fas fa-plus mx-auto w-100"></i></router-link></div>
            <router-link to="#" class="navbar-brand menu-link col"><i class="far fa-calendar"></i></router-link>
            <router-link to="#" class="navbar-brand menu-link col"><i class="far fa-user"></i></router-link>
        </div>
    </nav>
  </div>
  
</template>

<script>
export default {
    name: "Footer",
    props: ["user"],
    methods: {
        loadPage(evt) {
            if(this.$isMobile()) {
                this.$router.go(`\${evt}`)
            } else {
                this.$emit('loadPage', evt);
            }
        }
    }
}
</script>

<style>
    @media (max-width: 400px) {
        .no-mg {
            margin-right: 0px!important;
        }
    }
    @media (min-width: 630px) {
        .menu-center {
            margin-right: 85px!important;
            flex-grow: 0.2!important;
        }
    }
    .mobile-nav-menu {
        background: #3c003e;
        z-index: 1;
        padding: 10px 10px;
        /* box-shadow: -2px -2px 15px 6px #ddd; */
    }
    .mobile-nav-space {
        height: 95px;
    }
    .menu-list {
        margin: 0 auto;
    }
    .menu-center {
        background: #f8f9fa;
        border-radius: 50%;
        font-size: 1.9rem!important;
        color: #3c003e;
        /*top: -5px;*/
        width: 100%!important;
        transition: all .6s;
        padding: 10px 0;
        z-index: 2000;
    }
    .menu-link {
        color: #bfbfbf!important;
        font-size: 1.9rem!important;
        margin: 0 9px!important;
        transition: all .6s;
    }
    .menu-center:focus, .menu-center:hover {
        /* box-shadow: 0px 5px 8px 11px #ddd; */
        color: #fff!important;
        background: #210022;
    }
    .menu-link:hover, .menu-link:focus {
        color: #ffffff!important;
    }

</style>