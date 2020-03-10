import React, { Fragment, useRef } from 'react';
import Hero from '../Hero/Hero';
import Social from '../Social/Social';
import Footer from '../Footer/Footer';
import social from '../../data/social';
import styles from './Home.module.css';

export default function Home(props) {
    const mainContent = useRef(null);
    const handleButtonClick = () => {
        mainContent.current.querySelector('a').focus();
    };

    return (
        <Fragment>
            <button onClick={handleButtonClick} className={styles.skipToMainContent}>
                Skip to main content
            </button>
            <div className={styles.container}>
                <div className={styles.leftColumn}>
                    <Hero />
                    <Social links={social} />
                </div>

                <div ref={mainContent} className={styles.rightColumn}>
                    {props.children}
                </div>
            </div>
            <Footer links={social} />
        </Fragment>

    );
}