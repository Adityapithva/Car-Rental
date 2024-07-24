import Navbar from "../Navbar/Navbar";
import Common from "../Common/Common";
const Fleet = () => {
    return <>
        <Navbar></Navbar>
        <Common title='Fleet'></Common>
        <div className="fleetContainer">
            <h2>Please check the availability of cars first..</h2>
        </div>
    </>
}
export default Fleet;