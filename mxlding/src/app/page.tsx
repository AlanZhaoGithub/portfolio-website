'use client'
import React, {useState} from 'react';
import MainbarNav from '../../components/MainbarNav.js';
import LandingSection from '../../components/LandingSection.js';
import AboutSection from '../../components/AboutSection.js';
import ProjectSection from '../../components/ProjectSection.js';
import ContactSection from '../../components/ContactSection.js';

export default function Home() {
  return (
    <main className="main">
      <div id="landing" className="flex flex-col h-screen">
        <MainbarNav></MainbarNav>
        <LandingSection></LandingSection>
      </div>
      <AboutSection></AboutSection>
      <ProjectSection></ProjectSection>
      <ContactSection></ContactSection>
    </main>
  )
}
