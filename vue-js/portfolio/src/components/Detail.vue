<template>
  <section id="detail" class="container">
    <h1>{{ props.data[$route.params.id].title }}</h1>
    <article class="pb-5">
      <img
        :src="`${data[$route.params.id].imgUrl}`"
        :alt="`${data[$route.params.id].title}`"
      />
      <p>{{ data[$route.params.id].desc }}</p>
      <small class="text-secondary">{{ data[$route.params.id].skills }}</small>
      <p>
        <a
          :href="`${data[$route.params.id].link}`"
          class="btn btn-primary mt-4"
          target="_blank"
          >홈페이지
        </a>
      </p>
      <br />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore ea,
        iusto unde in adipisci rem ratione vero perferendis quam ipsam eius eum
        doloremque officia modi id, qui deleniti. Ipsam, architecto.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
        inventore laudantium? Saepe debitis minima sint! Aspernatur praesentium
        soluta quibusdam ut quam explicabo perferendis laborum optio, esse
        laboriosam fuga illo! Architecto?
      </p>
      <buttton @click="$router.push('/portfolio')" class="btn btn-secondary"
        >돌아가기</buttton
      >
    </article>
  </section>
</template>

<script setup>
const props = defineProps({
  data: Array,
});
</script>

<style lang="scss">
#detail h1 {
  display: flex;
  gap: 1rem;
  align-items: center;
  .badge {
    font-size: small;
  }
}

article {
  img {
    width: 100%;
    aspect-ratio: 8/3;
    object-fit: cover;
    object-position: top;
    margin-bottom: 1em;
  }
}
</style>
