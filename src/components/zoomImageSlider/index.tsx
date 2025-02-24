import React, { useEffect, useState } from 'react'

type propsType = {
    images?: any;
}

export default function ZoomImageSlider(props: propsType) {
    const { images = [] } = props
    const [cImage, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (images.length === 0) return;

        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(intervalId);
    }, [images.length]);

    if (images.length === 0) {
        return <div>No images available</div>;
    }

    return (
        <>
            <link rel="preload" as="image" href={images[0]} />
            <div className="w-full lg:w-[700px] slick__main__holder">
                {images.map((img: any, idx: any) => (
                    <img
                        key={idx}
                        src={img}
                        className={`${idx === cImage ? "active" : "inActive"} skew-y-12`}
                        alt={`image${idx + 1}`}
                    />
                ))}
            </div>
        </>
    );
}
