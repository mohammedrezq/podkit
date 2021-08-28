import { __ } from "@wordpress/i18n";
import { registerBlockType } from "@wordpress/blocks";

import { ReactComponent as Logo } from "../bv-logo.svg";
import Edit from "./Edit";
import Save from "./Save";

const ITEM_COUNT = 3

const test_block = []

for (var i = 1; i <= ITEM_COUNT; i++) {
	var desc_text = "I have been working with these guys since years now! With lots of hard work and timely communication they made sure they delivered the best to me. Highly recommended!"
	var author_text    = "John Doe "
	var company_text    = "Company"+i
	test_block.push(
		{
			"description": desc_text,
			"name": author_text,
			"company": company_text,
			"image": "",
		}
	)
}


const testblockAttributes = {
  columnsNumber: {
    type: "number",
    default: ITEM_COUNT,
  },
  test_block: {
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
