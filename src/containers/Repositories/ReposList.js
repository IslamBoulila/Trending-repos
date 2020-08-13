import React, { Component } from 'react';
import Repository from '../../components/Repository/Repository';
import axios from 'axios';
import * as dateService from '../../services/format/date';

import './ReposList.css';
import Spinner from '../../components/UI/Spinner/Spinner';
import Error from '../../components/UI/Error/Error';
import Pagination from '../../components/UI/Pagination/Pagination';



class ReposList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading:true,
            reposData: [],
            error: null,
            currentPage: 1,
            last30Days: null,
        };
    }


    componentDidMount() {

        let last30Days = dateService.getLast30daysDate();
        console.log(last30Days);

        this.loadData(this.state.currentPage, last30Days);
    }


    //This function fetch the data using axios
    loadData(currentPage, last30Days) {
        let endpoint = 'https://api.github.com/search/repositories?q=created:%3E' + last30Days + '&sort=stars&order=desc';

        if (currentPage > 1) endpoint += '&page=' + currentPage;
        //  else if(currentPage==-1)endpoint+='rel=last';
        this.setState({ loading: true }, () => {
        axios.get(endpoint)
            .then(response => {
                console.log(response);
                this.setState({
                    reposData: response.data.items,
                    last30Days: last30Days,
                    currentPage: currentPage,
                    error: null,
                    errorMessage:null,
                    totalCounts: 0,
                    currentCount: response.data.total_count,
                    loading:false,


                });
                console.log("after set state");

            })
            .catch(error => {

                let errorMessage=null;
               if(error.response) errorMessage=error.response.statusText;
         

                if (this.state.error)
                    this.setState((prevState) =>
                        ({
                            error: null,
                            
                            currentPage: prevState.currentPage,
                            loading:false,
                        }));
                        
                else this.setState({ error: error,loading:false, errorMessage });



            })
        });
    }


    //Click handler on pagination' buttons: Previous  & Next
    handlePageClick(e) {
        let currentPage = this.state.currentPage;
        if (e.target.name == "next") {
            currentPage++;
            console.log("next current page" + currentPage);

        }
        else if (e.target.name == "previous" && currentPage > 1) {
            currentPage--;

        }

        this.loadData(currentPage, this.state.last30Days);

    }

    //First page button click handler
    handleFirstPageClick(e) {
        let destPage = 1;
        if (e.target.name == "last") {
            destPage = -1;

        }
        this.loadData(destPage, this.state.last30Days);
    }

    /*This method construct the repository rows that will  display with loaded data*/
    constructReposRows() {
        let reposList = null;
        if (this.state.error) {
            reposList =<Error onClickButton={(e) => this.handlePageClick(e)}  errorMessage={this.state.errorMessage}/>
            
        }
        else if (!this.state.error) {
            reposList = this.state.reposData.map(repository => (<Repository
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
        return reposList;
    }

    render() {
        let repos = this.constructReposRows();
        const isLoading=this.state.loading;
        
        let content= <div className="list">

                            <Pagination  show={!this.state.error} currentPage={this.state.currentPage}
                            firstPageOnClick={(e) => this.handleFirstPageClick(e)}
                            pageOnClick={(e) => this.handlePageClick(e)} 
                            />
                            {repos}

                         </div>

        return (
            <>
                    {isLoading?<Spinner/> : content}
            </>
           
        );
    }
}

export default ReposList;