import { useContext } from "react"
import { DataContext } from "../App"

const Test = () => {
    const {data} = useContext(DataContext)
    return(
        <button onClick={() => console.log(data)}>
        
        </button>
    )
}
export default Test