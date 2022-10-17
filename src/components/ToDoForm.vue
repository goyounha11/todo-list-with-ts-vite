<template>
  <form @submit.prevent="onSubmit">
    <label for="new-todo-item">할 일을 추가하세요.</label>
    <input id="new-todo-item" v-model="text" autocomplete="off" type="text">
    <button type="submit">추가</button>
  </form>
</template>

<script>

import {uniqueId} from 'lodash-es';

export default {
  methods: {
    onSubmit() {
      if(this.text === '') {
        return;
      }

      this.newTodo = {

        id : uniqueId('to-do'),
        label: this.text,
        done: false
      };

      this.$emit("todo-added", this.newTodo);

      this.text = "";
    }
  },
  data() {
    return {
      newTodo : {
        id : '',
        label : '',
        done : ''
      },
      text : ''
    };
  },
  name: "ToDoForm"
}
</script>

<style scoped>

</style>