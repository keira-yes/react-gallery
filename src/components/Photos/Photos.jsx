import React from 'react';
import {Grid} from '@material-ui/core';
import {useData} from '../../hoc/useData';

class Photos extends React.Component {

  goBack = () => {
    this.props.history.goBack();
  };

  componentDidMount() {
    const {album} = this.props.match.params;
    const {dataActions} = this.props;
    dataActions.fetchPhotos(album);
  }

  render() {
    const {album} = this.props.match.params;
    const {data, dataActions} = this.props;
    return (
      <div>
        <input type="button" value="Back" onClick={this.goBack}/>
        {data.isLoading && <p>Loading...</p>}
        {data.errorFetchPhotos && <p>{data.errorFetchPhotos}. <button onClick={() => dataActions.fetchPhotos(album)}>Try again!</button></p>}
        <Grid container spacing={3}>
          {data.photos.map(item => <Grid item xs={2} key={item.id}><img src={item.thumbnailUrl} alt={item.title}/></Grid>)}
        </Grid>
      </div>
    )
  }
}

export default useData(Photos);