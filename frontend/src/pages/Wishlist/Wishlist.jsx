import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromWishlist } from '../../redux/wishlistSlice/wishlistSlice'
import { Helmet } from "react-helmet"
const Wishlist = () => {
    const items = useSelector(state => state.wishlist.items)
    const dispatch = useDispatch()
    return (
        <>
            <Helmet>
                <title>wishlist</title>
            </Helmet>
            <ul>
                {
                    items.map((item, index) => {
                        return (<li key={index}>{item.name} <button onClick={() => {
                            dispatch(removeFromWishlist(item.id))
                        }}>delete</button></li>)
                    })
                }
            </ul>
        </>
    )
}

export default Wishlist