import Image from 'next/image';
import React from 'react';

interface EducationEntryProps {
    school: string;
    degree: string;
    location: string;
    photoPath?: string;
}

function EducationEntry({ school, degree, location, photoPath }: EducationEntryProps) {
    return (
        <div className="flex flex-col md:flex-row items-center p-4 mb-4">
            {photoPath && (
                <div className="mb-4 md:mb-0 md:mr-6">
                    <Image src={photoPath} alt="School Logo" width={75} height={75}/>
                </div>
            )}
            <div className="text-center md:text-left">
                <h3 className="text-xl font-semibold">{school}</h3>
                <p className="text-gray-600">{degree}</p>
                <p className="text-gray-500">{location}</p>
            </div>
        </div>
    );
}

export default EducationEntry;