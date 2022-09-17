import "./App.css";
import React, { useEffect, useState } from "react";

import NameList from "./namelist";

function App() {
  const [NameLists, setNameList] = useState([
    {
      id: 1,
      name: {
        title: "Miss",
        first: "Jennie",
        last: "Nichols",
      },
      location: {
        city: "Billings",
        country: "United States",
      },
      email: "jennie.nichols@example.com",
      dob: {
        date: "1992-03-08T15:13:16.688Z",
        age: 30,
      },
      picture: {
        medium: "https://randomuser.me/api/portraits/med/men/75.jpg",
      },
    },
    {
      id: 2,
      name: {
        title: "Sir",
        first: "Sashin",
        last: "Millem",
      },
      location: {
        city: "Colombo",
        country: "Sri Lanka",
      },
      email: "Sashin@example.com",
      dob: {
        date: "1992-03-08T15:13:16.688Z",
        age: 11,
      },
      picture: {
        medium: "https://randomuser.me/api/portraits/med/men/75.jpg",
      },
    },
    {
      id: 3,
      name: {
        title: "Miss",
        first: "Lochi",
        last: "Rashi",
      },
      location: {
        city: "Borella",
        country: "Sri Lanka",
      },
      email: "lochinis@example.com",
      dob: {
        date: "2000-11-08T15:13:16.688Z",
        age: 20,
      },
      picture: {
        medium: "https://randomuser.me/api/portraits/med/men/75.jpg",
      },
    },
  ]);

  useEffect(() => {
    fetch("https://randomuser.me/api")
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        setNameList(responseData.result[0]);
      });
  });

  const nameListComponent = () => {
    return NameLists.map((aName) => {
      return (
        <NameList
          key={aName.id}
          name={`${aName.name.first} ${aName.name.last}`}
          city={aName.location.city}
          email={aName.email}
          birthday={aName.dob.date}
          avatar={aName.picture.medium}
        />
      );
    });
  };

  const addUserHandler = () => {
    const newUser = {
      id: 3,
      name: {
        title: "Sir",
        first: "charly",
        last: "dare",
      },
      location: {
        city: "newyork",
        country: "United States",
      },
      email: "chartlys@example.com",
      dob: {
        date: "2000-11-08T15:13:16.688Z",
        age: 20,
      },
      picture: {
        medium: "https://randomuser.me/api/portraits/med/men/75.jpg",
      },
    };

    setNameList([...NameLists, newUser]);
  };

  return (
    <>
      <h2>Name List </h2>
      <button onClick={addUserHandler}>Add Name</button>
      <ul>
        {nameListComponent()}
        {/* <NameList
          name={`${NameLists[0].name.first} ${NameLists[0].name.last}`}
          city={NameLists[0].location.city}
          email={NameLists[0].email}
          birthday={NameLists[0].dob.date}
          avatar={NameLists[0].picture.medium}
        /> */}
      </ul>
    </>
  );
}

export default App;
