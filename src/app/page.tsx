
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
    <div className="hidden md:block lg:block xl:block 2xl:block" ><ParallaxSection></ParallaxSection></div>
    <AboutSection></AboutSection>
    <SplitSection></SplitSection>
    <ColumnSection></ColumnSection>
    <Footer></Footer>
    </>
  );
}
