import React from "react";
function TotalNoTask ({taskList}) {
    return (
        <>
        <div className="d-flex">
        <p style={{ marginRight: '20px' }}>Total Task Count: {taskList.length}</p>
        <p style={{ marginRight: '20px' }}>Total Task Completed Count: {taskList.filter(x=>x.btnName==='Completed').length}</p>
        <p>Total Task Pending Count: {taskList.filter(x=>x.btnName!=='Completed').length}</p>
        </div>
         
        </>
    )
}
export default React.memo(TotalNoTask)