import { useRef } from "react";
import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";

const getSleepList = () => {
  return axios.get("http://localhost:3001/sleep_times");
};

const addSleepData = (data) => {
  return axios.post("http://localhost:3001/sleep_times", data);
};

const editSleepData = (data) => {
  return axios.patch(`http://localhost:3001/sleep_times/${data.id}`, {
    sleep_time: data.revised_time,
  });
};

const deleteSleepData = (id) => {
  return axios.delete(`http://localhost:3001/sleep_times/${id}`);
};

const Sleep = () => {
  const day_input = useRef("");
  const time_input = useRef("");
  const revised_time_input = useRef("");

  const QueryClient = useQueryClient();

  /* GET ---------------------------------------------------------------------- */
  // useQuery 첫 번째 인수 : query key
  // useQuery 두 번째 인수 : API 요청하는 함수
  // useQuery 세 번째 인수 : option
  // 추가 요청이 들어온 상태에서 sleep_list에 해당되는 데이터는 더이상 최신 데이터가 아님
  // 쿼리 무효화 필요
  const sleep_query = useQuery("sleep_list", getSleepList, {
    onSuccess: (data) => {
      console.log("GET MUTATE!!");
      console.log(data);
    },
    staleTime: 3000,
  });

  /* POST --------------------------------------------------------------------- */
  // console.log("sleep_mutation", sleep_mutation);
  // const sleep_mutation = useMutation(addSleepData);
  const { mutate: addMutate } = useMutation(addSleepData, {
    onSuccess: () => {
      // 수면 데이터 목록을 다시 불러오면 ok
      // 쿼리 무효화 시킬 key 값 넣어줌
      // key 값을 넘기지 않으면 모든 쿼리 key 무효화
      console.log("POST MUTATE!!");
      QueryClient.invalidateQueries("sleep_list");
      day_input.current.value = "";
      time_input.current.value = "";
    },
  });

  const handleAdd = () => {
    const data = {
      day: day_input.current.value,
      sleep_time: time_input.current.value,
    };

    addMutate(data);
  };

  /* PATCH -------------------------------------------------------------------- */
  // console.log("sleep_mutation", sleep_mutation);
  // const sleep_mutation = useMutation(addSleepData);
  const { mutate: editMutate } = useMutation(editSleepData, {
    onSuccess: () => {
      // 수면 데이터 목록을 다시 불러오면 ok
      // 쿼리 무효화 시킬 key 값 넣어줌
      // key 값을 넘기지 않으면 모든 쿼리 key 무효화
      QueryClient.invalidateQueries("sleep_list");
      revised_time_input.current.value = "";
    },
  });

  const handleEdit = (id) => {
    const data = {
      id: id,
      revised_time: revised_time_input.current.value,
    };

    editMutate(data);
  };

  /* DELETE ------------------------------------------------------------------- */
  const { mutate: deleteMutate } = useMutation(deleteSleepData, {
    onSuccess: () => {
      // 수면 데이터 목록을 다시 불러오면 ok
      // 쿼리 무효화 시킬 key 값 넣어줌
      // key 값을 넘기지 않으면 모든 쿼리 key 무효화
      QueryClient.invalidateQueries("sleep_list");
    },
  });

  const handleDelete = (id) => {
    deleteMutate(id);
  };

  // 최초 요청할 때는 sleep_query.data.data에 값이 없는 상태
  // react query는 isLoading 상태를 따로 만들 필요 없음
  if (sleep_query.isLoading) return null;

  console.log("sleep_query.data.data", sleep_query.data.data);

  return (
    <div>
      <h1>Sleep</h1>
      <ul>
        {sleep_query.data.data.map((val) => {
          const { id, day, sleep_time } = val;
          return (
            <li key={id}>
              <span>{day}</span>
              <span>{sleep_time}</span>
              <input ref={revised_time_input} />
              <button onClick={() => handleEdit(id)}>EDIT</button>
              <button onClick={() => handleDelete(id)}>DELETE</button>
            </li>
          );
        })}
      </ul>
      <div>
        <input ref={day_input} />
        <input ref={time_input} />
        <button onClick={handleAdd}>SUBMIT</button>
      </div>
    </div>
  );
};

export default Sleep;
