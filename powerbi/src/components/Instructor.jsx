import React from 'react'
import { GridPattern } from './GridPattern'
import { SectionHeading } from './SectionHeading'


function TwitterIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 40 40" {...props}>
      <path d="M13.817 33.753c12.579 0 19.459-10.422 19.459-19.458 0-.297 0-.592-.02-.884a13.913 13.913 0 0 0 3.411-3.543 13.65 13.65 0 0 1-3.928 1.077 6.864 6.864 0 0 0 3.007-3.784 13.707 13.707 0 0 1-4.342 1.66 6.845 6.845 0 0 0-11.655 6.239A19.417 19.417 0 0 1 5.654 7.915a6.843 6.843 0 0 0 2.117 9.128 6.786 6.786 0 0 1-3.104-.853v.086a6.842 6.842 0 0 0 5.487 6.704 6.825 6.825 0 0 1-3.088.116 6.847 6.847 0 0 0 6.39 4.75A13.721 13.721 0 0 1 3.334 30.68a19.36 19.36 0 0 0 10.483 3.066" />
    </svg>
  )
}
function LinkdinIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 40 40" {...props}>
<path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
</svg>
  )
}
function YoutubeIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 40 40" {...props}>
<linearGradient id="PgB_UHa29h0TpFV_moJI9a_9a46bTk3awwI_gr1" x1="9.816" x2="41.246" y1="9.871" y2="41.301" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f44f5a"></stop><stop offset=".443" stop-color="#ee3d4a"></stop><stop offset="1" stop-color="#e52030"></stop></linearGradient><path fill="url(#PgB_UHa29h0TpFV_moJI9a_9a46bTk3awwI_gr1)" d="M45.012,34.56c-0.439,2.24-2.304,3.947-4.608,4.267C36.783,39.36,30.748,40,23.945,40	c-6.693,0-12.728-0.64-16.459-1.173c-2.304-0.32-4.17-2.027-4.608-4.267C2.439,32.107,2,28.48,2,24s0.439-8.107,0.878-10.56	c0.439-2.24,2.304-3.947,4.608-4.267C11.107,8.64,17.142,8,23.945,8s12.728,0.64,16.459,1.173c2.304,0.32,4.17,2.027,4.608,4.267	C45.451,15.893,46,19.52,46,24C45.89,28.48,45.451,32.107,45.012,34.56z"></path><path d="M32.352,22.44l-11.436-7.624c-0.577-0.385-1.314-0.421-1.925-0.093C18.38,15.05,18,15.683,18,16.376	v15.248c0,0.693,0.38,1.327,0.991,1.654c0.278,0.149,0.581,0.222,0.884,0.222c0.364,0,0.726-0.106,1.04-0.315l11.436-7.624	c0.523-0.349,0.835-0.932,0.835-1.56C33.187,23.372,32.874,22.789,32.352,22.44z" opacity=".05"></path><path d="M20.681,15.237l10.79,7.194c0.689,0.495,1.153,0.938,1.153,1.513c0,0.575-0.224,0.976-0.715,1.334	c-0.371,0.27-11.045,7.364-11.045,7.364c-0.901,0.604-2.364,0.476-2.364-1.499V16.744C18.5,14.739,20.084,14.839,20.681,15.237z" opacity=".07"></path><path fill="#fff" d="M19,31.568V16.433c0-0.743,0.828-1.187,1.447-0.774l11.352,7.568c0.553,0.368,0.553,1.18,0,1.549	l-11.352,7.568C19.828,32.755,19,32.312,19,31.568z"></path>
</svg>
  )
}
function Author() {
    
  return (
      <section
      id="author"
      aria-labelledby="author-title"
      className="relative scroll-mt-14 pb-3 pt-8 sm:scroll-mt-32 sm:pb-16 sm:pt-10 lg:pt-16  bg-[#ffffff] w-screen border-t-2"
    >
      <div className="absolute inset-x-0 bottom-0 top-0.5 text-slate-900/40 [mask-image:linear-gradient(transparent,white)] overflow-hidden rotate-180 ">
        <GridPattern x="50%" y="100%" />
      </div>
      <div className="relative mx-auto max-w-5xl pt-16 sm:px-6">
        <div className="bg-white/10 sm:bg-white drop-shadow-md pt-px sm:rounded-6xl rounded-3xl">
          <div className=" drop-shadow-md relative mx-auto -mt-16 h-44 w-44 overflow-hidden rounded-full bg-yellow-500 md:float-right md:h-64 md:w-64 md:[shape-outside:circle(40%)] lg:mr-20 lg:h-72 lg:w-72">
            <img
              className="absolute inset-0 h-full w-full object-cover "
              src='https://res.cloudinary.com/dtsuvx8dz/image/upload/v1707977098/ctohbqrxrmwziauyw1iz.jpg'
              alt=""
              sizes="(min-width: 1024px) 18rem, (min-width: 768px) 16rem, 11rem "
            />
          </div>
          <div className=" px-4 py-10 sm:px-10 sm:py-16 md:py-20 lg:px-20 lg:py-32 text-left">
            <SectionHeading className='text-black bg-[#FEECAC]   border-double border-4 border-black' number="5" id="author-title">
              Instructor
            </SectionHeading>
            <p className="mt-8 text-left font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-6xl ">
              <span className="block bg-clip-text text-transparent  bg-gradient-to-r from-yellow-400/70 via-yellow-500/70 to-yellow-200 drop-shadow-md">Satyajit Pattnaik –</span> Hey
              there, Im the Creator behind Microsoft Power BI Masters - 2024 Edition.
            </p>
            <p className="mt-4 text-lg text-left tracking-tight text-slate-700 [&>span]:font-medium">
              Certified Data Scientist & Tensorflow Certified Developer <br />
                  Number of students trained so far: <span>10000+</span> <br />
                                Average Trainer Score: <span>9+</span> <br />
                          
              <span>13+ years experience working in Data Analytics
                 and Data Sciences </span>across different industry verticals including telecom, cyber security, insurance, e-commerce etc.
                <span> Owner of more than 20+ data communities over the globe, and runs a small YouTube channel on my name having 65,000+ subscribers</span>
            </p>
            <div className="mt-8 flex  justify-evenly  items-center flex-row ">
            
               <a
                href="https://www.linkedin.com/in/satyajitpattnaik/"
                className=" sm:ml-16 inline-flex items-center text-base font-medium tracking-tight text-blue-400"
              >
                <LinkdinIcon className="h-10 w-14 fill-current " />
                <span className="sm:ml-4 pt-1 font-bold"> Linkedin</span>
             
              </a>
              <a
                href="https://www.youtube.com/c/SatyajitPattnaik"
                className=" sm:ml-16 inline-flex items-center text-base font-medium tracking-tight text-red-500"
              >
              <YoutubeIcon className="h-10 w-14 fill-current " />
                <span className="ml-1 sm:ml-4 pt-1 font-bold"> Youtube</span>
                
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Author