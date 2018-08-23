import { ColorPicker } from 'office-ui-fabric-react/lib/ColorPicker';
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version, DisplayMode } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneToggle,
} from '@microsoft/sp-webpart-base';

import * as strings from 'AnchorLinkWebPartStrings';
import AnchorLink from './components/AnchorLink';
import AnchorLinkReadMode from './components/AnchorLinkReadMode';
import AnchorSection from './components/AnchorSection';
import { IAnchorLinkProps } from './components/IAnchorLinkProps';
import { IAnchorSectionProps } from './components/IAnchorSectionProps';
import { IAnchorLinkWebPartProps } from './IAnchorLinkWebPartProps';





export default class AnchorLinkWebPart extends BaseClientSideWebPart<IAnchorLinkWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IAnchorLinkProps > = React.createElement(
      AnchorLink,
      {
        description: this.properties.description,
        anchortag: this.properties.anchortag,
        removePadding: this.properties.removePadding,
        title: this.properties.title,
        showtitle: this.properties.showtitle,
        subtitle: this.properties.subtitle
      });
    const readelement: React.ReactElement<IAnchorLinkProps > = React.createElement(
      AnchorLinkReadMode,
      {
        description: this.properties.description,
        anchortag: this.properties.anchortag,
        removePadding: this.properties.removePadding,
        title: this.properties.title,
        showtitle: this.properties.showtitle,
        subtitle: this.properties.subtitle
      });
    const sectionheadelement: React.ReactElement<IAnchorSectionProps > = React.createElement(
      AnchorSection,
      {
        description: this.properties.description,
        anchortag: this.properties.anchortag,
        bgcolor: this.properties.bgcolor,
        sectiontextcolor: this.properties.sectiontextcolor,
        removePadding: this.properties.removePadding,
        title: this.properties.title,
        showtitle: this.properties.showtitle,
        subtitle: this.properties.subtitle,
        backtotop: this.properties.backtotop,
      });


      if (this.displayMode == DisplayMode.Read) {
        // Show title true
        if (this.properties.showtitle) {
          this.domElement.parentElement.parentElement.parentElement.style.paddingTop = "";
          this.domElement.parentElement.parentElement.parentElement.style.paddingBottom = "";
          ReactDom.render(sectionheadelement, this.domElement);
        } else { // Show title false
          if (this.properties.removePadding) { // Remove Padding true
            this.domElement.parentElement.parentElement.parentElement.style.paddingTop = "0";
            this.domElement.parentElement.parentElement.parentElement.style.paddingBottom = "0";
          } else { // Remove Padding false
            this.domElement.parentElement.parentElement.parentElement.style.paddingTop = "";
            this.domElement.parentElement.parentElement.parentElement.style.paddingBottom = "";
          }
          ReactDom.render(readelement, this.domElement);
        }
      } else {
        if (this.properties.showtitle){
          ReactDom.render(sectionheadelement, this.domElement);
        } else {
          ReactDom.render(element, this.domElement);
        }
     }
  }

  // The intent is to render this in the property pane, having trouble importing "PropertyPaneCustomField"
  private renderInfo(domElement: HTMLElement) {
    domElement.innerHTML = `
  <div style="margin-top: 30px">
    <div style="float:right">This web part is hidden in read mode. To link to this part of the page, create a hyperlink and set the location to #yourtag</div>
  </div>`;
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }


  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    if (this.properties.showtitle) { // Show title true
      return {
        pages: [
          {
            groups: [
              {
                groupName: strings.BasicGroupName,
                groupFields: [
                  PropertyPaneTextField('anchortag', {
                    label: "Anchor Tag (to link to this add #yourtag to the hyperlink location)",
                  }),
                  PropertyPaneToggle("showtitle", {
                    label: "Visible in Read Mode",
                    onText: "Show",
                    checked: this.properties.showtitle,
                    offText: "Hide"
                  }),
                  PropertyPaneToggle("backtotop", {
                    label: "Include back to top.",
                    checked: this.properties.backtotop
                  }),
                  PropertyPaneTextField("title", {
                    label: "Section Title"
                  }),
                  PropertyPaneTextField("subtitle", {
                    label: "Subtitle (not required)"
                  })
                ]
              }
            ]
          }
        ]
      };
    } else { // Show title false
    return {
      pages: [
        {
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('anchortag', {
                  label: "Anchor Tag (to link to this add #yourtag to the hyperlink location)",
                }),
                PropertyPaneToggle("showtitle", {
                  label: "Visible in Read Mode",
                  onText: "Show",
                  checked: this.properties.showtitle,
                  offText: "Hide"
                }),
                PropertyPaneToggle("removePadding", {
                  label: "",
                  checked: this.properties.removePadding,
                  onText: "Remove padding",
                  offText: "Keep padding"
                }),
                PropertyPaneTextField('description', {
                  label: "Description (only visible in edit mode)"
                })
              ]
            }
          ]
        }
      ]
    };}
  }
}
