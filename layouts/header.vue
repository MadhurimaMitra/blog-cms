
import { NuxtLink } from '#build/components';
<template>
    <section class="flex justify-between bg-white text-navy">
        <img src="" alt="logo">
        <div>
            <!-- <span>Home</span> -->
            <!-- <span>Blog</span> -->
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/blog">Blog</NuxtLink>
        </div>
    </section>
</template>