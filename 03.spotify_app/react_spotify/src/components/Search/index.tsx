import TextField from '@material-ui/core/TextField';
import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

const search = styled.form`
    &.search {
        margin: 1em auto;
        width: 300px;

    }
`;


export default class Search extends React.Component {
    private timer: number | null;
    
    constructor(props: React.Props<any>) {
        super(props);

        this.timer = null;

        this.onInputChange = this.onInputChange.bind(this);
    }

    private onInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
        const value = event.target.value;

        if (this.timer) {
            clearTimeout(this.timer);
        }

        this.timer = setTimeout(() => this.searchArtistByName(value), 300);
    }

    private searchArtistByName(name: string): void {
        console.log(`Search: ${name}`)
    }
    
    render() {
        return (
            <form className="search" noValidate autoComplete="off">
                <TextField id="standard-basic" label="Enter artist name" onChange={this.onInputChange} />
            </form>
        );
    }
}