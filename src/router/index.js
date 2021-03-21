import { createRouter, createWebHistory } from "vue-router";

import Dashboard from "../views/dashboard/Dashboard";

import Customers from "../views/customers/Customers";
import CustomerAdd from "../views/customers/CustomerAdd/index.vue";
import CustomersCompany from "../views/customers/CustomersCompany";
import CustomerCustomize from "../views/customers/CustomerCustomize";

import InvoiceNew from "../views/invoice/InvoiceNew";
import InvoiceSaved from "../views/invoice/InvoiceSaved";
import InvoiceEdit from "../views/invoice/InvoiceEdit";

const routes = [
  {
    path: "/",
    redirect: "/dashboard",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },

  {
    path: "/customer",
    name: "Customer",
    component: Customers,
  },

  { path: "/customer/company", component: CustomersCompany },
  { path: "/customer/new", component: CustomerAdd },
  { path: "/customer/customize", component: CustomerCustomize },

  {
    path: "/invoice",
    name: "Invoice",
    component: Customers,
  },
  { path: "/invoice/new", component: InvoiceNew },
  { path: "/invoice/saved", component: InvoiceSaved },
  { path: "/invoice/edit", component: InvoiceEdit },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
