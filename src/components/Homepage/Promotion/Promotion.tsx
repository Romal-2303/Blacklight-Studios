import React from "react";
import classes from "./Promotion.module.scss";
import SemiCircleProgress from "./SemiCircleProgress";

const Promotion = () => {
    return (
        <div className={classes["promotion-motion"]}>
            <div className={classes["promotion-heading"]}>
                Web Development & MainTainance
            </div>
            <div className={classes["promotion-subheading"]}>
                Build Flawless websites that convert.
            </div>
            <div className={classes["promotion-details"]}>
                <div className={classes["health-score-container"]}>
                    <div className={classes["health-score-heading"]}>Health Score</div>
                    <div className={classes["health-score-subheading"]}>
                        The proportion of error-free pages
                    </div>
                    <div className={classes['']}>
                        <SemiCircleProgress percentage={96} size={300} />
                    </div>
                </div>
                <div className={classes["technical-issues-container"]}>

                    <div className={classes['technical-issues-heading']}>Technical Isseue</div>
                    <div className={classes['technical-issues-subheading']}>The number of issues found on crawled pages</div>

                </div>
            </div>
        </div>
    );
};

export default Promotion;
