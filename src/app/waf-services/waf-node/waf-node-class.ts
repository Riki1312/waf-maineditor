import { WafNode } from '../waf-main.service';
import { WafDataService } from '../waf-data.service';

//

export class WafNodeClass {

  constructor(private DataService: WafDataService) { }

  //

  public AddRootNode(node: WafNode, autoSelect?: boolean): void {
    this.DataService.Nodes.push(node);
    if (autoSelect) this.DataService.SelectNodeById(node.idNode);
  }

  public AddNode(parentId: number, node: WafNode): boolean {
    let parent = this.FindNodeById(parentId);
    if (parent.allowChildren) {
      parent.children.push(node);
      return true;
    }
    else return false;
  }

  public DeleteNodeById(id: number): void {
    let parent: WafNode | "root" = this.FindParentNodeById(id);
    let element: WafNode = this.FindNodeById(id);
    let index: number;

    if (parent !== "root") {
      index = parent.children.indexOf(element);
      parent.children.splice(index, 1);
    }
    else {
      index = this.DataService.Nodes.indexOf(element);
      this.DataService.Nodes.splice(index, 1);
    }
  }

  public MoveinNodeById(subjectId: number, receiverId: number): boolean {
    let subjectNode: WafNode = this.FindNodeById(subjectId);
    let receiverNode: WafNode = this.FindNodeById(receiverId);
    let subjectParent: WafNode | "root" = this.FindParentNodeById(subjectId);
    let receiverParent: WafNode | "root" = this.FindParentNodeById(receiverId);

    //Allow children
    let case0: boolean = receiverNode.allowChildren;
    //Himself
    let case1: boolean = subjectId !== receiverId;
    //Inside his son
    let case2: boolean = true;
    //Inside his parent --> special: move in root
    let case3: boolean = true;

    if (receiverParent !== "root")
      case2 = receiverParent.idNode !== subjectId;

    if (subjectParent !== "root" )
      case3 = subjectParent.idNode !== receiverId; //

    if (case0 && case1 && case2) {
      this.DeleteNodeById(subjectId);
      
      if (case3)
        receiverNode.children.push(subjectNode);
      else
        this.DataService.Nodes.push(subjectNode);

      return true;
    }
    else return false;
  }

  public MovenearNodeById(subjectId: number, receiverId: number, indexOffset: number): boolean {
    let subjectNode: WafNode = this.FindNodeById(subjectId);
    let receiverNode: WafNode = this.FindNodeById(receiverId);
    let receiverParent: WafNode | "root" = this.FindParentNodeById(receiverId);

    //Parent receiver allow children
    let case0: boolean = true;
    //Himself
    let case1: boolean = subjectId !== receiverId;
    //Up his son
    let case2: boolean = true;

    if (receiverParent !== "root") {
      case0 = receiverParent.allowChildren;
      case2 = receiverParent.idNode !== subjectId;
    }

    if (case0 && case1 && case2) {
      let receiverIndex: number;
      
      this.DeleteNodeById(subjectId);
      
      if (receiverParent !== "root") {
        receiverIndex = receiverParent.children.indexOf(receiverNode) + indexOffset;
        receiverParent.children.splice(receiverIndex, 0, subjectNode);
      }
      else {
        receiverIndex = this.DataService.Nodes.indexOf(receiverNode) + indexOffset;
        this.DataService.Nodes.splice(receiverIndex, 0, subjectNode);
      }

      return true;
    }
    else return false;
  }

  public EditNodeById(id: number, property: string, value: any): boolean {
    let node = this.FindNodeById(id);
    if (node) {
      node[property] = value;
      return true;
    }
    else return false;
  }

  public FindParentNodeById(id: number): WafNode | "root" {
    let parentNode: WafNode | "root";
    let cycle = (nodes: WafNode[], parent: WafNode | "root") => {
      for (let node of nodes) {
        if (node.idNode === id) {
          parentNode = parent;
        }
        else if (node.allowChildren && node.children.length > 0) {
          cycle(node.children, node);
        }
      }
    }

    cycle(this.DataService.Nodes, "root");
    return parentNode;
  }

  public DeepCycleOnNodes(nodes: WafNode[], fun: (WafNode) => void): void {
    let cycle = (nodes: WafNode[], fun: (WafNode) => void) => {
      for (let node of nodes) {
        if (node.allowChildren && node.children.length > 0) {
          cycle(node.children, fun);
        }
        else {
          fun(node);
        }
      }
    }

    cycle(nodes, fun);
  }

  public FindNodeById(id: number): WafNode {
    let findNodes = (nodes: WafNode[], id: number): WafNode => {
      let nodeFound: WafNode;
      let findNode = (node: WafNode, id: number): void => {
        if (node.idNode === id)
          nodeFound = node;
        else if (node.allowChildren)
          node.children.forEach(x => findNode(x, id));
      }

      nodes.forEach(x => findNode(x, id));
      return nodeFound;
    }

    if (this.DataService.Nodes)
      return findNodes(this.DataService.Nodes, id);
    else
      return undefined;
  }

}
