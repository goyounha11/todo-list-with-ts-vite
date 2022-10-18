<template>
  <form @submit.prevent="onSubmit">
    <label for="new-todo-item">할 일을 추가하세요.</label>
    <input id="new-todo-item" v-model="text" autocomplete="off" type="text">
    <button type="submit">추가</button>
  </form>
</template>

<script lang="ts" setup>
import {defineEmits, ref} from "vue";
import {uniqueId} from "lodash-es";

const text = ref<string>('')

const emit = defineEmits([
  'todo-added'
])

const onSubmit = (): void => {
  if(text.value === ''){
    return
  }

  emit('todo-added', {
    id : uniqueId('to-do'),
    label: text.value,
    done: false
  })

  text.value = ''
}
</script>

<style scoped>

</style>