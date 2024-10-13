import {FC} from "react";
import {Button, ButtonProps} from "@mui/material";

const iconStyles = {
    borderRadius: "100px",
    m:0,
    p:0,
    minWidth:"40px"
}
const CustomIconButton: FC<ButtonProps> = (props) => {
    return <Button {...props}  sx={{...props.sx,...iconStyles}} />
};
export default CustomIconButton;