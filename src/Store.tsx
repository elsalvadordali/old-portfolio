
import { useEffect, useRef, useState } from 'react'
import store from '/storefront.webp'


const Store = () => {
    const [clicked, setClicked] = useState('')

    useEffect(() => {
        setTimeout(() => {
            if (clicked === 'store') setClicked('hidden')
        }, 1000)
    }, [clicked])
    return <img className={clicked} id='store' src={store} alt='store front' onClick={() => setClicked('store')} />
}

export default Store