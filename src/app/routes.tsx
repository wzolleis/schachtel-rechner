import {Outlet, Route} from "react-router";
import Loading from "../common/components/Loading";
import {boxCalc, gehrung, projects} from "@/app/route-urls";
import BoxCalculator from "@/features/box-calc/gehrung/box-calculator";
import {BoxCalcLandingPage} from "@/features/box-calc/box-calc-landing-page";
import {LandingPage} from "@/features/landingpage/landing-page";
import {ProjectPage} from "@/features/project/project-page";

const AppRutes =
    <Route path={'/'}
           element={<LandingPage/>}
           hydrateFallbackElement={<Loading/>}
           id={'root'}
           children={[
               <Route path={projects}
                      hydrateFallbackElement={<Loading/>}
                      element={<ProjectPage/>}
               />,
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
                          />,
                      ]}
               />
           ]}
    />

export default AppRutes