import { Dashicon, IconButton } from "@wordpress/components";
import { MediaUpload, RichText } from "@wordpress/block-editor";

const MemebrCard = (props) => {
  return (
    <div className={`wpb-team-member-card-block__item ${props.className}`}>
      <div className={`wpb-team-member__image ${props.imageClass}`}>
        <button className="wpb-team-member-image__remove">
          <Dashicon icon={props.icon} size={props.size} />
        </button>
        <img src={props.imageUrl} alt={props.alt} />
        <MediaUpload
          onSelect={props.onSelect}
          type={props.type}
          value={episodeImage}
          render={({ open }) => (
            <IconButton
              className={props.iconClassName}
              onClick={open}
              icon={props.dashiconIconButton}
              showTooltip={props.toolTip}
              label={props.label}
            />
          )}
        />
      </div>
      <div className="wpb-team-member__content">
        <div className="wpb-team-member__title">
          <RichText
            tagName={props.tagNameTitle}
            placeholder={props.titlePlaceholder}
            value={props.teamMemeberTitle}
            onChange={props.onChangeTeamMemeberTitle}
          />
        </div>
        <div className="wpb-team-member__position">
          <RichText
            tagName={props.tagNamePosition}
            placeholder={props.positionPlaceholder}
            value={props.teamMemeberPosition}
            onChange={props.onChangeTeamMemeberPosition}
          />
          <div className="wpb-team-member__description">
            <RichText
              tagName={props.tagNameDescription}
              placeholder={props.descriptionPlaceholder}
              value={props.teamMemeberDescription}
              onChange={props.onChangeTeamMemeberDescription}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemebrCard;
