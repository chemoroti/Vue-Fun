import Vue from 'vue';
import { Component } from 'vue-property-decorator';

interface Company {
    Id: number,
    Name: string
}

@Component
export default class CompaniesComponent extends Vue {
    things: Company[] = [];

    mounted() {
        fetch('apiv1/Api/TopCompanies')
            .then(response => response.json() as Promise<Company[]>)
            .then(data => {
                console.log(data);
                this.things = data;
            });
    }
}
