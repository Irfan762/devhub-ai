import Navbar from "../../components/Navbar/Navbar"
import Sidebar from "../../components/Sidebar/Sidebar"
import Card from '../../components/Card/Card'

function Dashboard(){
    return(
        <>
        <Navbar/>
        <div>
            <Sidebar/>
            <main className="flex-1 p-6">
                <h1 className="text-3xl font-bold">Dashboard</h1>
            </main>
        </div>
        </>
    );
}

export default Dashboard;