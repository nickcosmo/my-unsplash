<template>
  <transition>
    <form
      v-if="showForm"
      @submit.prevent="pushImage"
      id="image-form"
      enc-type="multipart/form-data"
    >
      <div id="upload-wrapper">
        <button
          v-if="file"
          class="clear-button material-icons"
          @click="clearFile"
        >
          close
        </button>
        <div id="preview" v-if="file">
          <img :src="previewUrl" alt="image-preview" />
        </div>
        <upload-area v-else @got-drag-file="gotDragFile">
          <p class="material-icons">image_search</p>
          <label for="image-input">
            <strong>Click here to add image</strong>
            <input
              v-on:change="newFile"
              ref="file"
              type="file"
              name="image-input"
              id="image-input"
          /></label>
          <p>Or</p>
          <p>Drag and Drop ....</p>
        </upload-area>
      </div>
      <div class="image-name-container">
        <label for="image-name">Title:</label>
        <input
          type="text"
          name="image-name"
          v-model="fileName"
          id="image-name-input"
        />
      </div>
      <button v-if="file" class="form_button" type="submit">Upload!</button>
    </form>
  </transition>
</template>

<script>
import UploadArea from "./UploadArea.vue";

export default {
  components: {
    UploadArea,
  },
  props: ["showForm"],
  emits: ["newImage"],
  data() {
    return {
      file: null,
      fileName: null,
    };
  },
  computed: {
    previewUrl() {
      if (this.file) {
        return URL.createObjectURL(this.file);
      }
    },
  },
  methods: {
    clearFile() {
      this.file = null;
      this.fileName = null;
    },
    newFile() {
      this.file = this.$refs.file.files[0];
    },
    gotDragFile(data) {
      this.file = data[0];
      Object.defineProperty(this.file, "name", {
        writable: true,
        value: "name.jpg",
      });
      //   console.log(data[0]);
    },
    async pushImage(e) {
      e.preventDefault();
      let fd = new FormData();
      fd.append("fileName", this.fileName);
      fd.append("image", this.file);
      const response = await fetch("http://localhost:8080/image-upload", {
        method: "POST",
        body: fd,
      });
      const responseData = await response.json();
      // this.imageUrl = responseData.path.toString();
      const image = {
        path: "http://localhost:8080/" + responseData.path.toString(),
        name: responseData.name,
      };
      this.$emit("newImage", image);
      this.file = null;
      this.fileName = null;
    },
  },
};
</script>

<style scoped>
.clear-button {
  position: absolute;
  top: 15px;
  right: 50px;
}
</style>