<template lang="html" src="../templates/shared/layout.cshtml"></template>

<script>
    import test from '../store/test.js'
    import adminlte from '../../node_modules/admin-lte/dist/js/adminlte.min.js'
    import Vue from 'vue' 
    import { routes } from '../routes'


    // Vue.component('counter-example', CounterExample);
    // Vue.component('fetch-data', FetchData);
    // Vue.component('home-page', HomePage);
    // Vue.component('helloworld', HelloWorld);

    export default {
        data() {
            return {
                routes
            }
        },
        components: {

        }
    }
    
</script>

<style>
    @import 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css';
    @import 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css';
    @import 'https://cdnjs.cloudflare.com/ajax/libs/admin-lte/2.3.11/css/AdminLTE.min.css';
    @import 'https://cdnjs.cloudflare.com/ajax/libs/admin-lte/2.3.11/css/skins/_all-skins.min.css';
    @import 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css';
</style>