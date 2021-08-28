import { __ } from "@wordpress/i18n";
import { registerBlockType } from "@wordpress/blocks";

import { ReactComponent as Logo } from "../bv-logo.svg";
import Edit from "./Edit";
import Save from "./Save";

const teamAttributes = {
  columnsNumber: {
    type: "number",
    default: 2
  },
  teamMemberImage: {
    type: "string",
    source: "attribute",
    selector: 'img',
    attribute: 'src',
  },
  teamMemberTitle: {
    type: "string",
    source: "html",
    selector: ".wpb-team-member__title",
    default: "Name"
  },
  teamMemberPosition: {
    type: "string",
    source: "html",
    selector: ".wpb-team-member__position",
    default: "Position"
  },
  teamMemberDescription: {
    type: "string",
    source: "html",
    selector: ".wpb-team-member__description",
    default: "Description Lorem Ipsum and other stuff"
  },

};

const teamSupports = {
  align: true,
};

registerBlockType("podkit/team-members", {
  title: "Team Memebers",
  icon: { src: Logo },
  category: "podkit",
  description: "This is a trial description to be changed later for team members block",
  attributes: teamAttributes,
  supports: teamSupports,
  edit: Edit,
  save: Save,
});
