import * as React from 'react';
import styles from './AnchorLink.module.scss';
import { IAnchorLinkProps } from './IAnchorLinkProps';

export default class AnchorLink extends React.Component<IAnchorLinkProps, {}> {
  public render(): React.ReactElement<IAnchorLinkProps> {
      return (
        <div className={ styles.anchorLink }>
          <div className={ styles.container }>
            <div className={ styles.row }>
              <div className={ styles.column }>
              <span id={ this.props.anchortag }>{"#" + this.props.anchortag}</span>
              </div>
              <div className={ styles.column }>{this.props.description}</div>
              <div className={ styles.column }>This web part is only visible in Edit Mode.</div>
            </div>
          </div>
        </div>
      );
  }
}
