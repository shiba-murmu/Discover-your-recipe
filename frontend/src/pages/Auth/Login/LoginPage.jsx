import React from 'react'

function LoginPage() {
  return (
    <>
        <div className='h-screen flex justify-center items-center bg-[var(--universal-dark-bg)]'>
           <div className='text-white bg-[var(--universal-dark-bg-2)] mx-5 p-10 rounded-lg flex flex-col gap-5'>
                <section>
                    <section>
                        {/* icons */}
                    </section>
                    <section>
                        <span>
                            Welcome Back
                        </span>
                    </section>
                    <section>
                        <span>
                            Don't have an account yet? Sign up
                        </span>
                    </section>
                </section>
                <section>
                    {/* For form use */}
                    <form action="">
                        <section>
                            <input type="email" placeholder="Email" />
                        </section>
                        <section>
                            <input type="password" placeholder="Password" />
                        </section>
                        <section>
                            <button>Login</button>
                        </section>
                    </form>
                </section>
                <section>
                    {/* Other options : use here */}
                </section>
           </div>
        </div>
    </>
  )
}

export default LoginPage