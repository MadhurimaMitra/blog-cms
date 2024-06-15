
import { NuxtLink } from '#build/components';
<template>
    <section class="flex justify-between items-center py-7 px-36 bg-white text-navy">
        <img src="/img/Logo.svg" alt="logo">
        <div class="flex gap-8">
            <!-- <span>Home</span> -->
            <!-- <span>Blog</span> -->
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/blog">Blog</NuxtLink>
            <NuxtLink to="https://blog-website-8008135.netlify.app/admin">Admin</NuxtLink>
        </div>
    </section>
</template>