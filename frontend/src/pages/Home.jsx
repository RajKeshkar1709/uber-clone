import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
      <div className="bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1658825831108-93088006330d?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D)]  h-screen pt-8 w-full flex justify-between flex-col bg-red-400">
        <img  className='w-16 ml-8' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxruoQ1vFN4VVE1Ca7H7_hJBx7PjmqTYFP6Y1ofPvChqp810R68PYx2O0X&s=10" alt="uber-image" />
        <div className="bg-white pb-7 py-4 px-4">
          <h2 className="text-3xl font-bold">Get started with uber</h2>
          <Link to='/user-login' className="flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5 ">Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Home
