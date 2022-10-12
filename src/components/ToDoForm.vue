<template>
  <form @submit.prevent="onSubmit">
    <label for="new-todo-item">할 일을 추가하세요.</label>
    <input type="text" id="new-todo-item" autocomplete="off" v-model="label">
    <button type="submit">추가</button>
  </form>
</template>

<script>
export default {
  methods: {
    onSubmit() {
      if(this.label === '') {
        return;
      }
      this.$emit("todo-added", this.label);
      this.label = "";
    }
  },
  data() {
    return {
      label : ""
    };
  },
  name: "ToDoForm"
}
</script>

<style scoped>

</style>