<template>
  <v-sheet
    color= "rgba(240, 240, 242, 1)"
  >
    <!-- toolbar to give extra space -->
    <v-toolbar
      dense
      flat
      height="80px"
      color="#F0F0F2"
    ></v-toolbar>
    <div class="text-center white--text" id="headingText">
      <p class="pt-3">Dashboard</p>
    </div>
    <v-container>
      <img v-bind:src="user.imageUrl">
      <h1>{{ user.name }}</h1>
      <h3>{{ user.email }}</h3>
      <v-btn
        class="mt-2 white--text logout--btn"
        color="#FB9012"
        @click="logout"
      >
        <v-icon id="icon">
          mdi-export
        </v-icon>
        Log Out
      </v-btn>
    </v-container>
  </v-sheet>
</template>


<script>
export default {
  computed :{
    user: function () {
      return this.$store.getters.getUser
    }
  },
  methods: {
    logout(){
      this.$store.dispatch('logout')
      this.$router.push({name:'home'})
    },
  }
}
</script>

<style scoped>
.logout--btn{
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 100%;
}
</style>