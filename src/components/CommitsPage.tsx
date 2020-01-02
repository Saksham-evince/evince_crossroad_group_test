import React, { useState, useEffect } from 'react';
import { Table, Container, ListGroup, Button, Image } from "react-bootstrap";
import "./CommitsPage.css";
import CommitPageProps from '../interface/gitData.interface'

// interface pageProps {
//     commitMessage: string,
//     committerAvatar: string,
//     committerName: string,
//     commitDate: string,
//     sha: string,
//     // callApi: function
// }

const CommitsPage: React.FC<CommitPageProps> = (props) => {
    const { commitMessage, committerAvatar, committerName, commitDate, sha, index } = props
    return (

        <tr>

            <td>{index}</td>
            <td><b>{commitMessage}</b><br />
                <img src={committerAvatar} />
                &nbsp;{committerName}
                &nbsp;{commitDate}
            </td>
            <td>
                {sha}
            </td>

        </tr>

    )
}

export default CommitsPage;