"use client"


import Image from 'next/image';
import React from 'react';

import spaceStationImage from "../../public/static/spacestation.webp"
import spaceShipImage from "../../public/static/spaceship.webp"
import terrainImage from "../../public/static/terrain.webp"
import explorationImage from "../../public/static/exploration.webp"
import tradingImage from "../../public/static/trading.webp";
import llmsImage from "../../public/static/llms.webp"

export interface ViewRoadmapProps {

}

export const ViewRoadmap = ({ }: ViewRoadmapProps) => {
    return (
        <div className="fullView" id="viewRoadmap">
            <div className="headerRoadmap">

                <div className="topArrow" onClick={() => {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                }}></div>

                <h2>Roadmap</h2>

                <div id='roadmap'>

                    <div className='roadmapItem'>
                        <h3>Space stations</h3>

                        <p className='roadmapEta'>Cosmos Journeyer 1.9 - August 2024</p>

                        <div className='roadmapItemContent'>

                            <Image className='roadmapImage' src={spaceStationImage} alt='space station' width={480} />

                            <p>The first gameplay iteration of Cosmos Journeyer will heavily rely on space stations: they are the places where humanity has settled among the stars. Space stations are the basis for an economic system that will unlock trading among and between systems.</p>

                            <p>The stations are designed procedurally, following the laws of physics. The spinning habitats rotate as fast as need to generate an acceleration of 1g for the inhabitants. Moreover the habitat surface is calculated with considerations regarding the population density and the local agricultural system. The solar panel area is also determined by the real energy consumption of the station.</p>

                            <p>You can learn more about the design of stations in the devlogs <a href="https://barthpaleologue.github.io/Blog//tags/space-station/">here</a></p>

                        </div>
                    </div>

                    <div className='roadmapItem'>
                        <h3>Exploration content</h3>

                        <p className='roadmapEta'>Cosmos Journeyer 1.9 - August 2024</p>

                        <div className='roadmapItemContent'>

                            <Image className='roadmapImage' src={explorationImage} alt='space station' width={480} />

                            <p>Stemming from space stations, exploration content will debut in Cosmos Journeyer 1.9. As the universe is immense, it can be difficult to find the most interesting places.</p>

                            <h4>New places to explore</h4>

                            <p>Many solar systems will be populated with strange objects called &ldquo;anomalies&ldquo;. These objects challenge the law of physics and will give players a spectacle they will not forget any time soon. In addition to that, a small subset of stars will become &ldquo;strange stars&ldquo;, bathing their worlds in their weird light, never seen before. Asteroid fields are also coming, offering an interesting challenge for pilots as well as new views for photographs!</p>

                            <h4>Missions</h4>

                            <p>To facilitate the journey of the players, tourists from space stations will create missions to bring them to these new interesting places. You will have to travel many light years to reach your destination, encountering more content on the way.</p>
                        </div>
                    </div>

                    <div className='roadmapItem'>
                        <h3>Trading missions</h3>

                        <p className='roadmapEta'>Cosmos Journeyer 1.9 - August 2024</p>

                        <div className='roadmapItemContent'>

                            <Image className='roadmapImage' src={tradingImage} alt='space station' width={480} />

                            <p>As space stations are designed from the ground up with agricultural production data, trading will emerge naturally. The price of goods at each station will depend on the local supply, which will be different at each station. This naturally creates trade roads between stations for players to earn money.</p>

                            <p>In addition to this free form of trading, missions will be available at stations to guide players in their journey.</p>

                        </div>
                    </div>

                    <div className='roadmapItem'>

                        <h3>Ship interiors</h3>

                        <p className='roadmapEta'>Cosmos Journeyer 2.0 - 2025</p>

                        <div className='roadmapItemContent'>

                            <Image className='roadmapImage' src={spaceShipImage} alt='space ship' width={480} />

                            <p>Stepping for the first time on an alien world should be an impactful moment. Some would say an &ldquo;Armstrong moment&rdquo; in reference to the 1969 Moon landing.</p>
                                
                            <p> In order to recreate this incredible experience, I want players to be able to transition from commanding the spaceship to walking in a very smooth way, instead of using teleportation.
                                Players will have to go through their ship airlock, and equalize the pressure before being able to step outside.
                                When opening the airlock to the outside, the volume of sound would change depending on the current air pressure (no sound in space!).
                            </p>

                            <p>Ship interiors will also come first first person piloting of spaceships, giving a more immersive and enjoyable way of exploring the galaxy.</p>

                        </div>

                    </div>

                    <div className='roadmapItem'>

                        <h3>Better planet surfaces</h3>

                        <p className='roadmapEta'>Cosmos Journeyer 2.0 - 2025</p>

                        <div className='roadmapItemContent'>

                            <Image className='roadmapImage' src={terrainImage} alt='space ship' width={480} />

                            <p>Taking advantage of WebGPU compute shaders, the terrain of planets will become more complex and varied depending on the planet type. Not only that, but the objects scattered on the terrain will be placed more naturally (no grass on ice) with new variations as well. I would love to also introduce a vehicle for ground exploration.</p>
                        </div>

                    </div>

                    <div className='roadmapItem'>

                        <h3>Quest Generation</h3>

                        <p className='roadmapEta'>Beyond 2.0 - 2025</p>

                        <div className='roadmapItemContent'>

                            <Image className='roadmapImage' src={llmsImage} alt='llms' width={480} />

                            <p>One of the hardest part of generating a procedural infinite universe, is to create engaging stories that makes sense in the context of the player.
                                The best example of procedurally generated story telling is Dwarf Fortress, which is quite a marvel of engineering when it comes to creating a coherent world that makes sense and feels fresh.
                                Nowadays, LLMs are getting lighter and easier to run locally. I would like to experiment with procedural quest generation per star system that would use system data to create engaging stories that would lead players from planet to planet.
                            </p>

                        </div>

                    </div>

                </div>


                <div className="downArrow" onClick={() => {
                    window.scrollTo({
                        top: window.innerHeight * 2,
                        behavior: 'smooth'
                    });
                }}></div>
            </div>
        </div>
    );
}