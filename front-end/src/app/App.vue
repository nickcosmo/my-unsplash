<template>
  <div>
    <TheNav
      :showForm="showForm"
      @toggleForm="toggleForm"
      @searchImages="searchImages"
    />

    <div class="form-background" v-if="showForm" @click="toggleForm"></div>

    <image-form :showForm="showForm" @newImage="pushImage"></image-form>

    <div v-if="images.length !== 0">
      <div class="images" v-if="filteredImages.length">
        <div v-for="(image, i) in filteredImages" :key="i">
          <app-image
            :key="image"
            :="image"
            @delete-this-image="sendImageDeletion"
          ></app-image>
        </div>
      </div>
      <div class="images" v-else>
        <div v-for="(image, i) in images" :key="i">
          <app-image
            :key="image"
            :="image"
            @delete-this-image="sendImageDeletion"
          ></app-image>
        </div>
      </div>
    </div>
    <!-- <div class="images" v-else>No Images :(</div> -->
  </div>
</template>

<script>
import AppImage from "./components/AppImage.vue";
import ImageForm from "./components/ImageForm.vue";
import TheNav from "./components/TheNav.vue";

export default {
  components: {
    AppImage,
    TheNav,
    ImageForm,
  },
  data() {
    return {
      // imageUrl: "",
      images: [],
      showForm: false,
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
    searchImages(searchString) {
      this.filteredImages = this.images.filter((image) =>
        image.name.includes(searchString)
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

<style scoped>
.images {
  display: grid;
  margin: 15px auto;
  max-width: 75%;
  grid-template-columns: 1fr;
  grid-gap: 15px;
}

.form-background {
  z-index: 199;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
}

@media screen and (min-width: 520px) {
  .images {
    grid-template-columns: 1fr 1fr;
  }
}

@media screen and (min-width: 900px) {
  .images {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>
