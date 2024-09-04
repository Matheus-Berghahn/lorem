// src/app/components/ParallaxSection.tsx
import Image from 'next/image';
import exampleImage from '../../../public/images/img_parallax.jpg'; // Substitua com o caminho para a sua imagem
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ParallaxSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Variantes de animação para o texto
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section ref={ref} className="relative overflow-hidden h-[400px] md:h-[500px] lg:h-[600px]">
      {/* Background Parallax */}
      <div className="absolute inset-0 w-full h-full bg-fixed bg-center bg-cover parallax-bg grayscale" />

      {/* Conteúdo do Parallax */}
      <div className="relative z-10 flex items-center justify-start h-full px-6 md:px-10 lg:px-20 xl:px-40 pt-10">
        <div className="w-full md:w-3/5 lg:w-2/5">
          <motion.h1
            className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 text-black drop-shadow-md"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={textVariants}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            Lorem Ipsum
          </motion.h1>
          <motion.p
            className="text-base md:text-lg lg:text-2xl mb-4 text-black text-justify drop-shadow-2xl"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={textVariants}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </motion.p>
        </div>
      </div>

      <style jsx>{`
        .parallax-bg {
          background-image: url('${exampleImage.src}');
          background-attachment: fixed;
          background-position: center;
          background-size: cover;
        }
      `}</style>
    </section>
  );
};

export default ParallaxSection;
