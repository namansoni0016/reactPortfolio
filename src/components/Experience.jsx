import React from 'react';
import { EXPERIENCE } from '../constants';

const Experience = () => {
    return (
        <div className='borber-b border-neutral-800 pb-4'>
            <h1 className='my-20 text-center text-4xl'>Experience</h1>
            <div>
                {EXPERIENCE.map((expe, index) => (
                    <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                        <div className='w-full lg:w-1/4'>
                            <p className='mb-2 text-sm text-neutral-400'>{expe.year}</p>
                        </div>
                        <div className='w-full max-w-xl lg:w-3/4'>
                            <h6 className='mb-2 font-semibold'>
                                {expe.role} - <span className='text-sm text-purple-100'>{expe.company}</span>
                            </h6>
                            <p className='mb-4 text-neutral-400'>{expe.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experience