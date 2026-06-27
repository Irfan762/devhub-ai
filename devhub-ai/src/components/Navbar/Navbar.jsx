function Navbar(){
    return(
        <nav className="flex item-center justify-between h-16 px-6 bg-white shadow">
            <h1 className="text-2xl font-bold text-blue-600">DevHub AI</h1>
      
      <input
      type="text"
      placeholder="Search..."
      className="border rounded-lg px-3 py-2 w-80"
      />

    <div className="flex item-center gap-4">
    <button>🔔</button>
    <img
          src="https://i.pravatar.cc/40"
          alt="profile"
          className="w-10 h-10 rounded-full"
        />


    </div>



        </nav>
    )
}

export default Navbar;