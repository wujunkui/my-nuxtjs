<script setup lang="ts">
interface Props {
    title?: string;
    image?: string;
    description?: string;
}

defineProps<Props>();

</script>

<template>
<div class="rounded">
    <div class="flex min-h-32 rounded-md bg-white">
        <img :src="image" alt="">
        <div>
            <h1>{{ title }}</h1>
            <p>{{ description }}</p>
        </div>
    </div>
</div>
</template>

<style lang="scss" scoped>
</style>