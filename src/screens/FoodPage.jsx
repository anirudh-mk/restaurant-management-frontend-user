import React from 'react'
import style from '../styles/foodPage.module.css'
import MenuCard from '../components/MenuCard'
import ImageCard from '../components/ImageCard'

function FoodPage() {

    const ingredients = [
        "salt", "chilli", "onion", "garam massala", "salt", "chilli", "onion", "garam massala"
    ]

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

    return (
        <div>
            <img className={style.coverImage} src="https://img.freepik.com/premium-photo/tukpa-soup-indian-cuisine-hot-noodle-soup-with-some-spices-dark-tabletop_737655-878.jpg?size=626&ext=jpg" alt="" />
            <div className={style.content}>
                <div className={style.headdingContainer}>
                    <div>
                        <h2>Food Name</h2>
                        <p>hekki</p>
                    </div>
                    <div>
                        <p>rating</p>
                        <p>price</p>
                    </div>
                </div>
                <p className={style.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque vitae quos totam atque maxime velit architecto, quae magnam, mollitia odit deserunt esse, facilis minima enim. Aut sit voluptas consectetur? Molestiae.</p>
                <div className={style.ingredientsContainer}>
                    {
                        ingredients.map((item) =>
                            <div className={style.ingredients}>
                                <p>{item}</p>
                            </div>
                        )
                    }
                </div>
                <div className={style.horizontalScroll}>
                    {
                        menu.map((item, index) => <ImageCard />)
                    }

                </div>
            </div>
        </div >
    )
}

export default FoodPage