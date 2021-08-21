import { __ } from "@wordpress/i18n";
import {
  TextControl,
  PanelBody,
  SelectControl,
  Dropdown,
  Button,
  RangeControl,
  ColorPicker,
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
    attributes: { buttonText, hoverAnimation, buttonColor, hoverColor },
    setAttributes,
  } = props;

  const HOVERANIMATIONS = [
    {
      value: "",
      label: __("None"),
    },
    {
      value: "wpb_fade",
      label: __("Fade"),
    },
    {
      value: "wpb_pulse",
      label: __("Pulse"),
    },
    {
      value: "wpb_sweep_right",
      label: __("Sweep Right"),
    },
    {
      value: "wpb_sweep_left",
      label: __("Sweep Left"),
    },
  ];

  // Helper Functions

  // const onChangeHover = (newValue) => {
  //   setAttributes({ effect: newValue });
  //   switch (newValue) {
  //     case "slide":
  //       setAttributes({ effectDir: "top" });
  //       break;
  //     case "shutter":
  //       setAttributes({ effectDir: "shutouthor" });
  //       break;
  //     case "radial":
  //       setAttributes({ effectDir: "radialin" });
  //       break;
  //   }
  // };

  const onChangeHoverAnimation = (newValue) => {
    setAttributes({
      hoverAnimation: newValue,
    });
  };

  const onChangeHoverColor = (newValue) => {
    setAttributes({
      hoverColor: newValue.hex,
    });
  };
  const onChangeButtonColor = (newValue) => {
    setAttributes({
      buttonColor: newValue.hex,
    });
  };

  return [
    <InspectorControls>
      <PanelBody title={__("Button Settings", "wpb")}>
        <div className="components-base-control">
          <div className="components-base-control__field">
            <h3>Button Hover Styles</h3>
            <SelectControl
              options={HOVERANIMATIONS}
              label={__("Hover Effect", "wpb")}
              value={hoverAnimation}
              onChange={onChangeHoverAnimation}
            />
            <div>
              <strong>Button Color</strong>
              <ColorPicker
                color={buttonColor}
                onChangeComplete={onChangeButtonColor}
                disableAlpha
              />
            </div>
            <div>
              <strong>Hover Color</strong>
              <ColorPicker
                color={hoverColor}
                onChangeComplete={onChangeHoverColor}
                disableAlpha
              />
            </div>
          </div>
        </div>
      </PanelBody>
    </InspectorControls>,
    <div className="wpb_block_container">
      <style
        dangerouslySetInnerHTML={{
          __html: [
            `
.wpb_pulse:hover, .wpb_fade:hover {
 background-color: ${hoverColor} !important;
}
.wpb_sweep_right::before, .wpb_sweep_left::before {
 background: ${hoverColor} !important;
}
`,
          ].join("\n"),
        }}
      />
      <div
        className="wpb_button"
        style={{
          backgroundColor: buttonColor,
        }}
      >
        <RichText
          className={`wpb_button_container ${hoverAnimation}`}
          onChange={(newValue) => {
            setAttributes({ buttonText: newValue });
          }}
          value={buttonText}
        />
      </div>
    </div>,
  ];
};

export default Edit;
