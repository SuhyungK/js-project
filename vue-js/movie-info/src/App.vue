<template>
  <div>
    <Navbar />
    <Event :text="text[eventTextCurNum]" />
    <SearchBar :data="data_temp" @searchMovie="searchMovie($event)" />
    <p>
      <button @click="showAllMovie">전체보기</button>
    </p>
    <Movies
      :data="data_temp"
      @openModal="
        isModal = true;
        selectedMovie = $event;
      "
      @increaseLike="increaseLike($event)"
    />
    <Modal
      :data="data"
      :isModal="isModal"
      :selectedMovie="selectedMovie"
      @closeModal="isModal = false"
    />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Modal from "./components/Modal.vue";
import Event from "./components/Event.vue";
import Movies from "./components/Movies.vue";
import SearchBar from "./components/SearchBar.vue";
import data from "./assets/movies";

export default {
  name: "App",
  components: {
    Navbar: Navbar,
    Modal: Modal,
    Event: Event,
    Movies: Movies,
    SearchBar: SearchBar,
  },
  data() {
    return {
      isModal: false,
      selectedMovie: 0,
      data: data,
      data_temp: [...data],
      text: [
        "TVING 강렬한 운명의 드라마, 선재 업고 튀어!!",
        "밀어낼수록 더 가까이 다가가는 '솔친자' 류선재!  ",
        "청량 + 풋풋 + 싱그러움 가득한 솔선재",
      ],
      eventTextCurNum: 0,
      interval: null,
    };
  },
  methods: {
    increaseLike(id) {
      // this.data[i].like += 1;
      this.data.find((movie) => {
        if (movie.id === id) {
          movie.like += 1;
        }
      });
    },
    searchMovie(title) {
      // 영화 제목이 포함된 데이터를 가져옴
      this.data_temp = this.data.filter((movie) => {
        return movie.title.includes(title);
      });
    },
    showAllMovie() {
      this.data_temp = [...this.data];
    },
  },
  mounted() {
    this.interval = setInterval(() => {
      this.eventTextCurNum = (this.eventTextCurNum + 1) % this.text.length;
    }, 3000);
  },
  unmounted() {
    clearInterval(this.interval); // 인터벌 해제
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
