import React from 'react'
import { useState , useContext, useEffect} from 'react'
import FeedbackContext from '../context/FeedbackContext';
function RatingSelect({select}) {
    const {feedbackEdit} = useContext(FeedbackContext);
    const [selected,setSelected] = useState(10);
    const handleChange = (e) => {
        setSelected(Number(e.currentTarget.value));
        select(Number(e.currentTarget.value));
    }
    useEffect(()=>{
        setSelected(feedbackEdit.item.rating);
    },[feedbackEdit])
  return (
    <ul className="rating">
        <li>
            <input 
                type="radio"
                name="rating"
                value="1"
                id="num1"
                checked={selected === 1}
                onChange={handleChange}
            />
            <label htmlFor="num1">1</label>
        </li>
        <li>
            <input
                type="radio"
                name="rating"
                value="2"
                id="num2"
                checked={selected === 2}
                onChange={handleChange}
            />
            <label htmlFor="num2">2</label>
        </li>
        <li>
            <input
                type="radio"
                name="rating"
                value="3"
                id="num3"
                checked={selected === 3}
                onChange={handleChange}
            />
            <label htmlFor="num3">3</label>
        </li>
        <li>
            <input
                type="radio"
                name="rating"
                value="4"
                id="num4"
                checked={selected === 4}
                onChange={handleChange}
            />
            <label htmlFor="num4">4</label>
        </li>
        <li>
            <input
                type="radio"
                name="rating"
                value="5"
                id="num5"
                checked={selected === 5}
                onChange={handleChange}
            />
            <label htmlFor="num5">5</label>
        </li>
        <li>
            <input
                type="radio"
                name="rating"
                value="6"
                id="num6"
                checked={selected === 6}
                onChange={handleChange}
            />
            <label htmlFor="num6">6</label>
        </li>
        <li>
            <input
                type="radio"
                name="rating"
                value="7"
                id="num7"
                checked={selected === 7}
                onChange={handleChange}
            />
            <label htmlFor="num7">7</label>
        </li>
        <li>
            <input
                type="radio"
                name="rating"
                value="8"
                id="num8"
                checked={selected === 8}
                onChange={handleChange}
            />
            <label htmlFor="num8">8</label>
        </li>
        <li>
            <input
                type="radio"
                name="rating"
                value="9"
                id="num9"
                checked={selected === 9}
                onChange={handleChange}
            />
            <label htmlFor="num9">9</label>
        </li>
        <li>
            <input
                type="radio"
                name="rating"
                value="10"
                id="num10"
                checked={selected === 10}
                onChange={handleChange}
            />
            <label htmlFor="num10">10</label>
        </li>





    </ul>
  )
}

export default RatingSelect