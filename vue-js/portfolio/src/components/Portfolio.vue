<template>
  <section id="portfolio" class="container">
    <h1>Portfolio</h1>
    <ul class="list row">
      <li class="col-md-4 border" v-for="pjt in data">
        <img :src="pjt.imgUrl" :alt="pjt.id" />
        <h4>{{ pjt.title }}</h4>
        <p>{{ pjt.desc }}</p>
      </li>
    </ul>
  </section>
</template>

<script setup>
import data from "../assets/portfolio";
console.log(data);
</script>

<style lang="scss">
#portfolio {
  h1 {
    margin-bottom: 1rem;
  }

  .list {
    list-style-type: none;
    padding: 0;

    li {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-bottom: 10vh;

      img {
        width: 100%;
        aspect-ratio: 16 / 9;
        object-fit: cover;
        object-position: top;
      }

      h4 {
        margin-top: 1rem;
      }
    }
  }
}
</style>
