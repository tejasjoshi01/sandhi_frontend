import { Route } from "react-router-dom";
import Register from "../components/Registration/Register.js";
import Home from "../containers/Home.js";
import Candidate from "../components/Candidate/Candidate.js";
import Jobs from "../components/Jobs/Jobs.js";
import PostJob from "../components/PostJob/PostJob.js";

const BaseRouter = () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/labour/register" component={Register} />
      <Route exact path="/jobs/register" component={PostJob}/>

            

      <Route
        exact
        path="/candidates/electrician"
        render={(props) => (
          <div>
            <Candidate category="ELECTRICIAN" />
          </div>
        )}
      />
      <Route
        exact
        path="/candidates/plumber"
        render={(props) => (
          <div>
            <Candidate category="PLUMBER" />
          </div>
        )}
      />
      <Route
        exact
        path="/candidates/mechanic"
        render={(props) => (
          <div>
            <Candidate category="MECHANIC" />
          </div>
        )}
      />
      <Route
        exact
        path="/candidates/cooking"
        render={(props) => (
          <div>
            <Candidate category="COOK" />
          </div>
        )}
      />
      <Route
        exact
        path="/candidates/peon"
        render={(props) => (
          <div>
            <Candidate category="PEON" />
          </div>
        )}
      />
      <Route
        exact
        path="/candidates/driver"
        render={(props) => (
          <div>
            <Candidate category="DRIVER" />
          </div>
        )}
      />
      <Route
        exact
        path="/candidates/housekeeping"
        render={(props) => (
          <div>
            <Candidate category="MAID" />
          </div>
        )}
      />
      <Route
        exact
        path="/candidates/siteworkers"
        render={(props) => (
          <div>
            <Candidate category="LABOUR" />
          </div>
        )}
      />
      <Route
        exact
        path="/candidates/securityguard"
        render={(props) => (
          <div>
            <Candidate category="SECURITY GUARD" />
          </div>
        )}
      />

      {/* Job Routes */}
      <Route
        exact
        path="/jobs/electrician"
        render={(props) => (
          <div>
            <Jobs category="ELECTRICIAN" />
          </div>
        )}
      />
      <Route
        exact
        path="/jobs/plumber"
        render={(props) => (
          <div>
            <Jobs category="PLUMBER" />
          </div>
        )}
      />
      <Route
        exact
        path="/jobs/mechanic"
        render={(props) => (
          <div>
            <Jobs category="MECHANIC" />
          </div>
        )}
      />
      <Route
        exact
        path="/jobs/cooking"
        render={(props) => (
          <div>
            <Jobs category="COOK" />
          </div>
        )}
      />
      <Route
        exact
        path="/jobs/peon"
        render={(props) => (
          <div>
            <Jobs category="PEON" />
          </div>
        )}
      />
      <Route
        exact
        path="/jobs/driver"
        render={(props) => (
          <div>
            <Jobs category="DRIVER" />
          </div>
        )}
      />
      <Route
        exact
        path="/jobs/housekeeping"
        render={(props) => (
          <div>
            <Jobs category="MAID" />
          </div>
        )}
      />
      <Route
        exact
        path="/jobs/siteworkers"
        render={(props) => (
          <div>
            <Jobs category="LABOUR" />
          </div>
        )}
      />
      <Route
        exact
        path="/jobs/securityguard"
        render={(props) => (
          <div>
            <Jobs category="SECURITY GUARD" />
          </div>
        )}
      />
      




    </div>
  );
};

export default BaseRouter;
