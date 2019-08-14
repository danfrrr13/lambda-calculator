import React, { useState } from "react";

//import any components needed
import NumberButton from './NumberButton.js';

//Import your array data to from the provided data file
import { numbers } from '../../../data.js';

const Numbers = () => {

  // STEP 2 - add the imported data to state
  const [numberData, setNumberData] = useState(numbers);

  return (
    <div>
      {numberData.map(data => <NumberButton button={data} />)}
    </div>
  );
};

export default Numbers;