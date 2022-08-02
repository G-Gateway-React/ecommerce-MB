import * as React from 'react';
import { Container } from '@mui/system';
import CategoryImage from '../categoryImages/CategoryImage';
import {CategoryList, TypographyHeading} from './CategoriesPicStyle'

const Categories= () => {
  return (
    <Container>
      <TypographyHeading><span>CATEGOR</span>IES</TypographyHeading>
      <CategoryList>
        <CategoryImage />
        <CategoryImage />
        <CategoryImage />
        <CategoryImage />
        <CategoryImage />
        <CategoryImage />
      </CategoryList>
    </Container>
  );
}

export default Categories;

