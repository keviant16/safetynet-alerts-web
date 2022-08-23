import { useState } from "react";
import InputSelect from "../Inputs/InputSelect/InputSelect";
import BasicList from "../Lists/BasicList/BasicList";

const Searchbar = () => {
    const [alert, setalert] = useState("");
    const alerts = ["fire", "email"]
    return (
        <div>
            <InputSelect
                label={"Choisir alert"}
                name={alert}
                value={alert}
                options={alerts}
                handleChange={(event) => setalert(event.target.value)}
            />

            <BasicList />

        </div>
    );
}

export default Searchbar;