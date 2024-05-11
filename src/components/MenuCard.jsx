import React from 'react'
import style from '../styles/menuCard.module.css'
function MenuCard() {
    return (
        <div className={style.menuCard}>
            <img src="https://img.freepik.com/premium-photo/tukpa-soup-indian-cuisine-hot-noodle-soup-with-some-spices-dark-tabletop_737655-878.jpg?size=626&ext=jpg" alt="" />
            <p>All</p>
        </div>
    )
}

export default MenuCard