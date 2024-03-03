import React from 'react';
import { ReactTyped } from "react-typed";
import donations from "../assets/donation.png";
import old from "../assets/old.png";
import ngo from "../assets/ngo.png";
import Volunteer from "../assets/volunteer.png";


const stories = [
  {
    title: 'Elderly Person\'s Journey',
    link: 'https://timesofindia.indiatimes.com/readersblog/untold-story/life-in-old-age-homes-9590/',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: old, // Replace with the actual image URL
  },
  {
    title: 'NGO Spotlight',
    link: 'https://timesofindia.indiatimes.com/readersblog/untold-story/life-in-old-age-homes-9590/',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: ngo, // Replace with the actual image URL
  },
  {
    title: 'Community Support',
    link: 'https://timesofindia.indiatimes.com/readersblog/untold-story/life-in-old-age-homes-9590/',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: Volunteer, // Replace with the actual image URL
  },
  // Add more stories as needed
];

const Home = ({ isLoggedIn }) => {
  return (
    <div className='flex flex-col justify-center  text-white text-3xl h-full bg-richblack-900'>
      <div className='flex flex-col md:flex-row lg:flex-wrap '>
        <div className='mr-8'>
          <img src={donations} width="500" height="500" />
        </div>
        <div className='ml-8 mb-20'>
          <h1 className='text-3xl font-bold  text-white mt-28 md:text-4xl mb-4    lg:text-4xl'>
            Donate{" "}
            <ReactTyped
              strings={["Commodities.", "Funds.", " time and efforts."]}
              typeSpeed={100}
              loop
              backSpeed={20}
              cursorChar="|"
              showCursor={true}
            />
          </h1>
          {isLoggedIn ? (
            <div>
              <p className='text-lg text-gray-300 mb-10'>You are logged in. Explore the exclusive content for members!</p>
              <a class=" inline-flex items-center justify-center rounded-xl bg-skin-200 py-3 px-6 font-dm text-base font-medium text-black shadow-md shadow-skin-200 transition-transform duration-200 ease-in-out hover:scale-[1.02]"
                href="#">
                Make a way for Elderly
              </a>
              {/* Add additional content for logged-in users */}
            </div>
          ) : (
            <div>
              <p className='text-lg text-gray-300'>Join our community and make a difference!</p>
              {/* Add additional content for non-logged-in users */}
              <p className='text-lg text-gray-300'>Log in to access exclusive features.</p>
              <a class="mt-8 inline-flex items-center justify-center rounded-xl bg-skin-200 py-3 px-6 font-dm text-base font-medium text-black shadow-md shadow-skin-200 transition-transform duration-200 ease-in-out hover:scale-[1.02]"
                href="#">
                Make a way for Elderly
              </a>
            </div>
          )}
        </div>

      </div>

      {/* Stories Section */}

      <div className=' bg-richblack-900 p-8 rounded shadow-lg '>
        <h2 className='text-3xl font-bold mb-6 bg-richblack-900'>Stories of Inspiration</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {/* Map through stories and display their information */}
          {stories.map((story, index) => (
            <div>
              <img
                src={story.image}
                alt={`Image for ${story.title}`}
                className='rounded-tl-md rounded-tr-md w-full h-40 object-cover'
              />
              <div key={index} className='bg-orange-100 p-6 -my-3 rounded-md shadow-md'>

                <a href={story.link}>

                  <h3 className='text-xl font-semibold my-1 text-black'>{story.title}</h3>
                </a>
                <p className='text-lg text-gray-700'>
                  {story.content}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
      {/*feartured topics*/}
      <div className=' bg-richblack-900 p-8 rounded shadow-lg'>
        <h2 className='text-3xl font-bold mb-6 bg-richblack-900'>Featured topics</h2>
        <div>
          {/*hero-card*/}

        </div>
      </div>

      {/*fundraising for*/}
      <div className=' bg-richblack-900 p-8 rounded shadow-lg'>
        <h2 className='text-3xl font-bold mb-6 bg-richblack-900'>Fundraise for anyone</h2>

      </div>
    </div>
  );
};

export default Home;
