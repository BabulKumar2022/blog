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
            </form>
       </div>
       <Footer/>
    </div>
  )
}

export default CreatePost