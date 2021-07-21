<template>
  <div>
    <v-app-bar  app flat hide-on-scroll height="104px">
      <v-toolbar-title  id="title" @click="navigateTo({name:'home'})" >PS</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        id="title-btn"
        class="hidden-sm-and-down"
        plain
        depressed
        @click="dash"
      >
        Dashboard
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
  export default {
    data: () => ({
      methods: {
        dash () {
          if (!this.$store.state.isUserLoggedin) {
            this.$router.push({name: 'home'})
          } else {
            this.$router.push({name: 'dashboard'})
          }
        }
      }
    }),
  }
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300&display=swap');
  #title {
    font-family: 'Cormorant Garamond', serif;
    color: #25181D;
    font-size: 52px;
    letter-spacing: -.06em;
  }
  #title:hover{
    cursor: pointer;
  }
  #title-btn {
    font-family: 'Cormorant Garamond', serif;
    color: #25181D;
    font-size: 20px;
  }
  .v-text-field{
    width: 10px;
  }
  #hellotext{
    margin-bottom: 16px;
    margin-top: 15px;
    margin-left: 10px;
    font-size: 25px;
    color:rgba(240, 240, 242, 1);
  }
  #changefont{
    font-family: 'Montserrat' , sans-serif;
    letter-spacing: 0.01em;
    font-size: 24px;
    line-height: 100%;
    margin-left: 15px;
    color:#F0F0F2 !important;
  }
  #changefonttogara{
    font-family: 'Cormorant Garamond', serif !important;
    font-size:25px;
    letter-spacing: -0.08em;
    line-height: 133.7%;
    color:#F0F0F2 !important;
  }
  #changefontcolor{
    color : rgba(251, 144, 18, 1) !important;
  }
</style>