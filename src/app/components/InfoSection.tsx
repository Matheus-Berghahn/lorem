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
        <p className="text-2xl md:text-3xl lg:text-4xl font-bold">Capturando o que </p>
        <p className="text-2xl md:text-3xl lg:text-4xl font-bold">os olhos veem</p>
        <p className="mt-4 text-sm md:text-base">A fotografia é simples: luz, forma e intenção.<br></br>
É sobre observar o que passa despercebido<br></br>
e transformar isso em algo que permanece.</p>
        <button className="mt-4 py-2 w-32 text-left text-black hover:underline">
        Retratos de momentos que falam por si.
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
<b>A beleza está nos detalhes.</b> Cada imagem nasce do encontro entre composição, luz e precisão. Nosso trabalho é transformar cenas comuns em algo que carrega significado — seja em textura, contraste ou silêncio. Nada é aleatório: cada enquadramento é pensado para transmitir a sensação exata daquele instante.            </p>
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 p-4 text-black"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={textVariants}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.8 }}
          >
            <p className="text-base md:text-lg">
<b>A fotografia não é sobre inventar. É sobre revelar.</b> Buscamos autenticidade em cada registro nada exagerado, nada artificial. Apenas a verdade do momento, capturada com técnica e intenção. Do preto e branco clássico às composições mais modernas, cada foto preserva aquilo que a memória tenta guardar, mas o tempo insiste em apagar.            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
