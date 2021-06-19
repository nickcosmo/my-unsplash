<template>
  <nav>
    <div>
      <span class="material-icons">camera</span>
      <h1>My Unsplash</h1>
      <i class="material-icons">search</i>
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
</template>

<script>
export default {
  props: ["showForm"],
  data() {
    return {
      search: null,
    };
  },
  methods: {
    toggleForm() {
      this.$emit("toggleForm");
    },
    searchImages() {
      this.$emit("searchImages", this.search);
    },
  },
};
</script>

<style scoped>
nav {
  position: sticky;
  top: 0;
  z-index: 200;
  background: #efefef;
  width: 100%;
  padding: 0px 12.5%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
}

nav div {
  display: flex;
  align-items: center;
}

h1 {
  margin-right: 15px;
  font-size: 1.7rem;
  justify-content: center;
  display: none;
  white-space: nowrap;
}

span {
  font-size: 36px;
  margin-right: 10px;
  margin-top: -3px;
}

i {
  z-index: 200;
  font-size: 26px;
}

nav input {
  display: inline-block;
  color: black;
  font-size: 0.875rem;
  outline: none;
  border-radius: 5px;
  border: solid black 1px;
  height: 40px;
  max-width: 350px;
  width: 85%;
  padding: 0 5px;
  margin-left: -30px;
  padding-left: 40px;
}

nav button {
  background: var(--accent-color);
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.16);
  width: 30px;
  height: 30px;
  color: #efefef;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  font-size: 1.56rem;
  margin-left: 10px;
}

nav div button.open {
  transform: rotate(45deg);
}

@media screen and (min-width: 800px) {
  h1 {
    display: flex;
  }

  nav input {
    font-size: 1rem;
  }

  nav button {
    width: 38px;
    height: 38px;
    font-size: 2rem;
  }
}
</style>
