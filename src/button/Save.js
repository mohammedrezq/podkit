import { RichText } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";

const Save = (props) => {
  const {
    attributes: {
      buttonText,
      hoverAnimation,
      buttonColor,
      hoverColor,
      btnFontFamily,
      btnTextColorHover,
      textSize,
      textWeight,
      textLineHeight,
      textStyle,
      textUpper,
      textLetter,
      textShadowColor,
      textShadowBlur,
      textShadowHorizontal,
      textShadowVertical,
      borderType,
      borderWidth,
      borderColor,
      borderRadius,
      borderColorHover,
      boxShadowColor,
      boxShadowBlur,
      boxShadowHorizontal,
      boxShadowVertical,
      boxShadowPosition,
      buttonSpace,
      paddingTop,
      paddingRight,
      paddingBottom,
      paddingLeft,
      paddingUnit,
    },
  } = props;

  return (
    <div className={`button_container`}>
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
            .wpb_button_container:hover {
                  color: ${btnTextColorHover} !important;
                }
            .wpb_button_container > span:hover {
                  color: ${btnTextColorHover} !important;
                }
            .wpb_button:hover {
                  border-color: ${borderColorHover} !important;
                }
           `,
          ].join("\n"),
        }}
      />
      <div
        className={`wpb_button ${hoverAnimation} wpb_button_container`}
        style={{
          backgroundColor: buttonColor,
          fontFamily: btnFontFamily,
          fontSize: `${textSize}px`,
          fontWeight: textWeight,
          fontStyle: textStyle,
          textTransform: textUpper ? "uppercase" : "none",
          letterSpacing: textLetter,
          lineHeight: textLineHeight,
          textShadow: `${textShadowHorizontal}px ${textShadowVertical}px ${textShadowColor}`,
          border: borderType,
          borderWidth: `${borderWidth}px`,
          borderRadius: `${borderRadius}px`,
          borderColor: borderColor,
          boxShadow: `${boxShadowHorizontal}px ${boxShadowVertical}px ${boxShadowBlur}px ${boxShadowColor} ${boxShadowPosition}`,
          // padding: `${buttonSpace}px`,
          paddingTop: paddingTop + paddingUnit,
          paddingBottom: paddingBottom + paddingUnit,
          paddingLeft: paddingLeft + paddingUnit,
          paddingRight: paddingRight + paddingUnit
        }}
      >
        <RichText.Content value={buttonText} />
      </div>
    </div>
  );
};

export default Save;
