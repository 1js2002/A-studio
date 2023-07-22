import Head from "next/head";
import Header from "./components/Header";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import WhatWeDo from "./pages/WhatWeDo";
import Blog from "./pages/Blog";
import Project from "./pages/Project";
import Home from "./pages/Home";
import ClientLogo from "./components/ClientLogo";
import HappyClient from "./components/HappyClient";
import Subscribe from "./components/Subscribe";

export default function Page() {
  return (
    <div
      className="text-black h-screen
    overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20
     scrollbar-thumb-[#F7AB0A]/80"
    >
      <Head>
        <title>A+Studio</title>
      </Head>
      <Header />
      <section id="home" className="snap-start min-h-screen ">
        <Home />
      </section>

      <ClientLogo />

      <section id="whatwedo" className="snap-start">
        <WhatWeDo />
      </section>

      <section id="service" className="snap-start">
        <Service />
      </section>

      <HappyClient />

      {/* <section id="project" className='snap-start'>
        <Project/>
      </section>

      <section id="blog" className='snap-start'>
        <Blog/>
      </section> */}

      <Subscribe />

      <section id="contact" className="snap-start">
        <Contact />
      </section>
    </div>
  );
}
