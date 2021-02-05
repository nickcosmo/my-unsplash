const app = Vue.createApp({
  data() {
    return {
      imageName: "",
      uploadedAt: "",
      userName: "",
      file: null,
      imageUrl: "",
      images: [],
      showForm: false
    };
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
      console.log(this.file);
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
  },
  async created() {
    const response = await fetch("http://localhost:8080/all", {
      method: "GET",
    });
    const responseData = await response.json();
    this.images = responseData.images;
    console.log(this.images);
  },
});

app.component("upload-area", {
  template: `
    <div @drop.prevent="fileReceipt" @propagation.prevent @dragenter.prevent @dragover.prevent id="file-drag" ref="fileform">Drag and drop file here!</div>
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
  // mounted() {
  //   /*
  //   Determine if drag and drop functionality is capable in the browser
  //   */
  //   this.dragAndDropCapable = this.determineDragAndDropCapable();

  //   /*
  //   If drag and drop capable, then we continue to bind events to our elements.
  //   */
  //   if (this.dragAndDropCapable) {
  //     /*
  //     Listen to all of the drag events and bind an event listener to each
  //     for the fileform.
  //     */
  //     [
  //       "drag",
  //       "dragstart",
  //       "dragend",
  //       "dragover",
  //       "dragenter",
  //       "dragleave",
  //       "drop",
  //     ].forEach(
  //       function (evt) {
  //         /*
  //         For each event add an event listener that prevents the default action
  //         (opening the file in the browser) and stop the propagation of the event (so
  //         no other elements open the file in the browser)
  //         */
  //         this.$refs.fileform.addEventListener(
  //           evt,
  //           function (e) {
  //             e.preventDefault();
  //             e.stopPropagation();
  //           }.bind(this),
  //           false
  //         );
  //       }.bind(this)
  //     );

  //     /*
  //     Add an event listener for drop to the form
  //     */
  //     this.$refs.fileform.addEventListener(
  //       "drop",
  //       function (e) {
  //         /*
  //       Capture the files from the drop event and add them to our local files
  //       array.
  //       */
  //      console.log(e.dataTransfer.files);
  //         for (let i = 0; i < e.dataTransfer.files.length; i++) {
  //           this.files.push(e.dataTransfer.files[i]);
  //         }
  //       }.bind(this)
  //     );
  //   }
  // },
});

app.mount("#app");
