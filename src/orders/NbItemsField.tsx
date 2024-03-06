import { useRecordContext } from "react-admin";

export const NbItemsField = () => {
  const order = useRecordContext();
  return <>{order?.basket.length}</>;
};

NbItemsField.defaultProps = { label: "Nb Items" };
