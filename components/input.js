export default function Input(...props) {
  console.log(props)
  console.log('input')
    return (
      <div className=" max-w-[300px] flex justify-center p-2 items-center">
        <input  {...props[0]}  type="text" className="input rounded-[10px] bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
      </div>
    )
  }