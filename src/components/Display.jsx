import React, { useState, useEffect } from 'react';
import Tile from './Tile';
import { Skeleton } from "@/components/ui/skeleton"; // Make sure this path is correct

function Display({ students }) {
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Set loading state to true initially
        if (students.length === 0) {
            setIsLoading(true);
        } else {
            setIsLoading(false);
        }
    }, [students]);

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full p-4">
                {isLoading ? (
                    Array.from({ length: 10 }, (_, index) => (
                        <Tile key={index} isLoading={true} />
                    ))
                ) : (
                    students?.map((student) => (
                        <Tile
                            key={student.id}
                            name={student.name}
                            email={student.email}
                            gpa={student.gpa}
                            onClick={() => setSelectedStudent(student)}
                            isLoading={false}
                        />
                    ))
                )}
            </div>

            {/* Add your modal logic here */}
        </>
    );
}

export default Display;
