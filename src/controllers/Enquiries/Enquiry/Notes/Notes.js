import React from 'react';
import {withStyles} from '@material-ui/core';
import {CSS} from '../../../../constants';
import EnquiryHeader from '../Commons/EnquiryHeader/EnquiryHeader';
import NotesGrid from './NotesGrid/NotesGrid';

const styles = {
    container: {
        padding: '10px 0 30px 36px',
        color: CSS.colors.gray8
    },
    content: {
        width: '93%',
        marginTop: '15px',
        paddingLeft: '24px'
    }
};

const notes = (props) => {
    const { classes, data } = props;
    return (
        <div className={classes.container}>
            <EnquiryHeader label='Shared notes'/>
            <div className={classes.content}>
                <NotesGrid notes={data.notes}
                           handleNoteEdit={(noteId, newNote) => console.log('asdasd ' + noteId)}
                           handleNoteRemove={(noteId) => console.log(noteId)} />
            </div>
        </div>
    );
};

export default withStyles(styles)(notes);
