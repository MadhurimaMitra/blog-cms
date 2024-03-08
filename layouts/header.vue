
import { NuxtLink } from '#build/components';
<template>
    <section class="flex justify-between items-center py-7 px-36 bg-white text-navy">
        <img src="/img/Logo.svg" alt="logo">
        <div class="flex gap-8">
            <!-- <span>Home</span> -->
            <!-- <span>Blog</span> -->
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/blog">Blog</NuxtLink>
        </div>
    </section>
</template>