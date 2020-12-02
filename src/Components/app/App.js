import React, {Component} from 'react';
import NavbarMenu from "../Navbar/Navbar";
import {BrowserRouter,Switch, Route} from "react-router-dom";
import axios from 'axios';
import News from "../News/News";
import NewsPage from "../News/NewsPage/NewsPage";

class App extends Component {

    state = {
        data:[]
    }

    componentDidMount() {
        axios.get("https://nurkadyrnur.pythonanywhere.com/news/").then((res)=>{
            this.setState({data: res.data.results})
            if (res.data.next){
                axios.get(res.data.next).then((ress)=>{
                    this.setState(({data})=>{return {data: [...data, ...ress.data.results]}})
                })
            }
        }).then(()=>{console.log(this.state.data)})
    }

    render() {
        return (
            <BrowserRouter>
                <NavbarMenu/>
                {/*<RightSideBar data={this.state.data}/>*/}
                <Switch>
                    <Route exact path="/">
                        <News data={this.state.data}/>
                    </Route>
                    {this.state.data.map((item)=>
                        <Route exact path={`/news/${item.id}`}>
                        <NewsPage key={item.id} {...item}/>
                        </Route>
                        )}


                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;