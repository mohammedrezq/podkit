import times from 'lodash/times';

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
    attributes: { columnsNumber, teamMemberImage, teamMemberTitle, teamMemberPosition, teamMemberDescription },
    setAttributes,
  } = props;

  const onImageSelect = (imageObject) => {
    console.log(imageObject.sizes.large.url);
    setAttributes({ teamMemberImage: imageObject.sizes.large.url });
  };

  const onChangeTeamMemberTitle = (newValue) =>{
    setAttributes({teamMemberTitle: newValue})
  }
  
  const onChangeTeamMemberPosition = (newValue) =>{
    setAttributes({teamMemberPosition: newValue})
  }
  const onChangeTeamMemberDescription = (newValue) =>{
    setAttributes({teamMemberDescription: newValue})
  }

  // const renderTeamMemeber = (index) => {
  //   return (
      
  //   )
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
       {times (columnsNumber, n => 
            <MemebrCard
          key={n}
           className={`wpb_column_${n}`}
           imageClass={`wpb_column_image_${n}`}
           icon="no"
           size={30}
           alt="Cat Image"
           onSelect={onImageSelect}
           imageUrl={teamMemberImage}
           type="image"
           iconClassName={`team_memeber_thumbnail_image`}
           dashiconIconButton="format-image"
           toolTip={true}
           label={__("Change image.", "wpb")}
           tagNameTitle="h2"
           titlePlaceholder={"Name"}
           teamMemeberTitle={teamMemberTitle}
           onChangeTeamMemberTitle={onChangeTeamMemberTitle}
           tagNamePosition="p"
           positionPlaceholder={"Position"}
           teamMemberPosition={teamMemberPosition}
           onChangeTeamMemberPosition={onChangeTeamMemberPosition}
           tagNameDescription="div"
           descriptionPlaceholder={"Description Lorem Ipsum and other stuff"}
           teamMemeberDescription={teamMemberDescription}
           onChangeTeamMemberDescription={onChangeTeamMemberDescription}
           />
        )}
    </div>,
  ];
};

export default Edit;
