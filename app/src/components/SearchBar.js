import React, { Component } from 'react'

import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import Search from '@material-ui/icons/Search'

class SearchBar extends Component {
    render() {
        return (
            <div>
                <TextField
                    style={{ width: 500 }}
                    label='Search'
                    onChange={event => {
                        event.preventDefault()
                        const searchValue = event.target.value
                        this.setState({ searchValue })
                        this.props.onSearch(searchValue)
                    }}
                    value={this.props.searchValue}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Search />
                            </InputAdornment>
                        ),
                        root: {
                            '.MuiInputAdornment-root': {
                                color: 'white'
                            }
                        }
                    }}
                />
            </div>
        )
    }

}

export default SearchBar
