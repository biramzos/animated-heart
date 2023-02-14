import React from "react";
import { useSpring, animated } from "react-spring";
import logo from './heart_icon.png';
import style from './heart.css';

function useInterval(callback, delay) {
    const savedCallback = React.useRef();

    React.useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    React.useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            const id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}

const Heart = () => {
    const [count, setCount] = React.useState(0);

    const heartAnimation = useSpring({
        transform: count % 2 === 0 ? "scale(1.2)" : "scale(1)",
    });

    useInterval(() => {
        setCount(count + 1);
    }, 1000);

    return (
        <div className={style.container}>
            <center>
                <animated.div
                    style={{
                        ...heartAnimation,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "700px",
                        height: "700px",
                        left: 0,
                        right: 0
                    }}
                >
                    <img src={logo} alt={'Heart'} height={600}/>
                </animated.div>
            </center>
        </div>
    );
}

export default Heart;
