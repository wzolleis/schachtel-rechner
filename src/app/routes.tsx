import {Route} from "react-router";
import App from "../App";
import {calculateBox} from "../features/box-calc/box-calc-form-action";
import Loading from "../common/components/Loading";

const AppRutes =
    <Route path={'/'}
           element={<App/>}
           action={calculateBox}
           hydrateFallbackElement={<Loading/>}
           id={'root'}
    >
    </Route>

export default AppRutes