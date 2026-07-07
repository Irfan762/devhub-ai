import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";


function Feed(){
    return(
        <>
        <Navbar/>

        <div className="Flex">
            <Sidebar/>
            <main className="text-3xl font-bold mb-4">
               
                <h1>
                    Feed
                </h1>

                <div className="bg-white rounded-lg shadow p-6">
                    <h2 className="text-xl font-semibold">
                        NO post yet
                    </h2>

                    <p className="text-grat-500 mt-2">
                        Your Feed is Empty.start by creaeing your first post

                    </p>

                </div>

            </main>
        </div>
        
        </>
    )
}

export default Feed;