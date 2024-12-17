import React from 'react';
import { Link } from 'react-router-dom';
import MainCategories from '../components/MainCategories';
import FeaturedPosts from '../components/FeaturedPosts';

const Homepage = () => {
  return (
    <div className='mt-4 flex flex-col gap-4'>
      {/* BREADCRUMBS */}
      <div className='flex gap-4'>
        <Link to='/'>Home</Link>
        <span>•</span>
        <span className='text-blue-800'>Blogs and Aritcles</span>
      </div>
      {/* INTRODUCTION */}
      <div className='flex items-center justify-center'>
        {/* titles */}
        <div>
          <h1 className='text-gray-800 text-2xl md:text-5xl lg:text-6xl font-bold'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
            eveniet nesciunt iusto saepe quisquam minus
          </h1>
          <p className='mt-8 text-sm md:text-xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            quasi aperiam dolores dicta, quas laboriosam. Harum commodi qui quod
            iusto eos eaque, modi voluptas ipsa sapiente maiores placeat beatae
            dolorem.
          </p>
        </div>
        {/* animated button */}
        <Link to='write' className='relative hidden md:block'>
          <svg
            viewBox='0 0 200 200'
            width='200'
            height='200'
            className='text-lg tracking-widest animate-spin animation-duration'
          >
            <path
              id='circlePath'
              fill='none'
              d='M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0'
            />
            <text>
              <textPath href='#circlePath' startOffset='0%'>
                Write your story •
              </textPath>
              <textPath href='#circlePath' startOffset='50%'>
                Share your idea •
              </textPath>
            </text>
          </svg>
          <button className='bg-blue-800 rounded-full flex items-center justify-center absolute top-0 left-0 right-0 bottom-0 m-auto w-20 h-20'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              width='50'
              height='50'
              fill='none'
              stroke='white'
              strokeWidth='2'
            >
              <line x1='6' y1='18' x2='18' y2='6' />
              <polyline points='9 6 18 6 18 15' />
            </svg>
          </button>
        </Link>
      </div>
      {/* CATEGORIES */}
      <MainCategories />
      {/* FEATURED POSTS */}
      <FeaturedPosts />
      {/* POST LIST */}
    </div>
  );
};

export default Homepage;
