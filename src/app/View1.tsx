"use client"

import React from 'react';

export interface View1Props {

}

export const View1 = ({ }: View1Props) => {
    return (
        <div className="fullView" id="view1">
            <div className="headerBackground">
                <h1>Cosmos Journeyer</h1>
                <h2>An entire universe on a web page</h2>

                <center><div id="mainButton"><a href="https://barthpaleologue.github.io/CosmosJourneyer/" target='_blank'>Start your journey!</a></div></center>

                <center><div className="downArrow" onClick={() => {
                    window.scrollTo({
                        top: window.innerHeight,
                        behavior: 'smooth'
                    });
                }}>˅</div></center>
            </div>
        </div>
    );
}