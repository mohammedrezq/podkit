import { RichText } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";

const Save = (props) => {
  const {
    attributes: { columnsNumber },
  } = props;
  return (
    <>
      Range Number Columns: {columnsNumber}
      <h1>Hello Save adlm,sk</h1>
    </>
  );
};

export default Save;
