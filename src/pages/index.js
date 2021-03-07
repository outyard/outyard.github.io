import React from 'react';

import Hackathon from '../components/hackathon';
import Layout from '../components/layout';
import Project from '../components/project';
import SEO from '../components/seo';
import '../styles/reset.scss';

export default () => (
  <Layout>
    <SEO title="Outyard - Hackathon at Uppsala University" />

    <Hackathon
        id="007"
        title="Create a game about Mars"
        start="2021-03-06 14:00"
        end="2021-03-07 14:00">

      <Project
          title="Rover Wars"
          author="Anton Bergåker"
          video="/videos/rover-wars.mp4"
          source="https://github.com/AntonBergaker/RoverWars"
          site="https://anton.bergaker.com/rover_wars"
	  description="Battle it out against other rovers on the red planet!"
	  tools="GameMaker" />

      <Project
          title="Lost on Mars"
          author="Albin Kroon"
          video="/videos/lost-on-mars.mp4"
          download="/files/lost-on-mars.zip"
	  description="You are lost on Mars and need to find missing parts to rebuild your space ship."
	  tools="Unity" />

      <Project
          title="Mars Rovering"
          author="Jacob S."
          video="/videos/mars-rovering.mp4"
          site="https://jakehasradio.itch.io/mars-rovering"
	  description="Explore Mars and plant flowers!"
	  tools="GameMaker" />

      <Project
          title="Get the Mars"
          author="Filip"
          video="/videos/get-the-mars.mp4"
          source="https://github.com/mrPaintMan/get-the-mars"
          site="https://mrpaintman.github.io/get-the-mars/index.html"
	  description="Gotta catch that Mars bar! A unique interpretation of the hackathon&rsquo;s theme."
	  tools="JavaScript and Phaser" />

      <Project
          title="Flat Mars"
          author="Carl Enlund"
          image="/images/flat-mars.jpg"
          download="/files/flat-mars.zip"
          source="https://github.com/carlenlund/flat-mars"
	  description="Control the Mars rover through a virtual screen. You work as an operator at NASA&rsquo;s Mission Control Center and suddenly an alarm goes off."
	  tools="Unity and SteamVR" />

    </Hackathon>

    <Hackathon
        id="006"
        title="Create a game about darkness"
        start="2021-02-06 14:00"
        end="2021-02-07 14:00">

      <Project
          title="The Void"
          author="Nils Lorentzon"
          video="/videos/the-void.mp4"
          source="/files/the-void.zip"
	  description="Black holes, planets and gravitation. What could possibly go wrong?"
	  tools="Python and Pygame" />

      <Project
          title="Dartness"
          author="Carl Enlund"
          video="/videos/dartness.mp4"
          download="/files/dartness.zip"
          source="https://github.com/carlenlund/dartness"
	  description="Play darts in the dark. In this game the player has to memorize dart board positions and throw darts after the lights go out."
	  tools="Unity and SteamVR" />

      <Project
          title="There&rsquo;s Something In The Dark"
          author="Anton Bergåker"
          video="/videos/theres-something-in-the-dark.mp4"
          source="https://github.com/AntonBergaker/theres_something_in_the_dark/"
          site="https://anton.bergaker.com/theres_something_in_the_dark/"
	  description="Keep your torch and campfire lit if you are to survive the night."
	  tools="GameMaker" />

      <Project
          title="Sisyphus Bubble Popper VR"
          author="Jacob S."
          video="/videos/sisyphus-bubble-popper-vr.mp4"
          download="/files/sisyphus-bubble-popper-vr.zip"
	  description="Pop bubbles with your candles, but the game is over if you let both flames go out."
	  tools="Lua and LÖVR" />

      <Project
          title="Diaglow"
          author="Albin Kroon"
          image="/images/diaglow.png"
	  description="A horde of monsters are hiding in the dark. Luckily you&rsquo;re armed with a powerful flashlight."
	  tools="Python and Pygame" />

    </Hackathon>

    <Hackathon
        id="005"
        title="Create a content generator app"
        start="2020-05-23 17:00"
        end="2020-05-24 00:00">

      <Project
          title="Twitter Markov"
          author="Albin Kroon"
          image="/images/twitter-markov.png"
          site="https://markovtweet.herokuapp.com/"
	  description="This web app uses Markov chains to procedurally generate new tweets from your favorite Twitter users."
	  tools="NodeJS and Twit" />

      <Project
          title="Wise"
          author="Carl Enlund"
          image="/images/wise.png"
          site="https://outyard.github.io/wise/"
          source="https://github.com/outyard/wise"
	  description="Start your day off with a strong motivational quote. Personally nothing makes me more pumped up than hearing &ldquo;Always succeed&rdquo; or &ldquo;You can do it&rdquo;."
	  tools="JavaScript" />

      <Project
          title="Twinkle, Twinkle, Twinkle"
          author="Carl Enlund"
          image="/images/twinkle-twinkle-twinkle.png"
          site="https://outyard.github.io/twinkle-twinkle-twinkle/"
          source="https://github.com/outyard/twinkle-twinkle-twinkle"
	  description="Twinkle, Twinkle, Little Star, but there&rsquo;s more&hellip;"
	  tools="JavaScript and Web Audio API" />

    </Hackathon>

    <Hackathon
        id="004"
        title="Create a game or app about sleep"
        start="2020-04-25 17:00"
        end="2020-04-26 00:00">

      <Project
          title="Puzzle Solving Factory"
          author="Jacob S."
          video="/videos/puzzle-solving-factory.mp4"
          download="/files/puzzle-solving-factory.zip"
	  description="Why sleep when you can spend the night solving puzzles? Help the factory worker stay alert and survive through his tough working conditions by utilizing the classic &ldquo;arm shake&rdquo;."
	  tools="GameMaker" />

      <Project
          title="Sleep Quiz"
          author="Nils Lorentzon"
          image="/images/sleep-quiz.png"
          site="https://www.nils-lorentzon.com/Outyard2/"
	  description="Learn fun facts about sleep, a perfect introduction to the theme of this hackathon."
	  tools="JavaScript" />

      <Project
          title="Sleepn&rsquo;t"
          author="Carl Enlund"
          video="/videos/sleepnt.mp4"
          download="https://github.com/outyard/sleepnt/releases/download/0.1/sleepnt-0.1.zip"
          source="https://github.com/outyard/sleepnt/"
	  description="Survive as long as possible in this VR horror game. You wake up in the middle of the night standing on your bed with a camera in your hand as you see a man floating towards you from a distance."
	  tools="Unity" />

      <Project
          title="Sleep Tracker"
          author="Albin Kroon"
	  description="An app which tracks sleeping patterns by making use of sensors in your smartphone, for example microphone and gyroscope.  "
	  tools="Dart and Flutter" />

      <Project
          title="Caffeine King"
          author="Anton Bergåker"
          video="/videos/caffeine-king.mp4"
          site="https://anton.bergaker.com/caffeineking/"
          source="https://github.com/AntonBergaker/CaffeineKing"
	  description="The King has been cursed! If he falls asleep he will die! Recruit peasants and farmers to give him a steady supply of coffee to inject into his bloodstream."
	  tools="GameMaker" />

      <Project
          title="OpenGL Game Engine"
          author="Max Gabrielsson"
	  description="A custom game engine built from the ground up. Maybe there&rsquo;s an upcoming platform game built with the engine&hellip;"
	  tools="C++ and OpenGL" />

    </Hackathon>

    <Hackathon
        id="003"
        title="Create a game about covid-19"
        start="2020-03-28 17:00"
        end="2020-03-29 00:00">

      <Project
          title="Vibus"
          author="Anton Bergåker"
          video="/videos/vibus.mp4"
          site="https://anton.bergaker.com/vibus/"
          source="https://github.com/outyard/vibus"
	  description="Prevent the virus from spreading on the bus! You are a driver for UL and there&rsquo;s a pandemic. Use state of the art technology to keep the bus clean from infection."
	  tools="GameMaker" />

      <Project
          title="Corona in Space"
          author="Albin Kroon"
          image="/images/corona-in-space.png"
	  description="We&rsquo;re not safe from the disease anywhere, not even in space. Inspired by the arcade classic Asteroids, you control a spaceship in order to destroy all incoming projectiles."
	  tools="JavaScript and Three.js" />

      <Project
          title="Hand"
          author="Carl Enlund"
          video="/videos/hand.mp4"
          site="https://outyard.github.io/hand/"
          source="https://github.com/outyard/hand"
	  description="Practice social distancing in this webcam-based dodge-the-bullets game. If you catch too many virus particles, the game is over."
	  tools="JavaScript and Handtrack.js" />

      <Project
          title="Corona Shooter"
          author="Jonas Nygren"
          image="/images/corona-shooter.jpg"
          site="https://editor.p5js.org/full/BItscBW3m"
	  description="Don&rsquo;t let the virus get to you! Jump, dash and shoot to survive as long as possible, avoiding the swarm of incoming virus particles."
	  tools="JavaScript and p5.js" />

      <Project
          title="Corona Sniper"
          author="Nils Lorentzon"
          video="/videos/corona-sniper.mp4"
          site="https://www.nils-lorentzon.com/Outyard/"
          source="https://github.com/NilsLorentzon/Outyard1"
	  description="A browser gimmick used for good, this game makes you move a pop-up browser window to quickly locate and eliminate the disease. When you&rsquo;ve acquired a target through the sniper scope, click it with your mouse."
	  tools="JavaScript" />

    </Hackathon>

    <Hackathon
        id="002"
        title="Create a game where you choose your character"
        start="2020-02-28 17:00"
        end="2020-02-29 00:00"
        location="Uthgård"
        locationUrl="https://goo.gl/maps/y5K6Nvzf9Sxu8AiFA">

      <Project
          title="Petrock Simulator"
          author="Anton Bergåker"
          video="/videos/petrock-simulator.mp4"
          source="https://github.com/outyard/Petrock-Simulator"
	  description="Design your own personal petrock to strategically beat this physics-based sidescroller. The game is literally rock and roll."
	  tools="GameMaker" />

      <Project
          title="Car"
          author="Carl Enlund"
          image="/images/car.png"
          site="https://outyard.github.io/car/"
          source="https://github.com/outyard/car"
	  description="A game where you customize a flying car and try to beat a map filled with colorful balloons. The catch is that everything you do drains energy from the car, so you better hurry."
	  tools="JavaScript" />

    </Hackathon>

    <Hackathon
        id="001"
        title="Create a multiplayer game with mobile controls"
        start="2020-01-24 17:00"
        end="2020-01-25 00:00"
        location="Uthgård"
        locationUrl="https://goo.gl/maps/y5K6Nvzf9Sxu8AiFA">

      <Project
          title="Zombie Invasion"
          author="Anton Bergåker"
          video="/videos/zombie-invasion.mp4"
          source="https://github.com/outyard/zombie-invasion"
	  description="A zombie shooting game where one player fights hordes of zombies strategically placed by a second player. The first player plays the game using an Xbox controller, and the second player uses a smartphone to place the zombies."
	  tools="GameMaker" />

      <Project
          title="Shooter"
          author="Carl Enlund"
          image="/images/shooter.png"
          site="https://outyardshooter.herokuapp.com"
          source="https://github.com/outyard/shooter"
	  description="A web-based first-person shooter where the players fight eachother to see who first scores 10 points. The game contains 5 unique maps which are cycled through after each win."
	  tools="NodeJS, Socket.IO and Three.js" />

      <Project
          title="Platform Jumper"
          author="Peter Öhlmér"
	  description="In this game you jump on platforms falling down from the sky, trying not to get crushed."
	  tools="NodeJS and Socket.IO" />

      <Project
          title="Maze Delay"
          author="Arvid Sandin"
          image="/images/maze-delay.png"
          site="https://outyard.github.io/maze-delay/"
          source="https://github.com/outyard/maze-delay"
	  description="A top-down maze game with a twist... Every move you make is delayed by half a second, and touching the walls equals losing."
	  tools="NodeJS and Socket.IO" />

    </Hackathon>
  </Layout>
);
