import Vue from 'vue';
import VueRouter from 'vue-router';

import indexScreen from "@/views/indexScreen";
import contactScreen from "@/views/contactScreen";
import servicesScreen from "@/views/servicesScreen";
import aboutUs from "@/views/aboutUs";
import insuranceScreen from "@/views/insuranceScreen";

import carPurchase from "@/servicePages/carPurchase";
import consigment_sale from "@/servicePages/consigment_sale";
import credit from "@/servicePages/credit_page";
import leasing from "@/servicePages/leasing_page";
import optionalCar from "@/servicePages/optionalCar";
import other_services from "@/servicePages/other_services";
import purchase_counter_account from "@/servicePages/purchase_counter_account";
import carsSelection from "@/views/carsSelection";
import PostComponents from "@/components/PostComponents";
import carDetail from "@/components/carDetail";
import carAnalysis from "@/views/carAnalysis";

Vue.use(VueRouter);

const routes = [
    {path:"/", component: indexScreen},
    {path:"/services", component: servicesScreen},
    {path:"/contacts", component: contactScreen},
    {path:"/aboutUs", component: aboutUs},
    {path:"/insuranceScreen", component: insuranceScreen},
    {path:"/carsSelection", component: carsSelection},
    {path:"/PostComponents", component: PostComponents},
    {path:"/carDetail", component: carDetail},
    {path:"/carAnalysis", component: carAnalysis},


    {path:"/sevices/carPurchase", component: carPurchase},
    {path:"/sevices/credit", component: credit},
    {path:"/sevices/leasing", component: leasing},
    {path:"/sevices/optionalCar", component: optionalCar},
    {path:"/sevices/other_services", component: other_services},
    {path:"/sevices/purchase_counter_account", component: purchase_counter_account},
    {path:"/sevices/consigment_sale", component: consigment_sale}



];

const router = new VueRouter({
    routes,
});

export default router;

