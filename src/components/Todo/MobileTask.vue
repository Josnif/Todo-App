<template>
  <div class="about">
   <div class="top-banner">
      <div class="itb-1"></div>
      <div class="itb-2"></div>
      <div class="itb-3"></div>
    </div>

    <div class="page-content w-100">

      <div class="page-head">
        <div @click="hasHistory() ? $router.go(-1) : $router.push('/')" class="back-arrow pt-4"><i class="fas fa-arrow-left fa-2x" aria-hidden="true"></i></div>
        <h3 class="pt-3 pb-5 new-task w-75">Create New Task</h3>
        <div class="mx-auto form-row">
          <label class="task_label" for="name">Name</label>
          <input type="text" id="name" class="task_input mx-auto" />
        </div>
      </div>

      <div class="page-body pt-5 px-2">

        <div class="form-row mx-auto mb-5">
          <label class="task_label" for="date">Date</label>
          <input type="date" class="task_input" id="date" v-model="date" >
        </div>

        <div class="form-row mx-auto mb-5">
          <label class="task_label" for="time">Starting Time</label>
          <input type="time" class="task_input" id="time" >
        </div>
        
        <div class="form-row mx-auto">
          <label class="task_label">Category</label>
          <div class="category_list">
            <div class="category-btn" v-for="element in $store.state.categories" :key="element.id">
              {{element.name}}
            </div>
          </div>

          <div class="m-btn" @click="openModal=true">
          <span class="m-fa-plus rounded-circle p-1 mr-1"><i class="fas fa-plus"></i></span> Add tag</div>
          </div>
        
        <div class="page-footer mx-auto">
          <button class="footer-btn"><i class="fa fa-plus-circle" aria-hidden="true"></i> Create Task</button>
        </div>

      </div>
      
    </div>
    <Modal @close-modal="openModal=false" v-if="openModal">
      <AddCategory @close-modal="openModal=false" />
    </Modal>
  </div>
</template>

<script>
// import Modal from "@/components/Todo/Modal"
import AddCategory from "@/components/Todo/AddCategory"

export default {
  name: "MobileTask",
  components: {
      // Modal,
      AddCategory
  },
  data() {
    return {
      openModal: false,
      date: new Date().toISOString().substr(0, 10)
    }
  },
  methods: {
    hasHistory () { return window.history.length > 2 }
  }
}
</script>

<style>
  .about {
    overflow-x: hidden;
  }
  .m-fa-plus {
    background-color: #a58300;
    color: #fff;
    font-size: 15px;
  }
  .category_list {
    width: 100%;
    margin: 10px auto;
    padding: 10px;
    display: flex
  }
  .category-btn {
    position: relative;
    padding: 10px 20px;
    background-color: #f1e3a9;
    color: #a58300;
    border-radius: 2rem;
  }
  .m-btn {
    position: relative;
    right: 15px;
    padding: 10px 20px;
    background-color: #f1e3a9;
    color: #a58300;
    border-radius: 2rem;
    left: 65%;
    margin: 10px;
  }
  .page-footer {
    width: 80%;
    position: relative;
    /*bottom: -100px;*/
    margin-top: 50px
  }
  .footer-btn {
    width: 100%;
    padding: 20px 15px;
    font-size: 1rem;
    background-color: #0426bd;
    color: white;
    border-radius: 5rem;
    border: none;
  }
  .form-row {
    width: 90%!important;
  }
  .new-task {
    font-weight: normal;
    padding: 15px;
    margin-top: 15px;
  }
  .task_label {
    margin-bottom: 0!important;
    font-size: 15px;
    color: #584f4f;
  }
  .task_input:focus {
    border-bottom: 1px solid #030303!important;
    /*border-top: none!important;
    border-right: none!important;
    border-left: none!important;
    border-radius: none!important;*/
    outline: none!important;
  }
  .task_input {
    border-bottom: 1px solid #6d6363;
    border-top: none;
    border-right: none;
    border-left: none;
    display: block;
    width: 100%;
    /* height: calc(1.5em + .75rem + 2px); */
    padding: 0 .75rem;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: inherit;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  }
  .page-head {
    background-color: #e6d178;/* #ffe4c4*/
    height: 46vh;
    padding: 15px;
  }
  .page-body {
    background-color: white;
    height: 54vh;
    margin-top: -20px;
    border-top-left-radius: 2rem!important;
    border-top-right-radius: 2rem!important;
  }
  .back-arrow {
    padding: 10px;
    width: 40px;
    color: rgb(0, 0, 0);
  }
 
</style>
