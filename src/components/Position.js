import { RichText } from "@wordpress/block-editor";

import { __ } from "@wordpress/i18n";

import { createBlock } from "@wordpress/blocks";

const Position = (propItems) => {
  const { attributes, setAttributes, props, index_value } = propItems;

  const test_arr = attributes.test_block[index_value];
  let position = "";
  if (test_arr && typeof test_arr !== "undefined") {
    position = test_arr["position"];
  }

  var data_copy = [...attributes.test_block];

  if (setAttributes !== "not_set") {
    return (
      <RichText
        tagName="div"
        value={position}
        placeholder={__("Position", "wpb")}
        className="uagb-tm__position"
        onChange={(value) => {
          var new_content = {
            description: data_copy[index_value]["description"],
            position: value,
            name: data_copy[index_value]["name"],
            company: data_copy[index_value]["company"],
            image: data_copy[index_value]["image"],
          };
          data_copy[index_value] = new_content;
          setAttributes({ test_block: data_copy });
        }}
        onMerge={props.mergeBlocks}
        onSplit={
          props.insertBlocksAfter
            ? (before, after, ...blocks) => {
                setAttributes({ content: before });
                props.insertBlocksAfter([
                  ...blocks,
                  createBlock("core/paragraph", { content: after }),
                ]);
              }
            : undefined
        }
        onRemove={() => props.onReplace([])}
      />
    );
  } else {
    return (
      <RichText.Content
        tagName="div"
        value={position}
        className="uagb-tm__position"
      />
    );
  }
};

export default Position;
