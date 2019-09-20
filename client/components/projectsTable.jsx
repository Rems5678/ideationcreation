import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from "react-router-dom";
import ProjectRow from './projectRow.jsx';
import { objectExpression } from '@babel/types';
import TableHeader from './projectsTableHeader.jsx';
import ReactTable from "react-table";
import "react-table/react-table.css"
import Paper from '@material-ui/core/Paper';
import {
    SortingState,
    IntegratedSorting,
    FilteringState,
    IntegratedFiltering,
    TableRowDetail,
    RowDetailState,
    SelectionState,
  } from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  TableHeaderRow,
  TableColumnResizing,
  TableFilterRow,
  TableSelection
} from '@devexpress/dx-react-grid-material-ui';

function ProjectsTable({projects}){
    const [columns] = useState([
        { name: "cohort", title: "cohort" },
        { name: "released", title: "released" },
        { name: "projectname", title: "projectname" },
        { name: "projecttype", title: "projecttype" },
        { name: "stack", title: "stack" },
        { name: "category", title: "category" },
        { name: "technologies", title: "technologies" },
        { name: "githubstars", title: "github stars" },
        { name: "githublink", title: "github link" },
        { name: "writeuplink", title: "writeuplink" },
        { name: "description", title: "description" },
    ]);
    const rows = projects;
    // rows.forEach((row) => {
    //     row["github link"] = `<a href="${row["github link"]}`;
    // })
    const [columnWidths, setColumnWidths] = useState([
        { columnName: "cohort", width: 90 },
        { columnName: "released", width: 90 },
        { columnName: "projectname", width: 130},
        { columnName: "projecttype", width: 160},
        { columnName: "stack", width: 90 },
        { columnName: "category", width: 90 },
        { columnName: "technologies", width: 200 },
        { columnName: "githubstars", width: 90 },
        { columnName: "githublink", width: 150 },
        { columnName: "writeuplink", width: 150 },
        { columnName: "description", width: 200 },
    ])

    // const [selection, setSelection] = useState([1]);
    

    return(

        <Paper>
        <Grid rows={rows} columns={columns}>
            <SortingState defaultSorting={[{ columnName: "projectname", direction: "asc"}]} />
            <IntegratedSorting />
            <FilteringState defaultFilters={[]} />
            <IntegratedFiltering />
            {/* <SelectionState
              selection={selection}
              onSelectionChange={setSelection}
            /> */}
            <Table rowComponent={ProjectRow}/>
            <TableColumnResizing columnWidths={columnWidths} onColumnWidthsChange={setColumnWidths} />
            <TableHeaderRow showSortingControls/>
            {/* <TableSelection
              selectByRowClick
              highlightRow
              showSelectionColumn={false}
            /> */}
            <TableFilterRow />
        </Grid>
      </Paper>

    )
}

export default ProjectsTable;