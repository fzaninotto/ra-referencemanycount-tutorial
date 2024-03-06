import {
  BooleanField,
  Datagrid,
  DateField,
  EmailField,
  NumberField,
  ReferenceArrayField,
  ReferenceManyCount,
  ReferenceManyField,
  Show,
  TabbedShowLayout,
  TextField,
} from "react-admin";

export const CustomerShow = () => (
  <Show>
    <TabbedShowLayout>
      <TabbedShowLayout.Tab label="Identity">
        <TextField source="first_name" />
        <TextField source="last_name" />
        <EmailField source="email" />
        <TextField source="avatar" />
        <TextField source="birthday" />
      </TabbedShowLayout.Tab>
      <TabbedShowLayout.Tab label="Address">
        <TextField source="address" />
        <TextField source="zipcode" />
        <TextField source="city" />
        <TextField source="stateAbbr" />
      </TabbedShowLayout.Tab>
      <TabbedShowLayout.Tab
        label="Orders"
        count={
          <ReferenceManyCount
            reference="orders"
            target="customer_id"
            filter={{ returned: false }}
          />
        }
      >
        <ReferenceManyField reference="orders" target="customer_id">
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField source="reference" />
            <DateField source="date" />
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
        </ReferenceManyField>
      </TabbedShowLayout.Tab>
      <TabbedShowLayout.Tab label="Stats">
        <DateField source="first_seen" />
        <DateField source="last_seen" />
        <BooleanField source="has_ordered" />
        <TextField source="latest_purchase" />
        <BooleanField source="has_newsletter" />
        <ReferenceArrayField source="groups" reference="groups" />
        <NumberField source="nb_commands" />
        <DateField source="total_spent" />
      </TabbedShowLayout.Tab>
    </TabbedShowLayout>
  </Show>
);
