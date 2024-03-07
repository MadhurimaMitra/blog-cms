<template>
  <div class="bg-white text-navy">
    <ContentDoc :path="`/articles/${$route.params.slug}`"></ContentDoc>
  </div>
</template>

<script>
export default {

}
</script>