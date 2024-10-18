import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Product = () => {
    const navigate = useNavigate()
    const {product} =useParams()
  return (
    <div>
        this is produsct

        <button
        onClick={() => { navigate(':id') }}
        >
go

        </button>
    </div>
  )
}

export default Product