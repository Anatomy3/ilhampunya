// pages/Page.tsx
import Banner from "@/app/MenuLandingPage/Banner";
import Events from "@/app/MenuLandingPage/Events";
import React from 'react';
import ManfaatSection from "./MenuLandingPage/Manfaat";
import TestimonialsSection from "./MenuLandingPage/Testimoni";
import Map from "./MenuLandingPage/Map/Map";
import JoinSection from "./MenuLandingPage/join";




export default function Home() {
  return (
    <>
      <Banner/>
      <section>
        <ManfaatSection/>
      </section>
      <section>
        <Map/>
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
