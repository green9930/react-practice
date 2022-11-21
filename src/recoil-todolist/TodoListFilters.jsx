import { useRecoilState } from "recoil";
import { todoListFilterState } from "./state/recoil";

const TodoListFilters = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);
  // default : show all

  const handleFilter = (e) => setFilter(e.target.value);

  return (
    <div>
      <h3>Filter</h3>
      <select value={filter} onChange={handleFilter}>
        <option value="show all">ALL</option>
        <option value="show isDone">COMPLETED</option>
        <option value="show isNotDone">UNCOMPLETED</option>
      </select>
    </div>
  );
};

export default TodoListFilters;
