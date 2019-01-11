import axios from 'axios';

export default {
    saveNewEmployee: function(newemployee) {
        return axios.post('/api/newemployee',newemployee);
    },

    getAllEmployees: function() {
        return axios.get ('/api/allemployees');
    },

    getOneEmployee: function() {
        return axios.get('/api/allemployees', {
            params: {
                empName: empName
            }
        });
    }
}