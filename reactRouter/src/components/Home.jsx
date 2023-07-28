// const Home = (props) => {
//     console.log(props)
//     return <h3> Welcome {props.username} have a great {props.dayOfWeek}</h3>
//     }
  
//   export default Home

  
//a more efficent way of doing that is to destructure the func and leave out props. :

  const Home = ({username, dayOfWeek}) => {
    console.log(username)
    return <h3> Welcome {username} have a great {dayOfWeek}</h3>
    }
  export default Home