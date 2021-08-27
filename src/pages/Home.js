import {useSelector} from 'react-redux'
const Home = () =>{
    const state = useSelector((state)=>state.users)
    console.log(state.users)
    return <h2>Home</h2>
}
export default Home