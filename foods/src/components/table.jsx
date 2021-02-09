import {TableBody,TableHeader} from './common'

const Table = ({columns,data,onSort,sortColumn}) => {
    return ( 
        <table className="table table-bordered table-hover text-center">
            <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort}/>
            <TableBody columns={columns} data = {data}/>
        </table>
    );
};

export default Table;