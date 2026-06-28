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

                <div className="grid grid-cols-3 gap-6 mt-6">
                    <Card title="post" value="25"/>
                    <Card title="Project" value="10"/>
                    <Card title="Messages" value="8"/>


                </div>
            </main>
        </div>


        </>
    );
}

export default Dashboard;