import {
  BooleanField,
  Datagrid,
  DateField,
  List,
  NumberField,
  ReferenceField,
  ReferenceInput,
  TextField,
} from "react-admin";

export const OrderList = () => (
  <List filters={orderFilters}>
    <Datagrid rowClick="show">
      <TextField source="reference" />
      <DateField source="date" />
      <ReferenceField reference="customers" source="customer_id" link="show" />
      <NumberField source="basket.length" label="Nb items" />
      <NumberField
        source="total_ex_taxes"
        options={{ style: "currency", currency: "EUR" }}
      />
      <NumberField
        source="delivery_fees"
        options={{ style: "currency", currency: "EUR" }}
      />
      <NumberField
        source="taxes"
        options={{ style: "currency", currency: "EUR" }}
      />
      <NumberField
        source="total"
        options={{ style: "currency", currency: "EUR" }}
      />
      <TextField source="status" />
      <BooleanField source="returned" />
    </Datagrid>
  </List>
);
const orderFilters = [
  <ReferenceInput reference="customers" source="customer_id" key="customers" />,
];
