import React from 'react'
import Aside_navbar from './ui/aside_navbar'
import Playbar_footer from './ui/playbar_footer'
import Recent_section from './ui/recent_section'
import Rotation_section from './ui/rotation_section'
import Suggested_section from './ui/suggested_section'

const page = () => {
  return (
        <div className="grid grid-rows-3 grid-cols-6 h-full">
          <Aside_navbar/>

        <main className="col-span-5 row-span-3 overflow-auto">
          {/* <!--Profile  --> */}
          <header className="px-6 py-4 mb-6 bg-gray-600 flex items-center justify-between sticky top-0 z-10">
            <div className="flex items-center">
              <button className="h-8 w-8 bg-gray-500 rounded-full text-white flex mr-4 opacity-50 cursor-not-allowed">
                <svg className="h-5 w-5 m-auto" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M15.54 21.15L5.095 12.23 15.54 3.31l.65.76-9.555 8.16 9.555 8.16"></path>
                </svg>
              </button>
              
              <button className="h-8 w-8 bg-gray-500 rounded-full text-white flex">
                <svg className="h-5 w-5 m-auto" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M7.96 21.15l-.65-.76 9.555-8.16L7.31 4.07l.65-.76 10.445 8.92"></path>
                </svg>
              </button>
            </div>

            <div>
              <button className="text-xs text-white bg-gray-500 rounded-full p-px pr-3">
                <img
                  src="https://scontent-hkg4-1.xx.fbcdn.net/v/t1.0-1/p320x320/65515608_2532995250044876_5026016977987043328_n.jpg?_nc_cat=107&_nc_sid=0c64ff&_nc_ohc=o9OLXY2wcysAX9HP-OL&_nc_ht=scontent-hkg4-1.xx&_nc_tp=6&oh=3692e7babdda377f38099d7603d11f92&oe=5EAD96FA"
                  className="w-7 h-7 inline-block rounded-full mr-2"
                />
                Jedidiah Avelino
              </button>
            </div>
          </header>
          {/* <!-- End Profile --> */}

          {/* <!-- Recently Played Tracks --> */}
          <Recent_section/>
          {/* <!-- End Recents --> */}

          {/* <!-- Your Previously Played Tracks Different Genre --> */}
          <Rotation_section/>
          {/* <!-- End Previously --> */}

          {/* <!-- Made For You Based on playlist not listened too --> */}
          <Suggested_section/>
          {/* <!-- End Made For You --> */}

        </main>
        
        {/* <!-- Play Footer --> */}
        <Playbar_footer/>
        {/* <!-- Play Footer --> */}
    </div>
  )
}

export default page