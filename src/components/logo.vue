<template>
  <div class="logo">
    <i class="back" @click="back"></i>
    <p class="logoTittle"></p>
    <div>
        <button @click="$store.commit('add')">+</button>
        <button @click="$store.commit('reduce')">-</button>
    </div>
  </div>
</template>
<script>
  import axios from 'axios';
  import tittle from '../store/modules/tittle'

  export default{
    data(){

    },
    tittle,
    methods:{
        back(){
          window.history.back();
        },
        count(){
          console.log(this.$store.state.count)
            return this.$store.state.count;
            
        }
    }
  }
</script>
<style lang="scss" scoped>
.logo{
  position: fixed;
  top: 0;
  left: 0;
  height: 1rem;
  display: block;
  width: 100%;
  background: #191919;
  z-index: 2;
  .back{
    float: left;
    display: block;
    width: .5rem;
    height: .5rem;
    background: url("../../static/img/back.png") no-repeat center;
    background-size: 100%;
    margin: .25rem 0 0 .2rem;
  }
}
</style>
