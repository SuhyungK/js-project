<script setup>
import { ref } from "vue";

const title = "추락의 해부";
const foods = ["김밥", "순대", "만두"];
const data = [
  {
    title: "노량",
    year: 2023,
    category: "액션, 드라마",
    like: ref(0),
    imgUrl: "@/assets/노량.jpg",
  },
  {
    title: "추락의 해부",
    year: 2024,
    category: "스릴러",
    like: ref(0),
    imgUrl: "@/assets/노량.jpg",
  },
];
var like = ref(0);

function increment(idx) {
  data[idx].like.value++;
}
</script>

<template>
  <div>
    <div v-for="(movie, i) in data" style="margin-bottom: 10px">
      <figure></figure>
      <h3 class="bg-color">{{ movie.title }}</h3>
      <p class="p-style">{{ movie.year }}</p>
      <p class="p-style">{{ movie.category }}</p>
      <button @click="increment(i)">좋아요</button>
      <span>{{ movie.like }}</span>
    </div>
  </div>
</template>

<style scoped>
.bg-color {
  background-color: gold;
  padding: 10px;
  font-weight: bold;
}

.p-style {
  margin: 5px;
}
</style>
