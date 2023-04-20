import axios from 'axios'

export const getMealsList = params => {
    return async dispatch => {
        await axios.get(`https://themealdb.com/api/json/v1/1/search.php?s=${params.filter}`).then(response => {
            let tenMealList = []
            console.log(response,'****')
            if (response?.data?.meals.length > 0) {
                let arrayList = response.data.meals
                let countNumber = arrayList.length >= 10 ? 10 : arrayList.length
                for (let i = 0; i < countNumber; i++) {
                    tenMealList.push(arrayList[i]); // push the current value of i to the array
                }
            }
            console.log(tenMealList,')))')
            dispatch({
                type: 'GET_MEALS',
                data: tenMealList
            })
        })
    }
}