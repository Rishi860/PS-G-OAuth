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
      <p class="pt-3">MY ACCOUNT</p>
    </div>
    <v-container>
      <v-row>
        <v-col
          md="6"
        >
          <v-card
            id="card"
            class="mt-10"
            height="218px"
            color="rgba(240, 240, 242, 1)"
          >
            <v-card-title class="card--heading">Account</v-card-title>
            <v-divider id="divider"></v-divider>
            <v-card-actions class="mx-auto">
              <v-row>
                <v-col md="2"></v-col>
                <v-col xs="6" md="4">
                  <v-btn
                    large
                    class="ma-2 #25181D--text elevation-2"
                    @click.prevent="loginWithGoogle"
                  >
                    <v-avatar color="rgba(240, 240, 242, 1)" size="25">
                      <v-icon small>
                        mdi-google
                      </v-icon>
                    </v-avatar>
                    Log In
                  </v-btn>
                </v-col>
                <v-col xs="6" md="4">
                  <v-btn
                    large
                    color="#25181D"
                    class="ma-2 elevation-2 white--text"
                    @click.prevent="signWithGoogle"
                  >
                    <v-avatar size="25">
                      <v-icon small>
                        mdi-google
                      </v-icon>
                    </v-avatar>
                    Sign Up
                  </v-btn>
                </v-col>
                <v-col md="2"></v-col>
              </v-row>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col
          md="6"
        >
          <v-container class="mt-n9">
            <v-img src="https://citrine-india-site.s3.ap-south-1.amazonaws.com/notLogged.png" width="500px" height="500px" aspect-ratio="1"></v-img>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
import AuthenticationServices from '../services/authenticationServics'

export default {
  name: 'login_signup_social',
  methods: {
    loginWithGoogle () {
      this.$gAuth
        .signIn()
        .then(async (GoogleUser) => {
          // on success do something
          const id_token = GoogleUser.getAuthResponse().id_token;
          const response = (await AuthenticationServices.login(id_token)).data
          this.$store.dispatch('setToken', response.token)
          this.$store.dispatch('setUser', response.user)
          this.$store.dispatch('setCart', response.cart)
          // window.history.go(-1); 
          this.navigateTo({name:'dashboard'})
        })
        .catch(error => {
          console.log('error', error)
        })
    },
    signWithGoogle () {
      this.$gAuth
        .signIn()
        .then(async (GoogleUser) => {
          // on success do something
          const id_token = GoogleUser.getAuthResponse().id_token;
          const response = (await AuthenticationServices.register(id_token)).data;
          this.$store.dispatch('setToken', response.token)
          this.$store.dispatch('setUser', response.user)
          this.$router.push({name:'dashboard'})
        })
        .catch(error => {
          console.log('error', error)
        })
    },
    navigateTo(route){
      this.$router.push(route)
    }
  },
  data () {
    return {
      loading3: true,
    }
  },
}

</script>

<style>
#headingText{
  background-color:rgba(37, 24, 29, 1);
  font-family: 'Cormorant Garamond', serif !important;
  font-weight : 500 !important;
  height: 56px;
  font-size: 24px;
  line-height: 132%;
  margin-top: 24px;
}
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
#card{
  font-family: 'Montserrat', sans-serif;
  border: 1px solid #FB9012 !important;
  box-shadow: 4px 8px 16px rgba(37, 24, 29, 0.15);
  border-radius: 8px;
}
#divider{
  border-color: #FB9012 !important;
}
.card--heading{
  font-family: 'Montserrat', sans-serif;
  background: rgba(37, 24, 29, 0.03);
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 100%;
}
</style>
