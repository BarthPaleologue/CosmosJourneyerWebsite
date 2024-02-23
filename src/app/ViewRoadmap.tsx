"use client"


import Image from 'next/image';
import React from 'react';

import spaceStationImage from "../../public/static/spacestation.webp"
import spaceShipImage from "../../public/static/spaceship.webp"
import terrainImage from "../../public/static/terrain.webp"
import blackHoleImage from "../../public/static/blackhole.webp"
import llmsImage from "../../public/static/llms.webp"

export interface ViewRoadmapProps {

}

export const ViewRoadmap = ({ }: ViewRoadmapProps) => {
    return (
        <div className="fullView" id="viewRoadmap">
            <div className="headerRoadmap">

                <center><div className="topArrow" onClick={() => {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                }}>˄</div></center>

                <h2>Roadmap</h2>

                <div id='roadmap'>

                    <div className='roadmapItem'>
                        <h3>Human settlements</h3>

                        <p className='roadmapEta'>Q1 2024</p>

                        <div className='roadmapItemContent'>

                            <Image className='roadmapImage' src={spaceStationImage} alt='space station' width={480} />

                            <p>The next step for Cosmos Journeyer is to create human space and surface settlements that would give purpose to the player&apos;s journey.</p>

                            <h4>Docking</h4>

                            <p>Players will be assigned a landing pad on docking request. To account for multiple types of player, the landing can be manual or automatic, which can be toggle using a button.</p>

                            <h4>Features</h4>

                            <p>Once docked, players will be able to refuel their spaceship after paying a small fee. Money can be obtained by performing mission for the station: exploration or trading. As some systems won&apos;t have any settlement, it will also be possible to refuel around cold stars and gas giants.</p>

                            <h4>Exploration</h4>

                            <p>Cosmos Journeyer is all about exploration, but it doesn&apos;t mean that players should not be given a direction.
                                Exploration missions will involve taking pictures of interesting celestial bodies inside the solar system or in nearby solar systems.
                                Players will also be tasked with transporting people to see specific places. People will include scientists and tourists.
                            </p>

                            <h4>Trading</h4>

                            <p>In the first iteration, trading will only take place inside a single star system, expading to interstellar trading in a later version. Implementing trading will create an economic system for the galaxy with goods that can change price depending on the system. I don&apos;t want all settlements to be simply capitalist, there will be some diversity in that regard, which will change the possible interactions with the settlement.</p>

                        </div>
                    </div>

                    <div className='roadmapItem'>

                        <h3>Ship interiors</h3>

                        <p className='roadmapEta'>Q2 2024</p>

                        <div className='roadmapItemContent'>

                            <Image className='roadmapImage' src={spaceShipImage} alt='space ship' width={480} />

                            <p>Stepping for the first time on an alien world should be an impactful moment. Some would say an &ldquo;Armstrong moment&rdquo; in reference to the 1969 Moon landing.</p>
                                
                            <p> In order to recreate this incredible experience, I want players to be able to transition from commanding the spaceship to walking in a very smooth way, instead of using teleportation.
                                Players will have to go through their ship airlock, and equalize the pressure before being able to step outside.
                                When opening the airlock to the outside, the volume of sound would change depending on the current air pressure (no sound in space!).
                            </p>

                            <p>At first, ship interiors will be quite minimalist, but I hope to expand it little by little and also include a cockpit view to pilot the spaceship.</p>

                        </div>

                    </div>

                    <div className='roadmapItem'>

                        <h3>Black hole navigation</h3>

                        <p className='roadmapEta'>Q2 2024</p>

                        <div className='roadmapItemContent'>

                            <Image className='roadmapImage' src={blackHoleImage} alt='black hole navigation' width={480} />

                            <p>Black holes are magnificent celestial objects that are both mysterious and terrifying. What lies beyond the black impenetrable event horizon?</p>

                            <p>In Cosmos Journeyer, players will be able to use Black holes as highways through the universe. Each black hole will have a twin located hundred of light years away, allowing for fast travel across space.</p>

                            <p>Traversing a black hole&rsquo;s event horizon will require skill as the player will have to stay inside a safe navigation corridor. External forces will try to derail player&rsquo;s spaceships, which can also be mitigated by buying blackhole stabilizers at human settlements.</p>

                        </div>

                    </div>

                    <div className='roadmapItem'>
                        <h3>Surface generation overhaul</h3>

                        <p className='roadmapEta'>Q3 2024</p>

                        <div className='roadmapItemContent'>

                            <Image className='roadmapImage' src={terrainImage} alt='terrain' width={480} />

                            <p>In its current state, planet surface generation is not the most interesting. Planets look very similar and that&apos;s not good for an exploration driven game.</p>

                            <h4>WebGPU</h4>

                            <p>
                                With the coming of WebGPU, terrain generation can be performed on the GPU instead of the CPU, which opens new possibilities for realistic terrain.
                                Deprecating WebGL in the future will allow for more complex terrain generation with erosion. Terrain types will depend on the characteristics of the planets: sterile worlds will have less erosion but much more amplified terrain due to low gravity. On the contrary, habitable worlds will feature mountains, plains, and deserts all blended together.
                            </p>

                            <h4>Asset scattering</h4>

                            <p>For now, all planet rocks are the same. But they don&rsquo;t have to be. You won&rsquo;t find the same rocks near the ocean and on the moon. WebGPU will allow to build upon my previous work on Asset Scattering to make it more flexible and powerful.</p>

                        </div>
                    </div>

                    <div className='roadmapItem'>

                        <h3>Quest Generation</h3>

                        <p className='roadmapEta'>2025</p>

                        <div className='roadmapItemContent'>

                            <Image className='roadmapImage' src={llmsImage} alt='llms' width={480} />

                            <p>One of the hardest part of generating a procedural infinite universe, is to create engaging stories that makes sense in the context of the player.
                                The best example of procedurally generated story telling is Dwarf Fortress, which is quite a marvel of engineering when it comes to creating a coherent world that makes sense and feels fresh.
                                Nowadays, LLMs are getting lighter and easier to run locally. I would like to experiment with procedural quest generation per star system that would use system data to create engaging stories that would lead players from planet to planet.
                            </p>

                        </div>

                    </div>

                </div>


                <center><div className="downArrow" onClick={() => {
                    window.scrollTo({
                        top: window.innerHeight * 2,
                        behavior: 'smooth'
                    });
                }}>˅</div></center>
            </div>
        </div>
    );
}