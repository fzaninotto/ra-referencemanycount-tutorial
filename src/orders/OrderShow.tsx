import {
  ArrayField,
  BooleanField,
  Datagrid,
  DateField,
  Labeled,
  NumberField,
  ReferenceField,
  Show,
  SimpleShowLayout,
  TextField,
} from "react-admin";
import { Stack } from "@mui/material";

export const OrderShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="reference" />
      <DateField source="date" />
      <ReferenceField source="customer_id" reference="customers" link="show" />
      <ArrayField source="basket">
        <Datagrid bulkActionButtons={false} sx={{ width: 300, mb: 1 }}>
          <ReferenceField source="product_id" reference="products" />
          <NumberField source="quantity" />
        </Datagrid>
      </ArrayField>
      <Stack direction="row" gap={1}>
        <Labeled>
          <NumberField
            source="total_ex_taxes"
            options={{ style: "currency", currency: "EUR" }}
          />
        </Labeled>
        <Labeled>
          <NumberField
            source="delivery_fees"
            options={{ style: "currency", currency: "EUR" }}
          />
        </Labeled>
        <Labeled>
          <NumberField source="tax_rate" options={{ style: "percent" }} />
        </Labeled>
        <Labeled>
          <NumberField
            source="taxes"
            options={{ style: "currency", currency: "EUR" }}
          />
        </Labeled>
        <Labeled>
          <NumberField
            source="total"
            options={{ style: "currency", currency: "EUR" }}
          />
        </Labeled>
      </Stack>
      <TextField source="status" />
      <BooleanField source="returned" />
    </SimpleShowLayout>
  </Show>
);
