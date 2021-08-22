<template>
  <v-app id="inspire">
    <v-app-bar
      app
      shrink-on-scroll
    >
<!--      <v-app-bar-nav-icon></v-app-bar-nav-icon>-->
              <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>📖 Hello Book</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
<!--              <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>-->

      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
    >
      <!--  -->
    </v-navigation-drawer>

    <v-main>
      <v-container>
        <v-row>
          <v-col
            v-for="n in 24"
            :key="n"
            cols="4"
          >
            <v-card height="200"></v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  export default {

        data: () => ({ drawer: null }),

  }
</script>