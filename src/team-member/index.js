import { __ } from "@wordpress/i18n";
import { registerBlockType } from "@wordpress/blocks";

import { ReactComponent as Logo } from "../bv-logo.svg";
import Edit from "./Edit";
import Save from "./Save";

const teamAttributes = {};

const teamSupports = {
  align: true,
};

registerBlockType("podkit/team", {
  title: "Team Members",
  icon: { src: Logo },
  category: "podkit",
  attributes: teamAttributes,
  supports: teamSupports,
  edit: Edit,
  save: Save,
});
