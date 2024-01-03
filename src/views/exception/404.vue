<template>
  <div>
    <a-result status="404" title="404" sub-title="Sorry, the page you visited does not exist.">
      <template #extra>
        <a-button type="primary" @click="handleGoHome">Back Home</a-button>
      </template>
    </a-result>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const handleGoHome = () => {
  router.push({ path: '/' })
}
</script>
