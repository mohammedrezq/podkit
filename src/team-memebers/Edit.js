import { __ } from "@wordpress/i18n";
import {
  TextControl,
  PanelBody,
  SelectControl,
  Dropdown,
  Button,
  RangeControl,
  ColorPicker,
  //   TabPanel,
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
  Icon,
} from "@wordpress/components";

import TabPanel from "./TabPanel";

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
import MemebrCard from "./MemebrCard";

const Edit = (props) => {
  const {
    attributes: { columnsNumber },
    setAttributes,
  } = props;

  console.log(columnsNumber);
  console.log(typeof(columnsNumber));

  // const generateElem = () => {
  //   for(var i = 0; i< columnsNumber; i++) {
  //     <MemebrCard className="Hello_CLASS" />
  //   }
  // }
  
  return [
    <InspectorControls key="inspector_control_section">
      <TabPanel
        className="wpb_tabs_panel"
        // onSelect={onSelect}
        orientation="horizontal"
        activeClass="is_active"
        initialTabName="tab1"
        tabs={[
          {
            name: "tab1",
            icon: (
              <div className="icon_layout">
                <Dashicon icon="admin-settings" size={20} />
              </div>
            ),
            title: "Layout",
            className: "tab-one",
            children: (
              <div>
                <PanelBody>
                  <h1>Tab One Testing Tabs</h1> <Icon icon="smiley" size={60} />
                </PanelBody>
                <PanelBody
                  title={__("First Heading Style")}
                  className="premium-panel-body"
                  initialOpen={false}
                >
                  <h1>Testing</h1>
                </PanelBody>
              </div>
            ),
          },
          {
            name: "tab2",
            icon: (
              <div className="icon_style">
                <Dashicon icon="admin-appearance" size={20} />
              </div>
            ),
            title: "Style",
            className: "tab-two",
            children: (
              <PanelBody
                title={__("General")}
                className={`wpb_panel_body`}
                initialOpen={false}
              >
                <RangeControl
                  label={__("Columns")}
                  min="1"
                  max="3"
                  step="1"
                  value={columnsNumber}
                  onChange={(newValue) => {
                    setAttributes({
                      columnsNumber: newValue === undefined ? 2 : newValue,
                    });
                  }}
                />
              </PanelBody>
            ),
          },
          {
            name: "tab3",
            icon: (
              <div className="icon_advanced">
                <Dashicon icon="admin-tools" size={20} />
              </div>
            ),
            title: "Advanced",
            className: "tab-three",
            children: (
              <PanelBody>
                <h1>Tab three Testing Tabs dasdasdas</h1>
                <TextHighlight
                  text="Why do we like Gutenberg? Because Gutenberg is the best!"
                  highlight="Gutenberg"
                />
              </PanelBody>
            ),
          },
        ]}
      >
        {(tab) => <div>{tab.children}</div>}
      </TabPanel>
    </InspectorControls>,
    <div className="wpb_block_container" key="render_section">
      {columnsNumber}
       {[...Array(columnsNumber)].map((column, index) => {
         return <MemebrCard
          key={index}
           className={`test_hello${index+1}`}
           imageClass="test_image"
           icon="no"
           size={30}
           imageUrl="https://survey-project.lndo.site/wp-content/uploads/2021/08/cat.jpg"
           alt="Cat Image"
           tagNameTitle="h2"
           titlePlaceholder="PlaceHolder Test"
           teamMemeberTitle="Text Test mdfksamfkdasm"
           onChangeTeamMemeberTitle="Team Member Title Test"
           />
       })}
      {/* {columnsNumber.map((column, index) => {
        return <h1 key={index}>Hello: {column}</h1>;
      })} */}
      <h1>
        Edit Test asmdmnasnn
        <Dashicon icon="wordpress-alt" />
      </h1>
    </div>,
  ];
};

export default Edit;
