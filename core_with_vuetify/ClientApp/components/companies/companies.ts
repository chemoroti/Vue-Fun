import Vue from 'vue';
import { Component } from 'vue-property-decorator';

interface Company {
    id: number,
    name: string
}

@Component
export default class CompaniesComponent extends Vue {
    companies: Company[] = [];

    mounted() {
        fetch('apiv1/Api/TopCompanies')
            .then(response => response.json() as Promise<Company[]>)
            .then(data => {
                this.companies = data;
            });
    }
}
