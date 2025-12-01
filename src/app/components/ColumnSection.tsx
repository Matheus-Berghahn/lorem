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
    Construímos o que importa, do jeito certo.
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
        Somos um casal que trabalha junto, entregando projetos diretos, funcionais e feitos com cuidado real — sem exageros e sem promessas vazias.
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
        Nosso processo é claro: entender o que você precisa, cortar o que não agrega e construir algo limpo, leve e com a qualidade que a gente mesmo exigiria.
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
        Aqui, tudo é feito com honestidade e técnica. Não vendemos fórmula mágica — entregamos trabalho bem feito, alinhado e prático, que realmente faz diferença.
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
        <p className="text-xl md:text-2xl font-bold text-center">
          Transparência. Técnica. Resultado.
        </p>
      </div>
    </motion.div>

  </div>
</section>

  );
};

export default ColumnSection;
