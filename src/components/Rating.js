import React from 'react'
var FontAwesome = require('react-fontawesome');

const Rating = ({ value, text, color }) => {
  return (
    <div class='flex' className='rating'>
      <FontAwesome
        className={
            value >= 1
              ? 'fas fa-star'
              : value >= 0.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        name='star'
        size='lg'
        style={{color:'yellow'}}
      />
      <FontAwesome
        className={
            value >= 2
              ? 'fas fa-star'
              : value >= 1.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        name='star'
        size='lg'
        style={{color:'yellow'}}
      />
      <FontAwesome
        className={
            value >= 3
              ? 'fas fa-star'
              : value >= 2.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        name='star'
        size='lg'
        style={{color:'yellow'}}
      />
      <FontAwesome
        className={
            value >= 4
              ? 'fas fa-star'
              : value >= 3.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        name='star'
        size='lg'
        style={{color:'yellow'}}
      />
      <FontAwesome
        className={
            value >= 5
              ? 'fas fa-star'
              : value >= 4.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        name='star'
        size='lg'
        style={{color:'yellow'}}
      />
      <span>     </span>
      <span>({text && text})</span>
    </div>
  )
}
export default Rating