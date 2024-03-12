
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

export default function Form() {
  return (
    <section id='form' className="space-y-10 divide-y divide-gray-900/10 flex  justify-center items-center my-12">
  

      <div className="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3  max-w-7xl">
        <div className="px-4 sm:px-0">
          <h2 className="text-3xl font-bold leading-7 text-gray-900 Contact us">Contact us</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600 font-PTSerif">Get in touch with our team for personalized assistance and expert guidance.</p>
          <img
          
              src="https://res.cloudinary.com/dtsuvx8dz/image/upload/v1710252011/zybantnrdrtrqluh6qdr.gif"
              alt="Product screenshot"
              className="relative -z-20 rounded-xl  ring-1 ring-white/10 lg:row-span-4  lg:max-w-none"
              width={400}
              height={400}
            />
        </div>

        <form className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2" action="https://getform.io/f/a4568031-56fb-4e71-847f-c660e575443c" method="POST">
          <div className="px-4 py-6 sm:p-8">
            <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                 Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#FEECAC] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="number" className="block text-sm font-medium leading-6 text-gray-900">
                 Phone / Whatsapp.no
                </label>
                <div className="mt-2">
                  <input
                    type="Text"
                    name="Number"
                    id="Number"
                    autoComplete="Number"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#FEECAC] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:sm:col-span-3">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#FEECAC] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:sm:col-span-4">
                <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                  Country
                </label>
                <div className="mt-2">
                  <input
                      id="country"
                    name="country"
                    type="text"
                   autoComplete="country-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#FEECAC] sm:text-sm sm:leading-6"
                  />
                </div>                
              </div>
                {/* <div className="mt-2">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div> */}
 <div className="sm:col-span-7">
                <label htmlFor="Message" className="block text-sm font-medium leading-6 text-gray-900">
                  Message
                </label>
                <div className="mt-2">
                  <textarea
                  
                      id="Message"
                    name="Message"
                    type="text"
                   autoComplete="Message"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#FEECAC] sm:text-sm sm:leading-6"
                  />
                </div>                
              </div>
               

           

           
          

            
            </div>
          </div>
          <div className="flex items-center justify-start gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
            
            <button
              type="submit"
              className="rounded-md bg-yellow-500/70 drop-shadow-lg px-12 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

     
    </section>
  )
}
