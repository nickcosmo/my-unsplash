<template>
  <div
    @drop.prevent="fileReceipt"
    @propagation.prevent
    @dragenter.prevent
    @dragover.prevent
    id="file-drag"
    ref="fileform"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dragAndDropCapable: false,
      files: [],
    };
  },
  methods: {
    determineDragAndDropCapable() {
      let div = document.createElement("div");
      return (
        ("draggable" in div || ("ondragstart" in div && "ondrop" in div)) &&
        "FormData" in window &&
        "FileReader" in window
      );
    },
    fileReceipt(e) {
      this.$emit("gotDragFile", e.dataTransfer.files);
    },
  },
};
</script>

<style scoped>
#file-drag {
  width: 90%;
  height: 90%;
  flex-direction: column;
  background-color: rgb(212, 212, 212);
  border-radius: 10px;
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
  padding: 10px;
}

</style>