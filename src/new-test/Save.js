import { RichText } from "@wordpress/block-editor";
import { Fragment } from "@wordpress/element";
import { __ } from "@wordpress/i18n";
import times from "lodash/times";

import Description from "../components/Description";

const Save = (props) => {
  const {
    attributes: { columnsNumber, test_block },
  } = props;

  // const contentRenderColumns = (index) => {
  //   return (
  //     <div key={index} className={`item-test__wrapper item_test_${index}`}>
  //       <h1>Item Test Counter {`${index}`}</h1>
  //       {/* <figure className="podkit-logo"> */}
  //         {/* {(testText[index]?.imageUrl?.sizes?.full?.url == undefined) ? (
  //           <img src={testText[index]?.imageUrl} alt="logo" />
  //           ) : (
  //           <img src={testText[index]?.imageUrl?.sizes?.full?.url} alt="logo" />
  //         )}
  //       </figure> */}
  //       <RichText.Content value={testText[index]?.title} tagName="h3" />
  //     </div>
  //   );
  // };

  return (
    <Fragment>
      <h1>Hello Testing Block</h1>
      <div className="container__items">
        {/* {times(columnsNumber, (n) => contentRenderColumns(n))} */}
        {test_block.map((test, index) => (
          <Fragment>
            <h1>Section {index}</h1>
            <figure className="podkit-logo">
              {test_block[index]?.image?.sizes?.full?.url == undefined ? (
                <img src={test_block[index]?.image} alt="logo" />
              ) : (
                <img
                  src={test_block[index]?.image?.sizes?.full?.url}
                  alt="logo"
                />
              )}
            </figure>
            <div
              className="uagb-testinomial-text-wrap"
              key={"text-wrap-" + index}
            >
              <Description
                attributes={props.attributes}
                setAttributes="not_set"
                props={props}
                index_value={index}
              />
            </div>
          </Fragment>
        ))}
      </div>
    </Fragment>
  );
};

export default Save;
