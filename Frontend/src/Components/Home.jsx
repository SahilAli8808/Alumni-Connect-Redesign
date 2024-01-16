function Home() {
    return (
      <>
        <div className="container mx-auto mt-8">
          <h1 className="text-3xl font-bold mb-4">Alumni Connections</h1>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Alumni Card 1 */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">John Doe</h2>
              <p className="text-gray-700 mb-4">Class of 2010</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-full">
                Connect
              </button>
            </div>
  
            {/* Alumni Card 2 */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">Jane Smith</h2>
              <p className="text-gray-700 mb-4">Class of 2015</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-full">
                Connect
              </button>
            </div>
  
            {/* Alumni Card 3 */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">Alex Johnson</h2>
              <p className="text-gray-700 mb-4">Class of 2020</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-full">
                Connect
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Home;
  