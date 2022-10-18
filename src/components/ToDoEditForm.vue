<template>
  <form @submit.prevent="onSubmit">
    <div>
      <label :for="id">Edit Name for {{label}}</label><br>
      <input :id="id" v-model.lazy.trim="newLabel" autocomplete="off" type="text">
      <button type="submit">save</button>
      <button type="button" @click="onCancel">cancel</button>
    </div>
  </form>
</template>

<script lang="ts" setup>
import {defineEmits, defineProps, ref} from "vue";

const props = defineProps({
  label: String,
  id: String
});

const newLabel = ref<string>('')

const emit = defineEmits([
    'item-edited', 'edit-cancelled'
]);

const onSubmit = (): void => {
  if(newLabel.value && newLabel.value !== props.label) {
    emit('item-edited', newLabel.value);
  }
}
const onCancel = (): void => {
  emit('edit-cancelled')
}
</script>

<style scoped>

</style>