import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { sidebarRoutes } from '../../routes'

@Component
export default class NavMenuComponent extends Vue {
    routes = sidebarRoutes;
}
