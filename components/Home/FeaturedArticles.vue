<template>
    <section class="bg-light-grey text-navy">
        <h1 class="text-4xl font-bold text-blue">Featured articles</h1>
        <p>Sub-heading</p>
        <ContentList path="/articles" v-slot="{ list }" :query="{where: [{featured: true}], limit: 5}">
            <div v-for="article in list" :key="article._path">
                <div >
                    <NuxtLink :to="`/blog/${article.slug}`">
                        <h1>{{ article.title }}</h1>
                    </NuxtLink>
                    <p>{{ article.description }}</p>
                    <p>by {{ article.author }}</p>
                    <p>{{ formatDate(article.date) }}</p>
                </div>
            </div>
        </ContentList>
    </section>
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