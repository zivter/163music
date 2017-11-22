<template>
  <div id="app">
    <logo></logo>
    <section>
        <router-view></router-view>
    </section>
  </div>
</template>

<script>
import logo from "@/components/logo"

export default {
  components:{
    logo
  }
}
</script>

<style lang="scss">
*{
  padding: 0;
  margin: 0;
}
</style>
