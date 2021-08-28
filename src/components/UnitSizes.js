import { Button, ButtonGroup } from "@wordpress/components";

const UnitSizes = (props) => {
  const { activeUnit, units, onChangeUnitSize = () => {} } = props;

  const unitSizes = ["px", "em", "%"];

  if (undefined !== units) {
    unitSizes = units;
  }

  return (
    <ButtonGroup>
      {unitSizes.map((unitSize, i) => {
        return (
          <Button
            key={i}
            isSmall
            className={`wpb_unit_size_control ${
              (unitSize === activeUnit && `unit_size_control_active_btn`)
            }`}
            onClick={() => onChangeUnitSize(unitSize)}
          >
            {unitSize}
          </Button>
        );
      })}
    </ButtonGroup>
  );
};

export default UnitSizes;
