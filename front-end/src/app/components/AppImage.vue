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

<style scoped>
.grid_image {
  width: 100%;
  display: inline-block;
  border-radius: 10px;
  overflow: hidden;
}

.grid_image-container {
  position: relative;
  cursor: pointer;
  overflow: hidden;
  display: inline-block;
  border-radius: 10px;
  width: 100%;
}

.grid_image-container:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.grid_image-banner {
  display: inline-block;
  color: #efefef;
  width: inherit;
  height: 60px;
  position: absolute;
  /* background-color: rgba(0, 0, 0, 0.05); */
  background: linear-gradient(
    to bottom,
    rgba(129, 129, 129, 0.4),
    rgba(255, 0, 0, 0)
  );
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.grid_image-banner a {
  color: #efefef;
}

.grid_image-banner .delete-icon,
.grid_image-banner .download-icon {
  font-size: 48px;
  opacity: 80%;
}

.grid_image-banner .image-name {
  padding: 0 5px;
  white-space: nowrap;
  overflow: hidden;
  font-size: 24px;
  opacity: 80%;
}

.grid_image-banner .delete-icon:hover,
.grid_image-banner .download-icon:hover {
  opacity: 100%;
}

/* animations and transitions */

.banner-enter-from,
.banner-leave-to {
  transform: translateY(-40px);
  opacity: 0%;
}

.banner-enter-active,
.banner-leave-active {
  transition: all 0.5s ease;
}

.banner-enter-to,
.banner-leave-from {
  transform: translateY(0);
  opacity: 100%;
}
</style>