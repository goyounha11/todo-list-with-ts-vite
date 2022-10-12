<template>
  <div>
    <input :id="toDoItem.id" :checked="isDone" type="checkbox" @change="$emit('checkbox-changed')">
    <label :for="toDoItem.id">{{toDoItem.id}} :  {{toDoItem.label}}</label>
  </div>
</template>

<script>

export default {
  props : {
    toDoItem : {
      type: Object,
      required : true
    }
  },
  data() {
    return {
      isDone : this.toDoItem.done
    }
  },
  name: "ToDoItem"
}
</script>

<style scoped>

</style>