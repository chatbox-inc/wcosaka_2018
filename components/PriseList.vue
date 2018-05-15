<template>
  <div class="prise__content">
    <h3 class="prise__title">景品リスト</h3>
    <ul class="prise__items">
      <li
        v-for="(item,key) in [1,1,1,1,1]"
        :key="key"
        class="prise__item"
      >
        <span
          class="prise__circle"
          :style="{backgroundColor: '#333'}"
        />
        <span>アクリルキーホルダー</span>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
  .prise{
    &__content{
      text-align: center;
    }
    &__titile{
      text-align: center;
    }
    &__items{
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
