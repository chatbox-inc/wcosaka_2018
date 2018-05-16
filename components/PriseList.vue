<template>
  <div class="prise__content">
    <h3 class="prise__title">景品リスト</h3>
    <ul class="prise__items">
      <li
        v-for="(item,key) in prises"
        :key="key"
        :class="itemClass(item.amount)"
      >
        <span
          class="prise__circle"
          :style="{backgroundColor: item.color}"
        />
        <span>{{ item.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    computed:{
      prises(){
        return this.$store.state.prises
      },
    },
    methods:{
      itemClass(amount){
        return {
          "prise__item": amount > 0,
          "prise__item--soldOut": amount == 0,
          "prise__item--few": amount < 6 && amount > 0 ,
        }
      }
    }
  }

</script>

<style lang="scss" scoped>
  .prise{
    &__content{
      text-align: center;
    }
    &__title{
      margin-bottom: 2em;
      text-align: center;
    }
    &__items{
      text-align: left;
      list-style: none;
      padding: 0;
    }
    &__item,
    &__item--soldOut{
      margin-bottom: .5em;
      padding: 1em 1em;
      font-size: 1.2em;
    }
    &__item--soldOut{
      background: rgba(0,0,0,.2);
      position: relative;
      &::after {
        content: "売切御免";
        font-size: 30px;
        font-weight: bold;
        letter-spacing: 3px;
        color: rgba(255,255,255,.9);
        position: absolute;
        top: 10px;
        left: 50%;
        transform: translateX(-50%);
      }
    }
    &__item--few{
      position: relative;
      &::after {
        content: "△";
        font-size: 20px;
        font-weight: bold;
        color: rgba(255,255,255,.9);
        position: absolute;
        top: 20px;
        right: -5px;
      }
    }
    &__circle{
      display: inline-block;
      width: 1.2em;
      height: 1.2em;
      margin-right: 1em;
      border-radius: 50%;
      vertical-align: text-top;
    }


  }

</style>
