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

<script>
export default {
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
  data() {
    return {
      newLabel: this.label,
    };
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
  name: "ToDoEditForm"
}
</script>

<style scoped>

</style>