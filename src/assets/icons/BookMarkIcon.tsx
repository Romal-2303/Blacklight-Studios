import React from 'react';

interface BookMarkIconProps {
    fill?: string;
}

const BookMarkIcon: React.FC<BookMarkIconProps> = ({ fill = 'none' }) => {
    return (
        <svg fill="#000000" width="18px" height="18px" viewBox="0 0 24 24" id="bookmark" data-name="Line Color" xmlns="http://www.w3.org/2000/svg" className="icon line-color">
            <path
                id="primary"
                d="M12,17,5,21V4A1,1,0,0,1,6,3H18a1,1,0,0,1,1,1V21Z"
                style={{
                    fill: fill,
                    stroke: 'rgb(0, 0, 0)',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: 2
                }}
            />
        </svg>
    );
}

export default BookMarkIcon;
