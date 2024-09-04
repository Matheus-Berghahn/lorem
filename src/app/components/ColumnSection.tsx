// src/app/components/ColumnSection.tsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ColumnSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Variantes de animação para o título
  const titleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  // Variantes de animação para as colunas
  const columnVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section ref={ref} className="pb-36 mx-auto px-6 md:px-20 lg:px-40 bg-white text-black">
      {/* Título na esquerda superior */}
      <motion.h2 
        className="text-2xl md:text-3xl font-bold mb-8"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={titleVariants}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
      >
        Lorem Ipsum
      </motion.h2>

      {/* Estrutura de 4 colunas, adaptável para telas menores */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-20">
        {/* Coluna 1 - Texto curto em negrito */}
        <motion.div 
          className="flex items-center"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={columnVariants}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
        >
          <p className="font-bold">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
        </motion.div>

        {/* Coluna 2 - Texto médio sem negrito */}
        <motion.div 
          className="flex items-center"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={columnVariants}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
        >
          <p className="text-base">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum
          </p>
        </motion.div>

        {/* Coluna 3 - Texto médio sem negrito */}
        <motion.div 
          className="flex items-center"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={columnVariants}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
        >
          <p className="text-base">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum
          </p>
        </motion.div>

        {/* Coluna 4 - Box com borda e texto grande em negrito */}
        <motion.div 
          className="flex items-center justify-center"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={columnVariants}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
        >
          <div className="border-2 border-black p-4 w-full h-full flex items-center justify-center">
            <p className="text-xl md:text-2xl font-bold text-center">Lorem Ipsum Lorem Ipsum</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ColumnSection;
