import React from 'react'
import {ImageParent, Img, Button} from './styleCategroyImage'
import Frame from '../../assets/frame2.png'

const CategoryImage = ({img , key, title  } : { img: string; key:number ; title: string }) => {
  return (
    <ImageParent>
        <div className='overlay'></div>
        <Img src={img} />
        <Button>{title}</Button>
    </ImageParent>
  )
}

export default CategoryImage