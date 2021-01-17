<template>
    <div class="flex-center position-ref full-height">
        <div class="content">
            <div class="row">
                <div class="col-sm-6 hero_img">
                    <img :src="require('../assets/svg/frontpage.svg')" width="250" height="250" />
                </div>

                <div class="login-area col-sm-6">
                    <h1 class="lead pb-2">Welcome</h1>

                    <div class="login-form">
                        <div class="form-group pb-2">
                            <span v-if="setErr" class="btn btn-danger px-2 mb-1 mx-3 py-1">Login failed! Please try again</span>
                            <label class="float-left mb-n2" for="usr">Enter Username</label>
                            <input v-model="username" ref="usrInput" type="text" :class="[error ? 'has-error' : 'has-success']" @keyup.enter="login()" id="usr" placeholder="" class="shadow-none form-control border-top-0 border-right-0 border-left-0" >
                            <span v-if="error" class="text-danger">This field is required and must have at least three character</span>
                        </div>
                        <!-- <div class="form-group">
                            <label class="float-left mb-n2" for="psw">Enter Password</label>
                            <input type="password" id="psw" placeholder="" class="shadow-none form-control border-top-0 border-right-0 border-left-0">
                        </div> -->
                    </div>
                    <button class="btn btn-lg login-btn" @click="login()">Login now</button>
                </div>

            </div>

        </div>
    </div>
</template>

<script>

export default {
    name: 'Guest',
    data() {
        return {
            username: '',
            error: Boolean,
            setErr: false,
        }
    },
    watch: {
        username(e) {
            this.validate(e)
        }
    },
    methods: {
        validate(e) {
            if (e == null) {
                this.error = true
            }
            else if (e.length < 2) {
                this.error = true
            } else {
                this.error = false
            }
        },

        async login() {
            if (this.username == '' || this.username.length < 2) {
                this.error = true
            } else if (this.error) {
                return ''
            } else {
               await localStorage.setItem('name', this.username);     
                if (localStorage.getItem('name') == null || localStorage.getItem('name') == 'undefined') {
                    this.error = true
                    this.setErr = true;
                    this.username = ''
                } else {
                    this.$emit("login");
                   
                }                
                
            }
        }
    },
    mounted() {
        this.$refs.usrInput.focus()
    }

}
</script>

<style scoped>
    .top-right {
        position: absolute;
        right: 10px;
        top: 18px;
    }
    .content {
        text-align: center;
    }
    .title {
        font-size: 60px;
    }
    .links > a {
        color: #636b6f;
        padding: 0 25px;
        font-size: 12px;
        font-weight: 600;
        letter-spacing: .1rem;
        text-decoration: none;
        text-transform: uppercase;
    }
    .m-b-md {
        margin-bottom: 30px;
        color: #000000;
    }
</style>>