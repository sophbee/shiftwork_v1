import React from "react";
import NewHeader from "../newemployees/NewHeader";
import NewForm from "../newemployees/NewForm";
import CurrentHeader from "../currentemployees/CurrentHeader";
import CurrentList from "../currentemployees/CurrentList";
import { Grid } from "semantic-ui-react";

const Container = () => (
    <Grid divided='vertically'>
        <Grid.Row columns={2}>
            <Grid.Column>
                <NewHeader />
                <NewForm />
            </Grid.Column>
            <Grid.Column>
                <CurrentHeader />
                <CurrentList />
            </Grid.Column>
        </Grid.Row>
    </Grid>
)

export default Container;