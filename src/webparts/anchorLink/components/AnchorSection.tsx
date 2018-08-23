import * as React from 'react';
import styles from './AnchorLink.module.scss';
import { IAnchorSectionProps } from './IAnchorSectionProps';

export default class AnchorSection extends React.Component<IAnchorSectionProps, {}> {
  public render(): React.ReactElement<IAnchorSectionProps> {
    if (this.props.backtotop){
      return (
          <div className={ styles.anchorLink }>
          <span id={ this.props.anchortag }></span>
            <div className={ styles.container }>
              <div className={ styles.sectionHead }>
                  <span className={ styles.column } >
                  <span className={styles.nav}><a href="#top"><i className="ms-Icon ms-Icon--ChevronUpEnd6" style={{color:'white'}} aria-hidden="true"></i></a></span>
                    <span className={ styles.title }>{ this.props.title }</span>
                  </span>
                <div className={ styles.column }>
                  <div className={ styles.subTitle }>{ this.props.subtitle }</div>
                </div>
              </div>
            </div>
          </div>
      );} else {
        return (
          <div className={ styles.anchorLink }>
          <span id={ this.props.anchortag }></span>
            <div className={ styles.container }>
              <div className={ styles.sectionHead }>
                  <span className={ styles.column } >
                    <span className={ styles.title }>{ this.props.title }</span>
                  </span>
                <div className={ styles.column }>
                  <div className={ styles.subTitle }>{ this.props.subtitle }</div>
                </div>
              </div>
            </div>
          </div>
        );}
  }
}
