import React from "react";
import sateliteImg from "../../assets/satelite1.jpg";

const Rapidscat = () => {
  return (
    <>
      <section className="bg-primary text-white pb-12">
        <div className="container ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div data-aos="zoom-in">
              <img
                src={sateliteImg}
                alt=""
                className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover"
              />
            </div>
            <div className="space-y-3 xl:pr-36 p-4 border-r-2 border-b-2 border-r-sky-800 border-b-sky-800 ">
              
              <h1
                data-aos="fade-up"
                data-aos-delay="500"
                className="uppercase text-5xl"
              >
                How Asteroids Get Their Names
              </h1>
              <p data-aos="fade-up" data-aos-delay="700">
              The International Astronomical Union's (IAU's) Committee on Small Body Nomenclature is not very strict when it comes to naming asteroids. As a result, we have one giant space rock named Mr. Spock. It's actually a memorial for a cat, and not a tribute to the "Star Trek" character played by Leonard Nimoy. There's also a space rock named for the late rock musician Frank Zappa. There are more somber tributes, too, such as the seven asteroids named for the crew of the Space Shuttle Columbia killed in 2003.

Asteroids are also named for places and a variety of other things. (The IAU discourages naming asteroids for pets, so Mr. Spock stands alone).

Asteroids are also given a number, for example (99942) Apophis
              </p>
              <button
                data-aos="fade-up"
                data-aos-delay="900"
                className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200"
              >
                View All
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Rapidscat;
