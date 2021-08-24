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
  ResponsiveWrapper
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
  //   const [alignment, setAlignment] = useState("center center");

  const [clicked, setClicked] = useState({
    button1: true,
    button2: false,
    button3: false,
    button4: false,
  });

  const [isChecked, setChecked] = useState(false);

  //   const [fontSize, setFontSize] = useState();
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [fontSize, setFontSize] = useState(12);
  // const [clicked2, setClicked2] = useState(false);
  // const [clicked3, setClicked3] = useState(false);
  // const [clicked4, setClicked4] = useState(false);

  const buttonClickedHandler1 = (event) => {
    setClicked({
      button1: !clicked.button1,
    });
  };
  const buttonClickedHandler2 = (event) => {
    setClicked({
      button2: !clicked.button2,
    });
  };
  const buttonClickedHandler3 = (event) => {
    setClicked({
      button3: !clicked.button3,
    });
  };
  const buttonClickedHandler4 = (event) => {
    setClicked({
      button4: !clicked.button4,
    });
  };

  const {
    attributes: { paddingSize },
    setAttributes,
  } = props;

  const updateSpacing = (dimension, size, device = "") => {
    setAttributes({
      [`${dimension}${device}`]: size,
    });
  };

  const onSelect = (tabName) => {
    console.log("Selecting tab", tabName);
  };

  const options = [
    {
      value: "small",
      label: "Small",
    },
    {
      value: "normal",
      label: "Normal",
    },
    {
      value: "large",
      label: "Large",
    },
    {
      value: "huge",
      label: "Huge",
    },
  ];

  const fontSizes = [
    {
      name: __("Small"),
      slug: "small",
      size: 12,
    },
    {
      name: __("Big"),
      slug: "big",
      size: 26,
    },
  ];
  const fallbackFontSize = 16;
  return [
    <InspectorControls key="inspector_control_section">
      <h1>Team Memeber Settings</h1>
      <BoxControl
        values={{
          top: "50px",
          left: "10%",
          right: "10%",
          bottom: "50px",
        }}
        onChange={(nextValues) => console.log(nextValues)}
      />
      <CustomSelectControl
        label="Font Size"
        options={[
          {
            key: "small",
            name: "Small",
            style: { fontSize: "50%" },
          },
          {
            key: "normal",
            name: "Normal",
            style: { fontSize: "100%" },
          },
          {
            key: "large",
            name: "Large",
            style: { fontSize: "200%" },
          },
        ]}
        onChange={(e) => console.log(e)}
        value={[
          {
            key: "small",
            name: "Small",
            style: { fontSize: "75%" },
          },
          {
            key: "normal",
            name: "Normal",
            style: { fontSize: "100%" },
          },
          {
            key: "large",
            name: "Large",
            style: { fontSize: "125%" },
          },
        ].find((option) => option.key === "large")}
      />
      <GradientPicker
        value={"#f00"}
        onChange={() => true}
        gradients={[
          {
            name: "Vivid cyan blue to vivid purple",
            gradient:
              "linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)",
            slug: "vivid-cyan-blue-to-vivid-purple",
          },
          {
            name: "Light green cyan to vivid green cyan",
            gradient:
              "linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%)",
            slug: "light-green-cyan-to-vivid-green-cyan",
          },
          {
            name: "Luminous vivid amber to luminous vivid orange",
            gradient:
              "linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%)",
            slug: "luminous-vivid-amber-to-luminous-vivid-orange",
          },
          {
            name: "Luminous vivid orange to vivid red",
            gradient:
              "linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%)",
            slug: "luminous-vivid-orange-to-vivid-red",
          },
          {
            name: "Very light gray to cyan bluish gray",
            gradient:
              "linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%)",
            slug: "very-light-gray-to-cyan-bluish-gray",
          },
          {
            name: "Cool to warm spectrum",
            gradient:
              "linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%)",
            slug: "cool-to-warm-spectrum",
          },
        ]}
      />
      <TimePicker
        currentDate={new Date()}
        onChange={(date) => console.log(date)}
        // is12Hour
      />
      <FontSizePicker
        fontSizes={fontSizes}
        value={fontSize}
        fallbackFontSize={fallbackFontSize}
        onChange={(newFontSize) => {
          setFontSize(newFontSize);
        }}
      />
      <div>
        <Dashicon icon="admin-home" />
        <Dashicon icon="products" />
        <Dashicon icon="wordpress" />
        {/* <DimensionControl
          label={__("Padding")}
          icon={"desktop"}
          onChange={(e) => console.log(e)}
          value={18}
        /> */}
      </div>
      <CustomSelectControl
        label="testing custom select"
        options={options.map((option) => (
          <li>{option.label}</li>
        ))}
      />

      <CheckboxControl
        label="Is author"
        help="Is the user a author or not?"
        checked={isChecked}
        onChange={setChecked}
      />
      <ColorIndicator colorValue="#0073aa" />
      <Card>
        <CardBody size="extraSmall">
          <h3>Test Cards Components</h3>
        </CardBody>
        <CardFooter>
          <FlexBlock>Flex Block</FlexBlock>
          <FlexItem>
            <h3>Test Content Flex Item</h3>
          </FlexItem>
        </CardFooter>
        <CardDivider />

        <CardBody>
          <h3>Test Cards Components111</h3>
        </CardBody>
        <CardDivider />

        <CardBody>
          <CardMedia>
            <img src="https://wow.olympus.eu/webfile/img/1632/oly_testwow_stage.jpg?x=1024" />
          </CardMedia>
          <h3>Test Cards Components2222</h3>
        </CardBody>
      </Card>
      {/* <AlignmentMatrixControl value={alignment} onChange={setAlignment} /> */}
      <BaseControl id="textarea-1" label="Text" help="Enter some text">
        <textarea id="textarea-1" />
      </BaseControl>
      <TabPanel
        className="my-tab-panel"
        activeClass="active-tab"
        onSelect={onSelect}
        orientation="horizontal"
        initialTabName="tab2"
        tabs={[
          {
            name: "tab1",
            title: "tab1",
            className: "tab-one",
            children: (
              <PanelBody>
                <h1>Tab One Testing Tabs</h1>
                <ButtonGroup>
                  <Button
                    isSmall
                    className={clicked.button1 && "is-primary"}
                    onClick={buttonClickedHandler1}
                    variant="primary"
                  >
                    Button 1
                  </Button>
                  <Button
                    isSmall
                    className={clicked.button2 && "is-primary"}
                    onClick={buttonClickedHandler2}
                    variant="primary"
                  >
                    Button 2
                  </Button>
                  <Button
                    isSmall
                    className={clicked.button3 && "is-primary"}
                    onClick={buttonClickedHandler3}
                    variant="primary"
                  >
                    Button 3
                  </Button>
                  <Button
                    isSmall
                    className={clicked.button4 && "is-primary"}
                    onClick={buttonClickedHandler4}
                    variant="primary"
                  >
                    Button 4
                  </Button>
                </ButtonGroup>
              </PanelBody>
            ),
          },
          {
            name: "tab2",
            title: "tab2",
            className: "tab-two",
            children: (
              <PanelBody>
                <h1>Tab Two Testing Tabs dasdasdas</h1>
                <TextHighlight
                  text="Why do we like Gutenberg? Because Gutenberg is the best!"
                  highlight="Gutenberg"
                />
              </PanelBody>
            ),
          },
        ]}
      >
        {(tab) => <p>{tab.children}</p>}
      </TabPanel>
    </InspectorControls>,
    <div className="wpb_block_container" key="render_section">
      <h1>Team Memeber Block</h1>
    </div>,
  ];
};

export default Edit;
