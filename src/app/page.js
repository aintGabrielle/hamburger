"use client"
import Image from 'next/image'
export default function Home() {
  const menu = document.getElementById('menu')
  const listStyle = 'sm:hover:scale-125 sm:duration-300 sm:transition-all'
  return (
    <main className='h-screen bg-gradient-to-t from-pink-300 to-sky-300'>
      <nav className='w-full flex justify-between items-center sm:py-8 sm:px-5'>
        <h1>DOMINO</h1>
        <div id='menu' className='duration-300 transition-all absolute bg-white min-w-[80%] h-screen top-[-100%] flex items-center sm:items-start sm:h-fit sm:top-0 sm:min-w-0 sm:static sm:bg-transparent'>
          <ul className='flex flex-col space-y-8 sm:space-y-0 sm:space-x-8 text-xl sm:flex-row'>
            <li className={listStyle}><a href='#'>Community</a></li>
            <li className={listStyle}><a href='#'>Projects</a></li>
            <li className={listStyle}><a href='#'>Career</a></li>
          </ul>
        </div>
        <div>
          <h1 className='text-5xl sm:hidden' onClick={() => {
            menu.classList.toggle('top-[0%]')
          }}>=</h1> 
        </div>
      </nav>
      <section>
        <span>Hello World</span>
      </section>
    </main>
  )
}
