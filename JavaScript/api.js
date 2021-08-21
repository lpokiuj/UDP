const fetchData = () => {
    return fetch("../db/db.mock.json")
      .then((response) => response.json())
      .then((responseJson) =>
        Object.entries(responseJson).map(([key, value]) => ({...value, uberId: parseInt(key, 10)}))
      )
      .catch((err) => {
        alert("there's an error when trying to fetch data. See logging");
        console.log(err);
      });
};
