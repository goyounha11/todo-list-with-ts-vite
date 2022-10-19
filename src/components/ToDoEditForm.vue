<template>
  <form @submit.prevent="onSubmit">
    <div>
      <label :for="id">Edit Name for {{ label }}</label
      ><br />
      <input
        :id="id"
        v-model.lazy.trim="newLabel"
        autocomplete="off"
        type="text"
      />
      <button type="submit">save</button>
      <button type="button" @click="onCancel">cancel</button>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { defineEmits, defineProps, ref } from "vue";

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
});

const newLabel = ref("");

const emits = defineEmits<{
  (e: "item-edited", item: string): void;
  (e: "edit-cancelled"): void;
}>();

const onSubmit = (): void => {
  if (newLabel.value && newLabel.value !== props.label) {
    emits("item-edited", newLabel.value);
  }
};
const onCancel = (): void => {
  emits("edit-cancelled");
};
</script>

<style scoped></style>
