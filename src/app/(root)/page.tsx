"use client"; 
import React, { useEffect, useState } from 'react';

export default function Home() {
  const [slide1, setSlide1] = useState(0);

  const nextSlide = (carouselDataLength: number) => {
    setSlide1((slide) => (slide === carouselDataLength - 1 ? 0 : slide + 1));
  };

  const prevSlide = (carouselDataLength: number) => {
    setSlide1((slide) => (slide === 0 ? carouselDataLength - 1 : slide - 1));
  };

  const carouselData1 = [
    { src: '/assets/images/research_img2.jpg', alt: 'Slide 1' },
    { src: '/assets/images/research_img3.jpg', alt: 'Slide 2' },
    { src: '/assets/images/univ.jpg', alt: 'Slide 3' },
    { src: '/assets/images/news_img1.jpg', alt: 'Slide 4' },
    { src: '/assets/images/spo.jpg', alt: 'Slide 5' },
  ];

  // Function to switch slides automatically after a timeout
  useEffect(() => {
    const interval1 = setInterval(() => {
      nextSlide(carouselData1.length);
    }, 7000);

    // Clear intervals when the component unmounts
    return () => {
      clearInterval(interval1);
    };
  }, []); 

  return (
    <section className="flex flex-col items-center relative max-lg:flex-col">
      {/* Image Carousel Section */}
      <div className="flex flex-col items-center mb-8" style={{ 
        // backgroundImage: 'url("/assets/images/textures.webp")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '100%',
        // height: '75vh', // Adjust as needed
      }}>
        <div className="relative mt-4 w-65vw mx-auto overflow-hidden flex items-center justify-center">
          {/* Previous Button */}
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
            onClick={() => prevSlide(carouselData1.length)}
          >
            <img src="/assets/images/next_arrow.png" alt="Previous" height={34} width={34} />
          </button>
          {/* Images */}
          {carouselData1.map((item, idx) => (
            <img
              key={idx}
              src={item.src}
              alt={item.alt}
              className={idx === slide1 ? 'block rounded-lg h-full mx-auto' : 'hidden'}
              style={{ maxHeight: '73vh', width: '100%' }} // Set maximum height to maintain aspect ratio
            />
          ))}
          {/* Next Button */}
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
            onClick={() => nextSlide(carouselData1.length)}
          >
            <img src="/assets/images/prev_arrow.png" alt="Next"  height={34} width={34}/>
          </button>
        </div>
      </div>
      <div className='flex flex-col gap-2 max-lg:hidden'>
          {/* New Flexbox Section */}
          <div className="flex items-center justify-center mt-8 " style={{ 
            // backgroundImage: 'url("/assets/images/textures.webp")',
            backgroundColor:'white',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            width: '100%',
            // height: '90vh', // Adjust as needed
          }}>
            <div className="flex flex-column gap-5">
              {/* First Set of Images */}
              <img
                src="/assets/images/1.jpeg"
                alt="First Image"
                className="block rounded-lg w-1/2 h-full"
                style={{ width: '40%',
                height: '35vh', }}
              />
              <img
                src="/assets/images/2.jpeg"
                alt="Second Image"
                className="block rounded-lg w-1/2 h-full"
                style={{ width: '40%',
                height: '35vh', }}
              />
              <img
                src="/assets/images/1.jpeg"
                alt="Third Image"
                className="block rounded-lg w-1/2 h-full"
                style={{ width: '40%',
                height: '35vh', }}
              />
            </div>  
          </div>
          <div className="flex items-center justify-center mb-8 mt-8" style={{ 
            // backgroundImage: 'url("/assets/images/textures.webp")',
            backgroundColor:'white',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            width: '100%',
            // height: '90vh', // Adjust as needed
          }}>
            <div className="md:flex flex-column gap-5">
              {/* Second Set of Images */}
              <img
                src="/assets/images/1.jpeg"
                alt="Extra Image 1"
                className="block rounded-lg w-1/2 h-full"
                style={{ width: '40%',
                height: '35vh', }}
              />
              <img
                src="/assets/images/2.jpeg"
                alt="Extra Image 2"
                className="block rounded-lg w-1/2 h-full"
                style={{ width: '40%',
                height: '35vh', }}
              />
              <img
                src="/assets/images/1.jpeg"
                alt="Extra Image 3"
                className="block rounded-lg w-1/2 h-full"
                style={{ width: '40%',
                height: '35vh', }}
              />
            </div>
          </div>
      </div>

    <div className='grid grid-cols-2 gap-2 items-center md:hidden'>
      <img
        src="/assets/images/1.jpeg"
        alt="Extra Image 1"
        className="block rounded-lg w-1/2 h-full"
        style={{ width: '100%',
        height: '15vh', }}
      />
      <img
        src="/assets/images/2.jpeg"
        alt="Extra Image 2"
        className="block rounded-lg w-1/2 h-full"
        style={{ width: '100%',
        height: '15vh', }}
      />
      <img
        src="/assets/images/1.jpeg"
        alt="Extra Image 3"
        className="block rounded-lg w-1/2 h-full"
        style={{ width: '100%',
        height: '15vh', }}
      />
      <img
        src="/assets/images/1.jpeg"
        alt="Extra Image 1"
        className="block rounded-lg w-1/2 h-full"
        style={{ width: '100%',
        height: '15vh', }}
      />
      <img
        src="/assets/images/2.jpeg"
        alt="Extra Image 2"
        className="block rounded-lg w-1/2 h-full"
        style={{ width: '100%',
        height: '15vh', }}
      />
      <img
        src="/assets/images/1.jpeg"
        alt="Extra Image 3"
        className="block rounded-lg w-1/2 h-full"
        style={{ width: '100%',
        height: '15vh', }}
      />
    </div>




      {/* Other Sections */}
      <div className="md:flex gap-5 bg-gray-300 mt-6 p-8 rounded-lg">
        <div className="bg-gray-500 text-white font-semibold flex flex-col items-center justify-center p-4 rounded-lg">
          <h1 className="text-lg mb-2">...inspiring</h1>
          <h2 className="text-lg mb-2">journey from</h2>
          <h3 className="text-lg mb-2">knowledge </h3>
          <h4 className="text-lg">to wisdom !!!</h4>
        </div>

        <div className="mt-5 font-semibold text-gray-700 flex flex-col items-center text-center">
          <img src={'/assets/design.png'} alt="design" width={200} height={50} />
          <h1 className="text-xl text-dark-1 mb-4">Vision</h1>
          <p className="text-lg text-gray-600 mb-4">"Our University is in pursuit of Art, Knowledge and Science to culminate Wisdom"</p>
          <hr className="w-1/2 mb-4"/>
          <h4 className="text-xl text-dark-1 mb-2">Mission</h4>
          <ul className="flex flex-col items-center">
            <li className="text-gray-600 mb-1">Creating global employability</li>

            <li className="text-gray-600 mb-1">Unleashing Potential of Students</li>
            <li className="text-gray-600 mb-1">Building Entrepreneurship</li>
            <li className="text-gray-600 mb-1">Emphasis on Promoting Innovation</li>
            <li className="text-gray-600 mb-1">Synthesis of Art, Design and Technology in Academics</li>
          </ul>
          <img src={'/assets/design1.png'} alt="design" width={200} height={50} className="mt-4" />
        </div>
      </div>
    </section>
  );
}
