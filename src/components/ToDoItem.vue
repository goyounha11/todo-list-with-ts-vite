<template>
  <div>
    <input type="checkbox" :id="id" :checked="isDone" @change="$emit('checkbox-changed')">
    <label :for="id">{{id}} :  {{label}}</label>
  </div>
</template>

<script>

export default {
  props : {
    id : {required: true, type: String},
    label: { required: true, type: String },
    done : { default : false, type: Boolean }
  },
  data() {
    return {
      isDone : this.done
    }
  },
  name: "ToDoItem"
}
</script>

<style scoped>

</style>