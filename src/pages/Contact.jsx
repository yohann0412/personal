import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-2xl mx-auto px-6">
      <div className="mb-12">
        <h1 className="text-4xl font-light mb-8 tracking-tight">
          Contact
        </h1>
        <p className="text-lg text-stone leading-relaxed">
          I'm always interested in thoughtful conversations about ideas, 
          collaboration, or just connecting with like-minded people.
        </p>
      </div>

      <div className="space-y-8">
        <div className="grid grid-cols-1 gap-6">
          <div className="flex justify-between items-center py-4 border-b border-mist/50">
            <span className="mono text-slate">Email</span>
            <a 
              href="mailto:hello@yourname.com" 
              className="text-ink hover:text-slate transition-colors duration-200"
            >
              hello@yourname.com
            </a>
          </div>
          
          <div className="flex justify-between items-center py-4 border-b border-mist/50">
            <span className="mono text-slate">Twitter</span>
            <a 
              href="https://twitter.com/yourhandle" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-ink hover:text-slate transition-colors duration-200"
            >
              @yourhandle
            </a>
          </div>
          
          <div className="flex justify-between items-center py-4 border-b border-mist/50">
            <span className="mono text-slate">LinkedIn</span>
            <a 
              href="https://linkedin.com/in/yourprofile" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-ink hover:text-slate transition-colors duration-200"
            >
              /in/yourprofile
            </a>
          </div>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-mist/50">
        <div className="bg-paper/50 p-6 border border-mist/30 rounded-sm">
          <p className="text-stone italic leading-relaxed text-sm">
            I read every message but please allow some time for a thoughtful response. 
            If you're reaching out about opportunities, I'm most interested in projects 
            that challenge conventional thinking and create meaningful impact.
          </p>
        </div>
      </div>

      <div className="mt-12">
        <div className="text-center">
          <p className="text-ash text-sm italic">
            Response time: Usually within a few days, sometimes longer 
            if I'm deep in a project or off exploring ideas offline.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
