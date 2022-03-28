import Model from "./Model";

export default class Category extends Model {

    resource() {
        return 'categories';
    }

    baseURL() {
        return 'http://127.0.0.1:8000/api/admin';
    }
}
