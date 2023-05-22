import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaRegPaperPlane } from 'react-icons/fa'
import { useParams } from 'react-router-dom'

const Detail = () => {
    const { id } = useParams()
    const [item, setData] = useState({})
    useEffect(() => {
        axios.get(`http://localhost:8080/${id}`).then(res => setData(res.data))
    })
    return (
        <div className="col-4">
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
                </div>
            </div>
        </div>
    )
}

export default Detail