import React from 'react'
import {ImageParent, Img, Button} from './styleCategroyImage'
import Frame from '../../assets/frame2.png'

const CategoryImage = () => {
  return (
    <ImageParent>
        <div className='overlay'></div>
        <Img src={Frame} />
        <Button>top</Button>
    </ImageParent>
  )
}

export default CategoryImage