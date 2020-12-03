import React,{ Component }  from 'react';
//eslint-disable-next-line
import InputForm from './InputForm';



const {Provider, Consumer} = React.createContext()

const movies = [
    {title:'Guardians of the Galaxy', 
    date:'2014'},

    {title:'Childs Play', 
    date: '1988'},
    
    {title: 'Step Brothers', 
    date:'2008'}
]



class InputContextProvider extends Component{
    constructor(){
        super()
        this.state = {
            title:'',
            date: '',
            newMovie:{},
            movie: movies
            
        
     }
     
   
    }
    
    
     
    handleChange = (e) => {

        e.preventDefault()
        const{name,value} = e.target
        this.setState({
            [name]:value
        })
        console.log(this.state.title)
    }
      handleSubmit= (e) =>{
             e.preventDefault()
             const movieObject = {title: this.state.title, date: this.state.date}
             this.setState(prevState => (
                 {
                   ...prevState,
                   movie: [...prevState.movie, movieObject]
                 }
             ))
             console.log(this.state.newMovie)
      }
     
    render(){

        const movieList = Object.assign(this.state.movie, this.state.newMovie)
        const updatedList = movieList.map(movies => {
            return(
                <div >
                     <h2>Title: {movies.title}</h2>
                     <p>Release Date: {movies.date}</p>
                </div>
            
            )
        })
        
        return(
            <div className='App-header'>
               <Provider value={
                   updatedList}>  
                   {this.props.children}
               </Provider>
       
         <form className='box' onSubmit={this.handleSubmit} >
             <input 
                type='text'
                name='title'
                placeholder='title'
                required
                value={this.state.title}
                onChange={this.handleChange}
              />

            <input 
               type='text'
               name='date'
               placeholder='year'
               value={this.state.date}
               onChange={this.handleChange}     
            />

            <button>Submit</button>

         </form>   

            </div>
           
        )
    }
}



export  {InputContextProvider, Consumer as InputContextConsumer}