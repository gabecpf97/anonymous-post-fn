import React, { useEffect, useState } from 'react'

interface props {
    fileName: string,
}

export const ShowMedia: React.FC<props> = ({ fileName }) => {
    const [srcUrl] = useState<string>(`http://localhost:5000/media/${fileName}`);
    const [mediaType] = useState<string>(fileName.substring(fileName.indexOf('.') + 1));
    const [isImage, setIsImage] = useState<boolean>(true);

    useEffect(() => {
        if ( mediaType === 'mp4' || mediaType === 'avi')
            setIsImage(false);
    }, [fileName, mediaType]);

    return (
        <div>
            {isImage &&
                <img src={srcUrl} crossOrigin='anonymous' 
                    alt={fileName.substring(fileName.indexOf('.'))} />
            }
            {!isImage &&
                <video controls>
                    <source src={srcUrl} type={`video/${mediaType}`} />
                </video>
            }
        </div>
    )
}