import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInput = e => {
        setInputValue(e.target.value);
    };

    const handleClick = e => {
        e.preventDefault();
        if (inputValue.trim()) setCategories(cats => [inputValue, ...cats]);
    };

    return (
        <form onSubmit={handleClick}>
            <input
                type="text"
                value={inputValue}
                onChange={e => handleInput(e)}
            />
            <button onClick={handleClick}>Agregar</button>
        </form>
    );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
