<template>
  <div class="prise__content">
    <div class="row prise__item"
         v-for="(item,key) in [1,1,1,1,1]"
         :key="key">
      <div class="col-auto">
        <span class="prise__circle" :style="{backgroundColor:'#333'}"/>
      </div>
      <div class="col">
        <el-input></el-input>
      </div>
      <div class="col">
        <span class="prise__number">
          <el-input></el-input>
        </span>
        &nbsp;
        <a >
          <i class="el-icon-plus"></i>
        </a>
        &nbsp;
        <a >
          <i class="el-icon-minus"></i>
        </a>
      </div>
    </div>

    <div class="text-center">
      <a tabindex="" class="btn btn-light">
        &nbsp;&nbsp;&nbsp;&nbsp;
        保
        &nbsp;&nbsp;
        存
        &nbsp;&nbsp;&nbsp;&nbsp;
      </a>
    </div>

  </div>
</template>

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
