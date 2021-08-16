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
              background: frontCardBackground,
              textAlign: cardAlignment,
            }}
          >
            <RichText.Content
              className={`premium-button`}
              value={cardFront}
              style={{
                background: backCardBackground,
                fontFamily: cardFontFamily,
              }}
            />
          </div>
          <div
            class="card-back"
            style={{
              display: "block",
              background: backCardBackground,
              textAlign: cardAlignment,
            }}
          >
            <RichText.Content
              className={`premium-button`}
              value={cardBack}
              style={{
                fontFamily: cardFontFamily,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Save;
