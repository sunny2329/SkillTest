import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Tile from './Tile';
import BigTile from './BigTile';

function Display({ students }) {
    const [selectedStudent, setSelectedStudent] = useState(null);

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full p-4">
                {students?.map((student) => (
                    <Tile
                        key={student.id}
                        name={student.name}
                        email={student.email}
                        gpa={student.gpa}
                        onClick={() => setSelectedStudent(student)}
                    />
                ))}
            </div>

            <AnimatePresence>
                {selectedStudent && (
                    <>
                        {/* Dark Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            exit={{ opacity: 0 }}
                            style={{
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                zIndex: 10,
                            }}
                            onClick={() => setSelectedStudent(null)} // Close modal if clicking on overlay
                        />

                        {/* Centered Popup Modal */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            style={{
                                position: 'fixed',
                                top: '8%',
                                left: '10%',
                                transform: 'translate(-50%, -50%)',
                                padding: '15px',
                                backgroundColor: 'white',
                                borderRadius: '10px',
                                zIndex: 20,
                                width: '90%', // Full width with a max limit
                                maxWidth: '1000px',
                                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                overflow: 'auto', // Ensure content scrolls if too large
                            }}
                        >
                            <BigTile
                                name={selectedStudent.name}
                                email={selectedStudent.email}
                                gpa={selectedStudent.gpa}
                                address={selectedStudent.address}
                                gender={selectedStudent.gender}
                                courses={selectedStudent.courses}
                                age={selectedStudent.age}
                            />
                            <motion.button
                                onClick={() => setSelectedStudent(null)}
                                style={{
                                    position: 'absolute',
                                    top: '10px',
                                    right: '10px',
                                    background: 'none',
                                    border: 'none',
                                    fontSize: '20px',
                                    cursor: 'pointer',
                                }}
                            >
                                &times;
                            </motion.button>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}

export default Display;
