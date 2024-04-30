'use client'
import React from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from 'framer-motion'
import Image, { StaticImageData } from 'next/image'

export const HeroParallax = ({
  products,
}: {
  products: {
    thumbnail: StaticImageData;
  }[]
}) => {
  const ref = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 }
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [100, -900]),
    springConfig
  )
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  )
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  )
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  )
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0, 200]),
    springConfig
  )
  return (
    <div
      ref={ref}
      className="h-full pb-52 overflow-hidden antialiased relative flex flex-col w-full"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="overflow-hidden"
      >
        <motion.div className="flex flex-row mb-20 space-x-20 ">
          {products.map((product, index) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={index}
            />
          ))}
        </motion.div>

      </motion.div>
    </div>
  )
}

export const Header = () => {
  return (
    <div className="container relative py-10 md:py-20 w-full">
    </div>
  )
}

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    thumbnail: StaticImageData;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      className="group/product h-96 w-[15rem] relative flex-shrink-0"
    >
      <Image
        src={product.thumbnail}
        height={1000}
        width={1000}
        className="object-cover object-left-top absolute h-full w-full inset-0 rounded-md"
        alt="Images"
      />
    </motion.div>
  );
};
