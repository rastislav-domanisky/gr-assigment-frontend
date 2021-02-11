class Shelter {
    getShelters = async () => {
        const xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", "https://frontend-assignment-api.goodrequest.com/api/v1/shelters", false);
        xmlHttp.send(null);
        return JSON.parse(xmlHttp.response)["shelters"];
    }
}

export default Shelter;