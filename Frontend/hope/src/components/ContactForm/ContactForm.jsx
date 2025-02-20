
export default function BibleStudyForm(){
    return (
      <div className="flex h-screen">
        {/* Left Side */}
        <div className="flex-1 flex items-center justify-center bg-gray-900">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white">Contact Us Today</h1>
            <p className="mt-2 text-gray-400">We value your inquiries and feedback</p>
          </div>
        </div>
  
        {/* Right Side */}
        <div className="flex-1 flex items-center justify-center bg-gray-50">
          <div className="w-full max-w-md p-8 space-y-6">
            <h2 className="text-3xl font-extrabold text-blue-600 text-center">Get In Touch Now</h2>
            <form className="mt-8 space-y-6">
              <div className="rounded-md shadow-sm space-y-4">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-300">First Name</label>
                  <input id="first-name" name="first-name" type="text" required
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Enter First Name" />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-300">Last Name</label>
                  <input id="last-name" name="last-name" type="text" required
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Enter Last Name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                  <input id="email" name="email" type="email" required
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="e.g xyz123@gmail.com/yahoo.com/hotmail.com" />
                </div>
                <div>
                  <label htmlFor="telephone" className="block text-sm font-medium text-gray-300">Telephone</label>
                  <input id="telephone" name="telephone" type="tel" required
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Enter Telephone Number" />
                </div>
                <div>
                  <label htmlFor="dob" className="block text-sm font-medium text-gray-300">Subject</label>
                  <input id="subject" name="subject" type="text" required
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Message here...." />
                </div>
              </div>
              <div>
                <button type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
  