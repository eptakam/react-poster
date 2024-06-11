import { Outlet } from "react-router-dom";
import MainHeader from "../components/MainHeader"

function RootLayout() {
  return(
    <>
      <MainHeader />  {/* oeci fera qu'au load de la page nous aurons deux header car App.jsx appelle egalement le Header*/}
      <Outlet /> {/* outlet: doit se mettre ou les prochains composants doivent etre inseres cad les elements du array de children dans le main.jsx */}
    </>
  );
}

export default RootLayout;