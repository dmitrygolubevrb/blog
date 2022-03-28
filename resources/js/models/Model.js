import { Model as BaseModel } from "vue-api-query";

export default class Model extends BaseModel {

    baseURL() {
        return 'http://127.0.0.1:8000/api';
    }

    request(config) {
        return this.$http.request(config);
    }

    formData() {
        return { indices: true };
    }
}
