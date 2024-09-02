import React from "react";
import { motion } from "framer-motion";
import profile from "../images/profile.jpg";

function BigTile({ name, email, gpa, address, gender, courses, age }) {
    return (
        <motion.div
            className="flex items-center justify-center p-3 dark:bg-gray-700 rounded-xl w-full"
            style={{ maxWidth: '1000px' }}
        >
            <div className="bg-white dark:bg-gray-800 relative shadow-lg rounded-xl p-4 md:p-6 lg:p-8 w-full"
                style={{ height: 'auto' }}
            >
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-6">
                    <motion.img
                        src={profile}
                        className="w-[6rem] h-[6rem] md:w-[8rem] md:h-[8rem] object-center cursor-pointer object-cover rounded-full"
                        whileHover={{ scale: 1.15 }}
                        transition={{ duration: 0.5 }}
                    />
                    <div className="text-center md:text-left">
                        <h1 className="text-gray-700 dark:text-gray-100 text-xl md:text-2xl font-bold">{name}</h1>
                        <p className="text-gray-500 dark:text-gray-300 text-md md:text-lg">GPA: {gpa}</p>
                        <motion.a
                            className="text-gray-600 dark:text-gray-400 text-sm md:text-md block overflow-hidden text-ellipsis whitespace-nowrap mt-2"
                            whileHover={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                            style={{ maxWidth: '300px' }}
                        >
                            {email}
                        </motion.a>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    <div className="bg-gray-200 dark:bg-gray-900 p-3 md:p-4 rounded-lg shadow-sm">
                        <h2 className="text-md md:text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">Address</h2>
                        <p className="text-gray-600 dark:text-gray-400 text-sm md:text-md">Street: {address.street}</p>
                        <p className="text-gray-600 dark:text-gray-400 text-sm md:text-md">City: {address.city}</p>
                        <p className="text-gray-600 dark:text-gray-400 text-sm md:text-md">ZIP: {address.zip}</p>
                        <p className="text-gray-600 dark:text-gray-400 text-sm md:text-md">Country: {address.country}</p>
                    </div>

                    <div className="bg-gray-200 dark:bg-gray-900 p-3 md:p-4 rounded-lg shadow-sm">
                        <h2 className="text-md md:text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">Additional Details</h2>
                        <p className="text-gray-600 dark:text-gray-400 text-sm md:text-md">Gender: {gender}</p>
                        <p className="text-gray-600 dark:text-gray-400 text-sm md:text-md">Age: {age}</p>
                        <p className="text-gray-600 dark:text-gray-400 text-sm md:text-md">Courses: {courses.join(', ')}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default BigTile;
