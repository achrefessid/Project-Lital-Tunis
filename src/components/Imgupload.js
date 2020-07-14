import React, { Component } from 'react';
import { CustomInput, FormGroup } from 'reactstrap';

export default class Imgupload extends Component {  
  state = {
    fileName: '',
    invalidFile: false,
  }

  handleFileChange = this.handleFileChange.bind(this);
  handleFileChange({target: {files}}) {
    const cancel = !files.length;
    if (cancel) return;

    const [{ size, name }] = files;
    const maxSize = 50000;

    if (size < maxSize) {
      this.setState({ fileName: name, invalidFile: false });
    } else {
      this.setState({ fileName: '', invalidFile: true });
    }
  }

  render() {
    const { fileName, invalidFile } = this.state;
    return (
      <FormGroup>
        <CustomInput
          type="file"
          id="exampleCustomFileBrowser"
          name="customFile"
          label={fileName || 'choose an image file'}
          onChange={this.handleFileChange}
          invalid={invalidFile} />
      </FormGroup>
    );
  }
}
