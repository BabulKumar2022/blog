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
            </div>
        <Footer/>
    </div>
  )
}

export default PostDetail;