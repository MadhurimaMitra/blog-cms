<template>
  <div class="bg-white text-navy py-10">
    <ContentDoc :path="`/articles/${$route.params.slug}`" v-slot="{ doc }">
      <h1 class="text-5xl font-bold text-blue text-center pb-7">{{ doc.title }}</h1>
      <ContentRenderer :value="doc" class="text-lg px-80 flex flex-col items-center"></ContentRenderer>
    </ContentDoc>
  </div>
</template>

<script>
export default {

}
</script>