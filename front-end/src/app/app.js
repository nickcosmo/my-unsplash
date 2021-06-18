export default {
    data() {
        return {
            file: null,
            fileName: null,
            imageUrl: '',
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
            Object.defineProperty(this.file, 'name', {
                writable: true,
                value: 'name.jpg',
            });
            console.log(data[0]);
        },
        updateFileName(e) {
            this.fileName = e.target.value;
            Object.defineProperty(this.file, 'name', {
                writable: true,
                value: e.target.value + '.jpg',
            });
        },
        searchImages() {
            console.log(this.search);
            this.filteredImages = this.images.filter((image) => image.name.includes(this.search));
        },
        async pushImage(e) {
            e.preventDefault();
            let fd = new FormData();
            fd.append('fileName', this.fileName);
            fd.append('image', this.file);
            const response = await fetch('http://localhost:8080/image-upload', {
                method: 'POST',
                body: fd,
            });
            const responseData = await response.json();
            // this.imageUrl = responseData.path.toString();
            this.images.unshift({
                path: responseData.path.toString(),
                name: responseData.name,
            });
            this.showForm = false;
            this.file = null;
            this.fileName = null;
        },
        async sendImageDeletion(imagePath) {
            const response = await fetch('http://localhost:8080/delete-image', {
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'DELETE',
                body: JSON.stringify({ imagePath: imagePath }),
            });
            const responseData = await response.json();
            this.images = responseData.images;
        },
    },
    async created() {
        const response = await fetch('http://localhost:8080/all', {
            method: 'GET',
        });
        const responseData = await response.json();
        responseData.images.forEach((image) => {
            image.path = 'http://localhost:8080/' + image.path;
        });
        this.images = responseData.images;
        // console.log(JSON.parse(JSON.stringify(this.images))[0].imageUrl);
    },
};
