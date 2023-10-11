

/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import ListItem from './ListItem';
import Details from './Details';

const url = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/';

function List() {

  const [listUser, setListUser] = useState([]);
  const [info, setInfo] = useState([]);
  const [datailsItem, setDatailsItem] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function fetchRequest(url, setFunction) {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setFunction(data);
        setIsLoading(false);
      }
    };
    fetchData();
  }

  useEffect(() => {
    fetchRequest(
      "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json",
      setListUser
    );
  }, []);

  useEffect(() => {
    if (info?.id && info.id !== datailsItem.id) {
      fetchRequest(
        `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${info.id}.json`,
        setDatailsItem,
        setIsLoading
      );
    }
  }, [info]);


function handleInfo(info) {
    setInfo(info);
  }
  return (
    <>
      <div className="wrapper-list">
        <ul className="list">
          {listUser.map((item) => {
            return (
              <ListItem
                key={item.id}
                {...item}
                handleClick={handleInfo}/>
            );
          })}
        </ul>
        {isLoading ? <div className="details">Please wait, loading...</div> :
         datailsItem.length !== 0 ? (
          <Details {...datailsItem} />
        ) : null}
      </div>
    </>
  );
}

export default List;