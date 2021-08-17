import { RichText } from "@wordpress/block-editor";

const Save = (props) => {
  const {
    attributes: {
      cardFront,
      cardBack,
      frontCardBackground,
      backCardBackground,
      cardAlignment,
      cardFontFamily,
    },
  } = props;
  return (
    <div class="cards">
      <div class="card">
        <div class="card-body">
          <div
            class="card-front"
            style={{
              display: "block",
              fontFamily: cardFontFamily,
              background: frontCardBackground,
              textAlign: cardAlignment,
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
