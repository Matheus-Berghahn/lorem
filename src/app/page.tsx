
"use client"
import Image from "next/image";
import Header from "./components/Header";
import MainSection from './components/MainSection';
import InfoSection from './components/InfoSection';
import ParallaxSection from './components/ParallaxSection';
import SplitSection from './components/SplitSection';
import Footer from "./components/Footer";
import AboutSection from './components/AboutSection';
import ColumnSection from './components/ColumnSection';

export default function Home() {
  return (
    <>
    <Header></Header>
    <MainSection></MainSection>
    <InfoSection></InfoSection>
    <ParallaxSection></ParallaxSection>
    <AboutSection></AboutSection>
    <SplitSection></SplitSection>
    <ColumnSection></ColumnSection>
    <Footer></Footer>
    </>
  );
}
