//  This file is part of Cosmos Journeyer
//
//  Copyright (C) 2024 Barthélemy Paléologue <barth.paleologue@cosmosjourneyer.com>
//
//  This program is free software: you can redistribute it and/or modify
//  it under the terms of the GNU General Public License as published by
//  the Free Software Foundation, either version 3 of the License, or
//  (at your option) any later version.
//
//  This program is distributed in the hope that it will be useful,
//  but WITHOUT ANY WARRANTY; without even the implied warranty of
//  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//  GNU General Public License for more details.
//
//  You should have received a copy of the GNU General Public License
//  along with this program.  If not, see <https://www.gnu.org/licenses/>.

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
                <div className="topArrow" onClick={() => {
                    window.scrollTo({
                        top: window.innerHeight,
                        behavior: 'smooth'
                    });
                }}></div>

                <div id="shared-loader">
                    <div className="cube">
                        <div className="cube-face cube-face-front">Free Forever</div>
                        <div className="cube-face cube-face-back">Curiosity Driven</div>
                        <div className="cube-face cube-face-top">Open Source</div>
                        <div className="cube-face cube-face-bottom">Labor of Love</div>
                    </div>
                </div>

                <div id="about">
                    <h2>FAQ:</h2>

                    <h3>What is Cosmos Journeyer?</h3>
                    <p>Cosmos Journeyer is a free, open-source space exploration game The ultimate goal of the game is to make you travel to the most beautiful places of the universe, and make you reflect on our place in it.
                        It is my labor of love, and it will always be free for everyone to use and modify to their liking.</p>

                    <h3>How to contribute?</h3>

                    <p>If you are a player, spread the word! Come and share your screenshots and discuss the game on <a target="_blank" href="https://www.reddit.com/r/CosmosJourneyer/">the official subreddit</a></p>

                    <p>If you know how to code, come to <a target="_blank" href="https://github.com/BarthPaleologue/CosmosJourneyer">the github repository</a> is where all the development takes place.</p>

                    <p>You also can help the project grow by sponsoring my work on <a target="_blank" href="https://www.patreon.com/barthpaleologue">Patreon</a> and <a target="_blank" href="https://github.com/sponsors/BarthPaleologue">GitHub</a>.</p>

                    <h3>Get in touch</h3>

                    <p>If you have any questions, or just want to say hi, come to <a target="_blank" href="https://www.reddit.com/r/CosmosJourneyer/">the official subreddit</a> or reach me by <a href="mailto:barth.paleologue@cosmosjourneyer.com">email</a></p>
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