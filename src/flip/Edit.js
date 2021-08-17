const { __ } = wp.i18n;
import { TextControl, PanelBody, SelectControl } from "@wordpress/components";
import {
  RichText,
  InspectorControls,
  ColorPalette,
  BlockControls,
  AlignmentToolbar,
} from "@wordpress/block-editor";
import GoogleFontsNames from "../components/googleFontsNames";
import addFontToHead from "../components/googleFonts";
import Typography from "../components/Typography";

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
    },
    setAttributes,
  } = props;

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

  return [
    <InspectorControls>
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
          components={["size", "weight"]} //, 'weight', 'line', 'style', 'upper', 'spacing'
          size={textSize}
          weight={textWeight}
          onChangeSize={(newTextSize) => {
            setAttributes({ textSize: newTextSize });
          }}
          onChangeWeight={(newTextWeight) => {
            setAttributes({ textWeight: newTextWeight });
          }}
        />
      </PanelBody>
    </InspectorControls>,
    <div class="cards">
      <BlockControls>
        <AlignmentToolbar
          value={cardAlignment}
          onChange={onChangeCardAlignment}
        />
      </BlockControls>
      <div class="card">
        <div class="card-body">
          <div
            class="card-front"
            style={{
              display: "block",

              background: frontCardBackground,
              textAlign: cardAlignment,
              fontSize: textSize + "px",
              fontWeight: textWeight,
            }}
          >
            <RichText
              placeholder={__("First Card", "wpb")}
              value={cardFront}
              onChange={onChangeCardFront}
              style={{
                fontFamily: cardFontFamily,
              }}
            />
          </div>
          <div
            class="card-back"
            style={{
              display: "block",
              background: backCardBackground,
              textAlign: `${cardAlignment}`,
              fontSize: textSize + "px",
              fontWeight: textWeight,
            }}
          >
            <RichText
              placeholder={__("Card Back", "wpb")}
              value={cardBack}
              onChange={onChangeCardBack}
              style={{
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
