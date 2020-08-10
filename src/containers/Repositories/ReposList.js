import React,{Component} from 'react';
import Repository from '../../components/Repository/Repository';


class ReposList extends Component{

    
    render(){


        return(
            <div>
                    <Repository/>
                    <Repository/>
                    <Repository/>

            </div>
            


        );
    }
}

export default ReposList;