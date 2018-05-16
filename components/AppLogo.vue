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
      <div class="wapu__btn" @click="start" v-if="timer.length == 0">
        START
      </div>
      <div class="wapu__btn--stop" @click="stop" v-if="timer.length > 0">
        STOP
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        index:0,
        timer:[]
      }
    },
    computed:{
      colors(){
        const colors = []
        for(let prise of this.$store.state.prises){
          if(prise.amount > 0){
            colors.push(prise.color)
          }
        }
        return colors;
      },
      style(){
        return {
          backgroundColor: this.colors[this.index]
        }
      }
    },
    methods:{
      start(){
        if(this.timer.length === 0){
          this.timer.push(setInterval(()=>{
            if(this.colors.length > this.index+1){
              this.index++
            }else{
              this.index = 0
            }
          },100))
        }
      },
      stop(){
        for(let timer of this.timer){
          clearInterval(timer)
        }
        this.timer = []
        this.index = Math.floor(Math.random() * this.colors.length)

        this.$store.commit("sub",this.colors[this.index])
        setTimeout(()=>{
          this.$notify({
            title: 'おめでとう！',
            message: this.$store.getters.byColor(this.colors[this.index]).name,
            duration: 0
          });
        },100)

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
      left: 50%;
      transform: translateX(-50%);
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
    &__btn,
    &__btn--stop
    {
      background: #31AF94;
      box-shadow: #2B6B63 0px 10px 0px;
      color: white;
      font-size: 2em;
      width: 10em;
      margin: 1em;
      display: inline-block;
      padding: .5em 0;
      letter-spacing: 2px;
      border-radius: 999px;
    }
    &__btn--stop{
      background: #A46DAA;
      box-shadow: #6D4A71 0px 10px 0px;
    }


  }

</style>
