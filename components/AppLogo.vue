<template>
  <div class="">
    <div class="wapu__noren">
      <img src="~/assets/images/noren.png" alt="">
    </div>
    <div class="wapu__cartain" :style="style"/>
    <div class="wapu__wapu">
      <img src="~/assets/images/wapuu.png" alt="">
    </div>
    <div class="wapu__actions">
      <div class="wapu__btn" @click="start" v-if="!timer">
        START
      </div>
      <div class="wapu__btn" @click="stop" v-if="timer">
        STOP
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        colors:["red","blue","yellow","black","white"],
        index:0,
        timer:null
      }
    },
    computed:{
      style(){
        return {
          backgroundColor: this.colors[this.index]
        }
      }
    },
    methods:{
      start(){
        this.timer = setInterval(()=>{
          if(this.colors.length > this.index){
            this.index++
          }else{
            this.index = 0
          }
        },200)
      },
      stop(){
        clearInterval(this.timer)
        this.timer = null

      },
    },
    mounted(){
    }
  }
</script>

<style lang="scss" scoped>
  .wapu{
    &__noren{
      position: absolute;
      top:0;
      left: 5px;
    }
    &__wapu{
      position: relative;
      z-index: 100;
    }
    &__cartain{
      position: absolute;
      top:50%;
      left: 50%;
      width: 300px;
      height: 300px;
      margin-top: -150px;
      margin-left: -150px;
      background: red;
      z-index: 10;
    }
    &__actions{
      position: absolute;
      width: 100%;
      text-align: center;
      left:0;
      bottom: 1em;
    }
    &__btn{
      background: #31AF94;
      color: white;
      font-size: 2em;
      width: 10em;
      margin: 1em;
      display: inline-block;
      padding: .5em 0;
      letter-spacing: 2px;
      border-radius: 999px;
      box-shadow: #2B6B63 0px 10px 0px;


    }

  }

</style>
