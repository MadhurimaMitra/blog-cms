
import { NuxtLink } from '#build/components';
<template>
    <section class="flex justify-between p-40 bg-white text-navy">
        <div class="flex flex-col gap-10 justify-center">
            <h1 class="text-4xl font-bold text-blue">Heading</h1>
            <p class="text-lg">Description</p>
            <p class="text-lg">More description</p>
            <div class="flex gap-6 text-lg font-bold">
                <button class="py-4 px-6 bg-blue text-white rounded">
                    <NuxtLink to="/featured-articles">Featured articles</NuxtLink>
                </button>
                <button class="py-4 px-6 bg-white border-2 border-blue text-blue rounded">
                    <NuxtLink to="/most-recent-articles">Most recent articles</NuxtLink>
                </button>
            </div>
        </div>
        <img src="/img/HeroImage.svg" alt="heading image" class="">
    </section>
</template>