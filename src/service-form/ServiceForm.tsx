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

    const filteredTypes = selectedCategory ? typesOptions[selectedCategory] : [] ; 

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormSubmitted(true);
    };
     
    return(
        <div className='form-container'>
            <h1>Service Form</h1>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor='first-name'>First Name</label>
                    <input type='text' id='first-name' name='firstName' value={firstName} onChange={(e) => setFirstName(e.target.value)} required/>
                    
                    <label htmlFor='last-name'>Last Name</label>
                    <input type='text' id='last-name' name='lastName' value={lastName} onChange={(e) => setLastName(e.target.value)} required/>
                
                    <DropDown options={categoryOptions} value={selectedCategory} onChange={handleCategoryChange} placeholder="Select a category"/>

                    {selectedCategory && (
                    <DropDown options={filteredTypes} value={selectedType} onChange={(e) => setSelectedType(e.target.value)} placeholder="Select a type"/>
                    )}
                </div>

                <button type="submit" disabled={!selectedCategory || !selectedType}>
                    Submit Selection
                </button>   
            </form>

            {formSubmitted && (
                <div>
                    <h2>Selection Summary</h2>
                    <p>Name: {firstName} {lastName}</p>
                    <p>
                        <strong>Category:</strong> {selectedCategory}
                    </p>
                    <p>
                        <strong>Type:</strong> {selectedType}
                    </p>
                </div>
            )}
        </div>
    )

}

export default ServiceForm;