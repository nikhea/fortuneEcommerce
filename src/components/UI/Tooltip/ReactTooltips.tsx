import React, { FC } from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

export type IReactTooltips = {
  tooltipContent: string;
  tooltipId: string;
  children?: React.ReactNode;
};
const ReactTooltips: FC<IReactTooltips> = ({
  tooltipContent,
  tooltipId,
  children,
}) => {
  return (
    <Tooltip place="top" id={`tooltip-${tooltipId}`} content={tooltipContent} />
  );
};

export default ReactTooltips;
