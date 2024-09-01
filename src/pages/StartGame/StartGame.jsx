import { Link } from "react-router-dom";

function StartGame(){

    return(
        <div className="">
            <h1>start game</h1>
            <Link to='/play'>Play Game</Link>
        </div>
    )
}

export default StartGame;