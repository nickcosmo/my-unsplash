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
      <button v-if="file" class="form-button" type="submit">Upload!</button>
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
  right: 5px;
}

/* form */

#image-form {
  z-index: 200;
  position: fixed;
  background: #efefef;
  top: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  left: 5%;
  max-width: 500px;
  width: 90%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 14px;
  padding: 10px 15px;
}

#image-form input,
#image-form .form-button {
  margin-top: 10px;
  font-size: 20px;
  text-align: center;
  font-family: inherit;
}

#image-form p {
  display: inline-block;
  width: 100%;
  font-size: 20px;
}

#image-form .form-button {
  /* background: rgba(48, 48, 48, 1); */
  background-color: var(--accent-color);
  border-radius: 10px;
  align-self: center;
  padding: 5px;
  cursor: pointer;
  width: 70%;
  border: none;
  color: #ffffff;
}

#image-form .form-button:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transform: translateY(-2px);
}

#image-input {
  border: none;
  width: 50%;
  align-self: center;
  padding: 5px;
  border-radius: 8px;
  cursor: pointer;
  color: #ffffff;
}

#image-input[type="file"] {
  display: none;
}

#upload-wrapper {
  display: flex;
  margin: 5px auto;
  width: 90%;
  border-color: rgba(48, 48, 48, 1);
  border-width: 3px;
  border-style: dashed;
  border-radius: 10px;
  height: 250px;
  text-align: center;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 10px;
}

#preview img {
  width: 90%;
  height: auto;
}

.image-name-container {
  display: flex;
  width: 90%;
  margin: auto;
  align-items: center;
  justify-content: center;
}

.image-name-container label {
  display: inline-block;
  font-size: 24px;
  width: 20%;
  color: black;
  padding-top: 4px;
}

.image-name-container input {
  display: inline-block;
  width: 80%;
  font-size: 16px;
  color: black;
  outline: none;
  border-radius: 10px;
  height: 35px;
  padding: 0 5px;
  text-align: left !important;
}

/* file drag */

#file-drag .material-icons {
  font-size: 36px;
}

#file-drag label {
  display: inline-block;
  width: 100%;
  font-size: 20px;
}

#file-drag label {
  cursor: pointer;
}

#file-drag label:hover {
  color: rgb(47, 47, 230);
}

/* animations and transitions */

.v-enter-from,
.v-leave-to {
  transform: translateY(-20px);
  opacity: 0%;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

.v-enter-to,
.v-leave-from {
  transform: translateY(0);
  opacity: 100%;
}

@media screen and (min-width: 500px) {
  #image-form {
    left: calc(50% - 250px);
  }

  #upload-wrapper {
    width: 70%;
  }

  .image-name-container {
    width: 70%;
  }

  .clear-button {
    right: 50px;
  }
}
</style>