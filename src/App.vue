<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h1>To-Do-List</h1>
  <to-do-form @todo-added="addToDo"></to-do-form>
  <h2>{{summary}}</h2>
  <ul>
    <li v-for="item in ToDoItems" :key="item.id">
      <to-do-item :id="item.id" :label="item.label" :done="item.done" @checkbox-changed="updatedDoneStatus(item.id)"></to-do-item>
    </li>
  </ul>
</template>

<script>
import ToDoItem from "@/components/ToDoItem";
import ToDoForm from "@/components/ToDoForm";
import uniqueId from "lodash.uniqueid";

export default {
  name: 'App',
  components: {
    ToDoItem,
    ToDoForm,
  },
  methods: {
    addToDo(label) {
      this.ToDoItems.push({
        id: uniqueId('todo-'), label: label, done: false
      });
    },
    updatedDoneStatus(toDoId) {
      console.log(toDoId);
      const toDoItemStatus = this.ToDoItems.find((item) => item.id === toDoId);

      toDoItemStatus.done = !toDoItemStatus.done;
    }
  },
  data() {
    return {
      ToDoItems: [
      ]
    };
  },
  computed: {
    summary() {
      const countDoneStatus = this.ToDoItems.filter((item) => item.done).length

      return `${this.ToDoItems.length}개 중 ${countDoneStatus}개 완료!`;
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
