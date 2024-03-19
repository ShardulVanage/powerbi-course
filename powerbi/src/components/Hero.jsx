import { ChevronRightIcon } from '@heroicons/react/20/solid'

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-white w-screen">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" strokeWidth={0} fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)" />
      </svg>
      <div className="mx-auto w-full justify-evenly items-center px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          {/* <img
            className="h-11"
            src="https://res.cloudinary.com/dtsuvx8dz/image/upload/v1706986565/hqatxpsjdg3zeql20jfe.png"
            alt="Your Company"
          /> */}
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <div className="inline-flex space-x-6">
          
               <span className="rounded-full bg-yellow-400/60 px-3 py-1 text-sm font-semibold leading-6 text-white ring-1 ring-inset ring-indigo-600/10">
            
                <a href='https://zepanalytics.com/' className='drop-shadow-lg'>Zep Analytics</a>  

              </span>
            
              
                <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
                      {/* Scroll down to Feature  Section  */}
                <a href="#feature" className='inline-flex items-center'>
                  What's new
                <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </a>  
              </span>
           
            </div>
          </div>
          
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl font-JosefinSans">
            Microsoft Power BI: A Complete Guide [2024 Edition]
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 font-PTSerif">
            Transform Raw Data into Powerful Insights! Join our expert-led Power BI course and learn to visualize, analyze, and leverage data like never before.
             From beginner basics to advanced techniques,
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="#pricing"
              className="rounded-md bg-yellow-500/70 drop-shadow-sm px-12 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
             <span className='drop-shadow-lg'>Buy now </span> 
            </a>
            <a href="https://zepanalytics.com/courses/microsoft-power-bi-a-complete-guide-2023-edition" className="text-sm font-semibold leading-6 text-gray-900">
              Learn more <span aria-hidden="true">→</span>
            </a>
            
          </div>
          
          
        </div>
        
        <div className="mx-auto mt-16 flex flex-col max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-2 justify-center items-center">
          
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none " >
            <div className="-m-2 lg:mt-48 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4 ">
              <img
                src="https://res.cloudinary.com/dtsuvx8dz/image/upload/v1710243146/lcm38yij9sp4n5utppsf.gif"
                alt="App screenshot"
                width={300}
                height={300}
                className=" rounded-md shadow-2xl  ring-1 ring-gray-900/10"
              />
            </div>
          </div>

        </div>

<div className='bg- flex  flex-col sm:flex-row  justify-center items-center py-2 pt-12 sm:pt-48'>
                <div className='bg-slate-500/10 p-2 py-8 rounded-xl m-2   '>
                        {/* <div className='grid grid-rows-2 grid-flow-col gap-4'>
                            {pcontent.map(pcontents =>(
                                <div  key={pcontents.url} className=' flex justify-start items-center bg-white/20 p-2 rounded-2xl sm:text-base text-xs py-3 '>
                                        <img src={pcontents.url} height={30} width={30} alt="pp" />
                                        <h1 className='sm:text-xl pl-4  text-xs'>{pcontents.text}</h1>
                                 </div>
                            ))}
                        </div> */}

                        <div className='flex flex-row justify-center items-center'>
                            <img src="https://res.cloudinary.com/dtsuvx8dz/image/upload/v1709556612/cnkb4zr9felsyt4mywhr.png" height={200} width={200} alt="" />
                             <div>
                            <h1 className='text-xl font-semibold pb-1'>Satyajit Pattnaik</h1>
                            <p className='text-sm'>Certified Data Scientist & <br /> Tensorflow Certified Developer</p>
                            </div>       
                        </div>  
                        <div className='flex flex-row  justify-between'>
                            <div className='bg-slate-200/90 py-8 px-2 flex flex-col w-1/2 justify-between items-center mx-1 rounded-3xl'>
                                <h1 className='text-4xl font-semibold'>30k+</h1>
                                <p className='text-center'>Linkedin Followers</p>
                            </div>
                            <div className='bg-slate-200/90 py-8 px-2 flex flex-col w-1/2 justify-between items-center mx-1 rounded-3xl'>
                                <h1 className='text-4xl font-semibold'>65k+</h1>
                                <p className='text-center'>Youtube subscribers</p>
                            </div>
                        </div>  

                </div>
                </div>
        
      </div>

    </div>
  )
}
