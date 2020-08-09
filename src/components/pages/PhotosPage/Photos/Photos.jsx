import React from 'react';
import {Grid} from '@material-ui/core';
import { SRLWrapper } from 'simple-react-lightbox'
import {withPhotos} from '../../../../hoc/withPhotos';
import Loader from "../../../UIComponents/Loader/Loader";
import ErrorMessage from "../../../UIComponents/ErrorMessage/ErrorMessage";

class Photos extends React.Component {

  componentDidMount() {
    const {album_id} = this.props;
    this.props.photosActions.fetchPhotos(album_id);
  }

  render() {
    const {photos, photosActions, album_id} = this.props;

    return (
      <>
        {photos.isLoading ? <Loader /> :

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

        {photos.isError && <ErrorMessage reloadData={photosActions.fetchPhotos(album_id)} /> }
      </>
    )
  }
}

export default withPhotos(Photos);