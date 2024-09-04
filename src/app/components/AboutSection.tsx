// src/app/components/AboutSection.tsx
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutSection = () => {
  // Configuração do Intersection Observer
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Variantes de animação para o título "About"
  const titleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  // Variantes de animação para o texto e botão
  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      ref={ref}
      className="flex flex-col md:flex-row h-auto md:h-[600px] px-6 md:px-40 pt-16 md:pt-36 bg-white text-black"
    >
      {/* Seção da Esquerda */}
      <motion.div
        className="w-full md:w-1/2 flex items-start justify-start mb-6 md:mb-0"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={titleVariants}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
      >
        <p className="text-4xl md:text-5xl font-bold">Lorem Ipsum</p>
      </motion.div>

      {/* Seção da Direita */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col justify-center p-6 md:p-10"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={contentVariants}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
      >
        <p className="text-lg md:text-2xl mb-6 text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="mt-4 py-2 w-full md:w-32 text-left text-black flex items-center hover:underline">
          Lorem Ipsum
          <FaArrowRight className="ml-2 text-xs" />
        </button>
      </motion.div>
    </section>
  );
};

export default AboutSection;
