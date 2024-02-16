"use client"

import React from "react";
import Image from 'next/image';

import youtubeIcon from '/public/youtube.png';
import githubIcon from '/public/github.png';
import mediumIcon from '/public/medium.png';

export interface View2Props {

}

export const View2 = ({ }: View2Props) => {
    return (
        <div className="fullView" id="view2">
            <div className="view2Background">
                <center><div className="topArrow" onClick={() => {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                }}>˄</div></center>

                <div id="shared-loader">
                    <div className="cube">
                        <div className="cube-face cube-face-front">Free Forever</div>
                        <div className="cube-face cube-face-back">Infinite</div>
                        <div className="cube-face cube-face-top">Open-source</div>
                        <div className="cube-face cube-face-bottom">Labor of Love</div>
                    </div>
                </div>

                <div id="about">
                    <h2>FAQ:</h2>

                    <h3>What is Cosmos Journeyer?</h3>
                    <p>Cosmos Journeyer is a free, open-source project in development since 2021. It is my labor of love, and will always be free for everyone to use and modify to their liking.</p>

                    <h3>How to contribute?</h3>
                    <p>Anyone can contribute to Cosmos Journeyer. If you know how to code, <a target="_blank" href="https://github.com/BarthPaleologue/CosmosJourneyer">the github repository</a> is where all the development takes place.</p>

                    <p>You also can help the project grow by sponsoring my work on <a target="_blank" href="https://ko-fi.com/cosmosjourneyer">Patreon</a> and <a target="_blank" href="https://ko-fi.com/cosmosjourneyer">Ko-fi</a>.</p>

                    <h3>Get in touch</h3>

                    <p>If you have any questions, or just want to say hi, you can reach me by <a href="mailto:barth.paleologue@cosmosjourneyer.com">email</a></p>
                </div>

                <footer>

                </footer>

                {/*<div id="contributors">
                    <h4>Contributors:</h4>
                    <div id="contributorsList">

                    </div>
                </div>

                <div id="support">
                    <h4>CosmosJourneyer is in active development, and you can help too:</h4>
                    <div id="supportList">
                        <h5>Follow the project</h5>
                        <a href="" target="_blank"><Image src={githubIcon} alt="Github" /></a>
                        <a href="" target="_blank"><Image src={youtubeIcon} alt="Youtube" /></a>
                        <a href="" target="_blank"><Image src={mediumIcon} alt="Medium" /></a>
                    </div>
                    <div id="supportList">
                        <h5>Support Financially</h5>
                    </div>
            </div>*/}

            </div>
        </div>
    );
}