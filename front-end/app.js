const app = Vue.createApp({
  data() {
    return {
      // imageName: "",
      // uploadedAt: "",
      // userName: "",
      file: null,
      fileName: null,
      imageUrl: "",
      images: [],
      showForm: false,
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
      Object.defineProperty(this.file, 'name', {
        writable: true,
        value: "name.jpg"
      });
      console.log(data[0]);
    },
    updateFileName(e) {
      this.fileName = e.target.value;
      Object.defineProperty(this.file, 'name', {
        writable: true,
        value: e.target.value + ".jpg"
      });
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
      this.images.unshift({ path: responseData.path.toString(), name: responseData.name });
      this.showForm = false;
      this.file = null;
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
    this.images = responseData.images;
    // console.log(JSON.parse(JSON.stringify(this.images))[0].imageUrl);
  },
});

app.component("upload-area", {
  template: `
    <div @drop.prevent="fileReceipt" @propagation.prevent @dragenter.prevent @dragover.prevent id="file-drag" ref="fileform"><slot></slot></div>
  `,
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
});

app.component("app-image", {
  template: `
  <div class="grid_image-container" @mouseenter="showTheBanner" @mouseleave="showTheBanner">
    <transition name="banner">
      <div v-if="showBanner" class="grid_image-banner">
      <a :download="path" :href="'http://localhost:8080/image-download/' + imageName"><p class="material-icons md-48">download_for_offline</p></a>
        <p class="material-icons md-48" @click="deleteImage">cancel</p>
      </div>
    </transition>
    <img
      :src="path"
      class="grid_image"
      alt=""
    />
  </div>
  `,
  props: ["path"],
  data() {
    return {
      showBanner: false,
    };
  },
  computed: {
    imageName() {
      return this.path.split("/")[2];
    }
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
});

app.mount("#app");
