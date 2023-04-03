/* MergeField vue component */

<template>
  <span>
    <span class="merge-field-label">{{ label }}</span>
    <span class="merge-field-id">{{ id }}</span>
    <button on-click="updateMe">Update</button>
  </span>
</template>

<script>
export default {
  name: "MergeField",
  props: {
    node: {
      type: Object,
      required: true,
    },
    updateAttributes: {
      type: Function,
      required: true,
    },
    label: {
      type: String,
      default: "aaa",
    },
    id: {
      type: String,
      default: "bbb",
    },
  },
  methods: {
    updateMe() {
      this.updateAttributes({
        label: "Updated Label",
        id: "Updated ID",
      });
    },
  }
};
</script>