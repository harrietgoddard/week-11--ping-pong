import { connect } from "react-redux";
import ScoreCard from './ScoreCard';
import { patchScore } from "../../data/action/api";

const mapStateToProps = ({ player2, p2Name, serving, winner, english }) => {
    return {
        player: player2,
        name: p2Name,
        serving: !serving,
        winner,
        english
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handlePlayer: () => dispatch(patchScore(2))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ScoreCard);