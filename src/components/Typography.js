import { __ } from "@wordpress/i18n";
import {
  Button,
  Dropdown,
  RangeControl,
  SelectControl,
  ToggleControl,
} from "@wordpress/components";
import { Fragment } from "@wordpress/element";

const Typography = (props) => {
  const {
    components,
    size,
    weight,
    style,
    spacing,
    line,
    upper,
    onChangeSize = () => {},
    onChangeWeight = () => {},
    onChangeStyle = () => {},
    onChangeSpacing = () => {},
    onChangeLine = () => {},
    onChangeUpper = () => {},
    onResetClick = () => {},
  } = props;

  const STYLE = [
    {
      value: "normal",
      label: "Normal",
    },
    {
      value: "italic",
      label: "Italic",
    },
    {
      value: "oblique",
      label: "Oblique",
    },
  ];

  return (
    <div className="wpb-toggle">
      <div className="wpb-toggle-title">
        <strong>{__("Typography", "wpb")}</strong>
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
              {components.includes("size") && (
                <RangeControl
                  label={__("Font Size (PX)", "wpb")}
                  value={size}
                  min="10"
                  max="100"
                  onChange={onChangeSize}
                />
              )}
              {components.includes("weight") && (
                <RangeControl
                  label={__("Font Weight", "wpb")}
                  value={weight}
                  min="100"
                  max="900"
                  onChange={onChangeWeight}
                  onResetClick={onResetClick}
                  step="100"
                />
              )}
              {components.includes("style") && (
                <SelectControl
                  label={__("Style", "wpb")}
                  options={STYLE}
                  value={style}
                  onChange={onChangeStyle}
                  onResetClick={onResetClick}
                />
              )}
              {components.includes("upper") && (
                <ToggleControl
                  label={__("Uppercase", "wpb")}
                  checked={upper}
                  onChange={onChangeUpper}
                  onResetClick={onResetClick}
                />
              )}
              {components.includes("spacing") && (
                <RangeControl
                  label={__("Spacing", "wpb")}
                  value={spacing}
                  step="0.1"
                  min="0"
                  max="30"
                  onChange={onChangeSpacing}
                  onResetClick={onResetClick}
                />
              )}
              {components.includes("line") && (
                <RangeControl
                  min="0.1"
                  max="15"
                  label={__("Line Height", "wpb")}
                  value={line}
                  onChange={onChangeLine}
                  onResetClick={onResetClick}
                />
              )}
            </Fragment>
          );
        }}
      />
    </div>
  );
};

export default Typography;
