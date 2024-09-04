// src/app/components/SplitSection.tsx
import Image from 'next/image';
import exampleImage from '../../../public/images/img_split.jpg'; // Substitua com o caminho para a sua imagem
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SplitSection = () => {
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
    <section
      ref={ref}
      className="flex flex-col md:flex-row h-auto md:h-[800px] mx-auto px-6 md:px-40 py-16 md:py-36 bg-white"
    >
      {/* Parte da Imagem */}
      <div className="w-full md:w-1/2 h-[300px] md:h-full relative">
        <Image
          src={exampleImage}
          alt="Imagem de Divisão"
          layout="fill"
          objectFit="cover"
          className="object-cover"
        />
      </div>

      {/* Parte do Conteúdo */}
      <div className="w-full md:w-1/2 flex flex-col justify-start items-start md:items-end p-6 md:p-10 bg-white">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4 text-black"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={textVariants}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Lorem Ipsum
        </motion.h2>
        <motion.p
          className="text-base md:text-lg mb-6 text-black md:w-2/3 text-justify"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={textVariants}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </motion.p>
        <motion.button
          className="mt-4 py-2 w-32 text-left md:text-right text-black hover:underline"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={textVariants}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
        >
          Lorem Ipsum
        </motion.button>
      </div>
    </section>
  );
};

export default SplitSection;
