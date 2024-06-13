import Authentication from "src/Pages/Authentication/Authentication";
import {BrowserRouter as Router, Route, Switch, RouteProps} from "react-router-dom";
import {FC, useCallback} from "react";
import styled from "@emotion/styled";
import {Container} from "@mui/material";

interface CustomRouteProps extends RouteProps {
    template?: "default" | "none"
}

const CustomRoute: FC<CustomRouteProps> = ({template = "default", ...props}) => {

    const switchTemplate = useCallback(
        (temp: CustomRouteProps["template"], p: CustomRouteProps) => {
            switch (temp) {
                case "default":
                    return (
                       <Container
                        sx={{
                            minHeight: "100%",
                            maxWidth: "m"
                        }}
                       >
                           <Route {...p} />
                       </Container>
                    );
                case "none":
                    return (
                        <Route {...p} />
                    );
            }
        }, [])

    return (
        <PageContainer>
            {
                switchTemplate(template, props)
            }
        </PageContainer>
    )
}

const AppRouterHandler = () => {
    return (

        <Router>
            <Switch>
                <CustomRoute
                    exact
                    path="/"
                    children={<Authentication/>}
                />

                <CustomRoute
                    exact
                    path="/explore"
                    children={<div>Explore</div>}
                />

                <CustomRoute
                    exact
                    path="/auth"
                    template="none"
                    children={<Authentication/>}
                />

            </Switch>
        </Router>
    )
};

export default AppRouterHandler;

const PageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
`