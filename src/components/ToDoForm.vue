<template>
  <form @submit.prevent="onSubmit">
    <label for="new-todo-item">할 일을 추가하세요.</label>
    <input id="new-todo-item" v-model="text" autocomplete="off" type="text">
    <button type="submit">추가</button>
  </form>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {uniqueId} from "lodash-es";

export default defineComponent({
  name: "ToDoForm",
  methods: {
    onSubmit() {
      if(this.text === '') {
        return;
      }

      this.$emit("todo-added", {
        id : uniqueId('to-do'),
        label: this.text,
        done: false
      });

      this.text = "";
    }
  },
  data() {
    return {
      text : ''
    };
  }
});
</script>

<style scoped>

</style>