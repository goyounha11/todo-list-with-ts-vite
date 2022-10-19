<template>
  <div v-if="!isEditing">
    <input
      :id="modelValue.id"
      :checked="modelValue.done"
      type="checkbox"
      @change="changeDone"
    />
    <label :for="modelValue.id"
      >{{ modelValue.id }} : {{ modelValue.label }}</label
    >
    <br />
    <button type="button" @click="editToDoItem">edit</button>
    <button type="button" @click="deleteToDoItem">delete</button>
  </div>
  <ToDoEditForm
    v-else
    :id="modelValue.id"
    :label="modelValue.label"
    @item-edited="itemEdited"
    @edit-cancelled="editCancelled"
  ></ToDoEditForm>
</template>

<script lang="ts" setup>
import { defineEmits, defineProps, ref } from "vue";
import ToDoEditForm from "@/components/ToDoEditForm.vue";
import { toDoItem } from "@/type";
import { useVModel } from "@vueuse/core";

const props = withDefaults(
  defineProps<{
    modelValue: toDoItem;
  }>(),
  { modelValue: undefined },
);

const isEditing = ref(false);

const emits = defineEmits<{
  (e: "update:modelValue", item: toDoItem): void;
  (e: "item-deleted"): void;
}>();

const data = useVModel(props, "modelValue", emits);

const changeDone = (): void => {
  data.value = {
    ...data.value,
    done: !data.value.done,
  };
};
const editToDoItem = (): void => {
  isEditing.value = true;
};
const itemEdited = (newLabel: string): void => {
  data.value = { ...data.value, label: newLabel };
  isEditing.value = false;
};
const editCancelled = (): void => {
  isEditing.value = false;
};
const deleteToDoItem = (): void => {
  emits("item-deleted");
};
</script>

<style scoped></style>
