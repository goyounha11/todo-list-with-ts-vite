<template>
  <div v-if="!isEditing">
    <input :id="syncedModelValue.id" :checked="syncedModelValue.done" type="checkbox" @change="changeDone">
    <label :for="syncedModelValue.id">{{ syncedModelValue.id }} : {{ syncedModelValue.label }}</label>
    <br>
    <button type="button" @click="editToDoItem">edit</button>
    <button type="button" @click="deleteToDoItem">delete</button>
  </div>
  <ToDoEditForm
      v-else :id="syncedModelValue.id" :label="syncedModelValue.label" @item-edited="itemEdited"
      @edit-cancelled="editCancelled"></ToDoEditForm>
</template>

<script lang="ts" setup>
import {computed, defineEmits, defineProps, PropType, ref} from "vue";
import ToDoEditForm from "@/components/ToDoEditForm.vue";
import {toDoItem} from "@/type";

const props = defineProps({
  modelValue: {
    type: Object as PropType<toDoItem>,
    required: true
  }
});

const isEditing = ref(false);

const emits = defineEmits<{
  (e: "update:modelValue", item: toDoItem): void;
  (e: "item-deleted"): void;
}>();

const changeDone = (): void => {
  syncedModelValue.value = {...syncedModelValue.value, done: !syncedModelValue.value.done};
};
const editToDoItem = (): void => {
  isEditing.value = true;
};
const itemEdited = (newLabel: string): void => {
  syncedModelValue.value = {...syncedModelValue.value, label: newLabel};
  isEditing.value = false;
};
const editCancelled = (): void => {
  isEditing.value = false;
};
const deleteToDoItem = (): void => {
  emits("item-deleted");
};

const syncedModelValue = computed({
  get(): toDoItem {
    return props.modelValue;
  },
  set(value: toDoItem): void {
    emits("update:modelValue", value);
  }
});
</script>

<style scoped>

</style>