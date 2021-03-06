import { __ } from "@wordpress/i18n";
import {
  TextControl,
  PanelBody,
  SelectControl,
  Dropdown,
  Button,
  RangeControl,
  ButtonGroup,
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
import BoxShadow from "../components/BoxShadow";
import TextShadow from "../components/TextShadow";
import Border from "../components/Border";

const Edit = (props) => {
  const {
    attributes: {
      cardFront,
      cardBack,
      frontCardBackground,
      backCardBackground,
      cardAlignment,
      cardFontFamily,
      textSize,
      textWeight,
      textLineHeight,
      textStyle,
      textUpper,
      textLetter,
      textColor,
      boxShadowColor,
      boxShadowBlur,
      boxShadowHorizontal,
      boxShadowVertical,
      boxShadowPosition,
      textShadowColor,
      textShadowBlur,
      textShadowHorizontal,
      textShadowVertical,
      borderType,
      borderWidth,
      borderColor,
      borderRadius,
      flipDirection,
      flipBoxSpace,
    },
    setAttributes,
  } = props;

  const DIRECTIONS = [
    {
      value: "rotateX(-180deg)",
      label: "Vertical",
    },
    {
      value: "rotateY(-180deg)",
      label: "Horizontal",
    },
  ];

  const onChangeCardFront = (newCardFront) => {
    setAttributes({ cardFront: newCardFront });
  };
  const onChangeCardBack = (newCardBack) => {
    setAttributes({ cardBack: newCardBack });
  };

  const onChangeFrontBackground = (newfrontCardBackground) => {
    setAttributes({ frontCardBackground: newfrontCardBackground });
  };
  const onChangeBackBackground = (newbackCardBackground) => {
    setAttributes({ backCardBackground: newbackCardBackground });
  };

  const onChangeCardAlignment = (newCardAlignment) => {
    setAttributes({ cardAlignment: newCardAlignment });
  };

  const onChangeTextFamily = (newCardFontFamily) => {
    setAttributes({ cardFontFamily: newCardFontFamily });
    if (!cardFontFamily) {
      return;
    }

    addFontToHead(cardFontFamily);
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

  const onChangeTextColor = (newTextColor) => {
    setAttributes({ textColor: newTextColor });
  };

  const onChangeFlipDirection = (newDirection) => {
    setAttributes({ flipDirection: newDirection });
  };

  const styleHTML = `
  .card:hover > .card-body{
   transform: ${flipDirection} !important;
 }
 .card-back {
   transform: ${flipDirection} !important;
 }`;

  return [
    <InspectorControls key="inspector_control_section">
      <PanelBody title={__("Flip Card", "wpb")}>
        <div className="components-base-control">
          <div className="components-base-control__field">
            <div className="front_flip_card">
              <hr />
              <h3>Card Front</h3>
              <TextControl
                label={__("Card Front", "wpb")}
                className="components-base-control__label"
                value={cardFront}
                onChange={onChangeCardFront}
              />
              <p className="components-base-control__label">
                {__("Front Background color", "wpb")}
              </p>
              <ColorPalette
                value={frontCardBackground}
                onChange={onChangeFrontBackground}
              />
            </div>
            <div className="back_flip_card">
              <hr />
              <h3>Card Back</h3>
              <TextControl
                label={__("Card Back", "wpb")}
                className="components-base-control__label"
                value={cardBack}
                onChange={onChangeCardBack}
              />
              <p className="components-base-control__label">
                {__("Back Background color", "wpb")}
              </p>
              <ColorPalette
                value={backCardBackground}
                onChange={onChangeBackBackground}
              />
            </div>
          </div>
        </div>
      </PanelBody>
      <PanelBody title={__("Text Style", "wpb")}>
        <SelectControl
          label={__("Font Family", "wpb")}
          options={GoogleFontsNames}
          value={cardFontFamily}
          onChange={onChangeTextFamily}
        />
        <Typography
          components={["size", "weight", "line", "style", "upper", "spacing"]} //, 'spacing'
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
        <div className="wpb-toggle">
          <div className="wpb-toggle-title">
            <strong>{__("Color", "wpb")}</strong>
          </div>
          <Dropdown
            className="wpb_control_toggle_button"
            contentClassName="wp_control_toggle_content"
            position="bottom right"
            renderToggle={({ isOpen, onToggle }) => {
              return (
                <Button isSmall onClick={onToggle} aria-expanded={isOpen}>
                  <i className="dashicons dashicons-edit" />
                </Button>
              );
            }}
            renderContent={() => {
              return (
                <Fragment>
                  <p>{__("Text Color", "wpb")}</p>
                  <ColorPalette
                    value={textColor}
                    onChange={onChangeTextColor}
                    allowReset={true}
                  />
                </Fragment>
              );
            }}
          />
        </div>

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
      <PanelBody title={__("Box Style", "wpb")}>
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
        <BoxShadow
          label="Box Shadow"
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
        <strong>{__("Flip Direction", "wpb")}</strong>
        <SelectControl
          options={DIRECTIONS}
          value={flipDirection}
          onChange={onChangeFlipDirection}
        />
        <strong>{__("Flip Box Spacing", "wpb")}</strong>
        <RangeControl
          value={flipBoxSpace}
          min="0"
          max="300"
          onChange={(newValue) => {
            setAttributes({
              flipBoxSpace: newValue === undefined ? 0 : newValue,
            });
          }}
          allowReset="true"
        />
      </PanelBody>
    </InspectorControls>,
    <div className="cards" key="render_section">
      <style
        dangerouslySetInnerHTML={{
          __html: [styleHTML].join("\n"),
        }}
      />
      <BlockControls>
        <AlignmentToolbar
          value={cardAlignment}
          onChange={onChangeCardAlignment}
        />
      </BlockControls>
      <div className="card">
        <div
          className="card-body"
          style={{
            boxShadow: `${boxShadowHorizontal}px ${boxShadowVertical}px ${boxShadowBlur}px ${boxShadowColor} ${boxShadowPosition}`,
            borderRadius: borderRadius + "px",
            height: "max-content !important",
          }}
        >
          <div
            className="card-front"
            style={{
              display: "block",
              background: frontCardBackground,
              textAlign: `${cardAlignment}`,
              fontSize: `${textSize}px`,
              fontWeight: textWeight,
              fontStyle: textStyle,
              textTransform: textUpper ? "uppercase" : "none",
              letterSpacing: textLetter,
              color: textColor,
              boxShadow: `${boxShadowHorizontal}px ${boxShadowVertical}px ${boxShadowBlur}px ${boxShadowColor} ${boxShadowPosition}`,
              textShadow: `${textShadowHorizontal}px ${textShadowVertical}px ${textShadowColor}`,
              border: borderType,
              borderWidth: `${borderWidth}px`,
              borderRadius: `${borderRadius}px`,
              borderColor: borderColor,
              height: "max-content !important",
              padding: `${flipBoxSpace}px`,
            }}
          >
            <RichText
              placeholder={__("First Card", "wpb")}
              value={cardFront}
              onChange={onChangeCardFront}
              style={{
                fontFamily: cardFontFamily,
                height: "max-content !important",
              }}
            />
          </div>
          <div
            className="card-back"
            style={{
              display: "block",
              background: backCardBackground,
              textAlign: `${cardAlignment}`,
              fontSize: `${textSize}px`,
              fontWeight: textWeight,
              fontStyle: textStyle,
              textTransform: textUpper ? "uppercase" : "none",
              letterSpacing: textLetter,
              color: textColor,
              boxShadow: `${boxShadowHorizontal}px ${boxShadowVertical}px ${boxShadowBlur}px ${boxShadowColor} ${boxShadowPosition}`,
              textShadow: `${textShadowHorizontal}px ${textShadowVertical}px ${textShadowColor}`,
              border: borderType,
              borderWidth: `${borderWidth}px`,
              borderRadius: `${borderRadius}px`,
              borderColor: borderColor,
              padding: `${flipBoxSpace}px`,
            }}
          >
            <RichText
              placeholder={__("Card Back", "wpb")}
              value={cardBack}
              onChange={onChangeCardBack}
              style={{
                height: "max-content !important",
                fontFamily: `${cardFontFamily}`,
              }}
            />
          </div>
        </div>
      </div>
    </div>,
  ];
};

export default Edit;
