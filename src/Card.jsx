import profilepic from "./assets/nikobro82pfp.jpg"
import destiny2 from "./assets/destiny2.png"
import {motion, AnimatePresence} from "framer-motion"
import {useState} from 'react'

function Card(props) {
    if (!props.table) {return}

    const table = props.table

    const [description, setDescription] = useState(table.desc);

    const desc1 = table.desc
    const desc2 = table.desc2
    let descriptionNumber = 1

    const updateDescription = (descUsing) => {
        setDescription(descUsing)
    }

    const onClickFunc = () => {
        
    }

    const profile_pictures = {
        "Nikobro82" : profilepic,
        "Destiny 2" : destiny2,
        "default" : profilepic,
    }

    let has_profile_pic = profile_pictures[table.name]
    has_profile_pic = has_profile_pic || profile_pictures["default"]

    return(
        <motion.div className = "card" 
        initial = {{rotate: "180deg"}} 
        animate = {{rotate: "0deg"}} 
        transition = {{duration: 2.25, type: 'spring'}}
        whileHover = {{scale:1.05, rotate: "360deg"}}
        onMouseEnter = {() => updateDescription(desc2)}
        onMouseLeave = {() => updateDescription(desc1)}
        onClick={() => onClickFunc()}>
            <img src = {has_profile_pic} className = "card-image"></img>
            <h2 className = "card-title">{table.name}</h2>

            {table.TimeLength ? <p className = "timeSpent-text">Time Spent: {table.TimeLength}</p> : null}

            <p className = "card-text">{description}</p>
        </motion.div>
    );
}

export default Card;