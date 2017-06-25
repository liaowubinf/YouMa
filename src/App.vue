<template>
  <div id="app">
    <router-view v-wechat-title="$route.meta.title" img-set="/static/icons/username.ico"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

