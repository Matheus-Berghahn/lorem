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
        <p className="text-2xl sm:text-3xl md:text-4xl font-bold">Lorem</p>
        <p className="text-2xl sm:text-3xl md:text-4xl font-bold">Ipsum</p>
        <p className="text-2xl sm:text-3xl md:text-4xl font-bold">Dolor</p>
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
          <h2 className="text-lg sm:text-xl font-bold">Título 1</h2>
          <p className="mt-2 text-sm sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </motion.div>
        <motion.div
          className="md:w-1/3 w-full p-4 md:p-6 border-l-0 md:border-l-2 border-t-2 md:border-t-0 border-black"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={boxVariants}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
        >
          <h2 className="text-lg sm:text-xl font-bold">Título 2</h2>
          <p className="mt-2 text-sm sm:text-base">
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </motion.div>
        <motion.div
          className="md:w-1/3 w-full p-4 md:p-6 border-l-0 md:border-l-2 border-t-2 md:border-t-0 border-black"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={boxVariants}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
        >
          <h2 className="text-lg sm:text-xl font-bold">Título 3</h2>
          <p className="mt-2 text-sm sm:text-base">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MainSection;
