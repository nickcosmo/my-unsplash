const app = Vue.createApp({
  data() {
    return {
      imageName: '',
      uploadedAt: '',
      userName: '',
      file: null,
      imageUrl: ''
    }
  },
  methods: {
    newFile() {
      this.file = this.$refs.file.files[0];
    },
    async pushImage() {
      let fd = new FormData();
      fd.append("image", this.file);
      const response = await fetch('http://localhost:8080/image-upload', {
        method: 'POST',
        body: fd
      })
      const responseData = await response.json();
      this.imageUrl = responseData.path.toString();
      console.log(this.imageUrl);
    },
  },
});

app.mount("#app");
