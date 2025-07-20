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

"use client";

import React, { useRef } from "react";
import { RoadmapItemComponent } from "@/components/RoadmapItem";
import { ScrollArrow } from "@/components/ScrollArrow";
import { useScrollTo } from "@/hooks/useScrollTo";
import { ROADMAP_ITEMS } from "@/utils/constants";

export interface ViewRoadmapProps {
    className?: string;
}

export const ViewRoadmap: React.FC<ViewRoadmapProps> = ({ className = "" }) => {
    const roadmapRef = useRef<HTMLDivElement>(null);
    const { scrollToView } = useScrollTo();

    const scrollOffset = 600;

    const scrollLeft = () => {
        if (roadmapRef.current) {
            roadmapRef.current.scrollBy({
                left: -scrollOffset,
                behavior: "smooth",
            });
        }
    };

    const scrollRight = () => {
        if (roadmapRef.current) {
            roadmapRef.current.scrollBy({
                left: scrollOffset,
                behavior: "smooth",
            });
        }
    };

    const handleCardClick = (itemId: string) => {
        const cardElement = document.getElementById(`roadmap-item-${itemId}`);
        if (cardElement && roadmapRef.current) {
            cardElement.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "center",
            });
        }
    };

    return (
        <div className={`fullView ${className}`} id="viewRoadmap">
            <div className="headerRoadmap">
                <ScrollArrow direction="up" onClick={() => scrollToView(0)} ariaLabel="Scroll to top" />

                <h2>Roadmap</h2>

                <div className="roadmapContainer">
                    <div id="roadmap" ref={roadmapRef}>
                        {ROADMAP_ITEMS.map((item) => (
                            <div
                                key={item.id}
                                id={`roadmap-item-${item.id}`}
                                onClick={() => handleCardClick(item.id)}
                                style={{ cursor: "pointer" }}
                            >
                                <RoadmapItemComponent item={item} />
                            </div>
                        ))}
                    </div>

                    <button
                        className="roadmapNavButton roadmapNavLeft"
                        onClick={scrollLeft}
                        aria-label="Scroll roadmap left"
                        type="button"
                    >
                        &#8249;
                    </button>

                    <button
                        className="roadmapNavButton roadmapNavRight"
                        onClick={scrollRight}
                        aria-label="Scroll roadmap right"
                        type="button"
                    >
                        &#8250;
                    </button>
                </div>

                <ScrollArrow direction="down" onClick={() => scrollToView(2)} ariaLabel="Scroll to next section" />
            </div>
        </div>
    );
};
