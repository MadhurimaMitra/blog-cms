
import { NuxtLink } from '#build/components';
import { innerWidth } from "window";
<template>
    <section class="flex justify-between lg:py-7 sm:py-4 lg:px-36 sm:px-6 bg-white text-navy border-b border-slate-300">
        <img src="/img/Logo.svg" alt="logo">
        <div>
            <i @click="handleClick()" class="fa-solid fa-bars cursor-pointer"></i>
            <div v-if="showMenu" class="absolute lg:right-36 sm:right-5 lg:top-16 sm:top-16 flex flex-col gap-6 py-6 px-4 bg-white border border-slate-300 rounded shadow-md">
                <!-- <span>Home</span> -->
                <!-- <span>Blog</span> -->
                <NuxtLink to="/">Home</NuxtLink>
                <hr class="w-36 bg-slate-400">
                <NuxtLink to="/blog">Blog</NuxtLink>
                <hr v-if="isMobile" class="bg-slate-400">
                <NuxtLink to="https://blog-website-8008135.netlify.app/admin" v-if="isMobile">Login</NuxtLink>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            showMenu: false,
            isMobile: false,
        }
    },
    methods: {
        handleClick() {
            this.showMenu = !this.showMenu
        },
        async checkScreenSize() {
            this.isMobile = window.innerWidth > 767;
        },
        handleOutsideClick(event) {
            if (!this.$el.contains(event.target)) {
                this.showMenu = false
            }
        }
    },
    async mounted() {
        this.checkScreenSize();
        window.addEventListener('resize', this.checkScreenSize);
        document.addEventListener('click', this.handleOutsideClick);
    }
}
</script>