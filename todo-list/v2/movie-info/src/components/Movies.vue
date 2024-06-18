<template lang="">
  <div v-for="(movie, i) in data" :key="i" class="item">
    <figure>
      <img :src="`${movie.imgUrl}`" :alt="movie.title" width="240" />
    </figure>
    <div class="info">
      <h3 class="bg-color">{{ movie.title }}</h3>
      <p>{{ movie.year }}</p>
      <p>{{ movie.category }}</p>
      <button @:click="increateLike(i)">버튼을 누르면 숫자가 증가합니다</button>
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
</template>
<script>
export default {
  name: "MoviesComponent",
};
</script>
<style lang=""></style>
