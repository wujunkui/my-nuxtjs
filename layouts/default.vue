<template>
    <NConfigProvider class="bg-coolgray-100">
        <n-flex justify="center">
            <Header></Header>
            <Navigation />
            <Content>
                <NuxtPage />
            </Content>
            <Footer />
        </n-flex>
    </NConfigProvider>
</template>

<script setup>
import { NConfigProvider, NFlex, NLayoutHeader, NLayoutContent, NLayoutFooter } from 'naive-ui'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Content from './components/Content.vue'
import Navigation from './components/Navigation.vue'
</script>

<style>
/* 如果需要添加自定义样式 */
</style>