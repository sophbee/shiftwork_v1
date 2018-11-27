import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import AddForm from '../../components/Form/AddForm.js';

class NewEmployee extends Component {
    state = {
        firstName: '',
        lastName: '',
        sun_start: '',
        sun_end: '',
        mon_start: '',
        mon_end: '',
        tue_start: '',
        tue_end: '',
        wed_start: '',
        wed_end: '',
        thu_start: '',
        thu_end: '',
        fri_start: '',
        fri_end: '',
        sat_start: '',
        sat_end: ''
    };

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleFormSubmit = e => {
        e.preventDefault();
        const newEmployeeEntry = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            sun_start: this.state.sun_start,
            sun_end: this.state.sun_end,
            mon_start: this.state.mon_start,
            mon_end: this.state.mon_end,
            tue_start: this.state.tue_start,
            tue_end: this.state.tue_end,
            wed_start: this.state.wed_start,
            wed_end: this.state.wed_end,
            thu_start: this.state.thu_start,
            thu_end: this.state.thu_end,
            fri_start: this.state.fri_start,
            fri_end: this.state.fri_end,
            sat_start: this.state.sat_start,
            sat_end: this.state.sat_end
        };

        console.log(this.state);
        axios.post('/api/employees', newEmployeeEntry)
            .then(res => {
                console.log(res);
                console.log(res.data);
                this.props.onAddEntry(res.data);
                console.log(this.props);
            })
            .catch(err => console.log(err));
    }
}

render() {
    return (
        <Container>
            <AddForm />
        </Container> 
    )
}

