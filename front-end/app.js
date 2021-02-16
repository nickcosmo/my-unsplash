const app = Vue.createApp({
  data() {
    return {
      // imageName: "",
      // uploadedAt: "",
      // userName: "",
      file: null,
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
    },
    async pushImage() {
      let fd = new FormData();
      fd.append("image", this.file);
      const response = await fetch("http://localhost:8080/image-upload", {
        method: "POST",
        body: fd,
      });
      const responseData = await response.json();
      // this.imageUrl = responseData.path.toString();
      this.images.unshift({ imageUrl: responseData.path.toString() });
      this.showForm = false;
      this.file = null;
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
        <p class="material-icons md-light">clear</p>
      </div>
    </transition>
    <img
      @click="showSource"
      :src="imageUrl"
      class="grid_image"
      alt=""
    />
  </div>
  `,
  props: ["imageUrl"],
  data() {
    return {
      showBanner: false,
    };
  },
  methods: {
    showTheBanner() {
      this.showBanner = !this.showBanner;
    },
    showSource(event) {
      console.log(event.target.src.split("/")[12]);
    },
    showUrl() {
      console.log(this.imageUrl);
    }
  },
});

app.mount("#app");
