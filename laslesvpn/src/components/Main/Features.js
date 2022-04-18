import React from 'react';
import illustration from "../../images/Illustration-2.png";
import success from "../../images/success.png";

const features = [
    {id: 1, text: 'Powerfull online protection.'},
    {id: 2, text: 'Internet without borders.'},
    {id: 3, text: 'Supercharged VPN'},
    {id: 4, text: 'No specific time limits.'},
]

const Features = () => {
    return (
        <div>
            <img src={illustration} alt="illustration"/>
            <article>
                <h2>We Provide Many<br/> Features You Can Use</h2>
                <p>You can explore the features that we provide with fun and have their own functions each
                    feature.</p>
                <ul>
                    {features.map(item => <><img key={item.id} src={success} alt="icon"/>
                        <li>{item.text}</li>
                    </>)}
                </ul>
            </article>
        </div>
    );
};

export default Features;