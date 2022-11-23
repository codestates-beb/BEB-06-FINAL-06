import React from "react";
import HeroSlider, {Slide} from 'hero-slider';

const banner_1 = "";
const banner_2 = "";
const banner_3 = "";

const Banner = () => {
    return (
        <div className="Slider">
        <HeroSlider
        slildeingAnimation="left_to_right"
        orientation="horizontal"
        initialSlide={1}
        onBeforeChange={(previousSlide, nextSlide) => console.log("onBeforeChange", previousSlide, nextSlide)}
        onChange={nextSlide => console.log("onchange", nextSlide)}
        onAfterChange={nextSlide => console.log("onAfterChange", nextSlide)}
        style={{
            backgroundColor: 'rgba(0,0,0,0.33)'
        }}
        settings={{
            slidingDuration: 250,
            slidingDelay: 100,
            shouldAutoply: true,
            shouldDisplayButtons: true,
            autoplatDuration: 3000,
            height: "10px"
        }}
        >
            <Slide
            background={{
                backgroundImage: banner_1,
                backgroundAttachment: "fixed"
            }}
            />
            <Slide
            background={{
                backgroundImage: banner_2,
                backgroundAttachment: "fixed"
            }}
            />
            <Slide
            background={{
                backgroundImage: banner_3,
                backgroundAttachment: "fixed"
            }}
            />
        </HeroSlider>
        </div>
    )
}

export default Banner;