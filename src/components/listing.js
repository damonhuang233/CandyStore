import styled from '@emotion/styled/macro';
import uuid from 'react-uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

import { useDispatch } from 'react-redux';

import useProducts from '../hooks/useProducts';
import { loadCandy } from '../redux/actions';

import CandyCard from './card';
import { getCandy } from '../redux/selectors';

const Loading = styled.div`
  font-size: 36px;
  margin-left: 40px;
  text-shadow: 2px 2px 8px #FF0000;
`;

const ListingContainer = styled.div`
  width: 70%;
  height: auto;
  min-height: 700px;
  padding: 10px;
  margin-left: 15%;
  margin-right: 15%;
  margin-top: 10px;
  border-radius: 10px;
  box-shadow: 10px 10px 50px grey;
  background-color: rgba(240,248,255, 0.9);
`;

function Listing() {

  const listings = useProducts();
  const dispatch = useDispatch();

  if (!listings.isLoading && listings.products.length > 0) {
      const loadCandyAction = loadCandy(listings.products);
      dispatch(loadCandyAction);
  }

  const candys = useSelector(getCandy);

  return(
    <ListingContainer>
      {listings.isLoading ?
        <Loading><FontAwesomeIcon icon={faSpinner} spin/>Loading...</Loading>
        :
        candys.map(candy => (
            <CandyCard key={uuid()} candy={candy} />
        ))
      }
     </ListingContainer>
  );
}

export default Listing;
