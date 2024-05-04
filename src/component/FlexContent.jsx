import React from 'react';

export default function FlexContent({ section, info, para }) {
    return (
        <div className="px-6 py-7">
            <h2 className="text-3xl uppercase font-CormorantUnicase mb-3">{section}</h2>
            <div className="sm:flex xsm:flex-col md:flex md:flex-row gap-3">
                <div className="sm:w-full md:w-1/2 font-Inter uppercase text-l mb-4">
                    <h3>{info}</h3>
                </div>
                <div className="sm:w-full md:w-1/2">
                    <p className='font-Inter'>{para}</p>
                </div>
            </div>
        </div>
    );
}

