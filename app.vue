<template>
  <div class="font-playfair">
    <NuxtLayout name="header"></NuxtLayout>
    <NuxtPage></NuxtPage>
    <NuxtLayout name="footer"></NuxtLayout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      header: 'header',
      footer: 'footer'
    }
  },
}
</script>