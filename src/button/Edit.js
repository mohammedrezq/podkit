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
import GoogleFontsNames from "../components/googleFontsNames";
import addFontToHead from "../components/googleFonts";

const Edit = (props) => {
  const {
    attributes: {
      buttonText,
      hoverAnimation,
      buttonColor,
      hoverColor,
      btnFontFamily,
    },
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

  const onChangeHoverAnimation = (newValue) => {
    setAttributes({
      hoverAnimation: newValue,
    });
  };

  const onChangeHoverColor = (newValue) => {
    setAttributes({
      hoverColor: newValue,
    });
  };
  const onChangeButtonColor = (newValue) => {
    setAttributes({
      buttonColor: newValue,
    });
  };

  const onChangeTextFamily = (newValue) => {
    setAttributes({ btnFontFamily: newValue });
    if (!btnFontFamily) {
      return;
    }
    addFontToHead(btnFontFamily);
  };

  return [
    <InspectorControls>
      <PanelBody title={__("Button Settings", "wpb")}>
        <div className="components-base-control">
          <div className="components-base-control__field">
            <div>
              <strong>Button Color</strong>
              <ColorPalette
                color={buttonColor}
                onChange={onChangeButtonColor}
                clearable
              />
            </div>
            <hr />
            <strong>Button Hover Styles</strong>
            <SelectControl
              options={HOVERANIMATIONS}
              label={__("Hover Effect", "wpb")}
              value={hoverAnimation}
              onChange={onChangeHoverAnimation}
            />
            <div>
              <strong>Hover Color</strong>
              <ColorPalette
                color={hoverColor}
                onChange={onChangeHoverColor}
                clearable
              />
            </div>
          </div>
        </div>
      </PanelBody>
      <PanelBody title={__("Button Text")}>
        <div className="components-base-control">
          <div className="components-base-control__field">
            <SelectControl
              label={__("Font Family", "wpb")}
              options={GoogleFontsNames}
              value={btnFontFamily}
              onChange={onChangeTextFamily}
            />
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
          style={{
            fontFamily: btnFontFamily,
          }}
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
