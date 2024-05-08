<template lang="">
  <section id="about" class="container">
    <h1>About</h1>
    <div class="row">
      <figure class="col-md-6">
        <img src="../assets/images/profile.jpg" alt="" />
        <figcaption>About Suhyung Kim</figcaption>
      </figure>
      <p class="col-md-6">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, maiores
        esse! Libero similique aspernatur, neque tenetur inventore iusto, animi
        ratione maiores nam consectetur architecto. Impedit eius accusantium
        odio dolore perferendis.
      </p>
    </div>

    <article class="row mt-5">
      <h2>Skills</h2>
      <dl>
        <template v-for="skill in skills">
          <dt class="lead">{{ skill.name }}</dt>
          <dd>
            <div
              class="progress"
              role="progressbar"
              aria-label="Basic example"
              aria-valuenow="0"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                class="progress-bar text-end pe-3"
                :style="{ width: skill.point }"
              >
                {{ skill.point }}
              </div>
            </div>
          </dd>
        </template>
      </dl>
    </article>
  </section>
</template>

<script setup>
const skills = [
  {
    name: "HTML",
    point: "90%",
  },
  {
    name: "CSS",
    point: "80%",
  },
  {
    name: "JAVASCRIPT",
    point: "50%",
  },
  {
    name: "VUE",
    point: "75%",
  },
];
</script>

<style lang="scss">
figure {
  img {
    width: 100%;
  }
}
</style>
