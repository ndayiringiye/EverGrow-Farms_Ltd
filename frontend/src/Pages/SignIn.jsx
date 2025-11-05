

export const SignIn = () => {
  return (

     <div className="flex justify-center items-center">
                <div className="bg-[url(../public/Images/hero-image.png)]">
                    <div className="h-full items-center">
                        <h1>Create your account to access investor and partner features.</h1>
                    </div>
                </div>
                <div>
                    <form >
                        <section className="flex flex-col items-center">
                            <div>
                                <label>email</label>
                                <input type="email" id="email" placeholder="Type your email account here" required />
                            </div>
                            <div>
                                <label>password</label>
                                <input type="password" id="password" placeholder="provide password" required />
                            </div>
                            <div className="flex justify-between">
                                <a href="#" target="_blank"> add More</a>
                                <p>forgot Password</p>
                            </div>
                            <div>
                                <button type="submit">Register</button>
                            </div>
                            <div className="flex justify-center gap-x-6">
                                <div className="h-9 w-9 rounded-full border-2 border-gray/50">
                                    <img src="" alt="register with google account" />
                                </div>
                                <div className="h-9 w-9 rounded-full border-2 border-gray/50">
                                    <img src="" alt="register with linkedin" />
                                </div>
                                <div className="h-9 w-9 rounded-full border-2 border-gray/50">
                                    <img src="" alt="register with instagram " />
                                </div>
                            </div>
                            <div>
                                <p>if you don't have an account <a href="/register" target="_blank" >Register</a></p>
                            </div>
                        </section>
                    </form>
                </div>
            </div>
  )
}
