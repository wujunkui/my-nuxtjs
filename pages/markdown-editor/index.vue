<template>
    <div>
      <v-md-editor v-model="markdownContent" :theme="theme" />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import VMdEditor from '@kangc/v-md-editor'
  import githubTheme from '@kangc/v-md-editor/lib/theme/github.js'
  // import 'github-markdown-css/github-markdown.css'
  
  const markdownContent = ref('# Hello World')
  const theme = ref(githubTheme)
  
  VMdEditor.use(githubTheme)
  </script>