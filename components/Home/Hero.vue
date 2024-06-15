
import { NuxtLink } from '#build/components';
<template>
    <section class="lg:flex justify-between lg:p-40 sm:px-6 sm:py-10 bg-white text-navy">
        <div class="flex flex-col lg:gap-10 sm:gap-6 justify-center sm:pb-10 lg:text-left sm:text-center">
            <h1 class="text-4xl font-bold text-blue">Heading</h1>
            <p class="text-lg">Description</p>
            <p class="text-lg">More description</p>
            <div class="lg:flex gap-6 text-lg font-bold">
                <button class="py-2 px-6 bg-blue text-white rounded sm:w-full h-full sm:mb-3 flex-1">
                    <NuxtLink to="/featured-articles">Featured articles</NuxtLink>
                </button>
                <button class="py-2 px-6 bg-white border-2 border-blue text-blue rounded sm:w-full flex-1">
                    <NuxtLink to="/most-recent-articles">Most recent articles</NuxtLink>
                </button>
            </div>
        </div>
        <img src="/img/HeroImage.svg" alt="heading image" class="">
    </section>
</template>