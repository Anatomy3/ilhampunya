import React from 'react';
import Banner from "@/app/MenuLandingPage/Banner";
import Events from "@/app/MenuLandingPage/Events";
import ManfaatSection from "./MenuLandingPage/Manfaat";
import TestimonialsSection from "./MenuLandingPage/Testimoni";
import dynamic from 'next/dynamic';
import JoinSection from "./MenuLandingPage/join";

// Import Map component dengan dynamic import untuk menghindari SSR
const MapComponent = dynamic(
  () => import('@/app/MenuLandingPage/Map/Map'),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      <Banner/>
      <section>
        <ManfaatSection/>
      </section>
      <section>
        <MapComponent/>
      </section>
      <section>
        <Events />
      </section>
      <section>
        <TestimonialsSection/>
      </section>
      <section>
        <JoinSection/>
      </section>
    </>
  );
}
