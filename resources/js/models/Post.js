import Model from "./Model";

export default class Post extends Model {

    resource() {
        return 'posts';
    }

    baseURL() {
        return 'http://127.0.0.1:8000/api';
    }

    request(config){
        return this.$http.request(config)
    }


}
