import React from 'react';
import { TailSpin } from 'react-loader-spinner';

const Loader = () => {
    return(
        <div>
            <TailSpin width={70} height={70} color='#61FF00'/>
        </div>
    );
}

export default Loader;