<template>
  <div>
    <input :id="syncedModelValue.id" :checked="syncedModelValue.done" type="checkbox" @change="syncedModelValue.done = !syncedModelValue.done">
    <label :for="syncedModelValue.id">{{syncedModelValue.id}} :  {{syncedModelValue.label}}</label>
  </div>
</template>

<script>

export default {
  props : {
    modelValue : {
      type: Object,
      required : true
    }
  },
  methods: {

  },
  data() {
    return {
      isEditing: false,
    }
  },
  computed: {
    syncedModelValue : {
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