import React from 'react';
import styles from '../styles/Main.module.scss'
import GetStarted from "./Main/GetStarted";
import Statistics from "./Main/Statistics";
import Features from "./Main/Features";
import freePlan from '../images/Free.png'
import greenIcon from '../images/green-icon.png'

const Main = () => {
    const plans = [
        {
            id: 1,
            name: 'Free',
            price: 'Free',
            plans: ['Unlimited Bandwitch', 'Encrypted Connection', 'No Traffic Logs', 'Works on All Devices']
        },
        {
            id: 2,
            name: 'Standard Plan',
            price: '$9 / mo',
            plans: ['Unlimited Bandwitch', 'Encrypted Connection', 'Yes Traffic Logs', 'Works on All Devices', 'Connect Anyware']
        },
        {
            id: 3,
            name: 'Premium Plan',
            price: '$12 / mo',
            plans: ['Unlimited Bandwitch', 'Encrypted Connection', ' Yes Traffic Logs', 'Works on All Devices', 'Connect Anyware', 'Get New Features']
        },
    ]

    return (
        <main className={styles.main}>
            <GetStarted/>
            <Statistics/>
            <Features/>
            <div>
                <div>
                    <h2>Choose Your Plan</h2>
                    <h3>Let's choose the package that is best for you and explore it happily and cheerfully.</h3>
                    <section>
                        {plans.map(el => <article key={el.id}>
                            <div>
                                <img src={freePlan} alt="freePlan"/>
                                <p>{el.name}</p>
                            </div>

                            <ul>
                                {el.plans.map(plan => <span key={plan}>
                                <img src={greenIcon} alt="greenIcon"/>
                                <li>{plan}</li>
                            </span>)}
                            </ul>
                            <div>
                                <span>{el.price}</span>
                                <button>Select</button>
                            </div>
                        </article>)}
                    </section>
                </div>
            </div>
        </main>
    );
};

export default Main;