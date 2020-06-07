import axios from 'axios'

<template>
    <v-col>
    <v-btn depressed to='business_unit/create' color='deep-purple 4' small>Создать Бизнес-Юнит</v-btn>
        <v-data-table
        :headers="headers"
        :items="list"
        :items-per-page="5"
        class="elevation-1"
        @click:row="open"
        ></v-data-table>
    </v-col>
</template>

<script>
export default{
  data () {
      return {
        headers: [
            {
                text: "id",
                value: "id"
            },
          {
            text: 'Наименование',
            value: 'name',
          },
          { text: 'Города', value: 'cities'},
        ],
        list: []
    };
  },
  mounted() {
    this.axios
      .get('http://192.168.1.62:8000/support/bu')
      .then(response => {this.list = response.data});
  },

  methods: {
      open (row) {
          this.$router.push({name: "buEdit", params: {id: row.id}})
      }
  }
}
</script>