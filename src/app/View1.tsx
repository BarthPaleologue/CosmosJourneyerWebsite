"use client"

import React from 'react';


import github from "../../public/static/icons/github.png"
import youtube from "../../public/static/icons/youtube.png"
import reddit from "../../public/static/icons/reddit.webp"
import patreon from "../../public/static/icons/patreon.webp"
import devlog from "../../public/static/icons/devlog.webp"

export interface View1Props {

}

export const View1 = ({ }: View1Props) => {
    return (
        <div className="fullView" id="view1">
            <div className="headerBackground">
                <h1>Cosmos Journeyer</h1>
                <h2>An entire universe on a web page</h2>

                <div id="buttonGrid">
                    <div id="mainButton"><a href="https://barthpaleologue.github.io/CosmosJourneyer/" target='_blank'>Start your journey!</a></div>

                    <div id="secondaryButtons">
                        <a id="patreonButton" href="https://www.patreon.com/barthpaleologue" target='_blank' title='Support the project on Patreon!'>
                            <img src={patreon.src} alt="patreon" />
                        </a>

                        <a id="devlogButton" href="https://barthpaleologue.github.io/Blog/tags/cosmos-journeyer/" target='_blank' title='Read the devlogs!'>
                            <img src={devlog.src} alt="devlog" />
                        </a>

                        <a id="youtubeButton" href="https://www.youtube.com/watch?v=5pXZqHRShTE" target='_blank' title='Watch the trailer on Youtube!'>
                            <img src={youtube.src} alt="youtube" />
                        </a>

                        <a id="redditButton" href="https://reddit.com/r/CosmosJourneyer" target='_blank' title='Join the community on Reddit!'>
                            <img src={reddit.src} alt="reddit" />
                        </a>

                        <a id="githubButton" href="https://github.com/BarthPaleologue/CosmosJourneyer" target='_blank' title='Contribute on Github!'>                            
                            <img src={github.src} alt="github" />
                        </a>
                    </div>
                </div>

                <div className="downArrow" onClick={() => {
                    window.scrollTo({
                        top: window.innerHeight,
                        behavior: 'smooth'
                    });
                }}></div>
            </div>
        </div>
    );
}