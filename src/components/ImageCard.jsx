import React from 'react'
import style from '../styles/imageCard.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faStar } from '@fortawesome/free-solid-svg-icons'
import { faDotCircle } from '@fortawesome/free-regular-svg-icons'

function ImageCard({ size }) {
    return (
        <div className={style.imageCard} style={{ marginRight: size == 'lg' ? 0 : 16 }}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8ycQho5biF0TZLGOuDtp2jStnUNAqqzlXhg&s" style={{ width: size == 'lg' ? "100%" : 150 }} alt="" />
            <div className={style.textContainer}>
                <div className={style.headdingContianer}>
                    <p>Burger</p>
                    <div className={style.rating}>
                        <FontAwesomeIcon icon={faStar} color='#ffb701' />
                        <p>4.3</p>
                    </div>
                </div>
                <div className={style.subHeaddingContainer}>
                    <div className={style.rating}>
                        <FontAwesomeIcon icon={faDotCircle} color='green' size='md' />
                        <p>210</p>
                    </div>
                    <div className={style.rating}>
                        <FontAwesomeIcon icon={faDollarSign} size='md' />
                        <p>210</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageCard