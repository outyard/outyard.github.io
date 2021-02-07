import React from 'react';

import Hackathon from '../components/hackathon';
import HackathonTeaser from '../components/hackathon-teaser';
import Layout from '../components/layout';
import Project from '../components/project';
import SEO from '../components/seo';
import '../styles/reset.scss';

export default () => (
  <Layout>
    <SEO title="Outyard - Hackathon at Uppsala University" />

    <Hackathon
        id="#006"
        date="6 February 2021"
        title="Make a game about darkness"
        start="2021-02-06 14:00"
        end="2021-02-07 14:00">

      <Project
          title="The Void"
          author="Nils Lorentzon"
          video="/videos/the-void.mp4"
          files="/files/the-void.zip">
        <p>Black holes, planets and physics &ndash; what could possibly go wrong?</p>
        <p>Made with Python and Pygame.</p>
      </Project>

      <Project
          title="Dartness"
          author="Carl Enlund"
          video="/videos/dartness.mp4"
          files="/files/dartness.zip"
          github="https://github.com/carlenlund/dartness">
        <p>Play darts in the dark.</p>
        <p>Made with Unity and SteamVR.</p>
      </Project>

      <Project
          title="There&rsquo;s Something In The Dark"
          author="Anton Bergåker"
          video="/videos/theres-something-in-the-dark.mp4"
          github="https://github.com/AntonBergaker/theres_something_in_the_dark/"
          site="https://anton.bergaker.com/theres_something_in_the_dark/">
        <p>Gather sticks to keep your campfire alive, all while avoiding invisible monsters and trying to stay warm.</p>
        <p>Made with GameMaker Studio.</p>
      </Project>

      <Project
          title="Sisyphus Bubble Popper VR"
          author="Jacob S."
          video="/videos/sisyphus-bubble-popper-vr.mp4"
          files="/files/sisyphus-bubble-popper-vr.zip">
        <p>Pop bubbles with your candles, but don&rsquo;t let the flame go out.</p>
        <p>Made with Lua and LÖVR.</p>
      </Project>

      <Project
          title="Diaglow"
          author="Albin Kroon"
          image="/images/diaglow.png">
        <p>Barely visible monsters are hiding in the dark. Luckily you&rsquo;re armed with a powerful flashlight.</p>
        <p>Made with Python and Pygame.</p>
      </Project>

    </Hackathon>

    <Hackathon
        id="#005"
        date="23 May 2020"
        title="Make an app that generates random content"
        start="2020-05-23 17:00"
        end="2020-05-24 00:00">

      <Project
          title="Twitter Markov"
          author="Albin Kroon"
          image="/images/twitter-markov.png"
          files=""
          site="https://markovtweet.herokuapp.com/">
        <p>Soon no one will be around to make new tweets. But stochastic models are here to save the day! This web app uses Markov chains to procedurally generate new tweets from your favorite Twitter users.</p>
        <p>Made with NodeJS and Twit.</p>
      </Project>

      <Project
          title="Wise"
          author="Carl Enlund"
          image="/images/Wise.png"
          site="https://outyard.github.io/wise/"
          github="https://github.com/outyard/wise">
        <p>Start your day off with a strong motivational quote. Personally nothing makes me more pumped up than hearing &ldquo;Always succeed&rdquo; or &ldquo;You can do it&rdquo;.</p>
        <p>Made with JavaScript.</p>
      </Project>

      <Project
          title="Twinkle, Twinkle, Twinkle"
          author="Carl Enlund"
          image="/images/twinkle-twinkle-twinkle.png"
          files=""
          site="https://outyard.github.io/twinkle-twinkle-twinkle/"
          github="https://github.com/outyard/twinkle-twinkle-twinkle">
        <p>Twinkle, Twinkle, Little Star, but there&rsquo;s more&hellip;</p>
        <p>Made with JavaScript using the Web Audio API.</p>
      </Project>

    </Hackathon>

    <Hackathon
        id="#004"
        date="25 April 2020"
        title="Make an app or game about sleep"
        start="2020-04-25 17:00"
        end="2020-04-26 00:00">

      <Project
          title="Puzzle Solving Factory"
          author="Jacob S."
          video="/videos/puzzle-solving-factory.mp4"
          files="/files/puzzle-solving-factory.zip">
        <p>Why sleep when you can spend the night solving puzzles? Help the factory worker stay alert and survive through his tough working conditions by utilizing the classic &ldquo;arm shake strategy&rdquo;.</p>
        <p>Made with GameMaker Studio.</p>
      </Project>

      <Project
          title="Sleep Quiz"
          author="Nils Lorentzon"
          image="/images/sleep-quiz.png"
          site="https://www.nils-lorentzon.com/Outyard2/">
        <p>Learn fun facts about sleep, a perfect introduction to the theme of this hackathon!</p>
        <p>Made with HTML, CSS and JavaScript.</p>
      </Project>

      <Project
          title="Sleepn&rsquo;t"
          author="Carl Enlund"
          video="/videos/Sleepnt.mp4"
          files="https://github.com/outyard/sleepnt/releases/download/0.1/sleepnt-0.1.zip"
          github="https://github.com/outyard/sleepnt/">
        <p>Survive as long as possible in this VR nightmare horror game. You wake up in the middle of the night with a camera in your hand and blood stains on your bed, as you see a man floating towards you from a distance. Can you make it through the night using only the flash of your camera?</p>
        <p>Made with Unity and C#, using free assets from the Unity Asset Store. Tested on Oculus Rift.</p>
      </Project>

      <Project
          title="Sleep Tracker"
          author="Albin Kroon">
        <p>An app which tracks sleeping patterns by making use of sensors in your smartphone, for example microphone and gyroscope.  </p>
        <p>Made with Dart and Flutter.</p>
      </Project>

      <Project
          title="Caffeine King"
          author="Anton Bergåker"
          video="/videos/caffeine-king.mp4"
          site="https://anton.bergaker.com/caffeineking/"
          github="https://github.com/AntonBergaker/CaffeineKing">
        <p>The King has been cursed! If he falls asleep he will die! Recruit peasants and farmers to give him a steady supply of coffee to inject into his bloodstream.</p>
        <p>Made with GameMaker Studio.</p>
      </Project>

      <Project
          title="OpenGL Game Engine"
          author="Max Gabrielsson">
        <p>A fully custom game engine built from the ground up. Maybe there&rsquo;s an upcoming platform game built with the engine&hellip;</p>
        <p>Made with C++ and OpenGL.</p>
      </Project>

    </Hackathon>

    <Hackathon
        id="#003"
        date="28 March 2020"
        title="Make a game about the coronavirus disease"
        start="2020-03-28 17:00"
        end="2020-03-29 00:00">

      <Project
          title="Vibus"
          author="Anton Bergåker"
          video="/videos/Vibus.mp4"
          site="https://anton.bergaker.com/vibus/"
          github="https://github.com/outyard/vibus">
        <p>Prevent the virus from spreading on the bus! You are a driver for UL and there&rsquo;s a pandemic. Use state of the art technology to keep the bus clean from infection.</p>
        <p>Made with GameMaker Studio.</p>
      </Project>

      <Project
          title="Corona In Space"
          author="Albin Kroon"
          image="/images/corona-in-space.png">
        <p>We&rsquo;re not safe from the disease anywhere, not even in space. Inspired by the arcade classic Asteroids, you control a spaceship in order to destroy all incoming projectiles.</p>
        <p>Made with JavaScript and Three.js.</p>
      </Project>

      <Project
          title="Hand"
          author="Carl Enlund"
          video="/videos/Hand.mp4"
          site="https://outyard.github.io/hand/"
          github="https://github.com/outyard/hand">
        <p>Practice social distancing in this webcam-based dodge-the-bullets game. If you accumulate too many virus particles, the game is over. Hand tracking is used to locate the player&rsquo;s hand through the webcam feed, making the game a (mostly) wireless experience.</p>
        <p>Made with JavaScript and Handtrack.js.</p>
      </Project>

      <Project
          title="Corona Shooter"
          author="Jonas Nygren"
          image="/images/corona-shooter.jpg"
          site="https://editor.p5js.org/full/BItscBW3m">
        <p>Don&rsquo;t let the virus get to you! Jump, dash and shoot to survive as long as possible, avoiding the swarm of incoming virus particles. Pay special attention to the bottom of the screen, to avoid any nasty surprises.</p>
        <p>Made with JavaScript and p5.js.</p>
      </Project>

      <Project
          title="Corona Sniper"
          author="Nils Lorentzon"
          video="/videos/corona-sniper.mp4"
          site="https://www.nils-lorentzon.com/Outyard/"
          github="https://github.com/NilsLorentzon/Outyard1">
        <p>A browser gimmick used for good, this game makes you move a pop-up browser window to quickly locate and eliminate the disease. When you&rsquo;ve acquired a target through the sniper scope, click it with your mouse. Only 40% of people can beat the game before the time runs out.</p>
        <p>Made with JavaScript.</p>
      </Project>

    </Hackathon>

    <Hackathon
        id="#002"
        date="28 February 2020"
        title="Make a game with a customizable character"
        start="2020-02-28 17:00"
        end="2020-02-29 00:00"
        location="Uthgård"
        locationUrl="https://goo.gl/maps/y5K6Nvzf9Sxu8AiFA">

      <Project
          title="Car"
          author="Carl Enlund"
          image="/images/Car.png"
          site="https://outyard.github.io/car/"
          github="https://github.com/outyard/car">
        <p>A game where you customize a flying car and try to beat a map filled with colorful balloons. The catch is that everything you do drains energy from the car, so you better hurry! You can choose which gun and thruster to use through a simple menu.</p>
        <p>Made with JavaScript.</p>
      </Project>

      <Project
          title="Petrock Simulator"
          author="Anton Bergåker"
          video="/videos/petrock-simulator.mp4"
          github="https://github.com/outyard/Petrock-Simulator">
        <p>Design your own personal petrock to strategically beat this physics-based sidescroller. The game is literally rock and roll.</p>
        <p>Made with GameMaker Studio.</p>
      </Project>

    </Hackathon>

    <Hackathon
        id="#001"
        date="24 January 2020"
        title="Make an online multiplayer game with mobile controls"
        start="2020-01-24 17:00"
        end="2020-01-25 00:00"
        location="Uthgård"
        locationUrl="https://goo.gl/maps/y5K6Nvzf9Sxu8AiFA">

      <Project
          title="Zombie Invasion"
          author="Anton Bergåker"
          video="/videos/zombie-invasion.mp4"
          github="https://github.com/outyard/zombie-invasion">
        <p>A zombie shooting game where one player fights hordes of zombies strategically placed by a second player. The first player plays the game using an Xbox controller plugged into a PC, and the second player uses touch controls on a smartphone to place the zombies.</p>
        <p>Made with GameMaker Studio.</p>
      </Project>

      <Project
          title="Shooter"
          author="Carl Enlund"
          image="/images/Shooter.png"
          site="https://outyardshooter.herokuapp.com"
          github="https://github.com/outyard/shooter">
        <p>A web-based first-person shooter where the players fight eachother to see who first scores 10 points. The game contains 5 unique maps which are cycled through after each win. Plays sound effects for gunshots and when a player wins.</p>
        <p>Made with NodeJS, Socket.IO and Three.js.</p>
      </Project>

      <Project
          title="Platform jumper"
          author="Peter Öhlmér">
        <p>In this game you jump on platforms falling down from the sky, trying not to get crushed.</p>
        <p>Made with NodeJS and Socket.IO.</p>
      </Project>

      <Project
          title="Maze Delay"
          author="Arvid Sandin"
          image="/images/maze-delay.png"
          site="https://outyard.github.io/maze-delay/"
          github="https://github.com/outyard/maze-delay">
        <p>A top-down maze game with a twist... Every move you make is delayed by half a second, and touching the walls equals losing. The game is played on desktop using a smartphone as a controller as you stressfully try to navigate through an otherwise simple map.</p>
        <p>Made with NodeJS and Socket.IO.</p>
      </Project>

    </Hackathon>
  </Layout>
);
