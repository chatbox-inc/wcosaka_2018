<template>
  <section class="c-container">
    <div class="c-menuColumn">
      <prise-list/>
      <div class="c-menuAdminArea" @click="toggleMode">
        <i class="el-icon-goods"></i> setting
      </div>
    </div>
    <div class="c-mainColumn" v-if="!admin">
      <app-logo/>
    </div>
    <div class="c-mainColumn" v-if="admin">
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
  data(){
    return {
      admin:false
    }
  },
  methods:{
    toggleMode(){
      if(!this.admin){
        if(prompt("管理モードに切り替えます") != "2018"){
          return false
        }
      }
      this.admin = !this.admin
    }
  },
  mounted(){
    if(localStorage){
      const data = localStorage.getItem("GAMEDATA")
      if(data){
        this.$store.commit("update",JSON.parse(data))
      }else{
        this.$store.commit("update")
      }
    }
  }
}
</script>

<style>
  @font-face{
    font-family:element-icons;
    font-display: swap;
    font-weight:400;font-style:normal
  }

</style>
