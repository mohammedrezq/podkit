import { RichText } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";

const Save = (props) => {
  const {
    attributes: { buttonText },
  } = props;
  return (
    <div className="wpb_button wpb_sweep_right wpb_button_container">
      <RichText.Content value={buttonText} />
    </div>
  );
};

export default Save;
