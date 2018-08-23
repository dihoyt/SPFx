import * as React from 'react';
import { IAnchorLinkProps } from './IAnchorLinkProps';

export default class AnchorLinkReadMode extends React.Component<IAnchorLinkProps, {}> {
  public render(): React.ReactElement<IAnchorLinkProps> {
        return (
          <span id={ this.props.anchortag }></span>
        );
  }
}
