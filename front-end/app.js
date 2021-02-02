const app = Vue.createApp({
  data() {
    return {
      imageName: "",
      uploadedAt: "",
      userName: "",
      file: null,
      imageUrl: "",
      images: [],
    };
  },
  methods: {
    newFile() {
      this.file = this.$refs.file.files[0];
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
    },
    async getImages() {
      const response = await fetch("http://localhost:8080/all", {
        method: "GET",
      });
      const responseData = await response.json();
      this.images = responseData.images;
      console.log(this.images);
    },
  },
});

app.mount("#app");
