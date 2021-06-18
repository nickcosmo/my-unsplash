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
          @click="toggleForm"
          :class="{ open: showForm }"
          class="material-icons"
        >
          add
        </button>
      </div>
    </nav>
    <div class="form-background" v-if="showForm" @click="toggleForm"></div>

    <image-form :showForm="showForm" @newImage="pushImage"></image-form>

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
import ImageForm from "./components/ImageForm.vue";

export default {
  components: {
    AppImage,
    ImageForm,
  },
  data() {
    return {
      // imageUrl: "",
      images: [],
      showForm: false,
      search: null,
      filteredImages: [],
    };
  },

  methods: {
    toggleForm() {
      this.showForm = !this.showForm;
    },
    pushImage(image) {
      this.images.unshift(image);
      this.showForm = false;
    },
    // updateFileName(e) {
    //   this.fileName = e.target.value;
    //   Object.defineProperty(this.file, "name", {
    //     writable: true,
    //     value: e.target.value + ".jpg",
    //   });
    // },
    searchImages() {
      console.log(this.search);
      this.filteredImages = this.images.filter((image) =>
        image.name.includes(this.search)
      );
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
