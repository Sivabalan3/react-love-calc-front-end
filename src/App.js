import React, { useState } from "react";
import smalllove from "./smalllove.jpg";
import largelove from "./largelove.jpg";
import Model from "./Model";

function App() {
  const [score, setScore] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const [quotes, setQuotes] = useState("");
  const radius = 16;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = circumference;
  const progress = score;
  const strokeDashoffset = circumference - (progress / 100) * circumference;
  const [names, setNames] = useState({ name1: "", name2: "" });

  const handleChange = (e) => {
    setNames({ ...names, [e.target.name]: e.target.value });
  };

  const calculateLove = (e) => {
    e.preventDefault();
    const { name1, name2 } = names;
    setIsOpen(!isOpen);
    if (
      name1.toLowerCase() === "sneka" ||
      name1.toLowerCase() === "snega" ||
      (name1.toLowerCase() === "sneaka" && name2.toLowerCase() === "jeeva") ||
      name2.toLowerCase() === "sivabalan" ||
      name2.toLowerCase() === "siva"
    ) {
      setScore(88.6);
      setQuotes(
        "உலகில் உள்ள எதையும் விட ஒருவரையொருவர் நேசி! உண்மையான அன்பின் சிறந்த உதாரணம் நீங்கள் !"
      );
      const totalLength = name1.length + name2.length;
      const commonCharsLength = [...new Set(name1)].filter((char) =>
        name2.includes(char)
      ).length;
    } else if (score >= 70) {
      const totalLength = name1.length + name2.length;
      const commonCharsLength = [...new Set(name1)].filter((char) =>
        name2.includes(char)
      ).length;
      const percentage = Math.round((commonCharsLength / totalLength) * 100);
      setScore(percentage);
      setQuotes(
        "ரோமியோ ஜூலியட் போல ஒருவரையொருவர் நேசிக்கவும். உங்கள் காதலில் போலியான விஷயங்கள் எதுவும் இல்லை !"
      );
    } else if (score >= 40) {
      const totalLength = name1.length + name2.length;
      const commonCharsLength = [...new Set(name1)].filter((char) =>
        name2.includes(char)
      ).length;
      const percentage = Math.round((commonCharsLength / totalLength) * 100);
      setScore(percentage);
      setQuotes(
        "மண்ணையும் விதையையும் போல ஒருவரையொருவர் நேசிக்கவும். உங்கள் அன்பை நீங்கள் கவனித்துக் கொள்ள வேண்டும் !"
      );
    } else if (score <= 40) {
      const totalLength = name1.length + name2.length;
      const commonCharsLength = [...new Set(name1)].filter((char) =>
        name2.includes(char)
      ).length;
      const percentage = Math.round((commonCharsLength / totalLength) * 100);
      setScore(percentage);
      setQuotes(
        "பூமியையும் சந்திரனையும் போல ஒருவரையொருவர் நேசிக்கவும். நீங்கள் ஒருவருக்கொருவர் இல்லாமல் வாழ முடியாது !"
      );
    }
  };

  const reset = () => {
    setScore(null);
    setNames({ name1: "", name2: "" });
    setQuotes("");
    setIsOpen(!isOpen);
  };
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <body>
        <section className="min-h-screen flex items-stretch text-white ">
          <div
            className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center"
            style={{
              backgroundImage: `url(${largelove})`,
            }}
          >
            <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
            <div className="w-full px-24 z-10">
              <h1 className="text-5xl font-bold text-left tracking-wide text-pink-500">
                Find your best Partner
              </h1>
              <p className="text-3xl my-4">{quotes}</p>
            </div>
            <div className="bottom-0 absolute p-4 text-center right-0 left-0 flex justify-center space-x-4">
              <span>
                <svg
                  fill="#fff"
                  xmlns="http://www.w3.org/2000/svg"
                  strokeWidth="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </span>
              <span>
                <svg
                  fill="#fff"
                  xmlns="http://www.w3.org/2000/svg"
                  strokeWidth="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </span>
              <span>
                <svg
                  fill="#fff"
                  xmlns="http://www.w3.org/2000/svg"
                  strokeWidth="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </span>
            </div>
          </div>
          <div className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0 bg-pink-500">
            <div
              className="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center object-fill"
              style={{
                backgroundImage: `url(${smalllove})`,
              }}
            >
              <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
            </div>

            <div className="w-full py-6 z-20">
              <div>
                {score !== null && (
                  <div
                    className=" hidden sm:block relative size-40 my-6 mx-auto"
                    value={score}
                    max="100"
                  >
                    <svg
                      className="size-full"
                      strokeWidth="36"
                      height="36"
                      viewBox="0 0 36 36"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* <!-- Background Circle --> */}
                      <circle
                        cx="18"
                        cy="18"
                        r="16"
                        fill="none"
                        className="stroke-current text-gray-200 dark:text-neutral-700"
                        strokeWidth="3"
                      ></circle>
                      {/* <!-- Progress Circle inside a group with rotation --> */}
                      <g className="origin-center -rotate-90 transform">
                        <circle
                          cx="18"
                          cy="18"
                          r={radius}
                          fill="none"
                          className={`stroke-current text-indigo-500 dark:text-green-500`}
                          strokeWidth="3"
                          strokeDasharray={strokeDasharray}
                          strokeDashoffset={strokeDashoffset}
                        ></circle>
                      </g>
                    </svg>
                    {/* <!-- Percentage Text --> */}
                    <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                      <span className="text-center text-2xl font-bold text-gray-100 dark:text-white">
                        {score} %
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <form
                onSubmit={calculateLove}
                className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto"
              >
                <div className="pb-2 pt-4">
                  <div className="relative">
                    <input
                      required
                      type="text"
                      name="name1"
                      value={names.name1}
                      placeholder="Your Name"
                      onChange={handleChange}
                      id="email-address-icon"
                      className="text-indigo-500 text-[30px] h-[60px] bg-gray-50 border border-gray-300  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-blue-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                </div>
                <div className="pb-2 pt-4">
                  <div className="relative">
                    <input
                      required
                      type="text"
                      name="name2"
                      value={names.name2}
                      placeholder="Partner's Name"
                      onChange={handleChange}
                      id="email-address-icon"
                      className="text-indigo-500 text-[30px] h-[60px] bg-gray-50 border border-gray-300  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-blue-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="px-4 pb-2 pt-4">
                  {!score && (
                    <div>
                      <button className=" uppercase  w-full p-4 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none">
                        Calculate
                      </button>
                    </div>
                  )}
                </div>
                {score && (
                  <button
                    className="uppercase block w-full p-4 text-lg rounded-full bg-amber-500 hover:bg-indigo-600 focus:outline-none"
                    onClick={reset}
                  >
                    Reset
                  </button>
                )}

                <div className="p-4 text-center right-0 left-0 flex justify-center space-x-4 mt-16 lg:hidden ">
                  <a href="#">
                    <svg
                      fill="#fff"
                      xmlns="http://www.w3.org/2000/svg"
                      strokeWidth="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                  <a href="#">
                    <svg
                      fill="#fff"
                      xmlns="http://www.w3.org/2000/svg"
                      strokeWidth="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/_sivabalan_/" target="blank">
                    <svg
                      fill="#fff"
                      xmlns="http://www.w3.org/2000/svg"
                      strokeWidth="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </form>
            </div>
          </div>

          {/* <!-- Modal toggle --> */}
          <Model
            isOpen={isOpen}
            toggleModal={toggleModal}
            score={score}
            radius={radius}
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            quotes={quotes}
            reset={reset}
          />
        </section>
      </body>
    </>
  );
}

export default App;
