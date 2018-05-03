import CounterExample from 'components/counter-example/counter-example'
import FetchData from 'components/fetch-data/fetch-data'
import HomePage from 'components/home-page/home-page'
import Companies from 'components/companies/companies'

export const routes = [
    { path: '/', component: HomePage, display: 'Home', style: 'glyphicon glyphicon-home' },
    { path: '/counter', component: CounterExample, display: 'Counter', style: 'glyphicon glyphicon-education' },
    { path: '/fetch-data', component: FetchData, display: 'Fetch data', style: 'glyphicon glyphicon-th-list' },
    { path: '/companies', component: Companies, display: 'Companies', style: 'glyphicon glyphicon-pencil' }
]