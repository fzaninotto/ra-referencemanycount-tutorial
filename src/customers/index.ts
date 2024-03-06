import PeopleIcon from "@mui/icons-material/People";
import { CustomerList } from "./CustomerList";
import { CustomerShow } from "./CustomerShow";
import type { Customer } from "../types";

export default {
  list: CustomerList,
  show: CustomerShow,
  recordRepresentation: (record: Customer) =>
    `${record.first_name} ${record.last_name}`,
  icon: PeopleIcon,
};
