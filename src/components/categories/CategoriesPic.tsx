import * as React from 'react';
import { Container } from '@mui/system';
import CategoryImage from '../categoryImages/CategoryImage';
import {CategoryList, TypographyHeading} from './CategoriesPicStyle'
import axios from 'axios'
import {baseUrl , token } from "../../API/index"
import {useEffect, useState} from "react";
import Frame from '../../assets/frame2.png'


const initialState = [
    {
        id : 1,
        img : Frame,
        title: ''
    },
    {
        id : 2,
        img : Frame,
        title: ''
    },
    {
        id : 3,
        img : Frame,
        title: ''
    },
    {
        id : 4,
        img : Frame,
        title: ''
    },
    {
        id : 5,
        img : Frame,
        title: ''
    },
    {
        id : 6,
        img : Frame,
        title: ''

    },
]
const Categories= () => {
    const [data , setData] = useState(initialState)
    useEffect(() => {
        axios.get(`${baseUrl}/category`, {
            headers: {
                Authorization: token,
            },
        })
            .then(res => {
               const newList= data.map((row, i)=>({...row, title: res.data[i].title}))
                setData(newList)
            })
            .catch((err) => {
                console.log(err);
            });
    } , [] )
console.log(data,'data')
  return (
    <Container>
      <TypographyHeading><span>CATEGOR</span>IES</TypographyHeading>
      <CategoryList>
          {data?.map((row)=>
              <CategoryImage key={row.id} title={row.title} img={row.img}/>
          )}



      </CategoryList>
    </Container>
  );
}

export default Categories;

