<template>
    <NConfigProvider>
        <NLayout class="max-w-[1440px] mx-auto">
            <NLayoutHeader>
                <Header></Header>
            </NLayoutHeader>
            <NLayoutContent>
                <NuxtPage />
            </NLayoutContent>
            <NLayoutFooter>
                <Footer />
            </NLayoutFooter>
        </NLayout>
    </NConfigProvider>
</template>

<script setup>
import { NConfigProvider, NLayout, NLayoutHeader, NLayoutContent, NLayoutFooter } from 'naive-ui'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<style>
/* 如果需要添加自定义样式 */
</style>