declare module 'react-parallax' {
    import { ComponentType } from 'react';
  
    export interface ParallaxProps {
      bgImage?: string;
      bgImageAlt?: string;
      strength?: number;
      className?: string;
      style?: React.CSSProperties;
    }
  
    export const Parallax: ComponentType<ParallaxProps>;
  }
  