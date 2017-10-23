/**
 * Created by junpingxie on 2017/10/15.
 */
import {getPicture} from 'common/js/native';

export default {
  methods: {
    acShow() {
      this.$action.show();
    },
    library() {
      getPicture({
        sourceType: 'library',
        destinationType: 'base64',
        allowEdit: false,
        quality: 80,
        targetWidth: 200,
        targetHeight: 200
      }).then(path => this.upload(path));
    },
    camera() {
      getPicture({
        destinationType: 'base64',
        allowEdit: false,
        quality: 80,
        targetWidth: 200,
        targetHeight: 200
      }).then(path => this.upload(path));
    },
    upload(path) {
      this.imgoutput(path);
      this.$action.close();
    }
  },
  created() {
    this.$action.init([{
      name: '拍照',
      handle: this.camera
    }, {
      name: '相册',
      handle: this.library
    }]);
  }
};

