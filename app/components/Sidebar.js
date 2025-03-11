"use client";
import { useRouter } from "next/navigation";
import {
  FaTachometerAlt,
  FaCar,
  FaUserFriends,
  FaExclamationTriangle,
  FaCreditCard,
  FaUser,
} from "react-icons/fa";

const Sidebar = () => {
  const router = useRouter();

  const vendor = typeof window !== "undefined" ? JSON.parse(localStorage.getItem("vendor")) : null;

  // Extract email and vendorId from the parsed object
  const email = vendor ? vendor.email : null;
  const vendorId = vendor ? vendor.vendorId : null;

  console.log(email, vendorId);

  return (
    <div className="w-64 h-screen bg-white shadow-lg fixed left-0 top-0 z-50 border-r">
      <div className="px-6 py-5 text-gray-800 font-bold text-sm uppercase bg-gray-100 border-b">
        {email ? email : "FRONTENDRH@GMAIL.COM"}{" "}
        {/* Display email if available, else default email */}
      </div>

      <nav className="mt-3">
        <ul className="space-y-3 px-4">
          {/* Login or Show Email */}
          {vendor ? (
            // Show the vendor email if logged in
            <li
              className="flex items-center gap-3 px-4 py-3 text-gray-700 rounded-lg cursor-pointer transition-all duration-300 hover:text-blue-600 hover:bg-blue-100"
              onClick={() => router.push("/Vendor")}
            >
              <FaUser className="text-lg" />
              <span className="text-base font-medium">{email}</span>
            </li>
          ) : (
            // Show "Login" option if no vendor exists
            <li
              className="flex items-center gap-3 px-4 py-3 text-gray-700 rounded-lg cursor-pointer transition-all duration-300 hover:text-blue-600 hover:bg-blue-100"
              onClick={() => router.push("/Login")}
            >
              <FaTachometerAlt className="text-lg" />
              <span className="text-base font-medium">Login</span>
            </li>
          )}

          {/* Dashboard */}
          <li
            className="flex items-center gap-3 px-4 py-3 text-gray-700 rounded-lg cursor-pointer transition-all duration-300 hover:text-blue-600 hover:bg-blue-100"
            onClick={() => router.push("/")}
          >
            <FaTachometerAlt className="text-lg" />
            <span className="text-base font-medium">Dashboard</span>
          </li>

          {/* Bookings */}
          <li
            className="flex items-center gap-3 px-4 py-3 text-gray-700 rounded-lg cursor-pointer transition-all duration-300 hover:text-blue-600 hover:bg-blue-100"
            onClick={() => router.push("/Bookings")}
          >
            <FaCar className="text-lg" />
            <span className="text-base font-medium">Bookings</span>
          </li>

          {/* Cabs */}
          <li
            className="flex items-center gap-3 px-4 py-3 text-gray-700 rounded-lg cursor-pointer transition-all duration-300 hover:text-blue-600 hover:bg-blue-100"
            onClick={() => router.push("/Cabs")}
          >
            <FaCar className="text-lg" />
            <span className="text-base font-medium">Cabs</span>
          </li>

          {/* Drivers */}
          <li
            className="flex items-center gap-3 px-4 py-3 text-gray-700 rounded-lg cursor-pointer transition-all duration-300 hover:text-blue-600 hover:bg-blue-100"
            onClick={() => router.push("/Drivers")}
          >
            <FaUserFriends className="text-lg" />
            <span className="text-base font-medium">Drivers</span>
          </li>

          {/* Complaints */}
          <li
            className="flex items-center gap-3 px-4 py-3 text-gray-700 rounded-lg cursor-pointer transition-all duration-300 hover:text-blue-600 hover:bg-blue-100"
            onClick={() => router.push("/Complaints")}
          >
            <FaExclamationTriangle className="text-lg" />
            <span className="text-base font-medium">Complaints</span>
          </li>

          {/* Payments */}
          <li
            className="flex items-center gap-3 px-4 py-3 text-gray-700 rounded-lg cursor-pointer transition-all duration-300 hover:text-blue-600 hover:bg-blue-100"
            onClick={() => router.push("/Payments")}
          >
            <FaCreditCard className="text-lg" />
            <span className="text-base font-medium">Payments</span>
          </li>

          {/* Vendor */}
          <li
            className="flex items-center gap-3 px-4 py-3 text-gray-700 rounded-lg cursor-pointer transition-all duration-300 hover:text-blue-600 hover:bg-blue-100"
            onClick={() => router.push("/Vendor")}
          >
            <FaUser className="text-lg" />
            <span className="text-base font-medium">Vendor</span>
          </li>

          {/* Logout */}
          {vendor && (
            <li
              className="flex items-center gap-3 px-4 py-3 text-gray-700 rounded-lg cursor-pointer transition-all duration-300 hover:text-blue-600 hover:bg-blue-100"
              onClick={() => {
                localStorage.removeItem("vendor");
                router.push("/Login"); // Redirect to Login after logout
              }}
            >
              <FaTachometerAlt className="text-lg" />
              <span className="text-base font-medium">Logout</span>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
