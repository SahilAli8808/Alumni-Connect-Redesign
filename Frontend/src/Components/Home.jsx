import React from 'react';
import graduationIllustration from '../assets/img/graduation_illustration.svg';
import connectingTeamsIllustration from '../assets/img/connecting_teams.svg';

function Home() {
  return (
    <div className="h-auto">
      <header className="bg-gray-400 text-white py-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Alumni Connect</h1>
          <p className="text-lg">Connect with your fellow alumni and stay updated with the latest news and events.</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row">
          {/* Content Section */}
          <section className="lg:w-1/7 lg:pr-8 mb-8">
        
          </section>
          <section className="lg:w-1/3 lg:pr-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome to Alumni Connect</h2>
            <p className="text-lg text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            {/* Add more content as needed */}
          </section>

          {/* Illustration Section */}
          <section className="lg:w-1/2">
            <div className="flex items-center justify-end">
              <img src={graduationIllustration} alt="Graduation Illustration" className="w-3/4" />
            </div>
          </section>
        </div>

        {/* Additional Sections */}
        {/* Add more sections and components as needed */}
      </main>
    </div>
  );
}

export default Home;
