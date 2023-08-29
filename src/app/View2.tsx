"use client"

import React from "react";

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

            </div>
        </div>
    );
}