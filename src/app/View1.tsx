"use client"

import React from 'react';

export interface View1Props {

}

export const View1 = ({ }: View1Props) => {
    return (
        <div className="fullView" id="view1">
            <div className="headerBackground">
                <h1>CosmosJourneyer</h1>
                <h2>Explore the endless</h2>

                <center><div id="mainButton"><a href="https://cosmosjourneyer.com" target='_blank'>Journey on!</a></div></center>

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