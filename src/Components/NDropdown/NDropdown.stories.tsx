import React from "react";

import NDropdown from "./NDropdown";

export default {
  title: "component/NDropdown",
  component: NDropdown,
};

const Template = () => <NDropdown option={["1", "2", "3", "4"]} />;

export const Dropdown = Template.bind({});
