import { useState } from "react"
import About from './About'
import Bunny from './Bunny'

const Umbrella = () => {
    const [isDesktop, setDesktop] = useState(window.innerHeight > window.innerWidth ? false : true)
    const [open, setOpen] = useState<string | null>(null)

    return (
        <div className="bg">
            <svg height={window.innerHeight} width={window.innerWidth}>


                <rect
                    width={window.innerHeight / 8}
                    height={window.innerHeight} x='0' y='0'
                    fill='#94b9a7'
                    className='front'
                />
                <polygon
                    points={
                        (window.innerHeight / 8) - 1 +
                        ',0 ' +
                        (window.innerHeight / 8) * 1.5 +
                        ',40 ' +
                        (window.innerHeight / 8) * 1.5 +
                        ',' + window.innerHeight + ' ' +
                        ((window.innerHeight / 8) - 1) + ',' +
                        window.innerHeight
                    }
                    className='side' />
                <rect
                    className='window'
                    width={window.innerHeight / 9}
                    height={window.innerHeight / 8}
                    y={(window.innerHeight / 8) * .5}
                    x={(window.innerHeight / 8) / 20}
                    onClick={() => setOpen(open == 'about' ? null : 'about')}
                />

                <rect
                    className='shade'
                    width={window.innerHeight / 9}
                    height={window.innerHeight / 9.8}
                    y={(window.innerHeight / 8) * .5}
                    x={(window.innerHeight / 8) / 20}
                    onClick={() => setOpen(open == 'about' ? null : 'about')}
                />
                <rect
                    width={(window.innerHeight / 8) / 6}
                    height={(window.innerHeight / 7) / 6}
                    x={(window.innerHeight / 8) * .52}
                    y={(window.innerHeight / 8) * 1.115}
                    rx="34"

                    onClick={() => setOpen(open == 'about' ? null : 'about')}
                />
                <rect
                    width={(window.innerHeight / 8) / 7}
                    height={(window.innerHeight / 7) / 5}
                    x={(window.innerHeight / 8) * .535}
                    y={(window.innerHeight / 8) * 1.255}
                    rx="8"

                    onClick={() => setOpen(open == 'about' ? null : 'about')}
                />
                <rect
                    className="under-window-shade"
                    width={(window.innerHeight / 9) - 6}
                    height={6}
                    y={((window.innerHeight / 8) * .5) + 3}
                    x={((window.innerHeight / 8) / 20) + 3}
                    onClick={() => setOpen(open == 'about' ? null : 'about')}
                />
                <rect
                    className='window'
                    width={window.innerHeight / 9}
                    height={window.innerHeight / 8}
                    y={(window.innerHeight / 8) * 1.6}
                    x={(window.innerHeight / 8) / 20}
                    onClick={() => setOpen(open == 'bunny' ? null : 'bunny')}

                />
                <rect
                    className='shade'
                    width={window.innerHeight / 18}
                    height={window.innerHeight / 9.8}
                    y={(window.innerHeight / 8) * 1.8}
                    x={(window.innerHeight / 8) / 20}
                    onClick={() => setOpen(open == 'bunny' ? null : 'bunny')}
                />
                <rect
                    className='shade'
                    width={window.innerHeight / 18}
                    height={window.innerHeight / 9.8}
                    y={(window.innerHeight / 8) * 1.8}
                    x={((window.innerHeight / 8) / 20) + window.innerHeight / 18}
                    onClick={() => setOpen(open == 'bunny' ? null : 'bunny')}
                />

                <rect
                    className='window'
                    width={window.innerHeight / 9}
                    height={window.innerHeight / 8}
                    y={(window.innerHeight / 8) * 2.7}
                    x={(window.innerHeight / 8) / 20}
                />
                <rect
                    className='shades'
                    width={window.innerHeight / 18}
                    height={window.innerHeight / 9.8}
                    y={((window.innerHeight / 8) * 2.7) + 10}
                    x={(window.innerHeight / 8) / 20}
                    onClick={() => setOpen(open == 'bunny' ? null : 'bunny')}
                />
                <rect
                    className='shades'
                    width={window.innerHeight / 18}
                    height={window.innerHeight / 9.8}
                    y={((window.innerHeight / 8) * 2.7) + 10}
                    x={((window.innerHeight / 8) / 20) + window.innerHeight / 18}
                    onClick={() => setOpen(open == 'bunny' ? null : 'bunny')}
                />

                <rect
                    className="under-window-shade-half"
                    width={(window.innerHeight / 18)}
                    height={12}
                    y={(window.innerHeight / 8) * 2.7}
                    x={(window.innerHeight / 8) / 20}
                    onClick={() => setOpen(open == 'about' ? null : 'about')}
                />
                <rect
                    className="under-window-shade-half"
                    width={(window.innerHeight / 18)}
                    height={12}
                    y={(window.innerHeight / 8) * 2.7}
                    x={(window.innerHeight / 8) / 20 + window.innerHeight / 18}
                    onClick={() => setOpen(open == 'about' ? null : 'about')}
                />
                <rect
                    className='window'
                    width={window.innerHeight / 9}
                    height={window.innerHeight / 8}
                    y={(window.innerHeight / 8) * 3.8}
                    x={(window.innerHeight / 8) / 20}
                />
                <rect
                    className='shades'
                    width={window.innerHeight / 18}
                    height={window.innerHeight / 12}
                    y={(window.innerHeight / 8) * 3.8}
                    x={((window.innerHeight / 8) / 20)}
                    onClick={() => setOpen(open == 'bunny' ? null : 'bunny')}
                />
                <rect
                    className='blinds'
                    width={window.innerHeight / 18}
                    height={window.innerHeight / 18}
                    y={(window.innerHeight / 8) * 3.8}
                    x={((window.innerHeight / 8) / 20)}
                    onClick={() => setOpen(open == 'bunny' ? null : 'bunny')}
                />
                <rect
                    className='shades'
                    width={window.innerHeight / 18}
                    height={window.innerHeight / 12}
                    y={(window.innerHeight / 8) * 3.8}
                    x={((window.innerHeight / 8) / 20) + window.innerHeight / 18}
                    onClick={() => setOpen(open == 'bunny' ? null : 'bunny')}
                />
                <rect
                    className='blinds'
                    width={window.innerHeight / 18}
                    height={window.innerHeight / 18}
                    y={(window.innerHeight / 8) * 3.8}
                    x={((window.innerHeight / 8) / 20) + window.innerHeight / 18}
                    onClick={() => setOpen(open == 'bunny' ? null : 'bunny')}
                />
                <rect
                    className="under-window-shade-half"
                    width={(window.innerHeight / 18)}
                    height={12}
                    y={(window.innerHeight / 8) * 3.8}
                    x={(window.innerHeight / 8) / 20}
                    onClick={() => setOpen(open == 'about' ? null : 'about')}
                />
                <rect
                    className="under-window-shade-half"
                    width={(window.innerHeight / 18)}
                    height={12}
                    y={(window.innerHeight / 8) * 3.8}
                    x={(window.innerHeight / 8) / 20 + window.innerHeight / 18}
                    onClick={() => setOpen(open == 'about' ? null : 'about')}
                />
                <rect
                    className='window'
                    width={window.innerHeight / 9}
                    height={window.innerHeight / 8}
                    y={(window.innerHeight / 8) * 4.9}
                    x={(window.innerHeight / 8) / 20}
                />
                <rect
                    className='window'
                    width={window.innerHeight / 9}
                    height={window.innerHeight / 8}
                    y={(window.innerHeight / 8) * 6}
                    x={(window.innerHeight / 8) / 20}
                />
                <rect
                    className='window'
                    width={window.innerHeight / 9}
                    height={window.innerHeight / 8}
                    y={(window.innerHeight / 8) * 7.1}
                    x={(window.innerHeight / 8) / 20}
                />


            </svg>
            {open === 'about' && <About />}
            {open === 'bunny' && <Bunny />}
        </div>
    )
}

export default Umbrella