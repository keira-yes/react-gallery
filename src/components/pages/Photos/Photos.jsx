import React from 'react';
import {Grid} from '@material-ui/core';
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox'
import classes from './Photos.module.css'
import {withPhotos} from '../../../hoc/withPhotos';

class Photos extends React.Component {

  componentDidMount() {
    const {album_id} = this.props.match.params;
    this.props.photosActions.fetchPhotos(album_id);
  }

  render() {
    const {album_id} = this.props.match.params;
    const {photos, photosActions} = this.props;
    return (
      <SimpleReactLightbox>
        <div className={classes.Photos}>
          <h1 className="h1-title">Photos</h1>
          <button type="button" className="back-btn" onClick={() => this.props.history.goBack()}>Back to Albums</button>
          {photos.isLoading ? <p>Loading...</p> :
            <SRLWrapper>
              <Grid container spacing={3}>
                {photos.photos.map(item => (
                  <Grid item xs={2} key={item.id}>
                    <a href={item.url} data-attribute="SRL">
                      <img src={item.thumbnailUrl} alt={item.title}/>
                    </a>
                  </Grid>
                ))}
              </Grid>
            </SRLWrapper>
          }
          {photos.isError &&
          <p>Something went wrong. <button onClick={() => photosActions.fetchPhotos(album_id)}>Please try again!</button></p>
          }
        </div>
      </SimpleReactLightbox>
    )
  }
}

export default withPhotos(Photos);