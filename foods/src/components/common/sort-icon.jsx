import { AiFillCaretDown,AiFillCaretUp } from "react-icons/ai";

const SortIcon = ({down}) => {
    const Icon = down ? AiFillCaretDown : AiFillCaretUp;
    return ( 
        <Icon size = '1rem' color = 'white'/>
     );
}
 
export default SortIcon;