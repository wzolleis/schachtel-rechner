import {Outlet, Route} from "react-router";
import Loading from "../components/app-state/Loading";
import {LandingPage} from "@/app/layout/landing-page";
import {ProjectsPage} from "@/features/projects/dashboard/projects-page";
import {ProjectEdit} from "@/features/projects/edit/project-edit";
import {ProjectCreate} from "@/features/projects/create/project-create";
import {BoxesPage} from "@/features/boxes/dashboard/boxes-page";
import {BoxEdit} from "@/features/boxes/edit/box-edit";
import {ProjectBoxesOverview} from "@/features/projects/project-boxes/project-boxes-overview";

const AppRutes =
    <Route path={'/'}
           element={<LandingPage/>}
           hydrateFallbackElement={<Loading/>}
           id={'root'}
           children={[
               <Route path={'projects'}
                      hydrateFallbackElement={<Loading/>}
                      element={<Outlet/>}
                      children={[
                          <Route path={'dashboard'}
                                 index={true}
                                 element={<ProjectsPage/>}
                          />,
                          <Route path={'create'}
                                 element={<ProjectCreate/>}
                          />,
                          <Route path={':id'}
                                 element={<Outlet/>}
                                 children={[
                                     <Route path={'edit'}
                                            element={<ProjectEdit/>}
                                            index={true}
                                     />,
                                     <Route path={'boxes'}
                                            element={<ProjectBoxesOverview/>}
                                            index={true}
                                     />,
                                 ]}
                          />,
                      ]}
               />,
               <Route path={'boxes'}
                      hydrateFallbackElement={<Loading/>}
                      element={<Outlet/>}
                      children={[
                          <Route path={'dashboard'}
                                 index={true}
                                 element={<BoxesPage/>}
                          />,
                          <Route path={':id'}
                                 element={<Outlet/>}
                                 children={[
                                     <Route path={'edit'}
                                            element={<BoxEdit/>}
                                            index={true}
                                     />,
                                 ]}
                          />,
                      ]}
               />,
           ]}
    />

export default AppRutes