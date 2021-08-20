import { __ } from "@wordpress/i18n";
import {
  TextControl,
  PanelBody,
  SelectControl,
  Dropdown,
  Button,
  RangeControl,
} from "@wordpress/components";

import {
  RichText,
  InspectorControls,
  ColorPalette,
  BlockControls,
  AlignmentToolbar,
} from "@wordpress/block-editor";

import { Fragment } from "@wordpress/element";

const Edit = (props) => {
  const {
    attributes: { effect, effectDir, buttonText },
    setAttributes,
  } = props;

  const SIZE = [
    {
      value: "sm",
      label: __("Small"),
    },
    {
      value: "md",
      label: __("Medium"),
    },
    {
      value: "lg",
      label: __("Large"),
    },
    {
      value: "block",
      label: __("Block"),
    },
  ];
  const DIRECTIONS = [
    {
      value: "top",
      label: __("Top to Bottom"),
    },
    {
      value: "bottom",
      label: __("Bottom to Top"),
    },
    {
      value: "left",
      label: __("Left to Right"),
    },
    {
      value: "right",
      label: __("Right to Left"),
    },
  ];
  const SHUTTER = [
    {
      value: "shutouthor",
      label: __("Shutter out Horizontal"),
    },
    {
      value: "shutoutver",
      label: __("Shutter out Vertical"),
    },
    {
      value: "scshutoutver",
      label: __("Scaled Shutter Vertical"),
    },
    {
      value: "scshutouthor",
      label: __("Scaled Shutter Horizontal"),
    },
    {
      value: "dshutinver",
      label: __("Tilted Left"),
    },
    {
      value: "dshutinhor",
      label: __("Tilted Right"),
    },
  ];
  const RADIAL = [
    {
      value: "radialin",
      label: __("Radial In"),
    },
    {
      value: "radialout",
      label: __("Radial Out"),
    },
    {
      value: "rectin",
      label: __("Rectangle In"),
    },
    {
      value: "rectout",
      label: __("Rectangle Out"),
    },
  ];
  const EFFECTS = [
    {
      value: "none",
      label: __("None"),
    },
    {
      value: "slide",
      label: __("Slide"),
    },
    {
      value: "shutter",
      label: __("Shutter"),
    },
    {
      value: "radial",
      label: __("Radial"),
    },
  ];

  // Helper Functions

  const onChangeHover = (newValue) => {
    setAttributes({ effect: newValue });
    switch (newValue) {
      case "slide":
        setAttributes({ effectDir: "top" });
        break;
      case "shutter":
        setAttributes({ effectDir: "shutouthor" });
        break;
      case "radial":
        setAttributes({ effectDir: "radialin" });
        break;
    }
  };

  return [
    <InspectorControls>
      <PanelBody title={__("Button Settings", "wpb")}>
        <div className="components-base-control">
          <div className="components-base-control__field">
            <h3>Button Hover Styles</h3>
            <SelectControl
              options={EFFECTS}
              label={__("Hover Effect", "wpb")}
              value={effect}
              onChange={onChangeHover}
            />
            {"slide" === effect && (
              <SelectControl
                options={DIRECTIONS}
                label={__("Direction")}
                value={effectDir}
                onChange={(newValue) => setAttributes({ effectDir: newValue })}
              />
            )}
            {"shutter" === effect && (
              <SelectControl
                options={SHUTTER}
                label={__("Shutter Direction")}
                value={effectDir}
                onChange={(newValue) => setAttributes({ effectDir: newValue })}
              />
            )}
            {"radial" === effect && (
              <SelectControl
                options={RADIAL}
                label={__("Style")}
                value={effectDir}
                onChange={(newValue) => setAttributes({ effectDir: newValue })}
              />
            )}
          </div>
        </div>
      </PanelBody>
    </InspectorControls>,
    <div className="wpb_button">
      <RichText className={`wpb_button`} value={buttonText} />
    </div>,
  ];
};

export default Edit;
