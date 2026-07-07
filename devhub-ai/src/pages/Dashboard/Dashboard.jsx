import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Card from "../../components/Card/Card";

function Dashboard() {

  const dashboardData = [
    {
      title: "Posts",
      value: 25,
    },
    {
      title: "Projects",
      value: 10,
    },
    {
      title: "Messages",
      value: 8,
    },
    {
      title: "AI Reviews",
      value: 16,
    },
  ];

  return (
    <>
      <Navbar />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-6">
          <h1 className="text-3xl font-bold">Dashboard</h1>

          <div className="grid grid-cols-4 gap-6 mt-6">
            {dashboardData.map((item, index) => (
              <Card
                key={index}
                title={item.title}
                value={item.value}
              />
            ))}
          </div>
        </main>
      </div>
    </>
  );
}

export default Dashboard;