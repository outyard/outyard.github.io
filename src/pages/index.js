import React from 'react';

import Hackathon from '../components/hackathon';
import Layout from '../components/layout';
import Project from '../components/project';
import SEO from '../components/seo';

import '../styles/reset.scss';

const IndexPage = () => (
  <Layout>
    <SEO title="Outyard - Hackathon at Uppsala University" />

    <Hackathon
        id="#004"
        date="2020-04-25"
        title="Upcoming hackathon"
        text="What can you make in just 7 hours? Join us on Discord, build something awesome and get inspired by the creations of others."
        start="17:00"
        end="00:00"
        total="7"
        isTeaser="true">
    </Hackathon>

    <Hackathon
        id="#003"
        date="2020-03-28"
        title="Make a game about the coronavirus disease"
        start="17:00"
        end="00:00"
      total="7">

      <Project
          title="Vibus"
          author="Anton Bergåker"
          video="/videos/Vibus.mp4"
          files=""
          site="https://anton.bergaker.com/vibus/"
          github="https://github.com/outyard/vibus">
        <p>Prevent the virus from spreading on the bus! You are a driver for UL and there's a pandemic. Use state of the art technology to keep the bus clean from infection.</p>
        <p>Made with GameMaker Studio.</p>
      </Project>

      <Project
          title="Corona in Space"
          author="Albin Kroon"
          image=""
          files=""
          site=""
          github="">
        <p>We're apparently not safe from the disease anywhere, not even in space. Inspired by the arcade classic Asteroids, you control a spaceship in order to destroy all incoming projectiles.</p>
        <p>Made with JavaScript and Three.js.</p>
      </Project>

      <Project
          title="Hand"
          author="Carl Enlund"
          video="/videos/Hand.mp4"
          files=""
          site="https://outyard.github.io/hand/"
          github="https://github.com/outyard/hand">
        <p>Practice social distancing in this webcam-based dodge-the-bullets game. If you accumulate too many virus particles, the game is over. Hand tracking is used to locate the player's hand through the webcam feed, making the game a (mostly) wireless experience.</p>
        <p>Made with JavaScript and Handtrack.js.</p>
      </Project>

      <Project
          title="Corona Shooter"
          author="Jonas Nygren"
          image="/images/Corona_Shooter.jpg"
          files=""
          site="https://editor.p5js.org/full/BItscBW3m">
        <p>Don't let the virus get to you! Jump, dash and shoot to survive as long as possible, avoiding the swarm of incoming virus particles. Pay special attention to the bottom of the screen, to avoid any nasty surprises.</p>
        <p>Made with JavaScript and p5.js.</p>
      </Project>

      <Project
          title="Corona Sniper"
          author="Nils Lorentzon"
          video="/videos/Corona_Sniper.mp4"
          files=""
          site="https://www.nils-lorentzon.com/Outyard/"
          github="https://github.com/NilsLorentzon/Outyard1">
        <p>A browser gimmick used for good, this game makes you move a pop-up browser window to quickly locate and eliminate the disease. When you've acquired a target through the sniper scope, click it with your mouse. Only 40% of people can beat the game before the time runs out.</p>
        <p>Made with JavaScript.</p>
      </Project>

    </Hackathon>

    <Hackathon
        id="#002"
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
        id="#001"
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
