import React, { Component } from 'react';
import Repository from '../../components/Repository/Repository';
import axios from 'axios';


class ReposList extends Component {
    state = {
        repos: [],
        error:null,
        
    }

    componentDidMount() {
    
        axios.get('https://api.github.com/search/repositories?q=created:%3E2020-07-10&sort=stars&order=desc')
            .then(response => {
                this.setState({ repos: response.data.items });
              //console.log(response.data.items.slice(0,5) );
              
            })
            .catch(error => {
                this.setState({ error: error });
               // console.log(error);
            });
    }

    render() {
        let repos = <p style={{ textAlign: 'center' }} >Something went wrong</p>;
        if (!this.state.error) {
            repos = this.state.repos.slice(0, 4).map(repository => (<Repository
                 key={repository.id}
                avatar={repository.owner.avatar_url}
                owner={repository.owner.login}
                name={repository.name}
               description={repository.description}
               starsCount={repository.stargazers_count}
               issuesCount={repository.open_issues_count}
               creationDate={repository.created_at}
               />))
        }


        return (
            <div className="list">
               {repos}

            </div>



        );
    }
}

export default ReposList;