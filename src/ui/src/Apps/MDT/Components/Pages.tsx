import DashboardIcon from '@mui/icons-material/Dashboard';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import SettingsIcon from '@mui/icons-material/Settings';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import CameraIcon from '@mui/icons-material/Camera';
import { Dashboard, CitizenDB, VehicleDB, Reports, Dispatch, Department, Settings } from "./Main/Components/Pages";

const Panels = [
    {
        label: "Dashboard",
        icon: <DashboardIcon />,
        component: <Dashboard />,
    },
    {
        label: "Citizen Database",
        icon: <PersonSearchIcon />,
        component: <CitizenDB />,
    },
    {
        label: "Vehicle Database",
        icon: <DirectionsCarIcon />,
        component: <VehicleDB />,
    },
    {
        label: "Reports",
        icon: <LibraryBooksIcon />,
        component: <Reports />,
    },
    {
        label: "Dispatch",
        icon: <CameraIcon />,
        component: <Dispatch />,
    },
    {
        label: "Department",
        icon: <AdminPanelSettingsIcon />,
        component: <Department />,
    },
    {
        label: "Settings",
        icon: <SettingsIcon />,
        component: <Settings />,
    },
];

export default Panels;