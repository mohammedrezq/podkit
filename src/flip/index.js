const { __ } = wp.i18n;
import { registerBlockType } from "@wordpress/blocks";

import "./Font";
import { ReactComponent as Logo } from "../bv-logo.svg";
import Edit from "./Edit";
import Save from "./Save";

const FlipBoxAttributes = {
  cardFront: {
    type: "string",
    source: "html",
    selector: ".card-front",
  },
  cardBack: {
    type: "string",
    source: "html",
    selector: ".card-back",
  },
  frontCardBackground: {
    type: "string",
    default: "#ffffff",
  },
  backCardBackground: {
    type: "string",
    default: "#ffffff",
  },
  cardAlignment: {
    type: "string",
    default: "center",
  },
  cardFontFamily: {
    type: "string",
    default: "Tahoma",
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
    default: "none",
  },
  textLetter: {
    type: "number",
    default: 1,
  },
  textColor: {
    type: "string",
    default: "#000000",
  },
  boxShadowColor: {
    type: "string",
  },
  boxShadowBlur: {
    type: "number",
    default: 0,
  },
  boxShadowHorizontal: {
    type: "number",
    default: 0,
  },
  boxShadowVertical: {
    type: "number",
    default: 0,
  },
  boxShadowPosition: {
    type: "string",
    default: "inset",
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
  borderType: {
    type: "string",
    default: "none"
  },
  borderWidth: {
    type: "number",
    default: 0
  },
  borderColor: {
    type: "string",
    default: "#000000"
  },
  borderRadius: {
    type: "number",
    default: 0
  },
};

const FlipBoxSupports = {
  align: true,
};

registerBlockType("podkit/flip", {
  title: __("Flip Box", "podkit"),
  icon: { src: Logo },
  category: "podkit",
  attributes: FlipBoxAttributes,
  supports: FlipBoxSupports,
  edit: Edit,
  save: Save,
});
