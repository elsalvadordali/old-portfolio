import box from '/lid.webp'
import { useState } from 'react'
const Box = () => {
    const [enlarge, setEnlarge] = useState(false)


    return (
    <div className='box box-container' onClick={() => setEnlarge(true)}>
        clickde? {enlarge.toString()}
        <img className='box lid' src={box} alt="lid" id={enlarge ? 'big-box' : 'small-box'} />
        <div className='box box-bottom' id='box-bottom'>
            
        </div>
    </div>
    )
}

export default Box