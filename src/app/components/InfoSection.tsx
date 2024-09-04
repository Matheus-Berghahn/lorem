// src/app/components/InfoSection.tsx
import Image from 'next/image';
import exampleImage from '../../../public/images/img_info.jpg';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const InfoSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Variantes de animação para as seções
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section ref={ref} className="flex flex-col lg:flex-row mx-auto px-6 md:px-10 lg:px-20 xl:px-40 py-16 md:py-24 lg:py-36 bg-white">
      {/* Texto à Esquerda */}
      <motion.div
        className="w-full lg:w-1/3 p-6 text-black flex flex-col justify-start"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={textVariants}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
      >
        <p className="text-2xl md:text-3xl lg:text-4xl font-bold">First</p>
        <p className="text-2xl md:text-3xl lg:text-4xl font-bold">Second</p>
        <p className="mt-4 text-sm md:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button className="mt-4 py-2 w-32 text-left text-black hover:underline">
        Lorem Ipsum
        </button>
      </motion.div>

      {/* Seções à Direita */}
      <div className="w-full lg:w-2/3 flex flex-col">
        <motion.div
          className="relative w-full mb-4"
          style={{ height: '0', paddingBottom: '45%' }}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={imageVariants}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
        >
          <Image
            src={exampleImage} // Substitua com o caminho para a sua imagem
            alt="Example"
            layout="fill" // Faz a imagem preencher o contêiner
            objectFit="cover" // Faz a imagem cobrir o contêiner sem distorção
          />
        </motion.div>
        <div className="w-full flex flex-col md:flex-row">
          <motion.div
            className="w-full md:w-1/2 p-4 text-black"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={textVariants}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
          >
            <p className="text-base md:text-lg">
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 p-4 text-black"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={textVariants}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.8 }}
          >
            <p className="text-base md:text-lg">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
