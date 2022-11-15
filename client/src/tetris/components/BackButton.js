import React from "react";
import {Link} from 'react-router-dom';
import { StyledBackButton } from "./styles/StyledBackButton";

const BackButton = () => (
    <StyledBackButton style={{marginTop: '30px'}}><Link to={'/mypage'} style={{textDecoration:"none", color:'#fff'}}>Back</Link></StyledBackButton>
);

export default BackButton;