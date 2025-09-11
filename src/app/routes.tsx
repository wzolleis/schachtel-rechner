import {Outlet, Route} from "react-router";
import Loading from "../components/app-state/Loading";
import {box, boxCalc, boxNew, gehrung, projects} from "@/app/route-urls";
import BoxCalculator from "@/features/box-calc/gehrung/box-calculator";
import {BoxCalcLandingPage} from "@/features/box-calc/box-calc-landing-page";
import {LandingPage} from "@/app/layout/landing-page";
import {ProjectPage} from "@/features/project/project-page";
import {BoxPage} from "@/features/box/box-page";

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
               <Route path={box}
                      hydrateFallbackElement={<Loading/>}
                      element={<Outlet/>}
                      children={[
                          <Route path={boxNew}
                                 hydrateFallbackElement={<Loading/>}
                                 element={<BoxPage/>}
                          />
                      ]}
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