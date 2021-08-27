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

const Edit = (props) => {
  const {
    attributes: { columnsNumber, testText },
    setAttributes,
  } = props;


  
  const saveTestText = ( value, thisIndex ) => {
    const newUpdate = testText.map( ( item, index ) => {
      if ( index === thisIndex ) {
        item = { ...item, ...value };
      }
      return item;
    } );
    setAttributes( {
      testText: newUpdate,
    } );
  };

  // const saveTestText = (value, thisIndex) => {
  //   const newUpdate = testText.map((item, index) => {
  //     if (index === thisIndex) {
  //       console.log(item);
  //       console.log(index);
  //       console.log(theIndex);
  //       item = { ...item, ...value };
  //     }
  //     return item;
  //   });
  //   setAttributes({
  //     testText: newUpdate,
  //   });
  // };

  console.log(props.attributes.testText);

  const renderPreviewContent = (index) => {
    return (
      <div
        className={`item-test__wrapper item_test_${index}`}
        key={Math.random() * 30051}
      >
        <h1>Item Test Counter {`${index}`}</h1>
        {testText[index] && (
          <img
            src={
              testText[index].imageUrl?.sizes?.full?.url
                ? testText[index].imageUrl?.sizes?.full?.url
                : "https://survey-project.lndo.site/wp-content/plugins/podkit/images/default-thumbnail.jpg"
            }
            alt="logo"
          />
        )}
        <MediaUpload
          key={Math.random() *66}
          className={`media-image__upload${index}`}
          onSelect={(media) => {
            saveTestText(
              {
                imageUrl: media,
              },
              index
            );
          }}
          type="image"
          value={testText[index]?.imageUrl?.sizes?.full?.url}
          render={({ open }) => (
            <Button
              style={{ backgroundColor: "#000", color: "#fff", width: "80px" }}
              className="kt-testimonial-image-placeholder"
              aria-label={__("Add Image", "kadence-blocks")}
              onClick={open}
            >
              Image Select
            </Button>
          )}
        />
        <RichText
          key={index}
          onChange={(newValue) => {
            saveTestText({ title: newValue }, index);
          }}
          value={testText[index].title}
          placeholder={__("Text Placeholder", "wpb")}
        />
      </div>
    );
  };

  return [
    <InspectorControls key="inspector_control_section">
      <h3>Testing Block Settings</h3>
      <RangeControl
        label={__("Columns Number", "wpb")}
        min="1"
        max="3"
        allowReset
        value={columnsNumber}
        onChange={(newCount) => {
          const newitems = props.attributes.testText;
          console.log(newitems);
          if (newitems.length < newCount) {
            const amount = Math.abs(newCount - newitems.length);
            console.log(amount)
            {
              times(amount, (n) => {
                newitems.push({
                  title: newitems[0].title,
                  imageUrl: newitems[0].imageUrl,
                });
              });
            }
            setAttributes({ testText: newitems });
            saveTestText(
              {
                title: testText[0].title,
              },
              0
            );
          }
          setAttributes({ columnsNumber: newCount });
        }}
      />
    </InspectorControls>,
    <div className="wpb_block_container" key="render_section">
      <h1>Testing Block Block</h1>
      <div className="container__items">
        {times(columnsNumber, (n) => renderPreviewContent(n))}
      </div>
    </div>,
  ];
};

export default Edit;
