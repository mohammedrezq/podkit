import { __ } from "@wordpress/i18n";
import { registerBlockType } from "@wordpress/blocks";

import { ReactComponent as Logo } from "../bv-logo.svg";
import Edit from "./Edit";
import Save from "./Save";
const ITEM_COUNT = 3
const test_block = [];
for (var i = 1; i <= ITEM_COUNT; i++) {
  const title_text = "Test Text For the Block";

  test_block.push({
    title: title_text,
    imageUrl:
      "https://survey-project.lndo.site/wp-content/plugins/podkit/images/default-thumbnail.jpg",
  });
}

const testblockAttributes = {
  columnsNumber: {
    type: "number",
    default: ITEM_COUNT,
  },
  testText: {
    type: "array",
    default: test_block,
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
