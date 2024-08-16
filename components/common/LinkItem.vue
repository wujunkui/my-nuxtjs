<script setup lang="ts">
defineProps<{
    href?:string
    openWindow?:boolean
}>();
</script>

<template>
    <NuxtLink :to="href" :_target="openWindow ? '_blank' : ''" class="no-underline text-inherit">
        <slot /> 
    </NuxtLink>
</template>

<style lang="scss" scoped>
</style>