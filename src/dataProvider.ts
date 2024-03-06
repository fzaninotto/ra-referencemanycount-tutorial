import fakeRestProvider from "ra-data-fakerest";
import generateData from "data-generator-retail";

const { commands, ...data } = generateData();
const fixedData = {
  orders: commands,
  groups: [
    { id: "compulsive", name: "Compulsive", description: "Compulsive buyer" },
    {
      id: "collector",
      name: "Collector",
      description: "Buys all items in a series",
    },
    { id: "ordered_once", name: "Ordered once", description: "One time buyer" },
    { id: "regular", name: "Regular", description: "Buys once a month" },
    { id: "returns", name: "Returns", description: "Has returned items" },
    { id: "reviewer", name: "Reviewer", description: "Has reviewed produccts" },
  ],
  ...data,
};

export const dataProvider = fakeRestProvider(fixedData, true);
