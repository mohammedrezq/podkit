import { __ } from "@wordpress/i18n";

import {
  Button,
  Dropdown,
  RangeControl,
  ColorPicker,
} from "@wordpress/components";
import { Fragment } from "@wordpress/element";

const TextShadow = (props) => {
  const {
    label,
    color,
    blur,
    horizontal,
    vertical,
    onChangeColor,
    onChangeBlur,
    onChangeHorizontal,
    onChangeVertical,
    onResetClick,
  } = props;

  return (
    <div class="wpb-toggle">
      <div className="wpb-toggle-title">
        <strong>{__(label || "Shadow", "wpb")}</strong>
      </div>
      <Dropdown
        className="wpb_control_toggle_button"
        contentClassName="wp_control_toggle_content"
        position="bottom right"
        renderToggle={({isOpen, onToggle}) => {
          return (
            <Button isSmall onClick={onToggle} aria-expanded={isOpen}>
              <i className="dashicons dashicons-edit" />
            </Button>
          );
        }}
        renderContent={() => {
          return (
            <Fragment>
              <p>{__("Shadow Color")}</p>
              <ColorPicker
                color={color}
                onChangeComplete={onChangeColor}
                disableAlpha
                onResetClick={onResetClick}
              />
              <Fragment>
                <RangeControl
                  label={__("Blur", "wpb")}
                  value={blur}
                  onChange={onChangeBlur}
                  onResetClick={onResetClick}
                />
                <RangeControl
                  label={__("Horizontal", "wpb")}
                  value={horizontal}
                  onChange={onChangeHorizontal}
                  onResetClick={onResetClick}
                />
                <RangeControl
                  label={__("Vertical", "wpb")}
                  value={vertical}
                  onChange={onChangeVertical}
                  onResetClick={onResetClick}
                />
              </Fragment>
            </Fragment>
          );
        }}
      />
    </div>
  );
};

export default TextShadow;
