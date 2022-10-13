<template>
  <div v-if="!isEditing">
    <input :id="syncedModelValue.id" :checked="syncedModelValue.done" type="checkbox" @change="syncedModelValue.done = !syncedModelValue.done">
    <label :for="syncedModelValue.id">{{syncedModelValue.id}} :  {{syncedModelValue.label}}</label>
    <br>
    <button type="button" @click="toggleToDoEditForm">edit</button>
    <button type="button" @click="deleteToDoItem">delete</button>
  </div>
  <to-do-edit-form v-else :id="syncedModelValue.id" :label="syncedModelValue.label" @item-edited="itemEdited" @edit-cancelled="editCancelled"></to-do-edit-form>
</template>

<script>

import ToDoEditForm from "@/components/ToDoEditForm";

export default {
  components: {ToDoEditForm},
  props : {
    modelValue : {
      type: Object,
      required : true
    }
  },
  methods: {
    toggleToDoEditForm() {
      this.isEditing = true;
    },
    itemEdited(newLabel) {
      this.syncedModelValue.label = newLabel;
      this.isEditing = false;
    },
    editCancelled() {
      this.isEditing = false;
    },
    deleteToDoItem() {
      this.$emit('item-deleted');
    },
  },
  data() {
    return {
      isEditing: false,
    }
  },
  computed: {
    syncedModelValue: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value)
      }
    }
  },
  name: "ToDoItem"
}
</script>

<style scoped>

</style>