import {Outlet, Route} from "react-router";
import {calculateBox} from "@/features/box-calc/gehrung/box-calc-form-action";
import Loading from "../common/components/Loading";
import {boxCalc, gehrung} from "@/app/route-urls";
import BoxCalculator from "@/features/box-calc/gehrung/box-calculator";
import {BoxCalcLandingPage} from "@/features/box-calc/box-calc-landing-page";
import {LandingPage} from "@/features/landingpage/landing-page";

const AppRutes =
    <Route path={'/'}
           element={<LandingPage/>}
           action={calculateBox}
           hydrateFallbackElement={<Loading/>}
           id={'root'}
           children={[
               <Route path={boxCalc}
                      hydrateFallbackElement={<Loading/>}
                      element={<Outlet/>}
                      children={[
                          <Route index={true}
                                 path={'landingpage'}
                                 element={<BoxCalcLandingPage/>}
                          />,
                          <Route path={gehrung}
                                 hydrateFallbackElement={<Loading/>}
                                 element={<BoxCalculator/>}
                          />
                      ]}
               />
           ]}
    />

export default AppRutes