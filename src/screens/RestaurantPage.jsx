import React, { useEffect, useState } from 'react';
import styles from '../styles/restaurantPage.module.css'; // Importing styles from your module.css file
import MenuCard from '../components/MenuCard';
import ImageCard from '../components/ImageCard';

function RestaurantPage() {

    const menu = [
        {
            name: "all",
            url: ""
        },
        {
            name: "biriyani",
            url: ""
        },
        {
            name: "juice",
            url: ""
        },
        {
            name: "all",
            url: ""
        },
        {
            name: "biriyani",
            url: ""
        },
        {
            name: "juice",
            url: ""
        }, {
            name: "all",
            url: ""
        },
        {
            name: "biriyani",
            url: ""
        },
        {
            name: "juice",
            url: ""
        },
        {
            name: "all",
            url: ""
        },
        {
            name: "biriyani",
            url: ""
        },
        {
            name: "juice",
            url: ""
        }

    ]


    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > sticky) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const sticky = 30; // Adjust this value according to your header height

    return (
        <div>
            <div className={styles.topContainer}>
                <h1>Hotel Name</h1>
            </div>
            <div className={`${styles.header} ${isSticky ? styles.sticky : ''}`} id="myHeader">
                <input type="text" />
                <div className={styles.horizontalScroll}>
                    {
                        menu.map((item, index) => <MenuCard />)
                    }

                </div>
            </div>

            <div className={styles.content}>
                <h3>Top Rated</h3>
                <div className={styles.horizontalScroll}>
                    {
                        menu.map((item, index) => <ImageCard />)
                    }

                </div>
                <h3>Menu</h3>
                <ImageCard size="lg" />
                <ImageCard size="lg" />
                <ImageCard size="lg" />
                <ImageCard size="lg" />
                <ImageCard size="lg" />
                <ImageCard size="lg" />
            </div>
        </div>
    );
}

export default RestaurantPage;
