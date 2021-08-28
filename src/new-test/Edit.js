import times from "lodash/times";
import { __ } from "@wordpress/i18n";
import {
  TextControl,
  PanelBody,
  SelectControl,
  Dropdown,
  Button,
  RangeControl,
  ColorPicker,
  TabPanel,
  TextHighlight,
  AlignmentMatrixControl,
  AnglePickerControl,
  ButtonGroup,
  BaseControl,
  Card,
  CardBody,
  CardDivider,
  CardFooter,
  FlexItem,
  FlexBlock,
  CardMedia,
  CheckboxControl,
  ColorIndicator,
  ComboboxControl,
  CustomSelectControl,
  Dashicon,
  FontSizePicker,
  TimePicker,
  __experimentalGradientPicker as GradientPicker,
  __experimentalBoxControl as BoxControl,
  ResponsiveWrapper,
  IconButton,
} from "@wordpress/components";
import { useState, useCallback } from "@wordpress/element";

import {
  RichText,
  InspectorControls,
  ColorPalette,
  BlockControls,
  AlignmentToolbar,
  MediaUpload,
  DimensionControl,
} from "@wordpress/block-editor";

import DefaultImage from "../../images/default-thumbnail.jpg";

import { Fragment } from "@wordpress/element";
import GoogleFontsNames from "../components/googleFontsNames";
import addFontToHead from "../components/googleFonts";
import Typography from "../components/Typography";
import TextShadow from "../components/TextShadow";
import Border from "../components/Border";
import BoxShadow from "../components/BoxShadow";
import Padding from "../components/Padding";
import Description from "../components/Description";
import Position from "../components/Position";

const Edit = (props) => {
  const {
    attributes: { columnsNumber, test_block },
    setAttributes,
  } = props;

  const saveTestText = (value, thisIndex) => {
    const newUpdate = test_block.map((item, index) => {
      if (index === thisIndex) {
        item = { ...item, ...value };
      }
      return item;
    });
    setAttributes({
      test_block: newUpdate,
    });
  };

  return [
    <InspectorControls key="inspector_control_section">
      <h3>Testing Block Settings</h3>
      <RangeControl
        label={__("Number of Testimonials", "ultimate-addons-for-gutenberg")}
        value={columnsNumber}
        onChange={(newCount) => {
          let cloneTest_block = [...test_block];
          if (cloneTest_block.length < newCount) {
            const incAmount = Math.abs(newCount - cloneTest_block.length);

            {
              times(incAmount, (n) => {
                cloneTest_block.push({
                  description:
                    "I have been working with these guys since years now! With lots of hard work and timely communication they made sure they delivered the best to me. Highly recommended!",
                  name: "John Doe",
                  company: "Company" + (cloneTest_block.length + 1),
                  image: "",
                });
              });
            }
            setAttributes({ test_block: cloneTest_block });
          } else {
            const incAmount = Math.abs(newCount - cloneTest_block.length);
            let data_new = cloneTest_block;
            for (var i = 0; i < incAmount; i++) {
              data_new.pop();
            }
            setAttributes({ test_block: data_new });
          }
          setAttributes({ columnsNumber: newCount });
        }}
        min={0}
        max={50}
        allowReset
      />
      {/* <RangeControl
        label={__("Columns Number", "wpb")}
        min="1"
        max="3"
        allowReset
        value={columnsNumber}
        onChange={(newCount) => {
          const newitems = props.attributes.testText;
          if (newitems.length < newCount) {
            const amount = Math.abs(newCount - newitems.length);
            {
              times(amount, (n) => {
                newitems.push({
                  title: newitems.title,
                });
              });
            }
            setAttributes({ testText: newitems });
          }
          setAttributes({ columnsNumber: newCount });
        }}
      /> */}
    </InspectorControls>,
    <div className="wpb_block_container" key="render_section">
      <h1>Testing Block Block</h1>
      <div className="container__items">
        {test_block.map((test, index) => (
          <Fragment>
            <h1>Section {index}</h1>
            {test_block[index] && (
              <img
                src={
                  test_block[index].image?.sizes?.full?.url
                    ? test_block[index].image?.sizes?.full?.url
                    : "https://survey-project.lndo.site/wp-content/plugins/podkit/images/default-thumbnail.jpg"
                }
                alt="logo"
              />
            )}
            <MediaUpload
              className={`media-image__upload${index}`}
              onSelect={(media) => {
                saveTestText(
                  {
                    image: media,
                  },
                  index
                );
              }}
              value={test_block[index]?.image?.sizes?.full?.url}
              type="image"
              render={({ open }) => (
                <Button
                  style={{
                    backgroundColor: "#000",
                    color: "#fff",
                    width: "80px",
                  }}
                  className="kt-testimonial-image-placeholder"
                  aria-label={__("Add Image", "kadence-blocks")}
                  onClick={open}
                >
                  Image Select
                </Button>
              )}
            />
            <div
              className="uagb-testinomial-text-wrap"
              key={"text-wrap-" + index}
            >
              <Description
                attributes={props.attributes}
                setAttributes={setAttributes}
                props={props}
                index_value={index}
              />
              <Position
                attributes={props.attributes}
                setAttributes={setAttributes}
                props={props}
                index_value={index}
              />
            </div>
          </Fragment>
        ))}
      </div>
    </div>,
  ];
};

export default Edit;
