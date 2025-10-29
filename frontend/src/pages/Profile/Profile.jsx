import React from 'react'
import profile from '../../assets/nullUser.png'
function Profile() {
    return (
        <>
            <div className='mt-17 md:mt-16 min-h-screen flex flex-col items-center justify-start'>
                <div className='h-40 md:h-80 w-full flex items-center justify-center gap-10  md:justify-start' >
                    <img src={profile} className='h-30 w-30 md:h-40 md:w-40 object-cover md:ml-50 border-3 border-green-600 dark:border-amber-50 rounded-full ' alt="" />
                    <div className='hidden md:block'>
                        <h1 className='text-2xl font-extrabold'>Shiba Murmu</h1>
                        <h4>Posts  :  5</h4>
                    </div>
                </div>
                <div className='md:hidden mb-5 h-10 flex flex-col'>
                    <h1 className='text-xl font-extrabold'>Shiba Murmu</h1>
                    <h3 className='text-center'>Posts : 5</h3>
                </div>
                < UserPosts />
            </div>
        </>
    )
}

export default Profile;

function UserPosts() {
    // This function is used here to show user posts in grid format
    // The posts are hardcoded for demonstration purposes
    // In a real application, you would fetch this data from a server
    return (
        <>
            <div className='grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-4 p-2 md:p-4'>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30].map((item) => (
                    <img
                        key={item}
                        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        alt=""
                        className="h-30 w-30 md:h-60 md:w-64 rounded-md object-cover transform hover:scale-105 hover:shadow-lg cursor-pointer  transition-all duration-700 ease-in-out"
                    />
                ))}
            </div>

        </>
    )
}