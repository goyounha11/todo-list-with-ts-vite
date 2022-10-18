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

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "ToDoEditForm",
  props: {
    label: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    }
  },
  methods: {
    onSubmit() {
      if(this.newLabel && this.newLabel !== this.label) {
        this.$emit("item-edited", this.newLabel);
      }
    },
    onCancel() {
      this.$emit("edit-cancelled");
    }
  },
  data() {
    return {
      newLabel: this.label,
    };
  }
});
</script>

<style scoped>

</style>