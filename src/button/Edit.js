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
import Typography from "../components/Typography";
import TextShadow from "../components/TextShadow";
import Border from "../components/Border";
import BoxShadow from "../components/BoxShadow";

const Edit = (props) => {
  const {
    attributes: {
      buttonText,
      hoverAnimation,
      buttonColor,
      hoverColor,
      btnFontFamily,
      btnTextColorHover,
      textSize,
      textWeight,
      textLineHeight,
      textStyle,
      textUpper,
      textLetter,
      textShadowColor,
      textShadowBlur,
      textShadowHorizontal,
      textShadowVertical,
      borderType,
      borderWidth,
      borderColor,
      borderRadius,
      borderColorHover,
      boxShadowColor,
      boxShadowBlur,
      boxShadowHorizontal,
      boxShadowVertical,
      boxShadowPosition,
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

  const onChangeButtonTextColorHover = (newValue) => {
    setAttributes({ btnTextColorHover: newValue });
  };

  const textWeightfn = (newTextWeight) => {
    setAttributes({ textWeight: newTextWeight });
  };

  const lineHeight = (newTextLineHeight) => {
    setAttributes({ textLineHeight: newTextLineHeight });
  };

  const textStylefn = (newTextStyle) => {
    setAttributes({ textStyle: newTextStyle });
  };

  const textUpperfn = (check) => setAttributes({ textUpper: check });

  const textLetterfn = (newTextLetter) => {
    setAttributes({ textLetter: newTextLetter });
  };

  const onChangeBorderColorHover = (newValue) => {
    setAttributes({ borderColorHover: newValue });
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
      <PanelBody title={__("Button Text Styling")}>
        <div className="components-base-control">
          <div className="components-base-control__field">
            <SelectControl
              label={__("Font Family", "wpb")}
              options={GoogleFontsNames}
              value={btnFontFamily}
              onChange={onChangeTextFamily}
            />
            <Fragment>
              <strong>Text Color on Hover</strong>
              <ColorPalette
                color={btnTextColorHover}
                onChange={onChangeButtonTextColorHover}
                disableAlpha
              />
            </Fragment>
          </div>
        </div>
        <Typography
          components={["size", "weight", "line", "style", "upper", "spacing"]}
          size={textSize}
          weight={textWeight}
          line={textLineHeight}
          style={textStyle}
          upper={textUpper}
          spacing={textLetter}
          onChangeSize={(newTextSize) =>
            setAttributes({ textSize: newTextSize })
          }
          onChangeWeight={textWeightfn}
          onChangeLine={lineHeight}
          onChangeStyle={textStylefn}
          onChangeUpper={textUpperfn}
          onChangeSpacing={textLetterfn}
        />
        <TextShadow
          label="Text Shadow"
          color={textShadowColor}
          // blur={textShadowBlur}
          horizontal={textShadowHorizontal}
          vertical={textShadowVertical}
          onChangeColor={(newValue) => {
            setAttributes({ textShadowColor: newValue.hex });
          }}
          onChangeBlur={(newValue) => {
            setAttributes({ textShadowBlur: newValue });
          }}
          onChangeHorizontal={(newValue) => {
            setAttributes({ textShadowHorizontal: newValue });
          }}
          onChangeVertical={(newValue) => {
            setAttributes({ textShadowVertical: newValue });
          }}
        />
      </PanelBody>
      <PanelBody title={__("Button Styling")}>
        <div className="components-base-control">
          <div className="components-base-control__field">
            <Border
              borderType={borderType}
              borderWidth={borderWidth}
              borderColor={borderColor}
              borderRadius={borderRadius}
              onChangeBorderType={(newValue) => {
                setAttributes({ borderType: newValue });
              }}
              onChangeBorderWidth={(newValue) => {
                setAttributes({ borderWidth: newValue });
              }}
              onChangeBorderColor={(newValue) => {
                setAttributes({ borderColor: newValue.hex });
              }}
              onChangeBorderRadius={(newValue) => {
                setAttributes({ borderRadius: newValue });
              }}
            />
            <Fragment>
              <strong>{__("Button Border Hover Color")}</strong>
              <ColorPalette
                color={borderColorHover}
                onChange={onChangeBorderColorHover}
                clearable
              />
            </Fragment>
            <BoxShadow
              label="Button Shadow"
              inner={true}
              color={boxShadowColor}
              blur={boxShadowBlur}
              horizontal={boxShadowHorizontal}
              vertical={boxShadowVertical}
              position={boxShadowPosition}
              onChangeColor={(newValue) => {
                setAttributes({
                  boxShadowColor:
                    newValue === undefined ? "transparent" : newValue.hex,
                });
              }}
              onChangeBlur={(newValue) => {
                setAttributes({
                  boxShadowBlur: newValue === undefined ? 0 : newValue,
                });
              }}
              onChangeHorizontal={(newValue) => {
                setAttributes({
                  boxShadowHorizontal: newValue === undefined ? 0 : newValue,
                });
              }}
              onChangeVertical={(newValue) => {
                setAttributes({
                  boxShadowVertical: newValue === undefined ? 0 : newValue,
                });
              }}
              onChangePosition={(newValue) => {
                setAttributes({
                  boxShadowPosition: newValue,
                });
              }}
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
            .wpb_button_container.rich-text:hover {
                color: ${btnTextColorHover} !important;
            }
            .wpb_button_container.rich-text > span:hover {
                color: ${btnTextColorHover} !important;
            }
            .wpb_button:hover {
                border-color: ${borderColorHover} !important;
            }
            `,
          ].join("\n"),
        }}
      />
      <div
        className={`wpb_button ${hoverAnimation}`}
        style={{
          backgroundColor: buttonColor,
          border: borderType,
          borderWidth: `${borderWidth}px`,
          borderRadius: `${borderRadius}px`,
          borderColor: borderColor,
          boxShadow: `${boxShadowHorizontal}px ${boxShadowVertical}px ${boxShadowBlur}px ${boxShadowColor} ${boxShadowPosition}`,
        }}
      >
        <RichText
          className={`wpb_button_container ${hoverAnimation}`}
          style={{
            fontFamily: btnFontFamily,
            fontSize: `${textSize}px`,
            fontWeight: textWeight,
            fontStyle: textStyle,
            textTransform: textUpper ? "uppercase" : "none",
            letterSpacing: textLetter,
            lineHeight: textLineHeight,
            textShadow: `${textShadowHorizontal}px ${textShadowVertical}px ${textShadowColor}`,
            boxShadow: `${boxShadowHorizontal}px ${boxShadowVertical}px ${boxShadowBlur}px ${boxShadowColor} ${boxShadowPosition}`,
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
