<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h1>To-Do-List</h1>
  <to-do-form @todo-added="addToDo"></to-do-form>
  <h2>{{summary}}</h2>
  <ul>
    <li v-for="(item, index) in toDoItems" :key="item.id">
      <to-do-item v-model="toDoItems[index]" @item-deleted="deleteToDo(item.id)"></to-do-item>
    </li>
  </ul>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import ToDoItem from "@/components/ToDoItem.vue";
import ToDoForm from "@/components/ToDoForm.vue";
import {toDoItem} from "@/type";


export default defineComponent({
  name: 'App',
  components: {
    ToDoItem,
    ToDoForm,
  },
  methods: {
    addToDo(newItem: toDoItem) {
      this.toDoItems = [...this.toDoItems, newItem];
    },
    deleteToDo(id: string) {
      this.toDoItems = this.toDoItems.filter((item: toDoItem) => item.id !== id);
    }
  },
  data() {
    return {
      toDoItems: [] as Array<toDoItem>
    };
  },
  computed: {
    summary(): string {
      const countDoneStatus = this.toDoItems.filter((item:toDoItem) => item.done).length

      return `${this.toDoItems.length}개 중 ${countDoneStatus}개 완료!`;
    }
  }
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