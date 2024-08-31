import React from "react";
import aboutImage from "../assets/aboutImage.jpg";

export default function About() {
  return (
    <div className="py-20 px-4 max-w-6xl mx-auto">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-slate-700">
        About <span className="text-slate-500">Luxe</span>
        <span className="text-slate-700">Residences</span>
      </h1>

      <img
        src={aboutImage}
        alt="Real Estate"
        className="w-full h-auto mt-10 mb-8 rounded-lg shadow-lg sm:w-[700px] sm:h-[526px]"
      />

      <p className="mb-4 text-slate-700 text-md md:text-lg lg:text-xl">
        Welcome to <span className="text-slate-500 font-bold italic">Luxe</span>
        <span className="text-slate-700 font-bold italic">Residences</span>,
        your premier gateway to luxury real estate in the enchanting region of
        Dalmatia. We specialize in connecting discerning clients with the most
        exclusive and exquisite properties, offering a personalized, seamless
        experience in finding your dream home, investment property, or vacation
        retreat.
      </p>
      <p className="mb-4 text-slate-700 text-md md:text-lg lg:text-xl">
        Nestled in the hearth of{" "}
        <span className="text-slate-700 font-bold italic">Split</span>, the
        crown jewel of Dalmatia and the most popular city in the region,
        <span className="italic"> LuxeResidences</span> is ideally positioned to
        offer you the best that this stunning area has to offer. Split, with its
        rich history, breathtaking coastline, and vibrant cultural scene, serves
        as the perfect hub for our curated portfolio of luxury properties. From
        tranquil seaside villas along the Adriatic to sophisticated urban
        apartments in the heart of the city, we provide a wide range of options
        to suit your unique tastes and desires.
      </p>
      <p className="mb-4 text-slate-700 text-md md:text-lg lg:text-xl">
        Whether you're seeking a tranquil seaside villa, a sophisticated urban
        apartment, or an opulent estate,{" "}
        <span className="italic">LuxeResidences </span>
        is here to make your real estate dreams a reality. We are committed to
        providing exceptional service, expert advice, and a wide range of
        options tailored to meet your specific needs and desires.
      </p>
      <p className="mb-4 text-slate-700 text-md md:text-lg lg:text-xl">
        Join us at <span className="italic">LuxeResidences</span> and discover
        the finest properties in Split and beyond. <br />
        Your perfect residence is waiting.
      </p>
    </div>
  );
}
