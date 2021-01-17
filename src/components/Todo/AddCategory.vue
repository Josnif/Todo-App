<template>
  <div>
    <div class="form-group">
      <label for="cate">Add Category</label>
      <input ref="nameInput" type="text" v-model="name" class="form-control" @keyup.enter="addNewCategory" name="" id="cate" placeholder="">
      <small v-if="cateErr" class="form-text text-danger">Fill input field and try again</small>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddCategory',
  data() {
    return {
      cateErr: false,
      name: ''
    }
  },
  methods: {

    addNewCategory() {
      const data = {
          id: this.$uid(),
          name: this.name
      }
      if(data.name == "") {
          this.cateErr = true
          return;    
      }
      this.cateErr = false;
      this.$store.set('categories', data);
      this.$emit("close-modal");
    }

  },
  mounted() {
    this.$refs.nameInput.focus();
  }
}
</script>

<style>

</style>