import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import reflectionsData from '../data/reflections.json';

const Reflections = () => {
  const [reflections, setReflections] = useState({});

  useEffect(() => {
    setReflections(reflectionsData);
  }, []);

  const dates = Object.keys(reflections).sort().reverse();

  return (
    <div className="max-w-2xl mx-auto px-6">
      <div className="mb-12">
        <h1 className="text-4xl font-light mb-6 tracking-tight">
          Daily Reflections
        </h1>
        <p className="text-stone text-lg leading-relaxed">
          These are daily reflections. I write them at the end of the day to genuinely 
          reflect and see what I could've done better. I am trying to live a more 
          data driven life (obviously live life as is, but you need some element of 
          information to figure out what you can do better).
        </p>
      </div>

      <div className="space-y-3">
        {dates.map((dateKey) => (
          <Link
            key={dateKey}
            to={`/reflections/${dateKey}`}
            className="text-stone hover:text-ink transition-colors duration-200 block"
          >
            {reflections[dateKey].date}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Reflections;