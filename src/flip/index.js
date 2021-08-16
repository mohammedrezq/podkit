const { __ } = wp.i18n;
import { registerBlockType } from "@wordpress/blocks";
import { TextControl, PanelBody } from "@wordpress/components";
import {
  RichText,
  InspectorControls,
  ColorPalette,
} from "@wordpress/block-editor";
import { useState } from "@wordpress/element";

import { ReactComponent as Logo } from "../bv-logo.svg";

registerBlockType("podkit/flip", {
  title: __("Flip Box", "podkit"),
  icon: { src: Logo },
  category: "podkit",
  attributes: {
    cardFront: {
      type: "string",
      source: "html",
      selector: ".card-front",
    },
    cardBack: {
      type: "string",
      source: "html",
      selector: ".card-back",
    },
    frontCardBackground: {
      type: "string",
    },
    backCardBackground: {
      type: "string",
    },
  },
  supports: {
    align: true,
  },
  edit: (props) => {
    const {
      attributes: {
        cardFront,
        cardBack,
        frontCardBackground,
        backCardBackground,
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

    return [
      <InspectorControls>
        <PanelBody title={__("Flip Card", "podkit")}>
          <div className="components-base-control">
            <div className="components-base-control__field">
              <TextControl
                label={__("Card Front", "podkit")}
                className="components-base-control__label"
                value={cardFront}
                onChange={onChangeCardFront}
              />
              <TextControl
                label={__("Card Back", "podkit")}
                className="components-base-control__label"
                value={cardBack}
                onChange={onChangeCardBack}
              />
              <label className="components-base-control__label">
                {__("Front Card Background color", "podkit")}
              </label>
              <ColorPalette
                value={frontCardBackground}
                onChange={onChangeFrontBackground}
              />
              <label className="components-base-control__label">
                {__("Back Card Background color", "podkit")}
              </label>
              <ColorPalette
                value={backCardBackground}
                onChange={onChangeBackBackground}
              />
            </div>
          </div>
        </PanelBody>
      </InspectorControls>,
      <div class="cards">
        <a class="card" href="#">
          <div class="card-body">
            <h2 class="card-front" style={{ background: frontCardBackground }}>
              <RichText
                placeholder={__("First Card", "podkit")}
                value={cardFront}
                onChange={onChangeCardFront}
              />
            </h2>
            <p class="card-back"  style={{ background: backCardBackground }}>
              <RichText
                placeholder={__("Card Back", "podkit")}
                value={cardBack}
                onChange={onChangeCardBack}
              />
            </p>
          </div>
        </a>
      </div>,
    ];
  },
  save: (props) => {
    const {
      attributes: { cardFront, cardBack, frontCardBackground, backCardBackground },
    } = props;

    console.log(props);
    return (
      <div class="cards">
        <a class="card" href="#">
          <div class="card-body">
            <h2 class="card-front" style={{ background: frontCardBackground }}>
              <RichText.Content value={cardFront} />
            </h2>
            <p class="card-back" style={{ background: backCardBackground }}>
              <RichText.Content value={cardBack} />
            </p>
          </div>
        </a>
      </div>
    );
  },
});
