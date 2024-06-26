import React from 'react'

const Rainbow = (WrappedComponent) => {
    const colours = ['red', 'green', 'blue', 'yellow','orange','pink'];
    const randomColour = colours[Math.floor(Math.random()*(colours.length-1))];
    const className = randomColour + '-text';

    return (props) => {
        return (
            <div className={className}>
                <WrappedComponent {...props} />
            </div>
        )
    }
}

export default Rainbow