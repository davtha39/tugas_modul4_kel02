import "./Main.css";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

import Usestate from "./Usestate/Usestate";
import Useeffect from "./Useeffect/Useeffect";
import Usecontext from "./Usecontext/Usecontext";
import Usememo from "./Usememo/Usememo";
import Usereducer from "./Usereducer/Usereducer";


export default function Main(){
    return(
        <BrowserRouter>
        <header>
          <div className="title">
            <p>Tugas React Hooks</p>
          </div>
          <nav>
            <Link className="text" to="/">
              useState
            </Link>
            <Link className="text navtext2" to="/Useeffect">
              useEffect
            </Link>
            <Link className="text" to="/Usecontext">
              useContext
            </Link>
            <Link className="text navtext2" to="/Usememo">
              useMemo
            </Link>
            <Link className="text" to="/Usereducer">
                useReducer
            </Link>
          </nav>
        </header>
        <Switch>
          <Route path="/" exact component={Usestate} />
          <Route path="/Useeffect" component={Useeffect} />
          <Route path="/Usecontext" component={Usecontext} />
          <Route path="/Usememo" component={Usememo} />
          <Route path="/Usereducer" component={Usereducer} />
        </Switch>
      </BrowserRouter>
    );
}