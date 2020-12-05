import React from 'react';
import AboutSection from '../Components/AboutSection';
import FaqSection from '../Components/FaqSection';
import ServicesSection from '../Components/ServicesSection';
import {motion} from 'framer-motion';
import {pageAnimation} from "../animation"
import ScrollTop from '../Components/ScrollTop';

const AboutUs = () => {
    return(
        <motion.div exit="exit"
        variants={pageAnimation}
        initial="hidden"
        animate="show">
        <ScrollTop />
        <AboutSection />
        <ServicesSection />
        <FaqSection />
        </motion.div>
    )
}

export default AboutUs;