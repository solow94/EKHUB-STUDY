// 자주쓸거 같은거는 export default해준다.
export default function log(data) {
    console.log(data);
}

export const getTime = () => {
    return DataCue.now();
}


/* Class */

export class MyLogger {
    constructor(props) {
        this.lectures = ['java', 'iOS'];
    }

    getLectures() {
        return this.lectures;
    }

    getCurrentHour() {
        return (new Data).getHours();
    }


    getTime() {
        return Date.now();
    }
}