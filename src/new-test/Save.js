import { RichText } from "@wordpress/block-editor";
import { Fragment } from "@wordpress/element";
import { __ } from "@wordpress/i18n";
import times from "lodash/times";

import Description from "../components/Description";
import Position from "../components/Position";

const Save = (props) => {
  const {
    attributes: { columnsNumber, test_block, descriptionSize },
  } = props;

  return (
    <Fragment>
      <h1>Hello Testing Block</h1>
      <div className="container__items">
        {/* {times(columnsNumber, (n) => contentRenderColumns(n))} */}
        {test_block.map((test, index) => (
          <Fragment>
            <h1>Section {index}</h1>
            <figure className="podkit-logo">
              {test_block[index].image?.sizes?.full?.url ? (
                <img
                  src={test_block[index].image?.sizes?.full?.url}
                  alt="logo"
                />
              ) : (
                <img
                  src={
                    "https://survey-project.lndo.site/wp-content/plugins/podkit/images/default-thumbnail.jpg"
                  }
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
              <Position
                style={{
                  fontSize: descriptionSize + "px",
                }}
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
