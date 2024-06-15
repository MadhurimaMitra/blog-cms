<template>
  <div class="lg:px-36 lg:pt-14 lg:pb-24 sm:px-6 sm:pt-10 bg-white text-navy">
    <ContentList path="/articles" v-slot="{ list }">
      <div v-for="article in list" :key="article._path" class="flex lg:flex-row sm:flex-col sm:items-center sm:gap-6 lg:justify-between pb-16">
        <div class="flex flex-col justify-center sm:w-full">
          <h1 class="text-2xl font-bold text-blue">{{ article.title }}</h1>
          <p>by {{ article.author }} on {{ formatDate(article.date) }}</p>
          <p class="text-lg py-8">{{ article.description }}</p>
          <NuxtLink :to="`/blog/${article.slug}`">
            <button class="py-4 px-6 bg-blue text-white text-lg font-bold rounded lg:w-auto sm:w-full">Continue Reading</button>
          </NuxtLink>
        </div>
        <img :src="article.image" :alt="article.alt" class="">
      </div>
    </ContentList>
  </div>
</template>

<script>
export default {
  methods: {
      formatDate(date) {
          const options = { year: 'numeric', month: 'long', day: 'numeric' }
          return new Date(date).toLocaleDateString('en', options)
      }
  }
}
</script>