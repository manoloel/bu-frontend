<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <v-list dense>
        <v-list-item to='/business_unit' link>
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Бизнес-юниты</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to='/legal_entity' link>
          <v-list-item-action>
            <v-icon>mdi-cog</v-icon>ß
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Юридические лица</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Настройка БЮ</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <router-view></router-view>
      </v-container>
    </v-content>

    <v-footer app>
      <span> Omae wa mou shindeiru</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    name: 'App',
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
    created () {
      this.$vuetify.theme.dark = true
    },
  }
</script>