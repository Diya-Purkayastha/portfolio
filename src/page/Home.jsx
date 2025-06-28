import React from 'react';
import About from '../components/About';
import HeroSection from '../components/HeroSection';
import SkillsSection from '../components/SkillsSection';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import EducationSection from '../components/EducationSection';



const Home = () => {
    return (
        <div>
           
            <HeroSection></HeroSection>
            <About></About>
            <SkillsSection></SkillsSection>
            <EducationSection></EducationSection>
            <Portfolio></Portfolio>
            <Contact></Contact>
           
        </div>
    );
};

export default Home;