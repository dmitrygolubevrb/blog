import Model from "./Model";

export default class Tag extends Model {

    resource() {
        return 'tags';
    }

    baseURL() {
        return 'http://127.0.0.1:8000/api/admin';
    }
}
