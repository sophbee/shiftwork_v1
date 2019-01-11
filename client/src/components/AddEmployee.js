import React from 'react';
import axios from 'axios';
import AddForm from './AddForm.js';

class AddEmployee extends React.Component {
    state = {
        empName: "",
        phoneNo: "",
        sunAM: "",
        sunPM: "",
        monAM: "",
        monPM: "",
        tueAM: "",
        tuePM: "",
        wedAM: "",
        wedPM: "",
        thuAM: "",
        thuPM: "",
        friAM: "",
        friPM: "",
        satAM: "",
        satPM: ""
    };

    handleInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        const employee = {
            name: this.state.empName,
            phoneNo: this.state.phoneNo,
            sunAM: this.state.sunAM,
            sunPM: this.state.sunPM,
            monAM: this.state.monAM,
            monPM: this.state.monPM,
            tueAM: this.state.tueAM,
            tuePM: this.state.tuePM,
            wedAM: this.state.wedAM,
            wedPM: this.state.wedPM,
            thuAM: this.state.thuAM,
            thuPM: this.state.thuPM,
            friAM: this.state.friAM,
            friPM: this.state.friPM,
            satAM: this.state.satAM,
            satPM: this.state.satPM
        }

        console.log(this.state);

        axios.post('/api/newemployee', employee)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <AddForm />
        )
    }
}

export default AddEmployee;