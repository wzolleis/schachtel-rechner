import {Outlet, Route} from "react-router";
import {calculateBox} from "@/features/box-calc/gehrung/box-calc-form-action";
import Loading from "../common/components/Loading";
import {boxCalc, gehrung, gehrung_alt} from "@/app/route-urls";
import BoxCalculator from "@/features/box-calc/gehrung/box-calculator";
import {BoxCalcLandingPage} from "@/features/box-calc/box-calc-landing-page";
import {LandingPage} from "@/features/landingpage/landing-page";
import BoxCalculatorAlt from "@/features/box-calc/gehrung/box-calculator-alt";

const AppRutes =
    <Route path={'/'}
           element={<LandingPage/>}
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
                                 action={calculateBox}
                          />,
                          <Route path={gehrung_alt}
                                 hydrateFallbackElement={<Loading/>}
                                 element={<BoxCalculatorAlt/>}
                                 action={calculateBox}
                          />
                      ]}
               />
           ]}
    />

export default AppRutes