<template>
  <div v-if="!isEditing">
    <input :id="syncedModelValue.id" :checked="syncedModelValue.done" type="checkbox" @change="changeDone">
    <label :for="syncedModelValue.id">{{syncedModelValue.id}} :  {{syncedModelValue.label}}</label>
    <br>
    <button type="button" @click="editToDoItem">edit</button>
    <button type="button" @click="deleteToDoItem">delete</button>
  </div>
  <to-do-edit-form v-else :id="syncedModelValue.id" :label="syncedModelValue.label" @item-edited="itemEdited" @edit-cancelled="editCancelled"></to-do-edit-form>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";
import ToDoEditForm from "@/components/ToDoEditForm.vue";
import {toDoItem} from "@/type";

export default defineComponent({
  name: "ToDoItem",
  components: {ToDoEditForm},
  props : {
    modelValue : {
      type: Object as PropType<toDoItem>,
      required : true
    }
  },
  methods: {
    changeDone(): void {
      this.syncedModelValue = {...this.syncedModelValue, done: !this.syncedModelValue.done};
    },
    editToDoItem(): void {
      this.isEditing = true;
    },
    itemEdited(newLabel: string): void {
      this.syncedModelValue = {...this.syncedModelValue, label: newLabel};
      this.isEditing = false;
    },
    editCancelled(): void {
      this.isEditing = false;
    },
    deleteToDoItem(): void {
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
      get(): toDoItem {
        return this.modelValue;
      },
      set(value: toDoItem): void {
        this.$emit("update:modelValue", value);
      }
    }
  }
});
</script>

<style scoped>

</style>