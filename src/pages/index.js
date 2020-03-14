import React from 'react';

import Hackathon from '../components/hackathon';
import Layout from '../components/layout';
import Project from '../components/project';
import SEO from '../components/seo';

import '../styles/reset.scss';

const IndexPage = () => (
  <Layout>
    <SEO title="Outyard - Hackathon @ Uppsala University" />

    <Hackathon
        date="2020-03-28"
        title="Code with us at Uthgård!"
        text="What can you make in 7 hours? Bring a laptop and some snacks and join us at Uthgård (2nd floor). Build something awesome and get inspired by the creations of others."
        start="17:00"
        end="00:00"
        total="7"
        location="Uthgård"
        locationUrl="https://goo.gl/maps/y5K6Nvzf9Sxu8AiFA"
        isTeaser="true">
    </Hackathon>

    <Hackathon
        date="2020-02-28"
        title="Make a game with a customizable character"
        start="17:00"
        end="00:00"
        total="7"
        location="Uthgård"
        locationUrl="https://goo.gl/maps/y5K6Nvzf9Sxu8AiFA">

      <Project
          title="Car"
          author="Carl Enlund"
          image="/images/Car.png"
          files=""
          site="https://outyard.github.io/car/"
          github="https://github.com/outyard/car">
        <p>A game where you customize a flying car and try to beat a map filled with colorful balloons. The catch is that everything you do drains energy from the car, so you better hurry! You can choose which gun and thruster to use through a simple menu.</p>
        <p>Made with JavaScript.</p>
      </Project>

      <Project
          title="Petrock Simulator"
          author="Anton Bergåker"
          video="/videos/Petrock_Simulator.mp4"
          files=""
          github="https://github.com/outyard/Petrock-Simulator">
        <p>Design your own personal petrock to strategically beat this physics-based sidescroller. The game is literally rock and roll.</p>
        <p>Made with GameMaker Studio.</p>
      </Project>

    </Hackathon>

    <Hackathon
        date="2020-01-24"
        title="Make an online multiplayer game with mobile controls"
        start="17:00"
        end="00:00"
        total="7"
        location="Uthgård"
        locationUrl="https://goo.gl/maps/y5K6Nvzf9Sxu8AiFA">

      <Project
          title="Zombie Invasion"
          author="Anton Bergåker"
          image=""
          video="/videos/Zombie_Invasion.mp4"
          files=""
          github="https://github.com/outyard/zombie-invasion">
        <p>A zombie shooting game where one player fights hordes of zombies strategically placed by a second player. The first player plays the game using an Xbox controller plugged into a PC, and the second player uses touch controls on a smartphone to place the zombies.</p>
        <p>Made with GameMaker Studio.</p>
      </Project>

      <Project
          title="Shooter"
          author="Carl Enlund"
          image="/images/Shooter.png"
          site="https://outyardshooter.herokuapp.com"
          files=""
          github="https://github.com/outyard/shooter">
        <p>A web-based first-person shooter where the players fight eachother to see who first scores 10 points. The game contains 5 unique maps which are cycled through after each win. Plays sound effects for gunshots and when a player wins.</p>
        <p>Made with NodeJS, Socket.IO and Three.js.</p>
      </Project>

      <Project
          title="Platform jumper"
          author="Peter Öhlmér"
          image=""
          files=""
          github="">
        <p>In this game you jump on platforms falling down from the sky, trying not to get crushed.</p>
        <p>Made with NodeJS and Socket.IO.</p>
      </Project>

      <Project
          title="Maze Delay"
          author="Arvid Sandin"
          image="/images/Maze_Delay.png"
          files=""
          site="https://outyard.github.io/maze-delay/"
          github="https://github.com/outyard/maze-delay">
        <p>A top-down maze game with a twist... Every move you make is delayed by half a second, and touching the walls equals losing. The game is played on desktop using a smartphone as a controller as you stressfully try to navigate through an otherwise simple map.</p>
        <p>Made with NodeJS and Socket.IO.</p>
      </Project>

    </Hackathon>
  </Layout>
);

export default IndexPage;
