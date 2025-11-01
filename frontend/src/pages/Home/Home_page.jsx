import React from 'react'
import Container_one from './Containers/Container_1/Container_one'
import Container_two from './Containers/Container_2/Container_two'
import Container_three from './Containers/Container_3/Container_three'

function Home_page() {
    // Homepage container here : This will use the component from the different 
    // container from the containers directory.
    
  return (
   <>
        <div className='mt-17 md:mt-16 min-h-[100vh]'>
            {/* Dividing two container  */}
            <div id='container-1'>
                < Container_one />
            </div>
            <div id='container-2'>
                < Container_two />
            </div>
            <div id='container-3'>
                {/* < Container_three /> */}
                < Container_three />
            </div>
        </div>
   </>
  )
}

export default Home_page