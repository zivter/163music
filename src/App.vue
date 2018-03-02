<template>
  <div id="app">
    <logo></logo>
    <section>
        <router-view></router-view>
    </section>
<<<<<<< HEAD
=======
    <navbar></navbar>
>>>>>>> 8014d63a0fb7c55429d04266f4c161938f951a31
  </div>
</template>

<script>
import logo from "@/components/logo"
<<<<<<< HEAD

export default {
  components:{
    logo
=======
import navbar from "@/components/navbar"

export default {
  components:{
    logo,
    navbar
>>>>>>> 8014d63a0fb7c55429d04266f4c161938f951a31
  }
}
</script>

<style lang="scss">
*{
  padding: 0;
  margin: 0;
}
<<<<<<< HEAD
=======
body{
  width:100%;
  height: 100%;
  margin-top: 1rem;
}
#app{
}
>>>>>>> 8014d63a0fb7c55429d04266f4c161938f951a31
</style>
