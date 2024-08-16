<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content';
import {BlogCard} from '#components';
const query: QueryBuilderParams = {
    path: '/blogs',
    limit: 10,
    sort:[{date: -1}]
}
const { data } = await useAsyncData('home', () => queryContent('/').find())
</script>

<template>
<div>
    <!-- <ContentList :query="query" v-slot="{ list }"> -->
      <div v-for="article in data" :key="article._path">
        <BlogCard :title="article.title"/>
      </div>
    <!-- </ContentList> -->
</div>
</template>

<style lang="scss" scoped>
</style>