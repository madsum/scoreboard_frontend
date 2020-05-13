import axios from 'axios';

export default class CurdApi {

    static postScore(data,  history) {
      let score = {
        id: data.id>0? data.id : null,
        team: data.team? data.team : '',
        point: data.point? data.point : 0
      }
  
      axios.post('https://scoreboard-backend-dev.herokuapp.com/score', score)
        .then(res => {
          history.push({
            pathname: "/ViewScore",
            state: {
              response: res.data,
              msgVariant: "success"
            }
          })
        }).catch((error) => {
          // handle this error
          history.push({
            pathname: "/ViewScore",
            state: {
              response: error.message,
              msgVariant: "danger"
            }
          })
        })
    }
  
    static async getAllScore() {
      try {
        const response = await fetch(`https://scoreboard-backend-dev.herokuapp.com/all/score`);
        const json = await response.json();
        return json;
      } catch (error) {
        console.log(error);
        return error.message;
      }
    }
  }
