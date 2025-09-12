import {Outlet, Route} from "react-router";
import Loading from "../components/app-state/Loading";
import {box, boxCalc, boxNew, drawer, gehrung, projects, standardDrawer} from "@/app/route-urls";
import BoxGehrungCalculator from "@/features/box-calc/gehrung/box-calculator";
import {BoxCalcLandingPage} from "@/features/box-calc/box-calc-landing-page";
import {LandingPage} from "@/app/layout/landing-page";
import {ProjectPage} from "@/features/project/project-page";
import {BoxPage} from "@/features/box/box-page";
import {DrawerLandingPage} from "@/features/box-calc/drawer/drawer-landing-page";
import {StandardDrawerCalculator} from "@/features/box-calc/drawer/standard-drawer-calculator";

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
                                 element={<BoxGehrungCalculator/>}
                          />,
                          <Route path={drawer}
                                 hydrateFallbackElement={<Loading/>}
                                 element={<DrawerLandingPage/>}
                                 children={[
                                     <Route path={standardDrawer}
                                            hydrateFallbackElement={<Loading/>}
                                            element={<StandardDrawerCalculator/>}
                                     />
                                 ]}
                          />
                      ]}
               />,
           ]}
    />

export default AppRutes