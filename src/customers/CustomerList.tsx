import {
  Datagrid,
  DateField,
  EmailField,
  List,
  NumberField,
  ReferenceArrayField,
  ReferenceManyCount,
  TextField,
} from "react-admin";

export const CustomerList = () => (
  <List
    filter={{ has_ordered: true }}
    sort={{ field: "latest_purchase", order: "DESC" }}
  >
    <Datagrid rowClick="show">
      <TextField source="first_name" />
      <TextField source="last_name" />
      <EmailField source="email" />
      <TextField source="city" />
      <ReferenceManyCount
        reference="orders"
        target="customer_id"
        filter={{ returned: false }}
      />
      <NumberField source="total_spent" />
      <DateField source="latest_purchase" />
      <ReferenceArrayField reference="groups" source="groups" />
    </Datagrid>
  </List>
);
