import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import reflectionsData from '../data/reflections.json';

const ReflectionEntry = () => {
  const { date } = useParams();
  const [reflection, setReflection] = useState(null);

  useEffect(() => {
    if (reflectionsData[date]) {
      setReflection(reflectionsData[date]);
    }
  }, [date]);

  if (!reflection) {
    return (
      <div className="max-w-2xl mx-auto px-6">
        <div className="mb-8">
          <Link 
            to="/reflections" 
            className="mono text-slate hover:text-ink transition-colors duration-200"
          >
            ← Reflections
          </Link>
        </div>
        <h1 className="text-3xl font-serif mb-4">Reflection not found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-6">
      <div className="mb-8">
        <Link 
          to="/reflections" 
          className="mono text-slate hover:text-ink transition-colors duration-200"
        >
          ← Reflections
        </Link>
      </div>

      <article>
        <header className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-serif font-light tracking-tight leading-tight">
            {reflection.date}
          </h1>
        </header>

        <div className="prose prose-lg max-w-none">
          <p className="text-stone leading-relaxed text-lg">
            {reflection.content}
          </p>
        </div>
      </article>

      <div className="mt-16 pt-8 border-t border-mist/50">
        <Link 
          to="/reflections" 
          className="mono text-slate hover:text-ink transition-colors duration-200"
        >
          ← All Reflections
        </Link>
      </div>
    </div>
  );
};

export default ReflectionEntry;
