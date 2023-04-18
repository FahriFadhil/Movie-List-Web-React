import React from 'react'

export default class Nav extends React.Component {
  render() {
    return (
      <nav className='bg-neutral-800 text-neutral-100 border-b border-neutral-800'>
        <div className="container mx-auto flex justify-between py-2">
          <a href="#" className='font-serif text-2xl'>Movie Dumper</a>
          <div className="flex gap-6 items-center">
            <a href="#" className='flex gap-1 items-center'>
              <svg className='w-5 h-5 stroke-neutral-100' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
              Search
            </a>
            <a href="#">
              Collection
            </a>
          </div>
        </div>
      </nav>
    )
  }
}