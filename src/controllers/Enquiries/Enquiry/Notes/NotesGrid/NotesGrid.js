import React from 'react';
import { withStyles } from '@material-ui/core';
import Note from './Note/Note';
import Grid from '@material-ui/core/Grid/Grid';
import { connect } from 'react-redux';

const styles = {
};

const mapDispatchToProps = dispatch => ({
    onEnquiryNoteChange: (noteId, newNote) => console.log('onEnquiryNoteChange: ' + noteId),
    onEnquiryNoteRemove: (noteId) => console.log('onEnquiryNoteRemove: ' + noteId)

});

const notesGrid = (props) => {
    const { notes } = props;
    const notesElements = notes.map(note => {
        return (
            <Grid item xs={6} key={note.id}>
                <Note note={note}
                      handleNoteEdit={(newNote) => props.onEnquiryNoteChange(note.id, newNote)}
                      handleNoteRemove={() => props.onEnquiryNoteRemove(note.id)}/>
            </Grid>
        );
    });
    return (
        <Grid container spacing={24}>
            {notesElements}
        </Grid>
    );
};

export default connect(mapDispatchToProps)(withStyles(styles)(notesGrid));
