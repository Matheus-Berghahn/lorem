// src/app/components/MainSection.tsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MainSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Variantes de animação
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const boxVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section 
      ref={ref} 
      className="mx-auto px-6 sm:px-10 md:px-20 lg:px-40 py-20 sm:py-28 md:py-36 bg-white flex flex-col md:flex-row text-black"
    >
      {/* Texto à Esquerda */}
      <motion.div
        className="md:w-1/3 w-full text-black p-6 flex flex-col justify-center mb-8 md:mb-0"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={textVariants}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <p className="text-2xl sm:text-3xl md:text-4xl font-bold">Capturar</p>
        <p className="text-2xl sm:text-3xl md:text-4xl font-bold">Sentir</p>
        <p className="text-2xl sm:text-3xl md:text-4xl font-bold">Registrar</p>
      </motion.div>

      {/* Seções à Direita */}
      <div className="md:w-2/3 w-full flex flex-col md:flex-row">
        <motion.div
          className="md:w-1/3 w-full p-4 md:p-6 border-l-0 md:border-l-2 border-t-2 md:border-t-0 border-black"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={boxVariants}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          <h2 className="text-lg sm:text-xl font-bold">Ensaio Autoral</h2>
          <p className="mt-2 text-sm sm:text-base">
Fotos com estética minimalista e contraste forte. Sem poses forçadas, sem direção exagerada. Apenas você, a luz e o momento certo.          </p>
        </motion.div>
        <motion.div
          className="md:w-1/3 w-full p-4 md:p-6 border-l-0 md:border-l-2 border-t-2 md:border-t-0 border-black"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={boxVariants}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
        >
          <h2 className="text-lg sm:text-xl font-bold">Retratos Profissionais</h2>
          <p className="mt-2 text-sm sm:text-base">
Retratos diretos, limpos e objetivos. Perfeitos para portfólios, marcas pessoais e projetos que pedem autenticidade sem excesso.          </p>
        </motion.div>
        <motion.div
          className="md:w-1/3 w-full p-4 md:p-6 border-l-0 md:border-l-2 border-t-2 md:border-t-0 border-black"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={boxVariants}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
        >
          <h2 className="text-lg sm:text-xl font-bold">Coleções Exclusivas</h2>
          <p className="mt-2 text-sm sm:text-base">
Séries fotográficas limitadas, produzidas em ambientes urbanos e naturais. Cada imagem é tratada individualmente para entregar impacto e identidade.          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MainSection;
