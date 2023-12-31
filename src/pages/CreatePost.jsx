import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const CreatePost = () => {
  return (
    <div>
       <Navbar/>
       <div className="px-6 md:px-[200px] mt-8">
        <h1 className="font-bold md:text-2xl mt-8">Create a Post</h1>
            <form className="w-full flex flex-col space-y-4 md:space-y-8">
                <input type="text" placeholder="Enter Post Title" className="px-4 py-2 outline-none"/> 
                <input type="file"  className="px-4 py-2 "/>
                <div className="flex flex-col">
                  <div className="flex items-center space-x-4 md:space-x-8">
                    <input type="text" className="px-4 py-2 outline-none" placeholder="enter post category" />
                    <div className="bg-black text-white px-4 py-2 font-semibold cursor-pointer">Add</div>
                  </div>
                  <div className="flex px-4 mt-3">
                    <div className="flex justify-center items-center space-x-2 mr-4 bg-gray-200 px-2 py-1 rounded-md:">
                      <p>Tech</p>
                    </div>
                    <div className="flex justify-center items-center space-x-2 mr-4 bg-gray-200 px-2 py-1 rounded-md:">
                      <p>Tech</p>
                    </div>

                  </div>
                </div>
            </form>
       </div>
       <Footer/>
    </div>
  )
}

export default CreatePost