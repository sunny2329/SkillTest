import React from "react";
import { motion } from "framer-motion";
import profile from "../images/profile.jpg";
import { FaUserEdit } from "react-icons/fa";
import { TiUserDeleteOutline } from "react-icons/ti";
import { CgFlag } from 'react-icons/cg';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "./ui/alert-dialog";

function Tile({ name, email, gpa, onClick }) {
    const handleDialogClick = (e) => {
        e.stopPropagation(); // Prevent dialog actions from triggering the tile click
    };

    const handleTileClick = (e) => {
        e.stopPropagation(); // Prevent dialog close from triggering tile click
        onClick();
    };

    return (
        <motion.div
            className="h-[20vh] dark:bg-slate-800 flex items-center justify-center mb-[1rem] mt-[1rem]"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onClick={handleTileClick} // Attach the modified click handler
        >
            <div
                className="bg-white bg-opacity-50 dark:bg-gray-700 relative shadow-xl overflow-hidden hover:shadow-2xl w-[25rem] group rounded-xl p-5 transition-all duration-500 transform h-[25vh] cursor-pointer"
            >
                <div className="flex items-center gap-4">
                    <motion.img
                        src={profile}
                        className="w-[4.5rem] h-[4.5rem] object-center object-cover rounded-full"
                        whileHover={{ scale: 1.15 }}
                        transition={{ duration: 0.5 }}
                    />
                    <div className="w-fit transition-all transform duration-500">
                        <h1 className="text-gray-600 dark:text-gray-200 font-bold">
                            {name}
                        </h1>
                        <p className="text-gray-900">GPA : {gpa}</p>
                        <motion.a
                            className="text-[0.5rem] font-bold text-gray-500 dark:text-gray-200 block overflow-hidden text-ellipsis whitespace-nowrap"
                            whileHover={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                            style={{ maxWidth: '150px' }}
                        >
                            {email}
                        </motion.a>
                    </div>
                </div>
                <motion.div
                    className="absolute flex justify-evenly left-4 text-xl bottom-0 items-center gap-2 p-1 bg-gray-600 dark:bg-gray-100 rounded-t-lg cursor-pointer text-white"
                >
                    <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <button
                                title="Delete Student"
                                onClick={handleDialogClick} // Prevent tile click
                            >
                                <TiUserDeleteOutline />
                            </button>
                        </AlertDialogTrigger>
                        <AlertDialogContent
                            onClick={handleDialogClick} // Prevent dialog content clicks from triggering tile click
                        >
                            <AlertDialogHeader>
                                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                <AlertDialogDescription>
                                    This action cannot be undone. This will permanently delete the
                                    account and remove data from our servers.
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel onClick={handleDialogClick}>Cancel</AlertDialogCancel>
                                <AlertDialogAction onClick={handleDialogClick}>Continue</AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>

                    <button title="Edit Student" onClick={handleDialogClick}>
                        <FaUserEdit />
                    </button>
                    <button title="Flag Student" onClick={handleDialogClick}>
                        <CgFlag />
                    </button>

                </motion.div>
            </div>
        </motion.div>
    );
}

export default Tile;
