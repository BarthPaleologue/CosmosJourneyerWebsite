"use client"

import React from 'react';

export interface View1Props {

}

export const View1 = ({ }: View1Props) => {
    const kofi =
        `<script>
  kofiWidgetOverlay.draw('cosmosjourneyer', {
    'type': 'floating-chat',
    'floating-chat.donateButton.text': 'Support me!',
    'floating-chat.donateButton.background-color': '#ffffff',
    'floating-chat.donateButton.text-color': '#323842'
  });
</script>`
    return (
        <div className="fullView" id="view1">
            <div className="headerBackground">
                <h1>CosmosJourneyer</h1>
                <h2>Explore the endless</h2>

                <center><div id="mainButton"><a href="https://barthpaleologue.github.io/CosmosJourneyer/dist/" target='_blank'>Journey on!</a></div></center>

                {/*<center><div className="downArrow" onClick={() => {
                    window.scrollTo({
                        top: window.innerHeight,
                        behavior: 'smooth'
                    }); 
                }}>˅</div></center>*/}

                <div dangerouslySetInnerHTML={{ __html: kofi }} />
            </div>
        </div>
    );
}