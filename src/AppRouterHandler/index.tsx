import {BrowserRouter as Router, Route, Switch, RouteProps} from "react-router-dom";
import {FC, useCallback} from "react";
import {Container} from "@mui/material";
import Explore from "src/Pages/Explore";
import Authentication from "src/Pages/Authentication";
import Grid2 from "@mui/material/Unstable_Grid2";

interface CustomRouteProps extends RouteProps {
    template?: "default" | "none"
}

const CustomRoute: FC<CustomRouteProps> = ({template = "default", ...props}) => {

    const switchTemplate = useCallback(
        (temp: CustomRouteProps["template"], p: CustomRouteProps) => {
            switch (temp) {
                case "default":
                    return (
                       <Container maxWidth="sm" sx={{
                           height: "100%",
                           overflow: "auto",
                           "&::-webkit-scrollbar": {
                               display: "none"
                           }
                       }} >
                           <Route {...p} />
                       </Container>
                    );
                case "none":
                    return <Route {...p} />

            }
        }, [])

    return (
        <Grid2 height="100%" width="100%" justifyContent="center" alignItems="center">
            {
                switchTemplate(template, props)
            }
        </Grid2>
    )
}

const AppRouterHandler = () => {
    return (

        <Router>
            <Switch>
                <CustomRoute
                    exact
                    path="/authentication"
                    template="none"
                    children={<Authentication/>}
                />

                <CustomRoute
                    exact
                    path="/"
                    children={<Explore/>}
                />
            </Switch>
        </Router>
    )
};

export default AppRouterHandler;