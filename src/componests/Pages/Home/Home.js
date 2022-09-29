import React from 'react';
import BuildSomething from '../../BuildSomething/BuildSomething';
import HowItWorks from '../../HowItWorks/HowItWorks';
import Services from '../../Services/Services';
import Supports from '../../Supports/Supports';
import TagsTopic from '../../TagsTopics/TagsTopic';
import Testimonial from '../../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <TagsTopic />
            <Services />
            <HowItWorks />
            <Supports />
            <Testimonial />
            <BuildSomething />
        </div>
    );
};

export default Home;