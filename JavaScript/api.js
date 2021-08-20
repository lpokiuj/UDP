const fetchData = () => {
    return fetch("../db/db.mock.json")
      .then((response) => response.json())
      .then((responseJson) =>
        Object.entries(responseJson).map(([_, value]) => value)
      )
      .catch((err) => {
        alert("there's an error when trying to fetch data. See logging");
        console.log(err);
      });
};
