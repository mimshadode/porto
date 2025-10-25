'use client'

import Image from "next/image";
import { Archivo_Black } from "next/font/google";
import { useEffect, useRef, useState } from "react";

const archivo_b = Archivo_Black({
  subsets: ['latin'],
  weight: "400"
})

export default function Home() {
  const [cvOpen, setCvOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const animationTimerRef = useRef<NodeJS.Timeout | null>(null);

  const openCv = () => {
    if (animationTimerRef.current) {
      clearTimeout(animationTimerRef.current);
      animationTimerRef.current = null;
    }
    setCvOpen(true);
    requestAnimationFrame(() => setIsVisible(true));
  };

  const closeCv = () => {
    setIsVisible(false);
    animationTimerRef.current = setTimeout(() => {
      setCvOpen(false);
      animationTimerRef.current = null;
    }, 500);
  };

  useEffect(() => {
    return () => {
      if (animationTimerRef.current) {
        clearTimeout(animationTimerRef.current);
      }
    };
  }, []);

  return (
    <div className="overflow-x-hidden bg-gray-50">
      <section className="pt-12 bg-gray-50 sm:pt-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <p className="mt-5 text-5xl font-bold leading-tight text-gray-900 sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight archivo-black-regular bg-linear-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Mimshad <br/>
                <span className="relative inline-flex sm:inline">
                <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0"></span>
                <span className="relative text-black"> Portofolio </span>
                </span>
            </p>
            <div className="px-8 sm:items-center sm:justify-center sm:px-0 sm:space-x-10 sm:flex mt-9">
              <a
                href="#"
                title=""
                className="inline-flex items-center justify-center w-full px-2 py-2 mt-4 text-lg font-bold text-gray-900 transition-all duration-200 border-2 border-gray-400 sm:w-auto sm:mt-0 rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-900 focus:bg-gray-900 hover:text-white focus:text-white hover:border-gray-900 focus:border-gray-900"
                role="button"
                onClick={(event) => {
                  event.preventDefault();
                  openCv();
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-12" viewBox="0 0 200 200" xmlSpace="preserve"><path fill="#282828" d="M89.632 142.298c-1.1 0-2 .1-2-1v-13c0-3.7-3.8-7-8.2-7h-9.6v-4h9.5c6.6 0 12.2 5 12.2 11v13c.1 1.1-.8 1-1.9 1z"/><path fill="#282828" d="M119.532 143.298h-30.9c-.5 0-1-.2-1.4-.6l-20.3-20.3c-.4-.3-.6-.8-.6-1.4v-50.1c0-8.2 6.6-14.8 14.8-14.8h38.4c8.2 0 14.8 6.6 14.8 14.8v57.6c0 8.2-6.6 14.8-14.8 14.8zm-30.1-4h30.1c6 0 10.8-4.8 10.8-10.8v-57.6c0-6-4.8-10.8-10.8-10.8h-38.4c-6 0-10.8 4.8-10.8 10.8v49.3l19.1 19.1z"/><path fill="#282828" d="M115.732 83.598h-32c-1.1 0-2-.9-2-2s.9-2 2-2h32c1.1 0 2 .9 2 2s-.9 2-2 2zM115.732 95.598h-32c-1.1 0-2-.9-2-2s.9-2 2-2h32c1.1 0 2 .9 2 2s-.9 2-2 2zM115.732 107.598h-32c-1.1 0-2-.9-2-2s.9-2 2-2h32c1.1 0 2 .9 2 2s-.9 2-2 2z"/></svg>
                Curriculum Vitae 
              </a>
            </div>

            <p className="mt-8 text-base text-gray-500 font-inter">
              Hi, I’m a full-stacksss developer who loves designing clean interfaces and shipping performant web experiences.
            </p>
          </div>
        </div>

        <div className="pb-12 bg-white">
          <div className="relative">
            <div className="absolute inset-0 h-2/3 bg-gray-50" />
            <div className="relative mx-auto">
              <div className="lg:max-w-6xl lg:mx-auto">
                <Image
                  className="transform scale-80 rounded-xl"
                  src="/bg.jpg"
                  alt=""
                  width={1200}
                  height={800}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {cvOpen && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black/60 transition-opacity duration-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeCv}
        >
          <div
            className={`relative mx-4 w-full max-w-3xl rounded-2xl bg-white p-4 shadow-2xl transition-all duration-500 ${
              isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeCv}
              aria-label="Close CV preview"
              className="absolute right-4 top-4 rounded-full bg-black/70 px-2 py-1 text-sm font-semibold text-white transition hover:bg-black"
            >
              Close
            </button>
            <div className="mt-6">
              <Image
                src="/bg2.png"
                alt="Curriculum Vitae preview"
                width={1200}
                height={1700}
                className="w-full rounded-xl"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
