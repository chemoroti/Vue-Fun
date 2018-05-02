import Vue from 'vue';
import { Component } from 'vue-property-decorator';

interface Company {
    id: number,
    companyName: string,
    address1: string,
    city: string,
    state: string,
    companyUrl: string,
    country: string
}

@Component
export default class CompaniesComponent extends Vue {
    items: Company[] = [];
    num1: number = 5;
    num2: number = 6;
    mounted() {
        fetch('apiv1/Api/TopCompanies')
            .then(response => response.json() as Promise<Company[]>)
            .then(data => {
                this.items = data;
            });
    }
    get num3() {
        return this.num1 + this.num2;
    }
    data() {
        return {
            //thing: this.methods.DoThing(),
            headers: [
                {
                    text: "Id",
                    align: "left",
                    sortable: false,
                    value: 'id'
                },
                {
                    text: "Company Name",
                    value: "name",
                },
                {
                    text: "Address",
                    value: "address"
                },
                {
                    text: "City",
                    value: "city"
                },
                {
                    text: "State",
                    value: "state"
                },
                {
                    text: "Country",
                    value: "country"
                },
                {
                    text: "Website",
                    value: "companyUrl"
                }
            ],
        }
    }
}
