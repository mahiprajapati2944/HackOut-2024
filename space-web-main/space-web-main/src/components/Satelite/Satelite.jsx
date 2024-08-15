import React from "react";
import satelitImg from "../../assets/satelite2.jpg";

const Rapidscat = () => {
  return (
    <>
      <section className="bg-primary text-white py-20">
        <div className="container ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div className="space-y-3 xl:pr-36 p-4 border-l-2 border-b-2 border-l-sky-800 border-b-sky-800 ">
              
              <h1
                data-aos="fade-up"
                data-aos-delay="500"
                className="uppercase text-5xl"
              >
                Latest Count
              </h1>
              <p data-aos="fade-up" data-aos-delay="700">
              Most asteroids are irregularly shaped, though a few are nearly spherical, and they are often pitted or cratered. As they revolve around the Sun in elliptical orbits, the asteroids also rotate, sometimes quite erratically, tumbling as they go. More than 150 asteroids are known to have a small companion moon (some have two moons). There are also binary (double) asteroids, in which two rocky bodies of roughly equal size orbit each other, as well as triple asteroid systems.
              </p>
              <button
                data-aos="fade-up"
                data-aos-delay="900"
                className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200"
              >
                View All
              </button>
            </div>
            <div data-aos="zoom-in">
              <img
                src={satelitImg}
                alt=""
                className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Rapidscat;
