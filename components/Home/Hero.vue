
import { NuxtLink } from '#build/components';
<template>
    <section class="flex bg-white text-navy">
        <div>
            <h1 class="text-4xl font-bold text-blue">Heading</h1>
            <p class="text-lg">Description</p>
            <p class="text-lg">More description</p>
            <div class="flex text-lg font-bold">
                <button class="bg-blue text-white">
                    <NuxtLink to="/featured-articles">Featured articles</NuxtLink>
                </button>
                <button class="bg-white border border-navy text-navy">
                    <NuxtLink to="/most-recent-articles">Most recent articles</NuxtLink>
                </button>
            </div>
        </div>
        <img src="" alt="heading image">
    </section>
</template>