

const HomePosts = () => {
  return (
    <div className="w-full flex mt-8 space-x-2">
      <div className="w-[35%] h-[200px] flex justify-center items-center">
        <img src="https://images.unsplash.com/photo-1682687982185-531d09ec56fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" alt="" className=""/>
      </div>
      <div className="flex flex-col w-[65%]">
        <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
          Many users of Artificial Intelligence in day Life
        </h1>
        <div className="flex md-2 text-sm items-center justify-between font-semibold text-gray-500 space-x-4 md:md-4">
          <p>@hasanhabbib</p>
          <div className="flex  space-x-2">
            <p>05/10/2023</p>
            <p>15:45</p>
          </div>
        </div>
        <p className="text-sm md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi vero a porro dignissimos saepe consequuntur natus. Exercitationem nemo corporis fugiat.</p>

      </div>
    </div>
  )
}

export default HomePosts