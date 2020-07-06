import React from 'react';
import {Grid} from '@material-ui/core';
import Album from "../Album/Album";
import classes from './Albums.module.css';
import {useData} from '../../hoc/useData';

class Albums extends React.Component {

  componentDidMount() {
    const {user} = this.props.match.params;
    this.props.dataActions.fetchAlbums(user);
  }

  render() {
    const {user} = this.props.match.params;
    const {data, dataActions} = this.props;

    return (
      <div className={classes.Albums}>
        <h1 className="h1-title">Albums</h1>
        <button type="button" className="back-btn" onClick={() => this.props.history.goBack()}>Back to Residents</button>
        {data.isLoading ? <p>Loading...</p> :
          <Grid container spacing={3}>
            {data.albums.map(item => <Grid item xs={3} key={item.id}><Album album={item}/></Grid>)}
          </Grid>
        }
        {data.errorDataMessage && <p>Something went wrong. {data.errorDataMessage}. <button onClick={() => dataActions.fetchAlbums(user)}>Please try again!</button></p>}
      </div>
    )
  }
}

export default useData(Albums);