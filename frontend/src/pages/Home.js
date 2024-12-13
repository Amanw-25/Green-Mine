import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  // Refs for various sections
  const heroTextRef = useRef(null);
  const heroImgRef = useRef(null);
  const statsRef = useRef(null);
  const testimonialsRef = useRef(null);

  useEffect(() => {
    // Hero Section Animations
    gsap.fromTo(
      ".reveal-hero-text",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.5, ease: "power3.out" }
    );

    gsap.fromTo(
      ".reveal-hero-img",
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, delay: 0.4, ease: "power3.out" }
    );

    // Floating animation for hero image
    gsap.to(".reveal-hero-img", {
      y: 20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    // Stats counter animation
    const statsElements = document.querySelectorAll(".stat-number");
    statsElements.forEach((stat) => {
      const target = parseInt(stat.getAttribute("data-target"));
      gsap.to(stat, {
        innerHTML: target,
        duration: 2,
        snap: { innerHTML: 1 },
        scrollTrigger: {
          trigger: stat,
          start: "top 80%",
        },
      });
    });

    // Scroll animations for sections
    const sections = document.querySelectorAll(".reveal-section");
    sections.forEach((section, index) => {
      const direction = index % 2 === 0 ? -100 : 100;

      gsap.fromTo(
        section,
        { opacity: 0, x: direction },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
          },
        }
      );
    });

    // Testimonial cards stagger animation
    gsap.fromTo(
      ".testimonial-card",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".testimonials-section",
          start: "top 70%",
        },
      }
    );

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  // Stats data
  const stats = [
    { number: 500, label: "Mines Analyzed" },
    { number: 1000000, label: "Tons CO₂ Reduced" },
    { number: 200, label: "Companies Served" },
    { number: 50000, label: "Carbon Credits Generated" },
  ];

  // Testimonials data
  const testimonials = [
    {
      name: "Rajesh Kumar",
      position: "Mining Director, Coal India Ltd",
      content:
        "This platform has revolutionized how we approach carbon management. The insights provided are invaluable.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      position: "Environmental Officer, Adani Mining",
      content:
        "The carbon credit calculations and neutralization suggestions have helped us achieve our sustainability goals.",
      rating: 5,
    },
    {
      name: "Mike Wilson",
      position: "Sustainability Head, Global Mining Corp",
      content:
        "Exceptional platform for managing carbon footprints. The visualization tools are particularly helpful.",
      rating: 4,
    },
  ];

  <style></style>;
  return (
    <div className="flex min-h-[100vh] flex-col bg-[#fff]">
      {/* Hero Section */}
      <section className="relative flex min-h-[100vh] w-full max-w-[100vw] overflow-hidden mt-24">
        <div className="flex h-full min-h-[100vh] w-full place-content-center gap-6 p-[5%] max-xl:place-items-center max-lg:flex-col">
          <div className="flex flex-col place-content-center lg:mt-[-160px]">
            <div className="reveal-hero-text flex flex-wrap text-6xl font-semibold uppercase leading-[80px] max-lg:text-4xl max-md:leading-snug">
              <span>Empowering India's</span>
              <br />
              <span>Coal Industry</span>
            </div>
            <div className="reveal-hero-text text-xl text-slate-700 mt-2 max-w-[450px] p-2 pt-7 pb-7 max-lg:max-w-full">
              Our platform empowers mine operators to reduce carbon footprints,
              explore carbon-neutral strategies, calculate carbon credits, and
              lead the way to a sustainable future.
            </div>

            <div className="reveal-hero-text mt-4 flex place-items-center gap-4 overflow-hidden p-2">
              <a
                href="/estimate"
                className="bg-[#00F020] text-white text-lg font-semibold py-3 px-6 rounded-lg transition-all hover:bg-green-600 hover:shadow-lg"
              >
                Explore Carbon Solutions
              </a>
              <a
                href="/calculation"
                className="bg-white text-[#00F020] text-lg font-semibold py-3 px-6 rounded-lg transition-all hover:bg-green-600 border border-[#00F020] hover:shadow-lg"
              >
                View Demo
              </a>
            </div>
          </div>
          <div className="flex w-full max-w-[50%] place-content-center place-items-center overflow-hidden max-lg:max-w-[unset]">
            <div className="flex h-[430px] w-[430px] max-h-[430px] max-w-[430px] overflow-hidden rounded-full max-lg:h-[320px] max-lg:w-[320px] lg:mt-[-150px]">
              <img
                src="./assets/s1.jfif"
                alt="app"
                className="reveal-hero-img z-[1] h-full w-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="reveal-section bg-green-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
              >
                <div className="text-4xl font-bold text-green-600 mb-2">
                  <span className="stat-number" data-target={stat.number}>
                    0
                  </span>
                  +
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="reveal-section lg:mt-16">
        <h2 className="text-3xl font-bold text-center my-9">Features</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {/* Feature cards */}
          <div className="w-full sm:w-1/2 lg:w-1/4 p-4 flex flex-col items-center">
            <div className="bg-white shadow-lg rounded-full w-44 h-44 flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
              <img
                src="assets/nemission.svg"
                alt="Carbon Footprints"
                className="rounded-full w-28 h-28 object-cover"
              />
            </div>
            <h3 className="mt-4 text-center font-bold text-lg">
              Carbon Footprints
            </h3>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/4 p-4 flex flex-col items-center">
            <div className="bg-white shadow-lg rounded-full w-44 h-44 flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
              <img
                src="assets/nneutral.svg"
                alt="Carbon Neutralization"
                className="rounded-full w-32 h-32 object-cover"
              />
            </div>
            <h3 className="mt-4 text-center font-bold text-lg">
              Carbon Neutralization
            </h3>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/4 p-4 flex flex-col items-center">
            <div className="bg-white shadow-lg rounded-full w-44 h-44 flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
              <img
                src="assets/nvisual.svg"
                alt="Data Visualization"
                className="rounded-full w-32 h-32 object-cover"
              />
            </div>
            <h3 className="mt-4 text-center font-bold text-lg">
              Data Visualization
            </h3>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/4 p-4 flex flex-col items-center">
            <div className="bg-white shadow-lg rounded-full w-44 h-44 flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
              <img
                src="assets/ncredits.svg"
                alt="Carbon Credits"
                className="rounded-full w-24 h-24 object-cover"
              />
            </div>
            <h3 className="mt-4 text-center font-bold text-lg">
              Carbon Credits
            </h3>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        ref={testimonialsRef}
        className="testimonials-section bg-gray-50 py-16 mt-16"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-card bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="text-yellow-400 fill-current w-5 h-5"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{testimonial.content}</p>
                <div className="mt-4">
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Previous Work Section */}
      <section className="reveal-section py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="/assets/coal.jpg"
                alt="Case Study 1"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Coal India Limited</h3>
              <p className="text-gray-600">
                Reduced carbon emissions by 45% through our comprehensive
                solutions and strategic planning.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="/assets/dataviz.png"
                alt="Case Study 2"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Adani Mining</h3>
              <p className="text-gray-600">
                Implemented sustainable practices leading to 30% reduction in
                operational carbon footprint.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="/assets/estimate.jpg"
                alt="Case Study 3"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Tata Steel Mining</h3>
              <p className="text-gray-600">
                Generated 10,000+ carbon credits through innovative
                neutralization strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Carbon Credits Calculation */}
      <section className="relative flex w-full max-w-[100vw] flex-col overflow-hidden p-6 lg:mt-10">
        <div className="reveal-up flex min-h-[60vh] place-content-center place-items-center gap-[10%] max-lg:flex-col max-lg:gap-10">
          <div className="flex">
            <div className="h-[450px] w-[300px]">
              <img
                src="./assets/carbcredits.webp"
                alt="Carbon Credits"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
          <div className="mt-6 flex max-w-[450px] flex-col gap-4">
            <h3 className="text-4xl font-medium">Carbon Credits</h3>

            <div className="mt-4 flex flex-col gap-3">
              <h4 className="text-xl font-medium">
                <i className="bi bi-check-all !text-2xl"></i>
                Carbon Credits Estimation
              </h4>
              <span className="text-xl">
                Our system calculates the number of carbon credits you can
                generate based on Neutralization solutions.
              </span>
            </div>
            <div className="mt-4 flex flex-col gap-3">
              <h4 className="text-xl font-medium">
                <i className="bi bi-check-all !text-2xl"></i>
                Pricing Information
              </h4>
              <span className="text-xl">
                We provide an estimated market value for the generated carbon
                credits, helping you understand the financial benefits of your
                sustainability efforts.
              </span>
            </div>
          </div>
        </div>
      </section>

      <hr className="text-white min-w-screen"></hr>
      <div className="bg-gray-800">
        <Footer />
      </div>

      {/* Chatbot Button */}
      <a
        href="https://forknife.streamlit.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-all w-16 h-16 flex items-center justify-center"
      >
        <i
          className="fas fa-comment-alt text-white"
          style={{ fontSize: "30px" }}
        >
          💬
        </i>
      </a>
    </div>
  );
};

export default Home;
