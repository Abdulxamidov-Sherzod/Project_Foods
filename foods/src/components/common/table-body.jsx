import {get} from "lodash"

const TableBody = ({data,columns}) => {

    const getColumnData = (item, {content,path}) =>{
        if (content){
            return content(item);
        }else
            return get(item,path);
    };
    return ( 
        <tbody>
            {data.map((item) => (
            <tr key={item._id}>
                {columns.map((column) =>(
                    <td key={column.path || column.label}>
                        {getColumnData(item, column)}
                    </td>
                ))} 
            </tr>
            ))}
        </tbody>
    );
}

export default TableBody;