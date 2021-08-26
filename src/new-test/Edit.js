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
} from "@wordpress/components";
import { useState } from "@wordpress/element";

import {
  RichText,
  InspectorControls,
  ColorPalette,
  BlockControls,
  AlignmentToolbar,
  DimensionControl,
} from "@wordpress/block-editor";

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

  // console.log(props);

  // const columnsNumberHandler = (newCount) => {
  //   const newitems = props.attributes.testText;
  //   if (newitems.length < newcount) {
  //     const amount = Math.abs(newcount - newitems.length);
  //     {
  //       times(amount, (n) => {
  //         newitems.push({
  //           title: newitems[0].title,
  //         });
  //         setAttributes({ testText: newitems });
  //         saveTestText({ title: testText[0].title }, 0);
  //       });
  //       setAttributes({ columnsNumber: newCount });
  //     }
  //   }
  // };

  const saveTestText = (value, thisIndex) => {
    const newUpdate = testText.map((item, index) => {
      if (index === thisIndex) {
        item = { ...item, ...value };
      }
      return item;
    });
    setAttributes({
      testText: newUpdate,
    });
    console.log(testText);
  };

  // const testTextHandler = (newValue) => {
  //   saveTestText({ title: newValue } , index);
  // };
  // console.log(testText[index]);
  const renderPreviewContent = (index) => {
    console.log(testText[index]?.title);
    return (
      <div className={`item-test__wrapper item_test_${index}`} key={index}>
        <h1>Item Test Counter {`${index}`}</h1>
        <RichText
          key={index}
          value={testText[index]?.title}
          onChange={(newValue) => {
            saveTestText({ title: newValue }, index);
          }}
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
          if (newitems.length < newCount) {
            const amount = Math.abs(newCount - newitems.length);
            {
              times(amount, (n) => {
                newitems.push({
                  title: newitems[0].title,
                });
              });
            }
            setAttributes({ testText: newitems });
            saveTestText({ title: testText[0].title }, 0);
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
