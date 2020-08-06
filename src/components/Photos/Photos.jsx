import React from 'react';
import {Grid} from '@material-ui/core';
import SimpleReactLightbox from 'simple-react-lightbox'
import { SRLWrapper } from "simple-react-lightbox";
import classes from './Photos.module.css'
import {useData} from '../../hoc/useData';

class Photos extends React.Component {

  componentDidMount() {
    console.log(this.props.match)
    const {album_id} = this.props.match.params;
    this.props.dataActions.fetchPhotos(album_id);
  }

  render() {
    const {album_id} = this.props.match.params;
    const {data, dataActions} = this.props;
    return (
      <SimpleReactLightbox>
        <div className={classes.Photos}>
          <h1 className="h1-title">Photos</h1>
          <button type="button" className="back-btn" onClick={() => this.props.history.goBack()}>Back to Albums</button>
          {data.isLoading ? <p>Loading...</p> :
            <SRLWrapper>
              <Grid container spacing={3}>
                {data.photos.map(item => (
                  <Grid item xs={2} key={item.id}>
                    <a href={item.url} data-attribute="SRL">
                      <img src={item.thumbnailUrl} alt={item.title}/>
                    </a>
                  </Grid>
                ))}
              </Grid>
            </SRLWrapper>
          }
          {data.errorDataMessage &&
          <p>Something went wrong. {data.errorDataMessage}.
            <button onClick={() => dataActions.fetchPhotos(album_id)}>Please try again!</button>
          </p>
          }
        </div>
      </SimpleReactLightbox>
    )
  }
}

export default useData(Photos);