import styles from "./Course.module.css"


function Course({
    image,
    title,
    instructor,
    badgeText,
    badgeColor,
    rating,
    ratingCount,
    price,
    oldPrice,
}){
    return(

        <div className={styles.courseCard}>
            <img src={image} alt={title} className={styles.courseImg} />

            <div className={styles.courseContent}>
                <h3 className={styles.courseTitle}>{title}</h3>
                <p className={styles.courseInstructor}>{instructor}</p>

                <div className={styles.courseExtra}>
                {badgeText && (
                    <span className={styles.courseBadge} style={{ backgroundColor: badgeColor }}>
                    {badgeText}
                    </span>
                )}

                <span className={styles.courseRating}>
                    ⭐ {rating} <span className={styles.count}>({ratingCount})</span>
                </span>
                </div>

                <div className={styles.coursePrice}>
                <span className={styles.newPrice}>£{price}</span>
                {oldPrice && <span className={styles.oldPrice}>£{oldPrice}</span>}
                </div>
            </div>
        </div>
    );
}
export default Course;