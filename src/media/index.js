const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { MediaUpload, RichText } = wp.editor;
const { Button, IconButton } = wp.components;

import { ReactComponent as Logo } from "../bv-logo.svg";
import logoWhiteURL from "../bv-logo-white.svg";

registerBlockType("podkit/media", {
  title: __("Custom title and image", "podkit"),
  icon: { src: Logo },
  category: "podkit",
  attributes: {
    episodeTitle: {
      type: "string",
      source: "html",
      selector: ".podkit-title",
    },
    episodeImage: {
      type: "string",
      source: "attribute",
      selector: ".podkit-logo img",
      attribute: "src",
      default: logoWhiteURL
    }
  },

  edit: (props) => {
    console.info(props);

    const {
      className,
      attributes: { episodeTitle, episodeImage },
      setAttributes,
    } = props;

    // Grab newEpisodeTitle, set the value of episodeTitle to newEpisodeTitle.
    const onChangeEpisdoeTitle = (newEpisodeTitle) => {
      setAttributes({ episodeTitle: newEpisodeTitle });
    };

    // Grab imageObject, set the value of episodeImage to imageObject.sizes.podkitFeatImg.url.
    const onImageSelect = (imageObject) => {
      setAttributes({ episodeImage: imageObject.sizes.podkitFeatImg.url })
    }

    return (
      <div className={`${className} podkit-block podkit-editable`}>
        <figure className="podkit-logo">
          <img src={episodeImage} alt="logo" />
          <MediaUpload 
            onSelect={onImageSelect}
            type="image"
            value={episodeImage}
            render={({open}) => (
              // <Button onClick={open}>Open Media Library</Button>
              <IconButton className="podkit-logo__button"
              onClick={open}
              icon="format-image"
              showTooltip="true"
              label={__("Change image", "podkit")}
              />
            )}
          />
        </figure>
        <div className="podkit-info">
          <div className="podkit-nameplate">
            {__("The Binaryville Podcast", "podkit")}
          </div>
          <h3 className="podkit-title">
            <RichText
              placeholder={__("Podcast episode title", "podkit")}
              value={episodeTitle}
              onChange={onChangeEpisdoeTitle}
            />
          </h3>
          <div className="podkit-cta">
            <a href="#">{__("Like & Subscribe", "podkit")}</a>
          </div>
        </div>
      </div>
    );
  },
  save: (props) => {
    const {
      attributes: { episodeTitle, episodeImage },
    } = props;
    return (
      <div className="podkit-block podkit-static">
        <figure className="podkit-logo">
          <img src={episodeImage} alt="logo" />
        </figure>
        <div className="podkit-info">
          <div className="podkit-nameplate">
            {__("The Binaryville Podcast", "podkit")}
          </div>
          <h3 className="podkit-title">
            <RichText.Content value={episodeTitle} />
          </h3>
          <div className="podkit-cta">
            <a href="/subscribion">{__("Like & Subscribe!", "podkit")}</a>
          </div>
        </div>
      </div>
    );
  },
});
