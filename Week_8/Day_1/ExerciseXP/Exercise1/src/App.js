import React from "react";
import BuggyCounter from "./BuggyCounter";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  return (
    <div>
      <p><b>Click on the numbers to increase the counters.</b></p>
      <p>
        The counter is programmed to throw error when it reaches 5. This simulates a JavaScript error in a component.
      </p>

      {/* Simulation 1 */}
      <ErrorBoundary>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>

      <hr />

      {/* Simulation 2 */}
      <p>
        These two counters are each inside of their own error boundary. So if one crashes, the other is not affected.
      </p>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>

      <hr />

      {/* Simulation 3 */}
      <p>
        This counter is not inside of boundary. So if crashes, all other components are deleted.
      </p>
      <BuggyCounter />
    </div>
  );
}

export default App;
