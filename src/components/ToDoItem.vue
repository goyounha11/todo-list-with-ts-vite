<template>
  <div>
    <input :id="toDoItem.id" :checked="toDoItem.done" type="checkbox" @change="$emit('checkbox-changed')">
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
  name: "ToDoItem"
}
</script>

<style scoped>

</style>