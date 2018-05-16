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

const defaultData = [
  {
    name: "サーモスタンブラー",
    amount: 50,
    color: "#DE3047"
  },
  {
    name: "特製タオル",
    amount: 50,
    color: "#FF8900"
  },
  {
    name: "アクリルキーホルダー",
    amount: 50,
    color: "#8B7FEB"
  },
  {
    name: "マスキングテープ",
    amount: 200,
    color: "#A9CB24"
  },
  {
    name: "記念テープ",
    amount: 200,
    color: "#0EA3CC"
  },
]

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
        this.$store.commit("update",defaultData)
      }
    }
  }
}
</script>

<style>

</style>
