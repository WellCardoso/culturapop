import React, { useEffect, useState, useRef } from 'react';
import { TweenMax } from 'gsap'
import { HiMenuAlt3 } from 'react-icons/hi'
import { Container } from './style';

function Sidebar(props) {
    // 
    let menu = useRef(null);

    useEffect(() => {
        TweenMax.to(
            menu, 0, {
            
        }
        )
    }, []);

    const [state, setState] = useState(false)

    const handleExpanded = () => {
        TweenMax.to(
            menu, 0.5,  {
                width: 300,
                stagger: 0.25
            }, "-=1")
        setState(true)
    }

    const handleDefault = () => {
        TweenMax.to(
            menu, 0.5, {
                width: 50, 
            })
        setState(false)
    }

    return (
        <Container ref={el => { menu = el }}>
            <aside>
                <span>
                    <HiMenuAlt3 
                        onClick={state !== true ? handleExpanded : handleDefault }
                    />
                </span>
            </aside>
        </Container>
    );
}

export default Sidebar;