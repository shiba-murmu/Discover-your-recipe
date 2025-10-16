import React from 'react'

function Signup_page() {
    return (
        <>
            <div className='bg-[#150424] min-h-screen md:grid md:grid-cols-2'>
                <div className='hidden md:block  min-h-screen bg-purple-700'>
                    {/* images */}

                </div>
                <div className='min-h-screen text-white flex justify-center items-center flex-col'>
                    {/* login page */}
                    <div>
                        <div className='text-5xl my-3'>Create an account</div>
                        <div>Already have an account?</div>
                    </div>
                    <div>
                        <form action="">
                            <div>

                                <input type="text" className='' placeholder='First name' />
                            </div>
                            <div>
                                <input type="text" placeholder='Last name' />
                            </div>
                            <div>
                                <input type="Email" placeholder='Email' />
                            </div>
                            <div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup_page