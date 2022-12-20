import Head from 'next/head';
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillLinkedin, AiFillInstagram, AiFillFacebook, AiFillGithub} from 'react-icons/ai'
import Image from 'next/image';
import myavtar from '../public/MyAvatar.png';
import design from '../public/design.png';
import code from '../public/code.png';
import blog from '../public/blog.png';
import {useState} from "react";


export default function Home() {
  const [darkMode, setDarkmode] = useState(false);
  return (
    <div className= {darkMode ? "dark" : ""}>
      <Head>
        <title>Sumit Panwar</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <section className=" min-h-screen">
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-2xl font-burtons dark:text-gray-200'>sumit panwar</h1>
            <ul className='flex item-center'>
              <li className='dark:text-white'>
                <BsFillMoonStarsFill onClick={() => setDarkmode(!darkMode)} className='cursor-pointer text-2xl' />
              </li>
              <li>
                <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' target='blank' href='https://drive.google.com/file/d/1zYTg7EEXwDs0zXrKKBUxiGlqVom1xAeE/view?usp=share_link'>Resume</a></li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Sumit Panwar</h2>
            <h3 className='text-5xl py-2 md:text-3xl  dark:text-gray-200'>Developer and Designer.</h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto  dark:text-gray-400'>
              I love creating new websites and web
              applications. I have also worked as a
              freelance graphic designer and content
              writer.
            </p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600  dark:text-gray-300 hover:text-6xl'>
            <a href='https://github.com/sumitpanwar10' target="_blank"><AiFillGithub /></a>
            <a href='https://linkedin.com/in/sumitpanwar10' target="_blank"><AiFillLinkedin /></a>        
            <a href='https://instagram.com/sumit_panwar10' target="_blank"><AiFillInstagram /></a>
            <a href='https://www.facebook.com/sumit.panwar.3701' target="_blank"><AiFillFacebook /></a>
          </div>
          <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-90 mt-20 overflow-hidden md:h-96 md:w-96'>
            <Image src={myavtar} objectfit="cover"/>
          </div>
        </section>
        <section>
          <div className='lg:flex gap-10 ju'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10  dark:bg-gray-800' >
              <div className='flex justify-center'>
                <Image src={code} width={100} height={100} />
              </div>
              <h3 className='text-lg font-medium pt-8 pb-8 dark:text-gray-200'>Programming</h3>
              <p className='py-2   max-w-xl mx-auto dark:text-gray-300'>
              As a developer, I worked on various web devlopment projects, available on GitHub.       
              </p>
              <h4 className='py-4 text-teal-600 dark:text-teal-400'>Programing languages I used</h4>
              <p className='text-gray-800 py-1 dark:text-gray-300'>Java</p>
              <p className='text-gray-800 py-1 dark:text-gray-300'>C/C++</p>
              <p className='text-gray-800 py-1 dark:text-gray-300'>HTML5</p>
              <p className='text-gray-800 py-1 dark:text-gray-300'>CSS</p>
              <p className='text-gray-800 py-1 dark:text-gray-300'>JavaScript</p>
              <p className='text-gray-800 py-1 dark:text-gray-300'>React.js</p>
              <p className='text-gray-800 py-1 dark:text-gray-300'>Node.js (Basic)</p>
              <p className='text-gray-800 py-1 dark:text-gray-300'>My SQL</p>
              <h4 className='py-4 text-teal-600 dark:text-teal-400'>Frameforks I used</h4>
              <p className='text-gray-800 py-1 dark:text-gray-300'>Tailwind</p>
              <p className='text-gray-800 py-1 dark:text-gray-300'>Next.js</p>
              <p className='text-gray-800 py-1 dark:text-gray-300'>Express.js (Basic)</p>
              <p className='text-gray-800 py-1 dark:text-gray-300'>Bootstrap</p>
              <p className='text-gray-800 py-1 dark:text-gray-300'>Bulma</p>

            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10  dark:bg-gray-800'>
              <div className='flex justify-center'>
                <Image src={design} width={100} height={100} />
              </div>
              <h3 className='text-lg font-medium pt-8 pb-8 dark:text-gray-200'>Designs</h3>
              <p className='py-2   max-w-xl mx-auto dark:text-gray-300'>
              Worked as a freelance graphic designer for 4 years. 
              <br></br>
              As the Design Lead at GDSC KIIT, I'm responsible for creating social media posts, designing posters for University events, and delegating projects among the Design team members.
              </p>
              <h4 className='py-4 text-teal-600 dark:text-teal-400'>Designs tools I used</h4>
              <p className='text-gray-800 py-1 dark:text-gray-300'>Adobe Illustrator</p>
              <p className='text-gray-800 py-1 dark:text-gray-300'>Adobe Photoshop</p>
              <p className='text-gray-800 py-1 dark:text-gray-300'>Figma</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10  dark:bg-gray-800'>
              <div className='flex justify-center'>
                <Image src={blog} width={100} height={100} />
              </div>
              <h3 className='text-lg font-medium pt-8 pb-8 dark:text-gray-200'>Blogging</h3>
              <p className='py-2   max-w-xl mx-auto dark:text-gray-300'>
              I worked as freelance content writer for 3 years.
              <br/><br/>
              I delivered SEO optimized articles to various clients, primarily covering tech-related articles on Android, Windows, MacOS, iOS, and Blogging.
              </p>
              <h4 className='py-4 text-teal-600 dark:text-teal-400'>Blogging Skills I used</h4>
              <p className='text-gray-800 py-1 dark:text-gray-300'>Wordpress</p>
              <p className='text-gray-800 py-1 dark:text-gray-300'>On-page SEO</p>
              <p className='text-gray-800 py-1 dark:text-gray-300'>Proofreading</p>
              <p className='text-gray-800 py-1 dark:text-gray-300'>Elementor</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
