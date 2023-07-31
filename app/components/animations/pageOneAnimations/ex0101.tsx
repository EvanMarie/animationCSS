import Break from "~/components/organizational/break";
import Code from "~/components/organizational/code";
import SectionContainer from "~/components/organizational/sectionContainer";

export default function Ex0101() {
  return (
    <SectionContainer
      header="Introduction"
      subheader="CSS Animation Components"
    >
      <p>
        CSS animations allow for more complex animations that can be relatively
        self-contained with clean, declarative syntax. They're great for
        providing feedback, displaying state transitions, and providing a sense
        of dynamism to your web pages.
      </p>
      <Break />
      <p>CSS animations are built from two main components:</p>
      <ul>
        <li>
          <b>@keyframes</b> rule: This defines the behavior of the animation -
          the sequence of states the animation will go through.
        </li>
        <li>
          <b>Animation properties</b>: These define when, where, how long, and
          how often an animation should occur.
        </li>
      </ul>

      <Break />
      <h3>CSS @keyframes Rule</h3>
      <p>
        The @keyframes rule specifies the animation code. The animation is
        created by gradually changing from one set of CSS styles to another.
        During the animation, you can change the set of CSS styles many times.
        Specify when the style change will happen in percent, or with the
        keywords from and to, which is the same as 0% and 100%. 0% is the
        beginning of the animation, 100% is when the animation is complete.
      </p>

      <Code
        code={`
    @keyframes myFirstAnimation {
      0%   {background: red;}
      25%  {background: yellow;}
      50%  {background: blue;}
      100% {background: green;}
    }
  `}
        language="css"
      />
      <Break />
      <h3>CSS Animation Properties</h3>
      <p>
        Once we've defined an animation with @keyframes, we can use it with the
        CSS animation property, which is a shorthand property for eight
        different properties:
      </p>
      <ul>
        <li>
          a<b>nimation-name</b>: Specifies the name of the @keyframes at-rule to
          use
        </li>
        <li>
          <b>animation-duration</b>: Specifies how long the animation takes to
          complete one cycle
        </li>
        <li>
          <b>animation-timing-function</b>: Specifies the speed curve of the
          animation
        </li>
        <li>
          <b>animation-delay</b>: Specifies a delay before the animation will
          start
        </li>
        <li>
          animation-iteration-count: Specifies the number of times an animation
          should be played
        </li>
        <li>
          <b>animation-direction</b>: Specifies whether or not the animation
          should play in reverse on alternate cycles
        </li>
        <li>
          <b>animation-fill-mode</b>: Specifies what values are applied by the
          animation outside the time it is executing
        </li>
        <li>
          animation-play-state: Specifies whether the animation is running or
          paused
        </li>
      </ul>

      <div className="ex0101-div">TEST</div>
    </SectionContainer>
  );
}
