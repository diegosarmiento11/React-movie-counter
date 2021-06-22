import React from 'react';

function Forms(props) {
  const [quantity, setQuantity] = React.useState(0);
  const {movie} = props;

  return (
    <div>
      <form>
          <h3>{movie.name}</h3>
          <button 
            type='button' 
            onClick={() => {
            setQuantity(quantity -1)
          }} 
            disabled={quantity <= 0}>
            - 
          </button>

          {quantity}

          <button 
            type='button' 
            onClick={() => {
            setQuantity(quantity +1)
          }} 
            disabled={quantity >= movie.available}>
           + 
          </button>
        </form>
    </div>
  );
}

export default Forms;