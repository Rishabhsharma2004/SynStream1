// src/components/Preloader.js
import React from "react";

const Preloader = () => {
    return (
        <>
            <style>
                {`
                .preloader-container {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: black;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 50;
                }

                .loader {
                    --size: 250px;
                    --duration: 2s;
                    --logo-color: grey;
                    --background: linear-gradient(
                        0deg,
                        rgba(50, 50, 50, 0.2) 0%,
                        rgba(100, 100, 100, 0.2) 100%
                    );
                    height: var(--size);
                    aspect-ratio: 1;
                    background: black;
                    position: relative;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .box {
                    position: absolute;
                    background: rgba(100, 100, 100, 0.15);
                    background: var(--background);
                    border-radius: 50%;
                    border-top: 1px solid rgba(100, 100, 100, 1);
                    box-shadow: rgba(0, 0, 0, 0.3) 0px 10px 10px -0px;
                    backdrop-filter: blur(5px);
                    animation: ripple var(--duration) infinite ease-in-out;
                }

                .box:nth-child(1) {
                    inset: 40%;
                    z-index: 99;
                }

                .box:nth-child(2) {
                    inset: 30%;
                    z-index: 98;
                    border-color: rgba(100, 100, 100, 0.8);
                    animation-delay: 0.2s;
                }

                .box:nth-child(3) {
                    inset: 20%;
                    z-index: 97;
                    border-color: rgba(100, 100, 100, 0.6);
                    animation-delay: 0.4s;
                }

                .box:nth-child(4) {
                    inset: 10%;
                    z-index: 96;
                    border-color: rgba(100, 100, 100, 0.4);
                    animation-delay: 0.6s;
                }

                .box:nth-child(5) {
                    inset: 0%;
                    z-index: 95;
                    border-color: rgba(100, 100, 100, 0.2);
                    animation-delay: 0.8s;
                }

                .logo {
                    position: absolute;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 100px; /* Adjust size as needed */
                    height: auto;
                    z-index: 100;
                    animation: logo-bounce var(--duration) infinite ease-in-out;
                }

                .logo img {
                    animation: logo-pop var(--duration) infinite ease-in-out;
                }

                @keyframes ripple {
                    0% {
                        transform: scale(1);
                        box-shadow: rgba(0, 0, 0, 0.3) 0px 10px 10px -0px;
                    }
                    50% {
                        transform: scale(1.3);
                        box-shadow: rgba(0, 0, 0, 0.3) 0px 30px 20px -0px;
                    }
                    100% {
                        transform: scale(1);
                        box-shadow: rgba(0, 0, 0, 0.3) 0px 10px 10px -0px;
                    }
                }

                @keyframes logo-pop {
                    0% {
                        transform: scale(1);
                        opacity: 0.8;
                    }
                    50% {
                        transform: scale(1.1);
                        opacity: 1;
                    }
                    100% {
                        transform: scale(1);
                        opacity: 0.8;
                    }
                }

                @keyframes logo-bounce {
                    0% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-20px);
                    }
                    100% {
                        transform: translateY(0);
                    }
                }
                `}
            </style>
            <div className="preloader-container">
                <div className="loader">
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="logo">
                        <img aria-hidden="true" className="w-12 h-12" src="logo.png" alt="TechStack Logo" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Preloader;
