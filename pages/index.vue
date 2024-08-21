<script setup lang="ts">
const {locale, locales} = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value)
})
</script>

<template>
  <NuxtLink v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)">
    {{ locale.name }}
  </NuxtLink>
  <p>{{ $t('welcome') }}</p>
  <NuxtLinkLocale to="bio">{{ $t('bio') }}</NuxtLinkLocale>
</template>

<style scoped>

</style>
