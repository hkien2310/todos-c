import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import useGetListTodos from "../../hooks/todos/useGetListTodos";
import todosService from "../../services/todosService";
import TodoItem from "./components/TodoItem";

const ShowData = () => {
  //! State
  const { data, loading, setData, refetch } = useGetListTodos();

  const [searchValue, setSearchValue] = useState("");
  const [searchedData, setSearchedData] = useState([]);
  const [searched, setSearched] = useState(false);

  //! Function
  const onClick = () => {
    searchValue ? setSearched(true) : setSearched(false);
    setSearchedData(data.filter((el) => el.title.indexOf(searchValue) !== -1));
   };

   const onDelete = async () => {
     try {
       //* 1. Call API Delete
       await todosService.deleteTodo();

       //* 2. Call API Todos to re-get list of todos
       await refetch();

     } catch (error) {
       
     }
   }

  //! Render
  if (loading) {
    return "Loading..."
  }

  return (
    <div className="background">
      <div className="show-data">
        <div className="search-field">
          <input
            id="myInput"
            type="text"
            placeholder="search"
            className="search-input"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <BsSearch
            id="myBtn"
            className="search-button"
            onClick={() => onClick()}
          />
        </div>
        {searched ? (
          <div className="container box-border">
            {searchedData.map((el) => (
              <div key={el.id}>
                <TodoItem
                  el={el}
                  data={searchedData}
                  setData={setSearchedData}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="container box-border">
            {data.map((el) => (
              <div key={el.id}>
                <TodoItem el={el} data={data} setData={setData} />
              </div>
            ))}
          </div>
        )}

        <div className="footer">
          <>
            {`${
              searched
                ? searchedData.filter((item) => item.completed === false).length
                : data.filter((item) => item.completed === false).length
            } left`}
          </>
          <div
            className="clear-search-btn"
            onClick={() => {
              setSearched(false);
              setSearchValue("");
            }}
          >
            Clear search
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShowData;
