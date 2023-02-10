<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      
      </div>

      <v-spacer>

    

      </v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>

      App colore verso A :{{ appColor }}
        <!-- With the vbind I can pass value from the APP variable (here) to set value of Component property  
              <ComponentA v-bind:color="appColor">  </ComponentA>
              <button @click="appColor = 'Orange'"> Changee </button>
              <ComponentB>  </ComponentB>
       -->
       <ComponentA :color="appColor" 
                    @resetEvent="appColor=$event" >
       </ComponentA>

       <ComponentB>  </ComponentB>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
//1Import component in APP 
import ComponentA from '@/components/ComponentA.vue'
import ComponentB from '@/components/ComponentB.vue'

export default {
  name: 'App',
//2 add name component
  components:{
   
    ComponentA, ComponentB
  },
  data(){
     return {
      appColor:"greennn"
     }
  }
};
</script>
