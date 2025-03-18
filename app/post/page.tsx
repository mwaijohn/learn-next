import { createPost } from "../lib/actions";

const Page = () => {
    return <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-2xl">
            <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
                Login
            </h2>
            <form action={createPost} >
                {/* Username Field */}
                <div className="mb-4">
                    <label className="block text-gray-600 text-sm mb-2" htmlFor="username">
                        Username
                    </label>
                    <input
                        type="text"
                        id="username"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter your username"
                        name="username"
                    />
                </div>

                {/* Password Field */}
                <div className="mb-4">
                    <label className="block text-gray-600 text-sm mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter your password"
                        name="password"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
                >
                    Login
                </button>
            </form>

            {/* Extra Links */}
            <div className="text-center mt-4">
                <a href="#" className="text-blue-500 text-sm hover:underline">
                    Forgot Password?
                </a>
            </div>
        </div>
    </div>;
}


export default Page