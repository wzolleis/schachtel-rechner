import {Outlet, Route} from "react-router";
import Loading from "../components/app-state/Loading";
import {box, boxNew} from "@/app/route-urls";
import {LandingPage} from "@/app/layout/landing-page";
import {ProjectsPage} from "@/features/project/dashboard/projects-page";
import {BoxPage} from "@/features/box/page/box-page";
import {ProjectEdit} from "@/features/project/edit/project-edit";
import {ProjectCreate} from "@/features/project/create/project-create";

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
                                            element={<BoxPage/>}
                                     />
                                 ]}
                          />,
                      ]}
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
           ]}
    />

export default AppRutes