import { WafMainService, WafNode, StyleData } from '../waf-main.service';
import { WafDataService } from '../waf-data.service';

//

export class WafCodeClass {

  constructor(private MainService: WafMainService, private DataService: WafDataService) { }

  //

  public GetHtmlCode(): string {
    let htmlCode: string;

    let cycle = (nodes: WafNode[]): string => {
      let htmlString: string = "";
      for (let node of nodes) {
        let htmlNode: string = "";

        if (node.allowChildren && node.children.length > 0) {
          htmlNode = `${ this.NodeToSplitHtml(node)[0] } ${ cycle(node.children) } ${ this.NodeToSplitHtml(node)[1] }`;
        }
        else {
          htmlNode = this.NodeToHtmlString(node, node.data.htmlContent);
        }

        htmlString = `${ htmlString }${ htmlNode }`;
      }

      return htmlString;
    }

    htmlCode = this.FormatHtmlCode(cycle(this.DataService.Nodes));
    return htmlCode;
  }

  public GetSelectedHtmlCode(): string {
    let htmlCode: string;

    if (this.DataService.SelectedNode) {
      htmlCode = this.FormatHtmlCode(this.NodeToHtmlString(this.DataService.SelectedNode));
      htmlCode = this.FormatHtmlCode(htmlCode);
    }

    return htmlCode;
  }

  public GetCssCode(wafSpace?: boolean): string {
    let cssCode: string = "";

    for (let style of this.DataService.Styles) {
      let styleString: string = "";

      if (style.cssRules.length > 0)
        styleString = `.${ style.className } {\n${ this.StyledataToCssString(style.cssRules) }}`;

      cssCode = `${ cssCode }${ styleString }`;
    }

    cssCode = `${ this.VariablesToCssString() } ${ this.DataService.CustomGolobalCode } ${ cssCode }`;
    cssCode = this.FormatCssCode(cssCode);
    return cssCode;
  }

  public GetSelectedCssCode(): string {
    let cssCode: string = "";

    if (this.DataService.SelectedNode && this.DataService.SelectedStyle) {
      cssCode = this.StyledataToCssString(this.DataService.SelectedStyle.cssRules);
      cssCode = this.FormatCssCode(cssCode);
    }

    return cssCode;
  }

  public GetFileWafCode(): string {
    let wafCode: string = "";

    let wafData = {
      "wafdata_node": this.DataService.Nodes,
      "wafdata_style": this.DataService.Styles,
      "wafdata_styleVariable": this.DataService.StyleVariables,
      "wafdata_customGolobalCode": this.DataService.CustomGolobalCode,
      "wafsettings": "",
      "wafinfo": ""
    }
    wafCode = JSON.stringify(wafData);

    return wafCode;
  }

  public FormatHtmlCode(htmlCode: string): string {
    return htmlCode
    .replace(/^\s+/g, '')
    .replace(/>/g, '>\n')
    .replace(/</g, '\n<');
  }

  public FormatCssCode(cssCode: string): string {
    return cssCode
    //Removes all spaces except those inside a rule.
    .replace(/^\s+/g, '')
    .replace(/:\s+/g, ':')
    .replace(/;\s+/g, ';')
    .replace(/\n\s+/g, '')
    .replace(/\n/g, '')
    //Recreates correct formatting
    .replace(/:/g, ': ')
    .replace(/: root/g, ':root')
    .replace(/;/g, ';\n')
    .replace(/}/g, '}\n\n')
    .replace(/{/g, '{\n');
  }

  //

  private NodeToHtmlString(node: WafNode, htmlContent?: string): string {
    let htmlString: string = "";
    let classString: string | boolean = this.NodeToClassString(node);

    if (node.data.allowFinaltag) {
      if (classString)
        htmlString = `<${ node.data.htmlTag } class="${ classString }">${ htmlContent ? htmlContent : "" }</${ node.data.htmlTag }>`;
      else
        htmlString = `<${ node.data.htmlTag }>${ htmlContent ? htmlContent : "" }</${ node.data.htmlTag }>`;
    }
    else {
      if (classString)
        htmlString = `<${ node.data.htmlTag } class="${ classString }" />`;
      else
        htmlString = `<${ node.data.htmlTag } />`;
    }

    return htmlString;
  }

  private NodeToSplitHtml(node: WafNode): string[] {
    let htmlString: string[] = [];
    let classString: string | boolean = this.NodeToClassString(node);

    if (node.data.allowFinaltag) {
      if (classString)
        htmlString[0] = `<${ node.data.htmlTag } class="${ classString }">`;
      else
        htmlString[0] = `<${ node.data.htmlTag }>`;
      
      htmlString[1] = `</${ node.data.htmlTag }>`;
    }

    return htmlString;
  }

  private NodeToClassString(node: WafNode): string | boolean {
    if (node.data.className && node.data.className.length > 0)
      return node.data.className.map(x => `${ x }`).reduce((a, b) => `${ a } ${ b }`);
    return false;
  }

  private ComputeBasicWafStyles(): string {
    let cssCode: string = "";

    for (let style of this.MainService.WafBasicStyle)
      if (style.cssRules.length > 0)
        cssCode += `.${ style.className } { ${ this.StyledataToCssString(style.cssRules) } }`;

    return cssCode;
  }

  private StyledataToCssString(styleData: StyleData[]): string {
    let cssString: string = "";

    for (let rule of styleData) {
      cssString = `${ cssString } ${ rule.cssProperty }: ${ rule.cssValue };`;
    }

    return cssString;
  }

  private VariablesToCssString(): string {
    let cssString: string = ":root {";
    let variables: boolean = false;

    for (let styleVar of this.DataService.StyleVariables) {
      if (styleVar.variableName.trim() !== "") {
        cssString += `--${ styleVar.variableName.trim() }: ${ styleVar.variableValue };`;
        variables = true;
      }
    }
    cssString += "}";

    if (variables) return cssString;
    else return "";
  }

}
