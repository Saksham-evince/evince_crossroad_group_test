import React , { useState, useEffect } from 'react';
import CommitsPage from './components/CommitsPage';
import './App.css';
import { Table, Container, ListGroup, Button, Image } from "react-bootstrap";

// Main page container
const App: React.FC = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    callApi();
  }, [])

  //API caller function.
  function callApi() {
    fetch("https://api.github.com/repos/Saksham-evince/evince_crossroad_group_test/commits", {
      method: "GET",
      headers: {
        'Accept': 'application/json',
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    })
      .then(res =>
        res.json()
      )
      .then(data => {
        console.log("Getting data", data)
        setData(data);
      })
      .catch((err) => {
        console.error("error is: ", err);
      })
  }


  return (
    <Container className="App">
      <Table striped bordered hover>
        <tbody>
          {
            data.map((gitData: any, index: number) => {
              return (
                <CommitsPage
                  commitMessage={gitData.commit.message}
                  commitDate={new Date(gitData.commit.committer.date).toUTCString()}
                  committerAvatar={gitData.committer.avatar_url}
                  committerName={gitData.commit.committer.name}
                  sha={gitData.sha}
                  index = {index + 1}
                />
              )
            })
          }
        </tbody>
      </Table>
      <Button variant="primary" onClick={callApi}>Refresh</Button>
    </Container>
  );
}

export default App;
