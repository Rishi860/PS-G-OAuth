<template>
  <v-sheet
    color = "rgba(240, 240, 242, 1)"
  >
    <v-footer
      color = "rgba(240, 240, 242, 1)"
      padless
      class="footer"
    >
      <!-- mobile version code -->
      
      <v-container class="hidden-md-and-up">
        <v-row>
            <v-col cols="1" class="mt-4">
              <v-icon id="changeimagesize" color="black">mdi-phone</v-icon>
            </v-col>
            <v-col cols="7" class="ml-n5">
              <v-col class="black--text"><p id="changesize">+919829558616</p><p id="changesize">+919166469999</p></v-col>
            </v-col>
            <v-col cols="1" class="mr-4 mt-4" >
              <v-btn
                icon
                href="https://www.instagram.com/citrineindia/"
              >
                <v-icon id="changeimagesize">mdi-instagram</v-icon>
              </v-btn>
            </v-col>
            <v-col cols="1" class="mt-4 mr-4">
              <v-btn
                icon
                href="https://www.facebook.com/citrinejaipur"
              >
                <v-icon id="changeimagesize">mdi-facebook</v-icon>
              </v-btn>
            </v-col>
            <v-col cols="1" class="mt-4">
              <v-btn
                icon
                href="https://wa.me/919166469999"
              >
                <v-icon id="changeimagesize">mdi-whatsapp</v-icon>
              </v-btn>
            </v-col>
          </v-row>
          <v-row class="mt-n10">
            <v-col cols="1" class="mt-1">
              <v-icon id="changeimagesize">mdi-email</v-icon>
            </v-col>
            <v-col cols="11" class="ml-n5">
              <v-col><p id="changesize">hello@citrineindia.in</p></v-col>
            </v-col>
          </v-row>
          <v-row class="mt-n10">
            <v-col cols="1" class="mt-1">
              <v-icon id="changeimagesize">mdi-map-marker</v-icon>
            </v-col>
            <v-col cols="11" class="ml-n5">
              <v-col ><p id="changesize">7,Desh Bhushan Nagar, Delhi Bypass Road , Jaipur-302003</p></v-col>
            </v-col>
          </v-row>
          <v-row class="justify-center mb-10">
            <v-btn
              text
              id="changesize"
              @click="navigateTo({name:'tnc'})"
            >
              Terms & Conditions
            </v-btn>
            <v-btn
              text 
              id="changesize"
              @click="navigateTo({name: 'shipnreturn'})"
            >
              Shiping & Returns
            </v-btn>
          </v-row>
          <v-text
            md="4"
            id="changesize"
            class="justify-center mt-n10"
          >
            Copyright @ {{ new Date().getFullYear() }}. CitrineIndia. All rights reserved.<span >A creation by <span id="changefonttogara"> bonkers </span></span>
          </v-text>
      </v-container>


      <!-- end of mobile version code -->


      <!-- desktop version code -->
      <v-container class="hidden-sm-and-down">
          <h1 class="display-3 my-10" id="heading">PS</h1>
          <v-text
            class="grey--text py-4 text-center copyright mt-10"
            md="4"
          >
            Copyright @ {{ new Date().getFullYear() }}.<strong> PS. All rights reserved.</strong>
          </v-text>
          <!-- <v-divider dark="true"></v-divider> -->
        <!-- <div class="caption grey--text text-center" id="description"><p class="pt-10 mb-10">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro distinctio, sequi illum voluptas veniam alias exercitationem numquam quo, quos sed vitae dolorum consectetur reprehenderit architecto. Odit sunt facilis cum atque?</p></div> -->
        <!-- <v-row
          justify="center"
          no-gutters
          class="pt-10 mb-10"
        > -->
      </v-container>
    </v-footer>
  </v-sheet>
</template>



<script>
export default {
  data: () => ({
  })
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');

.footer {
  margin-top: 8%;
  padding-top: 3%;
  padding-bottom: 2%;
  font-family: 'Montserrat',sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: -0.204545px;
}
.copyright {
  font-size: .75rem;
}

#heading {
    font-family: 'Cormorant Garamond', serif !important;
}

#changecolor{
  background-color :#EFEFF1 !important;
}

#givemargin{
  margin-right : 70px !important;
}

#changesize{
  font-size : 8px;
  margin-left : 0px;
  padding-left : 0px;
  font-family: 'Montserrat',sans-serif;
  font-style: normal;
  font-weight : normal;
  line-height: 10px;
  display: flex;
  align-items: center;
  letter-spacing: -0.2px;

  /* Prime Dark */

  color: #25181D !important;

  opacity: 0.75;
}

#changeimagesize{
  width : 12px;
  height : 16px;
  color: #25181D !important;
}

#changefonttogara{
  font-family: 'Cormorant Garamond', serif !important;
  font-style: normal !important;;
  font-weight: 700 !important;
  font-size: 10px !important;
  line-height: 9px !important;
  letter-spacing: -0.5px !important;
  text-transform: lowercase !important;
  color: #022331 !important;
  
}
.footer--btn{
  font-family: 'Montserrat',sans-serif;
  text-transform: none !important;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: -0.204545px;
}
</style>