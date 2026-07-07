import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";

function Profile(){
    return(
        <>
        
        <Navbar/>
        <div className="flex">
            <Sidebar/>
            <main>
                <h1>
                    MY profile


                </h1>
                <div className="bg-white rounded-lg shadow p-6 mt-6">
                    <h2 className="text-2xl font-semibold">
                        Irfan Tamboli
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Full Stack Developer
                    </p>

                    <p className="mt-5">
                        Welcome to your profile page
                    </p>

                </div>
            </main>
        </div>
        </>
    )
}

export default Profile;