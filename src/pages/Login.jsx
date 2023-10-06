import { Link } from "react-router-dom"


const Login = () => {
  return (
    <>
        <div className="flex items-center justify-between px-6 md:px-[200px] py-4 bg-[#10f797]">
        <h1 className="text-lg font-extrabold"><Link to="/">Blog</Link> </h1>
        <h3><Link to="/register">Register</Link></h3>
        </div>
       <div className="w-full  flex justify-center items-center h-[70vh]">
        <div className="flex flex-col justify-center items-center space-x-4 w-[80%] md:w-[25%]">
            <h1 className="text-2xl font-bold text-left">Login to your account</h1>
            <input type="email" className="w-full mt-2 px-4 py-2 border-2 border-black outline-0" placeholder="Enter Your Email"/>
            <input type="password" className="w-full mt-2 px-4 py-2 border-2 border-black outline-0" placeholder="Enter Your password"/>
            <button className="w-full mt-2 px-4 py-4 text-lg font-bold text-white bg-black hover:bg-gray-500 rounded">Login</button>
            <div className="flex py-4 justify-center items-center space-x-4">
              <p>New Here?</p>
              <p><Link to='/register'>Register</Link></p>
            </div>
        </div>
      </div>
    </>
   
  )
}

export default Login