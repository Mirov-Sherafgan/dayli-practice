import React, {useEffect, useState} from 'react';
import illustration from "../../images/Illustration-1.png";

const GetStarted = () => {
    const [images, setImages] = useState([
        {id: 1, src: illustration, transform: 1, x: 0, y: 0}
    ])

    useEffect(() => {
        document.addEventListener('mousemove', (e) => {
            setImages(prev => prev.map(el => {
                const transform = el.transform;
                const x = (window.innerWidth - e.pageX * transform) / 100
                const y = (window.innerHeight - e.pageY * transform) / 100

                return {
                    ...el,
                    x,
                    y
                }
            }))
        })
    }, [])

    return (
        <section>
            <article>
                <h2>Want anything to be easy with <span>LaslesVPN.</span></h2>
                <h5>Provide a network for all your needs with ease and fun using LaslesVPN discover interesting
                    features from us.</h5>
                <button>Get Started</button>
            </article>

            <article>
                {images.map(image => <img
                    key={image.id}
                    src={image.src}
                    style={{transform: `translateX(${image.x}px) translateY(${image.y}px)`}}
                    alt="illustration"
                />)}
            </article>
        </section>
    );
};

export default GetStarted;