<template lang="html" src="../templates/companies.cshtml"></template>
<script>
  import axios from 'axios'
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    created () {
      axios.get('/api/hello')
      .then((res) => {
        this.msg = "Hello World"
      })
      .catch((ex) => console.log(ex))
    }
  }
</script>
