import { DocumentMinusIcon ,VideoCameraIcon ,ChatBubbleLeftRightIcon,UserGroupIcon } from '@heroicons/react/20/solid'

const features = [
 
  {
    name: 'Course Completion Certificate',
    description: 'Get yourself certified after completition of the course.',
    icon: DocumentMinusIcon,
  },
 
  {
    name: 'Class Recordings',
    description: 'Enjoy seamless, unlimited access to class recordings for hassle-free learning at your own pace.',
    icon: VideoCameraIcon,
  },
  {
    name: '24X7 chat support',
    description: 'Get unlimited chat support from our experts',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: 'Project Based Learning ',
    description: 'Learn the skills by developing different projects throughout the sessions.',
    icon: UserGroupIcon,
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
              Discover our 
                <br />
             exclusive feature!!
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-900 font-PTSerif">
                Step into a dynamic learning experience where theory meets practice.
               our dedicated team is committed to guiding you through any challenges you encounter, ensuring your success in mastering Power BI</p>
            </div>
            <img
              src="https://res.cloudinary.com/dtsuvx8dz/image/upload/v1710247579/coro0k4q9yixdpciynnc.gif"
              alt="Product screenshot"
              className="relative -z-20 rounded-xl  ring-1 ring-white/10 lg:row-span-4  lg:max-w-none"
              width={400}
              height={400}
            />
            
            <div className="max-w-xl lg:row-start-3 lg:mt-10 lg:max-w-md lg:border-t lg:border-white/10 lg:pt-4">
              <dl className="max-w-xl space-y-8 text-base leading-7 text-gray-700 lg:max-w-none ">
                {features.map((feature) => (
                  <div key={feature.name} className="relative">
                    <dt className="ml-9 inline-block font-semibold text-black font-JosefinSans">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-yellow-400 drop-shadow-sm" aria-hidden="true" />
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
      </div>
    </section>
  )
}
