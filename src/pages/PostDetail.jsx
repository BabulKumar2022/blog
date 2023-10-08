import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import {BiEdit} from 'react-icons/bi'
import {MdDelete} from 'react-icons/md'

const PostDetail = () => {
  return (
    <div>
        <Navbar/>
            <div className="px-8 md:px-[200px] mt-8">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-black md:text-3xl"> Many users of Artificial Intelligence in day Life</h1>
                    <div className="flex items-center justify-center space-x-2">
                        <p><BiEdit/></p>
                        <p><MdDelete/></p>
                    </div>
                </div>
                <div className="flex items-center justify-between mt-2 md:mt-4">
                <p>@hasanhabbib</p>
                <div className="flex  space-x-2">
                    <p>05/10/2023</p>
                    <p>15:45</p>
                </div>
                </div>
                <img src="https://images.unsplash.com/photo-1682687982185-531d09ec56fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" alt="" className="w-full mx-auto"/>
                <p className="mx-auto mt-8">Lorem ipsum dolor sit amet consectetur Lorem Lorem ipsum dolor sit amet consectetur ipsum dolor sit amet consectetur adipisicing elit. Quisquam amet sequi esse aperiam, labore temporibus corporis? Voluptate necessitatibus magni blanditiis.</p>
                <div className="flex items-center mt-8 space-x-4 font-semibold">
                    <p>Category:</p>
                    <div className="flex justify-center items-center space-x-2">
                        <div className="bg-gray-300 rounded-lg px-3 py-1">Tech</div>
                        <div className="bg-gray-300 rounded-lg px-3 py-1">AI</div>
                    </div>
                </div>
                <div className="flex flex-col mt-4">
                    <h3 className="mt-6 mb-4 font-semibold">Comments:</h3>
                    <div className="px-2 py-2 mt-2 bg-gray-200 rounded-lg">
                        <div className="flex items-center justify-between">
                            <h3 className="font-bold text-gray600">@hasanhabbib</h3>
                            <div className="flex justify-center items-center space-x-3">
                                <p className="text-gray-500 text-sm">20/10/2023</p>
                                <p className="text-gray-500 text-sm">12:30</p>
                                <p><BiEdit/></p>
                                <p><MdDelete/></p>
                            </div>
                        </div>
                        <p className="px-4 mt-2">Nice info</p>
                    </div>
                    <div className="px-2 py-2 mt-2 bg-gray-200 rounded-lg">
                        <div className="flex items-center justify-between">
                            <h3 className="font-bold text-gray600">@hasanhabbib</h3>
                            <div className="flex justify-center items-center space-x-3">
                                <p className="text-gray-500 text-sm">20/10/2023</p>
                                <p className="text-gray-500 text-sm">12:30</p>
                                <p><BiEdit/></p>
                                <p><MdDelete/></p>
                            </div>
                        </div>
                        <p className="px-4 mt-2">Nice info</p>
                    </div>
                   
 
                </div>
            </div>
        <Footer/>
    </div>
  )
}

export default PostDetail;