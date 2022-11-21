import { useRecoilValue } from "recoil";
import { todoListStatsState } from "./state/recoil";

const TodoListStats = () => {
  const { totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted } =
    useRecoilValue(todoListStatsState);

  const formattedPercentCompleted = Math.round(percentCompleted * 100);

  return (
    <div>
      <ul>
        <li>TOTAL TODOS : {totalNum}</li>
        <li>TODOS COMPLETED : {totalCompletedNum}</li>
        <li>TODOS NOT COMPLETED : {totalUncompletedNum}</li>
        <li>COMPLETED % : {formattedPercentCompleted}</li>
      </ul>
    </div>
  );
};

export default TodoListStats;
