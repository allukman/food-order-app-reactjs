import { Fragment } from "react"

import MealsSumarry from "./MealsSummary"
import AvailableMeals from "./AvailableMeals"

const Meals = () => {

    return <Fragment>
        <MealsSumarry/>
        <AvailableMeals/>
    </Fragment>
}

export default Meals