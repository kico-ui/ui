const NeumorphismButtonDemo = () => {
  return (
    <div className="flex h-[350px] w-full items-center justify-center space-x-9 bg-[#ebeef1]">
      <button className="bg-[#ebeef1] px-6 py-2 font-light tracking-wider text-[#000] shadow-[10px_10px_10px_-1px_rgba(10,99,169,0.15),-10px_-10px_10px_-1px_rgba(255,255,255,0.70)] hover:bg-gray-200">
        Button
      </button>

      <button className="flex size-5 items-center justify-center rounded-full bg-[#ebeef1] p-4 font-light tracking-wider text-[#000000] shadow-[10px_10px_10px_-1px_rgba(10,99,169,0.15),-10px_-10px_10px_-1px_rgba(255,255,255,0.70)] hover:bg-gray-200">
        1
      </button>

      <button className="shadow-inner-2xl rounded-full bg-[#ebeef1] px-6 py-2 font-light tracking-wider text-[#000] hover:bg-gray-200">
        Button
      </button>

      <button className="shadow-inner-2xl flex size-5 items-center justify-center rounded-[50%] bg-[#ebeef1] p-5 font-light tracking-wider text-[#000] hover:bg-gray-200">
        B
      </button>
    </div>
  )
}

export default NeumorphismButtonDemo
