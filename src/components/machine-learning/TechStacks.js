import HeadingHighlight from "../reusable/HeadingHighlight";
import { useRef, useEffect } from "react";
import { useInView, motion } from "framer-motion";
import { fadeSlideUp, titleVariants } from "../animations";
import { FiCheckCircle } from "react-icons/fi";

const TechStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    triggerOnce: false,
    amount: 0.2,
    threshold: 0.1,
  });

  // Debug isInView state
  useEffect(() => {
    console.log("isInView:", isInView);
  }, [isInView]);

  return (
    <motion.section
      ref={ref}
      style={{
        backgroundImage: "url('/machine-learning/CustomSolutionsBg.jpg')",
      }}
      className="relative w-full px-4 md:px-8 xl:px-12 py-8 lg:py-16 overflow-hidden bg-cover bg-no-repeat bg-center pt-32 lg:pt-32"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
    >
      <img
        src="/home/faq/FaqBg.svg"
        alt="FAQ Background"
        className="absolute -left-28 top-60 h-[70%] w-auto hidden md:block opacity-80 -scale-x-[1]"
      />
      <div className="bg-black/40 absolute top-0 left-0 h-full w-full" />
      <div className="bg-[#431964] w-96 h-96 rounded-full blur-[100px] absolute -z-10 top-60 -left-40 opacity-70" />
      <div className="bg-[#431964] w-96 h-96 rounded-full blur-[100px] absolute -z-10 bottom-60 -right-40 opacity-70" />

      {/* Main Content */}
      <div className="xl:container mx-auto 2xl:max-w-[1280px] w-full flex flex-col justify-center items-center gap-16 text-white">
        <motion.div
          className="relative flex flex-col items-center justify-center max-w-5xl text-center gap-7 z-10"
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          key={`title-${isInView}`}
        >
          {/* Title */}
          <HeadingHighlight
            highlightText="Machine Learning / Deep Learning"
            subText="Tech Stacks"
          />
          <p className="text-base md:text-lg xl:px-4">
            At Robx.ai, we use trusted tools and technologies to build powerful
            machine learning and deep learning solutions. From creating and
            training models to launching them live, our tech stack helps us work
            faster, deliver better results, and scale smoothly with your needs.
          </p>
        </motion.div>

        <motion.div
          className="w-full flex flex-col md:flex-row items-center gap-3 justify-center"
          variants={fadeSlideUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{
            delay: 0.5,
          }}
        >
          <div className="w-full md:w-1/2 flex flex-col gap-3">
            <div className="w-full gradient-border-wrapper bg-[#110B15] p-4  space-y-4">
              <div className="w-full flex items-center justify-between">
                <h3 className="text-xl md:text-2xl x:text-3xl font-bold">
                  Domains
                </h3>
                <FiCheckCircle className="text-[#DC00F9]" size={24} />
              </div>

              <ul className="space-y-1 list-disc pl-4">
                <li>Natural Language Processing / Understanding (NLP / NLU)</li>
                <li>Computer Vision (CV)</li>
                <li>Audio</li>
                <li>Tabular Data</li>
                <li>Reinforcement Learning (RL)</li>
              </ul>
            </div>
            <div className="w-full gradient-border-wrapper bg-[#110B15] p-4  space-y-4">
              <div className="w-full flex items-center justify-between">
                <h3 className="text-xl md:text-2xl x:text-3xl font-bold">
                  Cloud
                </h3>
                <FiCheckCircle className="text-[#DC00F9]" size={24} />
              </div>

              <ul className="space-y-1 list-disc pl-4">
                <li>Amazon Web Services</li>
                <li>Google Cloud Platform</li>
                <li>Microsoft Azure</li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-3">
            <div className="w-full gradient-border-wrapper bg-[#110B15] p-4  space-y-4">
              <div className="w-full flex items-center justify-between">
                <h3 className="text-xl md:text-2xl x:text-3xl font-bold">
                  Frameworks
                </h3>
                <FiCheckCircle className="text-[#DC00F9]" size={24} />
              </div>

              <ul className="space-y-1 list-disc pl-4">
                <li>Tensorflow/Jax/Keras</li>
                <li>CoreML, Microsoft Cognitive toolkit</li>
                <li>ONNX</li>
              </ul>
            </div>
            <div className="w-full gradient-border-wrapper bg-[#110B15] p-4 space-y-4">
              <div className="w-full flex items-center justify-between">
                <h3 className="text-xl md:text-2xl x:text-3xl font-bold">
                  Concepts
                </h3>
                <FiCheckCircle className="text-[#DC00F9]" size={24} />
              </div>

              <ul className="space-y-1 list-disc pl-4">
                <li>Supervised / Unsupervised / Semi-supervised Learning</li>
                <li>Reinforcement Learning</li>
                <li>Few-Shot Learning</li>
                <li>Metric Learning</li>
                <li>Clustering</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TechStack;
