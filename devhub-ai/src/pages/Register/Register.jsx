import Navbar from "../../components/Navbar/Navbar";

function Register() {
    return (
        <>
            <Navbar />

            <div className="flex justify-center items-center h-screen">

                <div className="bg-white shadow-lg rounded-lg p-8 w-96">

                    <h1 className="text-3xl font-bold mb-6">
                        Register
                    </h1>

                    <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full border p-2 rounded mb-4"
                    />

                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full border p-2 rounded mb-4"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full border p-2 rounded mb-4"
                    />

                    <button className="w-full bg-blue-600 text-white py-2 rounded">
                        Register
                    </button>

                </div>

            </div>

        </>
    );
}

export default Register;