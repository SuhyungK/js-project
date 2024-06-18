<template>
  <Navbar />
  <Event :text="text" />
  <div>
    <h1>영화 정보</h1>
    <div v-for="(movie, i) in data" :key="i" class="item">
      <figure>
        <img :src="`${movie.imgUrl}`" :alt="movie.title" width="240" />
      </figure>
      <div class="info">
        <h3 class="bg-color">{{ movie.title }}</h3>
        <p>{{ movie.year }}</p>
        <p>{{ movie.category }}</p>
        <button @:click="increateLike(i)">
          버튼을 누르면 숫자가 증가합니다
        </button>
        <span>{{ movie.like }}</span>
        <p>
          <button
            @click="
              isModal = true;
              selectedMovie = i;
            "
          >
            상세보기
          </button>
        </p>
      </div>
    </div>

    <Modal
      :data="data"
      :isModal="isModal"
      :selectedMovie="selectedMovie"
      @closeModal="isModal = false"
    />
  </div>
</template>

<script>
import data from "./assets/movies";
import Navbar from "./components/Navbar.vue";
import Event from "./components/Event.vue";
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  data() {
    return {
      isModal: false,
      data: data,
      selectedMovie: 0,
      text: "졸린다",
    };
  },

  methods: {
    increateLike(i) {
      this.data[i].like += 1;
    },
  },
  components: {
    Navbar: Navbar,
    Event: Event,
    Modal: Modal,
  },
};
</script>

<style>
.bg-color {
  background-color: gold;
  padding: 10px;
  font-weight: bold;
}
* {
  box-sizing: border-box;
  margin: 0;
}

body {
  max-width: 768px;
  margin: 0 auto;
  padding: 20px;
}

h1,
h2,
h3 {
  margin-bottom: 1rem;
}

p {
  margin-bottom: 0.5rem;
}

button {
  margin-right: 10px;
  margin-top: 1rem;
}

.item {
  width: 100%;
  border: 1px solid #ccc;
  display: flex;
  margin-bottom: 20px;
  padding: 1rem;
}

.item figure {
  width: 30%;
  margin-right: 1rem;
}

.item img {
  width: 100%;
}

.item .info {
  width: 100%;
}

.modal {
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal .inner {
  background: #fff;
  width: 80%;
  padding: 20px;
  border-radius: 10px;
}
</style>
