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
    default: "Button Text",
  },
  hoverAnimation: {
    type: "string",
    default: "",
  },
  hoverColor: {
    type: "string",
    default: "#2098d1",
  },
  buttonColor: {
    type: "string",
    default: "#000000",
  },
  btnFontFamily: {
    type: "string",
    default: "Arial",
  },
  btnTextColorHover: {
    type: "string",
    default: "#CCCCCC",
  },
  textSize: {
    type: "number",
    default: 16,
  },
  textWeight: {
    type: "number",
    default: 400,
  },
  textLineHeight: {
    type: "number",
    default: 1.2,
  },
  textStyle: {
    type: "string",
    default: "normal",
  },
  textUpper: {
    type: "string",
  },
  textLetter: {
    type: "number",
    default: 1,
  },
  textShadowColor: {
    type: "string",
  },
  textShadowBlur: {
    type: "number",
    default: 0,
  },
  textShadowHorizontal: {
    type: "number",
    default: 0,
  },
  textShadowVertical: {
    type: "number",
    default: 0,
  },
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
