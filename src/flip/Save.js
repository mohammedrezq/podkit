import { RichText } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";

const Save = (props) => {
  const {
    attributes: {
      cardFront,
      cardBack,
      frontCardBackground,
      backCardBackground,
      cardAlignment,
      cardFontFamily,
      textSize,
      textWeight,
      textLineHeight,
      textStyle,
      textUpper,
      textLetter,
      textColor,
      boxShadowColor,
      boxShadowBlur,
      boxShadowHorizontal,
      boxShadowVertical,
      boxShadowPosition,
      textShadowColor,
      textShadowBlur,
      textShadowHorizontal,
      textShadowVertical,
      borderType,
      borderWidth,
      borderColor,
      borderRadius,
      flipDirection,
      flipBoxSpace,
    },
  } = props;
  return (
    <div class="cards">
      <style
        dangerouslySetInnerHTML={{
          __html: [
            `
            .card:hover > .card-body{
             transform: ${flipDirection} !important;
           }
           .card-back {
             transform: ${flipDirection} !important;
           }
           `,
          ].join("\n"),
        }}
      />
      <div class="card">
        <div
          class="card-body"
          style={{
            boxShadow: `${boxShadowHorizontal}px ${boxShadowVertical}px ${boxShadowBlur}px ${boxShadowColor} ${boxShadowPosition}`,
            borderRadius: borderRadius + "px",
          }}
        >
          <div
            class="card-front"
            style={{
              display: "block",
              fontFamily: cardFontFamily,
              background: frontCardBackground,
              textAlign: cardAlignment,
              fontSize: textSize + "px",
              fontWeight: textWeight,
              lineHeight: textLineHeight,
              fontStyle: textStyle,
              textTransform: textUpper ? "uppercase" : "none",
              letterSpacing: textLetter,
              color: textColor,
              boxShadow: `${boxShadowHorizontal}px ${boxShadowVertical}px ${boxShadowBlur}px ${boxShadowColor} ${boxShadowPosition}`,
              textShadow: `${textShadowHorizontal}px ${textShadowVertical}px ${textShadowBlur} ${textShadowColor}`,
              border: borderType,
              borderWidth: borderWidth + "px",
              borderRadius: borderRadius + "px",
              borderColor: borderColor,
              padding: `${flipBoxSpace}px`,
            }}
          >
            <RichText.Content
              value={cardFront}
              style={{
                background: backCardBackground,
              }}
            />
          </div>
          <div
            class="card-back"
            style={{
              display: "block",
              fontFamily: cardFontFamily,
              background: backCardBackground,
              textAlign: cardAlignment,
              fontSize: textSize + "px",
              fontWeight: textWeight,
              lineHeight: textLineHeight,
              fontStyle: textStyle,
              textTransform: textUpper ? "uppercase" : "none",
              letterSpacing: textLetter,
              color: textColor,
              boxShadow: `${boxShadowHorizontal}px ${boxShadowVertical}px ${boxShadowBlur}px ${boxShadowColor} ${boxShadowPosition}`,
              textShadow: `${textShadowHorizontal}px ${textShadowVertical}px ${textShadowBlur} ${textShadowColor}`,
              border: borderType,
              borderWidth: borderWidth + "px",
              borderRadius: borderRadius + "px",
              borderColor: borderColor,
              padding: `${flipBoxSpace}px`,
            }}
          >
            <RichText.Content value={cardBack} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Save;
