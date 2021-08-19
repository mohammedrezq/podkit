import { __ } from "@wordpress/i18n";

import {
  Button,
  Dropdown,
  RangeControl,
  ColorPicker,
  SelectControl,
} from "@wordpress/components";
import { Fragment } from "@wordpress/element";

const Border = (props) => {
  const {
    label,
    borderType,
    borderWidth,
    borderColor,
    borderRadius,
    onChangeBorderType = () => {},
    onChangeBorderWidth = () => {},
    onChangeBorderColor = () => {},
    onChangeBorderRadius = () => {},
  } = props;
  const BORDERS = [
    {
      value: "none",
      label: "None",
    },
    {
      value: "solid",
      label: "Solid",
    },
    {
      value: "double",
      label: "Double",
    },
    {
      value: "dotted",
      label: "Dotted",
    },
    {
      value: "dashed",
      label: "Dashed",
    },
    {
      value: "groove",
      label: "Groove",
    },
  ];
  return (
    <div class="wpb-toggle">
      <div className="wpb-toggle-title">
        <strong>{__(label || "Border", "wpb")}</strong>
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
              <SelectControl
                label={__("Border Type", "wpb")}
                options={BORDERS}
                value={borderType}
                onChange={onChangeBorderType}
              />
              {"none" != borderType && (
                <RangeControl
                  label={__("Border Width", "wpb")}
                  value={borderWidth}
                  min="0"
                  max="100"
                  onChange={onChangeBorderWidth}
                  allowReset="true"
                />
              )}
              {"none" != borderType && (
                <Fragment>
                  <p>{__("Border Color", "wpb")}</p>
                  <ColorPicker
                    color={borderColor}
                    onChangeComplete={onChangeBorderColor}
                    disableAlpha
                  />
                </Fragment>
              )}
              <RangeControl
                label={__("Border Radius", "wpb")}
                value={borderRadius}
                min="0"
                max="300"
                onChange={onChangeBorderRadius}
                allowReset="true"
              />
            </Fragment>
          );
        }}
      />
    </div>
  );
};

export default Border;
