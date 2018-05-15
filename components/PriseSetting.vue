<template>
  <div class="prise__content">
    <div class="row prise__item"
         v-for="(item,key) in prises"
         :key="key">
      <div class="col-auto">
        <span class="prise__circle" :style="{backgroundColor:item.color}"/>
      </div>
      <div class="col">
        <el-input v-model="item.name"></el-input>
      </div>
      <div class="col">
        <span class="prise__number">
          <el-input v-model="item.amount"></el-input>
        </span>
        &nbsp;
        <a >
          <i class="el-icon-plus" @click="item.amount++"></i>
        </a>
        &nbsp;
        <a >
          <i class="el-icon-minus" @click="item.amount--"></i>
        </a>
      </div>
    </div>

    <div class="text-center">
      <a tabindex="" class="btn btn-light" @click="store">
        &nbsp;&nbsp;&nbsp;&nbsp;
        保
        &nbsp;&nbsp;
        存
        &nbsp;&nbsp;&nbsp;&nbsp;
      </a>
    </div>

  </div>
</template>


<script>
  export default {
    data(){
      return {
        prises: []
      }
    },
    computed:{
    },
    methods:{
      store(){
        this.$store.commit("update",this.prises)
      }
    },
    mounted(){
      for(let prise of this.$store.state.prises){
        this.prises.push(Object.assign({},prise))
      }
    }
  }
</script>

<style lang="scss" scoped>
  .prise{
    /*&__content{*/
      /*text-align: center;*/
    /*}*/
    /*&__titile{*/
      /*text-align: center;*/
    /*}*/
    /*&__items{*/
      /*list-style: none;*/
      /*padding: 0;*/
    /*}*/
    &__item{
      margin: 2em 0;
      font-size: 1.2em;
    }
    &__number{
      display: inline-block;
      width: 5em;
    }
    &__circle{
      display: inline-block;
      width: 1.2em;
      height: 1.2em;
      margin-right: 1em;
      border-radius: 50%;
    }


  }

</style>
