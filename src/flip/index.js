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
    default: "Tahoma"
  },
  textSize: {
    type: "number",
    default: 16
  },
  textWeight: {
    type: "number",
    default: 400
  }
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
