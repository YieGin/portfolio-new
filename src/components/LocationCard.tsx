"use client";
import createGlobe from "cobe";
import { MapPinIcon } from "lucide-react";
import * as React from "react";
import { useSpring } from "react-spring";
import { motion } from "framer-motion";

const LocationCard = () => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const pointerInteracting = React.useRef<number | null>(null);
  const pointerInteractionMovement = React.useRef(0);
  const fadeMask =
    "radial-gradient(circle at 50% 50%, rgb(0, 0, 0) 60%, rgb(0, 0, 0, 0) 70%)";

  const [{ r }, api] = useSpring(() => ({
    r: 0,
    config: {
      mass: 1,
      tension: 280,
      friction: 40,
      precision: 0.001,
    },
  }));

  React.useEffect(() => {
    let width = 0;

    const onResize = () => {
      if (canvasRef.current && (width = canvasRef.current.offsetWidth)) {
        window.addEventListener("resize", onResize);
      }
    };
    onResize();

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: -0.1,
      dark: 1,
      diffuse: 2,
      mapSamples: 36_000,
      mapBrightness: 2,
      baseColor: [0.8, 0.8, 0.8],
      markerColor: [181 / 255, 144 / 255, 236 / 255],
      glowColor: [0.5, 0.5, 0.5],
      markers: [{ location: [28.0339, 1.6596], size: 0.2 }],
      scale: 1.05,
      onRender: (state) => {
        state.phi = 4.5 + r.get();
        state.width = width * 2;
        state.height = width * 2;
      },
    });

    return () => {
      globe.destroy();
    };
  }, [r]);

  const itemVariants = {
    offscreen: { opacity: 0, x: -50 },
    onscreen: () => ({
      opacity: 1,
      x: 0,
      transition: {  duration: 0.5 },
    }),
  };

  return (
    <motion.div
      variants={itemVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.5 }}
      className="relative flex h-60 flex-col border-[1px] gap-6 overflow-hidden rounded-xl p-4 shadow-feature-card dark:shadow-feature-card-dark md:w-1/2 xl:w-[500px] lg:p-6"
    >
      <div className="flex gap-2">
        <MapPinIcon className="size-[18px]" />
        <h2 className="text-sm font-light">Algeria</h2>
      </div>
      <div className="absolute inset-x-0 bottom-[-150px] mx-auto aspect-square h-[388px] [@media(max-width:420px)]:bottom-[-140px] [@media(max-width:420px)]:h-[320px] [@media(min-width:768px)_and_(max-width:858px)]:h-[350px]">
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            placeItems: "center",
            placeContent: "center",
            overflow: "visible",
          }}
        >
          <div
            style={{
              width: "100%",
              aspectRatio: "1/1",
              maxWidth: 800,
              WebkitMaskImage: fadeMask,
              maskImage: fadeMask,
            }}
          >
            <canvas
              ref={canvasRef}
              onPointerDown={(e) => {
                pointerInteracting.current =
                  e.clientX - pointerInteractionMovement.current;
                canvasRef.current &&
                  (canvasRef.current.style.cursor = "grabbing");
              }}
              onPointerUp={() => {
                pointerInteracting.current = null;
                canvasRef.current && (canvasRef.current.style.cursor = "grab");
              }}
              onPointerOut={() => {
                pointerInteracting.current = null;
                canvasRef.current && (canvasRef.current.style.cursor = "grab");
              }}
              onMouseMove={(e) => {
                if (pointerInteracting.current !== null) {
                  const delta = e.clientX - pointerInteracting.current;
                  pointerInteractionMovement.current = delta;
                  api.start({
                    r: delta / 200,
                  });
                }
              }}
              onTouchMove={(e) => {
                if (pointerInteracting.current !== null && e.touches[0]) {
                  const delta =
                    e.touches[0].clientX - pointerInteracting.current;
                  pointerInteractionMovement.current = delta;
                  api.start({
                    r: delta / 100,
                  });
                }
              }}
              style={{
                width: "100%",
                height: "100%",
                contain: "layout paint size",
                cursor: "auto",
                userSelect: "none",
              }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LocationCard;
