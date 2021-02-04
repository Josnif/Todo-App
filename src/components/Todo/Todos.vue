<template>
  <div>
    <div class="container">
        <div class="row justify-content-center">
            <Task />
        </div>
        <div class="add-btn-lg mt-5 mb-3">
            <h4 class="" @click="openModal = true">Add New Category</h4>
        </div>
    </div>
    <Modal @close-modal="openModal=false" v-if="openModal">
        <AddCategory @close-modal="openModal=false" />
    </Modal>
  </div>
</template>

<script>
// import TodoItem from './TodoItem.vue';
import Modal from "../plugins/Modal"
import AddCategory from "./AddCategory"
import Task from "./Task"

export default {
    name: "Todos",
    props: ['user'],
    components: {
      Modal,
      AddCategory,
      Task
        // TodoItem
    },

    data(){
      return {
          openModal: false,
      }
    },
    methods : {
        
    },
    created() {
        this.$store.get('tasks');
        this.$store.get('categories');

        console.log(this.$isMobile())
    },
    mounted(){
        // console.log(this.$store.state.tasks)
    }  

}

</script>
<style scoped>
  .add-btn-lg {
    box-shadow: 1px 2px 0px 0px #ddd, -1px -2px 0px 0px #ddd;
    background-color: #21003e;
    padding: 25px 35px;
    text-align: center;
    margin: 0 auto;
    width: 50%;
    border-radius: 3rem;
    color: #fff;
  }
  .card {
        border:0;
        border-radius: 0.5rem;
    }
    .transit-1 {
        transition: all 1s;
    }
    .small-card {
        padding: 1rem;
        background: #f5f8fa;
        margin-bottom: 5px;
        border-radius: .25rem;
    }
    .card-body-dark{
        background-color: #ccc;
    }
    textarea {
        overflow: visible;
        outline: 1px dashed black;
        border: 0;
        padding: 6px 0 2px 8px;
        width: 100%;
        height: 100%;
        resize: none;
    }
</style>