import { __ } from "@wordpress/i18n";
import { registerBlockType } from "@wordpress/blocks";

import { ReactComponent as Logo } from "../bv-logo.svg";
import Edit from "./Edit";
import Save from "./Save";

const buttonAttributes = {
  effect: {
    type: "string",
    default: "none",
  },
  effectDir: {
    type: "string",
    default: "top",
  },
  buttonText: {
    type: "string",
    default: "Button Text"
  }
};

const buttonSupports = {
  align: true,
};

registerBlockType("podkit/button", {
  title: "Button",
  icon: { src: Logo },
  category: "podkit",
  attributes: buttonAttributes,
  supports: buttonSupports,
  edit: Edit,
  save: Save,
});