import { Admin, Resource } from "react-admin";

import { dataProvider } from "./dataProvider";
import products from "./products";
import customers from "./customers";
import groups from "./groups";
import orders from "./orders";

export const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="orders" {...orders} />
    <Resource name="customers" {...customers} />
    <Resource name="groups" {...groups} />
    <Resource name="products" {...products} />
  </Admin>
);
