<template>
  <div>
    <div class="wide-card">
        <div class="container">
            <h1 class="display-3 mb-3">Whoops! Page not found</h1>
            
            <p class="lead">
                <a class="back-btn" href="/" role="button">Go to homepage</a>
            </p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'NotFound'
}
</script>

<style>
  .wide-card {
    padding: 20px 30px;
    text-align: center;
    display: flex;
    height: 100vh;
    align-items: center;
  }
  .back-btn {
    background-color: #270033;
    border-color: #26003f;
    display: inline-block;
    padding: 20px 25px;
    border-radius: 3rem;
    color: #fff;
    text-decoration: none;
  }
  .back-btn:focus, .back-btn:active {
    color: white!important;
  }
</style>