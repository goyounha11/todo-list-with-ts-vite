<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h1>To-Do-List</h1>
  <ToDoForm @todo-added="addToDo"></ToDoForm>
  <h2>{{ summary }}</h2>
  <ul>
    <li v-for="(item, index) in toDoItems" :key="item.id">
      <ToDoItem v-model="toDoItems[index]" @item-deleted="deleteToDo(item.id)"></ToDoItem>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import {computed, ref} from "vue";
import ToDoItem from "@/components/ToDoItem.vue";
import ToDoForm from "@/components/ToDoForm.vue";
import {toDoItem} from "@/type";

const toDoItems = ref<Array<toDoItem>>([]);

const addToDo = (newItem: toDoItem): void => {
  toDoItems.value = [...toDoItems.value, newItem];
};
const deleteToDo = (id: string): void => {
  toDoItems.value = toDoItems.value.filter((item: toDoItem) => item.id !== id);
};

const summary = computed((): string => {
  const countDoneStatus = toDoItems.value.filter((item: toDoItem) => item.done).length;

  return `${toDoItems.value.length}개 중 ${countDoneStatus}개 완료!`;
});

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>