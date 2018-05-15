<template>
  <section class="c-container">
    <div class="c-menuColumn">
      <prise-list/>
      <div class="c-menuAdminArea" @click="toggleMode">
        <i class="el-icon-goods"></i> setting
      </div>
    </div>
    <div class="c-mainColumn" v-if="true">
      <app-logo/>
    </div>
    <div class="c-mainColumn" v-if="false">
      <prise-setting/>
    </div>
  </section>
</template>

<script>
import PriseList from '~/components/PriseList.vue'
import PriseSetting from '~/components/PriseSetting.vue'
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo,
    PriseList,
    PriseSetting
  },
  methods:{
    toggleMode(){}
  }
}
</script>

<style>

</style>
