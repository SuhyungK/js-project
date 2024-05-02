<template>
  <Navbar />
  <Event :text="text" />
  <h1>영화 정보</h1>
  <div v-for="(movie, i) in data" :key="i" class="item">
    <figure>
      <img :src="`${movie.imgUrl}`" :alt="movie.title" />
    </figure>
    <div class="info">
      <h3 class="bg-yellow" :style="textRed">{{ movie.title }}</h3>
      <p>개봉: {{ movie.year }}</p>
      <p>장르: {{ movie.category }}</p>
      <button @:click="increaseLike(i)">좋아요</button>
      <span> {{ movie.like }}</span>
      <p>
        <button
          @:click="
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
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Modal from "./components/Modal.vue";
import Event from "./components/Event.vue";
import data from "./assets/movies";

export default {
  name: "App",
  components: {
    Navbar: Navbar,
    Modal: Modal,
    Event: Event,
  },
  data() {
    return {
      isModal: false,
      selectedMovie: 0,
      data: data,
      textRed: "color: red",
      text: "TVING 강렬한 운명의 드라마, 선재 업고 튀어!!",
    };
  },
  methods: {
    increaseLike(i) {
      this.data[i].like += 1;
    },
  },
};
</script>

<style>
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
