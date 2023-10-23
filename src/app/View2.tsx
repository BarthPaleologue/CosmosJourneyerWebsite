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
                <h3>Experience it right in your web browser, no install needed!</h3>

                <div id="contributors">
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
                </div>

            </div>
        </div>
    );
}