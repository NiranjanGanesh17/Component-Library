import React from "react";

import NMultiselect from "./NMultiselect";

export default {
  title: "component/NMultiselect",
  component: NMultiselect,
};

const Template = () => <NMultiselect option={["1", "2", "3", "4"]} />;

export const Multiselect = Template.bind({});
