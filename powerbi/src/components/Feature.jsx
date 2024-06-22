import { ChartBarSquareIcon ,PencilSquareIcon ,ArrowPathIcon,ClipboardDocumentListIcon,CircleStackIcon } from '@heroicons/react/20/solid'
import Table from './Table'

const features = [
 
  {
    name: 'Data Analysis and Visualization',
    description: 'connects to multiple data sources and offers diverse visualization options to create interactive reports and dashboards..',
    icon: ChartBarSquareIcon,
  },
 
  {
    name: 'Query Editor',
    description: 'Query Editor allows you to clean, transform, and shape data with tasks like filtering, sorting, merging, and splitting before loading it into the data model.',
    icon: PencilSquareIcon,
  },
  {
    name: 'Data Refresh and Scheduled Updates',
    description: ' supports automatic and scheduled data refreshes to ensure reports and dashboards reflect the latest information.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Interactive Reports and Dashboards',
    description: ' user-friendly interface for exploring data and sharing reports and dashboards through its service or by embedding them in other applications.',
    icon: ClipboardDocumentListIcon,
  },
  {
    name: 'Advanced Data Modeling',
    description: ' allows you to create advanced data models and apply data transformations for in-depth analysis and complex reports.',
    icon: CircleStackIcon,
  },
]

export default function Feature() {
  return (
    <section id='feature' className="bg-[#FEECAC] py-24 w-screen ">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative  isolate overflow-hidden bg-[#FEECAC] px-6 py-20 sm:rounded-3xl sm:px-10 sm:py-24 lg:py-24 xl:px-0">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-0">
            <div className="lg:row-start-2 lg:max-w-md">
              <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl font-JosefinSans">
              What will you learn in this Masterclass?
             
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-900 font-PTSerif">
                Step into a dynamic learning experience where theory meets practice.
               </p>
            </div>
            <img
              src="https://res.cloudinary.com/dtsuvx8dz/image/upload/v1710247579/coro0k4q9yixdpciynnc.gif"
              alt="Product screenshot"
              className="relative -z-20 rounded-xl  ring-1 ring-white/10 lg:row-span-4  lg:max-w-none"
              width={400}
              height={400}
            />
            
            <div className="max-w-xl lg:row-start-3 lg:mt-10 lg:max-w-md lg:border-t lg:border-white/10 lg:pt-4">
              <dl className="max-w-xl space-y-6 text-base leading-7 text-gray-700 lg:max-w-none ">
                {features.map((feature) => (
                  <div key={feature.name} className="relative">
                    <dt className="ml-9 inline-block font-semibold text-black font-JosefinSans">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-yellow-400 " aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline font-PTSerif">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
         
        </div>
              <div className='flex justify-center items-center'>
                <a
              href="#"
              className="rounded-md bg-yellow-500/70 drop-shadow-sm px-12 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
             <span className='drop-shadow-lg'>Download Syllabus </span> 
            </a>
              </div>

              <div>
                <Table/>
              </div>
      </div>
    </section>
  )
}
