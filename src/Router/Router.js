import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import Alerts from "../Pages/Alerts/Alerts";

const Home = lazy(() => import('../Pages/Home/Home'))
const Person = lazy(() => import('../Pages/Person/Person'))
const MedicalRecord = lazy(() => import('../Pages/MedicalRecord/MedicalRecord'))
const Loading = lazy(() => import("../Pages/Loading/Loading"))
const FireStation = lazy(() => import("../Pages/FireStations/FireStation"))
const NoPage = lazy(() => import("../Pages/NoPage/NoPage"))

const Router = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="alerts" element={<Alerts />} />
                        <Route path="persons" element={<Person />} />
                        <Route path="medicalRecords" element={<MedicalRecord />} />
                        <Route path="fireStations" element={<FireStation />} />
                        <Route path="*" element={<NoPage />} />
                    </Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default Router;