<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h1>To-Do-List</h1>
  <to-do-form @todo-added="addToDo"></to-do-form>
  <h2>{{summary}}</h2>
  <ul>
    <li v-for="(item, index) in toDoItems" :key="item.id">
      <to-do-item :toDoItem="item" @checkbox-changed="updatedDoneStatus(item.id, index)"></to-do-item>
    </li>
  </ul>
</template>

<script>
import ToDoItem from "@/components/ToDoItem";
import ToDoForm from "@/components/ToDoForm";

export default {
  name: 'App',
  components: {
    ToDoItem,
    ToDoForm,
  },
  methods: {
    addToDo(newItem) {
      this.toDoItems = [...this.toDoItems, newItem];
    },
    updatedDoneStatus(toDoId, index) {
      const toDoItemStatus = this.toDoItems.find((item) => item.id === toDoId);

      const obj = {...toDoItemStatus, done: !toDoItemStatus.done};

      this.toDoItems.splice(index, 1, obj);
    }
  },
  data() {
    return {
      toDoItems: []
    };
  },
  computed: {
    summary() {
      const countDoneStatus = this.toDoItems.filter((item) => item.done).length

      return `${this.toDoItems.length}개 중 ${countDoneStatus}개 완료!`;
    }
  }
}
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
