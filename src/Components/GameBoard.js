import React, {useState} from "react";
import '../Game.css'
import GameCircle from "./GameCircle";
import Header from "./Header";
import Footer from "./Footer";

const NO_CIRCLES = 16;
const NO_PLAYER = 0;
const PLAYER_1 = 1;
const PLAYER_2 = 2;

const GameBoard = () => {
    const [gameBoard, setGameBoard] = useState(Array(16).fill(0));
    const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);

    const initBoard = () => {
        const circles = [];
        for (let i = 0; i < NO_CIRCLES; i++){
            circles.push(renderCircle(i));
        }
        return circles;
    }
    const circleClicked = (id) => {
        console.log('circle clicked:' + id);

        // const board = [...gameBoard];
        // board[id] = 1;
        // setGameBoard(board)

        setGameBoard(prev => {
            return prev.map((circle, pos) => {
                if (pos === id) return currentPlayer;
                return circle;
            })
        })

        // gameBoard[id] = currentPlayer;
        // setGameBoard(gameBoard);

        setCurrentPlayer(currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1)

        console.log(gameBoard);
    }
    const renderCircle = id => {
        return <GameCircle key={id} id={id} className={`player_${gameBoard[id]}`} onCircleClicked={circleClicked}/>
    }


    return (
        <>
            <Header/>
            <div className="gameBoard">
                {initBoard()}
            </div>
            <Footer/>
        </>
    )
}

export default GameBoard;