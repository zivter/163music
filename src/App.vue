<template>
  <div id="app">
    <logo></logo>
    <section>
        <router-view></router-view>
    </section>
    <navbar></navbar>
  </div>
</template>

<script>
import logo from "@/components/logo"
import navbar from "@/components/navbar"

export default {
  components:{
    logo,
    navbar
  }
}
</script>

<style lang="scss">
*{
  padding: 0;
  margin: 0;
}
html,body{
  width:100%;
  height: 100%;
}
#app{
}
</style>
