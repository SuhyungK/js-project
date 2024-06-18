<template>
  <h1>{{ like }}</h1>
  <button @:click="like++">클릭시 숫자 증가</button>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      like: 0
    }
  }
}
</script>