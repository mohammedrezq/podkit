import { RichText } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";

const Save = (props) => {
  const {
    attributes: { buttonText, hoverAnimation, buttonColor, hoverColor },
  } = props;

  return (
    <div className="button_container">
        <style
          dangerouslySetInnerHTML={{
            __html: [
              `
            .wpb_pulse:hover, .wpb_fade:hover {
                background-color: ${hoverColor} !important;
                }
                .wpb_sweep_right::before, .wpb_sweep_left::before {
                background: ${hoverColor} !important;
                }
           `,
            ].join("\n"),
          }}
        />
      <div
        className={`wpb_button ${hoverAnimation} wpb_button_container`}
        style={{
          backgroundColor: buttonColor,
        }}
      >

        <RichText.Content value={buttonText} />
      </div>
    </div>
  );
};

export default Save;
