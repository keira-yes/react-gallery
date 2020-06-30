import React from 'react';
import {Grid} from '@material-ui/core';
import classes from './Photos.module.css'
import {useData} from '../../hoc/useData';

class Photos extends React.Component {

  goBack = () => {
    this.props.history.goBack();
  };

  componentDidMount() {
    const {album} = this.props.match.params;
    this.props.dataActions.fetchPhotos(album);
  }

  render() {
    const {album} = this.props.match.params;
    const {data, dataActions} = this.props;
    return (
      <div className={classes.Photos}>
        <h1 className="h1-title">Photos</h1>
        <button type="button" className="back-btn" onClick={this.goBack}>Back to Albums</button>
          {data.isLoading ? <p>Loading...</p> :
          <Grid container spacing={3}>
            {data.photos.map(item => <Grid item xs={2} key={item.id}><img src={item.thumbnailUrl} alt={item.title}/></Grid>)}
          </Grid>
        }
        {data.errorDataMessage && <p>Something went wrong. {data.errorDataMessage}. <button onClick={() => dataActions.fetchPhotos(album)}>Please try again!</button></p>}
      </div>
    )
  }
}

export default useData(Photos);