import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import Input from "../components/input";

export default {
  title: "Components/Input",
  //decorators: [withKnobs],
  component: Input,
};

export const ButtonDefult = () => (
  <Input
    placeholder={text("placeholder", "Enter text here")} // add this line
    disabled={boolean("disable", false)} // add this line
  />
);
