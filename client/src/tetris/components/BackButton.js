import React from "react";
import { useNavigate } from "react-router-dom";
import { StyledBackButton } from "./styles/StyledBackButton";



const BackButton = () => {

    const navigator = useNavigate();

    const MainPageLoad = () => {
        navigator('/MyPage')
    }

    return (
<StyledBackButton style={{marginTop: '30px'}} onClick={MainPageLoad}>Back</StyledBackButton>
    )
};

export default BackButton;