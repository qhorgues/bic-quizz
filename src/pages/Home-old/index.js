import Quizz from '../../components/Quizz';


const FIELD = [
    {
        text: "Question 1",
        res: false
    },
    {
        text: "Quesiton 2",
        res: true
    },
];

export default function Home() {
    return (
        <Quizz quizz={FIELD} answer={"Rep 1"}></Quizz>
    );
}