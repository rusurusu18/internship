import React, { useState } from 'react'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const links = ['Home', 'About', 'Services', 'Contact']

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-indigo-600">MyBrand</div>
            <div className="hidden md:flex md:ml-8 space-x-6">
              {links.map((l) => (
                <a
                  key={l}
                  href="#"
                  className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  {l}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center">
            <button className="hidden md:inline-flex bg-indigo-600 text-white px-4 py-2 rounded-md text-sm">
              Sign in
            </button>

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden ml-3 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300"
              aria-label="Toggle menu"
            >
              {open ? (
                <svg className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1 bg-white">
          {links.map((l) => (
            <Link
              key={l}
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
            >
              {l}
            </Link>
          ))}
          <Link href="#" className="block mt-2 px-3 py-2 bg-indigo-600 text-white rounded-md text-center">
            Sign in
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar
