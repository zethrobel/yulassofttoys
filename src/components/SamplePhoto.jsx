import React, {useState} from 'react';
import {Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption} from 'reactstrap';
import samplePhotos from '../samplePhotos';

function SamplePhoto(props) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) 
            return;
        const nextIndex = activeIndex === samplePhotos.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };
    const previous = () => {
        
        if (animating) 
            return;
        const nextIndex = activeIndex === 0 ? samplePhotos.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) 
            return;
        setActiveIndex(newIndex);
    };
    const slides = samplePhotos.map((item) => {
        return (
            <CarouselItem
                
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}>
                <img src={item.src} alt={item.name}/>
                <CarouselCaption captionText={item.name} captionHeader={item.name}/>
            </CarouselItem>
        );
    });
    return (
        <Carousel   activeIndex={activeIndex} next={next} previous={previous} 
        {...props}  className="sampleImage">
            <CarouselIndicators
                
                items={samplePhotos}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}/> 
                {slides}
            <CarouselControl
                
                direction="prev"
                directionText="Previous"
                onClickHandler={previous}/>
            <CarouselControl direction="next" directionText="Next" onClickHandler={next}/>
        </Carousel>
    );
}

export default SamplePhoto