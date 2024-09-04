// src/app/components/Header.tsx
import Image from 'next/image';
import logo from '../../../public/images/Logo.png';
import img_header from '../../../public/images/img_header.jpg';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Header = () => {
  // Configuração do Intersection Observer para o conteúdo (logo e texto)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Variantes de animação para o logo
  const logoVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  // Variantes de animação para o texto
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <header 
      className="relative bg-cover bg-center mx-auto py-20 sm:py-28 md:py-36 text-center overflow-hidden px-6 sm:px-10 md:px-20 lg:px-40"
      style={{ backgroundImage: `url(${img_header.src})` }}
    >
      <div className="absolute inset-0"></div>
      <div ref={ref} className="relative flex flex-col items-center z-10">
        {/* Animação do logo */}
        <motion.div 
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={logoVariants}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          <Image 
            src={logo}
            alt="Logo" 
            width={150} 
            height={150} 
            className=" lg:w-full lg:h-full"
          />
        </motion.div>

        {/* Animação do texto com delay maior que a do logo */}
        <motion.p
          className="mt-8 sm:mt-10 md:mt-16 text-white text-sm sm:text-base md:text-lg lg:text-xl"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={textVariants}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
        >
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </motion.p>
      </div>
    </header>
  );
};

export default Header;
