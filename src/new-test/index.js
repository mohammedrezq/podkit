import { __ } from "@wordpress/i18n";
import { registerBlockType } from "@wordpress/blocks";

import { ReactComponent as Logo } from "../bv-logo.svg";
import Edit from "./Edit";
import Save from "./Save";

const testblockAttributes = {
  columnsNumber: {
    type: "number",
    default: 1,
  },
  testText: {
    type: "array",
    default: [
      {
        title: "",
        imageUrl: "",
      },
    ],
  },
};

const testblockSupports = {
  align: true,
};

registerBlockType("podkit/newtest", {
  title: "New Test Block",
  icon: { src: Logo },
  category: "podkit",
  attributes: testblockAttributes,
  supports: testblockSupports,
  edit: Edit,
  save: Save,
});
