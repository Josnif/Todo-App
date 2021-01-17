<template>
  <div>
    <div class="h-100 w-100 out-modal"
        @click="$emit('close-modal')">
    </div>
    
    <div class="flex-center position-abs half-height ">
        <div class="content modal-in shadow-lg">
            <slot></slot>
        </div>
    </div> 
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .half-height {
        height: 100vh;
    }
    .out-modal {
        opacity: 50%;
        background: #ddd;
        position: fixed;
        top: 0;
        z-index: 20;
    }
    .modal-in {
        background:#fff;
        padding: 25px;
        z-index: 30;
    }
    .position-abs {
        position:absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }

</style>