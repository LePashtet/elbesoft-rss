import { FC } from "react";
import ChipClick from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import ChipIcon from "./ChipIcon";
import { Source } from "../../SourceSelector/SourceSelector";

interface ChipProps {
  label: string;
  onClick: () => void;
  onRemove?: () => void;
  isSelected?: boolean;
  type?: string;
  chipType?: Source;
}

export const Chip: FC<ChipProps> = ({
  chipType,
  label,
  onClick,
  isSelected,
  type = "click",
  onRemove,
}) => {
  const variant = isSelected ? "filled" : "outlined";

  const handleClick = () => {
    onRemove?.();
    onClick();
  };
  return (
    <ChipClick
      avatar={
        chipType ? (
          <Avatar sx={{ backgroundColor: "transparent" }}>
            <ChipIcon chipType={chipType} />
          </Avatar>
        ) : undefined
      }
      label={label}
      variant={isSelected !== undefined ? variant : "filled"}
      onClick={handleClick}
      sx={{
        height: "32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#9E9E9E",
        fontFamily: "Roboto",
        fontWeight: 400,
        fontSize: "14px",
        lineHeight: "20px",
        ...(type !== "click"
          ? {
              cursor: "not-allowed",
            }
          : {}),
        "&:hover":
          variant === "filled" && onRemove
            ? {
                border: "1px solid red",
              }
            : {},
      }}
    />
  );
};
