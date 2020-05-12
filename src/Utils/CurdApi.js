import axios from 'axios';

export default class CurdApi {

    static postScore(data,  history) {
      let score = {
        id: data.id>0? data.id : null,
        team: data.team? data.team : '',
        point: data.point? data.point : 0
      }
  
      axios.post('http://localhost:8080/score', score)
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
        const response = await fetch(`http://localhost:8080/all/score`);
        const json = await response.json();
        return json;
      } catch (error) {
        console.log(error);
        return error.message;
      }
    }
  }
