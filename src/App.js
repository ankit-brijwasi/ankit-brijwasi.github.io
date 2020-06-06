import React, { Suspense, lazy } from "react";
import { CircularProgress } from "@material-ui/core";

const Routes = lazy(() => import("./Routes"));

function App(props) {
  return (
    <Suspense
      fallback={
        <div
          style={{
            display: "flex",
            height: "100vh",
            width: "100%",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <CircularProgress style={{ color: "#f1bb72" }} />
        </div>
      }
    >
      <Routes />
    </Suspense>
  );
}

export default App;
