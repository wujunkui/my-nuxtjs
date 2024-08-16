<script setup lang="ts">
import { NavItem } from './NavItems'


</script>

<template>
<div class="h-16 bg-white w-full">
    <div class="max-w-content mx-auto flex items-center h-full text-lg text-gray-500">
        <div class="flex items-center gap-4 justify-center grow">
            <NavItem name="" title="首页" />
            <NavItem name="blogs" title="博客" />
            <NavItem name="shop" title="小商店" />
            <NavItem name="award" title="赞助" />
        </div>
    </div>
</div>
</template>

<style lang="scss" scoped>
</style>