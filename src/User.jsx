import React from 'react';

const User = ( {name} ) => {
    return (
        <p style={{textAlign: 'left'}}>
            {name || 'Botiwin Nay'}
        </p>
    );
}

export default User;