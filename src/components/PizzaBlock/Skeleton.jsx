import React from "react";
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => {
    return (
        <ContentLoader className="pizza-block"
            speed={2}
            width={280}
            height={460}
            viewBox="0 0 280 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            {...props}
        >
            <circle cx="133" cy="142" r="109" /> 
            <rect x="191" y="292" rx="0" ry="0" width="5" height="0" /> 
            <rect x="0" y="384" rx="10" ry="10" width="98" height="39" /> 
            <rect x="114" y="381" rx="23" ry="23" width="146" height="39" /> 
            <rect x="198" y="436" rx="0" ry="0" width="0" height="1" /> 
            <rect x="0" y="279" rx="10" ry="10" width="260" height="24" /> 
            <rect x="0" y="319" rx="10" ry="10" width="258" height="49" />
        </ContentLoader>
    )
}

export default Skeleton;