import axios from 'axios';

class Shelter {
    getShelters = async () => {
        try {
            const xmlHttp = new XMLHttpRequest();
            xmlHttp.open("GET", "https://frontend-assignment-api.goodrequest.com/api/v1/shelters", false);
            xmlHttp.send(null);
            return JSON.parse(xmlHttp.response)["shelters"];
        } catch (err) {
            console.log(err);
            return null;
        }
    }

    createContrib = async (data) => {
        return await axios.post("https://frontend-assignment-api.goodrequest.com/api/v1/shelters/contribute", data).then((response) => {
            return response.data["messages"][0];
        }).catch((error) => {
            console.log(error);
            return null;
        });
    }

}

export default Shelter;