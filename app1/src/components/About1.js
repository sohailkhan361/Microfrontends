import React from 'react';
import styles from './app1.module.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

export function About1() {
    
    return (
        <div className={styles.app1}>
            <img src="https://www.advisorwebsites.com/hs-fs/hubfs/AWR%20Assets/Images/assetmark-cropped.png?width=960&height=397&name=assetmark-cropped.png" alt="Logo" width="150px" height="60px"></img>
            <div className={styles.about}>
                <hr />
                Dedicated to Supporting Growth
                <hr />
            </div>
            <div className={styles.para}>
                <br />
                Since 1996, AssetMark’s has focused on delivering extensive wealth management and digital solutions, coupled with in-depth business consulting services, to help independent advisors grow their businesses.
                <br />
                <hr />
                Why AssetMark?
                <hr />
                <br />
                We have talented, passionate and dedicated associates at AssetMark. If you're looking to join a friendly, supportive environment where everyone works together to make a difference in the lives of advisors and their clients, contact our recruiter. You'll find myriad opportunities to learn and grow professionally in a fun, fast-paced, and challenging environment.
                AssetMark Employee Trends
                Employees here are treated fairly, regardless of race, gender, age, ethnic background, disability, or sexual orientation
                People treat each other with respect
                Senior leaders of the company demonstrate integrity
                Employees find their job interesting and challenging
                <br />
                <br />
                <img src="https://static.fmgsuite.com/media/images/683a9378-9743-4d63-99ce-c4aaf8c21212.jpg" alt="Logo1" width="800px" height="450px"></img>
            </div>
        </div>
    );
}
