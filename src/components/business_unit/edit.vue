import axios from 'axios'

<template>
<form>
    <v-text-field
      v-model="name"
      :error-messages="nameErrors"
      :label="Name"
      required
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
    ></v-text-field>
    <v-autocomplete
      v-model="select"
      :items="pointList"
      :error-messages="comboboxErrors"
      :label="points"
      required
      multiple
      @change="$v.select.$touch()"
      @blur="$v.select.$touch()"
    ></v-autocomplete>
    <v-btn class="mr-4" @click="submit"></v-btn>
  </form>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required } from 'vuelidate/lib/validators'

  export default {
    mixins: [validationMixin],

    validations: {
      name: { required },
      select: { required },
    },

    data: () => ({
      name: '',
      select: null,
      pointList: [],
    }),
    mounted() {
      let buId = this.$route.params.id
        this.axios
          .get(`http://192.168.1.62:8000/support/bu/${buId}/`)
          .then(response => {this.pointList = response.data,
          console.log(this.$route.params.id)});
    },
    computed: {
      comboboxErrors () {
        const errors = []
        if (!this.$v.select.$dirty) return errors
        !this.$v.select.required && errors.push('Это обязательное поле')
        return errors
      },
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.required && errors.push('Это обязательное поле')
        return errors
      },
    },

    methods: {
      submit () {
        this.$v.$touch()
        this.axios
            .post('http://192.168.1.62:8000/support/bu/',{
              name: this.name, points: this.select
            })
      },
    },
  }
</script>