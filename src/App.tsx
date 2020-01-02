import React , { useState, useEffect } from 'react';
import CommitsPage from './components/CommitsPage';
import './App.css';
import { Table, Container, ListGroup, Button, Image } from "react-bootstrap";

const App: React.FC = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    callApi();
  }, [])

  function callApi() {
    fetch("https://api.github.com/repos/Saksham-evince/git_tutorial/commits", {
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
                  commitDate={gitData.commit.committer.date}
                  committerAvatar={gitData.committer.avatar_url}
                  committerName={gitData.commit.committer.name}
                  sha={gitData.sha}
                  index = {index}
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
