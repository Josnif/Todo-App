<template>
  <div>
    <div class="container">
        <div class="row justify-content-center">
            <Task />
            <div class="my-card mt-5">
                <h4 class="" @click="openModal = true">Add New Category</h4>
            </div>
        </div>
    </div>
    <Modal @close-modal="openModal=false" v-if="openModal">
        <AddCategory @close-modal="openModal=false" />
    </Modal>
  </div>
</template>

<script>
// import TodoItem from './TodoItem.vue';
import Modal from "./Modal"
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
    },
    mounted(){
        // console.log(this.$store.state.tasks)
    }  

}

</script>
<style scoped>
  .my-card {
    box-shadow: 2px 3px 15px 4px #ddd, -2px -3px 15px 4px #ddd;
    background-color: #fff;
    padding: 30px;
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