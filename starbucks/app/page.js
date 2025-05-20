"use client";
import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  {
    src: "1.png",
    title: "CAFFÈ LATTE ,BREWED DIFFERENT",
    price: "$27",
    subtitle: "CAFFÈ LATTE",
    description:
      "Discover the all-new Caffè Latte — where bold espresso meets velvety steamed milk in a perfectly balanced blend. Rich, creamy, and effortlessly smooth, this classic with a modern twist is your go-to for comfort in a cup.Whether you like it hot or iced, customize it your way and make every sip your signature style.",
    bgColor: "bg-[#c7afa5]",
  },
  {
    src: "2.png",
    title: "STRAWBERRY MOCHA, A SWEET TWIST",
    price: "$50",
    subtitle: "STRAWBERRY MOCHA",
    description:
      "Meet the Strawberry Mocha – where rich, chocolaty espresso meets the fruity sweetness of strawberry, blended into a smooth, indulgent drink. It’s bold, it’s playful, and it’s unlike anything you’ve sipped before. Topped with whipped cream and a hint of berry drizzle, this one’s made to turn heads and treat taste buds.",
    bgColor: "bg-[#ffe6ea]",
  },
  {
    src: "3.png",
    title: "ESPRESSO, THE HEART OF COFFEE",
    price: "$25",
    subtitle: "ESPRESSO",
    description:
      "Say hello to the heart of every great coffee — the Espresso. Bold, intense, and expertly crafted, this shot of rich flavor delivers the ultimate coffee experience in its purest form. Whether you're starting your day or need a midday boost, our espresso is smooth, strong, and straight to the point",
    bgColor: "bg-[#ded2b5]",
  },
  {
    src: "4.png",
    title: "MATCHA LATTE ,PURE GREEN GOODNEST",
    price: "$25",
    subtitle: "MATCHA LATTE",
    description:
      "Experience the vibrant energy of our Matcha Latte — a smooth blend of finely ground Japanese green tea and creamy steamed milk. This refreshing and soothing drink delivers a natural boost with every sip, balancing rich umami flavors and gentle sweetness. Perfect for those who crave calm, focus, and a delicious twist on tradition.",
    bgColor: "bg-[#eff5b4]",
  },
];

export default function Home() {
  const slideRef = useRef(null);
  const [index, setIndex] = useState(1); 
  const [isAnimating, setIsAnimating] = useState(false);

  const extendedSlides = [
    products[products.length - 1],
    ...products,
    products[0],
  ];

  const gapSize = 50;
  const slideWidth = 360 + gapSize; 
  const transitionDuration = 700;

  const goToSlide = (newIndex) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIndex(newIndex);
  };

  const nextSlide = () => goToSlide(index + 1);
  const prevSlide = () => goToSlide(index - 1);

  const handleTransitionEnd = () => {
    setIsAnimating(false);

    if (!slideRef.current) return;

    if (index === 0) {
      
      slideRef.current.style.transition = "none";
      slideRef.current.style.transform = `translateX(-${products.length * slideWidth}px)`;

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIndex(products.length);
          slideRef.current.style.transition = `transform ${transitionDuration}ms ease-in-out`;
        });
      });
    } else if (index === products.length + 1) {
      
      slideRef.current.style.transition = "none";
      slideRef.current.style.transform = `translateX(-${slideWidth}px)`;

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIndex(1);
          slideRef.current.style.transition = `transform ${transitionDuration}ms ease-in-out`;
        });
      });
    }
  };

  useEffect(() => {
    if (!slideRef.current) return;
    if (index === 0 || index === products.length + 1) return;

    slideRef.current.style.transition = `transform ${transitionDuration}ms ease-in-out`;
    slideRef.current.style.transform = `translateX(-${index * slideWidth}px)`;
  }, [index]);

  return (
    <main className="h-screen w-full flex flex-col font-alberto overflow-hidden">
     
      <nav className="w-full flex items-center pl-10 py-4 bg-transparent absolute top-0 z-20">
        <div className="flex items-center space-x-10">
          <img src="/logo.png" alt="Logo" className="w-10 h-10" />
          <ul className="flex space-x-8 text-lg font-medium text-black">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Menu</a>
            </li>
          </ul>
        </div>
      </nav>

      <section
        className={`flex flex-1 transition-colors duration-700 ease-in-out ${
          products[(index - 1 + products.length) % products.length].bgColor
        }`}
      >
  
        <div className="w-1/2 relative flex flex-col justify-center px-20 text-black z-10">
          <h2 className="text-[3.5rem] font-semibold leading-tight mb-6">
            {products[(index - 1 + products.length) % products.length].title}
          </h2>
          <p className="text-2xl mb-4">
            {products[(index - 1 + products.length) % products.length].price}
          </p>
          <p className="text-base mb-6 max-w-md">
            {
              products[(index - 1 + products.length) % products.length]
                .description
            }
          </p>

          <div className="absolute bottom-16 flex gap-4 items-center">
            <button className="bg-green-700 text-white px-6 py-3 rounded-full font-medium hover:bg-green-800 w-fit">
              Add To Cart
            </button>
            <button
              onClick={prevSlide}
              className="w-10 h-10 bg-white text-black border border-black/20 rounded flex items-center justify-center hover:bg-gray-100 cursor-pointer"
              aria-label="Previous Slide"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 bg-white text-black border border-black/20 rounded flex items-center justify-center hover:bg-gray-100 cursor-pointer"
              aria-label="Next Slide"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

  
        <div className="w-1/2 relative overflow-hidden flex items-center">
          <div
            ref={slideRef}
            className="flex pl-50"
            style={{
              gap: `${gapSize}px`,
              transform: `translateX(-${index * slideWidth}px)`,
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {extendedSlides.map((item, idx) => (
              <div
                key={idx}
                className="w-[360px] flex-shrink-0 flex flex-col items-center transition-opacity duration-300"
              >
                <img
                  src={`/${item.src}`}
                  alt={item.title}
                  className="w-[360px] drop-shadow-2xl"
                />
                <figcaption className="mt-4 text-sm text-center text-black">
                  {item.subtitle}
                </figcaption>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
