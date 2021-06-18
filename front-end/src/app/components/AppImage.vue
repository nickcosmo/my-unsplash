<template>
  <div
    class="grid_image-container"
    @mouseenter="showTheBanner"
    @mouseleave="showTheBanner"
  >
    <transition name="banner">
      <div v-if="showBanner" class="grid_image-banner">
        <a
          :download="path"
          :href="'http://localhost:8080/image-download/' + imageName"
          ><p class="material-icons md-48 download-icon">
            download_for_offline
          </p></a
        >
        <p class="image-name">{{ name }}</p>
        <p class="material-icons md-48 delete-icon" @click="deleteImage">
          cancel
        </p>
      </div>
    </transition>
    <img :src="path" class="grid_image" alt="" />
  </div>
</template>


<script>
export default {
  props: ["path", "name"],
  data() {
    return {
      showBanner: false,
    };
  },
  computed: {
    imageName() {
      return this.path.split("/")[2];
    },
  },
  methods: {
    showTheBanner() {
      this.showBanner = !this.showBanner;
    },
    showUrl() {
      console.log(this.path);
    },
    deleteImage(event) {
      const image = event.target.parentElement.nextElementSibling;
      const imagePath = image.src;
      this.$emit("deleteThisImage", imagePath);
    },
    // async downloadImage(event) {
    //   const image = event.target;
    //   imageName = image.src.split("/")[12];
    //   await fetch(`http://localhost:8080/image-download/${imageName}`, {
    //     method: "GET",
    //     // mode: "no-cors",
    //   });
    //   // console.log(response);
    //   // response.download;
    //   // const responseBlob = await response.blob();
    //   // responseBlob.download;
    //   // console.log(URL.createObjectURL(responseBlob));
    // }
  },
};
</script>
