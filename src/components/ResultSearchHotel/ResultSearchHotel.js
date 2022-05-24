import React from 'react'
import HotelIcon from '../component/HotelIcon'
import LocationIcon from '../component/LocationIcon'
import StarReview from '../component/StarReview'
import CostHotelDiscount from './CostHotelDiscount'
import CostHotel from './CostHotelWithoutDiscount'
import LocationHotel from './LocationHotel'
import NameHotel from './NameHotel'
import PhotoHotel from './PhotoHotel'
import TypeHotel from './TypeHotel'

const ResultSearchHotel = (props) => {
  return (
    <div className='sfjepeqkpoqwow'>
        <PhotoHotel photo_hotel={props.photo_hotel} />
        <div className='fjkdrwaejeioaw'>
            <NameHotel name_hotel={props.name_hotel} />
            <div className='jeoiejrirjioewjioejsiowep'>
                <TypeHotel type={props.type} />
                <div className='jiarjawieairotioewaeksoas'>
                    {
                        Array.from(Array(props?.review).keys()).map(item=> <StarReview key={item} />)
                    }
                </div>
            </div>
            <div className='fpoiopedfopsfdkgopdsdfdsef'>
                <LocationIcon />
                <LocationHotel detail_location={props.detail_location} location={props.location} />
            </div>
        </div>

        <div className='djfjlejwioejqi'>
            <HotelIcon />
            <div className='fkfapwokwopewaw'>
                {
                    parseInt(props.discount)>0 ? 
                    <CostHotelDiscount cost_adult={props.cost_adult} discount={props.discount} />
                    :
                    <CostHotel cost_adult={props.cost_adult} />
                }
            </div>
        </div>  
    </div>
  )
}

export default ResultSearchHotel