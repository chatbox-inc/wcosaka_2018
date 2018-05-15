<template>
  <div class="prise__content">
    <h3 class="prise__title">景品リスト</h3>
    <ul class="prise__items">
      <li
        v-for="(item,key) in prises"
        :key="key"
        class="prise__item"
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
      }
    }
  }

</script>

<style lang="scss" scoped>
  .prise{
    &__content{
      text-align: center;
    }
    &__titile{
      text-align: center;
    }
    &__items{
      text-align: left;
      list-style: none;
      padding: 0;
    }
    &__item{
      margin: 2em 0;
      font-size: 1.2em;
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
