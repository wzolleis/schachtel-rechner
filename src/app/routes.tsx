import {Outlet, Route} from "react-router";
import Loading from "../components/app-state/Loading";
import {box, boxNew} from "@/app/route-urls";
import {LandingPage} from "@/app/layout/landing-page";
import {ProjectPage} from "@/features/project/administration/project-page";
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
                          <Route path={'administration'}
                                 index={true}
                                 element={<ProjectPage/>}
                          />,
                          <Route path={':id/edit'}
                                 element={<ProjectEdit/>}
                          />,
                          <Route path={'create'}
                                 element={<ProjectCreate/>}
                          />
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