import { __ } from "@wordpress/i18n";
import { registerBlockType } from "@wordpress/blocks";

import { ReactComponent as Logo } from "../bv-logo.svg";
import Edit from "./Edit";
import Save from "./Save";

const testblockAttributes = {
  paddingSize: {
    type: "string",
  },
};

const testblockSupports = {
  align: true,
};

registerBlockType("podkit/testblock", {
  title: "Test Blocks",
  icon: { src: Logo },
  category: "podkit",
  attributes: testblockAttributes,
  supports: testblockSupports,
  edit: Edit,
  save: Save,
});
