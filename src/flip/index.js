const { __ } = wp.i18n;
import { registerBlockType } from "@wordpress/blocks";
import { TextControl, PanelBody } from "@wordpress/components";
import {
  RichText,
  InspectorControls,
  ColorPalette,
  BlockControls,
  AlignmentToolbar,
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
    cardAlignment: {
      type: "string",
      default: "center",
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
        cardAlignment,
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
              }}
            >
              <RichText
                placeholder={__("First Card", "podkit")}
                value={cardFront}
                onChange={onChangeCardFront}
              />
            </div>
            <div
              class="card-back"
              style={{
                display: "block",
                background: backCardBackground,
                textAlign: cardAlignment,
              }}
            >
              <RichText
                placeholder={__("Card Back", "podkit")}
                value={cardBack}
                onChange={onChangeCardBack}
              />
            </div>
          </div>
        </div>
      </div>,
    ];
  },
  save: (props) => {
    const {
      attributes: {
        cardFront,
        cardBack,
        frontCardBackground,
        backCardBackground,
        cardAlignment,
      },
    } = props;
    return (
      <div class="cards">
        <div class="card">
          <div class="card-body">
            <div
              class="card-front"
              style={{
                display: "block",
                background: frontCardBackground,
                textAlign: cardAlignment,
              }}
            >
              <RichText.Content
                value={cardFront}
                style={{ background: backCardBackground }}
              />
            </div>
            <div
              class="card-back"
              style={{
                display: "block",
                background: backCardBackground,
                textAlign: cardAlignment,
              }}
            >
              <RichText.Content value={cardBack} />
            </div>
          </div>
        </div>
      </div>
    );
  },
});
