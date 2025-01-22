import React, { useState } from 'react';
import DropDown from '../drop-down/DropDown';
import { categoryOptions, typesOptions } from '../utils/dropDownOptions';

const ServiceForm: React.FC = () => {
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [selectedCategory, setSelectedCategory] = useState<string>('');
    const [selectedType, setSelectedType] = useState<string>('');
    const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

    const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCategory(event.target.value);
        setSelectedType('');
    }

    const filteredTypes = selectedCategory ? typesOptions[selectedCategory] : [];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormSubmitted(true);
    };

    return (
        <div className='max-w-md mx-auto p-8 bg-white rounded-lg shadow-lg border border-gray-200'>
            <h1 className='text-2xl font-bold text-center text-blue-600 mb-6'>Service Form</h1>
            <form onSubmit={handleSubmit} className='space-y-4'>
                <div>
                    <label htmlFor='first-name' className='block text-gray-700 font-medium'>First Name</label>
                    <input
                        type='text'
                        id='first-name'
                        name='firstName'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                        className='block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                    />
                </div>

                <div>
                    <label htmlFor='last-name' className='block text-gray-700 font-medium'>Last Name</label>
                    <input
                        type='text'
                        id='last-name'
                        name='lastName'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                        className='block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                    />
                </div>

                <DropDown
                    options={categoryOptions}
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                    placeholder="Select a category"
                />

                {selectedCategory && (
                    <DropDown
                        options={filteredTypes}
                        value={selectedType}
                        onChange={(e) => setSelectedType(e.target.value)}
                        placeholder="Select a type"
                    />
                )}

                <button
                    type="submit"
                    disabled={!selectedCategory || !selectedType}
                    className={`w-full py-3 rounded-md text-white font-semibold transition-colors duration-200 ease-in-out 
                        ${!selectedCategory || !selectedType ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
                >
                    Submit Selection
                </button>
            </form>

            {formSubmitted && (
                <div className='mt-6 p-4 border border-gray-300 rounded-md shadow-sm bg-gray-50'>
                    <h2 className='text-xl font-semibold mb-2'>Selection Summary</h2>
                    <p>Name: <span className='font-medium'>{firstName} {lastName}</span></p>
                    <p>
                        <strong className='font-medium'>Category:</strong> {selectedCategory}
                    </p>
                    <p>
                        <strong className='font-medium'>Type:</strong> {selectedType}
                    </p>
                </div>
            )}
        </div>
    );
}

export default ServiceForm;
