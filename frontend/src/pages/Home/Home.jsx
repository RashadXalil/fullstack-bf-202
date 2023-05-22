import React, { useEffect, useState } from 'react'
import MySlider from '../../components/Slider/MySlider'
import "./Home.scss"
import { FaRegPaperPlane, FaReact } from "react-icons/fa"
import axios from "axios"
import { Link } from 'react-router-dom'
import { toast, Toaster } from "react-hot-toast"
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist } from '../../redux/wishlistSlice/wishlistSlice'

const Home = () => {
    const items = useSelector(state => state.wishlist.items)
    const dispatch = useDispatch()
    let [data, setData] = useState([])
    const [searchValue, setSeachValue] = useState([])
    const [dummys, setDummy] = useState(false)
    useEffect(() => {
        axios.get("http://localhost:8080").then(res => {
            setData(res.data)
        })
    }, [searchValue === "", dummys ? data : ""])
    return (
        <React.Fragment>
            <MySlider />
            <section className='home__cards'>
                <h2>Different hosting platforms to suit every need!</h2>
                <input type="text" placeholder='search' onChange={(e) => {
                    setSeachValue(e.target.value)
                    setData(data.filter(item => item.name.includes(searchValue)))
                }} />
                <button onClick={() => {
                    setData([...data.sort((a, b) => b.price - a.price)])
                }}>Sort By Price</button>

                <div className="container">
                    <div className="row">
                        {
                            data.map((item, index) => {
                                return (
                                    <div key={index} className="col-4">
                                        <div className="custom__card">
                                            <div className="custom__card__image">
                                                <FaRegPaperPlane style={{ fontSize: "50px", color: "#7cbd1e" }} />
                                            </div>
                                            <div className="custom__card__body">
                                                <div className="custom__card__body__name">
                                                    <h3>{item.name}</h3>
                                                </div>
                                                <div className="custom__card__body__price">
                                                    <p>Plans start at ${item.price}/month</p>
                                                </div>
                                                <Link to={`/${item._id}`}>Go Detail</Link>
                                                <button className='btn btn-danger' onClick={(e) => {
                                                    axios.delete(`http://localhost:8080/${item._id}`).then(res => {
                                                        toast.success("item deleted")
                                                        setDummy(true)
                                                    })
                                                }}>Delete</button>
                                                <button onClick={() => {
                                                    dispatch(addToWishlist({ id: item._id, name: item.name, price: item.price }))
                                                    console.log(items)
                                                }}>Add to Wishlist</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
            <section className='parallax'>
                <div className="parallax__content">
                    <div className="container">
                        <h2>Satisfied Clients</h2>
                        <p>We are rated 4.99 / 5.00 (based on 4443 Reviews)</p>
                        <button>Register Now</button>
                    </div>
                </div>
            </section>
            <section className='choose__us'>
                <div className="container">
                    <h2 className='title'>Why choose us </h2>
                    <div className="choose__cards">
                        <div className="row">
                            <div className="col-4">
                                <div className="choose__card">
                                    <div className="choose__card__header">
                                        <FaReact style={{ fontSize: "2rem", color: "#7cbd1e" }} /> <h2>High Quality Hardware</h2>
                                    </div>
                                    <div className="choose__card__body">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam facilis voluptas dolor, praesentium expedita quasi.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="choose__card">
                                    <div className="choose__card__header">
                                        <FaReact id='icon' style={{ fontSize: "2rem", color: "#7cbd1e" }} /> <h2>High Quality Hardware</h2>
                                    </div>
                                    <div className="choose__card__body">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam facilis voluptas dolor, praesentium expedita quasi.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="choose__card">
                                    <div className="choose__card__header">
                                        <FaReact style={{ fontSize: "2rem", color: "#7cbd1e" }} /> <h2>High Quality Hardware</h2>
                                    </div>
                                    <div className="choose__card__body">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam facilis voluptas dolor, praesentium expedita quasi.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="choose__card">
                                    <div className="choose__card__header">
                                        <FaReact style={{ fontSize: "2rem", color: "#7cbd1e" }} /> <h2>High Quality Hardware</h2>
                                    </div>
                                    <div className="choose__card__body">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam facilis voluptas dolor, praesentium expedita quasi.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="choose__card">
                                    <div className="choose__card__header">
                                        <FaReact style={{ fontSize: "2rem", color: "#7cbd1e" }} /> <h2>High Quality Hardware</h2>
                                    </div>
                                    <div className="choose__card__body">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam facilis voluptas dolor, praesentium expedita quasi.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="choose__card">
                                    <div className="choose__card__header">
                                        <FaReact style={{ fontSize: "2rem", color: "#7cbd1e" }} /> <h2>High Quality Hardware</h2>
                                    </div>
                                    <div className="choose__card__body">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam facilis voluptas dolor, praesentium expedita quasi.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Toaster />
        </React.Fragment>
    )
}

export default Home