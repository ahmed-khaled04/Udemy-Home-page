
function CourseTab({title , isActive , onShow}){
    return(
        <>
            <div className={`course-tab ${isActive ? "active" : ""}`} onClick={onShow}>
            
                <h3 className={`course-tab ${isActive ? "active" : ""}`}>{title}</h3>
            
            </div>
        </>
    )
}
export default CourseTab;