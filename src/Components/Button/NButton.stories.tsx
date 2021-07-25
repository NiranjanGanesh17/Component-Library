import React from "react";

import NButton from "./NButton";

export default {
  title: "component/NButton",
  component: NButton,
};

const Template = () => <NButton size={"small"} color={"primary"} />;
const Template2 = () => (
  <NButton size={"large"} buttonText={"Click Me"} color={"secondary"} />
);
const Template3 = () => (
  <NButton size={"medium"} buttonText={"Click Me"} color={"secondary"} />
);

export const small = Template.bind({});
export const medium = Template3.bind({});
export const large = Template2.bind({});
