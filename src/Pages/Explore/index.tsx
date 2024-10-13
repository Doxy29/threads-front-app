import {Box, Paper, Stack, TextField, ToggleButton, ToggleButtonGroup,} from "@mui/material";
import {Notifications, Add, Image} from '@mui/icons-material';
import CustomAvatar from "src/CommonComponents/CustomAvatar.tsx";
import {FC, MouseEvent, useState} from "react";
import CustomIconButton from "src/CommonComponents/CustomIconButton.tsx";


const Explore: FC = () => {

    const [alignment, setAlignment] = useState<string | null>('left');

    const handleAlignment = (
        event: MouseEvent<HTMLElement>,
        newAlignment: string | null,
    ) => {
        setAlignment(newAlignment);
    };

    const itmesNo = [1,2,3,4,5]

    return (
        <Stack gap={6} sx={{height: "1600px", py:6}}>

            <Stack direction={"row"} justifyContent={"space-between"}>
                <CustomAvatar alt="Gersi Shehaj">GS</CustomAvatar>
                <Stack direction={"row"}  gap={2}>

                    <CustomIconButton variant={"contained"} color={"primary"} ><Notifications/></CustomIconButton>
                    <CustomIconButton variant={"contained"} color={"primary"} ><Add/></CustomIconButton>
                </Stack>
            </Stack>

            <TextField variant="outlined" placeholder={"Search"} />

            <ToggleButtonGroup
                value={alignment}
                exclusive
                onChange={handleAlignment}
                aria-label="text alignment"
                size={"small"}
            >
                <ToggleButton value="left" aria-label="left aligned">
                    Trending
                </ToggleButton>
                <ToggleButton value="center" aria-label="centered">
                    Hot
                </ToggleButton>
                <ToggleButton value="right" aria-label="right aligned">
                    Latest
                </ToggleButton>
            </ToggleButtonGroup>


            {
                itmesNo.map(nr=>{
                    return (
                        <Paper elevation={5}>
                            <Stack gap={2}>
                                <Box>Title {nr}</Box>
                                <img src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"/>
                            </Stack>
                        </Paper>
                    )
                })
            }

        </Stack>

    )
}

export default Explore






