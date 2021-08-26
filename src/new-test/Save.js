import { RichText } from "@wordpress/block-editor";
import { Fragment } from "@wordpress/element";
import { __ } from "@wordpress/i18n";
import times from "lodash/times";

const Save = (props) => {
  const {
    attributes: { columnsNumber, testText },
  } = props;

  const contentRenderColumns = (index) => {
    return (
      <div key={index} className={`item-test__wrapper item_test_${index}`}>
        <h1>Item Test Counter {`${index}`}</h1>
        <figure className="podkit-logo">
          {testText[index].imageUrl ? (
            <img src={testText[index]?.imageUrl?.sizes?.full?.url} alt="logo" />
          ) : (
            <img
              src="https://survey-project.lndo.site/wp-content/plugins/podkit/images/default-thumbnail.jpg"
              alt="logo"
            />
          )}
        </figure>
        <RichText.Content value={testText[index]?.title} tagName="h3" />
      </div>
    );
  };

  return (
    <Fragment>
      <h1>Hello Testing Block</h1>
      <div className="container__items">
        {times(columnsNumber, (n) => contentRenderColumns(n))}
      </div>
    </Fragment>
  );
};

export default Save;
