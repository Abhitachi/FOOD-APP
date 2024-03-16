import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError()
    return (
        <div>
            <h1>OOPS...! Restaurants you are looking for can't be Found.</h1>
            <h3>{error.data}</h3>
        </div>
    )
}

export default Error;