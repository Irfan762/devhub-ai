import {Link} from "react-router-dom"

function Sidebar(){
    return (
        <aside className="w-64 h-screen bg-gray-800 text-white p-5">
            <h2 className="text-2xl font-bold mb-8">Menu</h2>

            <ul className="space-y-4">
                <li>
                    <Link to="/dashboard" className="hover:text-blue-400">Dashboard</Link>
                </li>

                <li>
                    <Link to="/feed" className="hover:text-blue-400">Feed</Link>
                </li>

                <li>
                    <Link to="/profile" className="hover:text-blue-400">Profile</Link>
                </li>

                <li>
                    <Link to="/ai-review" className="hover:text-blue-400">AI Review</Link>
                </li>

                <li>
                    <Link to="/resume-analyzer" className="hover:text-blue-400">Resume Analyzer</Link>
                </li>
                 <li>
          <Link to="/notifications" className="hover:text-blue-400">
            Notifications
          </Link>
        </li>

        <li>
          <Link to="/settings" className="hover:text-blue-400">
            Settings
          </Link>
        </li>

        <li>
          <button className="text-red-400 hover:text-red-600">
            Logout
          </button>
        </li>

            </ul>


        </aside>
    )
}

export default Sidebar;
