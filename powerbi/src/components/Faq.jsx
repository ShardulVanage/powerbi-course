import Table from "./Table"

const faqs = [
  {
    question: "I don't have coding background or experience in IT as such how this will help me ?",
    answer:
      'Our beginner-friendly course welcomes learners from diverse backgrounds, with 30% coming from non-coding fields like mechanical, civil, commerce, arts, MBA, BCA, bio-tech, etc. Many graduates secure jobs and benefits after completion. Our Data Engineering Course provides ample support for job readiness.',
  },
  {
    question: 'What is the method of learning?',
    answer:
      "The course includes video tutorials and assignments. You'll find tutorial links and coding questions in each assignment. Teaching Assistants are available for support from 6 PM to 9 AM daily, with a live doubt session on Zoom from 8-9 PM. Submit your assignments for solutions.",
  },
  {
    question: 'Is this one time payment or monthly subscription ?',
    answer:
      "It's one time payment and you will get lifetime access to this course experience..",
  },
  {
    question: 'Do you have refund policy?',
    answer:
      'We do not have refund policy. Please visit our page for more details',
  },
 
  // More questions...
]

export default function Faq() {
  return (
    <div className="bg-[#FEECAC] w-screen">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-40">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <h2 className="text-6xl font-bold  tracking-tight  text-gray-900 font-JosefinSans">Frequently <br /> Asked  <br />Questions</h2>
            <p className="mt-4 text-base leading-7 text-gray-600 font-PTSerif">
              Can’t find the answer you’re looking for? Reach out to our{' '}
              <a href="#form" className="font-semibold text-yellow-500 hover:text-yellow-500/70 drop-shadow-lg scol">
                customer support
              </a>{' '}
              team.
            </p>
             <img
                src="https://res.cloudinary.com/dtsuvx8dz/image/upload/v1710261164/dtni5vdtqfzjgs2wwaxd.png"
                alt="App screenshot"
                width={300}
                height={300}
                className="  "
              />
          </div>
          <div className="mt-10 lg:col-span-7 lg:mt-0">
            <dl className="space-y-10">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="text-base font-semibold leading-7 text-gray-900 font-JosefinSans">{faq.question}</dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600 font-PTSerif">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
         <div className='flex justify-center items-center mt-10'>
                <a
              href="#"
              className="rounded-md bg-yellow-500/70 drop-shadow-sm px-12 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
             <span className='drop-shadow-lg'>Download Syllabus </span> 
            </a>
              </div>
              <Table/>
      </div>
       
    </div>
  )
}
