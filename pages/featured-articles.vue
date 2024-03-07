<template>
    <div class="bg-white text-navy">
        <ContentList path="/articles" v-slot="{ list }">
            <div v-for="article in list" :key="article._path">
                <div v-if="article.featured==true">
                    <NuxtLink :to="`/blog/${article.slug}`">
                        <h1>{{ article.title }}</h1>
                    </NuxtLink>
                    <p>{{ article.description }}</p>
                    <p>by {{ article.author }}</p>
                    <p>{{ formatDate(article.date) }}</p>
                </div>
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