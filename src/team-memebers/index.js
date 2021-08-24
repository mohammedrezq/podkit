import { __ } from "@wordpress/i18n";
import { registerBlockType } from "@wordpress/blocks";

import { ReactComponent as Logo } from "../bv-logo.svg";
import Edit from "./Edit";
import Save from "./Save";

const teamAttributes = {

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
