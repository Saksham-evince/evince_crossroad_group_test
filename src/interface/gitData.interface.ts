// Interface for the commitsPage props
export default interface CommitPageProps {
    commitMessage: string,
    committerAvatar: string,
    committerName: string,
    commitDate: string,
    sha: string,
    index ?: number
    // callApi: function
}