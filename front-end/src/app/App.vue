<template>
  <div>
    <nav>
      <div>
        <h1 class="material-icons">camera</h1>
        <h1>My Unsplash</h1>
        <!-- <i class="material-icons">search</i> -->
        <input
          type="text"
          name="search"
          v-model="search"
          @input="searchImages"
          placeholder="search for an image"
        />
      </div>
      <div>
        <button
          @click="showTheForm"
          :class="{ open: showForm }"
          class="material-icons"
        >
          add
        </button>
      </div>
    </nav>
    <div class="form-background" v-if="showForm" @click="showTheForm"></div>
    <transition>
      <form
        v-if="showForm"
        @submit="pushImage"
        id="image-form"
        enc-type="multipart/form-data"
      >
        <div id="upload-wrapper">
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
    <div class="images" v-if="images.length !== 0">
      <div v-if="search">
        <div v-for="(image, i) in filteredImages" :key="i">
          <app-image
            :key="image"
            :="image"
            @delete-this-image="sendImageDeletion"
          ></app-image>
        </div>
      </div>
      <div v-else v-for="(image, i) in images" :key="i">
        <app-image
          :key="image"
          :="image"
          @delete-this-image="sendImageDeletion"
        ></app-image>
      </div>
    </div>
    <!-- <div class="images" v-else>No Images :(</div> -->
  </div>
</template>

<script>
import AppImage from "./components/AppImage.vue";
import UploadArea from "./components/UploadArea.vue";

export default {
  components: {
    AppImage,
    UploadArea,
  },
  data() {
    return {
      file: null,
      fileName: null,
      imageUrl: "",
      images: [],
      showForm: false,
      search: null,
      filteredImages: [],
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
    newFile() {
      this.file = this.$refs.file.files[0];
    },
    showTheForm() {
      this.showForm = !this.showForm;
    },
    gotDragFile(data) {
      this.file = data[0];
      Object.defineProperty(this.file, "name", {
        writable: true,
        value: "name.jpg",
      });
      console.log(data[0]);
    },
    updateFileName(e) {
      this.fileName = e.target.value;
      Object.defineProperty(this.file, "name", {
        writable: true,
        value: e.target.value + ".jpg",
      });
    },
    searchImages() {
      console.log(this.search);
      this.filteredImages = this.images.filter((image) =>
        image.name.includes(this.search)
      );
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
      this.images.unshift({
        path: "http://localhost:8080/" + responseData.path.toString(),
        name: responseData.name,
      });
      this.showForm = false;
      this.file = null;
      this.fileName = null;
    },
    async sendImageDeletion(imagePath) {
      const response = await fetch("http://localhost:8080/delete-image", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "DELETE",
        body: JSON.stringify({ imagePath: imagePath }),
      });
      const responseData = await response.json();
      this.images = responseData.images;
    },
  },
  async created() {
    const response = await fetch("http://localhost:8080/all", {
      method: "GET",
    });
    const responseData = await response.json();
    responseData.images.forEach((image) => {
      image.path = "http://localhost:8080/" + image.path;
    });
    this.images = responseData.images;
    // console.log(JSON.parse(JSON.stringify(this.images))[0].imageUrl);
  },
};
</script>
